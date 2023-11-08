# Changelog
All notable changes to this project will be documented in this file.

## [0.1.0-beta.14] - 2023-11-08

### Bug Fixes

- *(Icons)* Removed inline styles from icons to make it work with strict CSP
- *(Alert, Modal)* Updated screen-reader class
- *(MenuToggle)* Wrong padding in menu toggle icon
- *(Modal)* Fixed position of close button
- *(Spinner)* Fixed diameter prop
- *(SimpleList)* Fixed styling
- *(Dropdown)* Fixed applying the position prop to the floating ui of dropdown
- *(types)* Fixed definition of the `appendTo` prop of `pf-dropdown`

### Documentation

- Added spinner examples
- Fixed links to patternfly design guidelines

### Features

- *(Icons)* Updated fortowesome icons
- *(Modal)* Added element-to-focus prop
- *(Modal)* Added width and max-width props
- *(Icon)* Added pf-icon component
- *(ToggleGroup)* Implemented Toggle group components
- *(Masthead)* Implemented masthead components
- *(NotificationDrawer)* Implemented notification drawer components
- *(Page)* Added `pf-page-sidebar-body` and `pf-page-toogle-button`
- *(docs)* Added global switch for dark theme
- *(Toolbar)* Added static, full-height and sticky modifiers
- *(FloatingUi)* Added `width`, `min-width` and `max-width` props. `min-width` defaults to same width of the "trigger" element.

### Refactor

- Removed unused Dropdown injections
- Small ts fix in pf-select

## [0.1.0-beta.13] - 2023-10-18

### Bug Fixes

- *(Accordion)* Declare correct "update:expanded" event instead of "expanded" in `pf-accordion-item`
- *(Pagination)* Replaced `top` prop with `variant` to allow the pagination to be neither top, nor bottom
- *(MenuToggle)* Fixed opening of the menu when clicking on menutoggles with split-button

### Features

- *(Menu, Dropdown, OverflowMenu, Pagination)* Replaced pf-dropdown implementation with pf-menu composable
- *(TextInput)* Added support for week input type
- *(core)* Updated all components to PatternFly v5
- *(Label)* Added gold color
- *(Label)* Added overflow variant
- *(Label)* Added compact variant
- *(EmptyState)* Added color prop to `pf-empty-state-icon` and made it optional for the `icon` slot of `pf-empty-state-header`

## [0.1.0-beta.12] - 2023-07-20

### Bug Fixes

- *(Page)* Added missing class on page drawer container
- *(BackgroundImage)* Src prop is optional
- *(MenuToggle)* Apply correct container class to text

### Features

- *(MenuToggle)* Implemented pf-menu-toggle
- *(Menu)* Allowed omission of some components
- *(Menu)* Implemented favorites
- *(TeleportCopy)* Implemented utility component teleport-copy

### Refactor

- Renamed overridable-wrapper to auto-wrap

## [0.1.0-beta.11] - 2023-06-22

### Bug Fixes

- Pinned typescript versione to 5.0 due to incompatibility of vue-tsc with 5.1
- Fixed small event issues across all components
- Fixed componente with wrong name
- *(Checkbox)* Fixed declaration of InputHTMLAttributes as fallthrough attributes
- *(Spinner)* Fixed declaration of SVGAttributes as fallthrough attributes
- *(PageHeader)* Restored default component for the page header brand link
- Global components declaration
- Declared global components in main.d.ts

### Features

- *(Hint, OverridableWrapper)* Converted to vue-setup-sfc
- *(PassThrough)* Converted to vue-setup-sfc
- *(PassThrough, TooltipArrow, TooltipContent, Pagination)* Converted to vue-setup-sfc
- *(HelperText, OverflowMenu, ExpandableSection, EmptyState)* Converted to vue-setup-sfc

### Refactor

- Made props optional in empty slot declarations

## [0.1.0-beta.10] - 2023-06-08

### Bug Fixes

- *(Form)* Declaration of FormHTMLAttributes as fallthrough attributes of pf-form
- *(FloatingUI)* Allow using any DOM Element as reference and not just HTMLElement. This, for example, allows using tooltips on SVGs.
- *(docs)* Fixed submit button in form story

### Features

- *(Form)* Allowed pf-form-field-group and pf-form-group to use fieldset as the container tag
- *(Switch)* Added off-value prop to assign a value to use when the switch is in the off state
- *(Tabs)* Converted to vue-setup-sfc
- *(Icons)* Changed package to have simpler imports of single icons

## [0.1.0-beta.9] - 2023-06-05

### Bug Fixes

- *(InputGroupText)* Made plain prop optional
- *(docs)* Small typescript fixes
- *(docs)* Small typescript fixes
- *(Tooltip)* Correctly identify reference element even when it's not a component

### Features

- Declared fallthrough attributes
- *(SimpleList)* Added required prop
- *(FormSelect, Text)* Converted to vue-setup-sfc
- *(Chip, ChipGroup, Form, SearchInput, Toolbar)* Converted to vue-setup-sfc

## [0.1.0-beta.8] - 2023-06-02

### Bug Fixes

- *(Button)* Fixed wrong application of the loading modifier
- *(Button)* Fixed wrong application of the loading modifier
- *(Avatar)* Made border prop optional on pf-avatar

### Features

- *(types)* Implemented type declarations for fallthrough attributes in all vue-sfc-setup components
- *(Textarea)* Converted to vue-setup-sfc
- *(FocusTrap)* Converted to vue-setup-sfc
- *(FloatingUi)* Converted to vue-setup-sfc
- *(Popover)* Converted to vue-setup-sfc
- *(TextInput)* Added OUIA props
- *(TextInputGroupUtilities)* Declared fallthrough attributes
- *(InputGroup, Progress, Skeleton, Switch)* Converted to vue-setup-sfc
- *(Dropbox)* Converted to vue-setup-sfc
- *(Layouts)* Converted all layout components to vue-setup-sfc
- *(Card, Modal)* Converted to vue-setup-sfc

## [0.1.0-beta.7] - 2023-05-18

### Bug Fixes

- Added export of types to package.json

### Documentation

- Documented inclusion of patternfly-addons.css

### Features

- *(NotificationBadge)* Implemented expanded state
- Implemented Wrap utility component
- Implemented Sort and SortBy utility components

### Refactor

- *(Radio)* Rewrote `pf-radio` component with script setup and html template

## [0.1.0-beta.6] - 2023-05-17

### Features

- *(PageSection)* Implemented `component`, `max-width`, `center-aligned`, `shadow-top`, `shadow-bottom`, `overflow-scroll` props and `sticky*` breakpoint props
- *(Page)* Added `pf-page-breadcrumb` component and remove the `breadcrumb` slot from `pf-page`
- *(Page)* Added `pf-page-group` component
- *(Page)* Added `pf-page-navigation` component
- *(Page)* Integrated drawer panel into `pf-page`

## [0.1.0-beta.5] - 2023-05-16

### Bug Fixes

- *(types)* Typo in type exports for EmptyState components
- *(types)* Export global types for layout components
- *(docs)* Import global core types in docs app
- *(types)* Workaround for export of missing private name RawSymbol from vue
- *(types)* Force cast of self referential type
- Updated icons for fontawesome 6
- *(docs)* Icon name type
- *(ChipGroup)* Do not render group container if it does not contains any chips
- *(SearchInput)* Working advanced menu form
- *(TextInput)* Fixed validation of auto-validate prop
- Removed underperforming GenerateId component
- Replaced every ref<T> instance with var:Ref<T> improving type exports
- Fixed type imports in docs
- *(Tooltip, Popover, FloatinUI)* Fixed recursive reactive dependency that caused loop in render functions
- Block use of typescript 4.9 until supported by vue-tsc
- *(Popover)* Events correctly attached to the reference element
- *(Checkbox)* Assigned div as default container component of checkbox
- *(BackgroundImage)* Applied default filter
- *(DataList)* Fixed expandable state
- *(Accordion, Alert)* Fixed managed expanded state
- *(Tooltip)* Avoid hidden tooltips masking other elements
- *(FloatingUi, Tooltip)* Fixed positioning and offset of tooltips

### Documentation

- Locked vue to the same version used by core
- Managed expandable section example
- Setup proper window title for every page
- *(Page)* Fixed navigation sidebar
- Added code snippets to the layouts examples

### Features

- *(DataList)* Implemented pf-data-list components (no draggable) ([#5](https://github.com/mtorromeo/vue-patternfly/issues/5))
- *(Alert)* Allow all heading levels for title
- *(AlertGroup)* Alert group overflow
- *(Brand)* Allow picture with child elements and breakpoints
- *(Card)* Add disabled and selectableRaised card with optional input
- *(Checkbox)* Allow specifying the container component of checkboxes
- *(Panel)* Implemented Panel components
- *(TextInputGroup)* Implemented text input group components
- *(TextInputGroup)* Added focus() method
- *(SearchInput)* Implemented search input component
- *(SearchInput)* Expandable search input
- *(Drawer)* Implemented drawer
- *(Drawer)* Improved by allowing to specify fewer tags to compose a complete drawer
- *(Menu)* Implemented pf-menu components (no drilldown)
- *(BackgroundImage)* Implemented
- *(List)* Implemented
- *(LoginPage)* Implemented
- *(Spinner)* Updated to svg component
- *(Form)* Implemented pf-form-helper-text
- *(Alert)* Remove close prop, replaced titleHeadingLevel with component prop, added ouia props
- *(Title)* Added ouia props
- *(Button)* Implemented badge slot and ouia props

### Refactor

- Completed popover and tooltip implementations
- Inverted no-flip prop of popover
- Reorganized project layout of packages
- Updated useManagedProp utility function
- Replaced usage of useFloatingUI with new helper component FloatingUi
- *(FloatingUi)* Renamed sameSize prop to sameWidth
- Renamed Void helper to PassThrough
- Enabled strictNullChecks in typescript
- Modified children tracker utility to enforce explicit tracking symbol
- *(Tabs)* Simplified tabs implementation
- Replaced custom implementation of useFocused with useFocus from vueuse
- Updated vue and configurede vue-tsc to validate templates strictly
- Converted accordion components to vue-sfc-setup
- Uniformed emits definitions
- Rewrote a bunch of components as sfc setup

## [0.1.0-beta.4] - 2022-05-30

### Bug Fixes

- *(ExpandableSection)* Fixed managed prop "expanded"
- *(Pagination)* Re-emitted update:page event

## [0.1.0-beta.3] - 2022-05-30

### Bug Fixes

- *(docs)* Use <pre v-md> tag instead of <md> so that formatters won't modify the content
- *(docs)* Internal links and typescript validation of vue templates
- *(docs)* Small fixes
- Managed props always emit update event
- *(FormSelect, TextInput)* Allow null values

### Documentation

- Autogenerate the entire navigation menu
- Restored the introduction page and implemented code highlight in markdown
- Uniformed use of icon components

### Features

- *(docs)* Added github workflow to publish new docs on gh-pages

## [0.1.0-beta.2] - 2022-03-24

### Refactor

- Rewrote the entire codebase in typescript

## [0.1.0-beta.1] - 2021-11-24

### Bug Fixes

- *(docs)* Set relative path for assets and downgraded storybook to stable
- *(Avatar)* Fixed export of the component
- *(docs)* Updated imports of components and updated storybook
- *(docs)* Restored introduction as first page

### Documentation

- Removed unresolved export of TextVariants
- *(Form)* Clarified helperText usage

### Features

- ActionGroup component
- HelperText component
- NotificationBadge component

## [0.1.0-alpha.13] - 2021-11-10

### Bug Fixes

- *(docs)* Renamed links
- *(docs)* Prevent error accessing docgeninfo on null
- *(Void)* Prevent warnings for inherited attributes being passed on to children
- *(BreadcrumbItem)* Let router-link set the href of the link

### Documentation

- Layout examples using skeleton as items' component

### Features

- Skeleton component
- Allowed all unconstrained `component` props to accept Objects
- *(Button)* Allow use of buttons as router-links

### Performance

- Patternfly style objects are no longer made reactive

### Refactor

- *(Select)* Made some progress
- *(Select)* Made some progress
- Initial typescript conversion of use.js and util.js
- *(Button)* Simplified disabled attribute handling

## [0.1.0-alpha.12] - 2021-09-24

### Bug Fixes

- *(Form)* Removed implicit novalidate attribute

### Documentation

- *(Form, Page)* Documented differences from upstream

### Features

- *(Form)* Allow setting alternative component
- *(Tabs)* Add Support for disabled state
- Added Hint component
- Added Progress

### Refactor

- *(Select)* Rename pf-void -> void as in other components

## [0.1.0-alpha.11] - 2021-09-23

### Bug Fixes

- *(core)* Correctly resolve children vnodes with nested fragments

### Features

- *(Flex, Gallery, Grid)* Allow setting alternative component
- *(Page)* Added breadcrumbStickyTop modifier

## [0.1.0-alpha.10] - 2021-09-16

### Bug Fixes

- *(Alert)* Fixed reactivity of truncateTitle
- All component props are resolved dynamically allowing the use of custom components and not just html tags
- *(Checkbox)* Modified checked prop and @change event to modalValue and update:modelValue to allow use with v-model
- *(Checkbox)* Fixed attribute binding

### Documentation

- Added PageSection to subcomponents

### Features

- *(Checkbox)* Removed id prop requirement. A unique id will be automatically assigned if not specified

## [0.1.0-alpha.8] - 2021-09-11

### Bug Fixes

- Fixed example app
- *(docs)* Instruct importing createApp from vue

### Documentation

- Documented stylesheet inclusion
- Fixed css import path

### Features

- *(Alert)* Add plain variant, add expandable inline
- *(Nav)* Added flyout
- Tabs
- *(Alert)* Show tooltip on overflowing title

## [0.1.0-alpha.7] - 2021-08-26

### Bug Fixes

- *(docs)* Call default value function for complex props
- *(useChildrenTracker)* Fail silently if the component is not used in a container with childrentracker
- *(Textarea)* Added 's' modifier to pattern matching to make it easier to validate multiline values
- *(SimpleList)* Inject the hidden input outside of the ul to respect the html spec which only allows li items
- *(docs)* Fixed internal links
- *(docs)* Removed empty line escape from the code examples

### Features

- FormSelect
- TextArea
- *(FormGroup)* Autodetect validation state of inner textareas
- SimpleList
- *(Dropdown)* Implemented managed open prop so that it's not required anymore to bind a variable to open the dropdown
- Card

### Refactor

- *(useManagedProp)* No longer require passing props and emit
- *(docs)* Converted storied to mdx format
- *(TextInput)* Moved validation logic in InputValidationMixin

## [0.1.0-alpha.6] - 2021-08-24

### Bug Fixes

- *(Popover)* Corrected import path
- Wrong name used for beforeUnmount hook in Dropdown, Nav, Popper and Popover
- Better auto-placement of popovers and tooltips
- *(Nav)* Added missing class to grouped nav items wrapper
- *(ChildrenTracker)* Do not fail when the tracked is not provided by a parent component
- *(Dropdown, Select)* Fix scrollbar click closing menu
- *(Dropdown)* Fix focus on toggle after click off menu
- *(tooltip)* Change default entry and exit delay
- *(Popover)* Call setVisible before animation
- *(Chip, ChipGroup, Label)* Fixed detection of overflowing text

### Documentation

- Form
- *(Form)* Label-info example
- Small fixes to example app

### Features

- Form and FormGroup
- *(Form)* Inherit validation state from children text-inputs
- FormAlert, FormFieldGroup and FormFieldGroupHeader
- FormSection
- *(Form)* Add stack variant to FormGroup
- *(Toolbar)* Add widths on breakpoints
- *(Dropdown)* Add alignment breakpoints
- *(Button)* Add danger modifier to link/secondary buttons
- *(Text)* Added support for visited link styling
- *(AlertGroup)* Make dynamic alerts more accessible
- *(Page)* Add tabs and wizard PageSection variants
- *(avatar)* Add border prop
- *(Switch)* Add isReversed prop/layout
- *(Accordion)* Added support for bordered modifiers, display large and mutilple body content
- *(Form)* Add form group label info
- *(Navigation, PageSection)* Add horizontal subnav variant
- *(Popover)* Support diagonal positions

### Refactor

- *(Childrentracker)* Improved api usability by not requiring extra steps to initialize the collection and manually bind to the mounted/unmounted hooks

## [0.1.0-alpha.5] - 2021-08-23

### Bug Fixes

- *(docs)* Assume false as default value for boolean props
- Assigned explicit name property to every component
- *(docs)* Fixed opening of modals
- *(Popper)* Fixed popper placement direction and auto-flip behavior

### Documentation

- Modal story
- Toolbar story
- Simplified example code
- EmptyState
- ExpandableSection
- Radio
- Checkbox
- Text
- Breadcrumb
- Popover

### Features

- EmptyState
- ExpandableSection
- Radio
- Checkbox
- *(Modal)* Allow to override the container tag for the modal
- Breadcrumb
- Popover

## [0.1.0-alpha.4] - 2021-08-19

### Bug Fixes

- *(button)* Fixed default tabindex
- *(close-button)* Better aria-label

### Features

- Added Backdrop component
- Implemented FocusTrap component
- Implemented Modal component

### Refactor

- Migrated custom useWindowWidth to useWindowsSize from @vueuse/core
- Moved text overflowing logic in dedicated useElementOverflowing

## [0.1.0-alpha.3] - 2021-08-19

### Styling

- Toolbar code format

## [0.1.0-alpha.2] - 2021-08-19

### Bug Fixes

- Removed usage of Vue.use

<!-- generated by git-cliff -->
