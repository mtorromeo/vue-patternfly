import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfAccordion from '../../src/components/Accordion/Accordion.vue';
import PfAccordionItem from '../../src/components/Accordion/AccordionItem.vue';
import PfAccordionToggle from '../../src/components/Accordion/AccordionToggle.vue';
import PfAccordionContent from '../../src/components/Accordion/AccordionContent.vue';
import PfAccordionExpandableContentBody from '../../src/components/Accordion/AccordionExpandableContentBody.vue';

function mountAccordion(template: string, setup: () => Record<string, unknown> = () => ({})) {
  return mount(
    defineComponent({
      components: {
        PfAccordion,
        PfAccordionItem,
        PfAccordionToggle,
        PfAccordionContent,
        PfAccordionExpandableContentBody,
      },
      setup,
      template,
    }),
  );
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
    expect(root.attributes('role')).toBeUndefined();
    expect(root.find('h3 button').exists()).toBe(true);
    expect(wrapper.get(`.${styles.accordionToggleText}`).text()).toBe('One');
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.element.tagName).toBe('DIV');
    expect(content.get(`.${styles.accordionExpandableContentBody}`).text()).toBe('Content one');
  });

  it('forwards class and attributes to the root', () => {
    const wrapper = mount(PfAccordion, { attrs: { class: 'custom', 'aria-labelledby': 'label' } });
    expect(wrapper.classes()).toEqual([styles.accordion, 'custom']);
    expect(wrapper.attributes('aria-labelledby')).toBe('label');
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
      <pf-accordion dl level="h2"><pf-accordion-item title="One">Body</pf-accordion-item></pf-accordion>
    `);
    expect(wrapper.get(`.${styles.accordion}`).element.tagName).toBe('DL');
    expect(wrapper.find('dt button').exists()).toBe(true);
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).element.tagName).toBe('DD');
  });

  it('is a region when labelled and not a definition list', () => {
    const div = mount(PfAccordion, { attrs: { 'aria-label': 'Accordion test' } });
    expect(div.attributes('role')).toBe('region');
    expect(div.attributes('aria-label')).toBe('Accordion test');

    const dl = mount(PfAccordion, { props: { dl: true }, attrs: { 'aria-label': 'Accordion test' } });
    expect(dl.attributes('role')).toBeUndefined();
  });

  it('applies modifiers', () => {
    const plain = mount(PfAccordion);
    expect(plain.classes()).toEqual([styles.accordion]);

    const wrapper = mount(PfAccordion, {
      props: { bordered: true, large: true, togglePosition: 'start', plain: true, noPlainOnGlass: true },
    });
    const classes = wrapper.classes();
    expect(classes).toContain(styles.modifiers.bordered);
    expect(classes).toContain(styles.modifiers.displayLg);
    expect(classes).toContain(styles.modifiers.toggleStart);
    expect(classes).toContain(styles.modifiers.plain);
    expect(classes).toContain(styles.modifiers.noPlainOnGlass);
  });

  it('updates the toggles and contents when its props change', async () => {
    // regression: the context was computed once at setup
    const wrapper = mountAccordion(
      `
      <pf-accordion :dl="dl" :level="level" :toggle-position="position">
        <pf-accordion-item title="One">Body</pf-accordion-item>
      </pf-accordion>
    `,
      () => ({ dl: ref(false), level: ref(3), position: ref('end') }),
    );
    const vm = wrapper.vm as unknown as { dl: boolean; level: number; position: string };

    vm.level = 4;
    vm.position = 'start';
    await nextTick();
    expect(wrapper.find('h4 button').exists()).toBe(true);
    expect(wrapper.get('button > span').classes()).toContain(styles.accordionToggleIcon);

    vm.dl = true;
    await nextTick();
    expect(wrapper.find('dt button').exists()).toBe(true);
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).element.tagName).toBe('DD');
  });
});

describe('AccordionItem', () => {
  it('renders a div with the item class', () => {
    const wrapper = mount(PfAccordionItem, { props: { title: 'One' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.accordionItem]);
  });

  it('forwards class and attributes to the item instead of the toggle', () => {
    // regression: class and attributes ended up on the toggle button
    const wrapper = mount(PfAccordionItem, {
      props: { title: 'One' },
      attrs: { class: 'custom-class', id: 'item-1', 'data-testid': 'item' },
    });
    expect(wrapper.classes()).toContain('custom-class');
    expect(wrapper.attributes('id')).toBe('item-1');
    expect(wrapper.attributes('data-testid')).toBe('item');
    expect(wrapper.get('button').classes()).not.toContain('custom-class');
    expect(wrapper.findAll('#item-1')).toHaveLength(1);
  });

  it('applies toggleAttrs to the button and contentAttrs to the content', () => {
    const wrapper = mount(PfAccordionItem, {
      props: {
        title: 'One',
        toggleAttrs: { id: 'toggle-1', class: 'toggle-class' },
        contentAttrs: { id: 'content-1', 'aria-labelledby': 'toggle-1' },
      },
    });
    const button = wrapper.get('button');
    expect(button.attributes('id')).toBe('toggle-1');
    expect(button.classes()).toContain('toggle-class');
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.attributes('id')).toBe('content-1');
    expect(content.attributes('aria-labelledby')).toBe('toggle-1');
  });

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
  });

  it('expands and collapses on click', async () => {
    const wrapper = mount(PfAccordionItem, {
      props: { title: 'One' },
      slots: { default: 'Body' },
    });
    const button = wrapper.get('button');

    await button.trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(button.attributes('aria-expanded')).toBe('true');
    expect(button.classes()).toContain(styles.modifiers.expanded);
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.attributes('hidden')).toBeUndefined();
    // PF6 shows the expandable content only inside an expanded accordion item
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);

    await button.trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true], [false]]);
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).attributes('hidden')).toBeDefined();
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
  });

  it('does not add the expanded modifier to the content', () => {
    // regression: the content had pf-m-expanded, which upstream does not render
    const wrapper = mount(PfAccordionItem, { props: { title: 'One', expanded: true } });
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).classes()).toEqual([styles.accordionExpandableContent]);
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
    const wrapper = mountAccordion(
      `
      <pf-accordion>
        <pf-accordion-item v-model:expanded="first" title="One">One</pf-accordion-item>
        <pf-accordion-item v-model:expanded="second" title="Two">Two</pf-accordion-item>
      </pf-accordion>
    `,
      () => ({ first, second }),
    );

    const buttons = wrapper.findAll('button');
    await buttons[0]!.trigger('click');
    await buttons[1]!.trigger('click');
    expect(first.value).toBe(true);
    expect(second.value).toBe(true);
    expect(buttons[0]!.attributes('aria-expanded')).toBe('true');
    expect(buttons[1]!.attributes('aria-expanded')).toBe('true');
  });

  it('can implement single-expand behaviour through controlled state', async () => {
    const active = ref<string | null>(null);
    const wrapper = mountAccordion(
      `
      <pf-accordion>
        <pf-accordion-item
          v-for="id in ['a', 'b']"
          :key="id"
          :title="id"
          :expanded="active === id"
          @update:expanded="active = $event ? id : null"
        >{{ id }}</pf-accordion-item>
      </pf-accordion>
    `,
      () => ({ active }),
    );

    const buttons = wrapper.findAll('button');
    await buttons[0]!.trigger('click');
    expect(buttons.map(b => b.attributes('aria-expanded'))).toEqual(['true', 'false']);
    await buttons[1]!.trigger('click');
    expect(buttons.map(b => b.attributes('aria-expanded'))).toEqual(['false', 'true']);
    await buttons[1]!.trigger('click');
    expect(buttons.map(b => b.attributes('aria-expanded'))).toEqual(['false', 'false']);
  });

  it('renders the toggle slot instead of the title', () => {
    const wrapper = mount(PfAccordionItem, {
      props: { title: 'Ignored' },
      slots: { toggle: '<em>Custom</em>' },
    });
    expect(wrapper.get(`.${styles.accordionToggleText}`).html()).toContain('<em>Custom</em>');
  });

  it('renders the toggle and the content without a title', () => {
    const wrapper = mount(PfAccordionItem, { slots: { default: 'Body' } });
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.get(`.${styles.accordionExpandableContentBody}`).text()).toBe('Body');
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

  it('does not wrap a pf-accordion-content child in another content', () => {
    const wrapper = mountAccordion(`
      <pf-accordion-item title="One" expanded>
        <pf-accordion-content custom-content>
          <pf-accordion-expandable-content-body>First</pf-accordion-expandable-content-body>
          <pf-accordion-expandable-content-body>Second</pf-accordion-expandable-content-body>
        </pf-accordion-content>
      </pf-accordion-item>
    `);
    expect(wrapper.findAll(`.${styles.accordionExpandableContent}`)).toHaveLength(1);
    const bodies = wrapper.findAll(`.${styles.accordionExpandableContentBody}`);
    expect(bodies.map(b => b.text())).toEqual(['First', 'Second']);
  });

  it('renders composed toggle and content as they are', async () => {
    const expanded = ref(false);
    const onClick = vi.fn();
    const wrapper = mountAccordion(
      `
      <pf-accordion dl>
        <pf-accordion-item v-model:expanded="expanded">
          <pf-accordion-toggle id="toggle-1" @click="onClick">One</pf-accordion-toggle>
          <pf-accordion-content id="content-1">Body</pf-accordion-content>
        </pf-accordion-item>
      </pf-accordion>
    `,
      () => ({ expanded, onClick }),
    );

    const item = wrapper.get(`.${styles.accordionItem}`);
    expect([...item.element.children].map(c => c.tagName)).toEqual(['DT', 'DD']);
    expect(wrapper.findAll('button')).toHaveLength(1);

    await wrapper.get('#toggle-1').trigger('click');
    expect(expanded.value).toBe(true);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(wrapper.get('#toggle-1').attributes('aria-expanded')).toBe('true');
    expect(wrapper.get('#content-1').attributes('hidden')).toBeUndefined();
  });
});

describe('AccordionToggle', () => {
  it('renders a button in an h3 outside an accordion', () => {
    const wrapper = mount(PfAccordionToggle, { attrs: { id: 'accordion-toggle' }, slots: { default: 'Test' } });

    expect(wrapper.element.tagName).toBe('H3');
    const button = wrapper.get('button');
    expect(button.attributes('id')).toBe('accordion-toggle');
    expect(button.attributes('type')).toBe('button');
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(button.classes()).toEqual([styles.accordionToggle]);
  });

  it('renders the text before the toggle icon', () => {
    const wrapper = mount(PfAccordionToggle, { slots: { default: 'Test' } });
    const spans = wrapper.get('button').findAll(':scope > span');
    expect(spans).toHaveLength(2);
    expect(spans[0]!.classes()).toEqual([styles.accordionToggleText]);
    expect(spans[0]!.text()).toBe('Test');
    expect(spans[1]!.classes()).toEqual([styles.accordionToggleIcon]);
    expect(spans[1]!.findComponent(PfAngleDownIcon).exists()).toBe(true);
  });

  it('renders the toggle icon before the text when togglePosition is start', () => {
    const wrapper = mountAccordion(`
      <pf-accordion toggle-position="start"><pf-accordion-item><pf-accordion-toggle>One</pf-accordion-toggle></pf-accordion-item></pf-accordion>
    `);
    const spans = wrapper.get('button').findAll(':scope > span');
    expect(spans[0]!.classes()).toContain(styles.accordionToggleIcon);
    expect(spans[1]!.classes()).toContain(styles.accordionToggleText);
  });

  it('forwards class and attributes to the button', () => {
    const wrapper = mount(PfAccordionToggle, { attrs: { class: 'test-class', 'aria-labelledby': 'label' } });
    expect(wrapper.get('button').classes()).toContain('test-class');
    expect(wrapper.get('button').attributes('aria-labelledby')).toBe('label');
    expect(wrapper.classes()).not.toContain('test-class');
  });

  it('renders the container from the component prop', () => {
    const wrapper = mountAccordion(`
      <pf-accordion dl><pf-accordion-item><pf-accordion-toggle component="h1">One</pf-accordion-toggle></pf-accordion-item></pf-accordion>
    `);
    expect(wrapper.find('h1 button').exists()).toBe(true);
    expect(wrapper.find('dt').exists()).toBe(false);
  });

  it('reflects the expanded state of the item', () => {
    const wrapper = mountAccordion(`
      <pf-accordion-item expanded><pf-accordion-toggle>One</pf-accordion-toggle></pf-accordion-item>
    `);
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('true');
    expect(wrapper.get('button').classes()).toContain(styles.modifiers.expanded);
  });

  it('emits click without an item', async () => {
    const wrapper = mount(PfAccordionToggle);
    await wrapper.get('button').trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
    expect(wrapper.get('button').attributes('aria-expanded')).toBe('false');
  });
});

describe('AccordionContent', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('wraps the children in an expandable content body', () => {
    const wrapper = mount(PfAccordionContent, {
      attrs: { id: 'test-id', class: 'test-class', 'aria-label': 'Accordion content' },
      slots: { default: 'Test' },
    });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.accordionExpandableContent, 'test-class']);
    expect(wrapper.attributes('id')).toBe('test-id');
    expect(wrapper.attributes('aria-label')).toBe('Accordion content');
    expect(wrapper.get(`.${styles.accordionExpandableContentBody}`).text()).toBe('Test');
  });

  it('applies bodyAttrs to the expandable content body', () => {
    const wrapper = mount(PfAccordionContent, { props: { bodyAttrs: { id: 'body', class: 'body-class' } } });
    const body = wrapper.get(`.${styles.accordionExpandableContentBody}`);
    expect(body.attributes('id')).toBe('body');
    expect(body.classes()).toContain('body-class');
  });

  it('does not wrap the children with customContent', () => {
    const wrapper = mount(PfAccordionContent, { props: { customContent: true }, slots: { default: '<p>Test</p>' } });
    expect(wrapper.find(`.${styles.accordionExpandableContentBody}`).exists()).toBe(false);
    expect(wrapper.element.firstElementChild!.tagName).toBe('P');
  });

  it('is hidden unless the item is expanded', () => {
    expect(mount(PfAccordionContent).attributes('hidden')).toBeDefined();

    const wrapper = mountAccordion(`
      <pf-accordion-item expanded><pf-accordion-toggle>One</pf-accordion-toggle><pf-accordion-content>Body</pf-accordion-content></pf-accordion-item>
    `);
    expect(wrapper.get(`.${styles.accordionExpandableContent}`).attributes('hidden')).toBeUndefined();
  });

  it('renders the container from the component prop', () => {
    const wrapper = mount(PfAccordionContent, { props: { component: 'section' } });
    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('applies the fixed modifier', () => {
    expect(mount(PfAccordionContent).classes()).not.toContain(styles.modifiers.fixed);
    expect(mount(PfAccordionContent, { props: { fixed: true } }).classes()).toContain(styles.modifiers.fixed);
  });

  function mockScrollbar() {
    vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(100);
    vi.spyOn(HTMLElement.prototype, 'scrollHeight', 'get').mockReturnValue(300);
  }

  it('makes expanded fixed content with a scrollbar focusable', async () => {
    mockScrollbar();
    const wrapper = mountAccordion(`
      <pf-accordion-item title="One" expanded fixed>Body</pf-accordion-item>
    `);
    await nextTick();
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.attributes('tabindex')).toBe('0');
    expect(content.attributes('role')).toBe('region');
  });

  it('does not add the region role to a dd', async () => {
    mockScrollbar();
    const wrapper = mountAccordion(`
      <pf-accordion dl><pf-accordion-item title="One" expanded fixed>Body</pf-accordion-item></pf-accordion>
    `);
    await nextTick();
    const content = wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content.attributes('tabindex')).toBe('0');
    expect(content.attributes('role')).toBeUndefined();
  });

  it('is not focusable when not fixed or collapsed', async () => {
    mockScrollbar();
    const wrapper = mountAccordion(
      `<pf-accordion-item title="One" :expanded="expanded" :fixed="fixed">Body</pf-accordion-item>`,
      () => ({ expanded: ref(false), fixed: ref(true) }),
    );
    const content = () => wrapper.get(`.${styles.accordionExpandableContent}`);
    expect(content().attributes('tabindex')).toBeUndefined();

    const vm = wrapper.vm as unknown as { expanded: boolean; fixed: boolean };
    vm.expanded = true;
    await nextTick();
    await nextTick();
    expect(content().attributes('tabindex')).toBe('0');

    vm.fixed = false;
    await nextTick();
    await nextTick();
    expect(content().attributes('tabindex')).toBeUndefined();
  });
});

describe('AccordionExpandableContentBody', () => {
  it('renders a div with the body class and its children', () => {
    const wrapper = mount(PfAccordionExpandableContentBody, { attrs: { id: 'b' }, slots: { default: 'Test' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.accordionExpandableContentBody]);
    expect(wrapper.attributes('id')).toBe('b');
    expect(wrapper.text()).toBe('Test');
  });
});
