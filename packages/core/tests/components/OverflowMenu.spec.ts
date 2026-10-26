import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';
import menuStyles from '@patternfly/react-styles/css/components/Menu/menu';
import PfMenu from '../../src/components/Menu/Menu.vue';
import PfOverflowMenu from '../../src/components/OverflowMenu/OverflowMenu.vue';
import PfOverflowMenuContent from '../../src/components/OverflowMenu/OverflowMenuContent.vue';
import PfOverflowMenuControl from '../../src/components/OverflowMenu/OverflowMenuControl.vue';
import PfOverflowMenuGroup from '../../src/components/OverflowMenu/OverflowMenuGroup.vue';
import PfOverflowMenuItem from '../../src/components/OverflowMenu/OverflowMenuItem.vue';
import PfOverflowMenuDropdownItem from '../../src/components/OverflowMenu/OverflowMenuDropdownItem.vue';
import { OverflowMenuIsBelowBreakpointKey } from '../../src/components/OverflowMenu/OverflowMenu.vue';

// happy-dom windows are 1024px wide: 'md' (768px) is above the breakpoint, 'xl' (1200px) is below it
function mountMenu(breakpoint: 'md' | 'xl', props: Record<string, unknown> = {}) {
  return mount(PfOverflowMenu, {
    props: { breakpoint, ...props },
    slots: {
      default: () => [
        h(PfOverflowMenuContent, () => [
          h(PfOverflowMenuGroup, { type: 'button' }, () => h(PfOverflowMenuItem, () => 'Item')),
          h(PfOverflowMenuItem, { persistent: true }, () => 'Persistent'),
        ]),
        h(PfOverflowMenuControl, () => 'Control'),
      ],
    },
  });
}

function provideBelow(below: boolean) {
  return { global: { provide: { [OverflowMenuIsBelowBreakpointKey as symbol]: ref(below) } } };
}

describe('OverflowMenu', () => {
  it('renders the root container', () => {
    const wrapper = mount(PfOverflowMenu, { props: { breakpoint: 'md' }, slots: { default: () => 'Content' } });

    expect(wrapper.classes()).toContain(styles.overflowMenu);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/OverflowMenu');
    expect(wrapper.text()).toBe('Content');
  });

  it('shows the content and hides the control above the breakpoint', () => {
    const wrapper = mountMenu('md');

    expect(wrapper.find(`.${styles.overflowMenuContent}`).exists()).toBe(true);
    expect(wrapper.findAll(`.${styles.overflowMenuItem}`)).toHaveLength(2);
    expect(wrapper.find(`.${styles.overflowMenuControl}`).exists()).toBe(false);
  });

  it('hides the content and shows the control below the breakpoint', () => {
    const wrapper = mountMenu('xl');

    expect(wrapper.find(`.${styles.overflowMenuContent}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.overflowMenuControl}`).text()).toBe('Control');
  });

  it('applies the vertical modifier', () => {
    const wrapper = mount(PfOverflowMenu, { props: { breakpoint: 'md', vertical: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.vertical);
  });

  it('follows the window height when vertical', async () => {
    const height = vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(2000);
    try {
      const wrapper = mountMenu('md', { vertical: true });
      window.dispatchEvent(new Event('resize'));
      await nextTick();
      expect(wrapper.find(`.${styles.overflowMenuControl}`).exists()).toBe(false);

      height.mockReturnValue(100);
      window.dispatchEvent(new Event('resize'));
      await nextTick();
      expect(wrapper.find(`.${styles.overflowMenuControl}`).exists()).toBe(true);
    } finally {
      height.mockRestore();
    }
  });

  it('warns when using the "sm" breakpoint with vertical', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      mount(PfOverflowMenu, { props: { breakpoint: 'sm', vertical: true } });
      expect(warn).toHaveBeenCalledWith('The "sm" breakpoint does not apply to vertical overflow menus.');
    } finally {
      warn.mockRestore();
    }
  });

  it('logs an error without a valid breakpoint', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      mount(PfOverflowMenu, { props: { breakpoint: undefined as unknown as 'md' } });
      expect(error).toHaveBeenCalledWith('OverflowMenu will not be visible without a valid breakpoint.');
    } finally {
      error.mockRestore();
    }
  });

  it.each([
    ['an element', (el: HTMLElement) => el],
    ['a function', (el: HTMLElement) => () => el],
    ['a ref', (el: HTMLElement) => ref(el)],
  ])('bases the breakpoint on the width of %s', async (_name, reference) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const width = vi.spyOn(container, 'clientWidth', 'get').mockReturnValue(300);
    try {
      // the window is wider than md, the container is not
      const wrapper = mountMenu('md', { breakpointReference: reference(container) });
      await nextTick();
      expect(wrapper.find(`.${styles.overflowMenuControl}`).exists()).toBe(true);
      expect(wrapper.find(`.${styles.overflowMenuContent}`).exists()).toBe(false);
    } finally {
      width.mockRestore();
      container.remove();
    }
  });

  it('exposes the breakpoint state to the default slot', () => {
    const wrapper = mount(PfOverflowMenu, {
      props: { breakpoint: 'xl' },
      slots: { default: (props: { belowBreakpoint: boolean }) => `below: ${props.belowBreakpoint}` },
    });
    expect(wrapper.text()).toBe('below: true');
  });

  it('reacts to window resizes', async () => {
    const wrapper = mountMenu('md');
    expect(wrapper.find(`.${styles.overflowMenuControl}`).exists()).toBe(false);

    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(500);
    window.dispatchEvent(new Event('resize'));
    await nextTick();
    expect(wrapper.find(`.${styles.overflowMenuControl}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.overflowMenuContent}`).exists()).toBe(false);
  });
});

describe('OverflowMenuContent', () => {
  it('renders above the breakpoint', () => {
    const wrapper = mount(PfOverflowMenuContent, { slots: { default: () => 'Content' } });
    expect(wrapper.classes()).toContain(styles.overflowMenuContent);
    expect(wrapper.text()).toBe('Content');
  });

  it('is hidden below the breakpoint unless persistent', () => {
    expect(mount(PfOverflowMenuContent, provideBelow(true)).find('div').exists()).toBe(false);
    expect(mount(PfOverflowMenuContent, { props: { persistent: true }, ...provideBelow(true) }).classes()).toContain(
      styles.overflowMenuContent,
    );
  });
});

describe('OverflowMenuControl', () => {
  it('is hidden above the breakpoint', () => {
    expect(mount(PfOverflowMenuControl).find('div').exists()).toBe(false);
  });

  it('is shown below the breakpoint or with additionalOptions', () => {
    expect(mount(PfOverflowMenuControl, provideBelow(true)).classes()).toContain(styles.overflowMenuControl);
    expect(mount(PfOverflowMenuControl, { props: { additionalOptions: true } }).classes()).toContain(
      styles.overflowMenuControl,
    );
  });
});

describe('OverflowMenuGroup', () => {
  it.each([
    ['button', styles.modifiers.buttonGroup],
    ['icon', styles.modifiers.iconButtonGroup],
  ] as const)('applies the %s group modifier', (type, modifier) => {
    const wrapper = mount(PfOverflowMenuGroup, { props: { type } });
    expect(wrapper.classes()).toContain(styles.overflowMenuGroup);
    expect(wrapper.classes()).toContain(modifier);
  });

  it('is hidden below the breakpoint unless persistent', () => {
    expect(mount(PfOverflowMenuGroup, provideBelow(true)).find('div').exists()).toBe(false);
    expect(mount(PfOverflowMenuGroup, { props: { persistent: true }, ...provideBelow(true) }).classes()).toContain(
      styles.overflowMenuGroup,
    );
  });
});

describe('OverflowMenuItem', () => {
  it('renders the item with its slot', () => {
    const wrapper = mount(PfOverflowMenuItem, { slots: { default: () => 'Item' } });
    expect(wrapper.classes()).toContain(styles.overflowMenuItem);
    expect(wrapper.text()).toBe('Item');
  });

  it('is hidden below the breakpoint unless persistent', () => {
    expect(mount(PfOverflowMenuItem, provideBelow(true)).find('div').exists()).toBe(false);
    expect(mount(PfOverflowMenuItem, { props: { persistent: true }, ...provideBelow(true) }).classes()).toContain(
      styles.overflowMenuItem,
    );
  });
});

describe('OverflowMenuDropdownItem', () => {
  function mountItem(props: Record<string, unknown>, below: boolean) {
    return mount(PfMenu, {
      slots: { default: () => h(PfOverflowMenuDropdownItem, props, () => 'Dropdown item') },
      ...provideBelow(below),
    });
  }

  // the item carried the class of the overflow menu control
  it('renders a menu item button', () => {
    const wrapper = mountItem({}, false);
    const li = wrapper.find(`li.${menuStyles.menuListItem}`);

    expect(li.classes()).not.toContain(styles.overflowMenuControl);
    expect(li.find(`button.${menuStyles.menuItem}`).text()).toBe('Dropdown item');
  });

  it('only renders shared items below the breakpoint', () => {
    expect(mountItem({ shared: true }, false).find('li').exists()).toBe(false);
    expect(mountItem({ shared: true }, true).find('li').exists()).toBe(true);
  });
});
