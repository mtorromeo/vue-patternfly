export function argTypesFromProps(props) {
  const args = {};
  for (let [k, prop] of Object.entries(props)) {
    const arg = {
      type: {
        name: 'string',
        required: false,
      },
      table: {
        category: 'props',
        type: {},
      },
    };
    if (typeof prop === 'function') {
      prop = {type: prop};
    }
    if (typeof prop.type !== 'undefined') {
      let propType = null;
      if (Array.isArray(prop.type)) {
        propType = prop.type.map(t => t.name.toLowerCase()).join(' | ');
      } else {
        propType = prop.type.name.toLowerCase();
      }
      arg.type.name = arg.table.type.summary = propType;
    }
    if (typeof prop.required !== 'undefined') {
      arg.type.required = prop.required;
    }
    if (typeof prop.default !== 'undefined') {
      arg.defaultValue = prop.default;
      arg.table.defaultValue = {summary: JSON.stringify(prop.default)};
    }
    args[k] = arg;
  }
  return args;
}
