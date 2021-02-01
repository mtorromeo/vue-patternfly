<template>
  <pf-page-section variant="light">
    <pf-title>Badge</pf-title>

    <pf-title class="example-heading" h="3">
      Read
    </pf-title>
    <pf-badge read>
      7
    </pf-badge>
    {{ ' ' }}
    <pf-badge read>
      24
    </pf-badge>
    {{ ' ' }}
    <pf-badge read>
      240
    </pf-badge>
    {{ ' ' }}
    <pf-badge read>
      999+
    </pf-badge>

    <pf-title class="example-heading" h="3">
      Unread
    </pf-title>
    <pf-badge>7</pf-badge>
    {{ ' ' }}
    <pf-badge>24</pf-badge>
    {{ ' ' }}
    <pf-badge>240</pf-badge>
    {{ ' ' }}
    <pf-badge>999+</pf-badge>
  </pf-page-section>
</template>

<script>
export default {
  name: 'BadgePage',
};
</script>
