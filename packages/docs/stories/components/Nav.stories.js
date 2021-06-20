import {
  PfNav,
  PfNavList,
  PfNavItem,
  PfNavGroup,
} from '@vue-patternfly/core/src/components/Nav';
import { ref } from 'vue';

export default {
  title: 'Components/Nav',
  component: PfNav,
  subcomponents: { PfNavList, PfNavItem, PfNavGroup },
  argTypes: {
    theme: {
      control: {
        type: 'select',
      },
      options: ['dark', 'light'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'horizontal', 'tertiary'],
    },
  },
};

export const Default = (args) => ({
  components: { PfNav, PfNavList, PfNavItem },
  setup() {
    const activeLink = ref('link1');
    return { args, activeLink };
  },
  template: `
    <div :style="{'background-color': args.theme == 'light' || args.variant === 'tertiary' ? null : 'var(--pf-global--BackgroundColor--dark-300)'}">
      <pf-nav v-bind="args">
        <pf-nav-list>
          <pf-nav-item item-id="link1" :active="activeLink == 'link1'" @select="selectLink">
            Link 1
          </pf-nav-item>
          <pf-nav-item item-id="link2" :active="activeLink == 'link2'" @select="selectLink">
            Link 2
          </pf-nav-item>
          <pf-nav-item item-id="link3" :active="activeLink == 'link3'" @select="selectLink">
            Link 3
          </pf-nav-item>
          <pf-nav-item item-id="link4" :active="activeLink == 'link4'" @select="selectLink">
            Link 4
          </pf-nav-item>
          <pf-nav-item item-id="link5" :active="activeLink == 'link5'" @select="selectLink">
            Link 5
          </pf-nav-item>
        </pf-nav-list>
      </pf-nav>
    </div>
  `,
  methods: {
    selectLink(e, groupid, itemid) {
      this.activeLink = itemid;
    },
  },
});

export const Grouped = ({ ...args }) => ({
  components: { PfNav, PfNavList, PfNavItem, PfNavGroup },
  setup() {
    const activeLink = ref('link1');
    return { args, activeLink };
  },
  template: `
    <div :style="{'background-color': args.theme == 'light' || args.variant === 'tertiary' ? null : 'var(--pf-global--BackgroundColor--dark-300)'}">
      <pf-nav v-bind="args" @select="selectLink">
        <pf-nav-list>
          <pf-nav-group title="Section title 1">
            <pf-nav-item item-id="link1" :active="activeLink == 'link1'">
              Link 1
            </pf-nav-item>
            <pf-nav-item item-id="link2" :active="activeLink == 'link2'">
              Link 2
            </pf-nav-item>
            <pf-nav-item item-id="link3" :active="activeLink == 'link3'">
              Link 3
            </pf-nav-item>
          </pf-nav-group>
          <pf-nav-group title="Section title 2">
            <pf-nav-item item-id="link4" :active="activeLink == 'link4'">
              Link 4
            </pf-nav-item>
            <pf-nav-item item-id="link5" :active="activeLink == 'link5'">
              Link 5
            </pf-nav-item>
            <pf-nav-item item-id="link6" :active="activeLink == 'link6'">
              Link 6
            </pf-nav-item>
          </pf-nav-group>
        </pf-nav-list>
      </pf-nav>
    </div>
  `,
  methods: {
    selectLink(e, groupid, itemid) {
      this.activeLink = itemid;
    },
  },
});

// export const SimpleCategory = Template.bind({});
// SimpleCategory.args = {
//   ...chips,
//   category: "Category One",
// };

// export const CategoryRemovable = Template.bind({});
// CategoryRemovable.args = {
//   ...chips,
//   category: "Category has a very long name",
//   closable: true,
// };
