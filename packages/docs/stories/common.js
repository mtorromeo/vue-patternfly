export const inputValidationProps = {
  movelValue: {
    type: {
      name: 'string',
      required: false,
    },
    table: {
      category: 'props',
      type: { summary: 'string | number' },
      defaultValue: { summary: 'null' },
    },
  },
  autoValidate: {
    table: {
      category: 'props',
      type: { summary: 'string' },
      defaultValue: { summary: '"change"' },
    },
    control: {
      type: 'select',
    },
    options: ['blur', 'input', 'change', 'enter'],
  },
  validated: {
    description: `Value to indicate if the textarea is modified to show that validation state.
If set to success, textarea will be modified to indicate valid state.
If set to error, textarea will be modified to indicate error state.`,
    table: {
      category: 'props',
      type: { summary: 'string' },
      defaultValue: { summary: 'null' },
    },
    control: {
      type: 'select',
    },
    options: [null, 'default', 'success', 'warning', 'error'],
  },
};
