<template>
  <define-overflow-dropdown v-slot="{ label, items }">
    <pf-dropdown close-on-select>
      <template #toggle>
        <pf-menu-toggle variant="plain" :aria-label="label">
          <template #icon>
            <ellipsis-vertical-icon />
          </template>
        </pf-menu-toggle>
      </template>
      <pf-overflow-menu-dropdown-item v-for="(item, i) in items" :key="i" :value="i" :shared="item.shared">
        {{ item.label }}
      </pf-overflow-menu-dropdown-item>
    </pf-dropdown>
  </define-overflow-dropdown>

  <doc-page title="Overflow Menu">
    <template #description
      >An <b>overflow menu</b> groups a set of actions in a responsive horizontal list to help declutter an interface.
      Actions can be set to persist or collapse into a kebab as the viewpoint shrinks. Overflow menus are useful in
      toolbars or other places where a group of actions is required.</template
    >

    <template #apidocs>
      <component-info name="PfOverflowMenu" />
      <component-info name="PfOverflowMenuContent" />
      <component-info name="PfOverflowMenuControl" />
      <component-info name="PfOverflowMenuDropdownItem" />
      <component-info name="PfOverflowMenuGroup" />
      <component-info name="PfOverflowMenuItem" />
    </template>

    <pre v-md>
      The default slot of `pf-overflow-menu` receives `below-breakpoint`, which updates when the specified breakpoint is reached, to further customize behaviors that should respect responsive breakpoints (`OverflowMenuContext` in patternfly-react).

      ## Differences from patternfly-react
      - `isPersistent` is `persistent`, `isVertical` is `vertical`, `hasAdditionalOptions` is `additional-options` and `isShared` is `shared`.
      - The `groupType` of `pf-overflow-menu-group` is `type`, and the `itemId` of `pf-overflow-menu-dropdown-item` is `value`, as in `pf-menu-item`.
      - `breakpoint-reference` takes the container element (such as a template ref) or a function returning it.
      - The breakpoint state is the `below-breakpoint` prop of the default slot rather than a context.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Simple (responsive)">
      <pf-overflow-menu breakpoint="lg">
        <pf-overflow-menu-content>
          <pf-overflow-menu-item>Item</pf-overflow-menu-item>
          <pf-overflow-menu-item>Item</pf-overflow-menu-item>
          <pf-overflow-menu-group>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control>
          <overflow-dropdown label="Simple example overflow menu" :items="sharedItems(5)" />
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </story-canvas>

    <story-canvas title="Vertical">
      <template #intro>
        <pre v-md>
          Passing `vertical` to `pf-overflow-menu` will change its behavior to respond to breakpoints based on window height instead of width.
        </pre>
      </template>

      <pf-overflow-menu breakpoint="md" vertical>
        <pf-overflow-menu-content>
          <pf-overflow-menu-item>Item</pf-overflow-menu-item>
          <pf-overflow-menu-item>Item</pf-overflow-menu-item>
          <pf-overflow-menu-group>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control>
          <overflow-dropdown label="Simple example overflow menu" :items="sharedItems(5)" />
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </story-canvas>

    <story-canvas title="Group types">
      <pf-overflow-menu breakpoint="lg">
        <pf-overflow-menu-content>
          <pf-overflow-menu-group>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item</pf-overflow-menu-item>
          </pf-overflow-menu-group>
          <pf-overflow-menu-group type="button">
            <pf-overflow-menu-item>
              <pf-button variant="primary">Primary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="secondary">Secondary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="tertiary">Tertiary</pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
          <pf-overflow-menu-group type="icon">
            <pf-overflow-menu-item>
              <pf-button variant="plain" aria-label="Align left">
                <template #icon><align-left-icon /></template>
              </pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="plain" aria-label="Align center">
                <template #icon><align-center-icon /></template>
              </pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="plain" aria-label="Align right">
                <template #icon><align-right-icon /></template>
              </pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control>
          <overflow-dropdown
            label="Group example overflow menu"
            :items="
              [
                'Item 1',
                'Item 2',
                'Item 3',
                'Primary',
                'Secondary',
                'Tertiary',
                'Action 1',
                'Action 2',
                'Action 3',
              ].map(label => ({ label, shared: true }))
            "
          />
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </story-canvas>

    <story-canvas title="Multiple groups">
      <pf-overflow-menu breakpoint="lg">
        <pf-overflow-menu-content>
          <pf-overflow-menu-group type="button">
            <pf-overflow-menu-item>
              <pf-button variant="primary">Primary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="secondary">Secondary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="tertiary">Tertiary</pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
          <pf-overflow-menu-group type="icon">
            <pf-overflow-menu-item>
              <pf-button variant="plain" aria-label="Align left">
                <template #icon><align-left-icon /></template>
              </pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="plain" aria-label="Align center">
                <template #icon><align-center-icon /></template>
              </pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="plain" aria-label="Align right">
                <template #icon><align-right-icon /></template>
              </pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control additional-options>
          <overflow-dropdown
            label="Multiple group example overflow menu"
            :items="[
              ...['Primary', 'Secondary', 'Tertiary', 'Action 4', 'Action 5', 'Action 6'].map(label => ({
                label,
                shared: true,
              })),
              { label: 'Action 7' },
            ]"
          />
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </story-canvas>

    <story-canvas title="Persistent">
      <pf-overflow-menu breakpoint="lg">
        <pf-overflow-menu-content persistent>
          <pf-overflow-menu-group type="button" persistent>
            <pf-overflow-menu-item persistent>
              <pf-button variant="primary">Primary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="secondary">Secondary</pf-button>
            </pf-overflow-menu-item>
            <pf-overflow-menu-item>
              <pf-button variant="tertiary">Tertiary</pf-button>
            </pf-overflow-menu-item>
          </pf-overflow-menu-group>
        </pf-overflow-menu-content>
        <pf-overflow-menu-control additional-options>
          <overflow-dropdown
            label="Persistent example overflow menu"
            :items="[{ label: 'Secondary', shared: true }, { label: 'Tertiary', shared: true }, { label: 'Action 4' }]"
          />
        </pf-overflow-menu-control>
      </pf-overflow-menu>
    </story-canvas>

    <story-canvas title="Breakpoint on container width">
      <template #intro>
        <pre v-md>
          By passing in the `breakpoint-reference` property, the overflow menu's breakpoint will be relative to the width of the reference container rather than the viewport width.

          You can change the container width in this example by adjusting the slider. As the container width changes, the overflow menu will change between a horizontal menu and a vertical dropdown despite the viewport width not changing.
        </pre>
      </template>

      <div style="width: 100%; max-width: 400px">
        <label for="overflow-menu-container-width">Current container width: {{ containerWidth }}%</label>
        <input
          id="overflow-menu-container-width"
          v-model.number="containerWidth"
          type="range"
          min="20"
          max="100"
          step="20"
          style="display: block; width: 100%"
        />
      </div>
      <div
        ref="widthContainer"
        :style="{ width: `${containerWidth}%`, padding: '1rem', borderWidth: '2px', borderStyle: 'dashed' }"
      >
        <pf-overflow-menu :breakpoint-reference="widthContainer" breakpoint="sm">
          <pf-overflow-menu-content>
            <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
            <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
            <pf-overflow-menu-group>
              <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
              <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
              <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
            </pf-overflow-menu-group>
          </pf-overflow-menu-content>
          <pf-overflow-menu-control>
            <overflow-dropdown label="Breakpoint on container example overflow menu" :items="sharedItems(5)" />
          </pf-overflow-menu-control>
        </pf-overflow-menu>
      </div>
    </story-canvas>

    <story-canvas title="Breakpoint on container height">
      <template #intro>
        <pre v-md>
          By passing in the `breakpoint-reference` and `vertical` properties, the overflow menu's breakpoint will be determined relative to the height of the reference container rather than the window height.
        </pre>
      </template>

      <label for="overflow-menu-container-height">Current container height: {{ containerHeight }}%</label>
      <input
        id="overflow-menu-container-height"
        v-model.number="containerHeight"
        type="range"
        min="20"
        max="100"
        step="20"
        style="display: block; width: 100%; max-width: 400px"
      />
      <div style="height: 1000px">
        <div
          ref="heightContainer"
          :style="{ height: `${containerHeight}%`, padding: '1rem', borderWidth: '2px', borderStyle: 'dashed' }"
        >
          <pf-overflow-menu :breakpoint-reference="heightContainer" breakpoint="md" vertical>
            <pf-overflow-menu-content>
              <pf-overflow-menu-item>Item 1</pf-overflow-menu-item>
              <pf-overflow-menu-item>Item 2</pf-overflow-menu-item>
              <pf-overflow-menu-group>
                <pf-overflow-menu-item>Item 3</pf-overflow-menu-item>
                <pf-overflow-menu-item>Item 4</pf-overflow-menu-item>
                <pf-overflow-menu-item>Item 5</pf-overflow-menu-item>
              </pf-overflow-menu-group>
            </pf-overflow-menu-content>
            <pf-overflow-menu-control>
              <overflow-dropdown label="Height breakpoint on container example overflow menu" :items="sharedItems(5)" />
            </pf-overflow-menu-control>
          </pf-overflow-menu>
        </div>
      </div>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import AlignLeftIcon from '@vue-patternfly/icons/align-left-icon';
import AlignCenterIcon from '@vue-patternfly/icons/align-center-icon';
import AlignRightIcon from '@vue-patternfly/icons/align-right-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import { createReusableTemplate } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

type DropdownItem = { label: string; shared?: boolean };

const [DefineOverflowDropdown, OverflowDropdown] = createReusableTemplate<{ label: string; items: DropdownItem[] }>();

function sharedItems(count: number): DropdownItem[] {
  return Array.from({ length: count }, (_value, i) => ({ label: `Item ${i + 1}`, shared: true }));
}

const containerWidth = ref(100);
const widthContainer = useTemplateRef<HTMLElement>('widthContainer');
const containerHeight = ref(100);
const heightContainer = useTemplateRef<HTMLElement>('heightContainer');
</script>
