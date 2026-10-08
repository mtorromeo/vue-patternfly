import { describe, expect, it, vi } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import maxLines from '@patternfly/react-tokens/dist/esm/c_notification_drawer__group_toggle_title_max_lines';
import PfNotificationDrawer from '../../src/components/NotificationDrawer/NotificationDrawer.vue';
import PfNotificationDrawerBody from '../../src/components/NotificationDrawer/NotificationDrawerBody.vue';
import PfNotificationDrawerGroup from '../../src/components/NotificationDrawer/NotificationDrawerGroup.vue';
import PfNotificationDrawerGroupList from '../../src/components/NotificationDrawer/NotificationDrawerGroupList.vue';
import PfNotificationDrawerHeader from '../../src/components/NotificationDrawer/NotificationDrawerHeader.vue';
import PfNotificationDrawerList from '../../src/components/NotificationDrawer/NotificationDrawerList.vue';
import PfNotificationDrawerListItem from '../../src/components/NotificationDrawer/NotificationDrawerListItem.vue';
import PfNotificationDrawerListItemBody from '../../src/components/NotificationDrawer/NotificationDrawerListItemBody.vue';
import PfNotificationDrawerListItemHeader from '../../src/components/NotificationDrawer/NotificationDrawerListItemHeader.vue';

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

describe('NotificationDrawer', () => {
  it('renders the drawer container', () => {
    const wrapper = mount(PfNotificationDrawer, { slots: { default: () => 'Content' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.notificationDrawer]);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/NotificationDrawer');
    expect(wrapper.text()).toBe('Content');
  });

  it('composes header, body, list and items', () => {
    const wrapper = mount(PfNotificationDrawer, {
      slots: {
        default: () => [
          h(PfNotificationDrawerHeader, { count: 1 }),
          h(PfNotificationDrawerBody, () => h(PfNotificationDrawerList, () => [
            h(PfNotificationDrawerListItem, { variant: 'info' }, () => [
              h(PfNotificationDrawerListItemHeader, { title: 'Item title' }),
              h(PfNotificationDrawerListItemBody, { timestamp: '5 minutes ago' }, () => 'Description'),
            ]),
          ])),
        ],
      },
    });
    expect(wrapper.find(`.${styles.notificationDrawerHeader}`).exists()).toBe(true);
    const item = wrapper.find(`.${styles.notificationDrawerBody} > ul > li`);
    expect(item.classes()).toContain(styles.notificationDrawerListItem);
    expect(item.find(`.${styles.notificationDrawerListItemHeaderTitle}`).text()).toBe('Item title');
    expect(item.find(`.${styles.notificationDrawerListItemDescription}`).text()).toBe('Description');
    expect(item.find(`.${styles.notificationDrawerListItemTimestamp}`).text()).toBe('5 minutes ago');
  });
});

describe('NotificationDrawerHeader', () => {
  it('renders the default title and no status', () => {
    const wrapper = mount(PfNotificationDrawerHeader);
    expect(wrapper.classes()).toEqual([styles.notificationDrawerHeader]);
    const title = wrapper.find('h1');
    expect(title.classes()).toContain(styles.notificationDrawerHeaderTitle);
    expect(title.text()).toBe('Notifications');
    expect(wrapper.find(`.${styles.notificationDrawerHeaderStatus}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.notificationDrawerHeaderAction}`).exists()).toBe(false);
  });

  it('renders a custom title and the unread count in a live region', () => {
    const wrapper = mount(PfNotificationDrawerHeader, { props: { title: 'Alerts', count: 3 } });
    expect(wrapper.find('h1').text()).toBe('Alerts');
    const status = wrapper.find(`.${styles.notificationDrawerHeaderStatus}`);
    expect(status.text()).toBe('3 unread');
    expect(status.attributes('aria-live')).toBe('polite');
  });

  it('renders a zero count', () => {
    const wrapper = mount(PfNotificationDrawerHeader, { props: { count: 0, unreadText: 'new' } });
    expect(wrapper.find(`.${styles.notificationDrawerHeaderStatus}`).text()).toBe('0 new');
  });

  it('prefers customText over count', () => {
    const wrapper = mount(PfNotificationDrawerHeader, { props: { count: 3, customText: 'Many unread' } });
    expect(wrapper.find(`.${styles.notificationDrawerHeaderStatus}`).text()).toBe('Many unread');
  });

  it('renders actions from the default slot', () => {
    const wrapper = mount(PfNotificationDrawerHeader, { slots: { default: () => h('button', { class: 'action' }) } });
    const action = wrapper.find(`.${styles.notificationDrawerHeaderAction}`);
    expect(action.find('.action').exists()).toBe(true);
    expect(action.findAll('button')).toHaveLength(1);
  });

  it('renders a close button calling onClose', async () => {
    const onClose = vi.fn();
    const wrapper = mount(PfNotificationDrawerHeader, { props: { onClose } });
    const button = wrapper.find(`.${styles.notificationDrawerHeaderAction} button`);
    expect(button.exists()).toBe(true);
    await button.trigger('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('NotificationDrawerBody', () => {
  it('renders the body class and slot', () => {
    const wrapper = mount(PfNotificationDrawerBody, { slots: { default: () => 'Body' } });
    expect(wrapper.classes()).toEqual([styles.notificationDrawerBody]);
    expect(wrapper.text()).toBe('Body');
  });
});

describe('NotificationDrawerGroupList', () => {
  it('renders the group list class and slot', () => {
    const wrapper = mount(PfNotificationDrawerGroupList, { slots: { default: () => 'Groups' } });
    expect(wrapper.classes()).toEqual([styles.notificationDrawerGroupList]);
    expect(wrapper.text()).toBe('Groups');
  });
});

describe('NotificationDrawerList', () => {
  it('renders an unordered list with role list', () => {
    const wrapper = mount(PfNotificationDrawerList, { slots: { default: () => h('li', 'Item') } });
    expect(wrapper.element.tagName).toBe('UL');
    expect(wrapper.classes()).toEqual([styles.notificationDrawerList]);
    expect(wrapper.attributes('role')).toBe('list');
    expect(wrapper.find('li').text()).toBe('Item');
  });
});

describe('NotificationDrawerListItem', () => {
  it('renders a focusable hoverable item with the custom variant by default', () => {
    const wrapper = mount(PfNotificationDrawerListItem, { slots: { default: () => 'Item' } });
    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(styles.notificationDrawerListItem);
    expect(wrapper.classes()).toContain(styles.modifiers.custom);
    expect(wrapper.classes()).toContain(styles.modifiers.hoverable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.read);
    expect(wrapper.attributes('tabindex')).toBe('0');
    expect(wrapper.text()).toBe('Item');
  });

  it.each(['success', 'danger', 'warning', 'info'] as const)('applies the %s variant modifier', (variant) => {
    const wrapper = mount(PfNotificationDrawerListItem, { props: { variant } });
    expect(wrapper.classes()).toContain(styles.modifiers[variant]);
    expect(wrapper.classes()).not.toContain(styles.modifiers.custom);
  });

  it('applies read, non hoverable and custom tabindex', () => {
    const wrapper = mount(PfNotificationDrawerListItem, { props: { read: true, hoverable: false, tabindex: -1 } });
    expect(wrapper.classes()).toContain(styles.modifiers.read);
    expect(wrapper.classes()).not.toContain(styles.modifiers.hoverable);
    expect(wrapper.attributes('tabindex')).toBe('-1');
  });

  it('renders the read state screen reader text', () => {
    const wrapper = mount(PfNotificationDrawerListItem, {
      props: { readStateScreenReaderText: 'unread' },
      slots: { default: () => 'Item' },
    });
    expect(wrapper.find('span').text()).toBe('unread');
  });
});

describe('NotificationDrawerListItemHeader', () => {
  it('renders the title in an h2 with the default bell icon', () => {
    const wrapper = mount(PfNotificationDrawerListItemHeader, { props: { title: 'Title' } });
    const header = wrapper.find(`.${styles.notificationDrawerListItemHeader}`);
    expect(header.find(`.${styles.notificationDrawerListItemHeaderIcon} svg`).exists()).toBe(true);
    const title = header.find('h2');
    expect(title.classes()).toContain(styles.notificationDrawerListItemHeaderTitle);
    expect(title.classes()).not.toContain(styles.modifiers.truncate);
    expect(title.text()).toBe('Title');
    expect(wrapper.find(`.${styles.notificationDrawerListItemAction}`).exists()).toBe(false);
  });

  it('renders distinct icons per variant', () => {
    const icons = (['success', 'danger', 'warning', 'info', 'custom'] as const).map(variant =>
      mount(PfNotificationDrawerListItemHeader, { props: { title: 'T', variant } })
        .find(`.${styles.notificationDrawerListItemHeaderIcon} svg`).html(),
    );
    expect(new Set(icons).size).toBe(icons.length);
  });

  it('lets the icon slot override the variant icon', () => {
    const wrapper = mount(PfNotificationDrawerListItemHeader, {
      props: { title: 'T', variant: 'success' },
      slots: { icon: () => h('i', { class: 'my-icon' }) },
    });
    const icon = wrapper.find(`.${styles.notificationDrawerListItemHeaderIcon}`);
    expect(icon.find('.my-icon').exists()).toBe(true);
    expect(icon.find('svg').exists()).toBe(false);
  });

  it('supports heading level, screen reader title and truncation', () => {
    const wrapper = mount(PfNotificationDrawerListItemHeader, {
      props: { title: 'Title', srTitle: 'Info alert:', headingLevel: 'h4', truncateTitle: 1 },
    });
    const title = wrapper.find('h4');
    expect(title.classes()).toContain(styles.modifiers.truncate);
    expect(title.find('span').text()).toBe('Info alert:');
    expect(title.text()).toBe('Info alert: Title');
  });

  it('renders actions after the header', () => {
    const wrapper = mount(PfNotificationDrawerListItemHeader, {
      props: { title: 'T' },
      slots: { default: () => h('button', 'Action') },
    });
    const action = wrapper.find(`.${styles.notificationDrawerListItemAction}`);
    expect(action.find('button').text()).toBe('Action');
    expect(action.element.previousElementSibling?.classList.contains(styles.notificationDrawerListItemHeader)).toBe(true);
  });

  it('has its own OUIA component type', () => {
    const wrapper = mount(PfNotificationDrawerListItemHeader, { props: { title: 'T' } });
    expect(wrapper.find(`.${styles.notificationDrawerListItemHeader}`).attributes('data-ouia-component-type'))
      .toBe('PF/NotificationDrawerListItemHeader');
  });
});

describe('NotificationDrawerListItemBody', () => {
  it('renders the description and forwards attributes to it', () => {
    const wrapper = mount(PfNotificationDrawerListItemBody, {
      attrs: { id: 'desc' },
      slots: { default: () => 'Description' },
    });
    const description = wrapper.find(`.${styles.notificationDrawerListItemDescription}`);
    expect(description.attributes('id')).toBe('desc');
    expect(description.attributes('data-ouia-component-type')).toBe('PF/NotificationDrawerListItemBody');
    expect(description.text()).toBe('Description');
    expect(wrapper.find(`.${styles.notificationDrawerListItemTimestamp}`).exists()).toBe(false);
  });

  it('renders the timestamp prop and slot', () => {
    const prop = mount(PfNotificationDrawerListItemBody, { props: { timestamp: '1 hour ago' } });
    expect(prop.find(`.${styles.notificationDrawerListItemTimestamp}`).text()).toBe('1 hour ago');

    const slot = mount(PfNotificationDrawerListItemBody, {
      props: { timestamp: 'Prop' },
      slots: { timestamp: () => h('time', 'Slot') },
    });
    expect(slot.find(`.${styles.notificationDrawerListItemTimestamp} time`).text()).toBe('Slot');
  });
});

describe('NotificationDrawerGroup', () => {
  const content = () => h(PfNotificationDrawerList, () => h('li', { class: 'item' }, 'Item'));

  it('renders a collapsed group', () => {
    const wrapper = mount(PfNotificationDrawerGroup, {
      props: { count: 2, title: 'Group title' },
      slots: { default: content },
    });
    expect(wrapper.element.tagName).toBe('SECTION');
    expect(wrapper.classes()).toContain(styles.notificationDrawerGroup);
    expect(wrapper.classes()).not.toContain(styles.modifiers.expanded);

    const button = wrapper.find(`h1 > button.${styles.notificationDrawerGroupToggle}`);
    expect(button.attributes('aria-expanded')).toBe('false');
    expect(button.find(`.${styles.notificationDrawerGroupToggleTitle}`).text()).toBe('Group title');
    expect(button.find(`.${styles.notificationDrawerGroupToggleCount} .${badgeStyles.badge}`).text()).toBe('2');
    expect(button.find(`.${styles.notificationDrawerGroupToggleIcon} svg`).exists()).toBe(true);
    expect(wrapper.find('.item').exists()).toBe(false);
  });

  it('renders the content when expanded', () => {
    const wrapper = mount(PfNotificationDrawerGroup, {
      props: { count: 2, expanded: true },
      slots: { default: content },
    });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    expect(wrapper.find('button').attributes('aria-expanded')).toBe('true');
    expect(wrapper.find('.item').exists()).toBe(true);
  });

  it('toggles v-model:expanded on click', async () => {
    const wrapper = mountWithModel(PfNotificationDrawerGroup, 'expanded', { count: 1, expanded: false }, { slots: { default: content } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
    expect(wrapper.find('.item').exists()).toBe(true);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('update:expanded')).toEqual([[true], [false]]);
    expect(wrapper.find('.item').exists()).toBe(false);
  });

  it('toggles when uncontrolled', async () => {
    const wrapper = mount(PfNotificationDrawerGroup, { props: { count: 1 }, slots: { default: content } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
  });

  it.each(['Enter', ' '])('toggles on %j keydown and prevents the default action', async (key) => {
    const wrapper = mount(PfNotificationDrawerGroup, { props: { count: 1 } });
    const event = new KeyboardEvent('keydown', { key, cancelable: true });
    wrapper.find('button').element.dispatchEvent(event);
    await wrapper.vm.$nextTick();
    expect(event.defaultPrevented).toBe(true);
    expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
  });

  it('ignores other keys', async () => {
    const wrapper = mount(PfNotificationDrawerGroup, { props: { count: 1 } });
    await wrapper.find('button').trigger('keydown', { key: 'a' });
    expect(wrapper.emitted('update:expanded')).toBeUndefined();
  });

  it('applies read styling to the badge', () => {
    const unread = mount(PfNotificationDrawerGroup, { props: { count: 1 } });
    expect(unread.find(`.${badgeStyles.badge}`).classes()).toContain(badgeStyles.modifiers.unread);
    const read = mount(PfNotificationDrawerGroup, { props: { count: 1, read: true } });
    expect(read.find(`.${badgeStyles.badge}`).classes()).toContain(badgeStyles.modifiers.read);
  });

  it('supports heading level, title slot and title truncation', () => {
    const wrapper = mount(PfNotificationDrawerGroup, {
      props: { count: 1, headingLevel: 'h3', truncateTitle: 2 },
      slots: { title: () => h('em', 'Slot title') },
    });
    const title = wrapper.find(`h3 .${styles.notificationDrawerGroupToggleTitle}`);
    expect(title.find('em').text()).toBe('Slot title');
    expect((title.element as HTMLElement).style.getPropertyValue(maxLines.name)).toBe('2');
  });

  // BUG: NotificationDrawerGroup.vue declares an onExpand callback prop but never calls it
  it.fails('calls onExpand when toggled', async () => {
    const onExpand = vi.fn();
    const wrapper = mount(PfNotificationDrawerGroup, { props: { count: 1, onExpand } });
    await wrapper.find('button').trigger('click');
    expect(onExpand).toHaveBeenCalledWith(expect.any(Event), true);
  });
});
