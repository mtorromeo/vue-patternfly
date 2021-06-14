import {h, mergeProps} from 'vue';

export function render(styleClass, modifiers) {
  return h(this.component, mergeProps({
    class: [styleClass, {[modifiers.gutter]: this.gutter}],
  }, this.$attrs), this.$slots);
}
