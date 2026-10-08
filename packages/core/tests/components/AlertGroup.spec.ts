import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { defineComponent, h, onMounted, ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Alert/alert-group';
import alertStyles from '@patternfly/react-styles/css/components/Alert/alert';
import PfAlert from '../../src/components/Alert/Alert.vue';
import PfAlertGroup from '../../src/components/Alert/AlertGroup.vue';
import PfAlertGroupInline from '../../src/components/Alert/AlertGroupInline.vue';

type AlertItem = { key: number; title: string; timeout?: number };

describe('AlertGroupInline', () => {
  it('renders a list with every alert wrapped in its own list item', () => {
    const wrapper = mount(PfAlertGroupInline, {
      slots: {
        default: () => [
          h(PfAlert, { title: 'One' }),
          h(PfAlert, { title: 'Two' }),
        ],
      },
    });

    const list = wrapper.find('ul');
    expect(list.classes()).toContain(styles.alertGroup);
    expect(list.classes()).not.toContain(styles.modifiers.toast);

    const items = list.findAll(':scope > li');
    expect(items).toHaveLength(2);
    expect(items[0]?.find(`.${alertStyles.alert}`).text()).toContain('One');
    expect(items[1]?.find(`.${alertStyles.alert}`).text()).toContain('Two');
  });

  it('flattens v-for fragments into list items', () => {
    const Host = defineComponent({
      setup() {
        const alerts = ['A', 'B', 'C'];
        return () => h(PfAlertGroupInline, null, {
          default: () => alerts.map(title => h(PfAlert, { key: title, title })),
        });
      },
    });
    const wrapper = mount(Host);

    expect(wrapper.findAll(`ul > li > .${alertStyles.alert}`)).toHaveLength(3);
  });

  it('applies the toast modifier and live region attributes', () => {
    const wrapper = mount(PfAlertGroupInline, { props: { toast: true, liveRegion: true } });

    const list = wrapper.find('ul');
    expect(list.classes()).toContain(styles.modifiers.toast);
    expect(list.attributes('aria-live')).toBe('polite');
    expect(list.attributes('aria-atomic')).toBe('false');
  });

  it('does not set live region attributes by default', () => {
    const wrapper = mount(PfAlertGroupInline);
    expect(wrapper.find('ul').attributes('aria-live')).toBeUndefined();
    expect(wrapper.find('ul').attributes('aria-atomic')).toBeUndefined();
  });

  it('renders the overflow message button and emits overflowClick', async () => {
    const wrapper = mount(PfAlertGroupInline, {
      props: { overflowMessage: 'View 3 more alerts' },
      slots: { default: () => h(PfAlert, { title: 'One' }) },
    });

    const button = wrapper.find(`.${styles.alertGroupOverflowButton}`);
    expect(button.text()).toBe('View 3 more alerts');
    expect(button.element.parentElement?.tagName).toBe('LI');

    await button.trigger('click');
    expect(wrapper.emitted('overflowClick')).toHaveLength(1);
  });

  it('does not render the overflow item without an overflow message', () => {
    const wrapper = mount(PfAlertGroupInline, { slots: { default: () => h(PfAlert, { title: 'One' }) } });
    expect(wrapper.find(`.${styles.alertGroupOverflowButton}`).exists()).toBe(false);
    expect(wrapper.findAll('li')).toHaveLength(1);
  });
});

describe('AlertGroup', () => {
  it('renders inline (not teleported) when not a toast', () => {
    const wrapper = mount(PfAlertGroup, {
      attachTo: document.body,
      slots: { default: () => h(PfAlert, { title: 'Inline' }) },
    });

    expect(wrapper.find(`ul.${styles.alertGroup}`).exists()).toBe(true);
    expect(wrapper.text()).toContain('Inline');
    wrapper.unmount();
  });

  it('teleports toast groups to the body by default', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const wrapper = mount(PfAlertGroup, {
      attachTo: container,
      props: { toast: true },
      slots: { default: () => h(PfAlert, { title: 'Toast' }) },
    });

    const group = document.body.querySelector(`:scope > ul.${styles.alertGroup}`);
    expect(group).not.toBeNull();
    expect(group?.classList.contains(styles.modifiers.toast)).toBe(true);
    expect(group?.textContent).toContain('Toast');
    expect(container.querySelector(`ul.${styles.alertGroup}`)).toBeNull();
    wrapper.unmount();
  });

  it('teleports toast groups to a custom appendTo target and forwards attributes', () => {
    const target = document.createElement('div');
    target.id = 'toast-target';
    document.body.appendChild(target);

    const wrapper = mount(PfAlertGroup, {
      attachTo: document.body,
      props: { toast: true, appendTo: '#toast-target', liveRegion: true },
      attrs: { 'data-testid': 'group' },
    });

    const group = target.querySelector(`ul.${styles.alertGroup}`);
    expect(group).not.toBeNull();
    expect(group?.getAttribute('aria-live')).toBe('polite');
    expect(group?.getAttribute('data-testid')).toBe('group');
    wrapper.unmount();
  });
});

// Regression tests for e0930b67: list items used to be keyed by index, so adding or removing an alert
// before existing ones caused those alerts to be re-mounted, restarting (or losing) their timeout timers.
describe('AlertGroup keeps existing alerts mounted (e0930b67)', () => {
  const mountCounts: Record<number, number> = {};

  const TrackedAlert = defineComponent({
    name: 'TrackedAlert',
    props: {
      alertKey: { type: Number, required: true },
      title: { type: String, required: true },
      timeout: { type: Number, default: undefined },
    },
    emits: ['timeout'],
    setup(props, { emit }) {
      onMounted(() => {
        mountCounts[props.alertKey] = (mountCounts[props.alertKey] ?? 0) + 1;
      });
      return () => h(PfAlert, {
        title: props.title,
        timeout: props.timeout,
        'data-key': props.alertKey,
        onTimeout: () => emit('timeout', props.alertKey),
      });
    },
  });

  function mountGroup(initial: AlertItem[], toast = false) {
    const alerts = ref<AlertItem[]>(initial);
    const timedOut: number[] = [];

    const Host = defineComponent({
      setup() {
        return () => h(PfAlertGroup, { toast }, {
          default: () => alerts.value.map(alert => h(TrackedAlert, {
            key: alert.key,
            alertKey: alert.key,
            title: alert.title,
            timeout: alert.timeout,
            onTimeout: (key: number) => {
              timedOut.push(key);
              alerts.value = alerts.value.filter(a => a.key !== key);
            },
          })),
        });
      },
    });

    const wrapper = mount(Host, { attachTo: document.body });
    const alertEl = (key: number) => wrapper.findComponent(PfAlertGroupInline).find(`[data-key="${key}"]`);
    return { wrapper, alerts, timedOut, alertEl };
  }

  beforeEach(() => {
    vi.useFakeTimers();
    for (const key of Object.keys(mountCounts)) {
      delete mountCounts[Number(key)];
    }
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('does not remount existing alerts when a new alert is prepended', async () => {
    const { wrapper, alerts, alertEl } = mountGroup([
      { key: 1, title: 'First' },
      { key: 2, title: 'Second' },
    ]);
    const first = alertEl(1).element;
    const second = alertEl(2).element;

    alerts.value = [{ key: 3, title: 'Third' }, ...alerts.value];
    await vi.advanceTimersByTimeAsync(0);

    expect(document.body.querySelectorAll(`.${alertStyles.alert}`)).toHaveLength(3);
    expect(alertEl(1).element).toBe(first);
    expect(alertEl(2).element).toBe(second);
    expect(mountCounts).toEqual({ 1: 1, 2: 1, 3: 1 });
    wrapper.unmount();
  });

  it('does not remount the remaining alerts when an earlier alert is removed', async () => {
    const { wrapper, alerts, alertEl } = mountGroup([
      { key: 1, title: 'First' },
      { key: 2, title: 'Second' },
      { key: 3, title: 'Third' },
    ]);
    const second = alertEl(2).element;
    const third = alertEl(3).element;

    alerts.value = alerts.value.filter(a => a.key !== 1);
    await vi.advanceTimersByTimeAsync(0);

    expect(document.body.querySelectorAll(`.${alertStyles.alert}`)).toHaveLength(2);
    expect(alertEl(2).element).toBe(second);
    expect(alertEl(3).element).toBe(third);
    expect(mountCounts).toEqual({ 1: 1, 2: 1, 3: 1 });
    wrapper.unmount();
  });

  it('keeps the timeout of existing alerts running when alerts are added', async () => {
    const { wrapper, alerts, timedOut, alertEl } = mountGroup([
      { key: 1, title: 'First', timeout: 1000 },
    ]);

    await vi.advanceTimersByTimeAsync(600);
    alerts.value = [{ key: 2, title: 'Second', timeout: 1000 }, ...alerts.value];
    await vi.advanceTimersByTimeAsync(0);

    // the first alert must be dismissed 1000ms after it was mounted, not 1000ms after the update
    await vi.advanceTimersByTimeAsync(400);
    expect(timedOut).toEqual([1]);
    expect(alertEl(1).exists()).toBe(false);
    expect(alertEl(2).exists()).toBe(true);

    await vi.advanceTimersByTimeAsync(600);
    expect(timedOut).toEqual([1, 2]);
    expect(document.body.querySelectorAll(`.${alertStyles.alert}`)).toHaveLength(0);
    wrapper.unmount();
  });

  it('dismisses every alert of a toast group automatically, oldest first', async () => {
    const { wrapper, alerts, timedOut } = mountGroup([], true);

    for (let key = 1; key <= 3; key++) {
      alerts.value = [{ key, title: `Alert ${key}`, timeout: 1000 }, ...alerts.value];
      await vi.advanceTimersByTimeAsync(100);
    }

    await vi.advanceTimersByTimeAsync(1000);
    expect(timedOut).toEqual([1, 2, 3]);
    expect(document.body.querySelectorAll(`.${alertStyles.alert}`)).toHaveLength(0);
    expect(mountCounts).toEqual({ 1: 1, 2: 1, 3: 1 });
    wrapper.unmount();
  });
});
