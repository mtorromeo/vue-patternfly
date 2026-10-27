<template>
  <doc-page title="Modal">
    <template #description
      >A <b>modal</b> displays important information to a user without requiring them to navigate to a new
      page.</template
    >

    <template #apidocs>
      <component-info name="PfModal" />
      <component-info name="PfModalHeader" />
      <component-info name="PfModalBody" />
      <component-info name="PfModalFooter" />
    </template>

    <pre v-md>
      When using the modal component, it is recommended to control it via the `open` property rather than conditionally rendering the modal.

      Conditional rendering can potentially lead to unforeseen issues, especially with animations enabled.

      ## Differences from patternfly-react
      - The open state is bound with `v-model:open`: the close button and the Escape key set it to `false` (`onClose`).
      - The close button is shown unless `no-close` is set, rather than only when `onClose` is passed.
      - An `@escape-press` listener replaces the closing on Escape (`onEscapePress`).
      - `pf-modal` also accepts the header and the footer directly, as shortcuts for `pf-modal-header` and `pf-modal-footer`: the `title`, `title-icon-variant` and `title-label` props, and the `header`, `title-icon`, `description`, `help` and `footer` slots.
      - Content that is not a `pf-modal-header`, `pf-modal-body` or `pf-modal-footer` is wrapped in a `pf-modal-body`, unless `no-body-wrapper` is set.
      - Inside a modal, the title and the description of `pf-modal-header` label and describe the dialog, so `aria-labelledby`, `aria-describedby`, `label-id` and `descriptor-id` are only needed to point elsewhere.
      - `title-label` replaces `titleScreenReaderText`, and a custom title icon goes in the `title-icon` slot rather than in `titleIconVariant`.
      - `hasAnimations` is replaced by `no-animations` with inverted behavior.
      - `backdropClassName` is replaced by `backdrop-class`.
      - `append-to` also accepts a CSS selector.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic modals">
      <template #intro>
        <pre v-md>
          Basic modals give users the option to either confirm or cancel an action.

          To flag an open modal, bind the `open` property with `v-model:open`, which the close button and the Escape key set to `false`.

          The `pf-modal-body`, `pf-modal-header`, and `pf-modal-footer` components are not required, but are typically used to display the main content of the modal, modal title, and any button actions, respectively.
        </pre>
      </template>

      <pf-button variant="primary" ouia-id="ShowBasicModal" @click="open.basic = true">Show basic modal</pf-button>
      <pf-modal v-model:open="open.basic" ouia-id="BasicModal">
        <pf-modal-header title="Basic modal" />
        <pf-modal-body>{{ lorem }}</pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.basic = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.basic = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Scrollable modals">
      <template #intro>
        <pre v-md>
          To enable keyboard-accessible scrolling of a modal's content, pass `tabindex="0"` to the `pf-modal-body`.

          In this example the height of the modal is limited with the `--pf-v6-c-modal-box--MaxHeight` variable, so that its content overflows on any screen.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.scrollable = true">Show modal</pf-button>
      <pf-modal
        v-model:open="open.scrollable"
        variant="small"
        style="--pf-v6-c-modal-box--MaxHeight: min(25rem, calc(100% - var(--pf-t--global--spacer--2xl)))"
      >
        <pf-modal-header title="Modal with overflowing content" />
        <pf-modal-body tabindex="0" aria-label="Scrollable modal content">
          <template v-for="(paragraph, i) in longLorem" :key="i">
            <template v-if="i">
              <br />
              <br />
            </template>
            {{ paragraph }}
          </template>
        </pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.scrollable = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.scrollable = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="With a static description">
      <template #intro>
        <pre v-md>
          To provide additional information about a modal, use the `description` property of the `pf-modal-header` (or its `description` slot). Descriptions are static and do not scroll with other modal content.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.description = true">Show modal with description</pf-button>
      <pf-modal
        v-model:open="open.description"
        variant="small"
        style="--pf-v6-c-modal-box--MaxHeight: min(25rem, calc(100% - var(--pf-t--global--spacer--2xl)))"
      >
        <pf-modal-header
          title="Modal with description"
          description="A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body."
        />
        <pf-modal-body tabindex="0">
          <template v-for="(paragraph, i) in longLorem" :key="i">
            <template v-if="i">
              <br />
              <br />
            </template>
            {{ paragraph }}
          </template>
        </pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.description = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.description = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Top aligned">
      <template #intro>
        <pre v-md>
          To override a modal's default center alignment, use the `position` property. In this example, `position` is set to "top", which moves the modal to the top of the screen.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.top = true">Show top aligned modal</pf-button>
      <pf-modal v-model:open="open.top" position="top">
        <pf-modal-header title="Top aligned modal" />
        <pf-modal-body>{{ lorem }}</pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.top = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.top = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Modal sizes">
      <template #intro>
        <pre v-md>
          To adjust the size of a modal, use the `variant` property. Modal variants include "small", "medium", "large", and "default".

          In the following example, you can display each modal size option. To launch a modal with a specific size, first select the respective radio button, followed by the "Show modal" button.
        </pre>
      </template>

      <pf-radio
        v-for="size in sizes"
        :id="`modal-size-${size}-selector`"
        :key="size"
        name="Variant options"
        :label="`${capitalize(size)} variant`"
        :checked="size === selectedSize"
        @change="selectedSize = size"
      />
      <br />
      <pf-button variant="primary" @click="open.size = true">Show modal</pf-button>
      <pf-modal v-model:open="open.size" :variant="selectedSize">
        <pf-modal-header :title="`${capitalize(selectedSize)} modal`" />
        <pf-modal-body>{{ lorem }}</pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.size = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.size = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Custom width">
      <template #intro>
        <pre v-md>
          To choose a specific width for a modal, use the `width` property. The following example has a `width` of "50%".
        </pre>
      </template>

      <pf-button variant="primary" @click="open.width = true">Show custom width modal</pf-button>
      <pf-modal v-model:open="open.width" width="50%">
        <pf-modal-header title="Custom width modal" />
        <pf-modal-body>{{ lorem }}</pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.width = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.width = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Custom header">
      <template #intro>
        <pre v-md>
          To add a custom header to a modal, your custom content must be passed in the default slot of the `pf-modal-header` component. Do not pass the `title` property to `pf-modal-header` when using a custom header, and label the modal with `aria-labelledby`.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.customHeader = true">Show custom header/footer modal</pf-button>
      <pf-modal
        v-model:open="open.customHeader"
        variant="large"
        aria-labelledby="modal-custom-header-label"
        aria-describedby="modal-custom-header-description"
      >
        <pf-modal-header>
          <pf-content>
            <h1 id="modal-custom-header-label">Custom header modal</h1>
            <p>Add custom content to the header by not passing the title prop the modal box header component.</p>
          </pf-content>
        </pf-modal-header>
        <pf-modal-body>
          <span id="modal-custom-header-description">
            When static text describing the modal is available outside of the modal header, it can be given an ID that
            is then passed in as the modal's aria-describedby value.
          </span>
          <br />
          <br />
          {{ lorem }}
        </pf-modal-body>
        <pf-modal-footer>
          <pf-title h="4" size="md">
            <pf-flex space-items="sm">
              <triangle-exclamation-icon />
              <span>Custom modal footer.</span>
            </pf-flex>
          </pf-title>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="No header or footer">
      <template #intro>
        <pre v-md>
          To exclusively present information in a modal, remove the header and/or footer.

          When a modal has no header or footer, make sure to add an `aria-label` explicitly stating this, so that those using assistive technologies can understand this context.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.noHeader = true">Show no header/footer modal</pf-button>
      <pf-modal
        v-model:open="open.noHeader"
        variant="large"
        aria-label="No header/footer modal"
        aria-describedby="modal-no-header-description"
      >
        <pf-modal-body>
          <span id="modal-no-header-description">
            When static text describing the modal is available outside of the modal header, it can be given an ID that
            is then passed in as the modal's aria-describedby value.
          </span>
          <br />
          <br />
          {{ lorem }}
        </pf-modal-body>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Title icon">
      <template #intro>
        <pre v-md>
          To add an icon before a modal's title, use the `title-icon-variant` property, which can be set to a "success", "danger", "warning", "info" or "custom" variant. The following example uses a "warning" variant.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.titleIcon = true">Show title icon modal</pf-button>
      <pf-modal v-model:open="open.titleIcon" aria-describedby="modal-title-icon-description">
        <pf-modal-header title="Title icon modal" title-icon-variant="warning" />
        <pf-modal-body>
          <span id="modal-title-icon-description">
            When static text describing the modal is available outside of the modal header, it can be given an ID that
            is then passed in as the modal's aria-describedby value.
          </span>
          <br />
          <br />
          {{ lorem }}
        </pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.titleIcon = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.titleIcon = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Custom title icon">
      <template #intro>
        <pre v-md>
          To add a custom icon before a modal's title, pass it in the `title-icon` slot of the `pf-modal-header`.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.customIcon = true">Show custom title icon modal</pf-button>
      <pf-modal v-model:open="open.customIcon" aria-describedby="modal-custom-icon-description">
        <pf-modal-header title="Custom title icon modal">
          <template #title-icon>
            <bell-icon />
          </template>
        </pf-modal-header>
        <pf-modal-body>
          <span id="modal-custom-icon-description">
            When static text describing the modal is available outside of the modal header, it can be given an ID that
            is then passed in as the modal's aria-describedby value.
          </span>
          <br />
          <br />
          {{ lorem }}
        </pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.customIcon = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.customIcon = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="With wizard">
      <template #intro>
        <pre v-md>
          To guide users through a series of steps in a modal, you can add a wizard to a modal, without the modal's own close button (`no-close`).

          The wizard component is not available in vue-patternfly yet, so this example cannot be shown.
        </pre>
      </template>
    </story-canvas>

    <story-canvas title="With dropdown">
      <template #intro>
        <pre v-md>
          To present a menu of actions or links to a user, you can add a [dropdown](#/stories/components/dropdown) to a modal.

          Using the dropdown's default append location will interfere with keyboard accessibility due to the modal's built-in focus trap. To allow the dropdown to visually break out of the modal container, set the dropdown's `append-to` property to the id of the focus trap of the modal, set with the modal's `focus-trap-id` property. Otherwise you can use "inline" to allow it to scroll within the modal itself. Appending to the focus trap should allow the menu to expand visually outside the modal (no scrollbar created in the modal itself), and still allow focusing the content within that menu via keyboard. You should also handle the modal's closing behavior by listening to `@escape-press` on the `pf-modal`. This allows the "escape" key to collapse the dropdown without closing the entire modal.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.dropdown = true">Show dropdown modal</pf-button>
      <pf-modal
        v-model:open="open.dropdown"
        variant="small"
        focus-trap-id="modal-with-dropdown-focus-trap"
        @escape-press="onDropdownModalEscape"
        @update:open="dropdownOpen = false"
      >
        <pf-modal-header title="Dropdown modal" />
        <pf-modal-body>
          <div>
            Using the dropdown's default append location will interfere with keyboard accessibility due to the modal's
            built-in focus trap. To allow the dropdown to visually break out of the modal container, set the dropdown's
            append-to property to the id of the focus trap for the modal. This can be done by adding the focus-trap-id
            prop to the modal, and then setting the append location to that as per this example. Otherwise you can use
            "inline" to allow it to scroll within the modal itself. Appending to the focus trap should allow the menu to
            expand visually outside the modal (no scrollbar created in the modal itself), and still allow focusing the
            content within that menu via keyboard. You should also handle the modal's closing behavior by listening to
            <em>escape-press</em> on the modal component. This allows the "escape" key to collapse the dropdown without
            closing the entire modal.
          </div>
          <br />
          <div>
            <pf-dropdown
              v-model:open="dropdownOpen"
              text="Dropdown"
              id="modal-dropdown-toggle"
              append-to="#modal-with-dropdown-focus-trap"
              should-focus-toggle-on-select
            >
              <pf-dropdown-list>
                <pf-dropdown-item :value="0">Action</pf-dropdown-item>
                <pf-dropdown-item :value="1" to="#default-link2" @click="$event.preventDefault()"
                  >Link</pf-dropdown-item
                >
                <pf-dropdown-item :value="2" disabled>Disabled Action</pf-dropdown-item>
                <pf-dropdown-item :value="3" disabled to="#default-link4">Disabled Link</pf-dropdown-item>
              </pf-dropdown-list>
            </pf-dropdown>
          </div>
        </pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.dropdown = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.dropdown = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="With help">
      <template #intro>
        <pre v-md>
          To help simplify and explain complex models, add a help [popover](#/stories/components/popover) in the `help` slot of the `pf-modal-header`. Only place a help icon at the modal level if its information applies to all content in the modal. If the help popover is specific to a particular modal section, place the help icon beside that section instead.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.help = true">Show with help modal</pf-button>
      <pf-modal v-model:open="open.help" variant="small">
        <pf-modal-header title="With help modal">
          <template #help>
            <pf-popover>
              <pf-button variant="plain" aria-label="Help">
                <template #icon>
                  <circle-question-icon />
                </template>
              </pf-button>
              <template #header>
                <div>Help Popover</div>
              </template>
              <template #body>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
                  turpis.
                </div>
              </template>
              <template #footer>Popover Footer</template>
            </pf-popover>
          </template>
        </pf-modal-header>
        <pf-modal-body>{{ lorem }}</pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" @click="open.help = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.help = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="With form">
      <template #intro>
        <pre v-md>
          To collect user input within a modal, you can add a [form](#/stories/components/form).

          To enable form submission from a button in the modal's footer (outside of the `pf-form`), set the button's `form` attribute equal to the form's id.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.form = true">Show modal with form</pf-button>
      <pf-modal v-model:open="open.form" variant="small">
        <pf-modal-header
          title="Create account"
          description="Enter your personal information below to create an account."
        />
        <pf-modal-body>
          <pf-form id="modal-with-form-form">
            <pf-form-group label="Name" required field-id="modal-with-form-form-name">
              <template #label-help>
                <pf-popover>
                  <template #header>
                    <div>
                      The <a href="https://schema.org/name" target="_blank" rel="noopener noreferrer">name</a> of a
                      <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">Person</a>
                    </div>
                  </template>
                  <template #body>
                    <div>
                      Often composed of
                      <a href="https://schema.org/givenName" target="_blank" rel="noopener noreferrer">givenName</a>
                      and
                      <a href="https://schema.org/familyName" target="_blank" rel="noopener noreferrer">familyName</a>.
                    </div>
                  </template>
                  <pf-form-group-label-help aria-label="More info for name field" />
                </pf-popover>
              </template>
              <pf-text-input
                id="modal-with-form-form-name"
                v-model="form.name"
                required
                type="email"
                name="modal-with-form-form-name"
              />
            </pf-form-group>
            <pf-form-group label="E-mail" required field-id="modal-with-form-form-email">
              <template #label-help>
                <pf-popover>
                  <template #header>
                    <div>
                      The <a href="https://schema.org/email" target="_blank" rel="noopener noreferrer">e-mail</a> of a
                      <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">person</a>
                    </div>
                  </template>
                  <template #body>
                    <div>
                      Valid <a href="https://schema.org/email" target="_blank" rel="noopener noreferrer">e-mail</a>
                      address.
                    </div>
                  </template>
                  <pf-form-group-label-help aria-label="More info for e-mail field" />
                </pf-popover>
              </template>
              <pf-text-input
                id="modal-with-form-form-email"
                v-model="form.email"
                required
                type="email"
                name="modal-with-form-form-email"
              />
            </pf-form-group>
            <pf-form-group label="Address" required field-id="modal-with-form-form-address">
              <template #label-help>
                <pf-popover>
                  <template #header>
                    <div>
                      The <a href="https://schema.org/address" target="_blank" rel="noopener noreferrer">address</a> of
                      a <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">person</a>
                    </div>
                  </template>
                  <template #body>
                    <div>
                      Valid
                      <a href="https://schema.org/PostalAddress" target="_blank" rel="noopener noreferrer"
                        >postal address.</a
                      >
                    </div>
                  </template>
                  <pf-form-group-label-help aria-label="More info for address field" />
                </pf-popover>
              </template>
              <pf-text-input
                id="modal-with-form-form-address"
                v-model="form.address"
                required
                type="email"
                name="modal-with-form-form-address"
              />
            </pf-form-group>
          </pf-form>
        </pf-modal-body>
        <pf-modal-footer>
          <pf-button variant="primary" form="modal-with-form-form" @click="open.form = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.form = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Custom focus">
      <template #intro>
        <pre v-md>
          To customize which element inside the modal receives focus when initially opened, use the `element-to-focus` property.
        </pre>
      </template>

      <pf-button variant="primary" ouia-id="ShowCustomFocusModal" @click="open.focus = true">
        Show modal with custom focus
      </pf-button>
      <pf-modal v-model:open="open.focus" element-to-focus="#modal-custom-focus-confirm-button">
        <pf-modal-header title="Modal with custom focus" />
        <pf-modal-body>{{ lorem }}</pf-modal-body>
        <pf-modal-footer>
          <pf-button id="modal-custom-focus-confirm-button" variant="primary" @click="open.focus = false">
            Confirm
          </pf-button>
          <pf-button variant="link" @click="open.focus = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Non animated modal">
      <template #intro>
        <pre v-md>
          To explicitly disable animations, set the `no-animations` property on the modal.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.notAnimated = true">Show no animations modal</pf-button>
      <pf-modal
        v-model:open="open.notAnimated"
        no-animations
        variant="large"
        element-to-focus="#modal-not-animated-confirm-button"
      >
        <pf-modal-header title="Not Animated Modal Header" />
        <pf-modal-body>{{ lorem }}</pf-modal-body>
        <pf-modal-footer>
          <pf-button id="modal-not-animated-confirm-button" variant="primary" @click="open.notAnimated = false">
            Confirm
          </pf-button>
          <pf-button variant="link" @click="open.notAnimated = false">Cancel</pf-button>
        </pf-modal-footer>
      </pf-modal>
    </story-canvas>

    <story-canvas title="Shortcut props and slots">
      <template #intro>
        <pre v-md>
          The header and the footer can also be passed to `pf-modal` directly: the `title`, `title-icon-variant` and `title-label` props, and the `description`, `help`, `title-icon`, `header` and `footer` slots fill a `pf-modal-header` and a `pf-modal-footer`, while the rest of the content is wrapped in a `pf-modal-body`.
        </pre>
      </template>

      <pf-button variant="primary" @click="open.shortcut = true">Show modal</pf-button>
      <pf-modal v-model:open="open.shortcut" title="Shortcut modal" variant="small">
        {{ lorem }}
        <template #description>A description in the header of the modal.</template>
        <template #footer>
          <pf-button variant="primary" @click="open.shortcut = false">Confirm</pf-button>
          <pf-button variant="link" @click="open.shortcut = false">Cancel</pf-button>
        </template>
      </pf-modal>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import BellIcon from '@vue-patternfly/icons/bell-icon';
import CircleQuestionIcon from '@vue-patternfly/icons/circle-question-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import { capitalize, reactive, ref } from 'vue';

const open = reactive({
  basic: false,
  scrollable: false,
  description: false,
  top: false,
  size: false,
  width: false,
  customHeader: false,
  noHeader: false,
  titleIcon: false,
  customIcon: false,
  dropdown: false,
  help: false,
  form: false,
  focus: false,
  notAnimated: false,
  shortcut: false,
});

const sizes = ['small', 'medium', 'large'] as const;
const selectedSize = ref<(typeof sizes)[number]>('small');

const dropdownOpen = ref(false);

function onDropdownModalEscape() {
  if (dropdownOpen.value) {
    dropdownOpen.value = false;
    document.getElementById('modal-dropdown-toggle')?.focus();
  } else {
    open.dropdown = false;
  }
}

const form = reactive({ name: '', email: '', address: '' });

// the overflowing content of the upstream examples
const longLorem = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Semper auctor neque vitae tempus.
  Diam donec adipiscing tristique risus. Augue eget arcu dictum varius duis. Ut enim blandit volutpat maecenas
  volutpat blandit aliquam. Sit amet mauris commodo quis imperdiet massa tincidunt. Habitant morbi tristique senectus
  et netus. Fames ac turpis egestas sed tempus urna. Neque laoreet suspendisse interdum consectetur libero id.
  Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Porta nibh venenatis cras sed felis eget velit. Nullam
  non nisi est sit amet facilisis. Nunc mi ipsum faucibus vitae. Lorem sed risus ultricies tristique nulla aliquet
  enim tortor at. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Lacinia quis vel eros donec ac
  odio tempor orci. Malesuada fames ac turpis egestas integer eget aliquet.`,
  `Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Molestie at elementum eu facilisis sed odio morbi.
  Elit pellentesque habitant morbi tristique. Consequat nisl vel pretium lectus quam id leo in vitae. Quis varius
  quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus. Sollicitudin tempor id
  eu nisl nunc. Orci nulla pellentesque dignissim enim sit amet venenatis. Dignissim enim sit amet venenatis urna
  cursus eget. Iaculis at erat pellentesque adipiscing commodo elit. Faucibus pulvinar elementum integer enim neque
  volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis
  vitae. Blandit cursus risus at ultrices. Tellus mauris a diam maecenas sed enim. Non diam phasellus vestibulum
  lorem sed risus ultricies tristique nulla.`,
  `Nulla pharetra diam sit amet nisl suscipit adipiscing. Ac tortor vitae purus faucibus ornare suspendisse sed nisi.
  Sed felis eget velit aliquet sagittis id consectetur purus. Tincidunt tortor aliquam nulla facilisi cras fermentum.
  Volutpat est velit egestas dui id ornare arcu odio. Pharetra magna ac placerat vestibulum. Ultrices sagittis orci a
  scelerisque purus semper eget duis at. Nisi est sit amet facilisis magna etiam tempor orci eu. Convallis tellus id
  interdum velit. Facilisis sed odio morbi quis commodo odio aenean sed.`,
  `Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Facilisi etiam dignissim diam quis enim lobortis
  scelerisque fermentum. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Magna etiam tempor
  orci eu lobortis elementum. Quis auctor elit sed vulputate mi sit. Eleifend quam adipiscing vitae proin sagittis
  nisl rhoncus mattis rhoncus. Erat velit scelerisque in dictum non. Sit amet nulla facilisi morbi tempus iaculis
  urna. Enim ut tellus elementum sagittis vitae et leo duis ut. Lectus arcu bibendum at varius vel pharetra vel
  turpis. Morbi tristique senectus et netus et. Eget aliquet nibh praesent tristique magna sit amet purus gravida.
  Nisl purus in mollis nunc sed id semper risus. Id neque aliquam vestibulum morbi. Mauris a diam maecenas sed enim
  ut sem. Egestas tellus rutrum tellus pellentesque.`,
];

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
</script>
