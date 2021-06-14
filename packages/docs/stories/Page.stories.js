import PfBrand from "../../core/src/components/Brand";
import {
  PfPage,
  PfPageHeader,
  PfPageHeaderTools,
  PfPageHeaderToolsGroup,
  PfPageHeaderToolsItem,
  PfPageSidebar,
  PfPageSection,
} from "../../core/src/components/Page";

export default {
  title: "Components/Page",
  component: PfPage,
  subcomponents: {
    PfBrand,
    PfPageHeader,
    PfPageHeaderTools,
    PfPageHeaderToolsGroup,
    PfPageHeaderToolsItem,
    PfPageSidebar,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: {
    PfPage,
    PfBrand,
    PfPageHeader,
    PfPageHeaderTools,
    PfPageHeaderToolsGroup,
    PfPageHeaderToolsItem,
    PfPageSidebar,
    PfPageSection,
  },
  setup() {
    return { args };
  },
  template: `
    <pf-page v-bind="args">
      <template #skeleton>
        <pf-page-header show-nav-toggle>
          <template #logo>
            <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" style="height:40px;filter:invert(1)" />
          </template>

          <pf-page-header-tools>
            <pf-page-header-tools-group>
              <pf-page-header-tools-item visibility-xs="hidden">
                header-tools
              </pf-page-header-tools-item>
            </pf-page-header-tools-group>
          </pf-page-header-tools>
        </pf-page-header>

        <pf-page-sidebar nav="PfNavigation" nav-open />
      </template>

      <pf-page-section variant="darker">Section with darker background</pf-page-section>
      <pf-page-section variant="dark">Section with dark background</pf-page-section>
      <pf-page-section variant="light">Section with light background</pf-page-section>
    </pf-page>
  `,
});

export const Default = Template.bind({});
Default.args = {
  managedSidebar: true,
};
