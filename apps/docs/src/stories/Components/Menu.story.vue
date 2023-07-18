<template>
  <doc-page title="Menu">
    <component-title name="pf-menu" />

    <pre v-md>
      A **menu** is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu can be opened in a [dropdown](#/stories/components/dropdown) or [select](#/stories/components/select) list, or it can be revealed by right clicking on a specific region within a page.

      ## Differences from patternfly-react
      - The `pf-menu-content`, `pf-menu-list` and `pf-menu-input` components are optional.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item>Action</pf-menu-item>
            <pf-menu-item to="#default-link2" @click.prevent>Link</pf-menu-item>
            <pf-menu-item disabled>Disabled action</pf-menu-item>
            <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Basic (simplified)">
      <pf-menu>
        <pf-menu-item>Action</pf-menu-item>
        <pf-menu-item to="#default-link2" @click.prevent>Link</pf-menu-item>
        <pf-menu-item disabled>Disabled action</pf-menu-item>
        <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Danger menu item">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item>Action 1</pf-menu-item>
            <pf-menu-item>Action 2</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item danger>Delete</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With icons">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item>
              <template #icon><code-branch-icon /></template>
              From git
            </pf-menu-item>
            <pf-menu-item>
              <template #icon><layer-group-icon /></template>
              Container image
            </pf-menu-item>
            <pf-menu-item>
              <template #icon><cube-icon /></template>
              Docker file
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With checkbox">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item check>Checkbox 1</pf-menu-item>
            <pf-menu-item check>Checkbox 2</pf-menu-item>
            <pf-menu-item check disabled>Checkbox 3</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With favorites">
      <pf-menu>
        <pf-menu-group v-for="(groupOptions, group) of options" :key="group" :label="group">
          <pf-menu-item
            v-for="option of groupOptions"
            :key="option.value"
            v-model:favorited="option.favorite"
            :name="option.value"
            :value="option.value"
            :description="option.description"
            :disabled="option.disabled"
          />
        </pf-menu-group>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Filtering with text input">
      <pf-menu>
        <pf-menu-input>
          <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" />
        </pf-menu-input>
        <pf-divider />
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item>Action 1</pf-menu-item>
            <pf-menu-item>Action 2</pf-menu-item>
            <pf-menu-item>Action 3</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Filtering with text input (simplified)">
      <pf-menu>
        <pf-text-input :auto-validate="false" aria-label="Filter menu items" type="search" icon-variant="search" />
        <pf-divider />
        <pf-menu-item>Action 1</pf-menu-item>
        <pf-menu-item>Action 2</pf-menu-item>
        <pf-menu-item>Action 3</pf-menu-item>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With links">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item to="#default-link-1" external-link>Link 1</pf-menu-item>
            <pf-menu-item to="#default-link-2" external-link>Link 2</pf-menu-item>
            <pf-menu-item to="#default-link-3">Link 3</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With titled groups">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-group>
            <pf-menu-list>
              <pf-menu-item to="#">Link not in group</pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
          <pf-menu-group label="Group 1" label-heading-level="h3">
            <pf-menu-list>
              <pf-menu-item to="#">Link 1</pf-menu-item>
              <pf-menu-item to="#">Link 2</pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
          <pf-menu-group label="Group 2" label-heading-level="h3">
            <pf-menu-list>
              <pf-menu-item to="#">Link 1</pf-menu-item>
              <pf-menu-item to="#">Link 2</pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With description">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item description="Description">
              <template #icon><code-branch-icon /></template>
              Action 1
            </pf-menu-item>
            <pf-menu-item disabled description="Description">
              <template #icon><code-branch-icon /></template>
              Action 2 disabled
            </pf-menu-item>
            <pf-menu-item
              description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
            >
              <template #icon><code-branch-icon /></template>
              Action 3
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With actions">
      <pf-menu @select="(event: Event, itemKey: string | number | symbol | null | undefined) => toggle(itemKey)">
        <pf-menu-content>
          <pf-menu-group label="Actions" label-heading-level="h3">
            <pf-menu-list>
              <pf-menu-item
                key="item1"
                :selected="selected.includes('item1')"
                description="This is a description"
              >
                Item 1
                <template #actions>
                  <pf-menu-item-action action-id="code">
                    <code-branch-icon aria-hidden />
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>

              <pf-menu-item
                key="item2"
                :selected="selected.includes('item2')"
                disabled
                description="This is a description"
              >
                Item 2
                <template #actions>
                  <pf-menu-item-action action-id="alert">
                    <bell-icon aria-hidden />
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>

              <pf-menu-item
                key="item3"
                :selected="selected.includes('item3')"
              >
                Item 3
                <template #actions>
                  <pf-menu-item-action action-id="copy">
                    <clipboard-icon aria-hidden />
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>

              <pf-menu-item
                key="item4"
                :selected="selected.includes('item4')"
                description="This is a description"
              >
                Item 4
                <template #actions>
                  <pf-menu-item-action action-id="expand">
                    <bars-icon aria-hidden />
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import CodeBranchIcon from '@vue-patternfly/icons/code-branch-icon';
import LayerGroupIcon from '@vue-patternfly/icons/layer-group-icon';
import CubeIcon from '@vue-patternfly/icons/cube-icon';
import ClipboardIcon from '@vue-patternfly/icons/clipboard-icon';
import BarsIcon from '@vue-patternfly/icons/bars-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import { reactive } from 'vue';

const selected: (string | number | symbol | null | undefined)[] = reactive(['item3', 'item4']);

type Option = {
  value: string;
  favorite: boolean;
  disabled?: boolean;
  description?: string;
}

const options = reactive({
  Status: [
    {
      value: "Running",
      favorite: false,
      description: "This is a description.",
    },
    { value: "Stopped", favorite: false },
    { value: "Down", favorite: false, disabled: true },
    { value: "Degraded", favorite: false },
    { value: "Needs maintenance", favorite: false },
  ] as Option[],
  "Vendor names": [
    { value: "Dell", favorite: false },
    { value: "Samsung", favorite: true },
    {
      value: "Hewlett-Packard",
      favorite: true,
      description: "This is a description.",
    },
  ] as Option[],
});

function toggle(itemKey: string | number | symbol | null | undefined) {
  const i = selected.indexOf(itemKey);
  if (i < 0) {
    selected.push(itemKey);
  } else {
    selected.splice(i, 1);
  }
}
</script>
