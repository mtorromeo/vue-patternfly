const defaultPerPageOptions = [
  {
    title: '10',
    value: 10,
  },
  {
    title: '20',
    value: 20,
  },
  {
    title: '50',
    value: 50,
  },
  {
    title: '100',
    value: 100,
  },
];

export const paginationProps = {
  defaultToFullPage: Boolean,
  disabled: Boolean,
  dropUp: Boolean,

  page: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: defaultPerPageOptions[0].value,
  },
  perPageOptions: {
    type: Array,
    default: defaultPerPageOptions,
  },

  widgetId: {
    type: String,
    default: 'pagination-options-menu',
  },
};
