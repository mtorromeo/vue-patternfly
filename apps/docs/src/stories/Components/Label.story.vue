<template>
  <doc-page title="Label">
    <template #description
      >The <b>label</b> component allows users to add specific element captions for user clarity and
      convenience.</template
    >

    <template #apidocs>
      <component-info name="PfLabel" />
      <component-info name="PfLabelGroup" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `render` prop is replaced by the `to` prop, which renders a vue-router `router-link`.
      - The `icon` prop is replaced by the `icon` slot, and `closeBtn` by the `actions` slot.
      - The `variant="overflow"` is replaced by the `overflow` prop; `outline` is also available as a flag.
      - The `editableProps` and `closeBtnProps` props are replaced by `editable-attrs` and `close-btn-attrs`, and `onEditComplete`/`onEditCancel` by the `edit-complete`/`edit-cancel` events.
      - The `categoryName` prop of `pf-label-group` is replaced by `category`, `addLabelControl` by the `add-label-control` slot, `hasEditableTextArea` by `editable-textarea` and `editableTextAreaProps` by `editable-textarea-attrs`.
      - `pf-label-group` emits `overflow-label-click` when its overflow label is clicked.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Filled labels">
      <strong>Non-status:</strong>
      <br />
      <br />
      <template v-for="[color, name] in colors" :key="color">
        <pf-label :color="color">{{ name }}</pf-label>
        <pf-label :color="color">
          <template #icon><cube-icon /></template>
          {{ name }} icon
        </pf-label>
        <pf-label :color="color" @close="closed">{{ name }} removable</pf-label>
        <pf-label :color="color" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} icon removable
        </pf-label>
        <pf-label :color="color" href="#filled">{{ name }} link</pf-label>
        <pf-label :color="color" href="#filled" @close="closed">{{ name }} link removable</pf-label>
        <pf-label :color="color" @click="clicked">{{ name }} clickable</pf-label>
        <pf-label :color="color" @click="clicked" @close="closed">{{ name }} clickable removable</pf-label>
        <pf-label :color="color" text-max-width="16ch" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} label with icon that overflows
        </pf-label>
        <pf-label :color="color" disabled href="#filled" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} link removable (disabled)
        </pf-label>
        <pf-label :color="color" disabled @click="clicked" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} clickable removable (disabled)
        </pf-label>
        <br />
        <br />
      </template>
      <strong>Status:</strong>
      <br />
      <br />
      <template v-for="[status, name] in statuses" :key="status">
        <pf-label :status="status">{{ name }}</pf-label>
        <pf-label :status="status" @close="closed">{{ name }} removable</pf-label>
        <pf-label :status="status" href="#filled">{{ name }} link</pf-label>
        <pf-label :status="status" href="#filled" @close="closed">{{ name }} link removable</pf-label>
        <pf-label :status="status" @click="clicked">{{ name }} clickable</pf-label>
        <pf-label :status="status" @click="clicked" @close="closed">{{ name }} clickable removable</pf-label>
        <pf-label :status="status" text-max-width="16ch" @close="closed">
          {{ name }} label with text that overflows
        </pf-label>
        <br />
        <br />
      </template>
    </story-canvas>

    <story-canvas title="Outlined labels">
      <strong>Non-status:</strong>
      <br />
      <br />
      <template v-for="[color, name] in colors" :key="color">
        <pf-label variant="outline" :color="color">{{ name }}</pf-label>
        <pf-label variant="outline" :color="color">
          <template #icon><cube-icon /></template>
          {{ name }} icon
        </pf-label>
        <pf-label variant="outline" :color="color" @close="closed">{{ name }} removable</pf-label>
        <pf-label variant="outline" :color="color" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} icon removable
        </pf-label>
        <pf-label variant="outline" :color="color" href="#outline">{{ name }} link</pf-label>
        <pf-label variant="outline" :color="color" href="#outline" @close="closed">
          {{ name }} link removable
        </pf-label>
        <pf-label variant="outline" :color="color" @click="clicked">{{ name }} clickable</pf-label>
        <pf-label variant="outline" :color="color" @click="clicked" @close="closed">
          {{ name }} clickable removable
        </pf-label>
        <pf-label variant="outline" :color="color" text-max-width="16ch" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} label with icon that overflows
        </pf-label>
        <pf-label variant="outline" :color="color" disabled href="#outline" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} link removable (disabled)
        </pf-label>
        <pf-label variant="outline" :color="color" disabled @click="clicked" @close="closed">
          <template #icon><cube-icon /></template>
          {{ name }} clickable removable (disabled)
        </pf-label>
        <br />
        <br />
      </template>
      <strong>Status:</strong>
      <br />
      <br />
      <template v-for="[status, name] in statuses" :key="status">
        <pf-label variant="outline" :status="status">{{ name }}</pf-label>
        <pf-label variant="outline" :status="status" @close="closed">{{ name }} removable</pf-label>
        <pf-label variant="outline" :status="status" href="#outline">{{ name }} link</pf-label>
        <pf-label variant="outline" :status="status" href="#outline" @close="closed">
          {{ name }} link removable
        </pf-label>
        <pf-label variant="outline" :status="status" @click="clicked">{{ name }} clickable</pf-label>
        <pf-label variant="outline" :status="status" @click="clicked" @close="closed">
          {{ name }} clickable removable
        </pf-label>
        <pf-label variant="outline" :status="status" text-max-width="16ch" @close="closed">
          {{ name }} label with text that overflows
        </pf-label>
        <br />
        <br />
      </template>
    </story-canvas>

    <story-canvas title="Compact labels">
      <pf-label compact>Compact</pf-label>
      <pf-label compact>
        <template #icon><cube-icon /></template>
        Compact icon
      </pf-label>
      <pf-label compact @close="closed">Compact removable</pf-label>
      <pf-label compact @close="closed">
        <template #icon><cube-icon /></template>
        Compact icon removable
      </pf-label>
      <pf-label compact href="#compact">Compact link</pf-label>
      <pf-label compact href="#compact" @close="closed">Compact link removable</pf-label>
      <pf-label compact @click="clicked">Compact clickable</pf-label>
      <pf-label compact @click="clicked" @close="closed">Compact clickable removable</pf-label>
      <pf-label compact text-max-width="16ch" @close="closed">
        <template #icon><cube-icon /></template>
        Compact label with icon that overflows
      </pf-label>
      <pf-label compact disabled href="#compact" @close="closed">
        <template #icon><cube-icon /></template>
        Compact link removable (disabled)
      </pf-label>
      <pf-label compact disabled @click="clicked" @close="closed">
        <template #icon><cube-icon /></template>
        Compact clickable removable (disabled)
      </pf-label>
    </story-canvas>

    <story-canvas title="Label with router link">
      <template #intro>
        <pre v-md>
          Labels may be passed a vue-router destination in the `to` prop to render a `router-link`, for in-app linking without reloading the page.
        </pre>
      </template>
      <pf-label color="blue" to="/" text-max-width="16ch" @close="closed">
        <template #icon><circle-info-icon /></template>
        Blue label router link with icon that overflows
      </pf-label>
    </story-canvas>

    <story-canvas title="Editable labels">
      <template #intro>
        <pre v-md>
          Click or press either enter or space to begin editing a label. After editing, click outside the label or press enter again to complete the edit. To cancel an edit, press escape.

          You can also customize any label's close button aria-label as this example shows with `close-btn-aria-label`.
        </pre>
      </template>
      <pf-label
        color="blue"
        close-btn-aria-label="Custom close button for editable label"
        editable
        :editable-attrs="{ 'aria-label': `Editable label with text ${labelText}`, id: 'editable-label' }"
        @close="closed"
        @edit-complete="(_, text) => (labelText = text)"
        @edit-cancel="(_, text) => (labelText = text)"
      >
        {{ labelText }}
      </pf-label>
      <pf-label
        compact
        close-btn-aria-label="Custom close button for compact editable label"
        editable
        :editable-attrs="{
          'aria-label': `Editable compact label with text ${compactLabelText}`,
          id: 'compact-editable-label',
        }"
        @close="closed"
        @edit-complete="(_, text) => (compactLabelText = text)"
        @edit-cancel="(_, text) => (compactLabelText = text)"
      >
        {{ compactLabelText }}
      </pf-label>
    </story-canvas>

    <story-canvas title="Basic label group">
      <template #intro>
        <pre v-md>
          Use a label group when you have multiple labels to display at once.
        </pre>
      </template>
      <pf-label-group>
        <pf-label>
          <template #icon><circle-info-icon /></template>
          Label 1
        </pf-label>
        <pf-label color="blue">
          <template #icon><circle-info-icon /></template>
          Label 2
        </pf-label>
        <pf-label color="green">
          <template #icon><circle-info-icon /></template>
          Label 3
        </pf-label>
      </pf-label-group>
    </story-canvas>

    <story-canvas title="Label group with overflow">
      <template #intro>
        <pre v-md>
          An overflow label can be added to the end of a group to save space when the number of labels exceeds some threshold. Click the overflow label to expand and collapse the group.
        </pre>
      </template>
      <pf-label-group>
        <pf-label v-for="[color, name] in overflowLabels" :key="name" :color="color">
          <template #icon><circle-info-icon /></template>
          {{ name }}
        </pf-label>
      </pf-label-group>
    </story-canvas>

    <story-canvas title="Label group with categories">
      <template #intro>
        <pre v-md>
          Use a category name to organize a set of labels.
        </pre>
      </template>
      <pf-label-group category="Group label">
        <pf-label>
          <template #icon><circle-info-icon /></template>
          Label 1
        </pf-label>
        <pf-label color="blue">
          <template #icon><circle-info-icon /></template>
          Label 2
        </pf-label>
        <pf-label color="green">
          <template #icon><circle-info-icon /></template>
          Label 3
        </pf-label>
      </pf-label-group>
    </story-canvas>

    <story-canvas title="Label group with removable categories">
      <pf-label-group category="Group label" closable @click="categoryLabels = []">
        <pf-label v-for="[name, color] in categoryLabels" :key="name" :color="color">
          <template #icon><circle-info-icon /></template>
          {{ name }}
        </pf-label>
      </pf-label-group>
    </story-canvas>

    <story-canvas title="Vertical label group">
      <template #intro>
        <pre v-md>
          Labels in a group can also be stacked vertically. This example shows a vertical label group with a category name and overflow.
        </pre>
      </template>
      <pf-label-group category="Group label with a very long name" vertical closable @click="verticalLabels = []">
        <pf-label v-for="[name, color] in verticalLabels" :key="name" :color="color">
          <template #icon><circle-info-icon /></template>
          {{ name }}
        </pf-label>
      </pf-label-group>
    </story-canvas>

    <story-canvas title="Editable label group">
      <pf-label-group :num-labels="5" editable>
        <pf-label
          color="blue"
          editable
          :editable-attrs="{ 'aria-label': `Editable label with text ${editableLabels[0]}`, id: 'editable-label-1' }"
          @close="closed"
          @edit-complete="(_, text) => (editableLabels[0] = text)"
          @edit-cancel="(_, text) => (editableLabels[0] = text)"
        >
          {{ editableLabels[0] }}
        </pf-label>
        <pf-label color="green">Static label</pf-label>
        <pf-label
          color="blue"
          editable
          :editable-attrs="{ 'aria-label': `Editable label with text ${editableLabels[1]}`, id: 'editable-label-2' }"
          @close="closed"
          @edit-complete="(_, text) => (editableLabels[1] = text)"
          @edit-cancel="(_, text) => (editableLabels[1] = text)"
        >
          {{ editableLabels[1] }}
        </pf-label>
        <pf-label
          color="blue"
          editable
          :editable-attrs="{ 'aria-label': `Editable label with text ${editableLabels[2]}`, id: 'editable-label-3' }"
          @close="closed"
          @edit-complete="(_, text) => (editableLabels[2] = text)"
          @edit-cancel="(_, text) => (editableLabels[2] = text)"
        >
          {{ editableLabels[2] }}
        </pf-label>
      </pf-label-group>
    </story-canvas>

    <story-canvas title="Editable label group with add button">
      <template #intro>
        <pre v-md>
          The contents of a label group can be modified by removing labels or adding new ones using the add button.
        </pre>
      </template>
      <pf-label-group category="Label group 1" :num-labels="5" editable>
        <pf-label
          v-for="(label, index) in addLabels"
          :key="label.id"
          color="blue"
          :editable="label.editable"
          :editable-attrs="label.editable ? { 'aria-label': `Editable label with text ${label.name}` } : undefined"
          @close="addLabels.splice(index, 1)"
          @edit-complete="(_, text) => (label.name = text)"
          @edit-cancel="(_, text) => (label.name = text)"
        >
          {{ label.name }}
        </pf-label>
        <template #add-label-control>
          <pf-label variant="add" @click="addLabel">Add label</pf-label>
        </template>
      </pf-label-group>
    </story-canvas>
  </doc-page>
</template>

<style>
.story-canvas .pf-v6-c-label {
  margin-inline-end: var(--pf-t--global--spacer--sm);
  margin-block-end: var(--pf-t--global--spacer--sm);
}
.story-canvas .pf-v6-c-label-group .pf-v6-c-label {
  margin: 0;
}
</style>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import CubeIcon from '@vue-patternfly/icons/cube-icon';
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import { useAlertsStore } from '../../store/alerts';

type Color = 'blue' | 'teal' | 'green' | 'orange' | 'purple' | 'red' | 'orangered' | 'grey' | 'yellow';
type Status = 'success' | 'warning' | 'danger' | 'info' | 'custom';

const colors: [Color, string][] = [
  ['grey', 'Grey'],
  ['blue', 'Blue'],
  ['green', 'Green'],
  ['orange', 'Orange'],
  ['red', 'Red'],
  ['orangered', 'Orange red'],
  ['purple', 'Purple'],
  ['teal', 'Teal'],
  ['yellow', 'Yellow'],
];

const statuses: [Status, string][] = [
  ['success', 'Success'],
  ['warning', 'Warning'],
  ['danger', 'Danger'],
  ['info', 'Info'],
  ['custom', 'Custom'],
];

const overflowLabels: [Color, string][] = [
  ['grey', 'Label 1'],
  ['blue', 'Label 2'],
  ['green', 'Label 3'],
  ['orange', 'Label 4'],
  ['red', 'Label 5'],
  ['purple', 'Label 6'],
];

const initialCategoryLabels: [string, Color][] = [
  ['Label 1', 'grey'],
  ['Label 2', 'blue'],
  ['Label 3', 'green'],
  ['Label 4', 'orange'],
  ['Label 5', 'red'],
];
const categoryLabels = ref([...initialCategoryLabels]);
const verticalLabels = ref([...initialCategoryLabels]);

const labelText = ref('Editable label');
const compactLabelText = ref('Compact editable label');
const editableLabels = reactive(['Editable label', 'Editable label 2', 'Editable label 3']);

let nextId = 3;
const addLabels = reactive([
  { id: 0, name: 'Label 1', editable: false },
  { id: 1, name: 'Label 2', editable: false },
  { id: 2, name: 'Label 3', editable: true },
]);

function addLabel() {
  addLabels.unshift({ id: nextId++, name: 'New Label', editable: true });
}

const alerts = useAlertsStore();

function notify(e: Event, action: string) {
  const label = (e.target as HTMLElement)?.closest('.pf-v6-c-label');
  if (label instanceof HTMLElement) {
    alerts.add({ title: `${action} "${label.innerText}"`, variant: 'info' });
  }
}

function closed(e: Event) {
  notify(e, 'Clicked close button on');
}

function clicked(e: Event) {
  notify(e, 'Clicked');
}
</script>
