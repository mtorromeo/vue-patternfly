import { h, mergeProps, resolveDynamicComponent } from 'vue';

export function render(styleClass, modifiers) {
  return h(resolveDynamicComponent(this.component), mergeProps({
    class: [styleClass, { [modifiers.gutter]: this.gutter }],
  }, this.$attrs), this.$slots);
}
