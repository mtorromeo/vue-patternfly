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
      default: () => h(PfDrawerContent, null, {
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

  it('expands with a delayed expanded modifier and hides the panel after the collapse animation', async () => {
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

    await wrapper.trigger('animationend');
    expect((panel.element as HTMLElement).style.display).toBe('none');
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

  // BUG: AutoWrap.vue:117 `force` never creates the wrapper when there are no children,
  // so DrawerContent (which relies on `force`) renders no drawer__content div when empty
  it.fails('renders the content div even without children', () => {
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
    const wrapper = mountDrawer({ expanded: true }, {
      id: 'panel',
      noBorder: true,
      colorVariant: 'secondary',
      defaultSize: '300px',
      minSize: '100px',
      maxSize: '600px',
    });

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

  it('applies the no-background color variant', () => {
    const wrapper = mountDrawer({}, { colorVariant: 'no-background' });
    expect(wrapper.find(`.${styles.drawerPanel}`).classes()).toContain(styles.modifiers.noBackground);
  });

  it('generates an id', () => {
    const wrapper = mountDrawer();
    expect(wrapper.find(`.${styles.drawerPanel}`).attributes('id')).toBeTruthy();
  });

  // BUG: DrawerPanelContent.vue declares a `widths` prop but never applies the width modifiers
  it.fails('applies width modifiers', () => {
    const wrapper = mountDrawer({}, { widths: { default: 'width_50', lg: 'width_33' } });
    const panel = wrapper.find(`.${styles.drawerPanel}`);
    expect(panel.classes()).toContain(styles.modifiers.width_50);
    expect(panel.classes()).toContain(styles.modifiers.width_33OnLg);
  });

  describe('resizable', () => {
    it('renders an accessible vertical splitter', () => {
      const wrapper = mountDrawer({ expanded: true }, { id: 'panel', resizable: true, resizeAriaLabel: 'Resize panel' });

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
      vi.spyOn(panel.element, 'getBoundingClientRect').mockReturnValue({ left: 500, right: 800, width: 300 } as DOMRect);

      await wrapper.find(`.${styles.drawerSplitter}`).trigger('mousedown');
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
});
