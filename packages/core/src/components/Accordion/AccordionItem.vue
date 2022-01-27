<script lang="ts">
import { DefineComponent, defineComponent, h, inject, mergeProps, resolveDynamicComponent } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { useManagedProp } from '../../use';
import { AccordionKey } from './Accordion.vue';

export default defineComponent({
  name: 'PfAccordionItem',

  props: {
    title: {
      type: String,
      default: '',
    },
    toggleComponent: {
      type: String,
      default: null,
    },
    contentComponent: {
      type: String,
      default: null,
    },
    fixed: Boolean,
    expanded: {
      type: Boolean,
      default: null,
    },
  },

  emits: ['update:expanded'],

  setup() {
    return {
      accordion: inject(AccordionKey, null),
      managedExpanded: useManagedProp('expanded', false),
    };
  },

  render() {
    const Toggle = this.toggleComponent || (this.accordion.dl ? 'dt' : `h${this.accordion.level}`);

    const content = this.contentComponent || (this.accordion.dl ? 'dd' : 'div');
    const Component = resolveDynamicComponent(content) as DefineComponent;

    return [
      h(Toggle, {}, h('button', mergeProps({
        class: [
          styles.accordionToggle, {
            [styles.modifiers.expanded]: this.managedExpanded,
          },
        ],
        'aria-expanded': this.managedExpanded,
        onClick: () => {
          this.managedExpanded = !this.managedExpanded;
        },
      }, this.$attrs), [
        h('span', { class: styles.accordionToggleText }, {
          default: () => this.$slots.toggle ? this.$slots.toggle() : this.title,
        }),
        h('span', { class: styles.accordionToggleIcon }, h(AngleRightIcon)),
      ])),

      h(Component, mergeProps({
        class: [
          styles.accordionExpandedContent, {
            [styles.modifiers.fixed]: this.fixed,
            [styles.modifiers.expanded]: this.managedExpanded,
          },
        ],
        hidden: !this.managedExpanded,
      }, this.$attrs),
        h('div', { class: styles.accordionExpandedContentBody }, {
          default: () => this.$slots.default ? this.$slots.default() : null,
        }),
      ),
    ];
  },
});
</script>
