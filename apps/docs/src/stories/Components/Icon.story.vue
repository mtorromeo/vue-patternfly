<template>
  <doc-page title="Icon">
    <component-title name="pf-icon" />
    <template #description>An <b>icon</b> component is a container that allows for icons of varying dimensions, as well as spinners, to seamlessly replace each other without shifting surrounding content.</template>

    <template #apidocs>
      <component-info name="PfIcon" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-icon>
        <ArrowDownLongIcon />
      </pf-icon>
      <pf-icon>
        <AngleRightIcon />
      </pf-icon>
      <pf-icon>
        <AngleDownIcon />
      </pf-icon>
      <pf-icon>
        <GearIcon />
      </pf-icon>
    </story-canvas>

    <story-canvas title="Size">
      <pf-icon size="sm">
        <CirclePlusIcon />
      </pf-icon>
      <pf-icon size="md">
        <CirclePlusIcon />
      </pf-icon>
      <pf-icon size="lg">
        <CirclePlusIcon />
      </pf-icon>
      <pf-icon size="xl">
        <CirclePlusIcon />
      </pf-icon>
    </story-canvas>

    <story-canvas title="Status color">
      <template #intro>
        <pre v-md>
          The following example demonstrates the various status variants of an icon. Keep in mind that these icons are displayed out of a typical context, and that you should not rely on color alone to convey status to users.
        </pre>
      </template>

      <pf-icon status="danger">
        <CircleExclamationIcon />
      </pf-icon>
      <pf-icon status="warning">
        <TriangleExclamationIcon />
      </pf-icon>
      <pf-icon status="success">
        <CircleCheckIcon />
      </pf-icon>
      <pf-icon status="info">
        <CircleInfoIcon />
      </pf-icon>
      <pf-icon status="custom">
        <BellIcon />
      </pf-icon>
    </story-canvas>

    <story-canvas title="Sizing an icon within the icon container">
      <template #intro>
        <pre v-md>
          Providing both size and iconSize properties allows the icon container to maintain a consistent size, even if the icon changes in size.
        </pre>
      </template>

      <pf-icon size="xl" icon-size="sm">
        <CirclePlusIcon />
      </pf-icon>
      <pf-icon size="xl" icon-size="md">
        <CirclePlusIcon />
      </pf-icon>
      <pf-icon size="xl" icon-size="lg">
        <CirclePlusIcon />
      </pf-icon>
      <pf-icon size="xl">
        <CirclePlusIcon />
      </pf-icon>
    </story-canvas>

    <story-canvas title="Inline">
      <pf-content>
        <h1>
          Heading
          <pf-icon inline>
            <CirclePlusIcon />
          </pf-icon>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
        </p>
        <h2>
          Second level
          <pf-icon inline>
            <CirclePlusIcon />
          </pf-icon>
        </h2>
        <p>
          <pf-icon inline>
            <CirclePlusIcon />
          </pf-icon>
          Curabitur accumsan turpis pharetra
          <strong>
            augue tincidunt
            <pf-icon inline>
              <CirclePlusIcon />
            </pf-icon>
          </strong>
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
          venenatis. Suspendisse potenti.
        </p>
        <small>
          Sometimes you need small text
          <pf-icon inline>
            <CirclePlusIcon />
          </pf-icon>
        </small>
        Inline with size specified:
        <pf-icon size="sm" inline>
          <CirclePlusIcon />
        </pf-icon>
        small,
        <pf-icon size="md" inline>
          <CirclePlusIcon />
        </pf-icon>
        medium,
        <pf-icon size="lg" inline>
          <CirclePlusIcon />
        </pf-icon>
        large,
        <pf-icon size="xl" inline>
          <CirclePlusIcon />
        </pf-icon>
        extra large
      </pf-content>
    </story-canvas>

    <story-canvas title="In progress">
      <template #intro>
        <pre v-md>
          Passing the `isInProgress` property will swap the icon to a progress icon. By default this progress icon will be a `Spinner` but may be customized or overriden using the `progressIcon` property.
        </pre>
      </template>

      <div style="margin-bottom: 12px">
        <pf-checkbox
          v-model="inProgress"
          label="Toggle in progress state"
          aria-label="Set icon progress state"
        />
      </div>

      <pf-icon :in-progress="inProgress">
        <CircleCheckIcon />
      </pf-icon>
    </story-canvas>

    <story-canvas title="Custom in progress icon">
      <div style="margin-bottom: 12px">
        <pf-checkbox
          v-model="inProgress2"
          label="Toggle in progress state"
          aria-label="Set icon progress state"
        />
      </div>

      <pf-icon :in-progress="inProgress2">
        <CircleCheckIcon />

        <template #progress-icon>
          <pf-spinner diameter="2em" aria-label="Loading..." />
        </template>
      </pf-icon>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import ArrowDownLongIcon from '@vue-patternfly/icons/arrow-down-long-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import GearIcon from '@vue-patternfly/icons/gear-icon';
import CirclePlusIcon from '@vue-patternfly/icons/circle-plus-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import { ref } from 'vue';

const inProgress = ref(false);
const inProgress2 = ref(false);
</script>
