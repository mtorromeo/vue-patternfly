<template>
  <doc-page title="Pagination">
    <template #description
      >A <b>pagination</b> component gives users more navigational capability on pages with content views.</template
    >

    <template #apidocs>
      <component-info name="PfPagination" />
      <component-info name="PfPaginationNavigation" />
      <component-info name="PfPaginationOptionsMenu" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The page and the number of items per page are bound with `v-model:page` and `v-model:per-page`; `set-page` and `per-page-select` also report the item range (`onSetPage`, `onPerPageSelect`), and the navigation buttons and the page input emit `first-click`, `previous-click`, `next-click`, `last-click` and `page-input`.
      - `itemCount` is `count`, and leaving it unset makes the total unknown, as in patternfly-react.
      - The `titles` object is replaced by flat props: `title-items`, `title-page`, `title-pages`, `title-items-per-page`, `title-per-page-suffix`, `title-options-toggle`, `of-word` and the `…-aria-label` props.
      - The `toggleTemplate` prop is the `total` scoped slot, rendering both the total items and the options toggle.
      - `dropDirection` is `drop-up`, defaulting to upwards for non static bottom paginations.
      - Boolean props drop their prefix (`compact`, `disabled`, `static`, `sticky`, `sticky-base`, `sticky-stuck`, `last-full-page-shown`); `usePageInsets` is `page-insets`, `inset` is the flat `inset`, `inset-md`… props and `menuAppendTo` is `menu-append-to`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Top">
      <pf-pagination
        v-model:page="state.top.page"
        v-model:per-page="state.top.perPage"
        :count="523"
        widget-id="top-example"
        ouia-id="PaginationTop"
      />
    </story-canvas>

    <story-canvas title="Bottom">
      <pf-pagination
        v-model:page="state.bottom.page"
        v-model:per-page="state.bottom.perPage"
        :count="333"
        widget-id="bottom-example"
        variant="bottom"
      />
    </story-canvas>

    <story-canvas title="Indeterminate">
      <template #intro>
        <pre v-md>
          By not passing `count` and using the `total` slot you can customize the toggle with text.
        </pre>
      </template>

      <pf-pagination
        v-model:page="state.indeterminate.page"
        v-model:per-page="state.indeterminate.perPage"
        widget-id="indeterminate-example"
      >
        <template #total="{ firstIndex, lastIndex }">
          <b>{{ firstIndex }} - {{ lastIndex }}</b> of <b>many</b>
        </template>
      </pf-pagination>
    </story-canvas>

    <story-canvas title="Disabled">
      <pf-pagination
        v-model:page="state.disabled.page"
        v-model:per-page="state.disabled.perPage"
        :count="523"
        widget-id="disabled-example"
        disabled
      />
    </story-canvas>

    <story-canvas title="No items">
      <pf-pagination
        v-model:page="state.noItems.page"
        v-model:per-page="state.noItems.perPage"
        :count="0"
        widget-id="no-items-example"
      />
    </story-canvas>

    <story-canvas title="One page">
      <pf-pagination
        v-model:page="state.onePage.page"
        v-model:per-page="state.onePage.perPage"
        :count="15"
        widget-id="one-page-example"
      />
    </story-canvas>

    <story-canvas title="Compact">
      <pf-pagination
        v-model:page="state.compact.page"
        v-model:per-page="state.compact.perPage"
        :count="523"
        widget-id="compact-example"
        compact
      />
    </story-canvas>

    <story-canvas title="Offset">
      <template #intro>
        <pre v-md>
          The current page can be derived from the `offset` of the first item, which the `set-page` event reports as the start index of the new page.
        </pre>
      </template>

      <pf-pagination
        v-model:per-page="state.offset.perPage"
        :count="523"
        :offset="state.offset.offset"
        widget-id="offset-pagination-example"
        ouia-id="PaginationOffset"
        @set-page="(_page, _perPage, startIdx) => (state.offset.offset = startIdx)"
        @per-page-select="() => (state.offset.offset = 0)"
      />
    </story-canvas>

    <story-canvas title="Sticky">
      <template #intro>
        <pre v-md>
          A `sticky` pagination stays at the top, or at the bottom with the bottom variant, of its scroll container. In this example the scroll container is limited to 400px.
        </pre>
      </template>

      <div style="overflow-y: auto; height: 400px">
        <pf-pagination
          v-if="state.sticky.top"
          v-model:page="state.sticky.page"
          v-model:per-page="state.sticky.perPage"
          :count="523"
          widget-id="pagination-options-menu-top"
          sticky
        >
          <button @click="state.sticky.top = false">Toggle to bottom position</button>
        </pf-pagination>
        <pf-gallery gutter>
          <pf-gallery-item v-for="i in cardCount(state.sticky)" :key="i">
            <pf-card>
              <pf-card-body>This is a card</pf-card-body>
            </pf-card>
          </pf-gallery-item>
        </pf-gallery>
        <pf-pagination
          v-if="!state.sticky.top"
          v-model:page="state.sticky.page"
          v-model:per-page="state.sticky.perPage"
          :count="523"
          widget-id="pagination-options-menu-top"
          sticky
          variant="bottom"
        >
          <button @click="state.sticky.top = true">Toggle to top position</button>
        </pf-pagination>
      </div>
    </story-canvas>

    <story-canvas title="Dynamic sticky top">
      <template #intro>
        <pre v-md>
          Pagination can be made sticky via two properties: `sticky-base`, which allows separate control of the sticky position, and `sticky-stuck`, which applies the sticky styling. In this example, `sticky-stuck` is only applied when the pagination is not at the top of the scroll parent container.
        </pre>
      </template>

      <div
        style="overflow-y: scroll; height: 400px"
        @scroll.passive="state.stickyTop.stuck = ($event.target as HTMLElement).scrollTop > 0"
      >
        <pf-pagination
          v-model:page="state.stickyTop.page"
          v-model:per-page="state.stickyTop.perPage"
          :count="523"
          widget-id="dynamic-sticky-top-example"
          sticky-base
          :sticky-stuck="state.stickyTop.stuck"
        />
        <pf-gallery gutter>
          <pf-gallery-item v-for="i in cardCount(state.stickyTop)" :key="i">
            <pf-card>
              <pf-card-body>This is card {{ (state.stickyTop.page - 1) * state.stickyTop.perPage + i }}</pf-card-body>
            </pf-card>
          </pf-gallery-item>
        </pf-gallery>
      </div>
    </story-canvas>

    <story-canvas title="Dynamic sticky bottom">
      <template #intro>
        <pre v-md>
          Bottom pagination can be made sticky via two properties: `sticky-base`, which allows separate control of the sticky position, and `sticky-stuck`, which applies the sticky styling. In this example, `sticky-stuck` is only applied when the pagination is not at the bottom of the scroll parent container.
        </pre>
      </template>

      <div style="overflow-y: scroll; height: 400px" @scroll.passive="onStickyBottomScroll">
        <pf-gallery gutter>
          <pf-gallery-item v-for="i in cardCount(state.stickyBottom)" :key="i">
            <pf-card>
              <pf-card-body>
                This is card {{ (state.stickyBottom.page - 1) * state.stickyBottom.perPage + i }}
              </pf-card-body>
            </pf-card>
          </pf-gallery-item>
        </pf-gallery>
        <pf-pagination
          v-model:page="state.stickyBottom.page"
          v-model:per-page="state.stickyBottom.perPage"
          :count="523"
          widget-id="dynamic-sticky-bottom-example"
          variant="bottom"
          sticky-base
          :sticky-stuck="state.stickyBottom.stuck"
        />
      </div>
    </story-canvas>

    <story-canvas title="Inset">
      <pf-pagination
        v-model:page="state.inset.page"
        v-model:per-page="state.inset.perPage"
        :count="523"
        widget-id="inset-example"
        inset="none"
        inset-md="md"
        inset-lg="2xl"
      />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const itemCount = 523;

const state = reactive({
  top: { page: 1, perPage: 20 },
  bottom: { page: 1, perPage: 20 },
  indeterminate: { page: 1, perPage: 20 },
  disabled: { page: 1, perPage: 20 },
  noItems: { page: 1, perPage: 20 },
  onePage: { page: 1, perPage: 20 },
  compact: { page: 1, perPage: 20 },
  offset: { offset: 7, perPage: 20 },
  sticky: { page: 1, perPage: 100, top: true },
  stickyTop: { page: 1, perPage: 50, stuck: false },
  // the bottom pagination starts stuck, until the container is scrolled to its end
  stickyBottom: { page: 1, perPage: 50, stuck: true },
  inset: { page: 1, perPage: 20 },
});

// the number of cards on the current page
function cardCount({ page, perPage }: { page: number; perPage: number }) {
  return Math.min(perPage, itemCount - (page - 1) * perPage);
}

function onStickyBottomScroll(e: Event) {
  const el = e.target as HTMLElement;
  state.stickyBottom.stuck = el.scrollTop + el.clientHeight < el.scrollHeight - 1;
}
</script>
