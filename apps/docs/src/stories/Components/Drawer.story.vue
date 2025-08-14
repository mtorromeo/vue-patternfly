<template>
  <doc-page title="Drawer">
    <template #description>A <b>drawer</b> is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Drawer/Drawer.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerActions.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerCloseButton.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerContent.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerContentBody.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerHead.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerMain.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerPanelBody.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerPanelContent.vue" />
      <component-info src="packages/core/src/components/Drawer/DrawerSection.vue" />
    </template>

    <pre v-md>
      ## Demo
    </pre>

    <pf-form-select :model-value="position" @update:model-value="(position = $event as 'right' | 'left' | 'bottom')" required>
      <pf-form-select-option value="right" label="right" />
      <pf-form-select-option value="left" label="left" />
      <pf-form-select-option value="bottom" label="bottom" />
    </pf-form-select><br><br>
    <pf-switch v-model:checked="inline" label="Inline" /><br><br>
    <pf-switch v-model:checked="contentPadding" label="Content padding" /><br><br>
    <pf-switch v-model:checked="noPanelPadding" label="No panel padding" /><br><br>
    <pf-switch v-model:checked="showSection" label="Show additional section above content" /><br><br>
    <pf-switch v-model:checked="resizable" label="Resizable" /><br><br>
    <pf-button :aria-expanded="expanded" @click="expanded = !expanded">Toggle drawer</pf-button>

    <story-canvas>
      <pf-drawer
        :expanded="expanded"
        :position="position"
        :inline="inline"
        :style="{height: position === 'bottom' ? '500px' : undefined}"
      >
        <pf-drawer-section v-if="showSection">drawer-section</pf-drawer-section>
        <pf-drawer-content>
          <pf-drawer-content-body :padding="contentPadding">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
          </pf-drawer-content-body>

          <template #content>
            <pf-drawer-panel-content :resizable="resizable" default-size="350px" min-size="150px">
              <pf-drawer-head :no-padding="noPanelPadding">
                <span :tabindex="expanded ? 0 : -1">
                  drawer-panel
                </span>

                <pf-drawer-actions>
                  <pf-drawer-close-button @click="expanded = false" />
                </pf-drawer-actions>
              </pf-drawer-head>
            </pf-drawer-panel-content>
          </template>
        </pf-drawer-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Reduced number of tags">
      <pf-drawer
        :expanded="expanded"
        :position="position"
        :inline="inline"
        :style="{height: position === 'bottom' ? '500px' : undefined}"
      >
        <pf-drawer-section v-if="showSection">drawer-section</pf-drawer-section>

        <pf-drawer-content-body :padding="contentPadding">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.
        </pf-drawer-content-body>

        <pf-drawer-panel-content :resizable="resizable" default-size="350px" min-size="150px">
          <pf-drawer-head :no-padding="noPanelPadding">
            <span :tabindex="expanded ? 0 : -1">
              drawer-panel
            </span>

            <pf-drawer-actions>
              <pf-drawer-close-button @click="expanded = false" />
            </pf-drawer-actions>
          </pf-drawer-head>
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import type { ComponentProps, PfDrawer } from '@vue-patternfly/core';

const expanded = ref(false);
const position: Ref<ComponentProps<(typeof PfDrawer)>['position']> = ref('right');
const inline = ref(false);
const contentPadding = ref(true);
const noPanelPadding = ref(false);
const showSection = ref(false);
const resizable = ref(false);
</script>
