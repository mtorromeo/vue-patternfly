<template>
  <doc-page title="Accordion">
    <pf-title class="example-heading" h="3">
      Definition list
    </pf-title>
    <pf-accordion dl>
      <pf-accordion-item title="Item One">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Two">
        <p>
          Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
          ultrices, faucibus erat id, maximus nunc.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Three">
        <p>
          Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Four">
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

      <pf-accordion-item title="Item Five">
        <p>
          Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.
        </p>
      </pf-accordion-item>
    </pf-accordion>

    <pf-title class="example-heading" h="3">
      Single expand behavior
    </pf-title>
    <pf-accordion>
      <pf-accordion-item title="Item One" :expanded="expanded == 1" @update:expanded="expanded = $event ? 1 : null">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Two" :expanded="expanded == 2" @update:expanded="expanded = $event ? 2 : null">
        <p>
          Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
          ultrices, faucibus erat id, maximus nunc.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Three" :expanded="expanded == 3" @update:expanded="expanded = $event ? 3 : null">
        <p>
          Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Four" :expanded="expanded == 4" @update:expanded="expanded = $event ? 4 : null">
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

      <pf-accordion-item title="Item Five" :expanded="expanded == 5" @update:expanded="expanded = $event ? 5 : null">
        <p>
          Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.
        </p>
      </pf-accordion-item>
    </pf-accordion>

    <pf-title class="example-heading" h="3">
      Fixed with multiple expand behavior
    </pf-title>
    <pf-accordion>
      <pf-accordion-item title="Item One" fixed>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Two" fixed>
        <p>
          Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
          ultrices, faucibus erat id, maximus nunc.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Three" fixed>
        <p>
          Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.
        </p>
      </pf-accordion-item>

      <pf-accordion-item title="Item Four" fixed>
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

      <pf-accordion-item title="Item Five" fixed>
        <p>
          Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.
        </p>
      </pf-accordion-item>
    </pf-accordion>
  </doc-page>
</template>

<script>
export default {
  name: 'AccordionPage',

  data() {
    return {
      expanded: null,
    };
  },
};
</script>
