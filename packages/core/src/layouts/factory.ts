import { h, resolveDynamicComponent, DefineComponent, ComponentPublicInstance } from 'vue';

type LayoutComponent = ComponentPublicInstance<{
  component: string | DefineComponent;
  gutter: boolean;
}>;

export function render(this: LayoutComponent, styleClass: string, modifiers: Record<string, string>) {
  const component = resolveDynamicComponent(this.component) as DefineComponent;
  return h(component, {
    class: [styleClass, { [modifiers.gutter]: this.gutter }],
  }, this.$slots);
}
