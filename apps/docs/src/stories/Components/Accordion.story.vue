<template>
  <doc-page title="Accordion">
    <template #description
      >An <b>accordion</b> is an interactive container that expands and collapses to hide or reveal nested content. It
      takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they
      want to show or hide more detailed information as needed.</template
    >

    <template #apidocs>
      <component-info name="PfAccordion" />
      <component-info name="PfAccordionItem" />
      <component-info name="PfAccordionToggle" />
      <component-info name="PfAccordionContent" />
      <component-info name="PfAccordionExpandableContentBody" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `pf-accordion` renders a div with headings by default; `dl` renders a definition list (`asDefinitionList`, which defaults to `true` upstream).
      - `level` replaces `headingLevel` and also accepts a number.
      - `large` replaces `displaySize="lg"`.
      - The expanded state of `pf-accordion-item` is bound with `v-model:expanded` (`isExpanded`), and clicking a toggle updates it without an `onClick` handler.
      - `pf-accordion-item` renders the toggle and the content itself when its default slot does not contain a `pf-accordion-toggle`: the `title` prop or `toggle` slot is the toggle text, `toggle-component` and `toggle-attrs` configure the toggle, `content-component`, `content-attrs` and `fixed` the content wrapping the default slot, unless the slot already contains a `pf-accordion-content`.
      - `custom-content` replaces `isCustomContent` and `body-attrs` replaces `contentBodyProps` on `pf-accordion-content`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Definition list">
      <template #intro>
        <pre v-md>
          Each `pf-accordion-item` renders a toggle with its `title` and wraps its default slot in the expandable content. Set `dl` to render the accordion as a definition list.
        </pre>
      </template>

      <pf-accordion dl>
        <pf-accordion-item title="Item one" :expanded="defList === 1" @update:expanded="defList = $event ? 1 : null">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </pf-accordion-item>
        <pf-accordion-item title="Item two" :expanded="defList === 2" @update:expanded="defList = $event ? 2 : null">
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </pf-accordion-item>
        <pf-accordion-item title="Item three" :expanded="defList === 3" @update:expanded="defList = $event ? 3 : null">
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </pf-accordion-item>
        <pf-accordion-item title="Item four" :expanded="defList === 4" @update:expanded="defList = $event ? 4 : null">
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
        </pf-accordion-item>
        <pf-accordion-item title="Item five" :expanded="defList === 5" @update:expanded="defList = $event ? 5 : null">
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </pf-accordion-item>
      </pf-accordion>
    </story-canvas>

    <story-canvas title="Single expand behavior">
      <template #intro>
        <pre v-md>
          The toggle and the content can also be composed with `pf-accordion-toggle` and `pf-accordion-content`. Binding each item to a shared value keeps a single item expanded.
        </pre>
      </template>

      <pf-accordion>
        <pf-accordion-item :expanded="single === 1" @update:expanded="single = $event ? 1 : null">
          <pf-accordion-toggle id="ex-toggle1">Item one</pf-accordion-toggle>
          <pf-accordion-content id="ex-expand1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </pf-accordion-content>
        </pf-accordion-item>
        <pf-accordion-item :expanded="single === 2" @update:expanded="single = $event ? 2 : null">
          <pf-accordion-toggle id="ex-toggle2">Item two</pf-accordion-toggle>
          <pf-accordion-content id="ex-expand2">
            <p>
              Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
              ultrices, faucibus erat id, maximus nunc.
            </p>
          </pf-accordion-content>
        </pf-accordion-item>
        <pf-accordion-item :expanded="single === 3" @update:expanded="single = $event ? 3 : null">
          <pf-accordion-toggle id="ex-toggle3">Item three</pf-accordion-toggle>
          <pf-accordion-content id="ex-expand3">
            <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
          </pf-accordion-content>
        </pf-accordion-item>
        <pf-accordion-item :expanded="single === 4" @update:expanded="single = $event ? 4 : null">
          <pf-accordion-toggle id="ex-toggle4">Item four</pf-accordion-toggle>
          <pf-accordion-content id="ex-expand4">
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
          </pf-accordion-content>
        </pf-accordion-item>
        <pf-accordion-item :expanded="single === 5" @update:expanded="single = $event ? 5 : null">
          <pf-accordion-toggle id="ex-toggle5">Item five</pf-accordion-toggle>
          <pf-accordion-content id="ex-expand5">
            <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
          </pf-accordion-content>
        </pf-accordion-item>
      </pf-accordion>
    </story-canvas>

    <story-canvas title="Fixed with multiple expand behavior">
      <template #intro>
        <pre v-md>
          Without a shared value each item keeps its own expanded state. `fixed` limits the height of the content, which scrolls and becomes focusable when it overflows.
        </pre>
      </template>

      <pf-accordion>
        <pf-accordion-item title="Item one" fixed>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </pf-accordion-item>
        <pf-accordion-item title="Item two" fixed>
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </pf-accordion-item>
        <pf-accordion-item title="Item three" fixed>
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </pf-accordion-item>
        <pf-accordion-item
          v-model:expanded="multipleFourExpanded"
          title="Item four"
          :toggle-attrs="{ id: 'ex2-toggle4' }"
          :content-attrs="{ id: 'ex2-expand4', 'aria-labelledby': 'ex2-toggle4' }"
          fixed
        >
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
        </pf-accordion-item>
        <pf-accordion-item title="Item five" fixed>
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </pf-accordion-item>
      </pf-accordion>
    </story-canvas>

    <story-canvas title="Bordered">
      <template #intro>
        <pre v-md>
          A `pf-accordion-content` with `custom-content` can hold multiple `pf-accordion-expandable-content-body`.
        </pre>
      </template>

      <pf-accordion dl bordered :large="displayLarge">
        <pf-accordion-item title="Item one" :expanded="bordered === 1" @update:expanded="bordered = $event ? 1 : null">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </pf-accordion-item>
        <pf-accordion-item title="Item two" :expanded="bordered === 2" @update:expanded="bordered = $event ? 2 : null">
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item three"
          :expanded="bordered === 3"
          @update:expanded="bordered = $event ? 3 : null"
        >
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </pf-accordion-item>
        <pf-accordion-item title="Item four" :expanded="bordered === 4" @update:expanded="bordered = $event ? 4 : null">
          <pf-accordion-content custom-content>
            <pf-accordion-expandable-content-body>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </pf-accordion-expandable-content-body>
            <pf-accordion-expandable-content-body>
              <pf-button variant="link" large inline>Call to action <angle-right-icon /></pf-button>
            </pf-accordion-expandable-content-body>
          </pf-accordion-content>
        </pf-accordion-item>
        <pf-accordion-item title="Item five" :expanded="bordered === 5" @update:expanded="bordered = $event ? 5 : null">
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </pf-accordion-item>
      </pf-accordion>
      <div style="margin-top: 30px">
        <pf-checkbox
          id="toggle-display-lg"
          v-model="displayLarge"
          label="Display size large"
          name="toggle-display-lg"
        />
      </div>
    </story-canvas>

    <story-canvas title="Toggle icon at start">
      <pf-accordion dl toggle-position="start">
        <pf-accordion-item
          title="Item one"
          :expanded="toggleStart === 1"
          @update:expanded="toggleStart = $event ? 1 : null"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item two"
          :expanded="toggleStart === 2"
          @update:expanded="toggleStart = $event ? 2 : null"
        >
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item three"
          :expanded="toggleStart === 3"
          @update:expanded="toggleStart = $event ? 3 : null"
        >
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item four"
          :expanded="toggleStart === 4"
          @update:expanded="toggleStart = $event ? 4 : null"
        >
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper eleifend non quis
            tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris, pellentesque imperdiet libero
            convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus. Proin dictum imperdiet nibh, quis
            dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item five"
          :expanded="toggleStart === 5"
          @update:expanded="toggleStart = $event ? 5 : null"
        >
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </pf-accordion-item>
      </pf-accordion>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';

const defList = ref<number | null>(2);
const single = ref<number | null>(2);
const multipleFourExpanded = ref(true);
const bordered = ref<number | null>(4);
const displayLarge = ref(false);
const toggleStart = ref<number | null>(2);
</script>
