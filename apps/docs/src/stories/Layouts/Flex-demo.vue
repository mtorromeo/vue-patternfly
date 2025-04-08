<template>
  <story-canvas title="Interactive Flex Demo">
    <template #intro>
      <pre v-md>An interactive demo of the Flex and FlexItem components. Use the controls below to explore how different properties affect the layout.</pre>
      <pf-tabs>
        <pf-tab title="Container properties">
          <pf-form component="div" horizontal class="pf-v6-u-mt-lg">
            <pf-form-group label="Direction">
              <pf-form-select v-model="direction">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="row">row</pf-form-select-option>
                <pf-form-select-option value="row-reverse">row-reverse</pf-form-select-option>
                <pf-form-select-option value="column">column</pf-form-select-option>
                <pf-form-select-option value="column-reverse">column-reverse</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Display">
              <pf-form-select v-model="display">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="flex">flex</pf-form-select-option>
                <pf-form-select-option value="inline-flex">inline-flex</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Justify Content">
              <pf-form-select v-model="justifyContent">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="flex-start">flex-start</pf-form-select-option>
                <pf-form-select-option value="flex-end">flex-end</pf-form-select-option>
                <pf-form-select-option value="center">center</pf-form-select-option>
                <pf-form-select-option value="space-between">space-between</pf-form-select-option>
                <pf-form-select-option value="space-around">space-around</pf-form-select-option>
                <pf-form-select-option value="space-evenly">space-evenly</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Align Items">
              <pf-form-select v-model="alignItems">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="flex-start">flex-start</pf-form-select-option>
                <pf-form-select-option value="flex-end">flex-end</pf-form-select-option>
                <pf-form-select-option value="center">center</pf-form-select-option>
                <pf-form-select-option value="baseline">baseline</pf-form-select-option>
                <pf-form-select-option value="stretch">stretch</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Align Content">
              <pf-form-select v-model="alignContent">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="flex-start">flex-start</pf-form-select-option>
                <pf-form-select-option value="flex-end">flex-end</pf-form-select-option>
                <pf-form-select-option value="center">center</pf-form-select-option>
                <pf-form-select-option value="space-between">space-between</pf-form-select-option>
                <pf-form-select-option value="space-around">space-around</pf-form-select-option>
                <pf-form-select-option value="stretch">stretch</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Flex Wrap">
              <pf-form-select v-model="flexWrap">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="nowrap">nowrap</pf-form-select-option>
                <pf-form-select-option value="wrap">wrap</pf-form-select-option>
                <pf-form-select-option value="wrap-reverse">wrap-reverse</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Space Items">
              <pf-form-select v-model="spaceItems">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="none">none</pf-form-select-option>
                <pf-form-select-option value="xs">xs</pf-form-select-option>
                <pf-form-select-option value="sm">sm</pf-form-select-option>
                <pf-form-select-option value="md">md</pf-form-select-option>
                <pf-form-select-option value="lg">lg</pf-form-select-option>
                <pf-form-select-option value="xl">xl</pf-form-select-option>
                <pf-form-select-option value="2xl">2xl</pf-form-select-option>
                <pf-form-select-option value="3xl">3xl</pf-form-select-option>
                <pf-form-select-option value="4xl">4xl</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Gap">
              <pf-form-select v-model="gap">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="none">none</pf-form-select-option>
                <pf-form-select-option value="xs">xs</pf-form-select-option>
                <pf-form-select-option value="sm">sm</pf-form-select-option>
                <pf-form-select-option value="md">md</pf-form-select-option>
                <pf-form-select-option value="lg">lg</pf-form-select-option>
                <pf-form-select-option value="xl">xl</pf-form-select-option>
                <pf-form-select-option value="2xl">2xl</pf-form-select-option>
                <pf-form-select-option value="3xl">3xl</pf-form-select-option>
                <pf-form-select-option value="4xl">4xl</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Row Gap">
              <pf-form-select v-model="rowGap">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="none">none</pf-form-select-option>
                <pf-form-select-option value="xs">xs</pf-form-select-option>
                <pf-form-select-option value="sm">sm</pf-form-select-option>
                <pf-form-select-option value="md">md</pf-form-select-option>
                <pf-form-select-option value="lg">lg</pf-form-select-option>
                <pf-form-select-option value="xl">xl</pf-form-select-option>
                <pf-form-select-option value="2xl">2xl</pf-form-select-option>
                <pf-form-select-option value="3xl">3xl</pf-form-select-option>
                <pf-form-select-option value="4xl">4xl</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>

            <pf-form-group label="Column Gap">
              <pf-form-select v-model="columnGap">
                <pf-form-select-option value="">[undefined]</pf-form-select-option>
                <pf-form-select-option value="none">none</pf-form-select-option>
                <pf-form-select-option value="xs">xs</pf-form-select-option>
                <pf-form-select-option value="sm">sm</pf-form-select-option>
                <pf-form-select-option value="md">md</pf-form-select-option>
                <pf-form-select-option value="lg">lg</pf-form-select-option>
                <pf-form-select-option value="xl">xl</pf-form-select-option>
                <pf-form-select-option value="2xl">2xl</pf-form-select-option>
                <pf-form-select-option value="3xl">3xl</pf-form-select-option>
                <pf-form-select-option value="4xl">4xl</pf-form-select-option>
              </pf-form-select>
            </pf-form-group>
          </pf-form>
        </pf-tab>

        <pf-tab title="Item properties">
          <pf-form component="div" horizontal class="pf-v6-u-mt-lg">
            <pf-form-group label="Number of items">
              <pf-text-input type="number" min="1" max="10" v-model="itemCount" />
            </pf-form-group>
          </pf-form>

          <pf-tabs>
            <pf-tab v-for="(item, i) in flexItems" :key="i" :title="`Item ${i + 1}`">
              <pf-form component="div" horizontal class="pf-v6-u-mt-lg">
                <pf-form-group label="Align">
                  <pf-form-select v-model="item.align">
                    <pf-form-select-option value="">[undefined]</pf-form-select-option>
                    <pf-form-select-option value="left">left</pf-form-select-option>
                    <pf-form-select-option value="right">right</pf-form-select-option>
                  </pf-form-select>
                </pf-form-group>

                <pf-form-group label="Align Self">
                  <pf-form-select v-model="item.alignSelf">
                    <pf-form-select-option value="">default</pf-form-select-option>
                    <pf-form-select-option value="auto">auto</pf-form-select-option>
                    <pf-form-select-option value="flex-start">flex-start</pf-form-select-option>
                    <pf-form-select-option value="flex-end">flex-end</pf-form-select-option>
                    <pf-form-select-option value="center">center</pf-form-select-option>
                    <pf-form-select-option value="baseline">baseline</pf-form-select-option>
                    <pf-form-select-option value="stretch">stretch</pf-form-select-option>
                  </pf-form-select>
                </pf-form-group>

                <pf-form-group label="Flex">
                  <pf-form-select v-model="item.flex">
                    <pf-form-select-option value="default">default</pf-form-select-option>
                    <pf-form-select-option value="none">none</pf-form-select-option>
                    <pf-form-select-option value="1">1</pf-form-select-option>
                    <pf-form-select-option value="2">2</pf-form-select-option>
                    <pf-form-select-option value="3">3</pf-form-select-option>
                    <pf-form-select-option value="4">4</pf-form-select-option>
                  </pf-form-select>
                </pf-form-group>

                <pf-form-group label="Spacer">
                  <pf-form-select v-model="item.spacer">
                    <pf-form-select-option value="">[undefined]</pf-form-select-option>
                    <pf-form-select-option value="none">none</pf-form-select-option>
                    <pf-form-select-option value="xs">xs</pf-form-select-option>
                    <pf-form-select-option value="sm">sm</pf-form-select-option>
                    <pf-form-select-option value="md">md</pf-form-select-option>
                    <pf-form-select-option value="lg">lg</pf-form-select-option>
                    <pf-form-select-option value="xl">xl</pf-form-select-option>
                    <pf-form-select-option value="2xl">2xl</pf-form-select-option>
                    <pf-form-select-option value="3xl">3xl</pf-form-select-option>
                    <pf-form-select-option value="4xl">4xl</pf-form-select-option>
                  </pf-form-select>
                </pf-form-group>

                <pf-form-group label="Order">
                  <pf-text-input type="number" v-model="item.order" />
                </pf-form-group>

                <pf-form-group>
                  <pf-checkbox v-model="item.grow" label="Grow" />
                  <pf-checkbox v-model="item.shrink" label="Shrink" />
                  <pf-checkbox v-model="item.fullWidth" label="Full Width" />
                </pf-form-group>
              </pf-form>
            </pf-tab>
          </pf-tabs>
        </pf-tab>
      </pf-tabs>
    </template>

    <pf-flex
      :align-content="alignContent"
      :align-items="alignItems"
      :column-gap="columnGap"
      :direction="direction"
      :display="display"
      :flex-wrap="flexWrap"
      :gap="gap"
      :justify-content="justifyContent"
      :row-gap="rowGap"
      :space-items="spaceItems"
    >
      <pf-flex-item
        v-for="(item, i) in flexItems"
        :key="i"
        :align="item.align"
        :align-self="item.alignSelf"
        :flex="item.flex"
        :spacer="item.spacer"
        :full-width="item.fullWidth"
        :grow="item.grow"
        :shrink="item.shrink"
        :order="item.order"
      >
        <strong>{{ i + 1 }}.</strong> {{ item.text }}
        <br />
        <pre><code>{{ JSON.stringify({ ...item, text: undefined }, null, 2) }}</code></pre>
      </pf-flex-item>
    </pf-flex>
  </story-canvas>
</template>

<style scoped>
pre {
  font-size: 0.8rem;
}
</style>

<script lang="ts" setup>
import { ref, reactive, watch, type Ref } from "vue";
import type { Props as FlexProps } from "@vue-patternfly/core/layouts/Flex/Flex.vue";
import type { Props as FlexItemProps } from "@vue-patternfly/core/layouts/Flex/FlexItem.vue";

interface FlexItem {
  align: FlexProps["align"];
  alignSelf: FlexItemProps["alignSelf"];
  flex: FlexItemProps["flex"];
  spacer: FlexItemProps["spacer"];
  fullWidth: boolean;
  grow: boolean;
  shrink: boolean;
  order: string;
  text: string;
}

const alignContent: Ref<FlexProps["alignContent"]> = ref();
const alignItems: Ref<FlexProps["alignItems"]> = ref();
const columnGap: Ref<FlexProps["columnGap"]> = ref();
const direction: Ref<FlexProps["direction"]> = ref();
const display: Ref<FlexProps["display"]> = ref();
const flexWrap: Ref<FlexProps["flexWrap"]> = ref();
const gap: Ref<FlexProps["gap"]> = ref();
const justifyContent: Ref<FlexProps["justifyContent"]> = ref();
const rowGap: Ref<FlexProps["rowGap"]> = ref();
const spaceItems: Ref<FlexProps["spaceItems"]> = ref();

const itemCount = ref(5);

const defaultItem: FlexItem = {
  grow: false,
  shrink: false,
  align: undefined,
  alignSelf: undefined,
  flex: undefined,
  spacer: undefined,
  fullWidth: false,
  order: "",
  text: "",
};

// Generate flex items based on the itemCount
const flexItems = reactive<FlexItem[]>([]);

watch(
  itemCount,
  () => {
    const count = Math.max(1, itemCount.value);
    if (count > flexItems.length) {
      for (let i = flexItems.length; i < count; i++) {
        flexItems.push({ ...defaultItem, text: generateLoremIpsum(Math.ceil(Math.random() * 80) + 10) });
      }
    } else if (count < flexItems.length) {
      flexItems.splice(count, flexItems.length - count);
    }
  },
  { immediate: true },
);

/**
 * Generates a lorem ipsum string of approximately the requested length
 * @param length The desired length of the lorem ipsum text
 * @returns A string of lorem ipsum text with length as close as possible to the requested length
 */
function generateLoremIpsum(length: number): string {
  if (length <= 0) {
    return "";
  }

  // Standard lorem ipsum text to use as base
  const loremIpsumBase =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // If the requested length is shorter than the base text
  if (length <= loremIpsumBase.length) {
    return loremIpsumBase.substring(0, length).trim();
  }

  return loremIpsumBase;
}
</script>
