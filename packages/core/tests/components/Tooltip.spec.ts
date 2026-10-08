import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import PfTooltip from '../../src/components/Tooltip/Tooltip.vue';
import PfTooltipArrow from '../../src/components/Tooltip/TooltipArrow.vue';
import PfTooltipContent from '../../src/components/Tooltip/TooltipContent.vue';

enableAutoUnmount(afterEach);

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

async function mountTooltip(props: Record<string, unknown> = {}, slots: Record<string, () => unknown> = {}) {
  const wrapper = mountWithModel(PfTooltip, 'visible', { animationDuration: 0, ...props }, {
    slots: {
      default: () => h('button', { class: 'trigger' }, 'Trigger'),
      content: () => 'Tooltip text',
      ...slots,
    },
    attachTo: document.body,
  });
  await flushPromises();
  return wrapper;
}

function trigger() {
  return document.body.querySelector<HTMLButtonElement>('.trigger')!;
}

function tooltip() {
  return document.body.querySelector<HTMLElement>('[role="tooltip"]');
}

describe('Tooltip', () => {
  it('renders the trigger and no tooltip while hidden', async () => {
    await mountTooltip();
    expect(trigger()).not.toBeNull();
    expect(tooltip()).toBeNull();
  });

  it('renders the tooltip in the body when visible', async () => {
    await mountTooltip({ visible: true });

    const el = tooltip()!;
    expect(el.parentElement).toBe(document.body);
    expect(el.classList.contains(styles.tooltip)).toBe(true);
    expect(el.classList.contains(styles.modifiers.top)).toBe(true);
    expect(el.querySelector(`.${styles.tooltipArrow}`)).not.toBeNull();
    expect(el.querySelector(`.${styles.tooltipContent}`)!.textContent).toBe('Tooltip text');
    expect(el.getAttribute('data-ouia-component-type')).toBe('PF/Tooltip');
  });

  it('applies the position modifier', async () => {
    await mountTooltip({ visible: true, position: 'bottom-start', flip: false });
    expect(tooltip()!.classList.contains(styles.modifiers.bottomLeft)).toBe(true);
  });

  it('applies leftAligned, maxWidth and forwarded attributes', async () => {
    await mountTooltip({ visible: true, leftAligned: true, maxWidth: '200px', 'data-test': 'tip' });

    const el = tooltip()!;
    expect(el.querySelector(`.${styles.tooltipContent}`)!.classList.contains(styles.modifiers.textAlignLeft)).toBe(true);
    expect(el.style.maxWidth).toBe('200px');
    expect(el.getAttribute('data-test')).toBe('tip');
  });

  it('renders inline with appendTo="inline"', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    mount(PfTooltip, {
      props: { visible: true, appendTo: 'inline' },
      slots: { default: () => h('button', 'T'), content: () => 'Tip' },
      attachTo: container,
    });
    await flushPromises();
    expect(container.querySelector('[role="tooltip"]')).not.toBeNull();
  });

  it('shows on mouseenter and hides on mouseleave', async () => {
    const wrapper = await mountTooltip();

    trigger().dispatchEvent(new MouseEvent('mouseenter'));
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toEqual([[true]]);
    expect(tooltip()).not.toBeNull();

    trigger().dispatchEvent(new MouseEvent('mouseleave'));
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toEqual([[true], [false]]);
    expect(tooltip()).toBeNull();
  });

  it('shows on focus and hides on blur', async () => {
    const wrapper = await mountTooltip();

    trigger().dispatchEvent(new FocusEvent('focus'));
    await flushPromises();
    expect(tooltip()).not.toBeNull();

    trigger().dispatchEvent(new FocusEvent('blur'));
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toEqual([[true], [false]]);
    expect(tooltip()).toBeNull();
  });

  it('toggles on click with the click trigger and ignores hover', async () => {
    const wrapper = await mountTooltip({ trigger: 'click' });

    trigger().dispatchEvent(new MouseEvent('mouseenter'));
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toBeUndefined();

    trigger().click();
    await flushPromises();
    expect(tooltip()).not.toBeNull();

    document.body.click();
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toEqual([[true], [false]]);
    expect(tooltip()).toBeNull();
  });

  it('does not react to events with the manual trigger', async () => {
    const wrapper = await mountTooltip({ trigger: 'manual' });

    trigger().dispatchEvent(new MouseEvent('mouseenter'));
    trigger().dispatchEvent(new FocusEvent('focus'));
    trigger().click();
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toBeUndefined();
  });

  it('marks ouia safe once shown without animation', async () => {
    await mountTooltip({ visible: true });
    expect(tooltip()!.getAttribute('data-ouia-safe')).toBe('true');
  });

  it('exposes the tooltip element', async () => {
    const wrapper = await mountTooltip({ visible: true });
    expect(wrapper.vm.el).toBe(tooltip());
  });

  // BUG: Tooltip.vue renders the floating element only `v-if="$slots.content"`, so the content prop alone never shows
  it.fails('renders the content prop without a content slot', async () => {
    mount(PfTooltip, {
      props: { visible: true, content: 'From prop', animationDuration: 0 },
      slots: { default: () => h('button', 'T') },
      attachTo: document.body,
    });
    await flushPromises();
    expect(tooltip()!.textContent).toBe('From prop');
  });

  // BUG: Tooltip.vue declares entryDelay (default 1000ms) and exitDelay but never uses them: it shows immediately
  it.fails('waits entryDelay before showing', async () => {
    vi.useFakeTimers();
    const wrapper = await mountTooltip({ entryDelay: 500 });

    trigger().dispatchEvent(new MouseEvent('mouseenter'));
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toBeUndefined();

    vi.advanceTimersByTime(500);
    await flushPromises();
    expect(wrapper.emitted('update:visible')).toEqual([[true]]);
  });

  // BUG: Tooltip.vue declares the aria prop (default 'describedby') but never links the trigger to the tooltip
  it.fails('describes the trigger with the tooltip', async () => {
    await mountTooltip({ visible: true });
    const id = trigger().getAttribute('aria-describedby');
    expect(id).toBeTruthy();
    expect(tooltip()!.id).toBe(id);
  });
});

describe('TooltipArrow', () => {
  it('renders the arrow element', () => {
    const wrapper = mount(PfTooltipArrow);
    expect(wrapper.classes()).toContain(styles.tooltipArrow);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/TooltipArrow');
  });
});

describe('TooltipContent', () => {
  it('renders the content with its slot', () => {
    const wrapper = mount(PfTooltipContent, { slots: { default: () => 'Text' } });
    expect(wrapper.classes()).toContain(styles.tooltipContent);
    expect(wrapper.classes()).not.toContain(styles.modifiers.textAlignLeft);
    expect(wrapper.text()).toBe('Text');
  });

  it('applies the left aligned modifier', () => {
    const wrapper = mount(PfTooltipContent, { props: { leftAligned: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.textAlignLeft);
  });
});
