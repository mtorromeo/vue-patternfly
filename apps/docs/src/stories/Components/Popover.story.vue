<template>
  <doc-page title="Popover">
    <template #description
      >A <b>popover</b> is in-app messaging that provides more information on specific product areas. Popovers display
      content in a new window that overlays the current page. Unlike modals, popovers don't block the current
      page.</template
    >

    <template #apidocs>
      <component-info name="PfPopover" />
    </template>

    <pre v-md>
      By default, the popover is appended to the document body in order to avoid the popover content not being fully visible. Another option is to increase the z-index of the element the popover is appended to to be higher than the z-index of the element that is hiding the popover.

      ## Differences from patternfly-react
      - The trigger is the default slot, or `trigger-ref` (an element, a selector or a function returning it).
      - `headerContent`, `bodyContent`, `footerContent` and `headerIcon` are the `header`, `body`, `footer` and `header-icon` slots; the content slots receive a `hide` function.
      - The visibility is bound with `v-model:open` (`isVisible`, `shouldOpen` and `shouldClose`); `show`, `hide`, `shown` and `hidden` are events.
      - `showClose`, `withFocusTrap`, `enableFlip` and `hideOnOutsideClick` are inverted into `no-close`, `no-focus-trap`, `no-flip` and `no-hide-on-outside-click`; `hasAutoWidth` is `auto-width` and `hasNoPadding` is `no-padding`.
      - `triggerAction="hover"` is the deprecated `hover` prop.
      - `flip-options` and `placement-options` customize the floating-ui flip and auto placement middlewares.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <div style="margin: 50px">
        <pf-popover aria-label="Basic popover">
          <pf-button>Toggle popover</pf-button>
          <template #header><div>Popover header</div></template>
          <template #body><div>Popovers are triggered by click rather than hover.</div></template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Hoverable">
      <template #intro>
        <pre v-md>
          Set the `hover` property to make a `pf-popover` that is triggered via hover and focus rather than on click. When using a hoverable popover, you **must not** include any interactive or semantic content (e.g. buttons, links, headings, lists, etc), as focus is not intended to enter a hoverable popover. Including such content may cause an inaccessible UI for users who are not able to reach the content when navigating via assistive tech.

          It is instead recommended to use our [tooltip component](#/stories/components/tooltip).
        </pre>
      </template>

      <div style="margin: 50px">
        <pf-popover hover aria-label="Hoverable popover">
          <pf-button>Hover to trigger popover</pf-button>
          <template #header><div>Popover header</div></template>
          <template #body><div>This popover opens on hover.</div></template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Close popover from content (controlled)">
      <div style="margin: 50px">
        <pf-popover v-model:open="controlledOpen" aria-label="Popover with button in the body that can close it">
          <pf-button>Toggle popover</pf-button>
          <template #header><div>Popover header</div></template>
          <template #body>
            <div>
              <div>A controlled popover can be closed by updating its open state after some user interaction.</div>
              <div>
                <button @click="controlledOpen = false">Close popover</button>
              </div>
            </div>
          </template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Close popover from content (uncontrolled)">
      <template #intro>
        <pre v-md>
          Note: if you bind `v-model:open`, either refer to the example above or, if you want to use the `hide` function of the content slots, be sure to keep the open state in sync.
        </pre>
      </template>

      <div style="margin: 50px">
        <pf-popover aria-label="Uncontrolled popover with button in the body that can close it">
          <pf-button>Toggle popover</pf-button>
          <template #header><div>Popover header</div></template>
          <template #body="{ hide }">
            <div>
              <div>
                All the content slots (header, body, footer) receive a hide function which can be used to close the
                popover after some user interaction.
              </div>
              <div>
                <button @click="hide">Close popover</button>
              </div>
            </div>
          </template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Without header/footer/close and no padding">
      <div style="margin: 50px">
        <pf-popover
          aria-label="Popover with no header, footer, close button, and padding"
          no-padding
          no-close
          no-focus-trap
        >
          <pf-button>Toggle popover</pf-button>
          <template #body>
            <div>
              This popover has no padding and is intended for use with content that has its own spacing and should touch
              the edges of the popover container.
            </div>
          </template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Width auto">
      <template #intro>
        <pre v-md>
          Here the popover goes over the navigation, so the `append-to` property is set to the document body.
        </pre>
      </template>

      <div style="margin: 50px">
        <pf-popover aria-label="Popover with auto-width" auto-width append-to="body">
          <pf-button>Toggle popover</pf-button>
          <template #body><div>Removes fixed-width and allows width to be defined by contents</div></template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Popover react ref">
      <template #intro>
        <pre v-md>
          The trigger can be passed to `trigger-ref` as an element, such as a template ref, instead of being wrapped by the popover.
        </pre>
      </template>

      <div style="margin: 50px">
        <button ref="refTrigger">Popover attached via template ref</button>
        <pf-popover aria-label="Popover with react reference example" :trigger-ref="refTrigger">
          <template #header><div>Popover header</div></template>
          <template #body>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
            </div>
          </template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Popover selector ref">
      <div style="margin: 50px">
        <button id="popover-selector">Popover attached via selector ref</button>
        <pf-popover aria-label="Popover with selector reference example" trigger-ref="#popover-selector">
          <template #header><div>Popover header</div></template>
          <template #body>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
            </div>
          </template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Advanced">
      <div>
        <span style="padding-right: 10px">Popover position</span>
        <select v-model="advanced.position" aria-label="Popover position">
          <option v-for="p in positions" :key="p" :value="p">{{ p }}</option>
        </select>
        <pf-checkbox
          id="popover-advanced-check-1"
          v-model="advanced.flip"
          label="Flip popover if the position falls outside the view"
          aria-label="Keep in view"
        />
        <pf-checkbox
          id="popover-advanced-check-2"
          v-model="advanced.open"
          label="Toggle popover from outside"
          aria-label="Toggle popover from outside"
        />
      </div>
      <div style="margin: 50px">
        <pf-popover
          v-model:open="advanced.open"
          aria-label="Advanced popover usages example"
          :position="advanced.position"
          no-hide-on-outside-click
          :no-flip="!advanced.flip"
        >
          <pf-button>Toggle popover</pf-button>
          <template #header><div>Popover header</div></template>
          <template #body>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
            </div>
          </template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Popover with icon in the title">
      <template #intro>
        <pre v-md>
          Here the popover goes over the navigation, so the `append-to` property is set to the document body.
        </pre>
      </template>

      <div style="margin: 50px">
        <pf-popover aria-label="Popover with icon in the title example" append-to="body">
          <pf-button>Toggle popover</pf-button>
          <template #header-icon><bell-icon /></template>
          <template #header>Popover with icon</template>
          <template #body><div>Popovers are triggered by click rather than hover.</div></template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Alert popover">
      <template #intro>
        <pre v-md>
          Here the popover goes over the navigation, so the `append-to` property is set to the document body.
        </pre>
      </template>

      <div>
        <span style="padding-right: 10px">Alert variant:</span>
        <select v-model="alertVariant" aria-label="Popover alert type">
          <option v-for="variant in Object.keys(alertIcons)" :key="variant" :value="variant">{{ variant }}</option>
        </select>
      </div>
      <div style="margin: 50px">
        <pf-popover
          aria-label="Alert popover"
          :alert-severity-variant="alertVariant"
          header-component="h1"
          append-to="body"
        >
          <pf-button>Toggle popover</pf-button>
          <template #header-icon><component :is="alertIcons[alertVariant]" /></template>
          <template #header>Default popover title</template>
          <template #body><div>Popovers are triggered by click rather than hover.</div></template>
          <template #footer>Popover footer</template>
        </pf-popover>
      </div>
    </story-canvas>

    <story-canvas title="Custom focus">
      <template #intro>
        <pre v-md>
          Use the `element-to-focus` property to customize which element inside the popover receives focus when opened.
        </pre>
      </template>

      <pf-popover element-to-focus="#popover-cancel-button" no-close aria-label="Popover with custom focus">
        <pf-button>Toggle popover with custom focus</pf-button>
        <template #header><div>Popover header</div></template>
        <template #body>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <pf-button component="a" inline variant="link" href="#basic" @click.prevent>
              View the basic example
            </pf-button>
          </div>
        </template>
        <template #footer="{ hide }">
          <pf-button id="popover-cancel-button" variant="secondary" @click="hide">Cancel</pf-button>
        </template>
      </pf-popover>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import BellIcon from '@vue-patternfly/icons/bell-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleInfoIcon from '@vue-patternfly/icons/circle-info-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import { reactive, ref, useTemplateRef } from 'vue';

const controlledOpen = ref(false);
const refTrigger = useTemplateRef<HTMLButtonElement>('refTrigger');

const positions = [
  'auto',
  'top',
  'bottom',
  'left',
  'right',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'left-start',
  'left-end',
  'right-start',
  'right-end',
] as const;

const advanced = reactive<{ position: (typeof positions)[number]; flip: boolean; open: boolean }>({
  position: 'auto',
  flip: true,
  open: false,
});

const alertIcons = {
  custom: BellIcon,
  info: CircleInfoIcon,
  success: CircleCheckIcon,
  warning: TriangleExclamationIcon,
  danger: CircleExclamationIcon,
};
const alertVariant = ref<keyof typeof alertIcons>('custom');
</script>
