<template>
  <doc-page title="Tree view">
    <template #description>
      A <b>tree view</b> is a structure that displays data in a hierarchical view. It can be used in a dashboard
      vertical navigation to display levels of navigation, or in a modal to show hierarchical data.
    </template>

    <template #apidocs>
      <component-info name="PfTreeView" />
      <component-info name="PfTreeViewSearch" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The callbacks are the `select`, `check`, `expand` and `collapse` events, with the event, the item and its parent item. Calling `preventDefault()` on the event of `select` prevents the node from toggling.
      - The `toolbar` is a slot, and the actions of the items come from the `action` scoped slot, which receives the `item`: an item has an action when the slot renders something for it.
      - The icons are Vue components, in the `icon` and `expanded-icon` props and in the data items.
      - In the data items, `checkProps` and `badgeProps` are `checkAttrs` and `badgeAttrs`; `hasCheckbox`, `hasBadge`, `isDisabled` and `isToggleDisabled` are `checkbox`, `badge`, `disabled` and `toggleDisabled`; `name`, `title` and `customBadgeContent` are strings.
      - Boolean props drop their prefix: `checkboxes`, `badges`, `guides`, `selectable-nodes`, `multi-selectable` and `animations` (`hasAnimations`).
      - `useMemo` is not needed: Vue only re-renders the items whose data changes.
      - `onSearch` of `pf-tree-view-search` is the `search` event, and its value can be bound with `v-model`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Single selectable">
      <pf-button variant="link" @click="singleExpanded = !singleExpanded">
        {{ singleExpanded ? 'Collapse all' : 'Expand all' }}
      </pf-button>
      <pf-tree-view
        animations
        aria-label="Tree View single selectable example"
        :data="options('example1')"
        :active-items="single"
        :all-expanded="singleExpanded"
        @select="(_event, item) => !item.children && (single = [item])"
      />
    </story-canvas>

    <story-canvas title="Multiselectable">
      <template #intro>
        <pre v-md>
          A tree view can be setup to allow multiple nodes to be selected. When a tree view is intended to allow multiple selection, the `multi-selectable` property must be passed.
        </pre>
      </template>

      <pf-tree-view
        animations
        aria-label="Tree View multiselectable example"
        multi-selectable
        :data="options('multiselectExample')"
        :active-items="multi"
        @select="(_event, item) => !item.children && (multi = [...multi, item])"
      />
    </story-canvas>

    <story-canvas title="With separate selection and expansion">
      <template #intro>
        <pre v-md>
          The `selectable-nodes` modifier will separate the expansion and selection behaviors, allowing a parent node to be selected or deselected without toggling its expansion.
        </pre>
      </template>

      <pf-tree-view
        animations
        aria-label="Tree View separate selection and expansion example"
        selectable-nodes
        :data="options('SelNodesTreeView')"
        :active-items="selectableNodes"
        @select="(_event, item) => (selectableNodes = [item])"
      />
    </story-canvas>

    <story-canvas title="With search">
      <template #intro>
        <pre v-md>
          A search input can be used to filter tree view items. It is recommended that a tree view with more than 7 nodes includes a search input.
        </pre>
      </template>

      <pf-tree-view
        animations
        aria-label="Tree View with search example"
        :data="filteredOptions"
        :active-items="searchActive"
        :all-expanded="search !== '' || undefined"
        @select="(_event, item) => !item.children && (searchActive = [item])"
      >
        <template #toolbar>
          <pf-toolbar style="padding: 0">
            <pf-toolbar-content style="padding: 0">
              <pf-toolbar-item>
                <pf-tree-view-search
                  id="input-search"
                  v-model="search"
                  name="search-input"
                  aria-label="Search input example"
                />
              </pf-toolbar-item>
            </pf-toolbar-content>
          </pf-toolbar>
        </template>
      </pf-tree-view>
    </story-canvas>

    <story-canvas title="With checkboxes">
      <pf-tree-view
        animations
        aria-label="Tree View with checkboxes example"
        :data="checkboxOptions"
        checkboxes
        @check="onCheck"
      />
    </story-canvas>

    <story-canvas title="With icons">
      <pf-tree-view
        animations
        aria-label="Tree View with icons example"
        :data="options('iconsExample')"
        :active-items="icons"
        :icon="FolderIcon"
        :expanded-icon="FolderOpenIcon"
        @select="(_event, item) => !item.children && (icons = [item])"
      />
    </story-canvas>

    <story-canvas title="With unique icon per item">
      <pf-tree-view
        animations
        aria-label="Tree View with unique icon per item example"
        :data="iconPerItemOptions"
        :active-items="iconPerItem"
        @select="(_event, item) => !item.children && (iconPerItem = [item])"
      />
    </story-canvas>

    <story-canvas title="With badges">
      <pf-tree-view
        animations
        aria-label="Tree View with badges example"
        :data="options('badgesExample')"
        :active-items="badges"
        badges
        @select="(_event, item) => !item.children && (badges = [item])"
      />
    </story-canvas>

    <story-canvas title="With custom badges">
      <pf-tree-view
        animations
        aria-label="Tree View with custom badges example"
        :data="customBadgeOptions"
        :active-items="customBadges"
        badges
        @select="(_event, item) => !item.children && (customBadges = [item])"
      />
    </story-canvas>

    <story-canvas title="With action items">
      <pf-tree-view
        animations
        aria-label="Tree View with actions example"
        :data="options('example7')"
        :active-items="actionItems"
        @select="(_event, item) => !item.children && (actionItems = [item])"
      >
        <template #action="{ item }">
          <pf-dropdown v-if="item.id === 'example7-AppLaunch'" v-model:open="actionOpen">
            <template #toggle>
              <pf-menu-toggle variant="plain" aria-label="Tree view with actions example kebab toggle">
                <template #icon><ellipsis-vertical-icon /></template>
              </pf-menu-toggle>
            </template>
            <pf-dropdown-item value="action">Action</pf-dropdown-item>
            <pf-dropdown-item value="link" to="#default-link2" @click.prevent>Link</pf-dropdown-item>
            <pf-dropdown-item value="disabled-action" disabled>Disabled Action</pf-dropdown-item>
            <pf-dropdown-item value="disabled-link" disabled to="#default-link4">Disabled Link</pf-dropdown-item>
          </pf-dropdown>
          <pf-button v-else-if="item.id === 'example7-App1'" variant="plain" aria-label="Launch app 1">
            <template #icon><clipboard-icon /></template>
          </pf-button>
          <pf-button v-else-if="item.id === 'example7-App2'" variant="plain" aria-label="Launch app 2">
            <template #icon><database-icon /></template>
          </pf-button>
        </template>
      </pf-tree-view>
    </story-canvas>

    <story-canvas title="Guides">
      <pf-tree-view animations aria-label="Tree View guides example" :data="options('guidesExample')" guides />
    </story-canvas>

    <story-canvas title="Compact">
      <pf-tree-view animations aria-label="Tree View compact example" :data="compactOptions" variant="compact" />
    </story-canvas>

    <story-canvas title="Compact, no background">
      <pf-tree-view
        animations
        aria-label="Tree View compact no background example"
        :data="compactOptions"
        variant="compactNoBackground"
      />
    </story-canvas>

    <story-canvas title="With memoization">
      <template #intro>
        <pre v-md>
          Vue tracks the dependencies of every item, so large data sets do not need memoization: only the items whose data changes are re-rendered.
        </pre>
      </template>

      <pf-tree-view
        animations
        aria-label="Tree View with memoization example"
        :data="largeOptions"
        :active-items="large"
        @select="(_event, item) => !item.children && (large = [item])"
      />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { TreeViewDataItem } from '@vue-patternfly/core/components/TreeView/TreeView.vue';
import FolderIcon from '@vue-patternfly/icons/folder-icon';
import FolderOpenIcon from '@vue-patternfly/icons/folder-open-icon';
import GithubIcon from '@vue-patternfly/icons/github-icon';
import GitlabIcon from '@vue-patternfly/icons/gitlab-icon';
import GoogleIcon from '@vue-patternfly/icons/google-icon';
import ClipboardIcon from '@vue-patternfly/icons/clipboard-icon';
import DatabaseIcon from '@vue-patternfly/icons/database-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';

// the data of most examples, with unique ids
function options(prefix: string): TreeViewDataItem[] {
  return [
    {
      name: 'Application launcher',
      id: `${prefix}-AppLaunch`,
      children: [
        {
          name: 'Application 1',
          id: `${prefix}-App1`,
          children: [
            { name: 'Settings', id: `${prefix}-App1Settings` },
            { name: 'Current', id: `${prefix}-App1Current` },
          ],
        },
        {
          name: 'Application 2',
          id: `${prefix}-App2`,
          children: [
            { name: 'Settings', id: `${prefix}-App2Settings` },
            {
              name: 'Loader',
              id: `${prefix}-App2Loader`,
              children: [
                { name: 'Loading App 1', id: `${prefix}-LoadApp1` },
                { name: 'Loading App 2', id: `${prefix}-LoadApp2` },
                { name: 'Loading App 3', id: `${prefix}-LoadApp3` },
              ],
            },
          ],
        },
      ],
      defaultExpanded: true,
    },
    {
      name: 'Cost management',
      id: `${prefix}-Cost`,
      children: [
        {
          name: 'Application 3',
          id: `${prefix}-App3`,
          children: [
            { name: 'Settings', id: `${prefix}-App3Settings` },
            { name: 'Current', id: `${prefix}-App3Current` },
          ],
        },
      ],
    },
    {
      name: 'Sources',
      id: `${prefix}-Sources`,
      children: [
        { name: 'Application 4', id: `${prefix}-App4`, children: [{ name: 'Settings', id: `${prefix}-App4Settings` }] },
      ],
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: `${prefix}-Long`,
      children: [{ name: 'Application 5', id: `${prefix}-App5` }],
    },
  ];
}

const single = ref<TreeViewDataItem[]>();
const singleExpanded = ref<boolean>();
const multi = ref<TreeViewDataItem[]>([]);
const selectableNodes = ref<TreeViewDataItem[]>();
const icons = ref<TreeViewDataItem[]>();
const iconPerItem = ref<TreeViewDataItem[]>();
const badges = ref<TreeViewDataItem[]>();
const customBadges = ref<TreeViewDataItem[]>();
const actionItems = ref<TreeViewDataItem[]>();
const actionOpen = ref(false);
const large = ref<TreeViewDataItem[]>();

// --- search ---

const search = ref('');
const searchActive = ref<TreeViewDataItem[]>();

function filterItems(items: TreeViewDataItem[], input: string): TreeViewDataItem[] {
  return items.flatMap(item => {
    if (item.name.toLowerCase().includes(input.toLowerCase())) {
      return [item];
    }
    const children = item.children ? filterItems(item.children, input) : [];
    return children.length ? [{ ...item, children }] : [];
  });
}

const searchOptions = options('example2');
const filteredOptions = computed(() => (search.value ? filterItems(searchOptions, search.value) : searchOptions));

// --- checkboxes ---

const checkedIds = ref<string[]>([]);

function flatten(items: TreeViewDataItem[]): TreeViewDataItem[] {
  return items.flatMap(item => [item, ...flatten(item.children ?? [])]);
}

const allDescendantsChecked = (item: TreeViewDataItem): boolean =>
  item.children ? item.children.every(allDescendantsChecked) : checkedIds.value.includes(item.id!);
const someDescendantsChecked = (item: TreeViewDataItem): boolean =>
  item.children ? item.children.some(someDescendantsChecked) : checkedIds.value.includes(item.id!);

// a parent is checked when all its descendants are, indeterminate (null) when some of them are
function mapChecks(item: TreeViewDataItem): TreeViewDataItem {
  let checked: boolean | null = allDescendantsChecked(item);
  if (!checked && someDescendantsChecked(item)) {
    checked = null;
  }
  return {
    ...item,
    checkAttrs: { 'aria-label': `${item.id}-check`, checked },
    children: item.children?.map(mapChecks),
  };
}

const checkboxOptions = computed(() => options('example3').map(mapChecks));

function onCheck(event: Event, item: TreeViewDataItem) {
  const checked = (event.target as HTMLInputElement).checked;
  const ids = flatten([item]).map(i => i.id!);
  checkedIds.value = checked
    ? [...new Set([...checkedIds.value, ...ids])]
    : checkedIds.value.filter(id => !ids.includes(id));
}

// --- icon per item ---

const iconPerItemOptions: TreeViewDataItem[] = [
  {
    name: 'Github accounts',
    id: 'iconPerItem-Github',
    icon: GithubIcon,
    children: [
      { name: 'Account 1', id: 'iconPerItem-Acc1' },
      { name: 'Account 2', id: 'iconPerItem-Acc2' },
    ],
    defaultExpanded: true,
  },
  {
    name: 'Gitlab accounts',
    id: 'iconPerItem-Gitlab',
    icon: GitlabIcon,
    children: [{ name: 'Account 3', id: 'iconPerItem-Acc3' }],
  },
  {
    name: 'Google accounts',
    id: 'iconPerItem-Google',
    icon: GoogleIcon,
    children: [{ name: 'Account 4', id: 'iconPerItem-Acc4' }],
  },
];

// --- custom badges ---

const badgeContents: Record<string, string> = {
  AppLaunch: '2 applications',
  App1: '2 children',
  App2: '2 children',
  App2Loader: '3 loading apps',
  Cost: '1 applications',
  App3: '2 children',
  Sources: '1 source',
  App4: '1 child',
  Long: '1 application',
};

function withCustomBadges(item: TreeViewDataItem): TreeViewDataItem {
  const key = item.id?.replace('example6-', '') ?? '';
  return { ...item, customBadgeContent: badgeContents[key], children: item.children?.map(withCustomBadges) };
}

const customBadgeOptions = options('example6').map(withCustomBadges);

// --- compact ---

const compactOptions: TreeViewDataItem[] = [
  {
    name: 'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value and may reject unrecognized values.',
    title: 'apiVersion',
    id: 'example9-apiVersion',
  },
  {
    name: 'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated is CamelCase. More info:',
    title: 'kind',
    id: 'example9-kind',
  },
  { name: 'Standard metadata object', title: 'metadata', id: 'example9-metadata' },
  {
    name: 'Standard metadata object',
    title: 'spec',
    id: 'example9-spec',
    children: [
      {
        name: 'Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Default to 0 (pod will be considered available as soon as it is ready).',
        title: 'minReadySeconds',
        id: 'example9-minReadySeconds',
      },
      { name: 'Indicates that the deployment is paused', title: 'paused', id: 'example9-paused' },
      {
        name: 'The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that the progress will not de estimated during the time a deployment is paused. Defaults to 600s.',
        title: 'progressDeadlineSeconds',
        id: 'example9-progressDeadlineSeconds',
        children: [
          {
            name: 'The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.',
            title: 'revisionHistoryLimit',
            id: 'example9-revisionHistoryLimit',
            children: [
              {
                name: 'Map of {key.value} pairs. A single {key.value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In" and the values array contains only "value". The requirements are ANDed.',
                title: 'matchLabels',
                id: 'example9-matchLabels',
              },
            ],
          },
        ],
      },
    ],
  },
];

// --- large data set ---

const largeOptions: TreeViewDataItem[] = Array.from({ length: 30 }, (_, i) => ({
  name: `Folder ${i + 1}`,
  id: `memo-folder-${i}`,
  children: Array.from({ length: 30 }, (_, j) => ({ name: `Item ${i + 1}-${j + 1}`, id: `memo-item-${i}-${j}` })),
}));
</script>
