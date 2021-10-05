# Changelog
All notable changes to this project will be documented in this file.

## [unreleased]

### Bug Fixes

- *(docs)* Renamed links
- *(docs)* Prevent error accessing docgeninfo on null

### Documentation
- Layout examples using skeleton as items' component


### Features
- Skeleton component
- Allowed all unconstrained `component` props to accept Objects


### Performance
- Patternfly style objects are no longer made reactive


### Refactor

- *(Select)* Made some progress
- *(Select)* Made some progress- Initial typescript conversion of use.js and util.js


## [0.1.0-alpha.12] - 2021-09-24

### Bug Fixes

- *(Form)* Removed implicit novalidate attribute

### Features

- *(Form)* Allow setting alternative component
- *(Tabs)* Add Support for disabled state- Added Hint component
- Added Progress


### Refactor

- *(Select)* Rename pf-void -> void as in other components

## [0.1.0-alpha.11] - 2021-09-23

### Bug Fixes

- *(Icons)* Updated vue peer-dependency and added prepublish build script
- *(core)* Correctly resolve children vnodes with nested fragments

### Features

- *(Page)* Added breadcrumbStickyTop modifier

## [0.1.0-alpha.10] - 2021-09-16

### Bug Fixes

- *(Alert)* Fixed reactivity of truncateTitle
- *(Checkbox)* Modified checked prop and @change event to modalValue and update:modelValue to allow use with v-model
- *(Checkbox)* Fixed attribute binding- All component props are resolved dynamically allowing the use of custom components and not just html tags


### Documentation
- Added PageSection to subcomponents


### Features

- *(Checkbox)* Removed id prop requirement. A unique id will be automatically assigned if not specified

## [0.1.0-alpha.8] - 2021-09-11

### Bug Fixes

- *(build)* We do not need our own css. Skip every css imports from core.
- *(build)* Fixed incorrect ignore-css-imports custom vite plugin
- *(docs)* Instruct importing createApp from vue- Fixed example app


### Documentation
- Documented stylesheet inclusion
- Fixed css import path
- Fixed build issue with latest vueuse + webpack


### Features

- *(Alert)* Add plain variant, add expandable inline
- *(Alert)* Show tooltip on overflowing title
- *(Nav)* Added flyout- Tabs


## [0.1.0-alpha.7] - 2021-08-26

### Bug Fixes

- *(SimpleList)* Inject the hidden input outside of the ul to respect the html spec which only allows li items
- *(Textarea)* Added 's' modifier to pattern matching to make it easier to validate multiline values
- *(docs)* Call default value function for complex props
- *(docs)* Fixed internal links
- *(docs)* Removed empty line escape from the code examples
- *(useChildrenTracker)* Fail silently if the component is not used in a container with childrentracker

### Features

- *(Dropdown)* Implemented managed open prop so that it's not required anymore to bind a variable to open the dropdown
- *(FormGroup)* Autodetect validation state of inner textareas- FormSelect
- TextArea
- SimpleList
- Card


### Refactor

- *(TextInput)* Moved validation logic in InputValidationMixin
- *(docs)* Converted storied to mdx format
- *(useManagedProp)* No longer require passing props and emit

## [0.1.0-alpha.6] - 2021-08-24

### Bug Fixes

- *(ChildrenTracker)* Do not fail when the tracked is not provided by a parent component
- *(Dropdown)* Fix focus on toggle after click off menu
- *(Nav)* Added missing class to grouped nav items wrapper
- *(Popover)* Corrected import path
- *(Popover)* Call setVisible before animation
- *(tooltip)* Change default entry and exit delay- Wrong name used for beforeUnmount hook in Dropdown, Nav, Popper and Popover
- Better auto-placement of popovers and tooltips


### Documentation

- *(Form)* Label-info example- Form
- Small fixes to example app


### Features

- *(Accordion)* Added support for bordered modifiers, display large and mutilple body content
- *(AlertGroup)* Make dynamic alerts more accessible
- *(Button)* Add danger modifier to link/secondary buttons
- *(Dropdown)* Add alignment breakpoints
- *(Form)* Inherit validation state from children text-inputs
- *(Form)* Add stack variant to FormGroup
- *(Form)* Add form group label info
- *(Page)* Add tabs and wizard PageSection variants
- *(Popover)* Support diagonal positions
- *(Switch)* Add isReversed prop/layout
- *(Text)* Added support for visited link styling
- *(Toolbar)* Add widths on breakpoints
- *(avatar)* Add border prop- Form and FormGroup
- FormAlert, FormFieldGroup and FormFieldGroupHeader
- FormSection


### Refactor

- *(Childrentracker)* Improved api usability by not requiring extra steps to initialize the collection and manually bind to the mounted/unmounted hooks

## [0.1.0-alpha.5] - 2021-08-23

### Bug Fixes

- *(Popper)* Fixed popper placement direction and auto-flip behavior
- *(docs)* Assume false as default value for boolean props
- *(docs)* Fixed opening of modals- Assigned explicit name property to every component


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

- *(Modal)* Allow to override the container tag for the modal- EmptyState
- ExpandableSection
- Radio
- Checkbox
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
