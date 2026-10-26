export interface PerPageOption {
  title: string;
  value: number;
}

export const defaultPerPageOptions: PerPageOption[] = [
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

export interface CommonPaginationProps {
  /** Indicate whether to show last full page of results when user selects perPage value greater than remaining rows */
  lastFullPageShown?: boolean;
  /** Flag indicating if pagination is disabled */
  disabled?: boolean;
  /** Flag indicating that the options menu should "drop" upwards. Defaults to upwards for non static bottom paginations. */
  dropUp?: boolean;

  /** Current page number. */
  page?: number;

  /** Number of items per page. */
  perPage?: number;

  /** Select from options to number of items per page. */
  perPageOptions?: PerPageOption[];

  /** ID to ideintify widget on page. */
  widgetId?: string;
}

/** The values available to the template of the pagination toggle and total items */
export interface PaginationToggleTemplateProps {
  /** The first index of the items being paginated */
  firstIndex: number;
  /** The last index of the items being paginated */
  lastIndex: number;
  /** The total number of items being paginated, undefined when unknown */
  count?: number;
  /** The type or title of the items being paginated */
  titleItems?: string;
  /** The word that joins the index and the count */
  ofWord: string;
}
