import { PfText, PfTextContent } from '@vue-patternfly/core/src/components/Text';
import { TextVariants } from '@vue-patternfly/core/src/components/Text/Text';

export default {
  title: 'Components/Text',
  component: PfText,
  subcomponents: { PfTextContent },
  argTypes: {
    component: {
      control: {
        type: 'select',
      },
      options: TextVariants,
    },
  },
};

export const Text = ({ sample_title, ...args }) => ({
  components: { PfText },
  setup() {
    return { args, sample_title };
  },
  template: `<pf-text v-bind="args">{{ sample_title }}</pf-text>`,
});
Text.args = {
  sample_title: 'Title text',
};

export const TextVisited = ({ sample_title, ...args }) => ({
  components: { PfText, PfTextContent },
  setup() {
    return { args };
  },
  template: `
    <pf-text-content>
      <pf-text component="h3">Visited link example</pf-text>
      <pf-text component="p">
        <pf-text v-bind="args"
          component="a"
          visited
          href="#">
          Visited link
        </pf-text>
      </pf-text>
    </pf-text-content>
    <br />
    <pf-text-content visited>
      <pf-text component="h3">Visited content example</pf-text>
      <pf-text component="p">
        <pf-text
          component="a"
          href="#">
          content link 1
        </pf-text>
      </pf-text>
      <pf-text component="p">
        <pf-text
          component="a"
          href="#">
          content link 2
        </pf-text>
      </pf-text>
      <pf-text component="p">
        <pf-text
          component="a"
          href="#">
          content link 3
        </pf-text>
      </pf-text>
    </pf-text-content>
  `,
});
TextVisited.args = {
  visited: true,
};
