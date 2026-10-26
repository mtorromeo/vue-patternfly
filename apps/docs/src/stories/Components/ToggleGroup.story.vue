<template>
  <doc-page title="Toggle group">
    <template #description
      >A <b>toggle group</b> is a group of controls that can be used to quickly switch between actions or
      states.</template
    >

    <template #apidocs>
      <component-info name="PfToggleGroup" />
      <component-info name="PfToggleGroupItem" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The selection can be bound with `v-model` on `pf-toggle-group`: a single value for a single selection, or an array for a multiple selection. An item is identified by its `value`, or its `text` when not set. Each item can also bind `v-model:selected` (`isSelected`, `onChange`).
      - The icon is the `icon` slot and the text can also be the default slot.
      - `disabled` on `pf-toggle-group` (`areAllGroupsDisabled`) disables the items that do not set their own `disabled`.
      - `compact` and `fill` replace `isCompact` and `isFill`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Single select toggle group">
      <template #intro>
        <pre v-md>
          A single select toggle group allows users to toggle between multiple items.

          Bind a single value with `v-model` to select one item at a time, matching the `value` of the items. Clicking the selected item deselects it.
        </pre>
      </template>

      <pf-toggle-group v-model="single" aria-label="Default with single selectable">
        <pf-toggle-group-item text="Option 1" button-id="toggle-group-single-1" />
        <pf-toggle-group-item text="Option 2" button-id="toggle-group-single-2" />
        <pf-toggle-group-item text="Option 3" button-id="toggle-group-single-3" />
      </pf-toggle-group>
    </story-canvas>

    <story-canvas title="Multi select toggle group">
      <template #intro>
        <pre v-md>
          A multi select toggle group allows users to select multiple items at once, by binding an array with `v-model`.

          When a toggle item is disabled it cannot be selected. Click the "Disable all" button in the following example to see this in action.
        </pre>
      </template>

      <pf-stack gutter>
        <pf-stack-item>
          <pf-toggle-group v-model="multiple" :disabled="disableAll" aria-label="Default with multiple selectable">
            <pf-toggle-group-item text="Option 1" button-id="toggle-group-multiple-1" />
            <pf-toggle-group-item text="Option 2" button-id="toggle-group-multiple-2" />
            <pf-toggle-group-item text="Option 3" disabled />
          </pf-toggle-group>
        </pf-stack-item>
        <pf-stack-item>
          <pf-button @click="disableAll = !disableAll">{{ disableAll ? 'Enable back' : 'Disable all' }}</pf-button>
        </pf-stack-item>
      </pf-stack>
    </story-canvas>

    <story-canvas title="With icons">
      <template #intro>
        <pre v-md>
          You can use a recognizable icon as a toggle item label.

          To do this, pass an icon to the `icon` slot of a `pf-toggle-group-item`, and an `aria-label` describing it.
        </pre>
      </template>

      <pf-toggle-group v-model="icons" aria-label="Icon variant toggle group">
        <pf-toggle-group-item value="copy" aria-label="copy" button-id="toggle-group-icons-1">
          <template #icon><copy-icon /></template>
        </pf-toggle-group-item>
        <pf-toggle-group-item value="undo" aria-label="undo" button-id="toggle-group-icons-2">
          <template #icon><rotate-left-icon /></template>
        </pf-toggle-group-item>
        <pf-toggle-group-item value="share" aria-label="share square" button-id="toggle-group-icons-3">
          <template #icon><share-from-square-icon /></template>
        </pf-toggle-group-item>
      </pf-toggle-group>
    </story-canvas>

    <story-canvas title="With text and icons">
      <template #intro>
        <pre v-md>
          Adding text to a toggle item with an icon helps clarify the button's function.

          To do this, pass a descriptive label to the `text` property of a `pf-toggle-group-item`. When passing both a text and an icon, you can also pass in `icon-position` to determine whether the icon is rendered at the start or end of the item.
        </pre>
      </template>

      <pf-toggle-group v-model="textIconsStart" aria-label="Text and icon toggle group with icons at start">
        <pf-toggle-group-item text="Copy" button-id="toggle-group-text-icons-1">
          <template #icon><copy-icon /></template>
        </pf-toggle-group-item>
        <pf-toggle-group-item text="Undo" button-id="toggle-group-text-icons-2">
          <template #icon><rotate-left-icon /></template>
        </pf-toggle-group-item>
        <pf-toggle-group-item text="Share" button-id="toggle-group-text-icons-3">
          <template #icon><share-from-square-icon /></template>
        </pf-toggle-group-item>
      </pf-toggle-group>
      <br />
      <pf-toggle-group v-model="textIconsEnd" aria-label="Text and icon toggle group with icons at end">
        <pf-toggle-group-item text="Copy" icon-position="end" button-id="toggle-group-text-icons-4">
          <template #icon><copy-icon /></template>
        </pf-toggle-group-item>
        <pf-toggle-group-item text="Undo" icon-position="end" button-id="toggle-group-text-icons-5">
          <template #icon><rotate-left-icon /></template>
        </pf-toggle-group-item>
        <pf-toggle-group-item text="Share" icon-position="end" button-id="toggle-group-text-icons-6">
          <template #icon><share-from-square-icon /></template>
        </pf-toggle-group-item>
      </pf-toggle-group>
    </story-canvas>

    <story-canvas title="Compact toggle group">
      <template #intro>
        <pre v-md>
          When space in a UI is limited, you can use a compact toggle group.

          To apply compact styling to a `pf-toggle-group`, use `compact`.
        </pre>
      </template>

      <pf-toggle-group v-model="compact" compact aria-label="Compact variant toggle group">
        <pf-toggle-group-item text="Option 1" button-id="toggle-group-compact-1" />
        <pf-toggle-group-item text="Option 2" button-id="toggle-group-compact-2" />
        <pf-toggle-group-item text="Option 3" disabled />
      </pf-toggle-group>
    </story-canvas>

    <story-canvas title="Full-width toggle group">
      <template #intro>
        <pre v-md>
          To make toggle group items fill the available horizontal space, use `fill` on a `pf-toggle-group`. The following example shows full-width toggle groups for a single-select, multi-select, and single-select with disabled item.
        </pre>
      </template>

      <pf-toggle-group v-model="fillSingle" fill aria-label="Full width toggle group">
        <pf-toggle-group-item text="Option 1" button-id="toggle-group-fill-1" />
        <pf-toggle-group-item text="Option 2" button-id="toggle-group-fill-2" />
        <pf-toggle-group-item text="Option 3" button-id="toggle-group-fill-3" />
      </pf-toggle-group>
      <br />
      <pf-toggle-group v-model="fillMulti" fill aria-label="Full width multi-select toggle group">
        <pf-toggle-group-item text="Option 1" button-id="toggle-group-fill-multi-1" />
        <pf-toggle-group-item text="Option 2" button-id="toggle-group-fill-multi-2" />
        <pf-toggle-group-item text="Option 3" button-id="toggle-group-fill-multi-3" />
      </pf-toggle-group>
      <br />
      <pf-toggle-group v-model="fillDisabled" fill aria-label="Full width toggle group with disabled item">
        <pf-toggle-group-item text="Option 1" button-id="toggle-group-fill-disabled-1" />
        <pf-toggle-group-item text="Option 2" button-id="toggle-group-fill-disabled-2" />
        <pf-toggle-group-item text="Option 3" disabled />
      </pf-toggle-group>
    </story-canvas>

    <story-canvas title="Selection per item">
      <template #intro>
        <pre v-md>
          Without `v-model` on the toggle group, each item can bind its own selected state with `v-model:selected`.
        </pre>
      </template>

      <pf-toggle-group aria-label="Toggle group with a selection per item">
        <pf-toggle-group-item v-model:selected="selected1" text="Option 1" />
        <pf-toggle-group-item v-model:selected="selected2" text="Option 2" />
        <pf-toggle-group-item v-model:selected="selected3" text="Option 3" />
      </pf-toggle-group>
    </story-canvas>
  </doc-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CopyIcon from '@vue-patternfly/icons/copy-icon';
import RotateLeftIcon from '@vue-patternfly/icons/rotate-left-icon';
import ShareFromSquareIcon from '@vue-patternfly/icons/share-from-square-icon';

const single = ref<string>();
const multiple = ref<string[]>([]);
const disableAll = ref(false);
const icons = ref<string[]>(['share']);
const textIconsStart = ref<string[]>(['Share']);
const textIconsEnd = ref<string[]>([]);
const compact = ref<string[]>([]);
const fillSingle = ref<string | undefined>('Option 1');
const fillMulti = ref<string[]>([]);
const fillDisabled = ref<string | undefined>('Option 1');

const selected1 = ref(false);
const selected2 = ref(false);
const selected3 = ref(false);
</script>
