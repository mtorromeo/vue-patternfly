<template>
  <doc-page title="Description list">
    <template #description>A <b>description list</b> contains terms and their corresponding descriptions.</template>

    <template #apidocs>
      <component-info name="PfDescriptionList" />
      <component-info name="PfDescriptionListDescription" />
      <component-info name="PfDescriptionListGroup" />
      <component-info name="PfDescriptionListTerm" />
      <component-info name="PfDescriptionListTermHelpText" />
      <component-info name="PfDescriptionListTermHelpTextButton" />
    </template>

    <pre v-md>
      Use a description list when you have a set of terms and definitions related to a single item. The content within the definitions is not limited to only plain text. This component can be extremely useful in context of Detail pages for a certain resource or item.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-description-list>
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Default 2 columns">
      <pf-description-list columns="2Col">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Default 3 columns on Lg">
      <pf-description-list columns-lg="3Col">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal">
      <pf-description-list horizontal>
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal using custom term width modifier">
      <pf-description-list
        horizontal
        horizontal-term-width="12ch"
        horizontal-term-width-sm="15ch"
        horizontal-term-width-md="20ch"
        horizontal-term-width-lg="28ch"
        horizontal-term-width-xl="30ch"
        horizontal-term-width-2xl="35ch"
      >
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal 2 columns">
      <pf-description-list horizontal columns="2Col">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Fluid horizontal">
      <pf-description-list horizontal fluid>
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Column fill">
      <pf-description-list fill-columns columns="2Col" columns-lg="3Col">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>This is a long description that should wrap to multiple lines in a multi-column layout.</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Auto column widths">
      <pf-description-list auto-column-widths columns="3Col">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Display size with card, horizontal, modified term width">
      <pf-description-list display-size="lg" horizontal columns-lg="2Col" term-width="10ch">
        <pf-card component="div">
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-card>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Auto-fit basic">
      <pf-description-list auto-fit>
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="With icons">
      <pf-description-list>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon>
              <cubes-icon />
            </template>
            Name
          </pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon>
              <book-icon />
            </template>
            Namespace
          </pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon>
              <key-icon />
            </template>
            Labels
          </pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon>
              <globe-icon />
            </template>
            Pod selector
          </pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon>
                <circle-plus-icon />
              </template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon>
              <flag-icon />
            </template>
            Annotation
          </pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>
  </doc-page>
</template>

<style scoped>
.preview-placeholder {
  display: block;
  width: 100%;
  padding: .25rem .5rem;
  color: #004e8a;
  background-color: #def3ff;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
}
</style>

<script lang="ts" setup>
import CirclePlusIcon from '@vue-patternfly/icons/circle-plus-icon';
import CubesIcon from '@vue-patternfly/icons/cubes-icon';
import BookIcon from '@vue-patternfly/icons/book-icon';
import KeyIcon from '@vue-patternfly/icons/key-icon';
import GlobeIcon from '@vue-patternfly/icons/globe-icon';
import FlagIcon from '@vue-patternfly/icons/flag-icon';
</script>
