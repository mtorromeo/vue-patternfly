<template>
  <doc-page title="Tooltip">
    <template #description>A <b>tooltip</b> is in-app messaging used to identify elements on a page with short, clarifying text.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Tooltip/Tooltip.vue" />
      <component-info src="packages/core/src/components/Tooltip/TooltipArrow.vue" />
      <component-info src="packages/core/src/components/Tooltip/TooltipContent.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <div style="margin: 100px">
        <pf-tooltip>
          <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</template>
          <pf-button>I have a tooltip!</pf-button>
        </pf-tooltip>
      </div>
    </story-canvas>
  </doc-page>
</template>
