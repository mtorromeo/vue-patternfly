import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import cssIconColor from '@patternfly/react-tokens/dist/esm/c_empty_state__icon_Color';
import PfEmptyState from '../../src/components/EmptyState/EmptyState.vue';
import PfEmptyStateActions from '../../src/components/EmptyState/EmptyStateActions.vue';
import PfEmptyStateBody from '../../src/components/EmptyState/EmptyStateBody.vue';
import PfEmptyStateFooter from '../../src/components/EmptyState/EmptyStateFooter.vue';
import PfEmptyStateHeader from '../../src/components/EmptyState/EmptyStateHeader.vue';
import PfEmptyStateIcon from '../../src/components/EmptyState/EmptyStateIcon.vue';
import PfSpinner from '../../src/components/Spinner.vue';
import { statusIcons } from '../../src/constants';

describe('EmptyState', () => {
  it('renders the default slot inside the content wrapper', () => {
    const wrapper = mount(PfEmptyState, { slots: { default: () => h('p', 'Nothing here') } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.emptyState);
    expect(wrapper.find(`.${styles.emptyStateContent} p`).text()).toBe('Nothing here');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/EmptyState');
  });

  it('does not apply size modifiers by default', () => {
    const wrapper = mount(PfEmptyState);
    for (const modifier of [
      styles.modifiers.xs,
      styles.modifiers.sm,
      styles.modifiers.lg,
      styles.modifiers.xl,
      styles.modifiers.fullHeight,
    ]) {
      expect(wrapper.classes()).not.toContain(modifier);
    }
  });

  it.each([
    ['xs', styles.modifiers.xs],
    ['sm', styles.modifiers.sm],
    ['lg', styles.modifiers.lg],
    ['xl', styles.modifiers.xl],
  ] as const)('applies the modifier for the %s variant', (variant, modifier) => {
    const wrapper = mount(PfEmptyState, { props: { variant } });
    expect(wrapper.classes()).toContain(modifier);
  });

  it('applies the full height modifier', () => {
    const wrapper = mount(PfEmptyState, { props: { fullHeight: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.fullHeight);
  });

  it('does not render a header without title, icon or status', () => {
    const wrapper = mount(PfEmptyState, { slots: { default: () => 'No props' } });
    expect(wrapper.find(`.${styles.emptyState}__header`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.emptyStateContent}`).text()).toBe('No props');
  });

  it('renders the title as h1 in header and title wrappers, before the children', () => {
    const wrapper = mount(PfEmptyState, {
      props: { title: 'HTTP Proxies' },
      slots: { default: () => h(PfEmptyStateBody, () => 'Body') },
    });

    const content = wrapper.find(`.${styles.emptyStateContent}`);
    const [header, body] = content.element.children;
    expect(header.className).toBe(`${styles.emptyState}__header`);
    expect(body.className).toBe(styles.emptyStateBody);
    expect(header.children).toHaveLength(1);
    expect(header.children[0].className).toBe(`${styles.emptyState}__title`);
    const heading = header.children[0].children[0];
    expect(heading.tagName).toBe('H1');
    expect(heading.className).toBe(styles.emptyStateTitleText);
    expect(heading.textContent?.trim()).toBe('HTTP Proxies');
  });

  it('forwards headingLevel, titleClass and headerClass', () => {
    const wrapper = mount(PfEmptyState, {
      props: { title: 'Empty', headingLevel: 'h4', titleClass: 'my-title', headerClass: 'my-header' },
    });
    expect(wrapper.find(`.${styles.emptyState}__header`).classes()).toContain('my-header');
    const heading = wrapper.find(`.${styles.emptyStateTitleText}`);
    expect(heading.element.tagName).toBe('H4');
    expect(heading.classes()).toContain('my-title');
  });

  it('renders the title slot inside the heading', () => {
    const wrapper = mount(PfEmptyState, { slots: { title: () => h('em', 'Rich') } });
    expect(wrapper.find(`.${styles.emptyStateTitleText} em`).text()).toBe('Rich');
  });

  it('renders the icon slot before the title, wrapped in an EmptyStateIcon', () => {
    const wrapper = mount(PfEmptyState, {
      props: { title: 'Empty' },
      slots: { icon: () => h('svg', { class: 'my-icon' }) },
    });
    const header = wrapper.find(`.${styles.emptyState}__header`).element;
    expect(header.children[0].className).toBe(styles.emptyStateIcon);
    expect(header.children[0].querySelector('.my-icon')?.getAttribute('aria-hidden')).toBe('true');
    expect(header.children[1].className).toBe(`${styles.emptyState}__title`);
  });

  it.each(['danger', 'warning', 'success', 'info', 'custom'] as const)(
    'applies the %s status modifier and its default icon',
    status => {
      const wrapper = mount(PfEmptyState, { props: { status, title: 'Status' } });
      expect(wrapper.classes()).toContain(styles.modifiers[status]);
      const icon = wrapper.find(`.${styles.emptyStateIcon}`);
      expect(icon.findComponent(statusIcons[status]).exists()).toBe(true);
    },
  );

  it('lets the icon slot override the status icon', () => {
    const wrapper = mount(PfEmptyState, {
      props: { status: 'danger' },
      slots: { icon: () => h('svg', { class: 'my-icon' }) },
    });
    expect(wrapper.classes()).toContain(styles.modifiers.danger);
    expect(wrapper.find('.my-icon').exists()).toBe(true);
    expect(wrapper.findComponent(statusIcons.danger).exists()).toBe(false);
  });

  it('keeps a spinner icon visible to assistive technologies', () => {
    const wrapper = mount(PfEmptyState, { props: { title: 'Loading' }, slots: { icon: () => h(PfSpinner) } });
    const spinner = wrapper.find(`.${styles.emptyStateIcon} [role="progressbar"]`);
    expect(spinner.attributes('aria-hidden')).toBe('false');
  });

  it('composes header, body and footer with actions', () => {
    const wrapper = mount(PfEmptyState, {
      slots: {
        default: () => [
          h(PfEmptyStateHeader, { title: 'No results' }),
          h(PfEmptyStateBody, () => 'Try again'),
          h(PfEmptyStateFooter, () => h(PfEmptyStateActions, () => h('button', 'Clear'))),
        ],
      },
    });

    const content = wrapper.find(`.${styles.emptyStateContent}`);
    expect(content.find(`.${styles.emptyStateTitleText}`).text()).toBe('No results');
    expect(content.find(`.${styles.emptyStateBody}`).text()).toBe('Try again');
    expect(content.find(`.${styles.emptyStateFooter} .${styles.emptyStateActions} button`).text()).toBe('Clear');
  });
});

describe('EmptyStateHeader', () => {
  it('renders the title in an h1 by default', () => {
    const wrapper = mount(PfEmptyStateHeader, { props: { title: 'Empty' } });

    expect(wrapper.classes()).toContain(`${styles.emptyState}__header`);
    const title = wrapper.find(`.${styles.emptyState}__title`);
    const heading = title.find(`.${styles.emptyStateTitleText}`);
    expect(heading.element.tagName).toBe('H1');
    expect(heading.text()).toBe('Empty');
  });

  it('uses the given heading level', () => {
    const wrapper = mount(PfEmptyStateHeader, { props: { title: 'Empty', headingLevel: 'h4' } });
    expect(wrapper.find(`.${styles.emptyStateTitleText}`).element.tagName).toBe('H4');
  });

  it('does not render a heading without title and renders the default slot in the title wrapper', () => {
    const wrapper = mount(PfEmptyStateHeader, { slots: { default: () => h('span', { class: 'custom' }, 'Custom') } });

    expect(wrapper.find(`.${styles.emptyStateTitleText}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.emptyState}__title .custom`).text()).toBe('Custom');
  });

  it('does not render the title wrapper without title or content', () => {
    const wrapper = mount(PfEmptyStateHeader, { props: { headingLevel: 'h3' } });
    expect(wrapper.find(`.${styles.emptyState}__title`).exists()).toBe(false);
    expect(wrapper.find('h3').exists()).toBe(false);
  });

  it('adds titleClass to the heading', () => {
    const wrapper = mount(PfEmptyStateHeader, { props: { title: 'Empty', titleClass: 'testTitleClassName' } });
    expect(wrapper.find('h1').classes()).toEqual([styles.emptyStateTitleText, 'testTitleClassName']);
  });

  it('does not render an icon wrapper without the icon slot', () => {
    const wrapper = mount(PfEmptyStateHeader, { props: { title: 'Empty' } });
    expect(wrapper.find(`.${styles.emptyStateIcon}`).exists()).toBe(false);
  });

  it('wraps the icon slot in an EmptyStateIcon', () => {
    const wrapper = mount(PfEmptyStateHeader, { slots: { icon: () => h('svg', { class: 'my-icon' }) } });

    const icon = wrapper.find(`.${styles.emptyStateIcon}`);
    expect(icon.exists()).toBe(true);
    expect(icon.find('.my-icon').attributes('aria-hidden')).toBe('true');
    expect(wrapper.findAllComponents(PfEmptyStateIcon)).toHaveLength(1);
  });

  it('does not double wrap an EmptyStateIcon passed in the icon slot', () => {
    const wrapper = mount(PfEmptyStateHeader, {
      slots: { icon: () => h(PfEmptyStateIcon, { color: 'red' }, () => h('svg', { class: 'my-icon' })) },
    });

    expect(wrapper.findAll(`.${styles.emptyStateIcon}`)).toHaveLength(1);
  });

  it('reports its own OUIA component type', () => {
    const wrapper = mount(PfEmptyStateHeader);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/EmptyStateHeader');
  });
});

describe('EmptyStateIcon', () => {
  it('renders children hidden from assistive technologies', () => {
    const wrapper = mount(PfEmptyStateIcon, {
      slots: { default: () => [h('svg', { class: 'a' }), h('svg', { class: 'b' })] },
    });

    expect(wrapper.classes()).toContain(styles.emptyStateIcon);
    expect(wrapper.find('.a').attributes('aria-hidden')).toBe('true');
    expect(wrapper.find('.b').attributes('aria-hidden')).toBe('true');
  });

  it('lets children override aria-hidden', () => {
    const wrapper = mount(PfEmptyStateIcon, {
      slots: { default: () => h('svg', { class: 'a', 'aria-hidden': 'false' }) },
    });
    expect(wrapper.find('.a').attributes('aria-hidden')).toBe('false');
  });

  it('puts class and attributes on the icon, not on the wrapper', () => {
    const wrapper = mount(PfEmptyStateIcon, {
      attrs: { class: 'custom', 'data-test': 'x' },
      slots: { default: () => h('svg', { class: 'a' }) },
    });
    expect(wrapper.classes()).toEqual([styles.emptyStateIcon]);
    expect(wrapper.find('svg').classes()).toEqual(['custom', 'a']);
    expect(wrapper.find('svg').attributes('data-test')).toBe('x');
  });

  it('sets the icon color css variable', () => {
    const wrapper = mount(PfEmptyStateIcon, { props: { color: 'red' }, slots: { default: () => h('svg') } });
    expect((wrapper.element as HTMLElement).style.getPropertyValue(cssIconColor.name)).toBe('red');
  });

  it('keeps a spinner visible to assistive technologies and ignores the color', async () => {
    const wrapper = mount(PfEmptyStateIcon, { props: { color: 'red' }, slots: { default: () => h(PfSpinner) } });
    await nextTick();

    expect(wrapper.find('[aria-hidden]').attributes('aria-hidden')).toBe('false');
    expect((wrapper.element as HTMLElement).style.getPropertyValue(cssIconColor.name)).toBe('');
  });

  it('forwards OUIA attributes', () => {
    const wrapper = mount(PfEmptyStateIcon, { props: { ouiaId: 'icon' } });
    expect(wrapper.attributes('data-ouia-component-id')).toBe('icon');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/EmptyStateIcon');
  });
});

describe('EmptyStateBody', () => {
  it('renders the body class and slot', () => {
    const wrapper = mount(PfEmptyStateBody, { slots: { default: () => 'Body' } });
    expect(wrapper.classes()).toContain(styles.emptyStateBody);
    expect(wrapper.text()).toBe('Body');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/EmptyStateBody');
  });
});

describe('EmptyStateFooter', () => {
  it('renders the footer class and slot', () => {
    const wrapper = mount(PfEmptyStateFooter, { slots: { default: () => 'Footer' } });
    expect(wrapper.classes()).toContain(styles.emptyStateFooter);
    expect(wrapper.text()).toBe('Footer');
  });
});

describe('EmptyStateActions', () => {
  it('renders the actions class and slot', () => {
    const wrapper = mount(PfEmptyStateActions, { slots: { default: () => h('button', 'Act') } });
    expect(wrapper.classes()).toContain(styles.emptyStateActions);
    expect(wrapper.find('button').text()).toBe('Act');
  });
});
