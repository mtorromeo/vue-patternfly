import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfAccordion from '../../src/components/Accordion/Accordion.vue';
import PfAccordionItem from '../../src/components/Accordion/AccordionItem.vue';

function mountAccordion(template: string, setup: () => Record<string, unknown> = () => ({})) {
  return mount(defineComponent({
    components: { PfAccordion, PfAccordionItem },
    setup,
    template,
  }));
}

describe('Accordion', () => {
  it('renders a div with heading toggles by default', () => {
    const wrapper = mountAccordion(`
      <pf-accordion>
        <pf-accordion-item title="One">Content one</pf-accordion-item>
      </pf-accordion>
    `);

    const root = wrapper.get(`.${styles.accordion}`);
    expect(root.element.tagName).toBe('DIV');
    expect(root.find('h3 button').exists()).toBe(true);
    expect(wrapper.get(`.${styles.accordionToggleText}`).text()).toBe('One');
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.element.tagName).toBe('DIV');
    expect(content.get(`.${styles.accordionExpandableContentBody}`).text()).toBe('Content one');
  });

  it('uses the configured heading level', () => {
    const numeric = mountAccordion(`
      <pf-accordion :level="2"><pf-accordion-item title="One" /></pf-accordion>
    `);
    expect(numeric.find('h2 button').exists()).toBe(true);

    const named = mountAccordion(`
      <pf-accordion level="h5"><pf-accordion-item title="One" /></pf-accordion>
    `);
    expect(named.find('h5 button').exists()).toBe(true);
  });

  it('renders a definition list when dl is set', () => {
    const wrapper = mountAccordion(`
      <pf-accordion dl><pf-accordion-item title="One">Body</pf-accordion-item></pf-accordion>
    `);
    expect(wrapper.get(`.${styles.accordion}`).element.tagName).toBe('DL');
    expect(wrapper.find('dt button').exists()).toBe(true);
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).element.tagName).toBe('DD');
  });

  it('applies modifiers', () => {
    const wrapper = mountAccordion(`
      <pf-accordion bordered large toggle-position="start"><pf-accordion-item title="One" /></pf-accordion>
    `);
    const classes = wrapper.get(`.${styles.accordion}`).classes();
    expect(classes).toContain(styles.modifiers.bordered);
    expect(classes).toContain(styles.modifiers.displayLg);
    expect(classes).toContain(styles.modifiers.toggleStart);
  });

  it('places the angle-down toggle icon after the text by default', () => {
    const wrapper = mountAccordion(`
      <pf-accordion><pf-accordion-item title="One" /></pf-accordion>
    `);
    const button = wrapper.get('button');
    const spans = button.findAll(':scope > span');
    expect(spans[0].classes()).toContain(styles.accordionToggleText);
    expect(spans[1].classes()).toContain(styles.accordionToggleIcon);
    expect(spans[1].findComponent(PfAngleDownIcon).exists()).toBe(true);
  });

  it('places the toggle icon before the text when togglePosition is start', () => {
    const wrapper = mountAccordion(`
      <pf-accordion toggle-position="start"><pf-accordion-item title="One" /></pf-accordion>
    `);
    const spans = wrapper.get('button').findAll(':scope > span');
    expect(spans).toHaveLength(2);
    expect(spans[0].classes()).toContain(styles.accordionToggleIcon);
    expect(spans[0].findComponent(PfAngleDownIcon).exists()).toBe(true);
    expect(spans[1].classes()).toContain(styles.accordionToggleText);
  });
});

describe('AccordionItem', () => {
  it('is collapsed by default', () => {
    const wrapper = mountAccordion(`
      <pf-accordion><pf-accordion-item title="One">Body</pf-accordion-item></pf-accordion>
    `);
    const button = wrapper.get('button');
    expect(button.attributes('type')).toBe('button');
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(button.classes()).not.toContain(styles.modifiers.expanded);
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.attributes('hidden')).toBeDefined();
    expect(content.classes()).not.toContain(styles.modifiers.expanded);
  });

  it('expands and collapses on click', async () => {
    const wrapper = mount(PfAccordionItem, {
      props: { title: 'One' },
      slots: { default: 'Body' },
    });
    const button = wrapper.get('button');

    await button.trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(wrapper.emitted('click')).toHaveLength(1);
    expect(button.attributes('aria-expanded')).toBe('true');
    expect(button.classes()).toContain(styles.modifiers.expanded);
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.attributes('hidden')).toBeUndefined();
    expect(content.classes()).toContain(styles.modifiers.expanded);

    await button.trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true], [false]]);
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).attributes('hidden')).toBeDefined();
  });

  it('reflects the expanded prop', async () => {
    const wrapper = mount(PfAccordionItem, { props: { title: 'One', expanded: true } });
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true');
    await wrapper.setProps({ expanded: false });
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('false');
  });

  it('keeps items independent when using v-model', async () => {
    // The accordion does not implement single-expand behaviour itself: each item has its own state.
    const first = ref(false);
    const second = ref(false);
    const wrapper = mountAccordion(`
      <pf-accordion>
        <pf-accordion-item v-model:expanded="first" title="One">One</pf-accordion-item>
        <pf-accordion-item v-model:expanded="second" title="Two">Two</pf-accordion-item>
      </pf-accordion>
    `, () => ({ first, second }));

    const buttons = wrapper.findAll('button');
    await buttons[0].trigger('click');
    await buttons[1].trigger('click');
    expect(first.value).toBe(true);
    expect(second.value).toBe(true);
    expect(buttons[0].attributes('aria-expanded')).toBe('true');
    expect(buttons[1].attributes('aria-expanded')).toBe('true');
  });

  it('can implement single-expand behaviour through controlled state', async () => {
    const active = ref<string | null>(null);
    const wrapper = mountAccordion(`
      <pf-accordion>
        <pf-accordion-item
          v-for="id in ['a', 'b']"
          :key="id"
          :title="id"
          :expanded="active === id"
          @update:expanded="active = $event ? id : null"
        >{{ id }}</pf-accordion-item>
      </pf-accordion>
    `, () => ({ active }));

    const buttons = wrapper.findAll('button');
    await buttons[0].trigger('click');
    expect(buttons.map(b => b.attributes('aria-expanded'))).toEqual(['true', 'false']);
    await buttons[1].trigger('click');
    expect(buttons.map(b => b.attributes('aria-expanded'))).toEqual(['false', 'true']);
    await buttons[1].trigger('click');
    expect(buttons.map(b => b.attributes('aria-expanded'))).toEqual(['false', 'false']);
  });

  it('renders the toggle slot instead of the title', () => {
    const wrapper = mount(PfAccordionItem, {
      props: { title: 'Ignored' },
      slots: { toggle: '<em>Custom</em>' },
    });
    expect(wrapper.get(`.${styles.accordionToggleText}`).html()).toContain('<em>Custom</em>');
  });

  it('applies the fixed modifier to the content', () => {
    const wrapper = mount(PfAccordionItem, { props: { fixed: true } });
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).classes()).toContain(styles.modifiers.fixed);
  });

  it('supports custom toggle and content components', () => {
    const wrapper = mount(PfAccordionItem, {
      props: { toggleComponent: 'h4', contentComponent: 'section' },
    });
    expect(wrapper.find('h4 button').exists()).toBe(true);
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).element.tagName).toBe('SECTION');
  });

  it('does not duplicate an id attribute on button and content', () => {
    const wrapper = mount(PfAccordionItem, { attrs: { id: 'item-1' } });
    expect(wrapper.findAll('#item-1')).toHaveLength(1);
  });
});
