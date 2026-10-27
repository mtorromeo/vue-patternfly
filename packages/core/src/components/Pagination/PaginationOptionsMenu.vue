<template>
  <div v-bind="ouiaProps" ref="elRef" :class="styles.paginationPageMenu">
    <pf-menu-toggle
      :id="widgetId ? `${widgetId}-toggle` : undefined"
      ref="toggleRef"
      v-model:expanded="open"
      :aria-label="optionsToggle || undefined"
      :disabled="disabled || (count !== undefined && count <= 0)"
      variant="plainText"
      aria-haspopup="listbox"
      @keydown="onKeydown"
    >
      <slot
        name="toggle"
        :first-index="firstIndex"
        :last-index="lastIndex"
        :count="count"
        :title-items="itemsTitle"
        :of-word="ofWord ?? messages.paginationOf"
      >
        <b>{{ firstIndex }} - {{ lastIndex }}</b> {{ ofWord ?? messages.paginationOf }}
        <b>{{ count }}</b>
        {{ itemsTitle }}
      </slot>
    </pf-menu-toggle>

    <floating-ui
      :hidden="!open"
      :teleport-to="appendTo"
      :reference="el"
      :placement="dropUp ? 'top-start' : 'bottom-start'"
      flip
    >
      <div ref="menuRef" @keydown="onKeydown">
        <pf-menu v-bind="$attrs" @select="onSelect">
          <pf-menu-content>
            <pf-menu-item
              v-for="o of perPageOptions"
              :key="o.value"
              :data-action="`per-page-${o.value}`"
              :selected="perPage === o.value"
              component="button"
              @click="selectPerPage(o.value)"
            >
              {{ o.title }}
              {{ ` ${perPageSuffix ?? messages.paginationPerPageSuffix}` }}
            </pf-menu-item>
          </pf-menu-content>
        </pf-menu>
      </div>
    </floating-ui>
  </div>
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    CommonPaginationProps,
    /* @vue-ignore */ Omit<ComponentProps<typeof PfMenu>, 'onSelect' | 'ouiaId' | 'ouiaSafe'> {
  /** The total number of items being paginated, undefined when unknown */
  count?: number;
  /** The first index of the items being paginated */
  firstIndex?: number;
  /** The last index of the items being paginated */
  lastIndex?: number;
  /** The title of the pagination options menu. Defaults to the `paginationItemsPerPage` message. */
  itemsPerPageTitle?: string;
  /** The suffix to be displayed after each option on the options menu dropdown. Defaults to the `paginationPerPageSuffix` message. */
  perPageSuffix?: string;
  /** The type or title of the items being paginated */
  itemsTitle?: string;
  /** Accessible label for the options toggle */
  optionsToggle?: string;
  /** Label for the English word "of". Defaults to the `paginationOf` message. */
  ofWord?: string;
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { usePfMessages } from '../../messages';
import PfMenu from '../Menu/Menu.vue';
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import PfMenuItem from '../Menu/MenuItem.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import { defaultPerPageOptions, type CommonPaginationProps, type PaginationToggleTemplateProps } from './common';
import { nextTick, ref, watch, type RendererElement, type VNode, useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfPaginationOptionsMenu',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  count: undefined,
  firstIndex: 0,
  lastIndex: 0,
  optionsToggle: '',
  page: 0,
  perPage: defaultPerPageOptions[0]?.value,
  perPageOptions: () => [...defaultPerPageOptions],
  widgetId: 'pagination-options-menu',
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Content of the toggle */
  toggle?: (props: PaginationToggleTemplateProps) => VNode[];
}>();

const emit = defineEmits<{
  (name: 'update:perPage', value: number): void;
  (name: 'update:page', value: number): void;
  /** A per page value was selected, with the resulting page and the start and end indexes of its items */
  (name: 'perPageSelect', perPage: number, page: number, startIdx: number, endIdx: number): void;
}>();

const open = ref(false);
const el = useTemplateRef('elRef');
const toggle = useTemplateRef('toggleRef');
const menu = useTemplateRef('menuRef');

// focus the first enabled item when the menu opens
watch(open, async isOpen => {
  if (isOpen) {
    await nextTick();
    menu.value?.querySelector<HTMLElement>('li button:not(:disabled)')?.focus({ preventScroll: true });
  }
});

onClickOutside(menu, () => (open.value = false), { ignore: [el] });

function close() {
  open.value = false;
  toggle.value?.focus();
}

// Escape and Tab close the menu, returning the focus to the toggle
function onKeydown(e: KeyboardEvent) {
  if (open.value && (e.key === 'Escape' || e.key === 'Tab')) {
    close();
  }
}

function selectPerPage(perPage: number) {
  let page = props.page;
  if (props.count !== undefined) {
    while (page > 1 && Math.ceil(props.count / perPage) < page) {
      page--;
    }
    if (props.lastFullPageShown && props.count / perPage !== page) {
      while (page > 1 && props.count - perPage * page < 0) {
        page--;
      }
    }
  }
  emit('update:perPage', perPage);
  if (page !== props.page) {
    emit('update:page', page);
  }
  emit('perPageSelect', perPage, page, (page - 1) * perPage, page * perPage);
}

function onSelect() {
  close();
}
</script>
