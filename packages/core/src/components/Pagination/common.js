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
  /** Indicate whether to show last full page of results when user selects perPage value greater than remaining rows */
  defaultToFullPage: Boolean,
  /** Flag indicating if pagination is disabled */
  disabled: Boolean,
  /** Flag indicating that the dropdown context menu should "drop" upwards. */
  dropUp: Boolean,

  /** Current page number. */
  page: {
    type: Number,
    default: 0,
  },
  /** Number of items per page. */
  perPage: {
    type: Number,
    default: defaultPerPageOptions[0].value,
  },
  /** Select from options to number of items per page. */
  perPageOptions: {
    type: Array,
    default: defaultPerPageOptions,
  },

  /** ID to ideintify widget on page. */
  widgetId: {
    type: String,
    default: 'pagination-options-menu',
  },
};
