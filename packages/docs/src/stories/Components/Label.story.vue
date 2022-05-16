<template>
  <doc-page title="Label">
    <component-title name="pf-label" />

    <story-canvas title="Filled">
      <pf-label>Grey</pf-label>
      <pf-label>
        <template #icon>
          <InfoCircleIcon />
        </template>Grey icon
      </pf-label>
      <pf-label close @close="alert">Grey removeable</pf-label>
      <pf-label close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Grey icon removeable
      </pf-label>
      <pf-label href="#filled">Grey link</pf-label>
      <pf-label href="#filled" close @close="alert">Grey link removeable</pf-label>
      <pf-label close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Grey label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="blue">Blue</pf-label>
      <pf-label color="blue">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Blue icon
      </pf-label>
      <pf-label color="blue" close @close="alert">Blue removeable</pf-label>
      <pf-label color="blue" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Blue icon removeable
      </pf-label>
      <pf-label color="blue" href="#filled">Blue link</pf-label>
      <pf-label color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
      <pf-label color="blue" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Blue label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="green">Green</pf-label>
      <pf-label color="green">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Green icon
      </pf-label>
      <pf-label color="green" close @close="alert">Green removeable</pf-label>
      <pf-label color="green" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Green icon removeable
      </pf-label>
      <pf-label color="green" href="#filled">Green link</pf-label>
      <pf-label color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
      <pf-label color="green" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Green label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="orange">Orange</pf-label>
      <pf-label color="orange">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Orange icon
      </pf-label>
      <pf-label color="orange" close @close="alert">Orange removeable</pf-label>
      <pf-label color="orange" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Orange icon removeable
      </pf-label>
      <pf-label color="orange" href="#filled">Orange link</pf-label>
      <pf-label color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
      <pf-label color="orange" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Orange label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="red">Red</pf-label>
      <pf-label color="red">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Red icon
      </pf-label>
      <pf-label color="red" close @close="alert">Red removeable</pf-label>
      <pf-label color="red" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Red icon removeable
      </pf-label>
      <pf-label color="red" href="#filled">Red link</pf-label>
      <pf-label color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
      <pf-label color="red" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Red label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="purple">Purple</pf-label>
      <pf-label color="purple">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Purple icon
      </pf-label>
      <pf-label color="purple" close @close="alert">Purple removeable</pf-label>
      <pf-label color="purple" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Purple icon removeable
      </pf-label>
      <pf-label color="purple" href="#filled">Purple link</pf-label>
      <pf-label color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
      <pf-label color="purple" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Purple label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label color="cyan">Cyan</pf-label>
      <pf-label color="cyan">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Cyan icon
      </pf-label>
      <pf-label color="cyan" close @close="alert">Cyan removeable</pf-label>
      <pf-label color="cyan" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Cyan icon removeable
      </pf-label>
      <pf-label color="cyan" href="#filled">Cyan link</pf-label>
      <pf-label color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
      <pf-label color="cyan" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Cyan label with icon that overflows
      </pf-label>
    </story-canvas>

    <story-canvas title="Outline">
      <pf-label outline>Grey</pf-label>
      <pf-label outline>
        <template #icon>
          <InfoCircleIcon />
        </template>Grey icon
      </pf-label>
      <pf-label outline close @close="alert">Grey removeable</pf-label>
      <pf-label outline close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Grey icon removeable
      </pf-label>
      <pf-label outline href="#filled">Grey link</pf-label>
      <pf-label outline href="#filled" close @close="alert">Grey link removeable</pf-label>
      <pf-label outline close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Grey label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="blue">Blue</pf-label>
      <pf-label outline color="blue">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Blue icon
      </pf-label>
      <pf-label outline color="blue" close @close="alert">Blue removeable</pf-label>
      <pf-label outline color="blue" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Blue icon removeable
      </pf-label>
      <pf-label outline color="blue" href="#filled">Blue link</pf-label>
      <pf-label outline color="blue" href="#filled" close @close="alert">Blue link removeable</pf-label>
      <pf-label outline color="blue" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Blue label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="green">Green</pf-label>
      <pf-label outline color="green">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Green icon
      </pf-label>
      <pf-label outline color="green" close @close="alert">Green removeable</pf-label>
      <pf-label outline color="green" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Green icon removeable
      </pf-label>
      <pf-label outline color="green" href="#filled">Green link</pf-label>
      <pf-label outline color="green" href="#filled" close @close="alert">Green link removeable</pf-label>
      <pf-label outline color="green" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Green label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="orange">Orange</pf-label>
      <pf-label outline color="orange">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Orange icon
      </pf-label>
      <pf-label outline color="orange" close @close="alert">Orange removeable</pf-label>
      <pf-label outline color="orange" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Orange icon removeable
      </pf-label>
      <pf-label outline color="orange" href="#filled">Orange link</pf-label>
      <pf-label outline color="orange" href="#filled" close @close="alert">Orange link removeable</pf-label>
      <pf-label outline color="orange" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Orange label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="red">Red</pf-label>
      <pf-label outline color="red">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Red icon
      </pf-label>
      <pf-label outline color="red" close @close="alert">Red removeable</pf-label>
      <pf-label outline color="red" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Red icon removeable
      </pf-label>
      <pf-label outline color="red" href="#filled">Red link</pf-label>
      <pf-label outline color="red" href="#filled" close @close="alert">Red link removeable</pf-label>
      <pf-label outline color="red" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Red label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="purple">Purple</pf-label>
      <pf-label outline color="purple">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Purple icon
      </pf-label>
      <pf-label outline color="purple" close @close="alert">Purple removeable</pf-label>
      <pf-label outline color="purple" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Purple icon removeable
      </pf-label>
      <pf-label outline color="purple" href="#filled">Purple link</pf-label>
      <pf-label outline color="purple" href="#filled" close @close="alert">Purple link removeable</pf-label>
      <pf-label outline color="purple" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Purple label with icon that overflows
      </pf-label>
      <br>
      <br>
      <pf-label outline color="cyan">Cyan</pf-label>
      <pf-label outline color="cyan">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Cyan icon
      </pf-label>
      <pf-label outline color="cyan" close @close="alert">Cyan removeable</pf-label>
      <pf-label outline color="cyan" close @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Cyan icon removeable
      </pf-label>
      <pf-label outline color="cyan" href="#filled">Cyan link</pf-label>
      <pf-label outline color="cyan" href="#filled" close @close="alert">Cyan link removeable</pf-label>
      <pf-label outline color="cyan" close truncated @close="alert">
        <template #icon>
          <InfoCircleIcon />
        </template>
        Cyan label with icon that overflows
      </pf-label>
    </story-canvas>

    <story-canvas title="Truncated">
      <pf-label truncated tooltip-position="right">Label is too long to fit in the label</pf-label>
    </story-canvas>
  </doc-page>
</template>

<style>
.story-canvas .pf-c-label + .pf-c-label {
  margin-left: .2rem;
}
</style>

<script lang="ts" setup>
import InfoCircleIcon from '@vue-patternfly/icons/dist/esm/icons/info-circle-icon';
const alert = () => window.alert('Clicked close button');
</script>
