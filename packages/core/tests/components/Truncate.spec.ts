import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils';
import styles from '@patternfly/react-styles/css/components/Truncate/truncate';
import PfTruncate from '../../src/components/Truncate.vue';
import PfTooltip from '../../src/components/Tooltip/Tooltip.vue';

enableAutoUnmount(afterEach);

const content = 'redhat_logo_black_and_white_reversed_simple_with_fedora_container.zip';

describe('Truncate', () => {
  it('renders a span by default and an anchor with href', () => {
    const span = mount(PfTruncate, { props: { content } });
    expect(span.element.tagName).toBe('SPAN');
    expect(span.classes()).toEqual([styles.truncate]);

    const link = mount(PfTruncate, { props: { content, href: '#link' } });
    expect(link.element.tagName).toBe('A');
    expect(link.attributes('href')).toBe('#link');
  });

  it('applies the class and attributes to the wrapper', () => {
    const wrapper = mount(PfTruncate, { props: { content }, attrs: { class: 'custom', id: 'truncate' } });
    expect(wrapper.classes()).toContain('custom');
    expect(wrapper.attributes('id')).toBe('truncate');
  });

  it('truncates at the end by default', () => {
    const wrapper = mount(PfTruncate, { props: { content } });
    const spans = wrapper.findAll(`.${styles.truncateStart}, .${styles.truncateEnd}`);
    expect(spans).toHaveLength(1);
    expect(spans[0]!.classes()).toEqual([styles.truncateStart]);
    expect(spans[0]!.text()).toBe(content);
  });

  it('truncates at the start with left-to-right marks around the content', () => {
    const wrapper = mount(PfTruncate, { props: { content, position: 'start' } });
    const span = wrapper.find(`.${styles.truncateEnd}`);
    expect(span.element.textContent).toBe(`‎${content}‎`);
  });

  it('truncates in the middle, keeping the trailing characters', async () => {
    const wrapper = mount(PfTruncate, { props: { content, position: 'middle' } });
    expect(wrapper.find(`.${styles.truncateStart}`).text()).toBe(content.slice(0, -7));
    expect(wrapper.find(`.${styles.truncateEnd}`).text()).toBe(content.slice(-7));

    await wrapper.setProps({ trailingNumChars: 10 });
    expect(wrapper.find(`.${styles.truncateEnd}`).text()).toBe(content.slice(-10));
  });

  it('renders the whole content when the trailing characters leave too little to truncate', () => {
    const wrapper = mount(PfTruncate, {
      props: { content: 'Short content', position: 'middle', trailingNumChars: 10 },
    });
    expect(wrapper.find(`.${styles.truncateStart}`).text()).toBe('Short content');
    expect(wrapper.find(`.${styles.truncateEnd}`).exists()).toBe(false);
  });

  it('renders a tooltip with the content and position, plus the tooltip attributes', async () => {
    const wrapper = mount(PfTruncate, {
      props: { content, tooltipPosition: 'bottom', tooltipAttrs: { id: 'tip' } },
      attachTo: document.body,
    });
    await flushPromises();
    const tooltip = wrapper.findComponent(PfTooltip);
    expect(tooltip.props('content')).toBe(content);
    expect(tooltip.props('position')).toBe('bottom');
    expect(tooltip.props('id')).toBe('tip');
    expect(tooltip.props('triggerRef')).toBe(wrapper.element);
    expect(wrapper.attributes('tabindex')).toBe('0');
  });

  it('does not focus the wrapper of a link or with an external trigger', async () => {
    const link = mount(PfTruncate, { props: { content, href: '#' } });
    expect(link.attributes('tabindex')).toBeUndefined();

    const trigger = document.createElement('button');
    const external = mount(PfTruncate, { props: { content, tooltipAttrs: { triggerRef: trigger } } });
    await flushPromises();
    expect(external.attributes('tabindex')).toBeUndefined();
    expect(external.findComponent(PfTooltip).props('triggerRef')).toBe(trigger);
  });

  it('forwards the attributes to the wrapper', () => {
    const wrapper = mount(PfTruncate, { props: { content }, attrs: { 'data-test': 'truncate' } });
    expect(wrapper.attributes('data-test')).toBe('truncate');
  });

  describe('with maxCharsDisplayed', () => {
    it('applies the fixed modifier only with a positive maxCharsDisplayed', () => {
      expect(mount(PfTruncate, { props: { content } }).classes()).not.toContain(styles.modifiers.fixed);
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      expect(mount(PfTruncate, { props: { content, maxCharsDisplayed: 0 } }).classes()).not.toContain(
        styles.modifiers.fixed,
      );
      expect(warn).toHaveBeenCalledWith(
        'Truncate: the maxCharsDisplayed must be greater than 0, otherwise no content will be visible.',
      );
      warn.mockRestore();
      expect(mount(PfTruncate, { props: { content, maxCharsDisplayed: 6 } }).classes()).toContain(
        styles.modifiers.fixed,
      );
    });

    it('hides the truncated content at the end by default', () => {
      const wrapper = mount(PfTruncate, {
        props: { content: 'Default end position content truncated', maxCharsDisplayed: 6 },
      });
      const children = Array.from((wrapper.element as HTMLElement).children).map(c => [c.className, c.textContent]);
      expect(children.slice(0, 3)).toEqual([
        [`${styles.truncate}__text`, 'Defaul'],
        [`${styles.truncate}__omission`, '…'],
        ['pf-v6-screen-reader', 't end position content truncated'],
      ]);
    });

    it('hides the truncated content in the middle', () => {
      const wrapper = mount(PfTruncate, {
        props: { content: 'Middle position contents being truncated', maxCharsDisplayed: 10, position: 'middle' },
      });
      const children = Array.from((wrapper.element as HTMLElement).children).map(c => c.textContent);
      expect(children.slice(0, 4)).toEqual(['Middl', '…', 'e position contents being trun', 'cated']);
    });

    it('hides the truncated content at the start', () => {
      const wrapper = mount(PfTruncate, {
        props: { content: 'Start position content truncated', maxCharsDisplayed: 6, position: 'start' },
      });
      const children = Array.from((wrapper.element as HTMLElement).children).map(c => c.textContent);
      expect(children.slice(0, 3)).toEqual(['Start position content tru', '…', 'ncated']);
    });

    it('renders the whole content without omission when it fits', () => {
      const wrapper = mount(PfTruncate, { props: { content: 'Full content', maxCharsDisplayed: 50 } });
      expect(wrapper.find(`.${styles.truncate}__text`).text()).toBe('Full content');
      expect(wrapper.find(`.${styles.truncate}__omission`).exists()).toBe(false);
      expect(wrapper.findComponent(PfTooltip).exists()).toBe(false);
    });

    it('renders a custom omission content', () => {
      const wrapper = mount(PfTruncate, { props: { content, maxCharsDisplayed: 6, omissionContent: '---' } });
      expect(wrapper.find(`.${styles.truncate}__omission`).text()).toBe('---');
    });
  });

  it('removes the tooltip when the content fits its container', async () => {
    vi.useFakeTimers();
    const parent = document.createElement('div');
    document.body.appendChild(parent);
    vi.spyOn(HTMLElement.prototype, 'scrollWidth', 'get').mockReturnValue(100);
    const style = vi.spyOn(window, 'getComputedStyle').mockReturnValue({ width: '500px' } as CSSStyleDeclaration);
    const wrapper = mount(PfTruncate, { props: { content }, attachTo: parent });
    await flushPromises();
    expect(wrapper.findComponent(PfTooltip).exists()).toBe(false);
    expect(wrapper.attributes('tabindex')).toBeUndefined();
    style.mockRestore();
    vi.useRealTimers();
    vi.restoreAllMocks();
    parent.remove();
  });
});
