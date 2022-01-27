<script lang="ts">
import { defineComponent, h, InjectionKey, provide } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';

export const AccordionKey = Symbol('AccordionKey') as InjectionKey<{
  dl: boolean;
  level: number;
}>;

export default defineComponent({
  name: 'PfAccordion',

  props: {
    /** Heading level to use */
    level: {
      type: Number,
      default: 3,
      validator: (v: any) => v >= 1 && v <= 6,
    },

    /** Flag to indicate whether use definition list or div */
    dl: Boolean,

    /** Flag to indicate the accordion had a border */
    bordered: Boolean,

    /** Large display size variant. */
    large: Boolean,
  },

  setup(props) {
    provide(AccordionKey, {
      dl: props.dl,
      level: props.level,
    });
  },

  render() {
    return h(this.dl ? 'dl' : 'div', {
      class: [styles.accordion, {
        [styles.modifiers.bordered]: this.bordered,
        [styles.modifiers.displayLg]: this.large,
      }],
    }, this.$slots);
  },
});
</script>
