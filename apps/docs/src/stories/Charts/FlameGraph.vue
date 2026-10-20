<template>
  <pf-charts :height="350" :option="flameGraphOption" @click="zoomFrame" />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { CustomSeriesRenderItem, TooltipComponentFormatterCallbackParams } from 'echarts';
import { use } from 'echarts/core';
import { CustomChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

use([CustomChart, GridComponent, SVGRenderer, TooltipComponent]);

// A flame graph, as in the ECharts examples: each frame of the sampled call stacks spans its number of samples, and
// the frames it calls are stacked above it
interface Frame {
  name: string;
  value: number;
  children?: Frame[];
}

const profile: Frame = {
  name: 'main',
  value: 100,
  children: [
    {
      name: 'loadConfig',
      value: 12,
      children: [
        { name: 'readFile', value: 7 },
        { name: 'parseYaml', value: 4 },
      ],
    },
    {
      name: 'handleRequests',
      value: 70,
      children: [
        {
          name: 'parseRequest',
          value: 14,
          children: [{ name: 'JSON.parse', value: 10 }],
        },
        {
          name: 'queryDatabase',
          value: 38,
          children: [
            { name: 'connect', value: 6 },
            {
              name: 'execute',
              value: 28,
              children: [
                { name: 'serialize', value: 9 },
                { name: 'socket.write', value: 15 },
              ],
            },
          ],
        },
        {
          name: 'renderResponse',
          value: 16,
          children: [
            { name: 'template', value: 11, children: [{ name: 'escapeHtml', value: 5 }] },
            { name: 'gzip', value: 4 },
          ],
        },
      ],
    },
    { name: 'gc', value: 9 },
  ],
};

// The classic warm flame graph colors, from the red-orange, orange and yellow PatternFly chart colors
const warmColors = ['red-orange', 'orange', 'yellow'].flatMap(family =>
  [100, 200, 300].map(shade =>
    getComputedStyle(document.body).getPropertyValue(`--pf-v6-chart-color-${family}-${shade}`).trim(),
  ),
);

// Like in the original flame graphs, the color only depends on the function name
function warmColorOf(name: string) {
  let hash = 0;
  for (const char of name) {
    hash = (hash * 31 + char.charCodeAt(0)) | 0;
  }
  return warmColors[Math.abs(hash) % warmColors.length];
}

// Each frame becomes [level, start, end, name], identified by its path from the root
type FrameDatum = { name: string; value: [number, number, number, string]; itemStyle: { color: string } };

function flattenFrames(frame: Frame, id = frame.name, level = 0, start = 0): FrameDatum[] {
  let childStart = start;
  return [
    { name: id, value: [level, start, start + frame.value, frame.name], itemStyle: { color: warmColorOf(frame.name) } },
    ...(frame.children ?? []).flatMap(child => {
      const data = flattenFrames(child, `${id}/${child.name}`, level + 1, childStart);
      childStart += child.value;
      return data;
    }),
  ];
}

const frames = flattenFrames(profile);
const depth = Math.max(...frames.map(frame => frame.value[0])) + 1;

const renderFrame: CustomSeriesRenderItem = (_params, api) => {
  const level = Number(api.value(0));
  const start = api.coord([api.value(1), level]);
  const end = api.coord([api.value(2), level]);
  const height = (api.size?.([0, 1]) as number[] | undefined)?.[1] ?? 20;
  const width = end[0] - start[0];
  return {
    type: 'rect',
    transition: ['shape'],
    shape: { x: start[0], y: start[1] - height / 2, width, height: height - 2, r: 2 },
    style: { fill: api.visual('color') },
    // Without a fill, the label color contrasts with the frame
    textConfig: { position: 'insideLeft' },
    textContent: {
      type: 'text',
      style: { text: String(api.value(3)), width: width - 10, overflow: 'truncate', ellipsis: '…', truncateMinChar: 1 },
    },
  };
};

// Zooming changes the range of the axes, so every frame keeps its color
const zoomedFrame = ref(frames[0]);

const flameGraphOption = computed(() => {
  const [level, start, end] = zoomedFrame.value.value;
  return {
    tooltip: {
      formatter: (params: TooltipComponentFormatterCallbackParams) => {
        const { marker, value } = Array.isArray(params) ? params[0] : params;
        const [, from, to, name] = value as FrameDatum['value'];
        const share = ((to - from) / profile.value) * 100;
        return `${marker} ${name}: ${to - from} samples, ${+share.toFixed(2)}%`;
      },
    },
    grid: { bottom: 10, left: 10, right: 10, top: 10 },
    xAxis: { show: false, min: start, max: end },
    // The frames below the zoomed one are hidden
    yAxis: { show: false, min: level - 0.5, max: depth - 0.5 },
    series: [
      {
        type: 'custom' as const,
        clip: true,
        renderItem: renderFrame,
        encode: { x: [1, 2], y: 0 },
        data: frames,
      },
    ],
  };
});

// Zooms into the clicked frame, or back out to its caller when the bottom frame is clicked
function zoomFrame(params: { data?: unknown }) {
  const frame = params.data as FrameDatum | undefined;
  if (!frame) {
    return;
  }
  const target = frame.name === zoomedFrame.value.name ? frame.name.split('/').slice(0, -1).join('/') : frame.name;
  zoomedFrame.value = frames.find(other => other.name === target) ?? frames[0];
}
</script>
