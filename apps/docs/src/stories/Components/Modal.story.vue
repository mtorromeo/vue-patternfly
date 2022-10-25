<template>
  <doc-page title="Modal">
    <component-title name="pf-modal" />

    <story-canvas title="Default">
      <pf-button @click="open1 = !open1">Toggle Modal</pf-button>
      <pf-modal v-model:open="open1" title="Simple modal header">
        {{ sample_content }}
      </pf-modal>
    </story-canvas>

    <story-canvas title="With description">
      <pf-button @click="open2 = !open2">Toggle Modal</pf-button>
      <pf-modal v-model:open="open2" title="Simple modal header">
        {{ sample_content }}
        <template #description>
          A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.
        </template>
        <template #footer>
          <pf-button variant="primary" @click="open2 = !open2">
            Confirm
          </pf-button>
          <pf-button variant="link" @click="open2 = !open2">
            Cancel
          </pf-button>
        </template>
      </pf-modal>
    </story-canvas>

    <story-canvas title="With help">
      <pf-button @click="open3 = !open3">Toggle Modal</pf-button>
      <pf-modal v-model:open="open3" title="Simple modal header">
        {{ sample_content }}
        <template #help>
          <pf-tooltip>
            <pf-button variant="plain" aria-help="help">
              <help-icon />
            </pf-button>
            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
              turpis.
            </template>
          </pf-tooltip>
        </template>
      </pf-modal>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import HelpIcon from "@vue-patternfly/icons/dist/esm/icons/help-icon";
import { ref } from "vue";

const open1 = ref(false);
const open2 = ref(false);
const open3 = ref(false);
const sample_content = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`);
</script>
