declare module 'vue' {
  export interface GlobalComponents {
    PfAvatar: typeof import('@vue-patternfly/core').PfAvatar,
    PfBackdrop: typeof import('@vue-patternfly/core').PfBackdrop,
    PfBadge: typeof import('@vue-patternfly/core').PfBadge,
    PfBrand: typeof import('@vue-patternfly/core').PfBrand,
    PfButton: typeof import('@vue-patternfly/core').PfButton,
    PfCheckbox: typeof import('@vue-patternfly/core').PfCheckbox,
    PfCloseButton: typeof import('@vue-patternfly/core').PfCloseButton,
    PfDivider: typeof import('@vue-patternfly/core').PfDivider,
    PfLabel: typeof import('@vue-patternfly/core').PfLabel,
    PfNotificationBadge: typeof import('@vue-patternfly/core').PfNotificationBadge,
    PfPopover: typeof import('@vue-patternfly/core').PfPopover,
    PfPopper: typeof import('@vue-patternfly/core').PfPopper,
    PfProgress: typeof import('@vue-patternfly/core').PfProgress,
    PfRadio: typeof import('@vue-patternfly/core').PfRadio,
    PfSkeleton: typeof import('@vue-patternfly/core').PfSkeleton,
    PfSpinner: typeof import('@vue-patternfly/core').PfSpinner,
    PfSwitch: typeof import('@vue-patternfly/core').PfSwitch,
    PfTextarea: typeof import('@vue-patternfly/core').PfTextarea,
    PfTextInput: typeof import('@vue-patternfly/core').PfTextInput,
    PfTitle: typeof import('@vue-patternfly/core').PfTitle,
    Void: typeof import('@vue-patternfly/core').Void,

    PfAccordion: typeof import('@vue-patternfly/core').PfAccordion,
    PfAccordionItem: typeof import('@vue-patternfly/core').PfAccordionItem,

    PfAlert: typeof import('@vue-patternfly/core').PfAlert,
    PfAlertActionLink: typeof import('@vue-patternfly/core').PfAlertActionLink,
    PfAlertGroup: typeof import('@vue-patternfly/core').PfAlertGroup,
    PfAlertGroupInline: typeof import('@vue-patternfly/core').PfAlertGroupInline,
    PfAlertIcon: typeof import('@vue-patternfly/core').PfAlertIcon,

    PfBreadcrumb: typeof import('@vue-patternfly/core').PfBreadcrumb;
    PfBreadcrumbItem: typeof import('@vue-patternfly/core').PfBreadcrumbItem;

    PfCard: typeof import('@vue-patternfly/core').PfCard;
    PfCardActions: typeof import('@vue-patternfly/core').PfCardActions;
    PfCardBody: typeof import('@vue-patternfly/core').PfCardBody;
    PfCardExpandableContent: typeof import('@vue-patternfly/core').PfCardExpandableContent;
    PfCardFooter: typeof import('@vue-patternfly/core').PfCardFooter;
    PfCardHeader: typeof import('@vue-patternfly/core').PfCardHeader;
    PfCardHeaderMain: typeof import('@vue-patternfly/core').PfCardHeaderMain;
    PfCardTitle: typeof import('@vue-patternfly/core').PfCardTitle;

    PfChip: typeof import('@vue-patternfly/core').PfChip;
    PfChipGroup: typeof import('@vue-patternfly/core').PfChipGroup;

    PfBadgeToggle: typeof import('@vue-patternfly/core').PfBadgeToggle;
    PfDropdown: typeof import('@vue-patternfly/core').PfDropdown;
    PfDropdownGroup: typeof import('@vue-patternfly/core').PfDropdownGroup;
    PfDropdownItem: typeof import('@vue-patternfly/core').PfDropdownItem;
    PfDropdownMenu: typeof import('@vue-patternfly/core').PfDropdownMenu;
    PfDropdownSeparator: typeof import('@vue-patternfly/core').PfDropdownSeparator;
    PfDropdownToggle: typeof import('@vue-patternfly/core').PfDropdownToggle;
    PfDropdownToggleCheckbox: typeof import('@vue-patternfly/core').PfDropdownToggleCheckbox;
    PfKebabToggle: typeof import('@vue-patternfly/core').PfKebabToggle;
    PfToggle: typeof import('@vue-patternfly/core').PfToggle;

    PpEmptyState: typeof import('@vue-patternfly/core').PfEmptyState;
    PpEmptyStateBody: typeof import('@vue-patternfly/core').PfEmptyStateBody;
    PpEmptyStateIcon: typeof import('@vue-patternfly/core').PfEmptyStateIcon;
    PpEmptyStateSecondaryActions: typeof import('@vue-patternfly/core').PfEmptyStateSecondaryActions;

    PfExpandableSection: typeof import('@vue-patternfly/core').PfExpandableSection;
    PfExpandableSectionToggle: typeof import('@vue-patternfly/core').PfExpandableSectionToggle;

    PfActionGroup: typeof import('@vue-patternfly/core').PfActionGroup;
    PfForm: typeof import('@vue-patternfly/core').PfForm;
    PfFormAlert: typeof import('@vue-patternfly/core').PfFormAlert;
    PfFormFieldGroup: typeof import('@vue-patternfly/core').PfFormFieldGroup;
    PfFormFieldGroupHeader: typeof import('@vue-patternfly/core').PfFormFieldGroupHeader;
    PfFormGroup: typeof import('@vue-patternfly/core').PfFormGroup;
    PfFormSection: typeof import('@vue-patternfly/core').PfFormSection;

    PfFormSelect: typeof import('@vue-patternfly/core').PfFormSelect;
    PfFormSelectOption: typeof import('@vue-patternfly/core').PfFormSelectOption;

    PfHelperText: typeof import('@vue-patternfly/core').PfHelperText;
    PfHelperTextItem: typeof import('@vue-patternfly/core').PfHelperTextItem;

    PfHint: typeof import('@vue-patternfly/core').PfHint;
    PfHintBody: typeof import('@vue-patternfly/core').PfHintBody;
    PfHintFooter: typeof import('@vue-patternfly/core').PfHintFooter;
    PfHintTitle: typeof import('@vue-patternfly/core').PfHintTitle;

    PfInputGroup: typeof import('@vue-patternfly/core').PfInputGroup;
    PfInputGroupText: typeof import('@vue-patternfly/core').PfInputGroupText;

    PfModal: typeof import('@vue-patternfly/core').PfModal;
    PfModalHeader: typeof import('@vue-patternfly/core').PfModalHeader;

    PfNav: typeof import('@vue-patternfly/core').PfNav;
    PfNavExpandable: typeof import('@vue-patternfly/core').PfNavExpandable;
    PfNavGroup: typeof import('@vue-patternfly/core').PfNavGroup;
    PfNavItem: typeof import('@vue-patternfly/core').PfNavItem;
    PfNavItemSeparator: typeof import('@vue-patternfly/core').PfNavItemSeparator;
    PfNavList: typeof import('@vue-patternfly/core').PfNavList;

    PfOverflowMenu: typeof import('@vue-patternfly/core').PfOverflowMenu;
    PfOverflowMenuContent: typeof import('@vue-patternfly/core').PfOverflowMenuContent;
    PfOverflowMenuControl: typeof import('@vue-patternfly/core').PfOverflowMenuControl;
    PfOverflowMenuDropdownItem: typeof import('@vue-patternfly/core').PfOverflowMenuDropdownItem;
    PfOverflowMenuGroup: typeof import('@vue-patternfly/core').PfOverflowMenuGroup;
    PfOverflowMenuItem: typeof import('@vue-patternfly/core').PfOverflowMenuItem;

    PfPage: typeof import('@vue-patternfly/core').PfPage;
    PfPageHeader: typeof import('@vue-patternfly/core').PfPageHeader;
    PfPageHeaderTools: typeof import('@vue-patternfly/core').PfPageHeaderTools;
    PfPageHeaderToolsGroup: typeof import('@vue-patternfly/core').PfPageHeaderToolsGroup;
    PfPageHeaderToolsItem: typeof import('@vue-patternfly/core').PfPageHeaderToolsItem;
    PfPageSection: typeof import('@vue-patternfly/core').PfPageSection;
    PfPageSidebar: typeof import('@vue-patternfly/core').PfPageSidebar;

    PfNavigation: typeof import('@vue-patternfly/core').PfNavigation;
    PfPagination: typeof import('@vue-patternfly/core').PfPagination;
    PfPaginationOptionsMenu: typeof import('@vue-patternfly/core').PfPaginationOptionsMenu;

    PfSelect: typeof import('@vue-patternfly/core').PfSelect;
    PfSelectGroup: typeof import('@vue-patternfly/core').PfSelectGroup;
    PfSelectMenu: typeof import('@vue-patternfly/core').PfSelectMenu;
    PfSelectOption: typeof import('@vue-patternfly/core').PfSelectOption;
    PfSelectToggle: typeof import('@vue-patternfly/core').PfSelectToggle;

    PfSimpleList: typeof import('@vue-patternfly/core').PfSimpleList;
    PfSimpleListGroup: typeof import('@vue-patternfly/core').PfSimpleListGroup;
    PfSimpleListItem: typeof import('@vue-patternfly/core').PfSimpleListItem;

    PfTab: typeof import('@vue-patternfly/core').PfTab;
    PfTabContent: typeof import('@vue-patternfly/core').PfTabContent;
    PfTabs: typeof import('@vue-patternfly/core').PfTabs;
    PfTabTitleIcon: typeof import('@vue-patternfly/core').PfTabTitleIcon;
    PfTabTitleText: typeof import('@vue-patternfly/core').PfTabTitleText;

    PfText: typeof import('@vue-patternfly/core').PfText;
    PfTextContent: typeof import('@vue-patternfly/core').PfTextContent;
    PfTextList: typeof import('@vue-patternfly/core').PfTextList;
    PfTextListItem: typeof import('@vue-patternfly/core').PfTextListItem;

    PfToolbar: typeof import('@vue-patternfly/core').PfToolbar;
    PfToolbarChipGroupContent: typeof import('@vue-patternfly/core').PfToolbarChipGroupContent;
    PfToolbarContent: typeof import('@vue-patternfly/core').PfToolbarContent;
    PfToolbarExpandableContent: typeof import('@vue-patternfly/core').PfToolbarExpandableContent;
    PfToolbarFilter: typeof import('@vue-patternfly/core').PfToolbarFilter;
    PfToolbarGroup: typeof import('@vue-patternfly/core').PfToolbarGroup;
    PfToolbarItem: typeof import('@vue-patternfly/core').PfToolbarItem;
    PfToolbarToggleGroup: typeof import('@vue-patternfly/core').PfToolbarToggleGroup;

    PfTooltip: typeof import('@vue-patternfly/core').PfTooltip;
    PfTooltipArrow: typeof import('@vue-patternfly/core').PfTooltipArrow;
    PfTooltipContent: typeof import('@vue-patternfly/core').PfTooltipContent;
  }
}

export {};
