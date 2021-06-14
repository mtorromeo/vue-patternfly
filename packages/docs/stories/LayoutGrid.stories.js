import {PfGrid, PfGridItem} from "../../core/src/layouts/Grid";
import {argTypesFromProps} from '../utils';

export default {
  title: "Layouts/Grid",
  component: PfGrid,
  subcomponents: {PfGridItem},
  argTypes: argTypesFromProps(PfGrid.props),
};

const Template = (args) => ({
  components: { PfGrid, PfGridItem },
  setup() {
    return { args };
  },
  template: `
    <pf-grid v-bind="args">
      <pf-grid-item span="8">
        span = 8
      </pf-grid-item>
      <pf-grid-item span="4" row-span="2">
        span = 4, rowSpan = 2
      </pf-grid-item>
      <pf-grid-item span="2" row-span="3">
        span = 2, rowSpan = 3
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="2">
        span = 2
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
      <pf-grid-item span="4">
        span = 4
      </pf-grid-item>
    </pf-grid>
  `,
});

export const Default = Template.bind({});
Default.args = {
  gutter: true,
};
