<template>
  <component
    :is="component"
    v-bind="ouiaProps"
    :class="[styles.content, {
      [styles.modifiers.visited]: visited,
      [styles.modifiers.plain]: plainList && ['ul', 'ol', 'dl'].includes(component),
      [styles.modifiers.editorial]: editorial,
      [styles.content]: component === 'div',
      [styles.contentH1]: component === 'h1',
      [styles.contentH2]: component === 'h2',
      [styles.contentH3]: component === 'h3',
      [styles.contentH4]: component === 'h4',
      [styles.contentH5]: component === 'h5',
      [styles.contentH6]: component === 'h6',
      [styles.contentP]: component === 'p',
      [styles.contentA]: component === 'a',
      [styles.contentSmall]: component === 'small',
      [styles.contentBlockquote]: component === 'blockquote',
      [styles.contentPre]: component === 'pre',
      [styles.contentHr]: component === 'hr',
      [styles.contentUl]: component === 'ul',
      [styles.contentOl]: component === 'ol',
      [styles.contentDl]: component === 'dl',
      [styles.contentLi]: component === 'li',
      [styles.contentDt]: component === 'dt',
      [styles.contentDd]: component === 'dd',
    }]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Content/content';
import type { AnchorHTMLAttributes, BlockquoteHTMLAttributes, LiHTMLAttributes, OlHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfContent',
});

interface Props extends
  OUIAProps,
  /* @vue-ignore */ AnchorHTMLAttributes,
  /* @vue-ignore */ BlockquoteHTMLAttributes,
  /* @vue-ignore */ LiHTMLAttributes,
  /* @vue-ignore */ Omit<OlHTMLAttributes, 'type'> {
  /** The content component. If none provided, it will be a 'div' and styling will be applied to all its child components. */
  component?:
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'a'
    | 'small'
    | 'blockquote'
    | 'pre'
    | 'hr'
    | 'ul'
    | 'ol'
    | 'dl'
    | 'li'
    | 'dt'
    | 'dd';
  /** Modifies the list (ul, ol and dl components) to have plain styling. */
  plainList?: boolean;
  /** Flag to indicate the link (or all links within the content) has visited styles applied if the browser determines the link has been visited. */
  visited?: boolean;
  /** Flag to indicate the content has editorial styling. This styling increases the font size of body text and small text by one tier, increasing body text to large and small text to the previous body text size.  */
  editorial?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
