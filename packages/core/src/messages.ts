import { computed, inject, provide, toValue, type App, type InjectionKey, type MaybeRefOrGetter, type Ref } from 'vue';

/**
 * Default texts of the components, mostly accessible names. A prop setting the same text on a component wins over
 * its message.
 */
export interface PfMessages {
  /**
   * Screen reader label of the variant of PfAlert, like "Danger alert:". It receives the capitalized variant, or the
   * variantLabel of PfAlertActionCloseButton.
   */
  alertVariantLabel: (variant: string) => string;
  /** Accessible name of the toggle of an expandable PfAlert, from its capitalized variant */
  alertToggle: (variant: string) => string;
  /** Accessible name of the close button of PfAlert, from the variant label and the title */
  alertClose: (variantLabel: string, title?: string) => string;
  breadcrumb: string;
  /** Accessible name of PfCloseButton */
  close: string;
  dataListToggle: string;
  drawerClose: string;
  drawerResize: string;
  dualListSelectorControls: string;
  fileUpload: string;
  fileUploadFilenamePlaceholder: string;
  fileUploadReadOnlyFilename: string;
  fileUploadBrowse: string;
  fileUploadClear: string;
  fileUploadTooManyFiles: string;
  fileUploadInvalidType: (accepted: string) => string;
  fileUploadTooLarge: (maxSize: number) => string;
  fileUploadTooSmall: (minSize: number) => string;
  /** Screen reader text of a PfHelperTextItem with a variant */
  helperTextStatus: (variant: string) => string;
  iconProgress: string;
  jumpLinksToggle: string;
  /** Accessible name of the close button of PfLabel, from the text of the label */
  labelClose: (text?: string) => string;
  labelGroupClose: string;
  labelGroupCategory: string;
  labelGroupShowLess: string;
  /** Template of the overflow label of PfLabelGroup, with "${remaining}" for the count of hidden labels */
  labelGroupMore: string;
  menuFavorites: string;
  menuToggle: string;
  navGlobal: string;
  navLocal: string;
  navScrollBack: string;
  navScrollForward: string;
  notificationDrawerTitle: string;
  notificationDrawerUnread: string;
  notificationDrawerClose: string;
  pageToggle: string;
  pagination: string;
  paginationItemsPerPage: string;
  paginationPerPageSuffix: string;
  paginationOf: string;
  paginationFirstPage: string;
  paginationPreviousPage: string;
  paginationNextPage: string;
  paginationLastPage: string;
  paginationCurrentPage: string;
  popoverClose: string;
  searchInput: string;
  searchInputReset: string;
  searchInputSubmit: string;
  searchInputWords: string;
  searchInputOpenMenu: string;
  searchInputPrevious: string;
  searchInputNext: string;
  /** Appended to the results count of PfSearchInput */
  searchInputResults: string;
  selectLabel: string;
  sliderInput: string;
  sliderThumb: string;
  spinner: string;
  spinnerValueText: string;
  tabAction: string;
  tabClose: string;
  tabsScrollBack: string;
  tabsScrollForward: string;
  tabsAdd: string;
  tabsMore: string;
  textInputGroupMain: string;
  textareaPatternMismatch: string;
  toolbarClearFilters: string;
  toolbarFiltersApplied: (count: number) => string;
  toolbarShowFilters: string;
  wizardToggle: string;
  wizardSteps: string;
  wizardNext: string;
  wizardBack: string;
  wizardCancel: string;
  wizardStepToggle: (expanded: boolean) => string;
  wizardBodyContent: (stepName?: string) => string;

  /** Accessible name of a PfTh of the selection column */
  thRowSelect: string;
  thSelectAll: string;
  thExpandAll: string;
  thSortFavorites: string;
  thInfo: string;
  /** Accessible name of the selection checkbox or radio of a row, with its index when set */
  tdSelectRow: (rowIndex?: number) => string;
  tdTreeToggle: (expanded: boolean, rowIndex?: number) => string;
  tdTreeCheckbox: (rowIndex?: number) => string;
  tdShowDetails: string;
  tdDetails: string;
  tdFavorite: (favorited: boolean) => string;
  tdDragButton: string;
  trSelected: string;
  actionsColumnToggle: string;
}

const row = (rowIndex?: number) => (rowIndex !== undefined ? ` ${rowIndex}` : '');

export const defaultMessages: PfMessages = {
  alertVariantLabel: variant => `${variant} alert:`,
  alertToggle: variant => `${variant} alert details`,
  alertClose: (variantLabel, title) => `Close ${variantLabel} ${title}`,
  breadcrumb: 'Breadcrumb',
  close: 'Close',
  dataListToggle: 'Details',
  drawerClose: 'Close drawer panel',
  drawerResize: 'Resize',
  dualListSelectorControls: 'Controls for moving options between lists',
  fileUpload: 'File upload',
  fileUploadFilenamePlaceholder: 'Drag a file here or browse to upload',
  fileUploadReadOnlyFilename: 'Read only filename',
  fileUploadBrowse: 'Browse...',
  fileUploadClear: 'Clear',
  fileUploadTooManyFiles: 'Too many files',
  fileUploadInvalidType: accepted => `File type must be ${accepted}`,
  fileUploadTooLarge: maxSize => `File is larger than ${maxSize} bytes`,
  fileUploadTooSmall: minSize => `File is smaller than ${minSize} bytes`,
  helperTextStatus: variant => `${variant} status`,
  iconProgress: 'Loading...',
  jumpLinksToggle: 'Toggle jump links',
  labelClose: text => ['Close', text].filter(Boolean).join(' '),
  labelGroupClose: 'Close label group',
  labelGroupCategory: 'Label group category',
  labelGroupShowLess: 'Show Less',
  labelGroupMore: '${remaining} more',
  menuFavorites: 'Favorites',
  menuToggle: 'Menu toggle',
  navGlobal: 'Global',
  navLocal: 'Local',
  navScrollBack: 'Scroll back',
  navScrollForward: 'Scroll forward',
  notificationDrawerTitle: 'Notifications',
  notificationDrawerUnread: 'unread',
  notificationDrawerClose: 'Close',
  pageToggle: 'Side navigation toggle',
  pagination: 'Pagination',
  paginationItemsPerPage: 'Items per page',
  paginationPerPageSuffix: 'per page',
  paginationOf: 'of',
  paginationFirstPage: 'Go to first page',
  paginationPreviousPage: 'Go to previous page',
  paginationNextPage: 'Go to next page',
  paginationLastPage: 'Go to last page',
  paginationCurrentPage: 'Current page',
  popoverClose: 'Close',
  searchInput: 'Search input',
  searchInputReset: 'Reset',
  searchInputSubmit: 'Search',
  searchInputWords: 'Has words',
  searchInputOpenMenu: 'Open advanced search',
  searchInputPrevious: 'Previous',
  searchInputNext: 'Next',
  searchInputResults: ' results',
  selectLabel: 'Select a value',
  sliderInput: 'Slider value input',
  sliderThumb: 'Value',
  spinner: 'Contents',
  spinnerValueText: 'Loading...',
  tabAction: 'Tab action',
  tabClose: 'Close tab',
  tabsScrollBack: 'Scroll back',
  tabsScrollForward: 'Scroll forward',
  tabsAdd: 'Add tab',
  tabsMore: 'More',
  textInputGroupMain: 'Type to filter',
  textareaPatternMismatch: 'Please match the format requested.',
  toolbarClearFilters: 'Clear all filters',
  toolbarFiltersApplied: count => `${count} filters applied`,
  toolbarShowFilters: 'Show Filters',
  wizardToggle: 'Wizard toggle',
  wizardSteps: 'Wizard steps',
  wizardNext: 'Next',
  wizardBack: 'Back',
  wizardCancel: 'Cancel',
  wizardStepToggle: expanded => `${expanded ? 'Collapse' : 'Expand'} step icon`,
  wizardBodyContent: stepName => `${stepName} content`,

  thRowSelect: 'Row select',
  thSelectAll: 'Select all rows',
  thExpandAll: 'Expand all rows',
  thSortFavorites: 'Sort favorites',
  thInfo: 'More info',
  tdSelectRow: rowIndex => `Select row${row(rowIndex)}`,
  tdTreeToggle: (expanded, rowIndex) => `${expanded ? 'Collapse' : 'Expand'} row${row(rowIndex)}`,
  tdTreeCheckbox: rowIndex => `Row${row(rowIndex)} checkbox`,
  tdShowDetails: 'Show row details',
  tdDetails: 'Details',
  tdFavorite: favorited => (favorited ? 'Starred' : 'Not starred'),
  tdDragButton: 'Draggable row draggable button',
  trSelected: 'Row selected',
  actionsColumnToggle: 'Kebab toggle',
};

export const PfMessagesKey = Symbol('PfMessagesKey') as InjectionKey<Readonly<Ref<PfMessages>>>;

const defaultMessagesRef = computed(() => defaultMessages);

/** Messages of the components: the ones provided by the closest ancestor, or the defaults */
export function usePfMessages(): Readonly<Ref<PfMessages>> {
  return inject(PfMessagesKey, defaultMessagesRef);
}

function mergedMessages(parent: Readonly<Ref<PfMessages>>, messages: MaybeRefOrGetter<Partial<PfMessages>>) {
  return computed((): PfMessages => ({ ...parent.value, ...toValue(messages) }));
}

/**
 * Overrides some messages for the descendants of the current component, on top of the ones of its ancestors.
 * A ref or a getter keeps them reactive, to switch language at runtime.
 */
export function providePfMessages(messages: MaybeRefOrGetter<Partial<PfMessages>>) {
  const merged = mergedMessages(usePfMessages(), messages);
  provide(PfMessagesKey, merged);
  return merged;
}

/** Overrides some messages for the whole app, like the messages option of the plugin */
export function providePfAppMessages(app: App, messages: MaybeRefOrGetter<Partial<PfMessages>>) {
  app.provide(PfMessagesKey, mergedMessages(defaultMessagesRef, messages));
}
