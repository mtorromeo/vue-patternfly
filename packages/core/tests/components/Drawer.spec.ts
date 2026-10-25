import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import cssPanelMdFlexBasis from '@patternfly/react-tokens/dist/esm/c_drawer__panel_md_FlexBasis';
import cssPanelMdFlexBasisMin from '@patternfly/react-tokens/dist/esm/c_drawer__panel_md_FlexBasis_min';
import cssPanelMdFlexBasisMax from '@patternfly/react-tokens/dist/esm/c_drawer__panel_md_FlexBasis_max';
import PfDrawer from '../../src/components/Drawer/Drawer.vue';
import PfDrawerActions from '../../src/components/Drawer/DrawerActions.vue';
import PfDrawerCloseButton from '../../src/components/Drawer/DrawerCloseButton.vue';
import PfDrawerContent from '../../src/components/Drawer/DrawerContent.vue';
import PfDrawerContentBody from '../../src/components/Drawer/DrawerContentBody.vue';
import PfDrawerHead from '../../src/components/Drawer/DrawerHead.vue';
import PfDrawerMain from '../../src/components/Drawer/DrawerMain.vue';
import PfDrawerPanelBody from '../../src/components/Drawer/DrawerPanelBody.vue';
import PfDrawerPanelContent from '../../src/components/Drawer/DrawerPanelContent.vue';
import PfDrawerPanelDescription from '../../src/components/Drawer/DrawerPanelDescription.vue';
import PfDrawerSection from '../../src/components/Drawer/DrawerSection.vue';

/** Mounts a drawer with a content body and a panel (with the given panel props) */
function mountDrawer(drawerProps: Record<string, unknown> = {}, panelProps: Record<string, unknown> = {}) {
  return mount(PfDrawer, {
    props: drawerProps,
    slots: {
      default: () =>
        h(PfDrawerContent, null, {
          default: () => h(PfDrawerContentBody, () => 'Main content'),
          content: () => h(PfDrawerPanelContent, panelProps, () => h(PfDrawerHead, () => 'Panel')),
        }),
    },
  });
}

describe('Drawer', () => {
  it('renders the drawer structure collapsed by default', () => {
    const wrapper = mountDrawer();

    expect(wrapper.classes()).toContain(styles.drawer);
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Drawer');

    const main = wrapper.find(`.${styles.drawerMain}`);
    expect(main.find(`.${styles.drawerContent} .${styles.drawerBody}`).text()).toBe('Main content');
    const panel = main.find(`.${styles.drawerPanel}`);
    expect(panel.attributes('hidden')).toBeDefined();
    expect((panel.element as HTMLElement).style.display).toBe('none');
  });

  it('applies position, inline and static modifiers', () => {
    const start = mountDrawer({ position: 'start', inline: true });
    expect(start.classes()).toContain(styles.modifiers.panelLeft);
    expect(start.classes()).toContain(styles.modifiers.inline);

    const bottom = mountDrawer({ position: 'bottom', static: true });
    expect(bottom.classes()).toContain(styles.modifiers.panelBottom);
    expect(bottom.classes()).toContain(styles.modifiers.static);
    expect(bottom.classes()).not.toContain(styles.modifiers.panelLeft);
  });

  it('applies the viewport modifier', () => {
    expect(mountDrawer({ viewport: true }).classes()).toContain(styles.modifiers.viewport);
    expect(mountDrawer().classes()).not.toContain(styles.modifiers.viewport);
  });

  it('shows the panel when initially expanded', () => {
    const wrapper = mountDrawer({ expanded: true });

    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    const panel = wrapper.find(`.${styles.drawerPanel}`);
    expect(panel.attributes('hidden')).toBeUndefined();
    expect((panel.element as HTMLElement).style.display).toBe('inherit');
  });

  it('shows the panel of a static drawer', () => {
    const wrapper = mountDrawer({ static: true });
    expect(wrapper.find(`.${styles.drawerPanel}`).attributes('hidden')).toBeUndefined();
  });

  it('expands with a delayed expanded modifier and hides the panel after the collapse transition', async () => {
    vi.useFakeTimers();
    const wrapper = mountDrawer();
    const panel = wrapper.find(`.${styles.drawerPanel}`);

    await wrapper.setProps({ expanded: true });
    expect(panel.attributes('hidden')).toBeUndefined();
    expect((panel.element as HTMLElement).style.display).toBe('inherit');
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);

    vi.advanceTimersByTime(50);
    await nextTick();
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);

    await wrapper.setProps({ expanded: false });
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);
    expect(panel.attributes('hidden')).toBeDefined();
    expect((panel.element as HTMLElement).style.display).toBe('inherit');

    // the drawer CSS has no animation: the panel is collapsed by the end of its transform transition
    await panel.trigger('transitionend', { propertyName: 'opacity' });
    expect((panel.element as HTMLElement).style.display).toBe('inherit');
    await panel.trigger('transitionend', { propertyName: 'transform' });
    expect((panel.element as HTMLElement).style.display).toBe('none');
  });

  it('applies the pill modifier and is OUIA safe by default', () => {
    const wrapper = mountDrawer({ pill: true });
    expect(wrapper.classes()).toContain(styles.modifiers.pill);
    expect(wrapper.attributes('data-ouia-safe')).toBe('true');
    expect(mountDrawer().classes()).not.toContain(styles.modifiers.pill);
  });

  it('emits expand when the panel transform transition ends while expanded', async () => {
    const wrapper = mountDrawer({ expanded: true });
    const panel = wrapper.find(`.${styles.drawerPanel}`);

    await panel.find(`.${styles.drawerHead}`).trigger('transitionend', { propertyName: 'transform' });
    await panel.trigger('transitionend', { propertyName: 'opacity' });
    expect(wrapper.emitted('expand')).toBeUndefined();

    await panel.trigger('transitionend', { propertyName: 'transform' });
    expect(wrapper.emitted('expand')).toHaveLength(1);
    expect(wrapper.emitted('expand')?.[0]?.[0]).toBeInstanceOf(Event);
    expect((panel.element as HTMLElement).style.display).toBe('inherit');

    await wrapper.setProps({ expanded: false });
    await panel.trigger('transitionend', { propertyName: 'transform' });
    expect(wrapper.emitted('expand')).toHaveLength(1);
  });

  it('auto wraps children in DrawerContent but keeps sections outside', () => {
    const wrapper = mount(PfDrawer, {
      props: { expanded: true },
      slots: {
        default: () => [
          h(PfDrawerSection, () => 'Section'),
          h(PfDrawerContentBody, () => 'Body'),
          h(PfDrawerPanelContent, () => 'Panel'),
        ],
      },
    });

    const children = Array.from((wrapper.element as HTMLElement).children);
    expect(children[0]?.classList.contains(styles.drawerSection)).toBe(true);
    expect(children[1]?.classList.contains(styles.drawerMain)).toBe(true);

    const main = wrapper.find(`.${styles.drawerMain}`);
    expect(main.find(`.${styles.drawerContent}`).text()).toBe('Body');
    expect(main.find(`.${styles.drawerContent} .${styles.drawerPanel}`).exists()).toBe(false);
    expect(main.find(`.${styles.drawerPanel}`).text()).toBe('Panel');
  });
});

describe('DrawerContent', () => {
  it('wraps the default slot in a content div and renders the content slot next to it', () => {
    const wrapper = mountDrawer();

    const main = wrapper.find(`.${styles.drawerMain}`);
    const children = Array.from(main.element.children);
    expect(children[0]?.classList.contains(styles.drawerContent)).toBe(true);
    expect(children[1]?.classList.contains(styles.drawerPanel)).toBe(true);
  });

  it.each([
    ['primary', styles.modifiers.primary],
    ['secondary', styles.modifiers.secondary],
  ] as const)('applies the %s color variant to the content', (colorVariant, modifier) => {
    const wrapper = mount(PfDrawer, {
      slots: { default: () => h(PfDrawerContent, { colorVariant }, () => 'Body') },
    });
    expect(wrapper.find(`.${styles.drawerContent}`).classes()).toContain(modifier);
  });

  it('renders the content div even without children', () => {
    const wrapper = mount(PfDrawer, { slots: { default: () => h(PfDrawerContent) } });
    expect(wrapper.find(`.${styles.drawerMain} .${styles.drawerContent}`).exists()).toBe(true);
  });
});

describe('DrawerPanelContent', () => {
  it('throws when used outside a drawer', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    expect(() => mount(PfDrawerPanelContent)).toThrow('DrawerPanelContent can only be used inside Drawer components');
  });

  it('applies modifiers, id and size variables', () => {
    const wrapper = mountDrawer(
      { expanded: true },
      {
        id: 'panel',
        noBorder: true,
        colorVariant: 'secondary',
        defaultSize: '300px',
        minSize: '100px',
        maxSize: '600px',
      },
    );

    const panel = wrapper.find(`.${styles.drawerPanel}`);
    expect(panel.attributes('id')).toBe('panel');
    expect(panel.classes()).toContain(styles.modifiers.noBorder);
    expect(panel.classes()).toContain(styles.modifiers.secondary);
    expect(panel.classes()).not.toContain(styles.modifiers.resizable);
    const style = (panel.element as HTMLElement).style;
    expect(style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('300px');
    expect(style.getPropertyValue(cssPanelMdFlexBasisMin.name)).toBe('100px');
    expect(style.getPropertyValue(cssPanelMdFlexBasisMax.name)).toBe('600px');
    expect(panel.find(`.${styles.drawerSplitter}`).exists()).toBe(false);
  });

  it('applies the noGlass, glass, plain and noPlainOnGlass modifiers', () => {
    const panel = mountDrawer({}, { noGlass: true, glass: true, plain: true, noPlainOnGlass: true }).find(
      `.${styles.drawerPanel}`,
    );
    expect(panel.classes()).toContain('pf-m-no-glass');
    expect(panel.classes()).toContain(styles.modifiers.glass);
    expect(panel.classes()).toContain(styles.modifiers.plain);
    expect(panel.classes()).toContain(styles.modifiers.noPlainOnGlass);

    const plainPanel = mountDrawer().find(`.${styles.drawerPanel}`);
    expect(plainPanel.classes()).not.toContain('pf-m-no-glass');
    expect(plainPanel.classes()).not.toContain(styles.modifiers.glass);
    expect(plainPanel.classes()).not.toContain(styles.modifiers.plain);
  });

  describe('focus trap', () => {
    it('renders the panel as a modal dialog labelled by its id', () => {
      const wrapper = mountDrawer({ expanded: true }, { id: 'panel', focusTrap: true });

      const panel = wrapper.find(`.${styles.drawerPanel}`);
      expect(panel.attributes('role')).toBe('dialog');
      expect(panel.attributes('aria-modal')).toBe('true');
      expect(panel.attributes('tabindex')).toBe('-1');
      expect(panel.attributes('aria-labelledby')).toBe('panel');
      expect(panel.attributes('id')).toBe('panel');
    });

    it('lets aria-labelledby be overridden', () => {
      const panel = mountDrawer({ expanded: true }, { focusTrap: true, 'aria-labelledby': 'title' }).find(
        `.${styles.drawerPanel}`,
      );
      expect(panel.attributes('aria-labelledby')).toBe('title');
    });

    it('activates the trap at the end of the expand transition and deactivates it after collapsing', async () => {
      const wrapper = mountDrawer({ expanded: true }, { focusTrap: true });
      const panel = wrapper.find(`.${styles.drawerPanel}`);
      const trap = wrapper.findComponent({ name: 'PfFocusTrap' });
      expect(trap.props('active')).toBe(false);

      await panel.trigger('transitionend', { propertyName: 'transform' });
      expect(trap.props('active')).toBe(true);

      await wrapper.setProps({ expanded: false });
      await panel.trigger('transitionend', { propertyName: 'transform' });
      expect(trap.props('active')).toBe(false);
    });

    it('is disabled with a warning on a static drawer', () => {
      const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const wrapper = mountDrawer({ static: true }, { focusTrap: true });

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('permanent focus trap'));
      expect(wrapper.findComponent({ name: 'PfFocusTrap' }).exists()).toBe(false);
      expect(wrapper.find(`.${styles.drawerPanel}`).attributes('role')).toBeUndefined();
      warn.mockRestore();
    });

    it('is not rendered without the focusTrap prop', () => {
      const wrapper = mountDrawer({ expanded: true });
      expect(wrapper.findComponent({ name: 'PfFocusTrap' }).exists()).toBe(false);
      expect(wrapper.find(`.${styles.drawerPanel}`).attributes('role')).toBeUndefined();
    });
  });

  it('applies the no-background color variant', () => {
    const wrapper = mountDrawer({}, { colorVariant: 'no-background' });
    expect(wrapper.find(`.${styles.drawerPanel}`).classes()).toContain(styles.modifiers.noBackground);
  });

  it('generates an id', () => {
    const wrapper = mountDrawer();
    expect(wrapper.find(`.${styles.drawerPanel}`).attributes('id')).toBeTruthy();
  });

  it('applies width modifiers', () => {
    const wrapper = mountDrawer({}, { widths: { default: 'width_50', lg: 'width_33' } });
    const panel = wrapper.find(`.${styles.drawerPanel}`);
    expect(panel.classes()).toContain(styles.modifiers.width_50);
    expect(panel.classes()).toContain(styles.modifiers.width_33OnLg);
  });

  describe('resizable', () => {
    it('renders an accessible vertical splitter', () => {
      const wrapper = mountDrawer(
        { expanded: true },
        { id: 'panel', resizable: true, resizeAriaLabel: 'Resize panel' },
      );

      const panel = wrapper.find(`.${styles.drawerPanel}`);
      expect(panel.classes()).toContain(styles.modifiers.resizable);
      const splitter = panel.find(`.${styles.drawerSplitter}`);
      expect(splitter.classes()).toContain(styles.modifiers.vertical);
      expect(splitter.attributes('role')).toBe('separator');
      expect(splitter.attributes('tabindex')).toBe('0');
      expect(splitter.attributes('aria-orientation')).toBe('vertical');
      expect(splitter.attributes('aria-label')).toBe('Resize panel');
      expect(splitter.attributes('aria-valuemin')).toBe('0');
      expect(splitter.attributes('aria-valuemax')).toBe('100');
      expect(splitter.attributes('aria-valuenow')).toBe('0');
      expect(splitter.find(`.${styles.drawerSplitterHandle}`).attributes('aria-hidden')).toBe('true');
      expect(splitter.attributes('aria-controls')).toBe('panel');
      expect(splitter.find(`.${styles.drawerSplitterHandle}`).exists()).toBe(true);
      expect(panel.find(`.${styles.drawerPanelMain}`).text()).toBe('Panel');
    });

    it('uses a horizontal splitter at the bottom', () => {
      const wrapper = mountDrawer({ expanded: true, position: 'bottom' }, { resizable: true });

      const splitter = wrapper.find(`.${styles.drawerSplitter}`);
      expect(splitter.classes()).not.toContain(styles.modifiers.vertical);
      expect(splitter.attributes('aria-orientation')).toBe('horizontal');
      expect(splitter.attributes('aria-label')).toBe('Resize');
      expect((wrapper.find(`.${styles.drawerPanel}`).element as HTMLElement).style.overflowAnchor).toBe('none');
    });

    it('resizes with the keyboard and emits resize on Enter', async () => {
      const wrapper = mountDrawer({ expanded: true }, { id: 'panel', resizable: true, increment: 10 });
      const panelContent = wrapper.findComponent(PfDrawerPanelContent);
      const panel = wrapper.find(`.${styles.drawerPanel}`);
      vi.spyOn(panel.element, 'getBoundingClientRect').mockReturnValue({ width: 200, height: 100 } as DOMRect);
      const splitter = wrapper.find(`.${styles.drawerSplitter}`);

      await splitter.trigger('keydown', { key: 'ArrowLeft' });
      expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('210px');

      await splitter.trigger('keydown', { key: 'ArrowRight' });
      expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('190px');

      await splitter.trigger('keydown', { key: 'Enter' });
      expect(panelContent.emitted('resize')?.[0]).toEqual([190, 'panel']);
    });

    it.each([
      [false, '30'],
      [true, '65'],
    ])('measures the splitter position against the drawer when viewport is %s', async (viewport, valueNow) => {
      const wrapper = mountDrawer({ expanded: true, viewport }, { resizable: true });
      const rect = (left: number, right: number) =>
        ({ left, right, top: 0, bottom: 0, width: right - left }) as DOMRect;
      vi.spyOn(wrapper.element, 'getBoundingClientRect').mockReturnValue(rect(0, 2000));
      vi.spyOn(wrapper.find(`.${styles.drawerContent}`).element, 'getBoundingClientRect').mockReturnValue(
        rect(0, 1000),
      );
      vi.spyOn(wrapper.find(`.${styles.drawerPanel}`).element, 'getBoundingClientRect').mockReturnValue(
        rect(700, 1000),
      );
      const splitter = wrapper.find(`.${styles.drawerSplitter}`);
      vi.spyOn(splitter.element, 'getBoundingClientRect').mockReturnValue(rect(700, 704));

      await splitter.trigger('keydown', { key: 'ArrowLeft' });
      expect(splitter.attributes('aria-valuenow')).toBe(valueNow);
    });

    it('inverts horizontal arrows when the panel is at the start', async () => {
      const wrapper = mountDrawer({ expanded: true, position: 'start' }, { resizable: true });
      const panel = wrapper.find(`.${styles.drawerPanel}`);
      vi.spyOn(panel.element, 'getBoundingClientRect').mockReturnValue({ width: 200, height: 100 } as DOMRect);

      await wrapper.find(`.${styles.drawerSplitter}`).trigger('keydown', { key: 'ArrowRight' });
      expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('205px');
    });

    it('resizes with the mouse, toggling the resizing modifier on the drawer', async () => {
      const wrapper = mountDrawer({ expanded: true }, { id: 'panel', resizable: true });
      const panelContent = wrapper.findComponent(PfDrawerPanelContent);
      const panel = wrapper.find(`.${styles.drawerPanel}`);
      vi.spyOn(panel.element, 'getBoundingClientRect').mockReturnValue({
        left: 500,
        right: 800,
        width: 300,
      } as DOMRect);

      await wrapper.find(`.${styles.drawerSplitter}`).trigger('mousedown', { clientX: 500 });
      expect(wrapper.classes()).toContain(styles.modifiers.resizing);

      document.dispatchEvent(new MouseEvent('mousemove', { clientX: 400 }));
      await nextTick();
      expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('400px');

      document.dispatchEvent(new MouseEvent('mouseup'));
      await nextTick();
      expect(wrapper.classes()).not.toContain(styles.modifiers.resizing);
      expect(panelContent.emitted('resize')).toEqual([[400, 'panel']]);

      document.dispatchEvent(new MouseEvent('mousemove', { clientX: 300 }));
      await nextTick();
      expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('400px');
    });

    it('measures each touch drag from the panel size at its start', async () => {
      const wrapper = mountDrawer({ expanded: true }, { id: 'panel', resizable: true });
      const panelContent = wrapper.findComponent(PfDrawerPanelContent);
      const panel = wrapper.find(`.${styles.drawerPanel}`);
      const rect = vi.spyOn(panel.element, 'getBoundingClientRect');
      const splitter = wrapper.find(`.${styles.drawerSplitter}`);
      const touch = (type: string, clientX: number) =>
        Object.assign(new Event(type, { bubbles: true, cancelable: true }), { touches: [{ clientX }] });

      rect.mockReturnValue({ left: 500, right: 800, width: 300 } as DOMRect);
      splitter.element.dispatchEvent(touch('touchstart', 500));
      document.dispatchEvent(touch('touchmove', 400));
      document.dispatchEvent(touch('touchend', 400));
      await nextTick();
      expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('400px');

      // the page scrolled: a new drag is measured from where the panel is now, not where the first drag found it
      rect.mockReturnValue({ left: 300, right: 700, width: 400 } as DOMRect);
      splitter.element.dispatchEvent(touch('touchstart', 300));
      document.dispatchEvent(touch('touchmove', 250));
      document.dispatchEvent(touch('touchend', 250));
      await nextTick();
      expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe('450px');
      expect(panelContent.emitted('resize')).toEqual([
        [400, 'panel'],
        [450, 'panel'],
      ]);
    });

    describe('in a right to left layout', () => {
      function mockRTL() {
        const getComputedStyle = window.getComputedStyle;
        return vi.spyOn(window, 'getComputedStyle').mockImplementation(el => {
          const style = getComputedStyle(el);
          return Object.assign(Object.create(style), {
            getPropertyValue: (name: string) => (name === 'direction' ? 'rtl' : style.getPropertyValue(name)),
          });
        });
      }

      it.each([
        ['end', 600],
        ['start', 200],
      ] as const)('inverts the mouse drag of a panel at the %s', async (position, size) => {
        const spy = mockRTL();
        const wrapper = mountDrawer({ expanded: true, position }, { resizable: true });
        const panel = wrapper.find(`.${styles.drawerPanel}`);
        vi.spyOn(panel.element, 'getBoundingClientRect').mockReturnValue({ width: 400 } as DOMRect);

        await wrapper.find(`.${styles.drawerSplitter}`).trigger('mousedown', { clientX: 500 });
        document.dispatchEvent(new MouseEvent('mousemove', { clientX: 700 }));
        document.dispatchEvent(new MouseEvent('mouseup'));
        await nextTick();
        expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe(`${size}px`);
        spy.mockRestore();
      });

      it.each([
        ['end', 'ArrowLeft', '195px'],
        ['end', 'ArrowRight', '205px'],
        ['start', 'ArrowLeft', '205px'],
        ['start', 'ArrowRight', '195px'],
      ] as const)('resizes a panel at the %s with %s', async (position, key, size) => {
        const spy = mockRTL();
        const wrapper = mountDrawer({ expanded: true, position }, { resizable: true });
        const panel = wrapper.find(`.${styles.drawerPanel}`);
        vi.spyOn(panel.element, 'getBoundingClientRect').mockReturnValue({ width: 200, height: 100 } as DOMRect);

        await wrapper.find(`.${styles.drawerSplitter}`).trigger('keydown', { key });
        expect((panel.element as HTMLElement).style.getPropertyValue(cssPanelMdFlexBasis.name)).toBe(size);
        spy.mockRestore();
      });
    });
  });
});

describe('DrawerHead', () => {
  it('renders the head class and slot', () => {
    const wrapper = mount(PfDrawerHead, {
      slots: { default: () => [h('span', 'Title'), h(PfDrawerActions, () => h(PfDrawerCloseButton))] },
    });

    expect(wrapper.classes()).toContain(styles.drawerHead);
    expect(wrapper.find('span').text()).toBe('Title');
    expect(wrapper.find(`.${styles.drawerActions} .${styles.drawerClose} button`).exists()).toBe(true);
  });
});

describe('DrawerActions', () => {
  it('renders the actions class and slot', () => {
    const wrapper = mount(PfDrawerActions, { slots: { default: () => 'Actions' } });
    expect(wrapper.classes()).toContain(styles.drawerActions);
    expect(wrapper.text()).toBe('Actions');
  });
});

describe('DrawerCloseButton', () => {
  it('renders a plain button with an icon that emits close', async () => {
    const wrapper = mount(PfDrawerCloseButton, { props: { ariaLabel: 'Close drawer' } });

    expect(wrapper.classes()).toContain(styles.drawerClose);
    const button = wrapper.find('button');
    expect(button.classes()).toContain(buttonStyles.modifiers.plain);
    expect(button.attributes('aria-label')).toBe('Close drawer');
    expect(button.find(`.${buttonStyles.buttonIcon} svg`).exists()).toBe(true);

    await button.trigger('click');
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it('labels the close button by default', () => {
    expect(mount(PfDrawerCloseButton).find('button').attributes('aria-label')).toBe('Close drawer panel');
  });

  it('passes buttonProps to the close button without overriding the close handler', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfDrawerCloseButton, {
      props: { buttonProps: { id: 'close-btn', 'aria-label': 'Dismiss', onClick } as Record<string, unknown> },
    });

    const button = wrapper.find('button');
    expect(button.attributes('id')).toBe('close-btn');
    expect(button.attributes('aria-label')).toBe('Dismiss');

    await button.trigger('click');
    expect(wrapper.emitted('close')).toHaveLength(1);
    expect(onClick).not.toHaveBeenCalled();
  });
});

describe('DrawerContentBody', () => {
  it('renders the body class and padding modifier', async () => {
    const wrapper = mount(PfDrawerContentBody, { slots: { default: () => 'Body' } });

    expect(wrapper.classes()).toContain(styles.drawerBody);
    expect(wrapper.classes()).not.toContain(styles.modifiers.padding);
    expect(wrapper.text()).toBe('Body');

    await wrapper.setProps({ padding: true });
    expect(wrapper.classes()).toContain(styles.modifiers.padding);
  });
});

describe('DrawerPanelBody', () => {
  it('renders the body class and noPadding modifier', async () => {
    const wrapper = mount(PfDrawerPanelBody, { slots: { default: () => 'Body' } });

    expect(wrapper.classes()).toContain(styles.drawerBody);
    expect(wrapper.classes()).not.toContain(styles.modifiers.noPadding);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/DrawerPanelBody');

    await wrapper.setProps({ noPadding: true });
    expect(wrapper.classes()).toContain(styles.modifiers.noPadding);
  });
});

describe('DrawerPanelDescription', () => {
  it('renders the description class and slot', () => {
    const wrapper = mount(PfDrawerPanelDescription, { slots: { default: () => 'Description' } });
    expect(wrapper.classes()).toContain(styles.drawerDescription);
    expect(wrapper.text()).toBe('Description');
  });
});

describe('DrawerMain', () => {
  it('renders the main class and slot', () => {
    const wrapper = mount(PfDrawerMain, { slots: { default: () => 'Main' } });
    expect(wrapper.classes()).toContain(styles.drawerMain);
    expect(wrapper.text()).toBe('Main');
  });
});

describe('DrawerSection', () => {
  it('renders the section class with color variants', async () => {
    const wrapper = mount(PfDrawerSection, { slots: { default: () => 'Section' } });

    expect(wrapper.classes()).toEqual([styles.drawerSection]);
    expect(wrapper.text()).toBe('Section');

    await wrapper.setProps({ colorVariant: 'secondary' });
    expect(wrapper.classes()).toContain(styles.modifiers.secondary);

    await wrapper.setProps({ colorVariant: 'no-background' });
    expect(wrapper.classes()).toContain(styles.modifiers.noBackground);
  });

  it('applies the plain modifier', () => {
    const wrapper = mount(PfDrawerSection, { props: { plain: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.plain);
  });
});
