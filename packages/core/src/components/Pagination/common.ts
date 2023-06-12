export interface PerPageOption {
  title: string,
  value: number,
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
  defaultToFullPage?: boolean;
  /** Flag indicating if pagination is disabled */
  disabled?: boolean;
  /** Flag indicating that the dropdown context menu should "drop" upwards. */
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
