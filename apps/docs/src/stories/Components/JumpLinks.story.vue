<template>
  <doc-page title="Jump links">
    <template #description><b>Jump links</b> allow users to navigate to sections within a page.</template>

    <template #apidocs>
      <component-info name="PfJumpLinks" />
      <component-info name="PfJumpLinksItem" />
      <component-info name="PfJumpLinksList" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `scrollableRef` and `scrollableSelector` props are merged into `scrollable-element`, which takes a selector or an element.
      - The `auto-link-from-elements` prop generates the items from the elements inside the scrollable element, like its headings.
      - The active item is bound with `v-model:active-index` (`activeIndex`), and the expanded state with `v-model:expanded` (`isExpanded`).
      - `expandable` is set through the `expandable`, `expandable-sm`, … breakpoint props.
      - Clicking an item scrolls smoothly to its target. The navigation history is only updated with `nav-history="push"` or `nav-history="replace"`, so that hash routers are not disrupted (`shouldReplaceNavHistory`).
      - The `label` can also be passed as a slot.
      See [common differences from patternfly-react](#/).

      ## Examples

      These examples are static because they have no element to scroll spy on that makes sense: their clicks are prevented so that they do not navigate. Check out the scrollspy example at the end to see scroll spying in action!
    </pre>

    <story-canvas title="Basic">
      <pf-jump-links aria-label="Jump to basic example sections" @click.capture.prevent>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#" active>Active section</pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
      </pf-jump-links>
    </story-canvas>

    <story-canvas title="With centered list">
      <pf-jump-links centered aria-label="Jump to centered example sections" @click.capture.prevent>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#" active>Active section</pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
      </pf-jump-links>
    </story-canvas>

    <story-canvas title="With label">
      <pf-jump-links label="Jump to first section in jump links with label example" @click.capture.prevent>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#" active>Active section</pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
      </pf-jump-links>
      <pf-jump-links centered label="Jump to second section in jump links with label example" @click.capture.prevent>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#" active>Active section</pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
      </pf-jump-links>
    </story-canvas>

    <story-canvas title="Vertical">
      <pf-jump-links vertical aria-label="Jump to vertical example sections" @click.capture.prevent>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#" active>Active section</pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
      </pf-jump-links>
    </story-canvas>

    <story-canvas title="Vertical with label">
      <pf-jump-links vertical label="Jump to vertical example sections with labels" @click.capture.prevent>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#" active>Active section</pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
      </pf-jump-links>
    </story-canvas>

    <story-canvas title="Expandable vertical with subsection">
      <pf-jump-links
        vertical
        label="Jump to expandable vertical section"
        expandable="expandable"
        @click.capture.prevent
      >
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#">
          Section with active subsection
          <pf-jump-links-list aria-label="Expandable vertical section subsection">
            <pf-jump-links-item href="#" active>Active subsection</pf-jump-links-item>
            <pf-jump-links-item href="#">Inactive subsection</pf-jump-links-item>
            <pf-jump-links-item href="#">Inactive subsection</pf-jump-links-item>
          </pf-jump-links-list>
        </pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
        <pf-jump-links-item href="#">Inactive section</pf-jump-links-item>
      </pf-jump-links>
    </story-canvas>

    <story-canvas title="Scrollspy">
      <template #intro>
        <pre v-md>
          Pass the scrollable element to spy on, as a selector or an element, to `scrollable-element`, and give the items an `href` matching the `id` of the element they jump to (or a `node` to spy on a different element). The headings are given a tab index so that the jump links can focus them.
        </pre>
      </template>
      <pf-flex flex-wrap="nowrap">
        <pf-flex-item>
          <pf-jump-links
            v-model:active-index="activeIndex"
            vertical
            label="Jump to section"
            scrollable-element="#jump-links-scrollspy"
          >
            <pf-jump-links-item v-for="i in 5" :key="i" :href="`#jump-links-heading-${i}`">
              Heading {{ i }}
            </pf-jump-links-item>
          </pf-jump-links>
        </pf-flex-item>
        <pf-flex-item grow>
          <div id="jump-links-scrollspy" style="position: relative; height: 300px; overflow-y: auto">
            <pf-content>
              <template v-for="i in 5" :key="i">
                <h2 :id="`jump-links-heading-${i}`" tabindex="-1">Heading {{ i }}</h2>
                <p v-for="p in 3" :key="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique
                  purus. Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus.
                </p>
              </template>
            </pf-content>
          </div>
        </pf-flex-item>
      </pf-flex>
      <p>Active index: {{ activeIndex }}</p>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref(0);
</script>
