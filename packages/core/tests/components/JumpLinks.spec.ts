import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import PfJumpLinks from '../../src/components/JumpLinks/JumpLinks.vue';
import PfJumpLinksItem from '../../src/components/JumpLinks/JumpLinksItem.vue';
import PfJumpLinksList from '../../src/components/JumpLinks/JumpLinksList.vue';

function setOffsetTop(el: HTMLElement, top: number) {
  Object.defineProperty(el, 'offsetTop', { configurable: true, get: () => top });
}

/** Creates a scrollable container with sections at the given offsets */
function createScrollable(offsets: number[]) {
  const scrollable = document.createElement('div');
  scrollable.id = 'scrollable';
  const sections = offsets.map((top, i) => {
    const section = document.createElement('h2');
    section.id = `section-${i}`;
    section.textContent = `Section ${i}`;
    setOffsetTop(section, top);
    scrollable.appendChild(section);
    return section;
  });
  document.body.appendChild(scrollable);
  return { scrollable, sections };
}

async function scrollTo(scrollable: HTMLElement, top: number) {
  scrollable.scrollTop = top;
  scrollable.dispatchEvent(new Event('scroll'));
  await nextTick();
  await nextTick();
}

describe('JumpLinks', () => {
  it('renders a nav with a list', () => {
    const wrapper = mount(PfJumpLinks, {
      slots: { default: () => [h(PfJumpLinksItem, { href: '#a' }, () => 'A'), h(PfJumpLinksItem, { href: '#b' }, () => 'B')] },
    });

    expect(wrapper.element.tagName).toBe('NAV');
    expect(wrapper.classes()).toContain(styles.jumpLinks);
    expect(wrapper.classes()).not.toContain(styles.modifiers.center);
    expect(wrapper.classes()).not.toContain(styles.modifiers.vertical);
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    const list = wrapper.find(`.${styles.jumpLinksMain} ul.${styles.jumpLinksList}`);
    expect(list.attributes('role')).toBe('list');
    expect(list.findAll(`.${styles.jumpLinksItem}`)).toHaveLength(2);
    expect(wrapper.find(`.${styles.jumpLinksToggle}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.jumpLinksLabel}`).exists()).toBe(false);
  });

  it('applies the centered and vertical modifiers', () => {
    const wrapper = mount(PfJumpLinks, { props: { centered: true, vertical: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.center);
    expect(wrapper.classes()).toContain(styles.modifiers.vertical);
  });

  it('applies the expandable breakpoint modifiers', () => {
    const wrapper = mount(PfJumpLinks, { props: { expandable: 'expandable', expandableMd: 'nonExpandable' } });
    expect(wrapper.classes()).toContain(styles.modifiers.expandable);
    expect(wrapper.classes()).toContain(styles.modifiers.nonExpandableOnMd);
  });

  it('renders the label', () => {
    const wrapper = mount(PfJumpLinks, { slots: { label: () => 'Jump to section' } });
    expect(wrapper.find(`.${styles.jumpLinksLabel}`).text()).toBe('Jump to section');
  });

  it('renders an accessible toggle when expandable', () => {
    const wrapper = mount(PfJumpLinks, { props: { expandable: 'expandable' }, slots: { label: () => 'Jump to section' } });
    const button = wrapper.find(`.${styles.jumpLinksToggle} button`);
    expect(button.attributes('aria-label')).toBe('Toggle jump links');
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(button.text()).toBe('Jump to section');
    expect(button.find(`.${styles.jumpLinksToggleIcon} svg`).exists()).toBe(true);
  });

  it('hides the label next to the toggle unless alwaysShowLabel', () => {
    const wrapper = mount(PfJumpLinks, {
      props: { expandable: 'expandable', alwaysShowLabel: false },
      slots: { label: () => 'Jump to section' },
    });
    expect(wrapper.find(`.${styles.jumpLinksLabel}`).exists()).toBe(false);
  });

  it('uses a custom toggle aria label', () => {
    const wrapper = mount(PfJumpLinks, { props: { expandable: 'expandable', toggleAriaLabel: 'Toggle' } });
    expect(wrapper.find('button').attributes('aria-label')).toBe('Toggle');
  });

  it('toggles the expanded state', async () => {
    const wrapper = mount(PfJumpLinks, { props: { expandable: 'expandable' } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('true');
  });

  it('reflects the expanded model', async () => {
    const wrapper = mount(PfJumpLinks, { props: { expandable: 'expandable', expanded: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    await wrapper.setProps({ expanded: false });
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
  });

  it('does not render a toggle when nonExpandable', () => {
    const wrapper = mount(PfJumpLinks, { props: { expandable: 'nonExpandable' } });
    expect(wrapper.find(`.${styles.jumpLinksToggle}`).exists()).toBe(false);
  });

  it('renders a toggle when expandable only at some breakpoint', () => {
    const wrapper = mount(PfJumpLinks, { props: { expandable: 'nonExpandable', expandableMd: 'expandable' } });
    expect(wrapper.find(`.${styles.jumpLinksToggle}`).exists()).toBe(true);
  });

  it('generates links from the elements of the scrollable element', async () => {
    createScrollable([0, 500]);
    const wrapper = mount(PfJumpLinks, {
      props: { scrollableElement: '#scrollable', autoLinkFromElements: 'h2' },
      attachTo: document.body,
    });
    await nextTick();
    await nextTick();

    const items = wrapper.findAll(`.${styles.jumpLinksItem}`);
    expect(items.map(i => i.text())).toEqual(['Section 0', 'Section 1']);
    wrapper.unmount();
  });

  it('generates links from an array of elements', async () => {
    const { sections } = createScrollable([0, 500]);
    const wrapper = mount(PfJumpLinks, { props: { autoLinkFromElements: sections } });
    await nextTick();
    expect(wrapper.findAll(`.${styles.jumpLinksItem}`).map(i => i.text())).toEqual(['Section 0', 'Section 1']);
  });

  it('marks the last passed section as current while scrolling', async () => {
    const { scrollable } = createScrollable([0, 500, 1000]);
    const wrapper = mount(PfJumpLinks, {
      props: { scrollableElement: scrollable, offset: 0 },
      slots: {
        default: () => [
          h(PfJumpLinksItem, { href: '#section-0', node: '#section-0' }, () => 'Zero'),
          h(PfJumpLinksItem, { href: '#section-1', node: '#section-1' }, () => 'One'),
          h(PfJumpLinksItem, { href: '#section-2', node: '#section-2' }, () => 'Two'),
        ],
      },
      attachTo: document.body,
    });
    await nextTick();

    await scrollTo(scrollable, 600);
    let items = wrapper.findAll(`.${styles.jumpLinksItem}`);
    expect(items[1].classes()).toContain(styles.modifiers.current);
    expect(items[1].attributes('aria-current')).toBe('location');
    expect(items[0].classes()).not.toContain(styles.modifiers.current);
    expect(items[2].classes()).not.toContain(styles.modifiers.current);

    await scrollTo(scrollable, 1200);
    items = wrapper.findAll(`.${styles.jumpLinksItem}`);
    expect(items[2].classes()).toContain(styles.modifiers.current);
    expect(items[1].classes()).not.toContain(styles.modifiers.current);
    wrapper.unmount();
  });

  it('accounts for the offset when spying', async () => {
    const { scrollable } = createScrollable([0, 500]);
    const wrapper = mount(PfJumpLinks, {
      props: { scrollableElement: scrollable, offset: 100 },
      slots: {
        default: () => [
          h(PfJumpLinksItem, { node: '#section-0' }, () => 'Zero'),
          h(PfJumpLinksItem, { node: '#section-1' }, () => 'One'),
        ],
      },
      attachTo: document.body,
    });
    await nextTick();

    await scrollTo(scrollable, 450);
    expect(wrapper.findAll(`.${styles.jumpLinksItem}`)[1].classes()).toContain(styles.modifiers.current);
    wrapper.unmount();
  });

  it('removes the scroll listener when unmounted', async () => {
    const { scrollable } = createScrollable([0]);
    const spy = vi.spyOn(scrollable, 'removeEventListener');
    const wrapper = mount(PfJumpLinks, { props: { scrollableElement: scrollable } });
    await nextTick();
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});

describe('JumpLinksItem', () => {
  it('renders a list item with a link', () => {
    const wrapper = mount(PfJumpLinksItem, { props: { href: '#target' }, slots: { default: () => 'Target' } });

    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(styles.jumpLinksItem);
    expect(wrapper.classes()).not.toContain(styles.modifiers.current);
    expect(wrapper.attributes('aria-current')).toBeUndefined();
    const link = wrapper.find(`span.${styles.jumpLinksLink} a`);
    expect(link.attributes('href')).toBe('#target');
    expect(link.find(`.${styles.jumpLinksLinkText}`).text()).toBe('Target');
  });

  it('is current when active', () => {
    const wrapper = mount(PfJumpLinksItem, { props: { active: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.current);
    expect(wrapper.attributes('aria-current')).toBe('location');
  });

  it('keeps the implicit listitem role', () => {
    const wrapper = mount(PfJumpLinksItem);
    expect(wrapper.attributes('role')).toBeUndefined();
  });

  it('emits click', async () => {
    const wrapper = mount(PfJumpLinksItem, { props: { href: '#target' } });
    await wrapper.find('a').trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('exposes the resolved target node', () => {
    const target = document.createElement('section');
    const wrapper = mount(PfJumpLinksItem, { props: { node: target } });
    expect(wrapper.vm.target).toBe(target);
  });

  it('smoothly scrolls the scrollable element to the target on click', async () => {
    const { scrollable, sections } = createScrollable([0, 500]);
    const scrollToSpy = vi.fn();
    scrollable.scrollTo = scrollToSpy as any;

    const wrapper = mount(PfJumpLinks, {
      props: { scrollableElement: scrollable, offset: 50 },
      slots: { default: () => h(PfJumpLinksItem, { href: '#section-1', node: sections[1] }, () => 'One') },
      attachTo: document.body,
    });
    await nextTick();

    await wrapper.find('a').trigger('click');
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 450, behavior: 'smooth' });
    wrapper.unmount();
  });

  it('resolves selector nodes inside the scrollable element', async () => {
    const { scrollable, sections } = createScrollable([0, 500]);
    const wrapper = mount(PfJumpLinks, {
      props: { scrollableElement: scrollable },
      slots: { default: () => h(PfJumpLinksItem, { node: '#section-1' }, () => 'One') },
    });
    await nextTick();
    expect(wrapper.findComponent(PfJumpLinksItem).vm.target).toBe(sections[1]);
  });

  // BUG: the default slot (including nested JumpLinksList sub-lists) is rendered inside the link text span,
  // so sub-lists end up inside the <a> (src/components/JumpLinks/JumpLinksItem.vue:8-14).
  it.fails('renders nested lists outside of the link', () => {
    const wrapper = mount(PfJumpLinksItem, {
      slots: { default: () => ['Parent', h(PfJumpLinksList, () => h(PfJumpLinksItem, () => 'Child'))] },
    });
    expect(wrapper.find('a').find(`.${styles.jumpLinksList}`).exists()).toBe(false);
    expect(wrapper.find(`:scope > .${styles.jumpLinksList}`).exists()).toBe(true);
  });
});

describe('JumpLinksList', () => {
  it('renders a list', () => {
    const wrapper = mount(PfJumpLinksList, { slots: { default: () => h(PfJumpLinksItem, () => 'Child') } });
    expect(wrapper.element.tagName).toBe('UL');
    expect(wrapper.classes()).toContain(styles.jumpLinksList);
    expect(wrapper.attributes('role')).toBe('list');
    expect(wrapper.find(`.${styles.jumpLinksItem}`).exists()).toBe(true);
  });
});
