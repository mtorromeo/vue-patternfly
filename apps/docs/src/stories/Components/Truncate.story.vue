<template>
  <doc-page title="Truncate">
    <template #description>
      A <b>truncate</b> is a tool used to shorten numeric and non-numeric character strings, typically when the string
      overflows its container.
    </template>

    <template #apidocs>
      <component-info name="PfTruncate" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `tooltipProps` is `tooltip-attrs`, which also takes a `triggerRef` to show the tooltip on another element.
      - The forwarded ref is exposed as `el`.
      See [common differences from patternfly-react](#/).

      ## Examples
      The default behavior of the `pf-truncate` component is to truncate based on whether the content can fit within the width of its parent container, and to prevent text from wrapping. The following examples that use this default behavior render the `pf-truncate` component inside a resizable container, allowing you to see how the parent container width affects the truncation.
    </pre>

    <story-canvas title="Default">
      <template #intro>
        <pre v-md>
          By default content will be truncated at its end when it cannot fit entirely inside its parent container.
        </pre>
      </template>

      <div class="truncate-example-resize">
        <pf-truncate content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip" />
      </div>
    </story-canvas>

    <story-canvas title="Middle">
      <template #intro>
        <pre v-md>
          When passing a `position` property with a value of "middle", the position of the truncation will change based on the parent container's width and the amount of `trailing-num-chars` passed in. The `trailing-num-chars` will always be displayed, while the rest of the content will be truncated based on the parent container width.
        </pre>
      </template>

      <div class="truncate-example-resize">
        <pf-truncate
          content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip"
          :trailing-num-chars="10"
          position="middle"
        />
      </div>
    </story-canvas>

    <story-canvas title="Start">
      <template #intro>
        <pre v-md>
          You can truncate content at its start by passing the `position` property with a value of "start". This can be useful if you have several strings to truncate that have similar text at the start, but unique text at the end that you want to have visible.
        </pre>
      </template>

      <div class="truncate-example-resize">
        <pf-truncate content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip" position="start" />
      </div>
    </story-canvas>

    <story-canvas title="With custom tooltip position">
      <template #intro>
        <pre v-md>
          You can customize the position of the tooltip that is rendered by passing in the `tooltip-position` property. The following example overrides the default "top" position with a "bottom" position.
        </pre>
      </template>

      <div class="truncate-example-resize">
        <pf-truncate
          content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip"
          tooltip-position="bottom"
        />
      </div>
    </story-canvas>

    <story-canvas title="Based on max characters">
      <template #intro>
        <pre v-md>
          Rather than observing container width, you can have truncation be based on a maximum amount of characters that should always be displayed via the `max-chars-displayed` property. While the content's parent container width will not have an affect on whether truncation occurs, it will affect whether the content wraps. This property must be set to a value larger than `0`, otherwise the component will fall back to observing container width.

          Truncating based on a maximum amount of characters will truncate the content at the end by default. When the `position` property is set to "middle", the truncation will split the content as evenly as possible, providing a more "true middle" truncation.
        </pre>
      </template>

      <div>Truncated at end position:</div>
      <pf-truncate
        :max-chars-displayed="15"
        content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip"
      />
      <br />
      <br />
      <div>Truncated at middle position:</div>
      <pf-truncate
        :max-chars-displayed="15"
        position="middle"
        content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip"
      />
      <br />
      <br />
      <div>Truncated at start position:</div>
      <pf-truncate
        :max-chars-displayed="15"
        position="start"
        content="redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip"
      />
    </story-canvas>

    <story-canvas title="With links">
      <template #intro>
        <pre v-md>
          To truncate link text, you can pass the `href` property in.
        </pre>
      </template>

      <div>With default width-observing truncation:</div>
      <div class="truncate-example-resize">
        <pf-truncate href="#" content="A very lengthy anchor text content to trigger truncation" />
        <pf-truncate position="start" href="#" content="A very lengthy anchor text content to trigger truncation" />
        <pf-truncate position="middle" href="#" content="A very lengthy anchor text content to trigger truncation" />
      </div>
      <br />
      <div>With max characters truncation:</div>
      <pf-truncate
        :max-chars-displayed="15"
        href="#"
        content="A very lengthy anchor text content to trigger truncation"
      />
      <br />
      <pf-truncate
        :max-chars-displayed="15"
        position="start"
        href="#"
        content="A very lengthy anchor text content to trigger truncation"
      />
      <br />
      <pf-truncate
        :max-chars-displayed="15"
        position="middle"
        href="#"
        content="A very lengthy anchor text content to trigger truncation"
      />
    </story-canvas>
  </doc-page>
</template>

<style>
.truncate-example-resize {
  width: 320px;
  resize: horizontal;
  overflow: auto;
  min-width: 161px;
  max-width: 100%;
  padding: var(--pf-t--global--spacer--sm);
  border: var(--pf-t--global--border--width--box--default) solid var(--pf-t--global--border--color--default);
}
</style>
