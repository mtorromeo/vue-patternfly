<template>
  <doc-page title="Input Group">
    <template #description
      >An <b>input group</b> groups multiple related controls or inputs together so they appear as one
      control.</template
    >

    <template #apidocs>
      <component-info name="PfInputGroup" />
      <component-info name="PfInputGroupItem" />
      <component-info name="PfInputGroupText" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `class` of `pf-input-group-text` is applied to the item wrapper, while its other attributes (`id`, `for`, …) go on the text element.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-input-group>
        <pf-input-group-item fill>
          <pf-text-input id="textInput-basic-1" type="email" aria-label="email input field" />
        </pf-input-group-item>
        <pf-input-group-text id="email-example">@example.com</pf-input-group-text>
      </pf-input-group>
      <br />
      <pf-input-group>
        <pf-input-group-text id="username">
          <at-icon />
        </pf-input-group-text>
        <pf-input-group-item fill>
          <pf-text-input
            id="textInput-basic-2"
            validated="error"
            type="email"
            aria-label="Error state username example"
          />
        </pf-input-group-item>
      </pf-input-group>
      <br />
      <pf-input-group>
        <pf-input-group-item fill>
          <pf-text-input id="textInput-basic-3" name="textInput-basic-3" type="text" aria-label="percentage" />
        </pf-input-group-item>
        <pf-input-group-text id="plain-example" plain>%</pf-input-group-text>
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With textarea">
      <pf-input-group>
        <pf-input-group-item fill>
          <pf-textarea
            id="inputGroup-with-textarea"
            name="inputGroup-with-textarea"
            aria-label="textarea with button"
          />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button id="textAreaButton2" variant="control">Button</pf-button>
        </pf-input-group-item>
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With dropdown">
      <pf-input-group>
        <pf-input-group-item>
          <pf-dropdown text="Dropdown">
            <pf-dropdown-item>Option 1</pf-dropdown-item>
            <pf-dropdown-item>Option 2</pf-dropdown-item>
            <pf-dropdown-item>Option 3</pf-dropdown-item>
          </pf-dropdown>
        </pf-input-group-item>
        <pf-input-group-item fill>
          <pf-text-input id="textInput-with-dropdown" aria-label="input with dropdown and button" />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button id="inputDropdownButton1" variant="control">Button</pf-button>
        </pf-input-group-item>
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With popover">
      <template #intro>
        <pre v-md>
          Using `append-to` with the element of the `pf-input-group` for the `pf-popover`, so that the popover width will depend on the whole input group.
        </pre>
      </template>
      <pf-input-group ref="inputGroup1">
        <pf-input-group-item fill>
          <pf-text-input
            id="textInput-with-popover-1"
            name="textInput-with-popover-1"
            type="text"
            aria-label="first input example with popover"
          />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-popover aria-label="popover example" position="top" :append-to="inputGroup1?.$el">
            <template #body>This field is an example of an input group with a popover.</template>
            <pf-button variant="control" aria-label="popover for input">
              <template #icon>
                <circle-question-icon />
              </template>
            </pf-button>
          </pf-popover>
        </pf-input-group-item>
      </pf-input-group>
      <br />
      <pf-input-group ref="inputGroup2">
        <pf-input-group-item fill>
          <pf-text-input
            id="textInput-with-popover-2"
            name="textInput-with-popover-2"
            type="text"
            aria-label="second input example with popover"
          />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-popover aria-label="popover example" position="top" :append-to="inputGroup2?.$el">
            <template #body>This field is an example of an input group with a popover.</template>
            <pf-button variant="plain" aria-label="Popover for input">
              <template #icon>
                <circle-question-icon />
              </template>
            </pf-button>
          </pf-popover>
        </pf-input-group-item>
      </pf-input-group>
    </story-canvas>

    <story-canvas title="With multiple group siblings">
      <pf-input-group>
        <pf-input-group-item>
          <pf-button id="textAreaButton1" variant="control">Button</pf-button>
        </pf-input-group-item>
        <pf-input-group-item fill>
          <pf-textarea id="textarea1" name="textarea1" aria-label="textarea with buttons" />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button variant="control">Button</pf-button>
        </pf-input-group-item>
      </pf-input-group>
      <br />
      <pf-input-group>
        <pf-input-group-item>
          <pf-button id="textAreaButton3" variant="control">Button</pf-button>
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button variant="control">Button</pf-button>
        </pf-input-group-item>
        <pf-input-group-item fill>
          <pf-textarea id="textarea2" name="textarea2" aria-label="textarea with 3 buttons" />
        </pf-input-group-item>
        <pf-input-group-item>
          <pf-button variant="control">Button</pf-button>
        </pf-input-group-item>
      </pf-input-group>
      <br />
      <pf-input-group>
        <pf-input-group-text>
          <dollar-sign-icon />
        </pf-input-group-text>
        <pf-input-group-item fill>
          <pf-text-input
            id="textInput-with-siblings"
            name="textInput-with-siblings"
            type="number"
            aria-label="Dollar amount input example"
          />
        </pf-input-group-item>
        <pf-input-group-text>.00</pf-input-group-text>
      </pf-input-group>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { useTemplateRef } from 'vue';
import AtIcon from '@vue-patternfly/icons/at-icon';
import DollarSignIcon from '@vue-patternfly/icons/dollar-sign-icon';
import CircleQuestionIcon from '@vue-patternfly/icons/circle-question-icon';

const inputGroup1 = useTemplateRef('inputGroup1');
const inputGroup2 = useTemplateRef('inputGroup2');
</script>
