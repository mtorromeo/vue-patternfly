import {h, mergeProps} from 'vue';

export default (name, styleClass, modifiers) => {
  const Layout = (props, {slots, attrs}) => h(props.component, mergeProps({class: [styleClass, {[modifiers.gutter]: props.gutter}]}, attrs), slots.default());

  Layout.props = {
    component: {
      type: String,
      default: 'div',
    },
    gutter: Boolean,
  };

  Layout.inheritAttrs = false;

  Object.defineProperty(Layout, 'name', {writable: true});
  Layout.name = name;

  return Layout;
};
