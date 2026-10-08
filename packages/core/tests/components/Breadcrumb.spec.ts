import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import PfBreadcrumb from '../../src/components/Breadcrumb/Breadcrumb.vue';
import PfBreadcrumbItem from '../../src/components/Breadcrumb/BreadcrumbItem.vue';
import PfButton from '../../src/components/Button.vue';

const RouterLinkStub = defineComponent({
  name: 'RouterLink',
  props: { to: { type: [String, Object], required: true } },
  setup(props, { slots }) {
    return () => h('a', { href: `#${String(props.to)}`, class: 'router-link' }, slots.default?.());
  },
});

describe('Breadcrumb', () => {
  it('renders a labelled nav with an ordered list', () => {
    const wrapper = mount(PfBreadcrumb);

    expect(wrapper.element.tagName).toBe('NAV');
    expect(wrapper.classes()).toContain(styles.breadcrumb);
    expect(wrapper.attributes('aria-label')).toBe('Breadcrumb');
    const list = wrapper.find('ol');
    expect(list.classes()).toContain(styles.breadcrumbList);
    expect(list.attributes('role')).toBe('list');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Breadcrumb');
  });

  it('uses a custom aria-label', () => {
    const wrapper = mount(PfBreadcrumb, { props: { ariaLabel: 'Path' } });
    expect(wrapper.attributes('aria-label')).toBe('Path');
  });

  it('shows a divider on every item but the first', () => {
    const wrapper = mount(PfBreadcrumb, {
      slots: {
        default: () => [
          h(PfBreadcrumbItem, { href: '#1' }, () => 'One'),
          h(PfBreadcrumbItem, { href: '#2' }, () => 'Two'),
          h(PfBreadcrumbItem, { active: true }, () => 'Three'),
        ],
      },
    });

    const items = wrapper.findAll(`li.${styles.breadcrumbItem}`);
    expect(items.map(i => i.text())).toEqual(['One', 'Two', 'Three']);
    expect(items.map(i => i.find(`.${styles.breadcrumbItemDivider}`).exists())).toEqual([false, true, true]);
    expect(items[1]?.find(`.${styles.breadcrumbItemDivider} svg`).exists()).toBe(true);
  });

  it('flattens fragments when computing dividers', () => {
    const wrapper = mount(PfBreadcrumb, {
      slots: {
        default: () => [
          h(PfBreadcrumbItem, { href: '#1' }, () => 'One'),
          ['Two', 'Three'].map(t => h(PfBreadcrumbItem, { href: `#${t}`, key: t }, () => t)),
        ],
      },
    });

    const items = wrapper.findAll(`li.${styles.breadcrumbItem}`);
    expect(items.map(i => i.find(`.${styles.breadcrumbItemDivider}`).exists())).toEqual([false, true, true]);
  });
});

describe('BreadcrumbItem', () => {
  it('renders an anchor when href is set', () => {
    const wrapper = mount(PfBreadcrumbItem, { props: { href: '#home' }, attrs: { target: '_blank' }, slots: { default: () => 'Home' } });

    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(styles.breadcrumbItem);
    const link = wrapper.find('a');
    expect(link.attributes('href')).toBe('#home');
    expect(link.attributes('target')).toBe('_blank');
    expect(link.attributes('aria-current')).toBeUndefined();
    expect(link.attributes('type')).toBeUndefined();
    expect(link.text()).toBe('Home');
    expect(wrapper.attributes('target')).toBeUndefined();
  });

  it('marks the active item with aria-current="page"', () => {
    const wrapper = mount(PfBreadcrumbItem, { props: { href: '#here', active: true } });
    expect(wrapper.find('a').attributes('aria-current')).toBe('page');
  });

  it('applies the link and current classes to the link', () => {
    const wrapper = mount(PfBreadcrumbItem, { props: { href: '#here', active: true } });
    expect(wrapper.find('a').classes()).toContain(styles.breadcrumbLink);
    expect(wrapper.find('a').classes()).toContain(styles.modifiers.current);
  });

  it('renders plain content without href', () => {
    const wrapper = mount(PfBreadcrumbItem, { slots: { default: () => 'Plain text' } });

    expect(wrapper.find('a').exists()).toBe(false);
    expect(wrapper.text()).toBe('Plain text');
  });

  it('shows the divider when showDivider is set', () => {
    const wrapper = mount(PfBreadcrumbItem, { props: { showDivider: true } });
    expect(wrapper.find(`.${styles.breadcrumbItemDivider} svg`).exists()).toBe(true);
  });

  it('renders a dropdown container', () => {
    const wrapper = mount(PfBreadcrumbItem, { props: { dropdown: true, href: '#ignored' }, slots: { default: () => 'Menu' } });

    const dropdown = wrapper.find(`.${styles.breadcrumbDropdown}`);
    expect(dropdown.element.tagName).toBe('SPAN');
    expect(dropdown.text()).toBe('Menu');
  });

  it('renders a router-link when to is set, without forcing aria-current', () => {
    const wrapper = mount(PfBreadcrumbItem, {
      props: { to: '/home', active: true },
      slots: { default: () => 'Home' },
      global: { components: { RouterLink: RouterLinkStub } },
    });

    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.exists()).toBe(true);
    expect(link.props('to')).toBe('/home');
    expect(link.attributes('aria-current')).toBeUndefined();
    expect(link.text()).toBe('Home');
  });

  it('renders a custom component and sets type="button" for buttons', () => {
    const button = mount(PfBreadcrumbItem, { props: { component: 'button' }, slots: { default: () => 'Btn' } });
    expect(button.find('button').attributes('type')).toBe('button');

    const pfButton = mount(PfBreadcrumbItem, { props: { component: PfButton }, slots: { default: () => 'Btn' } });
    expect(pfButton.find('button').attributes('type')).toBe('button');

    const custom = mount(PfBreadcrumbItem, { props: { component: 'h2' }, slots: { default: () => 'Title' } });
    expect(custom.find('h2').text()).toBe('Title');
    expect(custom.find('h2').attributes('type')).toBeUndefined();
  });

  it('applies liAttrs and OUIA attributes to the list item', () => {
    const wrapper = mount(PfBreadcrumbItem, { props: { liAttrs: { id: 'crumb' }, ouiaId: 'c1' } });

    expect(wrapper.attributes('id')).toBe('crumb');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('c1');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/BreadcrumbItem');
  });
});
