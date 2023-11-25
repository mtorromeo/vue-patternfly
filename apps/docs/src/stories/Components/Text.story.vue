<template>
  <doc-page title="Text">
    <template #description><b>PfText</b> and <b>PfTextList</b> components are always wrapped in <b>PfTextContent</b> and provide correct formatting to a number of standard HTML tags.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Text/Text.vue" />
      <component-info src="packages/core/src/components/Text/TextContent.vue" />
      <component-info src="packages/core/src/components/Text/TextList.vue" />
      <component-info src="packages/core/src/components/Text/TextListItem.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Text">
      <pf-text>{{ sample_title }}</pf-text>
    </story-canvas>

    <story-canvas title="Text visited">
      <pf-text-content>
        <pf-text component="h3">Visited link example</pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            Visited link
          </pf-text>
        </pf-text>
      </pf-text-content>
      <br>
      <pf-text-content visited>
        <pf-text component="h3">Visited content example</pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            content link 1
          </pf-text>
        </pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            content link 2
          </pf-text>
        </pf-text>
        <pf-text component="p">
          <pf-text component="a" href="#">
            content link 3
          </pf-text>
        </pf-text>
      </pf-text-content>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const sample_title = ref('Title text');
</script>
