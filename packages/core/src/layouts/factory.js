import { h, resolveDynamicComponent } from 'vue';

export function render(styleClass, modifiers) {
  return h(resolveDynamicComponent(this.component), {
    class: [styleClass, { [modifiers.gutter]: this.gutter }],
  }, this.$slots);
}
