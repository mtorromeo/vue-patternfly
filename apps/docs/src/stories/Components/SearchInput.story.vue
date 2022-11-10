<template>
  <doc-page title="Search input">
    <component-title name="pf-search-input" />

    <pre v-md>
      A **search input** is a type of input field that can be user to search, find, or filter. See [filter guidelines](https://www.patternfly.org/v4/guidelines/filters) for more information on using search input as a filter.
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-search-input
        v-model="filter"
        placeholder="Find by name"
        @clear="filter = ''"
      />
    </story-canvas>

    <story-canvas title="Match with result count">
      <pf-search-input
        v-model="filter2"
        placeholder="Find by name"
        @clear="filter2 = ''"
        :results-count="[...filter2.matchAll(/[a-z]/g)].length"
      />
    </story-canvas>

    <story-canvas title="With expandable button">
      <pf-search-input
        v-model="filter3"
        expandable
        @clear="filter3 = ''"
      />
    </story-canvas>

    <story-canvas title="Advanced">
      <template #intro>
        <pre v-md>
          The search input component can be used to dynamically build a one to one attribute-value advanced search. Using the attributes prop alongside the advancedSearchDelimiter will expose this functionality, as demonstrated in the following example. The search input component can also be used as a composable component and paired with a Popper or other elements to build a completely custom advanced search form.
        </pre>
      </template>

      <pf-search-input
        v-model="filter4"
        :attributes="[
          { attr: 'username', display: 'Username' },
          { attr: 'firstname', display: 'First name' }
        ]"
        advanced-search-delimiter=":"
        placeholder="Find by name"
        @search="void(0)"
        @clear="filter4 = ''"
      />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const filter = ref('');
const filter2 = ref('');
const filter3 = ref('');
const filter4 = ref('username:player firstname:john');
</script>
