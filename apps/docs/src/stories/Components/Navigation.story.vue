<template>
  <doc-page title="Navigation">
    <template #description
      >A <b>navigation</b> organizes an application's structure and content, making it easy to find information and
      accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an
      application.</template
    >

    <template #apidocs>
      <component-info name="PfNav" />
      <component-info name="PfNavList" />
      <component-info name="PfNavGroup" />
      <component-info name="PfNavItem" />
      <component-info name="PfNavItemSeparator" />
      <component-info name="PfNavExpandable" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `pf-nav` emits `select` with the event, the group id, the item id and the item location (`onSelect`), and `toggle` with the event, the group id and the expanded state (`onToggle`).
      - `pf-nav-item` emits its own `select` with the event, the group id and the item id (`onClick`), and `showflyout` (`onShowFlyout`).
      - `to` of `pf-nav-item` is a vue-router location rendered with a `router-link`, which also marks the active route as current; a plain link uses `href`.
      - `component` of `pf-nav-item` is the element of the item, while `link-component` replaces the link element (`component`, or a custom child element); the `class` and the attributes go on the link, `item-class` and `item-attrs` on the item.
      - The `icon` and `flyout` props of `pf-nav-item` and the `icon` prop of `pf-nav-expandable` are slots; the `title` of `pf-nav-expandable` can also be a slot.
      - `pf-nav-expandable` toggles itself: `expanded` sets its state whenever it changes and `v-model:expanded` tracks the toggles, emitted with the group id (`onExpand`).
      - `has-expandable-icon` is `expandable-icon` and `buttonProps` is `button-attrs`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Default">
      <pf-nav aria-label="Default global" ouia-id="DefaultNav" @select="(_e, _g, itemId) => (active.default = itemId)">
        <pf-nav-list>
          <pf-nav-item
            v-for="i in 4"
            :id="`nav-default-link${i}`"
            :key="i"
            prevent-default
            :href="`#nav-default-link${i}`"
            :item-id="i - 1"
            :active="active.default === i - 1"
          >
            Default Link {{ i }}
          </pf-nav-item>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Grouped">
      <template #intro>
        <pre v-md>
          The following example shows two navigation groups, each with a `title` prop passed into the nav group component. To keep nav groups accessible an `aria-label` must be passed in if the `title` prop is not passed in.
        </pre>
      </template>

      <pf-nav aria-label="Grouped global" @select="(_e, _g, itemId) => (active.grouped = itemId)">
        <pf-nav-group v-for="g in 2" :key="g" :title="`Section title ${g}`">
          <pf-nav-item
            v-for="i in 3"
            :key="i"
            prevent-default
            :href="`#nav-group${g}-item${i}`"
            :item-id="`group-${g}_item-${i}`"
            :active="active.grouped === `group-${g}_item-${i}`"
          >
            Group {{ g }} Link {{ i }}
          </pf-nav-item>
        </pf-nav-group>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Expandable">
      <template #intro>
        <pre v-md>
          A `pf-nav-expandable` toggles its list on click: `expanded` sets the initial state, and `v-model:expanded` or the `toggle` event of the nav report the changes.
        </pre>
      </template>

      <pf-nav aria-label="Expandable global" @select="onExpandableSelect" @toggle="onToggle">
        <pf-nav-list>
          <pf-nav-expandable
            title="Expandable Group 1"
            group-id="nav-expandable-group-1"
            :active="activeGroup.expandable === 'nav-expandable-group-1'"
            expanded
          >
            <pf-nav-item
              v-for="i in 3"
              :id="`expandable-${i}`"
              :key="i"
              prevent-default
              :href="`#expandable-${i}`"
              group-id="nav-expandable-group-1"
              :item-id="`nav-expandable-group-1_item-${i}`"
              :active="active.expandable === `nav-expandable-group-1_item-${i}`"
            >
              Subnav 1 Link {{ i }}
            </pf-nav-item>
          </pf-nav-expandable>
          <pf-nav-expandable
            title="Expandable Group 2"
            group-id="nav-expandable-group-2"
            :active="activeGroup.expandable === 'nav-expandable-group-2'"
            expanded
          >
            <pf-nav-item
              id="expandable-custom-click"
              prevent-default
              href="#expandable-custom-click"
              group-id="nav-expandable-group-2"
              item-id="nav-expandable-group-2_custom-click"
              :active="active.expandable === 'nav-expandable-group-2_custom-click'"
              @select="(_e, _g, itemId) => log(`Custom click handler on ${itemId}`)"
            >
              Custom onClick Link
            </pf-nav-item>
            <pf-nav-item
              v-for="i in 3"
              :id="`expandable-${i + 3}`"
              :key="i"
              prevent-default
              :href="`#expandable-${i + 3}`"
              group-id="nav-expandable-group-2"
              :item-id="`nav-expandable-group-2_item-${i}`"
              :active="active.expandable === `nav-expandable-group-2_item-${i}`"
            >
              Subnav 2 Link {{ i }}
            </pf-nav-item>
          </pf-nav-expandable>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Expandable third level">
      <pf-nav aria-label="Expandable third level global" @select="onThirdLevelSelect" @toggle="onToggle">
        <pf-nav-list>
          <pf-nav-expandable
            title="Expandable section title 1"
            group-id="nav-expand3rd-group-1"
            :active="activeGroup.thirdLevel === 'nav-expand3rd-group-1'"
            expanded
          >
            <pf-nav-item
              v-for="i in 3"
              :id="`expandable3rd-${i}`"
              :key="i"
              prevent-default
              :href="`#expandable3rd-${i}`"
              group-id="nav-expand3rd-group-1"
              :item-id="`nav-expand3rd-group-1_item-${i}`"
              :active="active.thirdLevel === `nav-expand3rd-group-1_item-${i}`"
            >
              With 3rd 1 Link {{ i }}
            </pf-nav-item>
          </pf-nav-expandable>
          <pf-nav-expandable
            title="Expandable section title 2"
            group-id="nav-expand3rd-group-2"
            :active="activeGroup.thirdLevel === 'nav-expand3rd-group-2'"
            expanded
          >
            <pf-nav-item
              id="expandable3rd-4"
              prevent-default
              href="#expandable3rd-4"
              group-id="nav-expand3rd-group-2"
              item-id="nav-expand3rd-group-2_item-1"
              :active="active.thirdLevel === 'nav-expand3rd-group-2_item-1'"
            >
              With 3rd 2 Link 1
            </pf-nav-item>
            <pf-nav-expandable
              title="Expandable third level"
              group-id="nav-expand3rd-group-3"
              :active="activeGroup.thirdLevel === 'nav-expand3rd-group-3'"
              expanded
            >
              <pf-nav-item
                v-for="i in 2"
                :id="`expandable3rd-${i + 4}`"
                :key="i"
                prevent-default
                :href="`#expandable3rd-${i + 4}`"
                group-id="nav-expand3rd-group-3"
                :item-id="`nav-expand3rd-group-3_item-${i}`"
                :active="active.thirdLevel === `nav-expand3rd-group-3_item-${i}`"
              >
                Third Level Link {{ i }}
              </pf-nav-item>
            </pf-nav-expandable>
            <pf-nav-item
              id="expandable3rd-7"
              prevent-default
              href="#expandable3rd-7"
              group-id="nav-expand3rd-group-2"
              item-id="nav-expand3rd-group-2_item-2"
              :active="active.thirdLevel === 'nav-expand3rd-group-2_item-2'"
            >
              With 3rd 2 Link 2
            </pf-nav-item>
          </pf-nav-expandable>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Mixed">
      <pf-nav aria-label="Mixed global" @select="onMixedSelect">
        <pf-nav-list>
          <pf-nav-item
            id="mixed-1"
            prevent-default
            href="#mixed-1"
            item-id="ungrouped_item-1"
            :active="active.mixed === 'ungrouped_item-1'"
          >
            Link 1 (not expandable)
          </pf-nav-item>
          <pf-nav-expandable
            title="Expandable section title 1"
            group-id="nav-mixed-group-1"
            :active="activeGroup.mixed === 'nav-mixed-group-1'"
          >
            <pf-nav-item
              id="mixed-2"
              prevent-default
              href="#mixed-2"
              group-id="nav-mixed-group-1"
              item-id="nav-mixed-group-1_item-1"
              :active="active.mixed === 'nav-mixed-group-1_item-1'"
            >
              Mixed Link 1
            </pf-nav-item>
            <pf-nav-item-separator />
            <pf-nav-item
              v-for="i in [2, 3]"
              :id="`mixed-${i + 1}`"
              :key="i"
              prevent-default
              :href="`#mixed-${i + 1}`"
              group-id="nav-mixed-group-1"
              :item-id="`nav-mixed-group-1_item-${i}`"
              :active="active.mixed === `nav-mixed-group-1_item-${i}`"
            >
              Mixed Link {{ i }}
            </pf-nav-item>
          </pf-nav-expandable>
          <pf-nav-expandable
            title="Expandable section title 2"
            group-id="nav-mixed-group-2"
            :active="activeGroup.mixed === 'nav-mixed-group-2'"
          >
            <pf-nav-item
              v-for="i in 3"
              :id="`mixed-${i + 4}`"
              :key="i"
              prevent-default
              :href="`#mixed-${i + 4}`"
              group-id="nav-mixed-group-2"
              :item-id="`nav-mixed-group-2_item-${i}`"
              :active="active.mixed === `nav-mixed-group-2_item-${i}`"
            >
              Mixed 2 Link {{ i }}
            </pf-nav-item>
          </pf-nav-expandable>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Horizontal navigation">
      <pf-nav
        variant="horizontal"
        aria-label="Horizontal nav local"
        @select="(_e, _g, itemId) => (active.horizontal = itemId)"
      >
        <pf-nav-list>
          <pf-nav-item
            v-for="i in 10"
            :id="`horizontal-nav-${i}`"
            :key="i"
            prevent-default
            :href="`#horizontal-nav-${i}`"
            :item-id="i"
            :active="active.horizontal === i"
          >
            Horizontal navigation item {{ i }}
          </pf-nav-item>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Horizontal subnav">
      <pf-nav
        variant="horizontal-subnav"
        aria-label="Horizontal subnav local"
        @select="(_e, _g, itemId) => (active.subnav = itemId)"
      >
        <pf-nav-list>
          <pf-nav-item
            v-for="i in 10"
            :id="`horizontal-subnav-${i}`"
            :key="i"
            prevent-default
            :href="`#horizontal-subnav-${i}`"
            :item-id="i"
            :active="active.subnav === i"
          >
            Horizontal subnav item {{ i }}
          </pf-nav-item>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Flyout" max-width="300px">
      <template #intro>
        <pre v-md>
          A flyout should be a `pf-menu` component with `nav-flyout`, passed in the `flyout` slot of the `pf-nav-item`. Press `space`, `enter` or `right arrow` to open a flyout using the keyboard, use the arrow keys to navigate between flyout items, and press `escape` or `left arrow` to close a flyout.

          In this example `flyout-menu` is a local component rendering a `pf-menu` whose "Next menu" items open the menu of the next depth in their `flyout-menu` slot.
        </pre>
      </template>

      <pf-nav aria-label="Flyout global" @select="(_e, _g, itemId) => (active.flyout = itemId)">
        <pf-nav-list>
          <pf-nav-item
            v-for="i in 2"
            :id="`nav-flyout-default-link-${i}`"
            :key="i"
            prevent-default
            :href="`#nav-flyout-default-link-${i}`"
            :item-id="`nav-flyout-default-link-${i}`"
            :active="active.flyout === `nav-flyout-default-link-${i}`"
          >
            Flyout Link {{ i }}
          </pf-nav-item>
          <pf-nav-item
            id="nav-flyout-default-link-3"
            prevent-default
            item-id="nav-flyout-default-link-3"
            :active="active.flyout === 'nav-flyout-default-link-3'"
          >
            Flyout Link 3
            <template #flyout>
              <flyout-menu :depth="3" />
            </template>
          </pf-nav-item>
          <pf-nav-item
            id="nav-flyout-default-link4"
            prevent-default
            href="#nav-flyout-default-link4"
            item-id="nav-flyout-default-link-4"
            :active="active.flyout === 'nav-flyout-default-link-4'"
          >
            Flyout Link 4
          </pf-nav-item>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Drilldown" max-width="300px">
      <pf-nav aria-label="Drilldown global">
        <pf-menu id="nav-drilldown-rootMenu" contains-drilldown>
          <pf-menu-content>
            <pf-menu-list>
              <pf-menu-item value="nav-drilldown-item-1" direction="down" description="SubMenu 1">
                Item 1
                <template #drilldown-menu>
                  <pf-drilldown-menu id="nav-drilldown-subMenu-1">
                    <pf-menu-item value="nav-drilldown-subMenu-1-breadcrumb" direction="up">Item 1</pf-menu-item>
                    <pf-menu-item value="nav-drilldown-subMenu-1_item-1" description="SubMenu 2" direction="down">
                      SubMenu 1 - Item 1
                      <template #drilldown-menu>
                        <pf-drilldown-menu id="nav-drilldown-subMenu-2">
                          <pf-menu-item value="nav-drilldown-subMenu-2-breadcrumb" direction="up">
                            SubMenu 1 - Item 1
                          </pf-menu-item>
                          <pf-menu-item
                            v-for="i in 3"
                            :key="i"
                            :value="`nav-drilldown-subMenu-2_item-${i}`"
                            :to="`#subMenu-2_item-${i}`"
                          >
                            SubMenu 2 - Item {{ i }}
                          </pf-menu-item>
                        </pf-drilldown-menu>
                      </template>
                    </pf-menu-item>
                    <pf-menu-item
                      v-for="i in [2, 3]"
                      :key="i"
                      :value="`nav-drilldown-subMenu-1_item-${i}`"
                      :to="`#subMenu-1_item-${i}`"
                    >
                      SubMenu 1 - Item {{ i }}
                    </pf-menu-item>
                  </pf-drilldown-menu>
                </template>
              </pf-menu-item>
              <pf-menu-item value="nav-drilldown-item-2" to="#item-2">Item 2</pf-menu-item>
              <pf-menu-item value="nav-drilldown-item-3" to="#item-3">Item 3</pf-menu-item>
            </pf-menu-list>
          </pf-menu-content>
        </pf-menu>
      </pf-nav>
    </story-canvas>

    <story-canvas title="With icons">
      <pf-nav aria-label="Icon global" ouia-id="IconNav" @select="(_e, _g, itemId) => (active.icons = itemId)">
        <pf-nav-list>
          <pf-nav-item
            v-for="(icon, i) in [CubesIcon, FolderIcon, CloudIcon, LinkIcon]"
            :id="`nav-icon-link${i + 1}`"
            :key="i"
            prevent-default
            :href="`#nav-icon-link${i + 1}`"
            :item-id="i"
            :active="active.icons === i"
          >
            <template #icon>
              <component :is="icon" />
            </template>
            Link {{ i + 1 }}
          </pf-nav-item>
          <pf-nav-expandable title="Expandable" group-id="nav-icon-expandable">
            <template #icon>
              <folder-open-icon />
            </template>
            <pf-nav-item
              v-for="i in 2"
              :id="`nav-icon-expandable-link${i}`"
              :key="i"
              prevent-default
              :href="`#nav-icon-expandable-link${i}`"
              :item-id="i + 3"
              :active="active.icons === i + 3"
            >
              Subnav link {{ i }}
            </pf-nav-item>
          </pf-nav-expandable>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>

    <story-canvas title="Docked">
      <template #intro>
        <pre v-md>
          The docked variant of navigation displays only icons passed to child `pf-nav-item` or `pf-nav-expandable`. Text becomes visible with the `expanded` property, or when the dock of an outer page or compass is expanded.

          `pf-nav-expandable` items should include the `expandable-icon` prop to indicate their expandable nature while in the collapsed state of the docked nav as the caret will not be rendered.
        </pre>
      </template>

      <pf-nav
        variant="docked"
        aria-label="Default global"
        ouia-id="DockedNav"
        @select="(_e, _g, itemId) => (active.docked = itemId)"
      >
        <pf-nav-list>
          <pf-nav-item
            v-for="(icon, i) in [CubesIcon, CloudIcon, CodeIcon]"
            :id="`nav-docked-link${i + 1}`"
            :key="i"
            prevent-default
            :href="`#nav-docked-link${i + 1}`"
            :item-id="i"
            :active="active.docked === i"
          >
            <template #icon>
              <component :is="icon" />
            </template>
            Default Link {{ i + 1 }}
          </pf-nav-item>
          <pf-nav-expandable
            v-model:expanded="dockedGroupExpanded"
            title="Expandable Group 1"
            group-id="nav-expandable-group-1"
            expandable-icon
            :button-attrs="{ 'aria-label': 'Expandable Group 1' }"
          >
            <template #icon>
              <folder-icon />
            </template>
            <pf-nav-item
              v-for="i in 3"
              :id="`docked-expandable-${i}`"
              :key="i"
              prevent-default
              :href="`#docked-expandable-${i}`"
              group-id="nav-expandable-group-1"
              :item-id="i + 2"
              :active="active.docked === i + 2"
            >
              Subnav 1 Link {{ i }}
            </pf-nav-item>
          </pf-nav-expandable>
        </pf-nav-list>
      </pf-nav>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import CloudIcon from '@vue-patternfly/icons/cloud-icon';
import CodeIcon from '@vue-patternfly/icons/code-icon';
import CubesIcon from '@vue-patternfly/icons/cubes-icon';
import FolderIcon from '@vue-patternfly/icons/folder-icon';
import FolderOpenIcon from '@vue-patternfly/icons/folder-open-icon';
import LinkIcon from '@vue-patternfly/icons/link-icon';
import { defineComponent, h, reactive, ref, resolveComponent, type Component } from 'vue';

type Id = string | number | undefined;

const active = reactive<Record<string, Id>>({
  default: 0,
  grouped: 'group-1_item-1',
  expandable: 'nav-expandable-group-1_item-1',
  thirdLevel: 'nav-expand3rd-group-1_item-1',
  mixed: 'ungrouped_item-1',
  horizontal: 0,
  subnav: 0,
  flyout: 'nav-flyout-default-link-1',
  icons: 0,
  docked: 0,
});
const activeGroup = reactive<Record<string, Id>>({
  expandable: 'nav-expandable-group-1',
  thirdLevel: 'nav-expand3rd-group-1',
  mixed: '',
});
const dockedGroupExpanded = ref(false);

function log(message: string) {
  console.log(message);
}

function onToggle(_event: Event, groupId: Id, expanded: boolean) {
  log(`Group ${groupId} expanded? ${expanded}`);
}

function onExpandableSelect(_event: Event, groupId: Id, itemId: Id) {
  activeGroup.expandable = groupId;
  active.expandable = itemId;
}

function onThirdLevelSelect(_event: Event, groupId: Id, itemId: Id) {
  activeGroup.thirdLevel = groupId;
  active.thirdLevel = itemId;
}

function onMixedSelect(_event: Event, groupId: Id, itemId: Id) {
  activeGroup.mixed = groupId;
  active.mixed = itemId;
}

const numFlyouts = 5;

// a nav flyout menu whose "Next menu" items open the menu of the next depth, down to depth 1
const FlyoutMenu: Component = defineComponent({
  props: { depth: { type: Number, required: true } },
  setup(props) {
    const [PfMenu, PfMenuContent, PfMenuList, PfMenuItem] = [
      'pf-menu',
      'pf-menu-content',
      'pf-menu-list',
      'pf-menu-item',
    ].map(name => resolveComponent(name));
    const preventDefault = (event: Event) => event.preventDefault();
    const nextMenu = (value: string) =>
      h(
        PfMenuItem,
        { value, onClick: preventDefault },
        {
          default: () => 'Next menu',
          ...(props.depth > 1 && { 'flyout-menu': () => h(FlyoutMenu, { depth: props.depth - 1 }) }),
        },
      );

    return () =>
      h(
        PfMenu,
        {
          id: `nav-flyout-menu-${props.depth}`,
          containsFlyout: true,
          navFlyout: true,
          onSelect: (_event: Event, itemId: Id) => (active.flyout = itemId),
        },
        () =>
          h(PfMenuContent, () =>
            h(PfMenuList, () => [
              nextMenu(`nav-flyout-next-menu-${props.depth}`),
              ...Array.from({ length: numFlyouts - props.depth }, (_value, index) =>
                h(
                  PfMenuItem,
                  {
                    key: index,
                    value: `nav-flyout-${props.depth}-${index}`,
                    to: `#menu-link-${props.depth}-${index}`,
                    active: active.flyout === `nav-flyout-${props.depth}-${index}`,
                    onClick: preventDefault,
                  },
                  () => `Menu ${props.depth} item ${index}`,
                ),
              ),
              nextMenu(`nav-flyout-next-menu-2-${props.depth}`),
            ]),
          ),
      );
  },
});
</script>
