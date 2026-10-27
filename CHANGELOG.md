# Changelog
All notable changes to this project will be documented in this file.

## [6.0.0-rc.2] - 2026-10-27

### Bug Fixes

- *(Th)* Name selection headers by default

  A Th with selected gets aria-label "Row select", like the upstream examples,
  and neither it nor an aria-hidden Th warns about a missing accessible name.

- Report usage warnings only outside of production

  The console warnings and errors about wrong usage go through devWarn and
  devError, which check process.env.NODE_ENV at runtime like vue does, so the
  bundler of the application drops them from production builds.
  import.meta.env.DEV would be replaced already when building the library.

- *(ProgressStep)* Generate the step and title ids

  The step gets a generated id and its title the id of the step with a -title
  suffix when they are not set, so the title button of a popover is always
  labelled by both and the warning about missing ids is gone.


### Features

- *(FormGroup)* Link the label to the first field

  A labelled PfFormGroup generates a field id when fieldId is not set and
  links its label to the first PfTextInput, PfTextarea, PfFormSelect,
  PfSwitch, PfRadio or PfCheckbox without a label of its own: the field gets
  the group id unless it has its own, so it has an accessible name and the
  missing-label warning no longer fires. When the linked field is unmounted,
  the next eligible field gets linked. Unlabelled groups and groups with role
  group or radiogroup link no field.

- *(Select)* Give the OUIA id to the toggle

  The default toggle, or a PfMenuToggle in the toggle slot without its own
  ouiaId, gets the ouiaId of the select, so tests find the toggle and the menu
  with the same id.

- *(Dropdown)* [**breaking**] Close on select by default

  The menu closes when an item is selected: closeOnSelect is replaced by
  noCloseOnSelect, which keeps it open.

  Without an ouiaId the menu uses containerOuiaId, and the default toggle, or
  a PfMenuToggle in the toggle slot without its own, gets the same OUIA id.

- Make the default texts of the components configurable

  The English default texts of core and table, mostly accessible names like
  "Close", "Row select" or "Select row 3", come from a typed PfMessages object.
  The messages option of the plugin replaces them for the whole app and
  providePfMessages for a subtree, merging with the ancestors; a ref or a
  getter keeps them reactive to switch language at runtime. The props that set
  the same texts still win over the messages, which keep the current English
  defaults.

## [6.0.0-rc.1] - 2026-10-27

### Bug Fixes

- *(TextInputGroup)* [**breaking**] Align with patternfly-react

  - Render the status icon in the main input from the group's validated
    state, and accept validated="default" without adding a modifier.
  - Default the input aria-label to "Type to filter".
  - Apply class to the main root element; add inputClass for the input.
  - Share disabled and validated through TextInputGroupKey in common.ts.

- *(FormControlIcon)* Swap the warning and error status icons

  The warning status showed the circle exclamation icon and the error status
  the triangle one: patternfly-react uses the triangle for warnings and the
  circle for errors.

- *(SearchInput)* Align markup and behaviour with patternfly-react

  - Wrap the input, toggles and buttons in input group items as upstream
  - Forward class and attributes to the root element
  - Do not disable the submit button without a value; prevent the
    enclosing form from submitting on search
  - Parse and build quoted attribute values; collect unpaired words under
    haswords without a delimiter
  - Close the menu on Escape anywhere, keep it open on clicks inside an
    appended menu, focus the first field on open and the input on close
  - Float the menu inside the wrapper by default; render it in the flow
    with appendTo="inline"
  - Forward the attribute:<attr> slots to the menu
  - Stop calling onClear when toggling the expandable input
  - Add animations, utilitiesDisplayed, resultsCountContext, name,
    inputAttrs, wordsAttrLabel and an exposed focus()
  - Port all upstream examples to the story

- *(Brand)* Apply the responsive sizes to an img brand

  - Set the width and height breakpoint variables on the img as well as
    on the picture, and update them when the props change
  - Make src optional, drop any and declare props in a plain script block
  - Port upstream's tests and examples with the light and dark logos

- *(Button)* [**breaking**] Align disabled, loading and role handling with upstream

  - Only disable button elements: other elements get aria-disabled,
    pf-m-disabled and tabindex -1
  - Keep a loading button clickable, skip pf-m-progress on plain buttons
    and render an inline spinner in inline links
  - Only add role="button", type and tabindex 0 to an inline span
  - Position the icon only next to text
  - Add clicked, default ouiaSafe to true and log upstream's errors for
    hamburger, settings and favorite buttons
  - Port all upstream examples to the story

- *(Checkbox)* Align the wrapper, description and OUIA attributes with upstream

  - Keep pf-m-standalone with labelWrapped and no label, and set the for
    attribute of a label wrapper also with component="label"
  - Bind the input to the model state
  - Add invalid, describe the input with the description and default
    ouiaSafe to true
  - Move the OUIA attributes to the input, as upstream
  - Port upstream's tests and examples

- *(Content)* Add data-pf-content and default ouiaSafe to true

  - Mark every content element with data-pf-content, as upstream
  - Default ouiaSafe to true
  - Declare props in a plain script block and drop any from the slot
  - Port the remaining upstream tests and all examples to the story

- *(DescriptionList)* Only set layout variables with their layouts

  - Set the auto-fit minimum and horizontal term width variables only
    with autoFit and horizontal, as upstream
  - Default ouiaSafe to true
  - Declare props in plain script blocks and drop any from the slots
  - Port all upstream examples to the story

- *(Divider)* Default the role of li and div dividers to separator

  - Default role to separator, as upstream, and accept none
  - Declare props in a plain script block
  - Port upstream's tests and all examples to the story

- *(Drawer)* Align with patternfly-react

  - Drawer: add pill, the expand event and default ouiaSafe to true
  - DrawerPanelContent: add focusTrap, elementToFocusOnExpand, noGlass, glass,
    plain and noPlainOnGlass
  - DrawerPanelContent: collapse the panel at the end of its transform
    transition, as the drawer CSS has no animation to wait for
  - DrawerPanelContent: measure touch drags from their start and support RTL
    when resizing
  - DrawerSection: add plain
  - DrawerCloseButton: default the aria-label to "Close drawer panel"
  - Port every upstream example to the story

- *(InputGroup)* [**breaking**] Put InputGroupText attributes on the text element

- *(List)* Add the plain list role and the item text wrapper

  - List: render role="list" on plain lists, as upstream
  - ListItem: wrap the content in a span, with the item text class after
    an icon
  - Add the differences section to the story

- *(FloatingUi)* Defer the teleport to targets rendered in the same patch

  A floating element appended to an element of the same render, such as a
  dropdown appended to the focus trap of a modal, failed to resolve its
  teleport target and broke the render. The teleport is now deferred, and the
  element keeps its hidden opacity when it mounts after being hidden again.

- *(NotificationBadge)* Align with patternfly-react

  - animate when mounted with shouldNotify and stop when it becomes false
  - render no empty text span, which added space after the icon, without
    count nor content
  - add the attention-icon slot for the attention variant, while the icon
    slot covers the other variants
  - use the clicked prop of the button for the expanded styling
  - story: port every upstream example

- *(NotificationDrawer)* Align with patternfly-react

  - ListItem: click on Enter and Space unless on a header action, and
    default the read state screen reader text to read or unread
  - ListItemHeader: set the max lines of truncated titles, focus overflowing
    titles, forward attributes to the header element and add actionNoOffset
  - Group: focus the title only when it overflows
  - Header: add closeButtonAriaLabel
  - type the slots and onExpand without any
  - story: port every upstream example, adding the lightweight one

- *(Switch)* Align with patternfly-react

  - label the input with the visible label through aria-labelledby, unless
    an aria-label or aria-labelledby is set
  - link the label to the input with for and a generated id
  - apply class to the wrapping label only
  - default ouiaSafe to true and render the check icon in a span with a label
  - add the label slot and warn without an accessible name
  - port every upstream example to the story

- *(Title)* Align with patternfly-react

  - default ouiaSafe to true
  - type the slot and move the props into the plain script block
  - port the upstream examples to the story and document the h prop


### Documentation

- *(Card)* Port the patternfly-react examples

- *(TextInputGroup)* Port the upstream examples

  Use the upstream titles and intros, add the validation example, fix the
  filters clear button and list the differences from patternfly-react.

- *(Banner)* Align the story with upstream's examples

  - Add the intro texts and differences section, use the bell icon for
    the custom status and port the pill example
  - Declare props in a plain script block and drop any from the slots
  - Cover every color and status and the screen reader text order

- *(Skeleton)* Port the upstream examples

  - port every upstream example to the story
  - drop the any cast, map the font sizes to their modifiers and fix the
    fontSize doc comment
  - test every font size, the default markup and the style merging

- *(Spinner)* Align the examples with upstream

  - add the upstream aria-labels to the basic, size and custom size examples
  - render the progress bar reference of the description as a link

- *(DualListSelector)* Add story

  Port the upstream examples, including the draggable ones built with
  @vue-patternfly/drag-drop.


### Features

- *(Checkbox,Radio)* [**breaking**] Apply class to the wrapper and add inputClass

  `class` now goes on the wrapper element, like `className` in
  patternfly-react, instead of on the input. The new `inputClass` prop
  replaces it for the input (`inputClassName`). Every other attribute is
  still forwarded to the input.

- *(Card)* [**breaking**] Reach feature parity with patternfly-react

  Fixes the layout of the selection checkbox: the standalone modifier
  ended up on the input instead of the check wrapper. The input is also
  keyboard reachable again (no tabindex="-1"), and the card itself is no
  longer focusable.

  - `selectable-single` renders a radio; cards sharing a `name` deselect
    each other through `v-model:selected`
  - `selectable-attrs` forwards id/aria attributes to the selectable input
    or clickable action, with a generated id by default
  - clickable-only cards (`clickable`, `@click` or `to`/`external`) render
    a covering button or link; `@click` is ignored when disabled
  - `id` derives the ids of the card title and subtitle; CardTitle
    forwards its attributes to the title text
  - CardHeader gets an `actions` slot with `actions-no-offset` and wraps
    its content in the header main, as in patternfly-react
  - accessibility console errors and the compact/large warning
  - a single CardKey provide in common.ts replaces the separate keys

- *(Charts)* Add the @vue-patternfly/charts package based on ECharts

  Port @patternfly/react-charts on Apache ECharts only, including the charts
  patternfly-react draws with Victory:

  - PfCharts renders an ECharts option with the PatternFly theme and per
    series defaults, following container resizes and theme changes on the
    html and body elements.
  - PfChartArea, PfChartBar, PfChartLine, PfChartScatter, PfChartSparkline,
    PfChartPie, PfChartDonut, PfChartDonutUtilization, PfChartDonutThreshold,
    PfChartBullet, PfChartBoxPlot and PfChartSankey turn simple props into an
    option and register the ECharts modules they need.
  - PfCharts keeps the range zoomed by the user when its option is rebuilt.
  - PfChartGauge, PfChartHeatmap, PfChartRadar, PfChartFunnel,
    PfChartCandlestick and PfChartTreemap wrap ECharts types react-charts
    has no counterpart for.
  - ROADMAP.md maps every react-charts chart and plans the missing ECharts
    types.

- *(Accordion)* [**breaking**] Add toggle, content and content body components

  - Add PfAccordionToggle, PfAccordionContent (customContent, bodyAttrs,
    focusable fixed content with a scrollbar) and
    PfAccordionExpandableContentBody
  - PfAccordionItem renders the toggle and content unless its slot
    composes them; add toggleAttrs and contentAttrs
  - Add plain and noPlainOnGlass to PfAccordion; it is a region when
    labelled and not a definition list
  - Update toggles and contents when the accordion props change
  - Do not add pf-m-expanded to the expandable content
  - Port all upstream examples to the story

- *(ActionList)* Add vertical and iconGroup props

  - Add vertical to PfActionList and iconGroup to PfActionListGroup
  - Declare props in a plain script block and drop any from the slots
  - Port all upstream examples to the story

- *(Alert)* Add the close button component and group animations

  - Add PfAlertActionCloseButton with an aria-label built from the alert,
    the action-close and title slots, and animations on PfAlertGroup
  - Forward id and aria-label to the alert, honour the variantLabel prop,
    restart the timeout when it changes and default ouiaSafe to true
  - Use upstream's default label for the expand toggle
  - Render the alert group items with their class
  - Port all upstream examples to the story

- *(Avatar)* Add initials, color and custom content

  - Render initials or the default slot in an img role div, labelled by
    alt or hidden when alt is empty
  - Add the color prop with the colorful modifier
  - Port all upstream examples to the story and upstream's tests

- *(Badge)* Add screenReaderText

  - Add the screenReaderText prop and screen-reader-text slot
  - Use it for the results count of PfSearchInput
  - Declare props in a plain script block, port upstream's tests and
    align the story examples

- *(Breadcrumb)* Add PfBreadcrumbHeading and the link slot

  - Add PfBreadcrumbHeading for the current page title
  - Add the link scoped slot to PfBreadcrumbItem, replacing upstream's
    render prop
  - Put class and attributes on the list item of an item without a link
  - Default ouiaSafe to true and clone the children to set the dividers
  - Port all upstream examples to the story

- *(DataList)* Add control, drag button and text components

  - Add PfDataListControl, PfDataListDragButton and PfDataListText
  - Add plain, noPlainOnGlass and role="list" to PfDataList
  - Do not select an item when clicking its actions or controls
  - Label the hidden selection input with selectableInputAriaLabel or the
    item aria-labelledby
  - Render the toggle icon in the button icon, label the toggle by the
    item and itself, follow the item expanded state and add buttonAttrs
  - Render PfDataListCheck with a label wrapped PfCheckbox and put its
    class on the control
  - Show truncated cell content in a tooltip
  - Move the shared keys to common.ts and drop any
  - Port all upstream examples to the story but the drag and drop ones

- *(Dropdown)* [**breaking**] Align with patternfly-react

- *(EmptyState)* [**breaking**] Align with patternfly-react

- *(ExpandableSection)* Align with patternfly-react

  - ExpandableSection: add toggleId (labelling the content region),
    indented, direction for detached sections, toggleWrapper, toggleAttrs,
    the toggle-icon slot and noToggleIcon; pass expanded to the toggle-text
    slot; accept truncate=true for the default line clamp; warn when
    detached without a toggleId; default ouiaSafe to true
  - ExpandableSection: recheck the truncate toggle when the content or the
    line count changes, not only on resize
  - ExpandableSectionToggle: add toggleId, detached, toggleWrapper and
    toggleAttrs
  - Render the toggle icon in the button icon wrapper, as upstream
  - Port every upstream example to the story

- *(FileUpload)* [**breaking**] Align with patternfly-react

- *(Form)* [**breaking**] Align with patternfly-react

- *(FormSelect)* Align with patternfly-react

  - Add FormSelectOptionGroup
  - FormSelect: put the OUIA attributes on the select and default ouiaSafe
    to true; put class and style on the form control instead of the select;
    set aria-invalid; log an error without an id or aria-label
  - FormSelectOption: render the label prop as the option text; drop its
    OUIA attributes
  - Move the options injection key to common.ts
  - Port every upstream example to the story and link the Flex demo selects
    to their labels

- *(HelperText)* Align with patternfly-react

  - HelperText: render role="list" on a ul and add liveRegion
  - HelperTextItem: add screenReaderText, announcing the variant of non
    default items, and the component prop
  - Move the injection key to common.ts
  - Port every upstream example to the story

- *(Hint)* Add actionsNoOffset

  - Hint: add actionsNoOffset, removing the negative margin of the actions
  - Port every upstream example to the story

- *(Icon)* Support all upstream sizes

  - Icon: accept the 2xl, 3xl, heading and body sizes for size, iconSize
    and progressIconSize, and export the IconSize type
  - Add the Icon spec
  - Port every upstream example to the story

- *(JumpLinks)* [**breaking**] Align with patternfly-react

- *(Label)* [**breaking**] Align with patternfly-react

- *(Masthead)* [**breaking**] Align with patternfly-react

- *(Menu)* [**breaking**] Align with patternfly-react

  - add drilldown menus (PfDrilldownMenu) with managed state, optional
    v-model:drilled-in-menus/drilldown-item-path/active-menu, drill-in,
    drill-out and get-menu-height events, and root height following the
    active menu
  - add PfMenuContainer, PfMenuSearchInput and the PfMenuSearch alias
  - add the listbox role, aria-multiselectable lists and the icon slot of
    PfMenuItemAction
  - roving tabindex keyboard navigation, horizontal arrows between items
    and actions, Enter/Space activation, flyout aria attributes and focus
  - fix onActionClick for item id 0, group title id, external link target
  - fix selection shown on menus without selected and items identified by
    key never selected
  - FloatingUi positions the element of a slot forwarded as a fragment
  - port every upstream example to the story

- *(MenuToggle)* [**breaking**] Align with patternfly-react

  - emit click only from the toggle button, not from split button items or
    the typeahead input
  - split toggles keep class and style on the wrapper and pass every other
    attribute (aria-label, id, OUIA) to the toggle button, without a default
    aria-label hiding the toggle text
  - typeahead toggle button: tabindex -1, the given aria-label and the OUIA
    attributes
  - render the status-icon slot only with a status
  - MenuToggleCheckbox: v-model:checked (also uncontrolled), change emit,
    invalid prop, class/style on the label and OUIA on the input
  - story: port every upstream example and list the differences

- *(Modal)* [**breaking**] Align with patternfly-react

  - add PfModalBody and PfModalFooter; PfModalHeader renders the title,
    description, title icon and help itself, and labels and describes the
    enclosing modal
  - PfModal keeps its title, header, description, help and footer shortcuts
    and wraps loose content in a PfModalBody
  - stack open modals per target: keep the backdrop-open class until all
    close and hide siblings and previous modals from screen readers
  - add focusTrapId, backdropClass, onEscapePress and the custom title icon
    variant; the title-icon slot works without a titleIconVariant
  - default ouiaSafe to true, derive the close button OUIA id, listen for
    Escape on the appendTo target, render no empty header
  - story: port every upstream example

- *(Nav)* [**breaking**] Align with patternfly-react

  - render flyouts inside the nav, where the nav styles their menus, with
    aria-haspopup/aria-expanded on the trigger, Enter to open and a zIndex prop
  - NavExpandable toggles its own state, seeded and followed from expanded,
    and gets buttonAttrs
  - Nav emits toggle and passes the item location with select; item and
    group ids may be numbers
  - role="list" on NavList and NavGroup lists; NavGroup title is optional,
    warning without an aria-label
  - react to variant changes, observe the list size and right-to-left
    scrolling in horizontal navs, default ouiaSafe to true
  - share the injection keys through common.ts
  - story: port every upstream example

- *(OverflowMenu)* Align with patternfly-react

  - add breakpointReference, basing the breakpoint on the size of a
    container (element, ref or getter) instead of the viewport
  - add vertical, applying the vertical modifier and the height breakpoints
  - warn on invalid breakpoints and on "sm" with vertical
  - expose belowBreakpoint to the default slot and react to breakpoint
    changes
  - remove the overflow menu control class from dropdown items
  - share the injection key through common.ts and type the slots
  - story: port every upstream example

- *(Page)* [**breaking**] Align with patternfly-react

  - add PageBody; PageSection and PageBreadcrumb always wrap their content
    in it, unless noBodyWrapper is set
  - apply the sidebar expanded modifier only on mobile and hide a collapsed
    sidebar from assistive technologies
  - base the mobile state on the page width, make the main element
    focusable by default (mainTabIndex -1) and add the notification drawer
    sizes and expand event
  - PageGroup: apply no-fill only when filled is false
  - PageSection: add plain, noPlainOnGlass, stickyBase and stickyStuck, and
    apply the secondary variant only to default sections
  - warn about a missing aria-label with overflowScroll
  - add contextSelector to PageSidebarBody and hamburgerVariant to
    PageToggleButton
  - share the injection keys through common.ts and type the slots
  - story: port every upstream example

- *(Pagination)* [**breaking**] Align with patternfly-react

  - support an unknown total: without count the next page stays available
    and the page input shows no total
  - wrap the options toggle in the page menu element, label it with
    titleOptionsToggle and render the total slot in it too
  - open the options menu upwards for non static bottom paginations (or with
    dropUp), close it on Escape, Tab and outside clicks returning the focus
    to the toggle, and focus its first item when opened
  - size the page input after the number of pages
  - add ofWord, pageInsets, stickyBase, stickyStuck and menuAppendTo, the
    setPage, perPageSelect and pageInput events, and default ouiaSafe to true
  - story: port every upstream example

- *(Panel)* Align with patternfly-react

  - add the secondary variant and the autoHeight, noBorder, fullHeight,
    glass and pill props
  - declare the props in a plain script block and type the slots
  - story: port every upstream example

- *(Popover)* [**breaking**] Align with patternfly-react

  - open at the given position and flip when it does not fit (noFlip,
    flipBehavior), using auto placement only for position "auto", and map
    the start/end placements to their position modifiers
  - render the upstream header markup with headerComponent, a header-icon
    slot and alertSeverityVariant with its screen reader text
  - show the close button by default in its close wrapper (noClose) and
    trap the focus by default when opened (noFocusTrap, elementToFocus)
  - add triggerRef, the deprecated hover trigger, zIndex, the show and hide
    events and a hide function for the content slots; default ouiaSafe to
    true
  - story: port every upstream example

- *(Progress)* Align with patternfly-react

  - render the title and the status only when they have content, and omit
    aria-valuetext without valueText
  - make a truncated title focusable, showing its tooltip on focus too, and
    hide other titles from assistive technologies
  - add helperText (prop or slot), ariaDescribedby, hideStatusIcon and a
    title slot; warn without an accessible name; default ouiaSafe to true
  - show 0% when min and max are equal
  - story: port every upstream example

- *(ProgressStepper)* [**breaking**] Align with patternfly-react

  - add titleId to PfProgressStep and warn when id or titleId is missing
  - add the popover scoped slot: the step title becomes the help-text trigger
    button (aria-labelledby "{id} {titleId}") passed as trigger to a pf-popover
  - type the slots and drop any
  - port every upstream example to the story

- *(Radio)* Align with patternfly-react

  - bind the selected value of a group with v-model and value; checked and
    change still work without it
  - add labelWrapped and invalid (aria-invalid)
  - describe the input by its description unless aria-describedby is set
  - put the OUIA attributes on the input, safe by default
  - keep the standalone modifier when wrapped in a label without a label
  - warn without a label or an aria-label
  - type the slots and drop any
  - port every upstream example to the story

  Card ignores the model update of its single selectable radio.

- *(Select)* [**breaking**] Align with patternfly-react

  - put the OUIA attributes on the menu, safe by default
  - default the menu role to listbox and the toggle aria-haspopup to listbox
  - wrap the options in a menu content with menuHeight, maxMenuHeight and
    scrollable
  - move the focus to the menu with the toggle arrow keys (not for the
    typeahead variant), overridable with onToggleKeydown
  - add focusTimeoutDelay, scrollOnItemFocus, closeOnSelect and the 9999
    z-index default
  - bind the open state to a custom toggle slot, like Dropdown
  - type the slots and drop any
  - port every upstream example to the story

- *(SimpleList)* Align with patternfly-react

  - emit select with the event and the value of the clicked item
  - accept number values, typing v-model after the value type
  - add the link modifier to anchor items and type the button type as
    button, submit or reset
  - put the attributes of SimpleListGroup on its section and generate its
    title id so the title always labels the list
  - share the injection key through common.ts and type the slots
  - port every upstream example to the story

- *(Tabs)* Align with patternfly-react

  - Tabs: fix the overflow menu, which used the vertical expanded state and
    rendered its items outside of the menu; selecting an item activates the
    tab, the overflow tab shows the selected title and is recounted when
    the tabs resize
  - Tabs: add the expandable toggle, the animated current tab accent, the
    nav prop, tabListAriaLabel/tabListAriaLabelledby, the select event,
    mountOnEnter/unmountOnExit defaults, the overflow settings, the add
    button and the close buttons (onAdd/onClose)
  - Tabs: render the scroll buttons only while scrollable and default
    ouiaSafe to true
  - Tab: add eventKey, the actions slot, the tooltip prop/slot,
    closeButtonAriaLabel, closeDisabled and contentId; prevent selecting
    aria-disabled tabs; add role="presentation" and the action/disabled
    modifiers to the item; put the OUIA attributes on the tab button; omit
    aria-controls of panels that are not mounted
  - add TabAction and TabContentBody
  - port every upstream example to the story

- *(TextInput)* Align with patternfly-react

  - implement startTruncated, which was declared but ignored: the value is
    truncated at its start while the input is not focused (trimLeft and
    innerDimensions helpers in util)
  - put the OUIA attributes on the input, safe by default
  - keep a custom aria-invalid
  - add expandedControls, making the input a combobox controlling the
    expanded element (expandedProps)
  - emit focus, replace newlines in the value with spaces and warn without
    an accessible name
  - type the slots and port every upstream example to the story

- *(Textarea)* [**breaking**] Align with patternfly-react

  - add the pf-m-textarea modifier to the form control
  - auto resize while typing, not only on change, with the upstream height
    calculation
  - add resizeOrientation="none" and warn without an id or aria-label
  - port every upstream example to the story

- *(ToggleGroup)* Align with patternfly-react

  - ToggleGroup: add fill (isFill)
  - ToggleGroupItem: add iconPosition and warn about an icon-only item
    without an aria-label
  - share the injection keys through common.ts and type the slots
  - port every upstream example to the story

- *(Toolbar)* Align with patternfly-react

  - Toolbar: generate the id, add stickyBase, stickyStuck, the "all"
    collapseListedFiltersBreakpoint, numberOfFiltersText and the
    label-group-content slot (customLabelGroupContent); default ouiaSafe to
    true
  - ToolbarContent, ToolbarGroup, ToolbarItem, ToolbarToggleGroup: add the
    visibilityAtHeight breakpoint props
  - ToolbarToggleGroup: apply the gap, columnGap and rowGap props instead of
    the removed v5 spacers, link the toggle to the expandable content with
    aria-controls, set aria-expanded only when expanded and warn without a
    breakpoint or icon
  - ToolbarFilter: add the label group close button only with a
    deleteLabelGroup listener, and the outline variant only to string labels
  - add ToolbarExpandIconWrapper
  - port every upstream example to the story

- *(Tooltip)* Align with patternfly-react

  - add triggerRef (element, selector or function), appending the tooltip
    id to the aria attribute of the trigger while visible
  - add ariaLive, polite by default with a triggerRef
  - hide on Escape and toggle on Enter on the trigger, unless manual
  - keep the tooltip visible while the pointer is over it
  - add zIndex and the hidden event (onTooltipHidden)
  - apply a numeric maxWidth in pixels, drop the trigger min width default
    and hide on any click with the click trigger, like upstream
  - type the slots and port every upstream example to the story

- *(Slider)* Add Slider

  Port the patternfly-react Slider: discrete, continuous and custom steps,
  dragging, rail clicks and arrow keys, the value input (at the end or above
  the thumb, live or on commit), the tooltip over the thumb and the start
  and end actions.

  The value is bound with v-model; without v-model:input-value the input
  edits the value directly, clamped between min and max, while binding it
  keeps the input independent and passes it to the change event, like
  upstream.

- *(TreeView)* Add TreeView

  Port the patternfly-react TreeView and TreeViewSearch: data driven trees
  with selection, separate selectable nodes, multiple selection,
  checkboxes with the indeterminate state, badges, icons, guides, compact
  variants, item actions from the action slot, a toolbar slot, animations
  with inert collapsed children and the upstream keyboard navigation.

- *(Truncate)* Add Truncate

  Port the patternfly-react Truncate: truncation at the end, start or
  middle based on the width of the parent container, or on
  maxCharsDisplayed with screen reader content and a custom omission, link
  wrappers, and the tooltip with the full content, positioned with
  tooltipPosition and customized with tooltipAttrs.

- *(Wizard)* Add Wizard

- *(DragDrop)* Add drag-drop package

  Port @patternfly/react-drag-drop as @vue-patternfly/drag-drop, built on
  @dnd-kit/vue: PfDragDropSort, PfDragDropContainer and PfDroppable with the
  default and data-list variants, items bound with v-model:items and rendered
  by an #item slot, and a component prop replacing wrapper. The
  DualListSelectorList variant is deferred until DualListSelector is ported.

- *(Table)* [**breaking**] Align with patternfly-react

  Add Caption, TableText, ExpandableRowContent, InnerScrollContainer,
  OuterScrollContainer, ActionsColumn, TreeRowWrapper and
  HeaderCellInfoWrapper, and the missing Table, Tr, Th and Td features:
  radio and indeterminate selection, expand all, expandable and compound
  expandable cells, favorites, info tooltips/popovers, tree rows, draggable
  rows, truncation tooltips, plain/dynamic sticky header/no inset/animations
  modifiers and tree table keyboard navigation.

  Fix sticky cell offsets (PatternFly 6 InsetInlineStart/End variables),
  unstyled selection checkboxes, ignored visibility modifiers, invalid cell
  roles, aria-sort="none" on unsorted columns, data-label on tree title
  cells and the selectable rows caption. Port all the upstream examples to
  the story.

- *(DualListSelector)* Add DualListSelector

  Port the composable dual list selector: PfDualListSelector, its pane, list,
  list item, controls wrapper, control and tree, with v-model:selected on the
  options, keyboard navigation of the options and controls, and tree options
  named like those of pf-tree-view.

- *(DragDrop)* Add dual-list-selector variant

  Render the draggable objects as dual list selector options with a drag
  button, and the drag overlay in a dual list selector.


### Refactor

- *(BackgroundImage)* Align the component shape and add tests

  - Declare props in a plain script block and fix the src description
  - Port upstream's tests
  - Add the differences section to the story


## [6.0.0-beta.15] - 2026-10-19

### Bug Fixes

- *(Spinner)* Always default aria-label to Contents
- *(JumpLinks)* Mark the last item current at the bottom of the scroll container
- *(Tabs)* Honor hash-linked nav tabs
- *(ToolbarFilter)* Clear the filter count on unmount
- *(Button)* Wrap the text in a button text container
- *(MenuToggle)* [**breaking**] Render the plain toggle content as text

### Documentation

- Add examples of the PatternFly 6.7 features
- *(Page)* Lay out the docked navigation with a docked masthead
- *(Page)* Demonstrate the docked overlay like patternfly-react

### Features

- *(Page,Nav,Button,MenuToggle)* [**breaking**] Align docked nav props with PatternFly 6.7
- *(MenuToggle)* Add aria-haspopup prop defaulting to menu
- *(Modal,Backdrop)* Add animation support
- *(FormGroup)* Add actionGroup to contain form action buttons
- *(Drawer)* Add viewport variant and close button props
- *(NavExpandable)* Add expandableIcon for docked nav sections
- *(Page)* Add PageHeader, PageFooter, plain and footer slot
- *(Toolbar)* Add container query support and flex grow
- *(Table)* Add Tfoot and sticky footer
- *(core)* [**breaking**] Require @patternfly/patternfly 6.7
- *(NavExpandable)* Add an icon slot
- *(Masthead)* Add the docked variant
- *(Toolbar)* Add the vertical orientation

## [6.0.0-beta.14] - 2026-10-19

### Bug Fixes

- *(AccordionItem)* Wrap toggle and content in an accordion item element
- *(FormSelect)* Type the v-model update with the emitted value
- *(ToggleGroup)* Type the v-model update with the emitted value
- *(Select)* Type the selected v-model update with the emitted value

### Documentation

- Fix type errors in the docs app

### Features

- *(Table)* Expose the underlying table element

## [6.0.0-beta.13] - 2026-10-10

### Bug Fixes

- *(Menu)* Menu items were not registered in the built package
- Removed the remaining import cycles between parent and child components

## [6.0.0-beta.12] - 2026-10-09

### Bug Fixes

- Fixed issues with components using custom render functions not being re-evaluated properly on changes
- *(util)* FindComponentVNode stopped searching at the first fragment
- *(Button)* Aria-expanded passed as attribute was always overridden by the expanded prop
- *(Button)* AriaCurrent prop was not applied to the element
- *(Button)* SpinnerAriaLabel and spinnerAriaLabelledBy props were not passed to the spinner
- *(Button)* Prevent inoperable events when aria-disabled
- *(Label)* Disabled was not declared as a prop and had no effect
- *(LabelGroup)* Overflow label was always rendered, even when all labels fit
- *(TextInput)* AriaLabel prop was not applied to the input
- *(Textarea)* Keyup event was never emitted
- *(Checkbox)* Not indeterminate when mounted with a null model
- *(PassThrough)* Exposed templateFn was always undefined, so useRef never rendered the stored template
- *(AccordionItem)* Fallthrough attributes were applied to both the toggle button and the content
- *(ExpandableSection)* Generate a content id when contentId is not provided, so the toggle always references the content via aria-controls
- *(Tab)* Tab panels were not labelled by their tab button
- *(Modal)* Header always used the help layout, even without a help slot
- *(Modal)* NoBodyWrapper rendered an unknown pass-through element instead of omitting the body wrapper
- *(Modal)* Dialog was not labelled by its title
- *(Modal)* Close on Escape key press
- *(Th)* Scope prop was not applied to the header cell
- *(Th)* DefaultDirection was ignored when sorting a column for the first time
- *(Wrap)* Pass the wrapped content as a function slot when the wrapper is a component
- *(Button)* Unwrap reactive custom components passed via the component prop
- *(NotificationDrawer)* List item header declared the list item component name
- *(NotificationDrawer)* Group never called the onExpand callback
- *(Page)* Sidebar body wrapped its content in a duplicate sidebar body element
- *(Page)* Toggle button aria-expanded was always false for non hamburger toggles
- *(Pagination)* Variant had no default, hiding the total items
- *(Pagination)* Inset modifiers did not update when props changed
- *(SimpleList)* Hidden input submitted the internal symbol id of items without a value
- *(SimpleList)* Item button was hidden from assistive technology
- *(ToggleGroup)* Deselecting from an array selection mutated the model in place without emitting
- *(Toolbar)* Expandable content clear filters button never called clearAllFilters
- *(Toolbar)* Toggle group compared the window width in px with the rem lg breakpoint
- *(Toolbar)* Filter labels slot caused an infinite update loop
- *(Nav)* Custom ariaLabel was always replaced by 'Local'
- *(NavList)* Scroll buttons were shown until the first resize even when all items fit
- *(Nav)* Items outside of a page sidebar were removed from the tab order
- *(NavItem)* Explicit tabindex was always dropped
- *(NavItem)* Clicking outside opened the flyout instead of closing it
- *(SearchInput)* Previous navigation button was not a plain button
- *(Select)* Select event did not include the selected item id
- *(Dropdown)* ShouldFocusFirstItemOnOpen never focused the first item
- *(MenuItem)* ActiveItemId of the menu was ignored
- *(Menu)* Flyout menus never opened
- *(Button)* Explicit role attribute was overridden
- *(Tooltip)* Content prop was not rendered without a content slot
- *(Tooltip)* Mouse listeners were added instead of removed on unmount
- *(Tooltip)* EntryDelay and exitDelay were ignored
- *(Tooltip)* Aria prop never linked the trigger to the tooltip
- *(Title)* H prop values 'h1'..'h6' rendered an invalid <hh2> element
- *(AlertActionLink)* OuiaId was ignored and replaced by a generated id
- *(CloseButton)* OuiaId was ignored and replaced by a generated id
- *(NotificationBadge)* OuiaId was ignored and replaced by a generated id
- *(NotificationBadge)* Expanded prop did not set aria-expanded nor the clicked modifier
- *(Content)* Wrapper class was applied to every element, not only to div
- *(Progress)* Inside measure location added a 'true' class instead of the inside modifier
- *(Progress)* Inside measure showed the raw value instead of the label or scaled percentage
- *(FileUpload)* BrowseButtonClick was emitted twice per click
- *(FileUpload)* Edits in the text preview did not update the model
- *(Tabs)* Tab content did not follow changes of the secondary prop
- *(FocusTrap)* Active and paused changes before the trap was created were lost
- *(FloatingUi)* Injected teleport destination was ignored unless teleportTo was null
- *(FloatingUi)* Content was not rendered when disable was set
- *(Card)* Change event was never emitted when the selection checkbox changed
- *(CardHeader)* Expandable toggle button did not expose aria-expanded
- *(CardBody)* Filled defaulted to false, making every body no-fill
- *(CardHeaderMain)* Header main class was never applied
- *(BreadcrumbItem)* Link and current classes were never applied to the link
- *(EmptyStateHeader)* Component was named PfEmptyStateBody
- *(DataListItem)* Selection inputs were always checkboxes, even for single selection
- *(DataListItem)* Selectable items could not be selected with the keyboard
- *(DataListItemRow)* Default toggle did not reflect the expanded state
- *(DataListAction)* Visibility modifiers did not react to prop changes
- *(DataListCheck)* OtherControls rendered an unknown pass-through element
- *(DescriptionListTermHelpTextButton)* Help text button was not focusable
- *(AutoWrap)* Force did not create the wrapper when there were no children to wrap
- *(DrawerPanelContent)* Widths prop was never applied
- *(FormAlert)* Rendered a form element, nesting a form inside the parent form
- *(FormFieldGroup)* Collapsed uncontrolled toggle had no aria-expanded attribute
- *(HelperTextItem)* Icon was not hidden from assistive technologies
- *(JumpLinks)* Toggle was rendered when nonExpandable
- *(JumpLinksItem)* Item had role="list" instead of its implicit listitem role
- *(JumpLinksItem)* Nested lists were rendered inside the link
- *(TextInputGroup)* Inner input did not react to disabled changes
- *(PageSidebarBody)* No-fill modifier was applied by default
- *(Menu)* ActiveItemId changes after mount were ignored
- *(DataListCheck)* Checked state was bound to a model named expanded
- *(FormFieldGroup)* Toggle id was generated during render instead of setup
- *(DrawerPanelContent)* Splitter handle was not hidden from assistive technologies
- *(MenuItem)* Icons were not hidden from assistive technologies
- *(NavItem)* Flyout toggle icon was not hidden from assistive technologies
- *(SimpleListGroup)* Title was not hidden from assistive technologies
- *(LabelGroup)* Close icon was not hidden from assistive technologies
- *(Popover)* Trigger click listener was never removed
- *(CardExpandableContent)* NoOffset prop was declared but never used
- *(DataListToggle)* NoPadding prop was declared but never used
- *(LoginPage)* BackgroundImgAlt prop was declared but never used
- *(PageSidebar)* Theme prop was declared but never used
- *(DataListToggle)* AriaLabelledby prop was ignored
- *(Pagination)* Page was not updated when the selected perPage left it out of range
- *(Pagination)* LastFullPageShown was ignored
- *(PageToggleButton)* Warned about missing injections outside of a page
- *(PageSidebar)* Warned about missing injections outside of a page
- *(PageToggleButton)* Exported an unused duplicate of SidebarOpenKey
- *(PageSidebar)* SidebarOpen defaulted to false, collapsing unmanaged sidebars
- *(HelperText)* Items did not follow changes of the component prop
- *(ToolbarToggleGroup)* Xl2 breakpoint prop was ignored
- *(SimpleList)* Groups were wrapped in an extra list until the second render
- *(Title)* Heading level applied the PatternFly 5 size instead of the hN modifier
- *(Toolbar)* Story pagination widget id repeated the variant suffix

## [6.0.0-beta.11] - 2026-09-08

### Bug Fixes

- *(AlertGroup)* Unintended forced re-rendering of inner alert items, which also caused automatic dismiss not to always work properly

### Features

- *(Page)* Added styles for glass

## [6.0.0-beta.10] - 2026-08-14

### Bug Fixes

- *(MenuToggle)* Removed empty span when no text is present
- *(MenuToggle)* Fixed duplicated default slot in type-ahead variant
- *(HelperTextItem)* Used non-default variant icon by default, removed icon and dynamic flags
- *(MenuToggle)* Circle style applied only to plain variant
- *(docs)* Removed icon and dynamic props from HelperText story
- *(FormGroup)* Removed icon props from HelperTextItems
- *(Alert)* Moved toggle icon in proper pf-button slot
- Switch right angle icon to down angle icon in all vertical expanding components
- *(Label)* Applied status classes and icons
- *(Label)* Fixed label @click event
- *(Label)* Disabled state for label with links

### Documentation

- *(MenuToggle)* Added circle and placeholder variant and status toggle examples

### Features

- *(MenuToggle)* InForm style modifier
- *(Badge)* Disabled state
- *(Banner)* Add pill variant
- *(Select)* Added label prop and icon slot for menu toggle
- *(docs)* Added selector for all the available themes
- *(Card)* Added subtitle slot to CardTitle
- *(Card)* Add glass prop
- *(Label)* Add variant

### Refactor

- Implemented optional capture slot in pass-through that captures all contained vnodes and passes them to the default slot to re-render

## [6.0.0-beta.9] - 2026-06-22

### Bug Fixes

- *(DataList)* Allow per-item override of the expandable prop
- *(NotificationBadge)* Changed default icon for attention variant
- *(LabelGroup)* Updated close icon
- *(Page)* Pass sidebar state to button for expanded toggle state
- *(Tabs)* Incorrect pf-tab-button and pf-tab-content ids ([#14](https://github.com/mtorromeo/vue-patternfly/issues/14))

### Features

- *(Icons)* Allow more complex paths and SVGs
- *(Button)* Added circle variant
- *(Page)* [**breaking**] Replaced skeleton slot with skip-to-content + masthead + sidebar slots
- *(Page)* Added responsive docked nav
- *(NotificationBadge)* Add support for plain variant

## [6.0.0-beta.8] - 2026-05-27

### Bug Fixes

- *(Page)* Remove drawer content body wrapper from notification drawer
- *(Page)* Wrong breakpoint calculation
- *(OverflowMenu)* Wrong breakpoint calculation
- *(Toolbar)* Wrong breakpoint calculation
- Avoid exposing vue's definition of the html autocomplete attribute to avoid "type too complex" errors
- Update peerDependency for @useuse and added package.json to exports

### Documentation

- Implemented fallthrough attributes documentation on component-info component

### Features

- *(InputGroup)* Add plain input group text variant

### Refactor

- [**breaking**] Updated build to use vite 8 and dropped cjs/iife bundles

## [6.0.0-beta.7] - 2025-11-26

### Bug Fixes

- *(input)* Fixed errors on input validation

## [6.0.0-beta.6] - 2025-11-25

### Bug Fixes

- *(FormSelect)* Fixed form-select multiple behavior

### Documentation

- Added some input test cases

## [6.0.0-beta.5] - 2025-10-15

### Bug Fixes

- *(Toolbar)* Toolbar group toggling on click
- *(Page)* Duplicated main-container
- *(Icon)* Fixed component name
- *(Toolbar)* Fixed close button on filter labels in `pf-toolbar-filter`
- Imported fixes from v5
- *(types)* Used ComponentExposed instead of InstanceType
- *(types)* Reverted export Props for ToolbarGroupToggle
- *(Label, Pagination, SearchInput, Tabs)* Fixed placement of icons in buttons
- *(docs)* Fixed placement of icons in buttons
- *(Card)* Fixed class of card title text

### Documentation

- Published v6 docs
- Added link to v5
- Fixed github links
- Minor fixes
- Misc fixes
- *(Card)* Added secondary example

### Features

- *(Textarea)* Component is generic over v-model number modifier
- *(FormSelect)* Component is generic and accepts/returns string or string[] depending on the `multiple` prop
- *(TextInputGroup)* Implemented generics over type=number and v-model.number
- *(Card)* Added wrap prop to `pf-card-header`
- *(MenuToggle)* Default to ellipsis-icon for plain variant with no slots
- *(Page)* Support for page without sidebar
- *(Button)* Implemented favorite, settings and hamburger variants
- *(Divider)* Added role prop
- *(Navigation)* Added inert attribute to NavExpandable
- *(MenuToggle)* Added settings variant

### Refactor

- Changed all custom event names to pascalCase
- Removed custom ComponentProps type helper and Props exports

## [6.0.0-beta.4] - 2025-05-06

### Bug Fixes

- *(Dropdown)* Possible error with should-focus-first-item-on-open
- *(Switch)* Removed unused labelOff prop
- *(Card)* Fixed cards always expandable
- *(FormFieldGroup)* Fixed always expandable state
- *(Tabs)* Respected defaultExpanded prop
- *(FloatingUi)* Correctly remove from dom floating elements being quickly shown/hidden before css transitions can start

### Features

- *(TextInput, Textarea)* Implemented model's number, trim and lazy modifiers

## [6.0.0-beta.3] - 2025-05-05

### Bug Fixes

- *(Tooltip, Popover)* Handle visible props as booleans
- *(Button)* Fixed icon position of pf-close-button
- *(ToggleGroup)* Fixed reexport of components in multiple bundles

### Features

- *(Dropdown, Menu)* Keyboard navigation
- *(Content)* Converted pf-text-* components to pf-content

## [6.0.0-beta.2] - 2025-05-02

### Bug Fixes

- *(Dropdown)* Fixed dividers in multi group dropdown menus

### Features

- *(FloatingUi)* Implemented optional fade-in/fade-out for the floating element and removed specific implementations from pf-popover and pf-tooltip

### Refactor

- Removed getUniqueId util function
- Replaced custom useManagedProp with builtin defineModel

## [6.0.0-beta.1] - 2025-04-24

### Features

- Migrated library to patternfly v6

### Refactor

- V6 wip

## [5.0.0] - 2025-04-23

### Bug Fixes

- *(Radio, Checkbox)* [**breaking**] Renamed body slot to default
- *(Checkbox)* Properly assigned name attribute to input
- *(Flex)* Fixed direction, display and flex-wrap related css classes
- *(Flex)* Fixed align-self related css classes
- [**breaking**] Fixed some responsive props by reverting -xl2 breakpoint suffixes to -2xl
- *(TextInput, Textarea)* [**breaking**] Changed default value of autoValidate from "change" to true (on enter/submit)

### Documentation

- Fixed skeleton height story
- Added flex interactive demo

### Features

- *(FormSelect)* Support for multiple values
- *(FileUpload)* Implemented component
- *(Flex)* Added gap and column-gap responsive props
- *(Flex)* Added row-gap responsive props
- *(Flex)* Added order responsive props
- *(Gallery)* Added max-width and min-width responsive props
- *(Grid)* Added order responsive props
- *(Split)* Added wrappable prop
- *(MenuItem)* Added target, referrerpolicy and componentAttrs props

### Refactor

- Replaced plain refs to template elements with useTemplateRef
- *(Checkbox, DataList, MenuToggle, Radio)* [**breaking**] Removed valid/invalid attributes. Use aria-invalid instead.
- Fixed useTemplateRef and @touchstart related warnings

## [0.1.0-beta.30] - 2025-04-08

### Bug Fixes

- *(Tabs)* Corrected umount-on-exit behavior and added enter/leave emits on pf-tab
- *(Radio)* Properly assigned name attribute to input
- *(Tabs)* Added missing title slot declaration

### Documentation

- Reorganized layout documentation stories

### Features

- *(Radio)* Auto generate a unique id for label and input if none is specified and the input is not wrapped in a label
- *(Banner)* Implemented component
- *(ActionList)* Implemented components

## [0.1.0-beta.29] - 2025-04-07

### Bug Fixes

- *(FormGroup)* Removed debugging statement

## [0.1.0-beta.28] - 2025-04-07

### Bug Fixes

- *(FormGroup)* Allow slot usage
- *(Tabs)* Support dynamic tabs
- *(Inputs)* Reactive validated prop
- *(core)* [**breaking**] Uniformed slot names to lower case with dashes

### Features

- *(DescriptionList)* Implemented components
- *(Switch)* Implemented check-icon prop

### Refactor

- *(Radio)* [**breaking**] Removed label-wrapped prop (use component="label" instead)

## [0.1.0-beta.27] - 2024-07-26

### Bug Fixes

- *(FloatingUi)* Prevented warning when no FloatingElementTeleportKey injection is provided

### Features

- *(Select)* Added no-focus-first-item-on-open prop
- *(ProgressStepper)* Implemented components

## [0.1.0-beta.26] - 2024-07-03

### Bug Fixes

- *(Dropdown, Select)* Focus first menu item when opened by click

### Features

- *(MenuToggleCheckbox)* Added indeterminate state by setting checked=null
- *(Dropdown)* Added support for setting height for dropdown

## [0.1.0-beta.25] - 2024-03-13

### Bug Fixes

- *(List)* Fixed list item types of pf-lists without icons
- *(Input)* Fixed validity functions when called directly from the dom elements

### Features

- *(Form)* Exposed elements array that tracks all the child components that wrap form inputs
- *(Inputs)* Added ability to programmatically reset internal validation state with setCustomValidity('')
- *(FloatingUi)* Allowed to provide a default teleport destination for all child floating components via FloatingElementTeleportKey

## [0.1.0-beta.24] - 2024-03-05

### Bug Fixes

- *(TextInput, Textarea)* Fixed update of input values when the modelValue prop changes

## [0.1.0-beta.23] - 2024-02-15

### Bug Fixes

- *(Page)* Fixed auto-hide of nav sidebar on mobile when clicking anywhere on the page
- *(InputGroup)* Don't add aria-describedby automatically
- *(Notification Drawer)* Added screen reader text for notification drawer item read state
- *(MenuItem)* Add download to MenuItem
- *(Icons)* Rename custom icons

### Features

- *(TextInput)* Added prop to disable the validation status icon
- *(Form)* Added maxWidth prop
- *(Nav)* Added title slot to pf-nav-expandable
- *(Nav)* Updated to add wrapper for nav link text
- *(Accordion)* Added toggle alignment functionality
- *(Radio, Checkbox)* Add support for labelWrapped and component

### Refactor

- *(misc)* CSS harcoded variables and classes replaced with react-tokens and react-styles

## [0.1.0-beta.22] - 2024-01-30

### Bug Fixes

- *(Pagination)* Fixed definition of the new total slot
- *(Alert)* Fixed automatic dismissal with timeout not requiring mouseover or element focus to trigger

## [0.1.0-beta.21] - 2024-01-29

### Bug Fixes

- *(Progress)* Use scaledValue for fallback percentage label
- *(Drawer)* Applied display none after close animation to avoid rare layout issues
- *(Drawer)* Fixed TouchEvent undefined error
- *(FormSelect)* Inherit v-model behavior from native select

### Features

- *(Pagination)* Added "total" slot for displaying custom pagination total items informations

## [0.1.0-beta.20] - 2024-01-16

### Bug Fixes

- *(Tabs)* Fixed activation of tabs with keys that are defined but falsy
- *(NotificationDrawer)* Fixed @close event handler
- Allowed null modelValues for all form inputs

### Features

- *(Textarea)* Added maxHeight and maxWidth props

## [0.1.0-beta.19] - 2023-12-18

### Bug Fixes

- *(Masthead)* Applied ouia attributes to the correct node

### Features

- *(Tooltip)* Implemented position=auto, append-to, min-width, exit-delay, entry-delay, animation-duration props

## [0.1.0-beta.18] - 2023-12-14

### Bug Fixes

- *(Table)* Removed unused prop hoverable from `pf-tr`
- *(core)* Removed unassignable attributes from component definitions
- Corrected capitalization of PatternFly
- *(docs)* Fixed usage of non-existing value prop in pf-text-input story
- *(JumpLinks)* Fixed refresh of link's text
- *(Progress)* Changed default measure-location and tooltip-position to 'top'
- *(Select)* Fixed default menu placement and added `placement` prop

### Features

- *(Table)* Added caption when table has selectable rows
- Added ouia attributes for all components and changed the data-ouia-component-type prefix from V-PF4/ to PF/
- *(Select, Pagination, Popover)* Added append-to prop to render the floating element in a custom document position
- *(Tooltip)* Implemented focus, click and manual triggers

## [0.1.0-beta.17] - 2023-12-05

### Bug Fixes

- *(Drawer)* Applied correct default panel size
- *(Drawer)* Removed auto-wrapping of content with pf-drawer-header that interfered with layout of pf-notification-drawer
- *(docs)* Fixed incorrect usage of props
- *(types)* Workaround for wrongly defined onInput event (See https://github.com/vuejs/core/pull/9675)
- *(ToggleGroupItem)* Fixed usage of default slot
- *(docs)* Removed test link from TOC
- *(Table)* Fiex GlobalComponents definition for PfTable
- *(Table)* Fixed pf5 css classes for sticky cells
- *(Table)* Fixed package export of style.css
- *(Textarea)* Fixed resize-orientation=both and readonly-variant=plain
- *(Textarea)* Properly resize on change and mounted with auto-resize
- *(Drawer)* Removed duplicated slot in resizable drawers
- *(FormSelect, JumpLinks, Page)* Added missing component imports
- *(Table)* Restored native th attribute inheriting of pf-th
- *(helpers)* Fixed usage of include/exclude filters passed as Array of components
- *(Select)* Simplified pf-select component by making it bind all extra arguments to its pf-menu and removed extra div container which resulted in the wrong menu width
- *(Menu)* Fixed typeahead variant styles
- *(LoginPage)* Corrected pf-login-header slot name

### Documentation

- Added instructions for pf-table plugin
- Add links to github with the source code of the story pages
- Added height prop of story-canvas
- More complete pf-select examples
- Added links to every component's source code in the API Docs tabs
- Allowed story blocks to be sourced as separate components
- Full pf-select with typeahead example

### Features

- *(Drawer)* Implemented the no-background color variant
- *(NotificationDrawer)* Implemented keyboard handler on toggle button
- *(docs)* Actual notification drawer example in page story
- *(Table)* Implemented Table component
- *(docs)* Implemented props/events/slots documentation tables with vue-docgen-api
- *(JumpLink)* Implemented `pf-jump-links` components
- *(Tabs)* Implemented click event and icon slot on `pf-tab` and allowed to set href and target on the tab link
- *(docs)* Added List story
- *(docs)* Added Tooltip story
- *(Table)* Implemented row selection
- *(icons)* Updated @fortawesome/free-* icons
- *(FormSelect)* Added native select change event
- *(FormSelect, TextInputGroup)* Exposed native inputs
- *(FloatingUi)* Allow use of virtual elements as references for floating-ui
- *(Select)* Added props for select toggle element
- *(Menu)* Implemented automatic of PfTextInputGroup, PfSearchInput in PfMenuInput container when inside PfMenu
- *(Select)* Auto close menu on outside click and escape and tab key presses

### Refactor

- Removed single component reexport files
- *(Progress)* Renamed label slot to default

## [0.1.0-beta.16] - 2023-11-16

### Bug Fixes

- *(core)* Renamed all `...-2xl` props to `...-xl2` due to limitations in vue to recognize `...-2xl` as a prop
- *(SimpleList)* Removed requirement for the `value` and `component` props of `pf-simple-list-item`s
- *(ToggleGroup)* Removed HTMLAttributes declaration due to upstream issue in vue-tsc

### Documentation

- Added actual background image to the pf-background-image story
- Fixed some wrong props usage in documentation of components

### Features

- *(LoginPage)* Added `pf-login-main-footer-band-item` and `pf-login-main-footer-links-item` components
- *(Alert)* Use custom CSS for default

### Refactor

- *(core)* Uniformed append-to props accross components

## [0.1.0-beta.15] - 2023-11-08

### Features

- *(Masthead)* Allow masthead to be user as a router-link (added `to` and `replace` props)

### Refactor

- Moved @vueuse/integrations and focus-trap to external dependencies in rollup

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
- Fixed build
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
- *(core)* Added bundle builds core.global.js and core.umd.js

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
- Changed the build to export each module separately to allow to import individual components, functions or types
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
- Remove preserveValueImports for commonjs builds
- Fixed type imports in docs
- *(Tooltip, Popover, FloatinUI)* Fixed recursive reactive dependency that caused loop in render functions
- Block use of typescript 4.9 until supported by vue-tsc
- Fixed build script execution order and form group exported symbol
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
- Migrated storybook builder to vite

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

- *(Icons)* Updated vue peer-dependency and added prepublish build script
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
- Fixed build issue with latest vueuse + webpack

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

## [0.1.0-alpha.0] - 2021-06-14

<!-- generated by git-cliff -->
