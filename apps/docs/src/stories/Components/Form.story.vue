<template>
  <define-name-help>
    <pf-popover>
      <template #header>
        <div>
          The <a href="https://schema.org/name" target="_blank" rel="noreferrer">name</a> of a
          <a href="https://schema.org/Person" target="_blank" rel="noreferrer">Person</a>
        </div>
      </template>
      <template #body>
        <div>
          Often composed of <a href="https://schema.org/givenName" target="_blank" rel="noreferrer">givenName</a> and
          <a href="https://schema.org/familyName" target="_blank" rel="noreferrer">familyName</a>.
        </div>
      </template>
      <pf-form-group-label-help aria-label="More info for name field" />
    </pf-popover>
  </define-name-help>

  <doc-page title="Form">
    <template #description
      >A <b>form</b> is a group of elements used to collect information from a user in a variety of contexts including
      in a modal, in a wizard, or on a page. Use cases for forms include tasks reliant on user-inputted information for
      completion like logging in, registering, configuring settings, or completing surveys.</template
    >

    <template #apidocs>
      <component-info name="PfActionGroup" />
      <component-info name="PfForm" />
      <component-info name="PfFormGroup" />
      <component-info name="PfFormGroupLabelHelp" />
      <component-info name="PfFormSection" />
      <component-info name="PfFormHelperText" />
      <component-info name="PfFormFieldGroup" />
      <component-info name="PfFormFieldGroupHeader" />
      <component-info name="PfFormAlert" />
      <component-info name="PfFormContextProvider" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `novalidate` attribute is not implicitly applied to the form but you can still add it yourself. This makes `pf-form` usable with the native form validation technique.
      - Allowed overriding the `component` used by the form. A typical use-case is when you have a parent form tag already present and you only need `pf-form` to apply the patternfly layout to its children.
      - `pf-form-group` embeds a `pf-form-helper-text`: use the `helper-text` and `helper-text-invalid` props or the slots with the same name. The invalid text is shown when the group is validated as `error`, which is derived from the inputs it contains unless the `validated` prop is set.
      - The `labelHelp` prop of `pf-form-group` is replaced by the `label-help` slot, and the `label` and `labelInfo` props have slots with the same name.
      - `pf-form-group` and `pf-form-field-group` can be rendered as a `fieldset` with the `fieldset` prop.
      - `FormFieldGroupExpandable` is replaced by `pf-form-field-group` with the `expandable` prop, or with `v-model:expanded`; `hasAnimations` is replaced by `animations`.
      - The `header` prop of `pf-form-field-group` is replaced by the `header` slot. The `titleText`, `titleDescription` and `actions` props of `pf-form-field-group-header` are replaced by the `title` (with `title-id`) and `description` props or slots and the `actions` slot: the title id is generated when not set, and labels the group and its toggle.
      - The `title` of `pf-form-section` can also be passed as a slot.
      - `FormContextProvider` is `pf-form-context-provider`, whose default slot receives the form context; `useFormContext()` reads it from a descendant component. `FormContextConsumer` is not needed.
      See [common differences from patternfly-react](#/).

      ## Examples

      When using helper text inside a `pf-form-group`, the `pf-helper-text` component should be wrapped with the `pf-form-helper-text` component to provide additional spacing.
    </pre>

    <story-canvas title="Basic">
      <pf-form>
        <pf-form-group label="Full name" required field-id="simple-form-name-01">
          <template #label-help>
            <name-help />
          </template>
          <pf-text-input
            id="simple-form-name-01"
            v-model="basicName"
            required
            type="text"
            name="simple-form-name-01"
            aria-describedby="simple-form-name-01-helper"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
        <pf-form-group label="Email" required field-id="simple-form-email-01">
          <pf-text-input
            id="simple-form-email-01"
            v-model="basicEmail"
            required
            type="email"
            name="simple-form-email-01"
          />
        </pf-form-group>
        <pf-form-group label="Phone number" required field-id="simple-form-phone-01">
          <pf-text-input
            id="simple-form-phone-01"
            v-model="basicPhone"
            required
            type="tel"
            name="simple-form-phone-01"
            placeholder="555-555-5555"
          />
        </pf-form-group>
        <pf-form-group role="group" inline field-id="basic-form-checkbox-group" label="How can we contact you?">
          <pf-checkbox id="inlinecheck01" label="Email" aria-label="Email" />
          <pf-checkbox id="inlinecheck02" label="Phone" aria-label="Phone" />
          <pf-checkbox id="inlinecheck03" label="Mail" aria-label="Mail" />
        </pf-form-group>
        <pf-form-group role="radiogroup" inline field-id="basic-form-radio-group" label="Time zone">
          <pf-radio id="basic-inline-radio-01" name="basic-inline-radio" label="Eastern" />
          <pf-radio id="basic-inline-radio-02" name="basic-inline-radio" label="Central" />
          <pf-radio id="basic-inline-radio-03" name="basic-inline-radio" label="Pacific" />
        </pf-form-group>
        <pf-form-group label="Additional note" field-id="simple-form-note-01">
          <pf-text-input
            id="simple-form-note-01"
            disabled
            type="text"
            name="simple-form-number"
            model-value="disabled"
          />
        </pf-form-group>
        <pf-form-group field-id="checkbox01">
          <pf-checkbox
            id="checkbox01"
            label="I'd like updates via email."
            name="checkbox01"
            aria-label="Update via email"
          />
        </pf-form-group>
        <pf-form-group action-group>
          <pf-action-list>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="primary">Submit</pf-button>
              </pf-action-list-item>
              <pf-action-list-item>
                <pf-button variant="link">Cancel</pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
          </pf-action-list>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Horizontal">
      <pf-form horizontal>
        <pf-form-group label="Full name" required field-id="horizontal-form-name">
          <pf-text-input
            id="horizontal-form-name"
            v-model="horizontalName"
            required
            type="text"
            aria-describedby="horizontal-form-name-helper"
            name="horizontal-form-name"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
        <pf-form-group label="Email" required field-id="horizontal-form-email">
          <pf-text-input
            id="horizontal-form-email"
            v-model="horizontalEmail"
            required
            type="email"
            name="horizontal-form-email"
          />
        </pf-form-group>
        <pf-form-group label="Your title" field-id="horizontal-form-title">
          <pf-form-select
            id="horizontal-form-title"
            v-model="horizontalTitle"
            name="horizontal-form-title"
            aria-label="Your title"
          >
            <pf-form-select-option value="select one" label="Select one" />
            <pf-form-select-option value="mr" label="Mr" />
            <pf-form-select-option value="miss" label="Miss" />
            <pf-form-select-option value="mrs" label="Mrs" />
            <pf-form-select-option value="ms" label="Ms" />
            <pf-form-select-option value="dr" label="Dr" />
            <pf-form-select-option value="other" label="Other" />
          </pf-form-select>
        </pf-form-group>
        <pf-form-group label="Your experience" field-id="horizontal-form-exp">
          <pf-textarea id="horizontal-form-exp" v-model="horizontalExperience" name="horizontal-form-exp" />
        </pf-form-group>
        <pf-form-group
          label="How can we contact you?"
          stack
          field-id="horizontal-form-checkbox-group"
          no-padding-top
          role="group"
        >
          <pf-checkbox id="alt-form-checkbox-1" label="Email" name="alt-form-checkbox-1" />
          <pf-checkbox id="alt-form-checkbox-2" label="Phone" name="alt-form-checkbox-2" />
          <pf-checkbox id="alt-form-checkbox-3" label="Mail" name="alt-form-checkbox-3" />
        </pf-form-group>
        <pf-form-group role="radiogroup" stack field-id="horizontal-form-radio-group" no-padding-top label="Time zone">
          <pf-radio id="horizontal-inline-radio-01" name="horizontal-inline-radio" label="Eastern" />
          <pf-radio id="horizontal-inline-radio-02" name="horizontal-inline-radio" label="Central" />
          <pf-radio id="horizontal-inline-radio-03" name="horizontal-inline-radio" label="Pacific" />
        </pf-form-group>
        <pf-form-group action-group>
          <pf-action-list>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="primary">Submit</pf-button>
              </pf-action-list-item>
              <pf-action-list-item>
                <pf-button variant="link">Cancel</pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
          </pf-action-list>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Limit width">
      <pf-form width-limited>
        <pf-form-group label="Full name" required field-id="simple-form-name-02">
          <template #label-help>
            <name-help />
          </template>
          <pf-text-input
            id="simple-form-name-02"
            v-model="limitName"
            required
            type="text"
            name="simple-form-name-02"
            aria-describedby="simple-form-name-02-helper"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
        <pf-form-group label="Email" required field-id="simple-form-email-02">
          <pf-text-input
            id="simple-form-email-02"
            v-model="limitEmail"
            required
            type="email"
            name="simple-form-email-02"
          />
        </pf-form-group>
        <pf-form-group label="Phone number" required field-id="simple-form-number">
          <pf-text-input
            id="simple-form-number"
            v-model="limitPhone"
            required
            type="tel"
            placeholder="555-555-5555"
            name="simple-form-number"
          />
        </pf-form-group>
        <pf-form-group role="group" inline field-id="limit-width-form-checkbox-group" label="How can we contact you?">
          <pf-checkbox id="inlinecheck04" label="Email" aria-label="Email" />
          <pf-checkbox id="inlinecheck05" label="Phone" aria-label="Phone" />
          <pf-checkbox id="inlinecheck06" label="Mail" aria-label="Mail" />
        </pf-form-group>
        <pf-form-group role="radiogroup" inline field-id="limit-width-form-radio-group" label="Time zone">
          <pf-radio id="limit-width-inline-radio-01" name="limit-width-radio" label="Eastern" />
          <pf-radio id="limit-width-inline-radio-02" name="limit-width-radio" label="Central" />
          <pf-radio id="limit-width-inline-radio-03" name="limit-width-radio" label="Pacific" />
        </pf-form-group>
        <pf-form-group label="Additional note" field-id="simple-form-note-02">
          <pf-text-input
            id="simple-form-note-02"
            disabled
            type="text"
            name="simple-form-number"
            model-value="disabled"
          />
        </pf-form-group>
        <pf-form-group field-id="checkbox02">
          <pf-checkbox
            id="checkbox02"
            label="I'd like updates via email."
            name="checkbox02"
            aria-label="Update via email"
          />
        </pf-form-group>
        <pf-form-group action-group>
          <pf-action-list>
            <pf-action-list-group>
              <pf-action-list-item>
                <pf-button variant="primary">Submit</pf-button>
              </pf-action-list-item>
              <pf-action-list-item>
                <pf-button variant="link">Cancel</pf-button>
              </pf-action-list-item>
            </pf-action-list-group>
          </pf-action-list>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Invalid">
      <pf-form>
        <pf-form-group label="Age" field-id="age-1">
          <pf-text-input
            id="age-1"
            :model-value="invalidAge"
            :validated="invalidValidated"
            aria-describedby="age-1-helper"
            @update:model-value="onInvalidAgeChange"
          />
          <pf-form-helper-text v-if="invalidValidated !== 'success'">
            <pf-helper-text>
              <pf-helper-text-item :variant="invalidValidated">
                <template #icon>
                  <circle-exclamation-icon />
                </template>
                {{ invalidValidated === 'error' ? 'Must be a number' : 'Please enter your age' }}
              </pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Invalid with form alert">
      <pf-form>
        <pf-form-alert v-if="invalidValidated === 'error'">
          <pf-alert
            variant="danger"
            title="Fill out all required fields before continuing."
            aria-live="polite"
            inline
          />
        </pf-form-alert>
        <pf-form-group label="Age" field-id="age-2">
          <pf-text-input
            id="age-2"
            :model-value="invalidAge"
            :validated="invalidValidated"
            aria-describedby="age-2-helper"
            @update:model-value="onInvalidAgeChange"
          />
          <pf-form-helper-text v-if="invalidValidated !== 'success'">
            <pf-helper-text>
              <pf-helper-text-item :variant="invalidValidated">
                <template #icon>
                  <circle-exclamation-icon />
                </template>
                {{ invalidValidated === 'error' ? 'Must be a number' : 'Please enter your age' }}
              </pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Validated">
      <pf-form>
        <pf-form-group label="Age" field-id="age-3">
          <pf-text-input
            id="age-3"
            :model-value="validatedAge"
            :validated="validatedState"
            aria-describedby="age-3-helper"
            @update:model-value="onValidatedAgeChange"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item :variant="validatedState">
                <template v-if="validatedState === 'error'" #icon>
                  <circle-exclamation-icon />
                </template>
                {{ validatedHelperText }}
              </pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Horizontal stacked no padding top">
      <pf-form horizontal>
        <pf-form-group role="group" label="Label" no-padding-top field-id="horizontal-form-stacked-options" stack>
          <pf-checkbox id="option-01" label="option 1" />
          <pf-checkbox id="option-02" label="option 2" />
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Horizontal stacked helper text on top">
      <pf-form horizontal>
        <pf-form-group label="Label" no-padding-top stack field-id="horizontal-form-helper-options" role="group">
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item>Select all that apply:</pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
          <pf-checkbox id="option-03" label="Option 1" />
          <pf-checkbox id="option-04" label="Option 2" />
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Form group with additional label info">
      <pf-form>
        <pf-form-group label="Full name" label-info="Additional label info" required field-id="form-group-label-info">
          <template #label-help>
            <name-help />
          </template>
          <pf-text-input
            id="form-group-label-info"
            v-model="labelInfoName"
            required
            type="text"
            name="form-group-label-info"
            aria-describedby="form-group-label-info-helper"
          />
          <pf-form-helper-text>
            <pf-helper-text>
              <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
            </pf-helper-text>
          </pf-form-helper-text>
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Form Sections">
      <pf-form>
        <pf-form-section>
          <pf-form-group label="Form section 1 input" required field-id="simple-form-section-1-input">
            <pf-text-input
              id="simple-form-section-1-input"
              v-model="sectionInput1"
              required
              type="text"
              name="simple-form-section-1-input"
            />
          </pf-form-group>
        </pf-form-section>
        <pf-form-section title="Form section 2 (optional title)" title-element="h2">
          <pf-form-group label="Form section 2 input" required field-id="simple-form-section-2-input">
            <pf-text-input
              id="simple-form-section-2-input"
              v-model="sectionInput2"
              required
              type="text"
              name="simple-form-section-2-input"
            />
          </pf-form-group>
        </pf-form-section>
      </pf-form>
    </story-canvas>

    <story-canvas title="Grid form">
      <pf-form>
        <pf-grid gutter md="6">
          <pf-grid-item span="12">
            <pf-form-group label="Full name" required field-id="grid-form-name-01">
              <pf-text-input
                id="grid-form-name-01"
                v-model="gridName"
                required
                type="text"
                name="grid-form-name-01"
                aria-describedby="grid-form-name-01-helper"
              />
              <pf-form-helper-text>
                <pf-helper-text>
                  <pf-helper-text-item>Include your middle name if you have one.</pf-helper-text-item>
                </pf-helper-text>
              </pf-form-helper-text>
            </pf-form-group>
          </pf-grid-item>
          <pf-form-group label="Email" required field-id="grid-form-email-01">
            <pf-text-input
              id="grid-form-email-01"
              v-model="gridEmail"
              required
              type="email"
              name="grid-form-email-01"
            />
          </pf-form-group>
          <pf-form-group label="Phone number" required field-id="grid-form-number-01">
            <pf-text-input
              id="grid-form-number-01"
              v-model="gridPhone"
              required
              type="tel"
              placeholder="555-555-5555"
              name="grid-form-number-01"
            />
          </pf-form-group>
        </pf-grid>
      </pf-form>
    </story-canvas>

    <story-canvas title="Field Groups">
      <pf-form>
        <pf-form-group label="Label 1" required field-id="0-label1">
          <pf-text-input id="0-label1" v-model="fieldGroupValues['0-label1']" required name="0-label1" />
        </pf-form-group>
        <pf-form-group label="Label 2" required field-id="0-label2">
          <pf-text-input id="0-label2" v-model="fieldGroupValues['0-label2']" required name="0-label2" />
        </pf-form-group>
        <pf-form-field-group animations v-model:expanded="fieldGroupsExpanded.group1" toggle-aria-label="Details">
          <template #header>
            <pf-form-field-group-header
              title="Field group 1"
              title-id="field-group1-titleText-id"
              description="Field group 1 description text."
            >
              <template #actions>
                <pf-button variant="link">Delete all</pf-button>
                <pf-button variant="secondary">Add parameter</pf-button>
              </template>
            </pf-form-field-group-header>
          </template>
          <pf-form-field-group animations v-model:expanded="fieldGroupsExpanded.nested1" toggle-aria-label="Details">
            <template #header>
              <pf-form-field-group-header
                title="Nested field group 1"
                title-id="nested-field-group1-titleText-id"
                description="Nested field group 1 description text."
              >
                <template #actions>
                  <pf-button variant="plain" aria-label="Remove">
                    <template #icon>
                      <trash-icon />
                    </template>
                  </pf-button>
                </template>
              </pf-form-field-group-header>
            </template>
            <pf-form-group label="Label 1" required field-id="1-expanded-group1-label1">
              <pf-text-input
                id="1-expanded-group1-label1"
                v-model="fieldGroupValues['1-expanded-group1-label1']"
                required
                name="1-expanded-group1-label1"
              />
            </pf-form-group>
            <pf-form-group label="Label 2" required field-id="1-expanded-group1-label2">
              <pf-text-input
                id="1-expanded-group1-label2"
                v-model="fieldGroupValues['1-expanded-group1-label2']"
                required
                name="1-expanded-group1-label2"
              />
            </pf-form-group>
          </pf-form-field-group>
          <pf-form-field-group animations expandable toggle-aria-label="Details">
            <template #header>
              <pf-form-field-group-header title="Nested field group 2" title-id="nested-field-group2-titleText-id">
                <template #actions>
                  <pf-button variant="plain" aria-label="Remove">
                    <template #icon>
                      <trash-icon />
                    </template>
                  </pf-button>
                </template>
              </pf-form-field-group-header>
            </template>
            <pf-form-group label="Label 1" required field-id="1-expanded-group2-label1">
              <pf-text-input
                id="1-expanded-group2-label1"
                v-model="fieldGroupValues['1-expanded-group2-label1']"
                required
                name="1-expanded-group2-label1"
              />
            </pf-form-group>
            <pf-form-group label="Label 2" required field-id="1-expanded-group2-label2">
              <pf-text-input
                id="1-expanded-group2-label2"
                v-model="fieldGroupValues['1-expanded-group2-label2']"
                required
                name="1-expanded-group2-label2"
              />
            </pf-form-group>
          </pf-form-field-group>
          <pf-form-field-group animations expandable toggle-aria-label="Details">
            <template #header>
              <pf-form-field-group-header
                title="Nested field group 3"
                title-id="nested-field-group3-titleText-id"
                description="Field group 3 description text."
              >
                <template #actions>
                  <pf-button variant="plain" aria-label="Remove">
                    <template #icon>
                      <trash-icon />
                    </template>
                  </pf-button>
                </template>
              </pf-form-field-group-header>
            </template>
            <pf-form-group label="Label 1" required field-id="1-expanded-group3-label1">
              <pf-text-input
                id="1-expanded-group3-label1"
                v-model="fieldGroupValues['1-expanded-group3-label1']"
                required
                name="1-expanded-group3-label1"
              />
            </pf-form-group>
            <pf-form-group label="Label 2" required field-id="1-expanded-group3-label2">
              <pf-text-input
                id="1-expanded-group3-label2"
                v-model="fieldGroupValues['1-expanded-group3-label2']"
                required
                name="1-expanded-group3-label2"
              />
            </pf-form-group>
          </pf-form-field-group>
          <pf-form-group label="Label 1" required field-id="1-group1-label1">
            <pf-text-input
              id="1-group1-label1"
              v-model="fieldGroupValues['1-group1-label1']"
              required
              name="1-group1-label1"
            />
          </pf-form-group>
          <pf-form-group label="Label 2" required field-id="1-group1-label2">
            <pf-text-input
              id="1-group1-label2"
              v-model="fieldGroupValues['1-group1-label2']"
              required
              name="1-group1-label2"
            />
          </pf-form-group>
        </pf-form-field-group>
        <pf-form-field-group animations expandable toggle-aria-label="Details">
          <template #header>
            <pf-form-field-group-header
              title="Field group 2"
              title-id="field-group2-titleText-id"
              description="Field group 2 description text."
            >
              <template #actions>
                <pf-button variant="link">Delete all</pf-button>
                <pf-button variant="secondary">Add parameter</pf-button>
              </template>
            </pf-form-field-group-header>
          </template>
          <pf-form-group label="Label 1" required field-id="2-label1">
            <pf-text-input id="2-label1" v-model="fieldGroupValues['2-label1']" required name="2-label1" />
          </pf-form-group>
          <pf-form-group label="Label 2" required field-id="2-label2">
            <pf-text-input id="2-label2" v-model="fieldGroupValues['2-label2']" required name="2-label2" />
          </pf-form-group>
        </pf-form-field-group>
        <pf-form-field-group animations v-model:expanded="fieldGroupsExpanded.group3" toggle-aria-label="Details">
          <template #header>
            <pf-form-field-group-header
              title="Field group 3"
              title-id="field-group3-titleText-id"
              description="Field group 3 description text."
            />
          </template>
          <pf-form-group label="Label 1" required field-id="3-label1">
            <pf-text-input id="3-label1" v-model="fieldGroupValues['3-label1']" required name="3-label1" />
          </pf-form-group>
          <pf-form-group label="Label 2" required field-id="3-label2">
            <pf-text-input id="3-label2" v-model="fieldGroupValues['3-label2']" required name="3-label2" />
          </pf-form-group>
          <pf-form-field-group>
            <template #header>
              <pf-form-field-group-header
                title="Nested field group 1 (non-expandable)"
                title-id="nested-field-group1-non-expandable-titleText-id"
              />
            </template>
            <pf-form-group label="Label 1" required field-id="3-nonexpand-group1-label1">
              <pf-text-input
                id="3-nonexpand-group1-label1"
                v-model="fieldGroupValues['3-nonexpand-group1-label1']"
                required
                name="3-nonexpand-group1-label1"
              />
            </pf-form-group>
            <pf-form-group label="Label 2" required field-id="3-nonexpand-group1-label2">
              <pf-text-input
                id="3-nonexpand-group1-label2"
                v-model="fieldGroupValues['3-nonexpand-group1-label2']"
                required
                name="3-nonexpand-group1-label2"
              />
            </pf-form-group>
          </pf-form-field-group>
          <pf-form-field-group>
            <template #header>
              <pf-form-field-group-header
                title="Nested field group 2 (non-expandable)"
                title-id="nested-field-group2-non-expandable-titleText-id"
                description="Field group 2 description text."
              />
            </template>
            <pf-form-group label="Label 1" required field-id="3-nonexpand-group2-label1">
              <pf-text-input
                id="3-nonexpand-group2-label1"
                v-model="fieldGroupValues['3-nonexpand-group2-label1']"
                required
                name="3-nonexpand-group2-label1"
              />
            </pf-form-group>
            <pf-form-group label="Label 2" required field-id="3-nonexpand-group2-label2">
              <pf-text-input
                id="3-nonexpand-group2-label2"
                v-model="fieldGroupValues['3-nonexpand-group2-label2']"
                required
                name="3-nonexpand-group2-label2"
              />
            </pf-form-group>
          </pf-form-field-group>
        </pf-form-field-group>
        <pf-form-field-group>
          <template #header>
            <pf-form-field-group-header
              title="Field group 4 (non-expandable)"
              title-id="field-group4-non-expandable-titleText-id"
              description="Field group 4 description text."
            >
              <template #actions>
                <pf-button variant="link">Delete all</pf-button>
                <pf-button variant="secondary">Add parameter</pf-button>
              </template>
            </pf-form-field-group-header>
          </template>
          <pf-form-group label="Label 1" required field-id="4-nonexpand-label1">
            <pf-text-input
              id="4-nonexpand-label1"
              v-model="fieldGroupValues['4-nonexpand-label1']"
              required
              name="4-nonexpand-label1"
            />
          </pf-form-group>
          <pf-form-group label="Label 2" required field-id="4-nonexpand-label2">
            <pf-text-input
              id="4-nonexpand-label2"
              v-model="fieldGroupValues['4-nonexpand-label2']"
              required
              name="4-nonexpand-label2"
            />
          </pf-form-group>
        </pf-form-field-group>
        <pf-form-group label="Label 3" required field-id="0-label3">
          <pf-text-input id="0-label3" v-model="fieldGroupValues['0-label3']" required name="0-label3" />
        </pf-form-group>
        <pf-form-group label="Label 4" required field-id="0-label4">
          <pf-text-input id="0-label4" v-model="fieldGroupValues['0-label4']" required name="0-label4" />
        </pf-form-group>
      </pf-form>
    </story-canvas>

    <story-canvas title="Form state">
      <template #intro>
        <pre v-md>
          `pf-form-context-provider` keeps the values, errors and touched state of the fields, identified by an id. Its default slot receives the form context, and descendant components can read it with `useFormContext()`.
        </pre>
      </template>
      <pf-form-context-provider
        v-slot="{ setValue, getValue, setError, values, errors }"
        :initial-values="{ 'select-id': 'Option 1' }"
      >
        <pf-form>
          <pf-form-group label="Input value" field-id="input-id" required>
            <pf-text-input
              id="input-id"
              :model-value="getValue('input-id')"
              :validated="errors['input-id'] ? 'error' : 'default'"
              @update:model-value="
                setValue('input-id', String($event ?? ''));
                setError('input-id', undefined);
              "
            />
            <pf-form-helper-text>
              <pf-helper-text>
                <pf-helper-text-item :variant="errors['input-id'] ? 'error' : 'default'">
                  <template v-if="errors['input-id']" #icon>
                    <circle-exclamation-icon />
                  </template>
                  {{ errors['input-id'] }}
                </pf-helper-text-item>
              </pf-helper-text>
            </pf-form-helper-text>
          </pf-form-group>

          <pf-textarea
            id="textarea-id"
            aria-label="Form state TextArea"
            :model-value="getValue('textarea-id')"
            @update:model-value="setValue('textarea-id', String($event ?? ''))"
          />

          <pf-select
            id="select-id"
            :selected="getValue('select-id')"
            :label="getValue('select-id')"
            @update:selected="setValue('select-id', String($event ?? ''))"
          >
            <pf-select-option value="Option 1">Option 1</pf-select-option>
            <pf-select-option value="Option 2">Option 2</pf-select-option>
            <pf-select-option value="Option 3">Option 3</pf-select-option>
          </pf-select>

          <pf-form-group action-group>
            <pf-action-list>
              <pf-action-list-group>
                <pf-action-list-item>
                  <pf-button
                    type="submit"
                    @click.prevent="
                      values['input-id']
                        ? alert(`Form submitted with: \n ${JSON.stringify(values)}`)
                        : setError('input-id', 'Input value is required.')
                    "
                  >
                    Submit
                  </pf-button>
                </pf-action-list-item>
                <pf-action-list-item>
                  <pf-button variant="link" @click="formStateExpanded = !formStateExpanded">
                    {{ formStateExpanded ? 'Hide' : 'Show' }} form state
                  </pf-button>
                </pf-action-list-item>
              </pf-action-list-group>
            </pf-action-list>
          </pf-form-group>
          <template v-if="formStateExpanded">
            <pf-divider />
            <pre>{{ JSON.stringify({ values, errors }, null, 2) }}</pre>
          </template>
        </pf-form>
      </pf-form-context-provider>
    </story-canvas>

    <story-canvas title="Built-in helper text and native validation">
      <template #intro>
        <pre v-md>
          `pf-form-group` can render its helper text with the `helper-text` and `helper-text-invalid` props or slots. Without `novalidate`, the inputs are validated natively (here with `pattern` and `required`), and the invalid helper text is shown when an input of the group is invalid.
        </pre>
      </template>
      <pf-form>
        <pf-form-group
          label="Age"
          field-id="age-native"
          helper-text="Please enter your age"
          helper-text-invalid="Age has to be a number"
        >
          <pf-text-input
            id="age-native"
            v-model="nativeAge"
            pattern="[0-9]+"
            required
            name="age"
            aria-describedby="age-native-helper"
          />
        </pf-form-group>
        <pf-form-group
          label="Description"
          field-id="description"
          helper-text-invalid="No emails allowed in the description"
        >
          <pf-textarea
            id="description"
            v-model="nativeDescription"
            pattern="(?!.*[A-Za-z0-9]@[A-Za-z].*).*"
            name="description"
            aria-describedby="description-helper"
            spellcheck="false"
          />
        </pf-form-group>
      </pf-form>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import TrashIcon from '@vue-patternfly/icons/trash-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';

type Validate = 'success' | 'warning' | 'error' | 'default';

const [DefineNameHelp, NameHelp] = createReusableTemplate();

const basicName = ref('');
const basicEmail = ref('');
const basicPhone = ref('');

const horizontalName = ref('');
const horizontalEmail = ref('');
const horizontalTitle = ref('select one');
const horizontalExperience = ref('');

const limitName = ref('');
const limitEmail = ref('');
const limitPhone = ref('');

const invalidAge = ref('Five');
const invalidValidated = ref<Validate>('error');

function onInvalidAgeChange(value: string | number | null) {
  const age = String(value ?? '');
  invalidAge.value = age;
  if (age === '') {
    invalidValidated.value = 'default';
  } else if (/^\d+$/.test(age)) {
    invalidValidated.value = 'success';
  } else {
    invalidValidated.value = 'error';
  }
}

const validatedAge = ref('Five');
const validatedState = ref<Validate>('default');
const validatedHelperText = ref('Enter your age to continue');

function onValidatedAgeChange(value: string | number | null) {
  validatedAge.value = String(value ?? '');
  validatedState.value = 'default';
  validatedHelperText.value = 'Validating...';
}

// simulates a server call validating the age 2000ms after the user has entered a value
watch(
  validatedAge,
  (age, _, onCleanup) => {
    const timer = setTimeout(() => {
      if (/^\d+$/.test(age)) {
        if (parseInt(age) >= 21) {
          validatedState.value = 'success';
          validatedHelperText.value = 'Enjoy your stay';
        } else {
          validatedState.value = 'warning';
          validatedHelperText.value = 'You must be at least 21 years old to continue';
        }
      } else {
        validatedState.value = 'error';
        validatedHelperText.value = 'Must be a number';
      }
    }, 2000);
    onCleanup(() => clearTimeout(timer));
  },
  { immediate: true },
);

const labelInfoName = ref('');

const sectionInput1 = ref('');
const sectionInput2 = ref('');

const gridName = ref('');
const gridEmail = ref('');
const gridPhone = ref('');

const fieldGroupValues = reactive<Record<string, string>>({});
const fieldGroupsExpanded = reactive<Record<string, boolean | undefined>>({
  group1: true,
  nested1: true,
  group3: true,
});

const formStateExpanded = ref(false);

const nativeAge = ref('');
const nativeDescription = ref('');

function alert(message: string) {
  window.alert(message);
}
</script>
