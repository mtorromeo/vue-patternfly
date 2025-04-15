<template>
  <div v-bind="ouiaProps" ref="el">
    <pf-menu-toggle
      :id="widgetId ? `${widgetId}-toggle` : undefined"
      ref="toggle"
      v-model:expanded="open"
      :disabled="disabled || Boolean(count && count <= 0)"
      variant="plainText"
      aria-haspopup="listbox"
    >
      <b>{{ firstIndex }} - {{ lastIndex }}</b> of
      <b>{{ count }}</b>
      {{ itemsTitle }}
    </pf-menu-toggle>

    <floating-ui :teleport-to="appendTo" :reference="el" flip>
      <pf-menu v-if="open" v-bind="$attrs" @select="onSelect">
        <pf-menu-content>
          <pf-menu-item
            v-for="o of perPageOptions"
            :key="o.title"
            :data-action="`per-page-${o.value}`"
            :selected="perPage === o.value"
            component="button"
            @click="emit('update:perPage', o.value)"
          >
            {{ o.title }}
            {{ ` ${perPageSuffix}` }}
          </pf-menu-item>
        </pf-menu-content>
      </pf-menu>
    </floating-ui>
  </div>
</template>

<script lang="ts" setup>
import PfMenu, {
  type Props as MenuProps,
} from '../Menu/Menu.vue';
import PfMenuToggle from '../MenuToggle/MenuToggle.vue';
import PfMenuContent from '../Menu/MenuContent.vue';
import PfMenuItem from '../Menu/MenuItem.vue';
import FloatingUi from '../../helpers/FloatingUi.vue';
import { defaultPerPageOptions, type CommonPaginationProps } from './common';
import { ref, type RendererElement, useTemplateRef } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPaginationOptionsMenu',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, CommonPaginationProps, /* @vue-ignore */ Omit<MenuProps, 'onSelect'> {
  count?: number;
  firstIndex?: number;
  lastIndex?: number;
  itemsPerPageTitle?: string;
  perPageSuffix?: string;
  itemsTitle?: string;
  optionsToggle?: string;
  /** Element or selector where to render the floating menu */
  appendTo?: 'inline' | string | RendererElement | null | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
  firstIndex: 0,
  lastIndex: 0,
  itemsPerPageTitle: 'Items per page',
  perPageSuffix: 'per page',
  optionsToggle: 'Items per page',
  page: 0,
  perPage: defaultPerPageOptions[0].value,
  perPageOptions: () => [...defaultPerPageOptions],
  widgetId: 'pagination-options-menu',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  (name: 'update:perPage', value: number): void;
}>();

const open = ref(false);
const el = useTemplateRef('el');
const toggle = useTemplateRef('toggle');

function onSelect() {
  open.value = !open.value;
  toggle.value?.focus();
}
</script>
