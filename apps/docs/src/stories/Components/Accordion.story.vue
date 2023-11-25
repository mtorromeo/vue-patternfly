
<template>
  <doc-page title="Accordion">
    <template #description>An <b>accordion</b> is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Accordion/Accordion.vue" />
      <component-info src="packages/core/src/components/Accordion/AccordionItem.vue" />
    </template>

    <story-canvas title="Default">
      <pf-accordion>
        <pf-accordion-item
          title="Item One"
          :expanded="expanded == 1"
          @update:expanded="expanded = $event ? 1 : null"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Two"
          :expanded="expanded == 2"
          @update:expanded="expanded = $event ? 2 : null"
        >
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Three"
          :expanded="expanded == 3"
          @update:expanded="expanded = $event ? 3 : null"
        >
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Four"
          :expanded="expanded == 4"
          @update:expanded="expanded = $event ? 4 : null"
        >
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
            eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
            pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
            Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Five"
          :expanded="expanded == 5"
          @update:expanded="expanded = $event ? 5 : null"
        >
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </pf-accordion-item>
      </pf-accordion>
    </story-canvas>

    <story-canvas title="Definition List">
      <pf-accordion dl>
        <pf-accordion-item
          title="Item One"
          :expanded="expanded == 1"
          @update:expanded="expanded = $event ? 1 : null"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Two"
          :expanded="expanded == 2"
          @update:expanded="expanded = $event ? 2 : null"
        >
          <p>
            Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
            ultrices, faucibus erat id, maximus nunc.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Three"
          :expanded="expanded == 3"
          @update:expanded="expanded = $event ? 3 : null"
        >
          <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Four"
          :expanded="expanded == 4"
          @update:expanded="expanded = $event ? 4 : null"
        >
          <p>
            Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
            sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
            eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
            pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
            Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
          </p>
        </pf-accordion-item>
        <pf-accordion-item
          title="Item Five"
          :expanded="expanded == 5"
          @update:expanded="expanded = $event ? 5 : null"
        >
          <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
        </pf-accordion-item>
      </pf-accordion>
    </story-canvas>
  </doc-page>
</template>

<script setup>
import { ref } from 'vue';
const expanded = ref(null);
</script>
