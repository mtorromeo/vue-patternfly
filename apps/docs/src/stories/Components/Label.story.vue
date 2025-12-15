<template>
  <doc-page title="Label">
    <template #description>The <b>label</b> component allows users to add specific element captions for user clarity and convenience.</template>

    <template #apidocs>
      <component-info name="PfLabel" />
    </template>

    <story-canvas title="Filled">
      <pf-label>Grey</pf-label>
      <pf-label>
        <template #icon>
          <circle-info-icon />
        </template>Grey icon
      </pf-label>
      <pf-label @close="alert">Grey removeable</pf-label>
      <pf-label @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Grey icon removeable
      </pf-label>
      <pf-label href="#filled">Grey link</pf-label>
      <pf-label href="#filled" @close="alert">Grey link removeable</pf-label>
      <pf-label text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Grey label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="blue">Blue</pf-label>
      <pf-label color="blue">
        <template #icon>
          <circle-info-icon />
        </template>
        Blue icon
      </pf-label>
      <pf-label color="blue" @close="alert">Blue removeable</pf-label>
      <pf-label color="blue" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Blue icon removeable
      </pf-label>
      <pf-label color="blue" href="#filled">Blue link</pf-label>
      <pf-label color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
      <pf-label color="blue" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Blue label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="green">Green</pf-label>
      <pf-label color="green">
        <template #icon>
          <circle-info-icon />
        </template>
        Green icon
      </pf-label>
      <pf-label color="green" @close="alert">Green removeable</pf-label>
      <pf-label color="green" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Green icon removeable
      </pf-label>
      <pf-label color="green" href="#filled">Green link</pf-label>
      <pf-label color="green" href="#filled" @close="alert">Green link removeable</pf-label>
      <pf-label color="green" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Green label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="orange">Orange</pf-label>
      <pf-label color="orange">
        <template #icon>
          <circle-info-icon />
        </template>
        Orange icon
      </pf-label>
      <pf-label color="orange" @close="alert">Orange removeable</pf-label>
      <pf-label color="orange" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Orange icon removeable
      </pf-label>
      <pf-label color="orange" href="#filled">Orange link</pf-label>
      <pf-label color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
      <pf-label color="orange" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Orange label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="red">Red</pf-label>
      <pf-label color="red">
        <template #icon>
          <circle-info-icon />
        </template>
        Red icon
      </pf-label>
      <pf-label color="red" @close="alert">Red removeable</pf-label>
      <pf-label color="red" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Red icon removeable
      </pf-label>
      <pf-label color="red" href="#filled">Red link</pf-label>
      <pf-label color="red" href="#filled" @close="alert">Red link removeable</pf-label>
      <pf-label color="red" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Red label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="purple">Purple</pf-label>
      <pf-label color="purple">
        <template #icon>
          <circle-info-icon />
        </template>
        Purple icon
      </pf-label>
      <pf-label color="purple" @close="alert">Purple removeable</pf-label>
      <pf-label color="purple" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Purple icon removeable
      </pf-label>
      <pf-label color="purple" href="#filled">Purple link</pf-label>
      <pf-label color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
      <pf-label color="purple" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Purple label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="teal">Teal</pf-label>
      <pf-label color="teal">
        <template #icon>
          <circle-info-icon />
        </template>
        Teal icon
      </pf-label>
      <pf-label color="teal" @close="alert">Teal removeable</pf-label>
      <pf-label color="teal" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Teal icon removeable
      </pf-label>
      <pf-label color="teal" href="#filled">Teal link</pf-label>
      <pf-label color="teal" href="#filled" @close="alert">Teal link removeable</pf-label>
      <pf-label color="teal" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Teal label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="yellow">Yellow</pf-label>
      <pf-label color="yellow">
        <template #icon>
          <circle-info-icon />
        </template>
        Yellow icon
      </pf-label>
      <pf-label color="yellow" @close="alert">Yellow removeable</pf-label>
      <pf-label color="yellow" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Yellow icon removeable
      </pf-label>
      <pf-label color="yellow" href="#filled">Yellow link</pf-label>
      <pf-label color="yellow" href="#filled" @close="alert">Yellow link removeable</pf-label>
      <pf-label color="yellow" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Yellow label with icon that overflows
      </pf-label>
    </story-canvas>

    <story-canvas title="Outline">
      <pf-label outline>Grey</pf-label>
      <pf-label outline>
        <template #icon>
          <circle-info-icon />
        </template>Grey icon
      </pf-label>
      <pf-label outline @close="alert">Grey removeable</pf-label>
      <pf-label outline @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Grey icon removeable
      </pf-label>
      <pf-label outline href="#filled">Grey link</pf-label>
      <pf-label outline href="#filled" @close="alert">Grey link removeable</pf-label>
      <pf-label outline text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Grey label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="blue">Blue</pf-label>
      <pf-label outline color="blue">
        <template #icon>
          <circle-info-icon />
        </template>
        Blue icon
      </pf-label>
      <pf-label outline color="blue" @close="alert">Blue removeable</pf-label>
      <pf-label outline color="blue" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Blue icon removeable
      </pf-label>
      <pf-label outline color="blue" href="#filled">Blue link</pf-label>
      <pf-label outline color="blue" href="#filled" @close="alert">Blue link removeable</pf-label>
      <pf-label outline color="blue" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Blue label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="green">Green</pf-label>
      <pf-label outline color="green">
        <template #icon>
          <circle-info-icon />
        </template>
        Green icon
      </pf-label>
      <pf-label outline color="green" @close="alert">Green removeable</pf-label>
      <pf-label outline color="green" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Green icon removeable
      </pf-label>
      <pf-label outline color="green" href="#filled">Green link</pf-label>
      <pf-label outline color="green" href="#filled" @close="alert">Green link removeable</pf-label>
      <pf-label outline color="green" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Green label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="orange">Orange</pf-label>
      <pf-label outline color="orange">
        <template #icon>
          <circle-info-icon />
        </template>
        Orange icon
      </pf-label>
      <pf-label outline color="orange" @close="alert">Orange removeable</pf-label>
      <pf-label outline color="orange" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Orange icon removeable
      </pf-label>
      <pf-label outline color="orange" href="#filled">Orange link</pf-label>
      <pf-label outline color="orange" href="#filled" @close="alert">Orange link removeable</pf-label>
      <pf-label outline color="orange" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Orange label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="red">Red</pf-label>
      <pf-label outline color="red">
        <template #icon>
          <circle-info-icon />
        </template>
        Red icon
      </pf-label>
      <pf-label outline color="red" @close="alert">Red removeable</pf-label>
      <pf-label outline color="red" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Red icon removeable
      </pf-label>
      <pf-label outline color="red" href="#filled">Red link</pf-label>
      <pf-label outline color="red" href="#filled" @close="alert">Red link removeable</pf-label>
      <pf-label outline color="red" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Red label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="purple">Purple</pf-label>
      <pf-label outline color="purple">
        <template #icon>
          <circle-info-icon />
        </template>
        Purple icon
      </pf-label>
      <pf-label outline color="purple" @close="alert">Purple removeable</pf-label>
      <pf-label outline color="purple" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Purple icon removeable
      </pf-label>
      <pf-label outline color="purple" href="#filled">Purple link</pf-label>
      <pf-label outline color="purple" href="#filled" @close="alert">Purple link removeable</pf-label>
      <pf-label outline color="purple" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Purple label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="teal">Teal</pf-label>
      <pf-label outline color="teal">
        <template #icon>
          <circle-info-icon />
        </template>
        Teal icon
      </pf-label>
      <pf-label outline color="teal" @close="alert">Teal removeable</pf-label>
      <pf-label outline color="teal" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Teal icon removeable
      </pf-label>
      <pf-label outline color="teal" href="#filled">Teal link</pf-label>
      <pf-label outline color="teal" href="#filled" @close="alert">Teal link removeable</pf-label>
      <pf-label outline color="teal" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Teal label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="yellow">Yellow</pf-label>
      <pf-label outline color="yellow">
        <template #icon>
          <circle-info-icon />
        </template>
        Yellow icon
      </pf-label>
      <pf-label outline color="yellow" @close="alert">Yellow removeable</pf-label>
      <pf-label outline color="yellow" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Yellow icon removeable
      </pf-label>
      <pf-label outline color="yellow" href="#filled">Yellow link</pf-label>
      <pf-label outline color="yellow" href="#filled" @close="alert">Yellow link removeable</pf-label>
      <pf-label outline color="yellow" text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Yellow label with icon that overflows
      </pf-label>
    </story-canvas>

    <story-canvas title="Compact">
      <pf-label compact>Compact</pf-label>
      <pf-label compact>
        <template #icon>
          <circle-info-icon />
        </template>Compact icon
      </pf-label>
      <pf-label compact @close="alert">Compact removeable</pf-label>
      <pf-label compact @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Compact icon removeable
      </pf-label>
      <pf-label compact href="#filled">Compact link</pf-label>
      <pf-label compact href="#filled" @close="alert">Compact link removeable</pf-label>
      <pf-label compact text-max-width="16ch" @close="alert">
        <template #icon>
          <circle-info-icon />
        </template>
        Compact label with icon that overflows
      </pf-label>
    </story-canvas>

    <story-canvas title="Truncated">
      <pf-label text-max-width="16ch" tooltip-position="right">Label is too long to fit in the label</pf-label>
    </story-canvas>
  </doc-page>
</template>

<style>
.story-canvas .pf-v6-c-label + .pf-v6-c-label {
  margin-inline-end: var(--pf-t--global--spacer--sm);
  margin-block-end: var(--pf-t--global--spacer--sm);
}
</style>

<script lang="ts" setup>
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import { useAlertsStore } from '../../store/alerts';

const alerts = useAlertsStore();

function alert(e: Event) {
  const label = (e.target as HTMLElement)?.closest('.pf-v6-c-label');
  if (label instanceof HTMLElement) {
    alerts.add({
      title: `Clicked close button on "${label.innerText}"`,
      variant: 'info',
    });
  }
}
</script>
