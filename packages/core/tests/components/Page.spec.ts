import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Page/page';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import drawerStyles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { globalHeightBreakpoints, globalWidthBreakpoints } from '../../src/constants';
import PfPage from '../../src/components/Page/Page.vue';
import PfPageBreadcrumb from '../../src/components/Page/PageBreadcrumb.vue';
import PfPageGroup from '../../src/components/Page/PageGroup.vue';
import PfPageSection from '../../src/components/Page/PageSection.vue';
import PfPageSidebar from '../../src/components/Page/PageSidebar.vue';
import PfPageSidebarBody from '../../src/components/Page/PageSidebarBody.vue';
import PfPageToggleButton from '../../src/components/Page/PageToggleButton.vue';

function mountWithModel<C>(component: C, model: string, props: Record<string, unknown>, options: Record<string, unknown> = {}) {
  const wrapper: VueWrapper<any> = mount(component as any, {
    ...options,
    props: {
      ...props,
      [`onUpdate:${model}`]: (v: unknown) => wrapper.setProps({ [model]: v }),
    },
  });
  return wrapper;
}

function setWindowWidth(width: number) {
  (window as any).happyDOM.setViewport({ width });
}

const desktopWidth = globalWidthBreakpoints.xl + 100;
const mobileWidth = globalWidthBreakpoints.md;

afterEach(() => {
  setWindowWidth(1024);
  vi.unstubAllGlobals();
});

const pageRoot = (wrapper: VueWrapper<any>) => wrapper.find(`.${styles.page}`);
const sidebar = (wrapper: VueWrapper<any>) => wrapper.find(`.${styles.pageSidebar}`);
const sidebarExpanded = (wrapper: VueWrapper<any>) => sidebar(wrapper).classes().includes(styles.modifiers.expanded);

function mountManagedPage(props: Record<string, unknown> = {}) {
  return mount(PfPage, {
    props: { managedSidebar: true, ...props },
    slots: {
      masthead: () => h('header', { class: 'masthead' }, h(PfPageToggleButton)),
      sidebar: () => h(PfPageSidebar, () => 'Nav'),
      default: () => h(PfPageSection, () => 'Content'),
    },
  });
}

describe('Page', () => {
  describe('rendering', () => {
    it('renders the page structure', () => {
      const wrapper = mount(PfPage, { slots: { default: () => 'Content' } });
      const root = pageRoot(wrapper);
      expect(root.exists()).toBe(true);
      expect(root.attributes('data-ouia-component-type')).toBe('PF/Page');
      expect(root.classes()).toContain(styles.modifiers.noSidebar);
      expect(root.classes()).not.toContain(styles.modifiers.docked);

      const container = root.find(`.${styles.pageMainContainer}`);
      expect(container.classes()).not.toContain(styles.modifiers.fill);
      const main = container.find(`.${styles.pageMain}`);
      expect(main.element.tagName).toBe('MAIN');
      expect(main.text()).toBe('Content');
      expect(wrapper.find(`.${styles.pageDrawer}`).exists()).toBe(false);
    });

    it('applies main element attributes', () => {
      const wrapper = mount(PfPage, {
        props: { mainComponent: 'div', mainContainerId: 'main-id', role: 'main', mainTabIndex: -1, mainAriaLabel: 'Main content', contentFilled: true },
      });
      expect(wrapper.find(`.${styles.pageMainContainer}`).classes()).toContain(styles.modifiers.fill);
      const main = wrapper.find(`.${styles.pageMain}`);
      expect(main.element.tagName).toBe('DIV');
      expect(main.attributes('id')).toBe('main-id');
      expect(main.attributes('role')).toBe('main');
      expect(main.attributes('tabindex')).toBe('-1');
      expect(main.attributes('aria-label')).toBe('Main content');
    });

    it('forwards attributes to the page root', () => {
      const wrapper = mount(PfPage, { attrs: { id: 'page', class: 'extra' } });
      expect(pageRoot(wrapper).attributes('id')).toBe('page');
      expect(pageRoot(wrapper).classes()).toContain('extra');
    });

    it('renders skip-to-content, masthead and sidebar slots in order', async () => {
      const wrapper = mount(PfPage, {
        slots: {
          'skip-to-content': () => h('a', { class: 'skip' }),
          masthead: () => h('header', { class: 'masthead' }),
          sidebar: () => h(PfPageSidebar, { sidebarOpen: true }),
          default: () => 'Content',
        },
      });
      const children = [...pageRoot(wrapper).element.children].map(c => c.className.split(' ')[0]);
      expect(children).toEqual(['skip', 'masthead', styles.pageSidebar, styles.pageMainContainer]);
      // sidebars register themselves on mount
      await nextTick();
      expect(pageRoot(wrapper).classes()).not.toContain(styles.modifiers.noSidebar);
    });

    it('renders the docked variant with the dock content', () => {
      const wrapper = mount(PfPage, {
        props: { variant: 'docked', dockExpanded: true, dockTextExpanded: true },
        slots: { 'dock-content': () => h('nav', { class: 'dock-nav' }) },
      });
      expect(pageRoot(wrapper).classes()).toContain(styles.modifiers.docked);
      const dock = wrapper.find(`.${styles.pageDock}`);
      expect(dock.classes()).toContain(styles.modifiers.expanded);
      expect(dock.classes()).toContain(styles.modifiers.textExpanded);
      expect(dock.find(`.${styles.pageDockMain} .dock-nav`).exists()).toBe(true);
    });

    it('does not render the dock for the default variant', () => {
      const wrapper = mount(PfPage, { slots: { 'dock-content': () => h('nav') } });
      expect(wrapper.find(`.${styles.pageDock}`).exists()).toBe(false);
    });

    it('renders the main container inside a drawer when the drawer slot is used', () => {
      const wrapper = mount(PfPage, {
        props: { drawerExpanded: true },
        slots: { default: () => 'Content', drawer: () => h('div', { class: 'drawer-content' }) },
      });
      const pageDrawer = wrapper.find(`.${styles.pageDrawer}`);
      expect(pageDrawer.exists()).toBe(true);
      const drawer = pageDrawer.find(`.${drawerStyles.drawer}`);
      expect(drawer.classes()).toContain(drawerStyles.modifiers.expanded);
      expect(drawer.find(`.${drawerStyles.drawerContent} .${styles.pageMain}`).text()).toBe('Content');
      expect(drawer.find(`.${drawerStyles.drawerPanel} .drawer-content`).exists()).toBe(true);
    });
  });

  describe('size', () => {
    it('emits pageResize on mount and on window resize', async () => {
      setWindowWidth(desktopWidth);
      const wrapper = mount(PfPage);
      expect(wrapper.emitted('pageResize')).toEqual([[{ mobileView: false, windowSize: desktopWidth }]]);

      setWindowWidth(mobileWidth);
      await nextTick();
      expect(wrapper.emitted('pageResize')?.[1]).toEqual([{ mobileView: true, windowSize: mobileWidth }]);
    });

    it('applies breakpoint classes from the observed element size', async () => {
      const width = globalWidthBreakpoints.lg + 10;
      const height = globalHeightBreakpoints.md + 10;
      vi.stubGlobal('ResizeObserver', class {
        constructor(private cb: ResizeObserverCallback) {}
        observe() {
          this.cb([{ contentBoxSize: [{ inlineSize: width, blockSize: height }] } as unknown as ResizeObserverEntry], this as unknown as ResizeObserver);
        }
        unobserve() {}
        disconnect() {}
      });
      const wrapper = mount(PfPage);
      await nextTick();
      const root = pageRoot(wrapper);
      expect(root.classes()).toContain('pf-m-resize-observer');
      expect(root.classes()).toContain('pf-m-breakpoint-lg');
      expect(root.classes()).toContain('pf-m-height-breakpoint-md');
    });
  });

  describe('managed sidebar', () => {
    it('opens the sidebar by default on desktop and toggles it', async () => {
      setWindowWidth(desktopWidth);
      const wrapper = mountManagedPage();
      expect(sidebarExpanded(wrapper)).toBe(true);

      await wrapper.find('.masthead button').trigger('click');
      expect(sidebarExpanded(wrapper)).toBe(false);
      expect(sidebar(wrapper).classes()).toContain(styles.modifiers.collapsed);
    });

    it('respects defaultManagedSidebarOpen', () => {
      setWindowWidth(desktopWidth);
      const wrapper = mountManagedPage({ defaultManagedSidebarOpen: false });
      expect(sidebarExpanded(wrapper)).toBe(false);
    });

    it('starts closed on mobile and closes when clicking the main area', async () => {
      setWindowWidth(mobileWidth);
      const wrapper = mountManagedPage();
      expect(sidebarExpanded(wrapper)).toBe(false);

      await wrapper.find('.masthead button').trigger('click');
      expect(sidebarExpanded(wrapper)).toBe(true);

      await wrapper.find(`.${styles.pageMain}`).trigger('click');
      expect(sidebarExpanded(wrapper)).toBe(false);
    });

    it('does not close the sidebar when clicking the main area on desktop', async () => {
      setWindowWidth(desktopWidth);
      const wrapper = mountManagedPage();
      await wrapper.find(`.${styles.pageMain}`).trigger('click');
      expect(sidebarExpanded(wrapper)).toBe(true);
    });

    it('keeps separate mobile and desktop states', async () => {
      setWindowWidth(desktopWidth);
      const wrapper = mountManagedPage();
      expect(sidebarExpanded(wrapper)).toBe(true);

      setWindowWidth(mobileWidth);
      await nextTick();
      expect(sidebarExpanded(wrapper)).toBe(false);

      setWindowWidth(desktopWidth);
      await nextTick();
      expect(sidebarExpanded(wrapper)).toBe(true);
    });

    it('exposes navToggle', async () => {
      setWindowWidth(desktopWidth);
      const wrapper = mountManagedPage();
      (wrapper.vm as unknown as { navToggle: () => void }).navToggle();
      await nextTick();
      expect(sidebarExpanded(wrapper)).toBe(false);
    });
  });
});

describe('PageSidebar', () => {
  it('renders a collapsed sidebar by default', () => {
    const wrapper = mount(PfPageSidebar, { slots: { default: () => 'Nav' } });
    expect(wrapper.classes()).toContain(styles.pageSidebar);
    expect(wrapper.classes()).toContain(styles.modifiers.collapsed);
    expect(wrapper.attributes('id')).toBe('page-sidebar');
    expect(wrapper.find(`.${styles.pageSidebarMain} > .${styles.pageSidebarBody}`).text()).toBe('Nav');
  });

  it('does not wrap an explicit sidebar body in another body', () => {
    const wrapper = mount(PfPageSidebar, { slots: { default: () => h(PfPageSidebarBody, { insets: true }, () => 'Nav') } });
    const bodies = wrapper.findAll(`.${styles.pageSidebarBody}`);
    expect(bodies).toHaveLength(1);
    expect(bodies[0].classes()).toContain(styles.modifiers.pageInsets);
    expect(bodies[0].text()).toBe('Nav');
  });

  it('is expanded with sidebarOpen and accepts a custom id', () => {
    const wrapper = mount(PfPageSidebar, { props: { sidebarOpen: true, id: 'side' } });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.classes()).not.toContain(styles.modifiers.collapsed);
    expect(wrapper.attributes('id')).toBe('side');
  });

  it('uses the sidebarOpen prop when the page does not manage the sidebar', async () => {
    const wrapper = mount(PfPage, { slots: { sidebar: () => h(PfPageSidebar, { sidebarOpen: false }) } });
    expect(sidebarExpanded(wrapper)).toBe(false);
  });
});

describe('PageSidebarBody', () => {
  it('renders the sidebar body with modifiers', () => {
    const wrapper = mount(PfPageSidebarBody, { props: { insets: true, filled: true }, slots: { default: () => 'Body' } });
    expect(wrapper.classes()).toContain(styles.pageSidebarBody);
    expect(wrapper.classes()).toContain(styles.modifiers.pageInsets);
    expect(wrapper.classes()).toContain(styles.modifiers.fill);
    expect(wrapper.classes()).not.toContain(styles.modifiers.noFill);
    expect(wrapper.text()).toBe('Body');
  });

  it('applies no fill modifiers by default', () => {
    const wrapper = mount(PfPageSidebarBody);
    expect(wrapper.classes()).not.toContain(styles.modifiers.fill);
    expect(wrapper.classes()).not.toContain(styles.modifiers.noFill);
    expect(wrapper.classes()).not.toContain(styles.modifiers.pageInsets);
  });

  it('applies no-fill when filled is false', () => {
    const wrapper = mount(PfPageSidebarBody, { props: { filled: false } });
    expect(wrapper.classes()).toContain(styles.modifiers.noFill);
    expect(wrapper.classes()).not.toContain(styles.modifiers.fill);
  });

  it('renders a single sidebar body element', () => {
    const wrapper = mount(PfPageSidebarBody, { slots: { default: () => 'Body' } });
    expect(wrapper.findAll(`.${styles.pageSidebarBody}`)).toHaveLength(1);
  });
});

describe('PageToggleButton', () => {
  it('renders a plain button with an accessible label', () => {
    const wrapper = mount(PfPageToggleButton, { slots: { default: () => h('i', { class: 'icon' }) } });
    const button = wrapper.find('button');
    expect(button.classes()).toContain(buttonStyles.button);
    expect(button.classes()).toContain(buttonStyles.modifiers.plain);
    expect(button.attributes('id')).toBe('nav-toggle');
    expect(button.attributes('aria-label')).toBe('Side navigation toggle');
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(button.find('.icon').exists()).toBe(true);
  });

  it('supports v-model:sidebarOpen when unmanaged', async () => {
    const wrapper = mountWithModel(PfPageToggleButton, 'sidebarOpen', { sidebarOpen: false });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:sidebarOpen')).toEqual([[true]]);
    expect(wrapper.props('sidebarOpen')).toBe(true);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:sidebarOpen')).toEqual([[true], [false]]);
  });

  it('reflects the open state in aria-expanded for non hamburger toggles', () => {
    const wrapper = mount(PfPageToggleButton, { props: { sidebarOpen: true } });
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('true');
  });

  it('reflects the managed sidebar state in aria-expanded for hamburger toggles', async () => {
    setWindowWidth(desktopWidth);
    const wrapper = mount(PfPage, {
      props: { managedSidebar: true },
      slots: {
        masthead: () => h(PfPageToggleButton, { hamburger: true }),
        sidebar: () => h(PfPageSidebar),
      },
    });
    const button = wrapper.find(`.${buttonStyles.button}`);
    expect(button.attributes('aria-expanded')).toBe('true');
    await button.trigger('click');
    expect(button.attributes('aria-expanded')).toBe('false');
  });

  it('renders a hamburger button', () => {
    const wrapper = mount(PfPageToggleButton, { props: { hamburger: true, sidebarOpen: true } });
    const button = wrapper.find('button');
    expect(button.classes()).toContain(buttonStyles.modifiers.hamburger);
    expect(button.find(`.${buttonStyles.buttonHamburgerIcon}`).exists()).toBe(true);
    expect(button.attributes('aria-expanded')).toBe('true');
  });

  it('does not emit when managed by the page', async () => {
    setWindowWidth(desktopWidth);
    const wrapper = mountManagedPage();
    await wrapper.find('.masthead button').trigger('click');
    expect(wrapper.findComponent(PfPageToggleButton).emitted('update:sidebarOpen')).toBeUndefined();
  });
});

describe('PageSection', () => {
  it('renders a section by default', () => {
    const wrapper = mount(PfPageSection, { slots: { default: () => 'Content' } });
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toEqual([styles.pageMainSection]);
    expect(wrapper.text()).toBe('Content');
    expect(wrapper.attributes('tabindex')).toBeUndefined();
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/PageSection');
  });

  it.each([
    ['subnav', styles.pageMainSubnav],
    ['breadcrumb', styles.pageMainBreadcrumb],
    ['tabs', styles.pageMainTabs],
    ['wizard', styles.pageMainWizard],
  ] as const)('applies the %s type class', (type, cls) => {
    const wrapper = mount(PfPageSection, { props: { type } });
    expect(wrapper.classes()).toContain(cls);
    expect(wrapper.classes()).not.toContain(styles.pageMainSection);
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfPageSection, { props: { component: 'div' } });
    expect(wrapper.element.tagName).toBe('DIV');
  });

  it('applies variant, fill, shadow and overflow modifiers', () => {
    const wrapper = mount(PfPageSection, {
      props: { variant: 'secondary', filled: true, shadowTop: true, shadowBottom: true, overflowScroll: true },
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.secondary,
      styles.modifiers.fill,
      styles.modifiers.shadowTop,
      styles.modifiers.shadowBottom,
      styles.modifiers.overflowScroll,
    ]));
    expect(wrapper.attributes('tabindex')).toBe('0');
  });

  it('applies no-fill only when filled is explicitly false', () => {
    expect(mount(PfPageSection).classes()).not.toContain(styles.modifiers.noFill);
    expect(mount(PfPageSection, { props: { filled: false } }).classes()).toContain(styles.modifiers.noFill);
  });

  it('applies padding and sticky breakpoint modifiers', () => {
    const wrapper = mount(PfPageSection, { props: { padding: 'no-padding', paddingMd: 'padding', sticky: 'top', stickyLg: 'bottom' } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.noPadding,
      styles.modifiers.paddingOnMd,
      styles.modifiers.stickyTop,
      styles.modifiers.stickyBottomOnLgHeight,
    ]));
  });

  it('wraps the content in a body when width limited', () => {
    const wrapper = mount(PfPageSection, { props: { widthLimited: true, centerAligned: true }, slots: { default: () => 'Content' } });
    expect(wrapper.classes()).toContain(styles.modifiers.limitWidth);
    expect(wrapper.classes()).toContain(styles.modifiers.alignCenter);
    expect(wrapper.find(`.${styles.pageMainBody}`).text()).toBe('Content');
  });

  it('sets the max width variable and limits the width', () => {
    const wrapper = mount(PfPageSection, { props: { maxWidth: '500px' } });
    expect(wrapper.classes()).toContain(styles.modifiers.limitWidth);
    expect((wrapper.element as HTMLElement).style.getPropertyValue('--pf-v6-c-page--section--m-limit-width--MaxWidth')).toBe('500px');
  });

  it('does not center align without width limit or for subnav', () => {
    expect(mount(PfPageSection, { props: { centerAligned: true } }).classes()).not.toContain(styles.modifiers.alignCenter);
    expect(mount(PfPageSection, { props: { centerAligned: true, widthLimited: true, type: 'subnav' } }).classes())
      .not.toContain(styles.modifiers.alignCenter);
  });
});

describe('PageGroup', () => {
  it('renders the group with no-fill by default', () => {
    const wrapper = mount(PfPageGroup, { slots: { default: () => 'Group' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.pageMainGroup);
    expect(wrapper.classes()).toContain(styles.modifiers.noFill);
    expect(wrapper.attributes('tabindex')).toBeUndefined();
    expect(wrapper.attributes('role')).toBeUndefined();
    expect(wrapper.text()).toBe('Group');
  });

  it('applies fill, plain and shadow modifiers', () => {
    const wrapper = mount(PfPageGroup, { props: { filled: true, plain: true, noPlainOnGlass: true, shadowTop: true, shadowBottom: true } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.fill,
      styles.modifiers.plain,
      styles.modifiers.noPlainOnGlass,
      styles.modifiers.shadowTop,
      styles.modifiers.shadowBottom,
    ]));
    expect(wrapper.classes()).not.toContain(styles.modifiers.noFill);
  });

  it('is a focusable region when overflow scroll', () => {
    const wrapper = mount(PfPageGroup, { props: { overflowScroll: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.overflowScroll);
    expect(wrapper.attributes('tabindex')).toBe('0');
    expect(wrapper.attributes('role')).toBe('region');
  });

  it.each([
    ['top', false, styles.modifiers.stickyTopBase],
    ['bottom', false, styles.modifiers.stickyBottomBase],
    ['top', true, styles.modifiers.stickyTopStuck],
    ['bottom', true, styles.modifiers.stickyBottomStuck],
  ] as const)('applies sticky base %s (stuck: %s)', (stickyBase, stickyStuck, cls) => {
    const wrapper = mount(PfPageGroup, { props: { stickyBase, stickyStuck } });
    expect(wrapper.classes()).toContain(cls);
  });

  it('applies sticky breakpoint modifiers', () => {
    const wrapper = mount(PfPageGroup, { props: { sticky: 'bottom', stickyXl: 'top' } });
    expect(wrapper.classes()).toContain(styles.modifiers.stickyBottom);
    expect(wrapper.classes()).toContain(styles.modifiers.stickyTopOnXlHeight);
  });
});

describe('PageBreadcrumb', () => {
  it('renders a breadcrumb section', () => {
    const wrapper = mount(PfPageBreadcrumb, { slots: { default: () => 'Crumbs' } });
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toEqual([styles.pageMainBreadcrumb]);
    expect(wrapper.text()).toBe('Crumbs');
    expect(wrapper.find(`.${styles.pageMainBody}`).exists()).toBe(false);
  });

  it('applies shadow, overflow and sticky modifiers', () => {
    const wrapper = mount(PfPageBreadcrumb, { props: { shadowTop: true, shadowBottom: true, overflowScroll: true, sticky: 'top' } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      styles.modifiers.shadowTop,
      styles.modifiers.shadowBottom,
      styles.modifiers.overflowScroll,
      styles.modifiers.stickyTop,
    ]));
    expect(wrapper.attributes('tabindex')).toBe('0');
  });

  it('limits the width', () => {
    const wrapper = mount(PfPageBreadcrumb, { props: { maxWidth: '300px' }, slots: { default: () => 'Crumbs' } });
    expect(wrapper.classes()).toContain(styles.modifiers.limitWidth);
    expect(wrapper.find(`.${styles.pageMainBody}`).text()).toBe('Crumbs');
    expect((wrapper.element as HTMLElement).style.getPropertyValue('--pf-v6-c-page--section--m-limit-width--MaxWidth')).toBe('300px');
  });
});
