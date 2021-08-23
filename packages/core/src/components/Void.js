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

Object.defineProperty(Void, 'name', { value: 'Void', writable: false });

export default Void;
