<template>
  <doc-page title="Expandable Section">
    <template #description
      >An <b>expandable section</b> component is used to support progressive disclosure in a form or page by hiding
      additional content when you don't want it to be shown by default. An expandable section can contain any type of
      content such as plain text, form inputs, and charts.</template
    >

    <template #apidocs>
      <component-info name="PfExpandableSection" />
      <component-info name="PfExpandableSectionToggle" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The expanded state is bound with `v-model:expanded` (`isExpanded`, `onToggle`); without it the state is managed internally.
      - The `displaySize="lg"` prop is replaced by the `large` boolean.
      - The `variant="truncate"` and `truncateMaxLines` props are merged into `truncate`: `true` truncates after the default 3 lines, a number after that many lines.
      - The `toggleContent` prop is replaced by the `toggle-text` slot, which receives `expanded` in place of the function form.
      - The `toggleIcon` prop is replaced by the `toggle-icon` slot, and `hasToggleIcon` by `no-toggle-icon` with inverted behavior.
      - The `toggleAriaLabel` and `toggleAriaLabelledBy` props are replaced by `toggle-attrs`, which sets any attribute on the toggle button.
      - The `hasTruncatedContent` prop of `pf-expandable-section-toggle` is replaced by `truncate`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-expandable-section
        v-model:expanded="basicExpanded"
        :toggle-text="basicExpanded ? 'Show less basic example content' : 'Show more basic example content'"
      >
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="Uncontrolled">
      <pf-expandable-section toggle-text="Show more uncontrolled example content">
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="Uncontrolled with dynamic toggle text">
      <pf-expandable-section
        toggle-text-expanded="Show less uncontrolled dynamic toggle example content"
        toggle-text-collapsed="Show more uncontrolled dynamic toggle example content"
      >
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="Uncontrolled with dynamic toggle content (function)">
      <template #intro>
        <pre v-md>
          Use the `expanded` value passed to the `toggle-text` slot to dynamically render different content based on the expanded state without managing state yourself.
        </pre>
      </template>
      <pf-expandable-section>
        <template #toggle-text="{ expanded }">
          {{
            expanded
              ? 'Show less uncontrolled dynamic toggle example content'
              : 'Show more uncontrolled dynamic toggle example content'
          }}
        </template>
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="Detached">
      <template #intro>
        <pre v-md>
          When passing the `detached` property into `pf-expandable-section`, you must also manually pass in the same `toggle-id` and `content-id` properties to both `pf-expandable-section` and `pf-expandable-section-toggle`. This will link the content to the toggle via ARIA attributes.

          By default animations will not be enabled for a detached `pf-expandable-section`. You must manually pass the `direction` property with an appropriate value based on where the expandable content is rendered. If the expandable content is above the expandable toggle, `direction="up"` must be passed like in this example.
        </pre>
      </template>
      <pf-stack gutter>
        <pf-stack-item>
          <pf-expandable-section
            v-model:expanded="detachedExpanded"
            detached
            direction="up"
            toggle-id="detached-expandable-section-toggle"
            content-id="detached-expandable-section-content"
          >
            This content is visible only when the component is expanded.
          </pf-expandable-section>
        </pf-stack-item>
        <pf-stack-item>
          <pf-expandable-section-toggle
            v-model:expanded="detachedExpanded"
            toggle-id="detached-expandable-section-toggle"
            content-id="detached-expandable-section-content"
            direction="up"
          >
            {{ detachedExpanded ? 'Show less detached example content' : 'Show more detached example content' }}
          </pf-expandable-section-toggle>
        </pf-stack-item>
      </pf-stack>
    </story-canvas>

    <story-canvas title="Disclosure variation">
      <template #intro>
        <pre v-md>
          You can pass in the `large` property for a disclosure variation styling.
        </pre>
      </template>
      <pf-expandable-section
        v-model:expanded="disclosureExpanded"
        :toggle-text="
          disclosureExpanded
            ? 'Show less disclosure variation example content'
            : 'Show more disclosure variation example content'
        "
        large
        width-limited
      >
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="Indented expandable content">
      <template #intro>
        <pre v-md>
          You can indent the expandable content by passing in the `indented` property. This will not affect the expandable toggle.
        </pre>
      </template>
      <pf-checkbox id="displaySize-checkbox" v-model="indentedLarge" label="large" />
      <br />
      <pf-expandable-section
        v-model:expanded="indentedExpanded"
        :toggle-text="indentedExpanded ? 'Show less indented example content' : 'Show more indented example content'"
        indented
        :large="indentedLarge"
      >
        This content is visible only when the component is expanded.
      </pf-expandable-section>
    </story-canvas>

    <story-canvas title="With custom toggle content">
      <template #intro>
        <pre v-md>
          By using the `toggle-text` slot, you can pass in content other than a simple string such as an icon or a badge. When passing in custom content in this way, you should not pass in any interactive element such as a button.
        </pre>
      </template>
      <pf-stack gutter>
        <pf-stack-item>
          <h3>Custom Toggle Content</h3>
          <p>You can use custom content such as icons and badges in the toggle:</p>
          <pf-expandable-section v-model:expanded="customExpanded">
            <template #toggle-text>
              <div>
                <span>You can also use icons </span>
                <circle-check-icon />
                <span> or badges </span>
                <pf-badge read>4</pf-badge>
                <span> !</span>
              </div>
            </template>
            This content is visible only when the component is expanded.
          </pf-expandable-section>
        </pf-stack-item>

        <pf-stack-item>
          <h3>Accessibility Note</h3>
          <p>
            <strong>Important:</strong> If you need the toggle text to function as a heading in the document structure,
            do NOT put heading elements (h1-h6) inside the <code>toggle-text</code> slot, as this creates invalid HTML
            structure. Instead, use the <code>toggle-wrapper</code> prop.
          </p>
        </pf-stack-item>
      </pf-stack>
    </story-canvas>

    <story-canvas title="With heading semantics">
      <template #intro>
        <pre v-md>
          When the toggle text should function as a heading in the document structure, use the `toggle-wrapper` prop to specify a heading element (h1-h6). This ensures proper semantic structure for screen readers and other assistive technologies. The toggle button is rendered inside the heading element.
        </pre>
      </template>
      <pf-stack gutter>
        <pf-stack-item>
          <h4>Document with Expandable Sections</h4>
          <p>This demonstrates how to use expandable sections with proper heading semantics.</p>

          <pf-expandable-section
            v-model:expanded="headingExpanded1"
            toggle-wrapper="h5"
            toggle-text="Toggle as a heading"
          >
            <p>
              This content is visible only when the component is expanded. The toggle text above functions as a proper
              heading in the document structure, which is important for screen readers and other assistive technologies.
            </p>
            <p>
              When using the <code>toggle-wrapper</code> prop with heading elements (h1-h6), the button is rendered
              inside the heading element, maintaining proper semantic structure.
            </p>
          </pf-expandable-section>
        </pf-stack-item>

        <pf-stack-item>
          <h4>Detached Variant with Heading</h4>
          <p>You can also use the detached variant with heading semantics:</p>

          <pf-expandable-section-toggle
            v-model:expanded="headingExpandedDetached"
            toggle-wrapper="h5"
            toggle-id="detached-heading-toggle"
            content-id="detached-heading-content"
          >
            Detached Toggle with Heading
          </pf-expandable-section-toggle>

          <pf-expandable-section
            v-model:expanded="headingExpandedDetached"
            detached
            toggle-id="detached-heading-toggle"
            content-id="detached-heading-content"
          >
            <p>This is detached content that can be positioned anywhere in the DOM.</p>
          </pf-expandable-section>
        </pf-stack-item>

        <pf-stack-item>
          <h4>Custom Content with Heading</h4>
          <p>You can also use custom content within heading wrappers:</p>

          <pf-expandable-section v-model:expanded="headingExpanded2" toggle-wrapper="h5">
            <template #toggle-text>
              <span><circle-check-icon /> Custom Heading Content with Icon</span>
            </template>
            <p>This expandable section uses custom content with an icon inside a heading wrapper.</p>
          </pf-expandable-section>
        </pf-stack-item>
      </pf-stack>
    </story-canvas>

    <story-canvas title="Truncate expansion">
      <template #intro>
        <pre v-md>
          By passing in `truncate`, the expandable content will be visible up to a maximum number of lines before being truncated, with the toggle revealing or hiding the truncated content. By default the expandable content will truncate after 3 lines, and this can be customized by passing a number of lines to `truncate` instead, like `:truncate="2"`.
        </pre>
      </template>
      <pf-expandable-section
        v-model:expanded="truncateExpanded"
        truncate
        :toggle-text="truncateExpanded ? 'Show less truncated content' : 'Show more truncated content'"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec dignissim turpis, et tristique purus.
        Phasellus efficitur ante quis dolor viverra imperdiet. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Pellentesque laoreet, sem ac elementum semper, lectus mauris vestibulum nulla,
        eget volutpat massa neque vel turpis. Donec finibus enim eu leo accumsan consectetur. Praesent massa diam,
        tincidunt eu dui ac, ullamcorper elementum est. Phasellus metus felis, venenatis vitae semper nec, porta a
        metus. Vestibulum justo nisi, imperdiet id eleifend at, varius nec lorem. Fusce porttitor mollis nibh, ut
        elementum ante commodo tincidunt. Integer tincidunt at ipsum non aliquet.
      </pf-expandable-section>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';

const basicExpanded = ref(false);
const detachedExpanded = ref(false);
const disclosureExpanded = ref(false);
const indentedExpanded = ref(true);
const indentedLarge = ref(false);
const customExpanded = ref(false);
const headingExpanded1 = ref(false);
const headingExpanded2 = ref(false);
const headingExpandedDetached = ref(false);
const truncateExpanded = ref(false);
</script>
