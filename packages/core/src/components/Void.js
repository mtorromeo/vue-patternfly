const Void = (props, { slots }) => {
  let children = slots.default();
  if (props.alter) {
    children = props.alter(children);
  }
  return children;
};

Void.props = {
  alter: {
    type: Function,
    default: null,
  },
};

Void.inheritAttrs = false;
export default Void;
