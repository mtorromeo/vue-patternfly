import { h, mergeProps } from 'vue';
import styles from '@patternfly/react-styles/css/components/ChipGroup/chip-group';
import TimesCircleIcon from '@vue-patternfly/icons/dist/esm/icons/times-circle-icon';
import PfChip from './Chip';
import PfButton from '../Button.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import { findChildrenVNodes, fillTemplate } from '../../util';

export default {
  name: 'PfChipGroup',

  props: {
    defaultOpen: Boolean,
    closable: Boolean,

    category: {
      type: String,
      default: '',
    },

    numChips: {
      type: Number,
      default: 3,
    },

    tooltipPosition: {
      type: String,
      default: 'top',
      validator: v => ['auto', 'top', 'bottom', 'left', 'right'].includes(v),
    },

    closeBtnAriaLabel: {
      type: String,
      default: 'Close chip group',
    },

    ariaLabel: {
      type: String,
      default: 'Chip group category',
    },

    expandedText: {
      type: String,
      default: 'Show Less',
    },

    collapsedText: {
      type: String,
      default: '${remaining} more', // eslint-disable-line no-template-curly-in-string
    },
  },

  data() {
    return {
      open: this.defaultOpen,
      tooltipVisible: false,
    };
  },

  emits: ['click', 'overflow-chip-click'],

  render() {
    const children = this.$slots.default ? findChildrenVNodes(this.$slots.default()) : [];
    const chipArray = this.open ? children : children.slice(0, this.numChips);

    const lis = chipArray.map((child, i) => h('li', { key: i, class: styles.chipGroupListItem }, child));

    if (children.length > this.numChips) {
      const collapsedTextResult = fillTemplate(this.collapsedText, {
        remaining: children.length - chipArray.length,
      });
      lis.push(h('li', { class: styles.chipGroupListItem }, [
        h(PfChip, {
          component: 'button',
          overflow: true,
          onClick: this.overflowChipClick,
        },
          () => this.open ? this.expandedText : collapsedTextResult,
        ),
      ]));
    }

    let label = null;
    if (this.category) {
      if (this.tooltipVisible) {
        label = h(PfTooltip, {},
                  h('span', {
                    ref: 'heading',
                    class: styles.chipGroupLabel,
                  },
                    h('span', {
                      'aria-hidden': true,
                    }, this.category,
                    ),
                  ),
        );
      } else {
        label = h('span', {
          class: styles.chipGroupLabel,
          'aria-hidden': true,
        }, this.category);
      }
    }

    const groupChildren = [
      h('div', {
        class: styles.chipGroupMain,
      }, [
        label,
        h('ul', {
          class: styles.chipGroupList,
          'aria-labelled-by': this.$attrs.id,
          'aria-label': this.ariaLabel,
          role: 'list',
        }, lis,
        ),
      ],
      ),
    ];

    if (this.closable) {
      groupChildren.push(
        h('div', {
          class: styles.chipGroupClose,
        },
          [
            h(PfButton, {
              variant: 'plain',
              'aria-label': this.closeBtnAriaLabel,
              onClick: () => this.$emit('click'),
            },
              () => h(TimesCircleIcon, { 'aria-hidden': true }),
            ),
          ],
        ),
      );
    }

    return h('div', mergeProps(this.$attrs,
                               {
                                 class: [styles.chipGroup, {
                                   [styles.modifiers.category]: this.category,
                                 }],
                               }),
             groupChildren,
    );
  },

  methods: {
    overflowChipClick(e) {
      this.toggleCollapse();
      this.$emit('overflow-chip-click', e);
    },

    toggleCollapse() {
      this.open = !this.open;
      this.tooltipVisible = this.$refs.heading && this.$refs.heading.offsetWidth < this.$refs.heading.scrollWidth;
    },
  },
};
