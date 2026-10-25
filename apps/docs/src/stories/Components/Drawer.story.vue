<template>
  <define-panel-head v-slot="{ example, label }">
    <pf-drawer-head>
      <span class="drawer-focus" :tabindex="open[example] ? 0 : -1">{{ label ?? 'Drawer panel header' }}</span>
      <pf-drawer-actions>
        <pf-drawer-close-button @close="open[example] = false" />
      </pf-drawer-actions>
    </pf-drawer-head>
  </define-panel-head>

  <define-toggle v-slot="{ example, label }">
    <pf-button :aria-expanded="open[example]" @click="open[example] = !open[example]">
      {{ label ?? 'Toggle drawer' }}
    </pf-button>
  </define-toggle>

  <doc-page title="Drawer">
    <template #description
      >A <b>drawer</b> is a sliding panel that enters from the right edge of the viewport. It can be configured to
      either overlay content on a page or create a sidebar by pushing that content to the left.</template
    >

    <template #apidocs>
      <component-info name="PfDrawer" />
      <component-info name="PfDrawerActions" />
      <component-info name="PfDrawerCloseButton" />
      <component-info name="PfDrawerContent" />
      <component-info name="PfDrawerContentBody" />
      <component-info name="PfDrawerHead" />
      <component-info name="PfDrawerMain" />
      <component-info name="PfDrawerPanelBody" />
      <component-info name="PfDrawerPanelContent" />
      <component-info name="PfDrawerPanelDescription" />
      <component-info name="PfDrawerSection" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The panel is a child of `pf-drawer-content`, passed in its `#content` slot, instead of the `panelContent` prop.
      - `pf-drawer` automatically wraps its children, except `pf-drawer-section`, in a `pf-drawer-content`, which in turn wraps everything but `pf-drawer-panel-content` in its content element: the panel can be a direct child of `pf-drawer`, next to the content body.
      - The `focusTrap` object of `pf-drawer-panel-content` becomes the `focus-trap` boolean and the `element-to-focus-on-expand` prop; `aria-labelledby` is passed as a plain attribute.
      - The `resize` event of `pf-drawer-panel-content` carries `(width, id)` without the DOM event.
      - `padding` on `pf-drawer-content-body` and `no-padding` on `pf-drawer-panel-body` replace `hasPadding` and `hasNoPadding`.
      - `pf-drawer-close-button` emits `close` instead of taking an `onClick` prop.
      - The deprecated `left` and `right` positions are not supported: use `start` and `end`.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <reuse-toggle example="basic" />
      <pf-drawer :expanded="open.basic" @expand="focusHeader">
        <pf-drawer-content>
          <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
          <template #content>
            <pf-drawer-panel-content>
              <reuse-panel-head example="basic" />
              <pf-drawer-panel-description>Drawer panel description</pf-drawer-panel-description>
              <pf-drawer-panel-body>Drawer panel body</pf-drawer-panel-body>
            </pf-drawer-panel-content>
          </template>
        </pf-drawer-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Panel at end">
      <reuse-toggle example="panelEnd" />
      <pf-drawer :expanded="open.panelEnd" position="end" @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="panelEnd" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Panel at start">
      <reuse-toggle example="panelStart" />
      <pf-drawer :expanded="open.panelStart" position="start" @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="panelStart" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Panel on bottom">
      <reuse-toggle example="panelBottom" />
      <div style="height: 400px">
        <pf-drawer :expanded="open.panelBottom" position="bottom" @expand="focusHeader">
          <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
          <pf-drawer-panel-content>
            <reuse-panel-head example="panelBottom" />
          </pf-drawer-panel-content>
        </pf-drawer>
      </div>
    </story-canvas>

    <story-canvas title="Basic inline">
      <reuse-toggle example="basicInline" />
      <pf-drawer :expanded="open.basicInline" inline @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="basicInline" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Inline panel at end">
      <reuse-toggle example="inlineEnd" />
      <pf-drawer :expanded="open.inlineEnd" inline @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="inlineEnd" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Inline panel at start">
      <reuse-toggle example="inlineStart" />
      <pf-drawer :expanded="open.inlineStart" inline position="start" @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="inlineStart" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Stacked content body elements">
      <reuse-toggle example="stacked" />
      <pf-drawer :expanded="open.stacked" @expand="focusHeader">
        <pf-drawer-content-body>content-body</pf-drawer-content-body>
        <pf-drawer-content-body padding>content-body with padding</pf-drawer-content-body>
        <pf-drawer-content-body>content-body</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="stacked" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Modified content padding">
      <reuse-toggle example="contentPadding" />
      <pf-drawer :expanded="open.contentPadding" @expand="focusHeader">
        <pf-drawer-content-body padding> <b>Drawer content padding.</b> {{ drawerContent }} </pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="contentPadding" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Modified panel padding">
      <reuse-toggle example="panelPadding" />
      <pf-drawer :expanded="open.panelPadding" @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="panelPadding" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Additional section above drawer content">
      <reuse-toggle example="section" />
      <pf-drawer :expanded="open.section" @expand="focusHeader">
        <pf-drawer-section>drawer-section</pf-drawer-section>
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="section" label="drawer-panel" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Static drawer">
      <template #intro>
        <pre v-md>
          **Note:** For mobile viewports, all drawer variants behave the same way. At the `md` breakpoint, or where `.pf-m-static{-on-[lg, xl, 2xl]}` is applied, the `static drawer` variant’s `close button` is automatically hidden because the drawer panel doesn’t close by design.
        </pre>
      </template>

      <pf-button class="pf-v6-u-hidden-on-md" :aria-expanded="open.static" @click="open.static = !open.static">
        Toggle drawer
      </pf-button>
      <pf-drawer :expanded="open.static" static @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="static" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Breakpoint">
      <reuse-toggle example="breakpoint" />
      <pf-drawer :expanded="open.breakpoint" @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content :widths="{ default: 'width_33' }">
          <reuse-panel-head example="breakpoint" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Resizable at end">
      <reuse-toggle example="resizableEnd" />
      <pf-drawer :expanded="open.resizableEnd" position="end" @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content
          id="end-resize-panel"
          resizable
          default-size="500px"
          min-size="150px"
          @resize="onResize"
        >
          <reuse-panel-head example="resizableEnd" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Resizable at start">
      <reuse-toggle example="resizableStart" />
      <pf-drawer :expanded="open.resizableStart" position="start" @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content resizable default-size="500px" min-size="200px">
          <reuse-panel-head example="resizableStart" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Resizable on bottom">
      <reuse-toggle example="resizableBottom" />
      <div style="height: 400px">
        <pf-drawer :expanded="open.resizableBottom" position="bottom" @expand="focusHeader">
          <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
          <pf-drawer-panel-content resizable default-size="200px" min-size="100px">
            <reuse-panel-head example="resizableBottom" />
          </pf-drawer-panel-content>
        </pf-drawer>
      </div>
    </story-canvas>

    <story-canvas title="Resizable on inline">
      <reuse-toggle example="resizableInline" />
      <pf-drawer :expanded="open.resizableInline" inline @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content resizable default-size="500px" min-size="150px">
          <reuse-panel-head example="resizableInline" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Panel with secondary background">
      <pf-checkbox id="toggle-secondary-panel" v-model="panelSecondary" label="Secondary panel" />
      <pf-checkbox id="toggle-secondary-content" v-model="contentSecondary" label="Secondary content" />
      <pf-checkbox id="toggle-secondary-section" v-model="sectionSecondary" label="Secondary section" />
      <br />
      <reuse-toggle example="secondary" />
      <pf-drawer :expanded="open.secondary" @expand="focusHeader">
        <pf-drawer-section :color-variant="sectionSecondary ? 'secondary' : 'default'"
          >drawer-section</pf-drawer-section
        >
        <pf-drawer-content :color-variant="contentSecondary ? 'secondary' : 'default'">
          <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
          <template #content>
            <pf-drawer-panel-content :color-variant="panelSecondary ? 'secondary' : 'default'">
              <reuse-panel-head example="secondary" />
            </pf-drawer-panel-content>
          </template>
        </pf-drawer-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="With focus trap">
      <template #intro>
        <pre v-md>
          When a focus trap is enabled on an element, a user will only be able to interact with the contents of that element until the focus trap is closed or deactivated.

          To enable a focus trap on a drawer panel, set the `focus-trap` property of `pf-drawer-panel-content`. It will also automatically place focus on the first focusable element when the drawer panel expands, and return focus to the previously focused element when it collapses.

          To customize which element receives focus when the drawer panel expands, use the `element-to-focus-on-expand` property.

          Closing the panel with the Escape key is up to the drawer's `keydown` listener.
        </pre>
      </template>

      <reuse-toggle example="focusTrap" label="Toggle drawer with focus trap" />
      <pf-drawer :expanded="open.focusTrap" @keydown.esc="open.focusTrap = false">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content focus-trap>
          <pf-drawer-head>
            <span>Drawer panel header</span>
            <pf-drawer-actions>
              <pf-drawer-close-button @close="open.focusTrap = false" />
            </pf-drawer-actions>
          </pf-drawer-head>
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Pill">
      <reuse-toggle example="pill" />
      <pf-drawer :expanded="open.pill" pill @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="pill" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>

    <story-canvas title="Pill inline">
      <reuse-toggle example="pillInline" />
      <pf-drawer :expanded="open.pillInline" pill inline @expand="focusHeader">
        <pf-drawer-content-body>{{ drawerContent }}</pf-drawer-content-body>
        <pf-drawer-panel-content>
          <reuse-panel-head example="pillInline" />
        </pf-drawer-panel-content>
      </pf-drawer>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';

type Example =
  | 'basic'
  | 'panelEnd'
  | 'panelStart'
  | 'panelBottom'
  | 'basicInline'
  | 'inlineEnd'
  | 'inlineStart'
  | 'stacked'
  | 'contentPadding'
  | 'panelPadding'
  | 'section'
  | 'static'
  | 'breakpoint'
  | 'resizableEnd'
  | 'resizableStart'
  | 'resizableBottom'
  | 'resizableInline'
  | 'secondary'
  | 'focusTrap'
  | 'pill'
  | 'pillInline';

const [DefinePanelHead, ReusePanelHead] = createReusableTemplate<{ example: Example; label?: string }>({
  inheritAttrs: false,
});
const [DefineToggle, ReuseToggle] = createReusableTemplate<{ example: Example; label?: string }>({
  inheritAttrs: false,
});

const open = reactive<Partial<Record<Example, boolean>>>({});

const panelSecondary = ref(true);
const contentSecondary = ref(false);
const sectionSecondary = ref(false);

const drawerContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';

/** Focuses the header of the panel that has just expanded */
function focusHeader(event: TransitionEvent) {
  (event.target as HTMLElement).querySelector<HTMLElement>('.drawer-focus')?.focus();
}

function onResize(width: number, id?: string) {
  console.log(`${id} has new width of: ${width}`);
}
</script>
