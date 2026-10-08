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
    for (const modifier of [styles.modifiers.xs, styles.modifiers.sm, styles.modifiers.lg, styles.modifiers.xl, styles.modifiers.fullHeight]) {
      expect(wrapper.classes()).not.toContain(modifier);
    }
  });

  it.each([
    ['xs', styles.modifiers.xs],
    ['small', styles.modifiers.sm],
    ['large', styles.modifiers.lg],
    ['xl', styles.modifiers.xl],
  ] as const)('applies the modifier for the %s variant', (variant, modifier) => {
    const wrapper = mount(PfEmptyState, { props: { variant } });
    expect(wrapper.classes()).toContain(modifier);
  });

  it('applies the full height modifier', () => {
    const wrapper = mount(PfEmptyState, { props: { fullHeight: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.fullHeight);
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
    const wrapper = mount(PfEmptyStateIcon, { slots: { default: () => [h('svg', { class: 'a' }), h('svg', { class: 'b' })] } });

    expect(wrapper.classes()).toContain(styles.emptyStateIcon);
    expect(wrapper.find('.a').attributes('aria-hidden')).toBe('true');
    expect(wrapper.find('.b').attributes('aria-hidden')).toBe('true');
  });

  it('lets children override aria-hidden', () => {
    const wrapper = mount(PfEmptyStateIcon, { slots: { default: () => h('svg', { class: 'a', 'aria-hidden': 'false' }) } });
    expect(wrapper.find('.a').attributes('aria-hidden')).toBe('false');
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
