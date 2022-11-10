<script lang="ts">
import { defineComponent, h, mergeProps, PropType, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/ChipGroup/chip-group';
import CircleXmarkIcon from '@vue-patternfly/icons/dist/esm/icons/circle-xmark-icon';
import PfChip from './Chip.vue';
import PfButton from '../Button.vue';
import PfTooltip, { TooltipPosition } from '../Tooltip/Tooltip.vue';
import { findChildrenVNodes, fillTemplate } from '../../util';
import { useElementOverflow } from '../../use';

export default defineComponent({
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
      type: String as PropType<TooltipPosition>,
      default: 'top',
      validator: (v: any) => v in TooltipPosition,
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

  emits: ['click', 'overflow-chip-click'],

  setup() {
    const labelRef = ref(null);

    return {
      labelRef,
      labelOverflowing: useElementOverflow(labelRef),
    };
  },

  data() {
    return {
      open: this.defaultOpen,
    };
  },

  methods: {
    overflowChipClick(e: MouseEvent | TouchEvent) {
      this.toggleCollapse();
      this.$emit('overflow-chip-click', e);
    },

    toggleCollapse() {
      this.open = !this.open;
    },
  },

  render() {
    const children = this.$slots.default ? findChildrenVNodes(this.$slots.default()) : [];

    if (!children.length) {
      return;
    }

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
      if (this.labelOverflowing) {
        label = h(PfTooltip, {},
                  h('span', {
                    ref: 'labelRef',
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
              () => h(CircleXmarkIcon, { 'aria-hidden': true }),
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
});
</script>