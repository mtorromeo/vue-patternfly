<template>
  <doc-page title="Action list">
    <template #description>
      <pre v-md>An **action list** is a group of actions, controls, or buttons with set spacing.</pre>
    </template>

    <template #apidocs>
      <component-info name="PfActionList" />
      <component-info name="PfActionListGroup" />
      <component-info name="PfActionListItem" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Action list single group">
      <pf-action-list>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button id="single-group-next-button" variant="primary">Next</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="single-group-back-button" variant="secondary">Back</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
      <br />
      With kebab
      <pf-action-list>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button id="single-group-next-button2" variant="primary">Next</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="single-group-back-button2" variant="secondary">Back</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-dropdown>
              <template #toggle>
                <pf-menu-toggle variant="plain" aria-label="Action list single group kebab">
                  <template #icon>
                    <ellipsis-vertical-icon />
                  </template>
                </pf-menu-toggle>
              </template>
              <pf-dropdown-item to="#" @click.prevent>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">Action</pf-dropdown-item>
              <pf-dropdown-item to="#" disabled @click.prevent>Disabled Link</pf-dropdown-item>
              <pf-dropdown-item component="button" disabled>Disabled Action</pf-dropdown-item>
              <pf-divider component="li" />
              <pf-dropdown-item to="#" @click.prevent>Separated Link</pf-dropdown-item>
              <pf-dropdown-item component="button">Separated Action</pf-dropdown-item>
            </pf-dropdown>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
    </story-canvas>

    <story-canvas title="Action list with icons">
      <h4>With list icons wrapper</h4>
      <pf-action-list icon-list>
        <pf-action-list-item>
          <pf-button id="with-icons-times-button" variant="plain" aria-label="times icon button">
            <template #icon>
              <xmark-icon />
            </template>
          </pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button id="with-icons-check-button" variant="plain" aria-label="check icon button">
            <template #icon>
              <check-icon />
            </template>
          </pf-button>
        </pf-action-list-item>
      </pf-action-list>
      <br />
      <h4>With group icons wrapper</h4>
      <pf-action-list>
        <pf-action-list-group icon-group>
          <pf-action-list-item>
            <pf-button id="with-icons-list-times-button" variant="plain" aria-label="times icon button">
              <template #icon>
                <xmark-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="with-icons-list-check-button" variant="plain" aria-label="check icon button">
              <template #icon>
                <check-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
        <pf-action-list-group icon-group>
          <pf-action-list-item>
            <pf-button id="with-icons-group-times-button" variant="plain" aria-label="times icon button">
              <template #icon>
                <xmark-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="with-icons-group-check-button" variant="plain" aria-label="check icon button">
              <template #icon>
                <check-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
    </story-canvas>

    <story-canvas title="Action list multiple groups">
      <pf-action-list>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button id="multi-group-next-button" variant="primary">Next</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="multi-group-back-button" variant="secondary">Back</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button id="multi-group-submit-button" variant="primary">Submit</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="multi-group-cancel-button" variant="link">Cancel</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
    </story-canvas>

    <story-canvas title="Action list with cancel button">
      In modals, forms, data lists
      <pf-action-list>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button id="with-cancel-save-button" variant="primary">Save</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="with-cancel-cancel-button" variant="link">Cancel</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
      <br />
      In wizards
      <pf-action-list>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button id="with-cancel-next-button" variant="primary">Next</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button id="with-cancel-back-button" variant="secondary">Back</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button id="with-cancel-cancel-button2" variant="link">Cancel</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
    </story-canvas>

    <story-canvas title="Vertical action list">
      <template #intro>
        <pre v-md>
          The `vertical` prop lays the groups and items out vertically. This is a beta feature.
        </pre>
      </template>

      <h4>Multiple groups</h4>
      <pf-action-list vertical>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button>Next</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button variant="secondary">Back</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button>Submit</pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button variant="link">Cancel</pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
      <h4>Icons, in two groups</h4>
      <pf-action-list vertical>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button aria-label="Close vertical action list group 1" variant="plain">
              <template #icon>
                <xmark-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button aria-label="Toggle vertical action list example group 1" variant="plain">
              <template #icon>
                <check-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
        <pf-action-list-group>
          <pf-action-list-item>
            <pf-button aria-label="Close vertical action list group 2" variant="plain">
              <template #icon>
                <xmark-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
          <pf-action-list-item>
            <pf-button aria-label="Toggle vertical action list example group 2" variant="plain">
              <template #icon>
                <check-icon />
              </template>
            </pf-button>
          </pf-action-list-item>
        </pf-action-list-group>
      </pf-action-list>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
</script>
