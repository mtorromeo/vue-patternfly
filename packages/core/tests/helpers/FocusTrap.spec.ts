import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import PfFocusTrap from '../../src/helpers/FocusTrap.vue';

const focusTrapOptions = { delayInitialFocus: false, tabbableOptions: { displayCheck: 'none' as const } };

function mountTrap(props: Record<string, unknown> = {}) {
  const outside = document.createElement('button');
  outside.id = 'outside';
  document.body.appendChild(outside);
  outside.focus();

  const wrapper = mount(PfFocusTrap, {
    props: { focusTrapOptions, ...props },
    slots: { default: () => [h('button', { id: 'first' }, 'First'), h('button', { id: 'last' }, 'Last')] },
    attachTo: document.body,
  });
  return { wrapper, outside };
}

describe('FocusTrap', () => {
  it('renders a div wrapping the default slot with OUIA attributes', () => {
    const { wrapper } = mountTrap({ ouiaId: 'trap' });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.findAll('button')).toHaveLength(2);
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/FocusTrap');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('trap');
  });

  it('does not move focus when inactive', async () => {
    const { outside } = mountTrap();
    await nextTick();
    expect(document.activeElement).toBe(outside);
  });

  it('does not activate when inactive even with the immediate option', async () => {
    const onActivate = vi.fn();
    const onDeactivate = vi.fn();
    const { outside } = mountTrap({ focusTrapOptions: { ...focusTrapOptions, immediate: true, onActivate, onDeactivate } });
    await nextTick();
    await nextTick();
    expect(document.activeElement).toBe(outside);
    expect(onActivate).not.toHaveBeenCalled();
    expect(onDeactivate).not.toHaveBeenCalled();
  });

  it('focuses the first tabbable element when mounted active', async () => {
    mountTrap({ active: true });
    await nextTick();
    await nextTick();
    expect(document.activeElement?.id).toBe('first');
  });

  it('activates and deactivates following the active prop, restoring focus', async () => {
    const { wrapper, outside } = mountTrap();
    await nextTick();
    await wrapper.setProps({ active: true });
    expect(document.activeElement?.id).toBe('first');

    await wrapper.setProps({ active: false });
    await vi.waitFor(() => expect(document.activeElement).toBe(outside));
  });

  it('activates when active is set right after mounting', async () => {
    const { wrapper } = mountTrap();
    await wrapper.setProps({ active: true });
    await nextTick();
    expect(document.activeElement?.id).toBe('first');
  });

  it('keeps focus inside the trap', async () => {
    const { wrapper, outside } = mountTrap({ active: true });
    await nextTick();
    outside.focus();
    expect(wrapper.element.contains(document.activeElement)).toBe(true);
  });

  it('pauses and unpauses following the paused prop', async () => {
    const { wrapper, outside } = mountTrap({ active: true });
    await nextTick();

    await wrapper.setProps({ paused: true });
    outside.focus();
    expect(document.activeElement).toBe(outside);

    await wrapper.setProps({ paused: false });
    outside.focus();
    expect(wrapper.element.contains(document.activeElement)).toBe(true);
  });

  it('starts paused when mounted with paused', async () => {
    const { outside } = mountTrap({ active: true, paused: true });
    await nextTick();
    outside.focus();
    expect(document.activeElement).toBe(outside);
  });
});
