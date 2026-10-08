import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick, provide, ref, defineComponent } from 'vue';
import FloatingUi, { FloatingElementTeleportKey } from '../../src/helpers/FloatingUi.vue';

function transitionEvent(type: 'transitionstart' | 'transitionend', propertyName = 'opacity') {
  const event = new Event(type);
  Object.defineProperty(event, 'propertyName', { value: propertyName });
  return event;
}

function createReference() {
  const reference = document.createElement('button');
  reference.id = 'reference';
  document.body.appendChild(reference);
  return reference;
}

function floating(props: Record<string, unknown> = {}, slot = (_: any) => [h('div', { class: 'floating' }, 'content')]) {
  return h('div', { class: 'host' }, [h(FloatingUi, { reference: '#reference', ...props }, { default: slot })]);
}

function findFloating() {
  return document.querySelector<HTMLElement>('.floating');
}

describe('FloatingUi', () => {
  it('teleports the single child to the body with positioning styles', () => {
    createReference();
    const wrapper = mount(() => floating(), { attachTo: document.body });
    expect(wrapper.find('.floating').exists()).toBe(false);

    const el = findFloating()!;
    expect(el.parentElement).toBe(document.body);
    expect(el.style.position).toBe('absolute');
    expect(el.style.top).toBe('0px');
    expect(el.style.left).toBe('0px');
    expect(el.style.opacity).toBe('1');
    expect(el.style.zIndex).toBe('9999');
    expect(el.style.transform).toBe('translate3d(0px,0px,0)');
    expect(el.style.transition).toContain('opacity 0ms');
  });

  it('renders inline', () => {
    createReference();
    const wrapper = mount(() => floating({ teleportTo: 'inline' }), { attachTo: document.body });
    expect(wrapper.find('.host > .floating').exists()).toBe(true);
  });

  it('teleports to a custom selector', () => {
    createReference();
    const target = document.createElement('div');
    target.id = 'target';
    document.body.appendChild(target);
    mount(() => floating({ teleportTo: '#target' }), { attachTo: document.body });
    expect(target.querySelector('.floating')).not.toBeNull();
  });

  it('uses the injected teleport target when teleportTo is null', () => {
    createReference();
    const target = document.createElement('div');
    document.body.appendChild(target);
    const Provider = defineComponent({
      setup() {
        provide(FloatingElementTeleportKey, target);
        return () => floating({ teleportTo: null });
      },
    });
    mount(Provider, { attachTo: document.body });
    expect(target.querySelector('.floating')).not.toBeNull();
  });

  it('uses the injected teleport target when teleportTo is not set', () => {
    createReference();
    const target = document.createElement('div');
    document.body.appendChild(target);
    const Provider = defineComponent({
      setup() {
        provide(FloatingElementTeleportKey, target);
        return () => floating();
      },
    });
    mount(Provider, { attachTo: document.body });
    expect(target.querySelector('.floating')).not.toBeNull();
  });

  it('applies z-index and strategy', async () => {
    createReference();
    mount(() => floating({ zIndex: 10, strategy: 'fixed' }), { attachTo: document.body });
    await vi.waitFor(() => expect(findFloating()!.style.position).toBe('fixed'));
    expect(findFloating()!.style.zIndex).toBe('10');
  });

  it('provides the computed position data to the slot', async () => {
    createReference();
    const slot = vi.fn((ui: any) => [h('div', { class: 'floating', 'data-placement': ui.placement }, 'content')]);
    mount(() => floating({ placement: 'right' }, slot), { attachTo: document.body });
    await vi.waitFor(() => expect(findFloating()!.dataset.placement).toBe('right'));
    expect(slot).toHaveBeenLastCalledWith(expect.objectContaining({ x: expect.any(Number), y: expect.any(Number), strategy: 'absolute' }));
  });

  it('sets the width constraints', async () => {
    createReference();
    mount(() => floating({ width: '200px', minWidth: '100px', maxWidth: '300px' }), { attachTo: document.body });
    await vi.waitFor(() => expect(findFloating()!.style.width).toBe('200px'));
    expect(findFloating()!.style.minWidth).toBe('100px');
    expect(findFloating()!.style.maxWidth).toBe('300px');
  });

  it('uses the trigger width for the min width by default', async () => {
    const reference = createReference();
    reference.getBoundingClientRect = () => ({ x: 0, y: 0, top: 0, left: 0, right: 150, bottom: 20, width: 150, height: 20, toJSON: () => ({}) });
    mount(() => floating(), { attachTo: document.body });
    await vi.waitFor(() => expect(findFloating()!.style.minWidth).toBe('150px'));
  });

  it('renders nothing when initially hidden and shows when hidden becomes false', async () => {
    createReference();
    const hidden = ref(true);
    const onShown = vi.fn();
    mount(() => floating({ hidden: hidden.value, onShown }), { attachTo: document.body });
    expect(findFloating()).toBeNull();

    hidden.value = false;
    await nextTick();
    const el = findFloating()!;
    expect(el).not.toBeNull();
    expect(el.style.opacity).toBe('1');

    el.dispatchEvent(transitionEvent('transitionend'));
    expect(onShown).toHaveBeenCalledTimes(1);
  });

  it('fades out and removes the element after the transition when hidden', async () => {
    createReference();
    const hidden = ref(false);
    const onHidden = vi.fn();
    mount(() => floating({ hidden: hidden.value, animationDuration: 200, onHidden }), { attachTo: document.body });
    const el = findFloating()!;
    expect(el.style.transition).toContain('opacity 200ms');
    el.dispatchEvent(transitionEvent('transitionstart'));

    hidden.value = true;
    await nextTick();
    expect(findFloating()).toBe(el);
    expect(el.style.opacity).toBe('0');

    el.dispatchEvent(transitionEvent('transitionend', 'transform'));
    await nextTick();
    expect(findFloating()).not.toBeNull();

    el.dispatchEvent(transitionEvent('transitionend'));
    await nextTick();
    expect(findFloating()).toBeNull();
    expect(onHidden).toHaveBeenCalledTimes(1);
  });

  it('removes the element immediately when hidden before the show transition started', async () => {
    createReference();
    const hidden = ref(false);
    mount(() => floating({ hidden: hidden.value }), { attachTo: document.body });
    expect(findFloating()).not.toBeNull();

    hidden.value = true;
    await nextTick();
    expect(findFloating()).toBeNull();
  });

  it('logs an error with more than one child', () => {
    createReference();
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    mount(() => floating({}, () => [h('div', { class: 'floating' }), h('div')]), { attachTo: document.body });
    expect(error).toHaveBeenCalledWith('FloatingUi should only contain a single child or none');
  });

  it('renders nothing without children', () => {
    createReference();
    const wrapper = mount(() => floating({}, () => []), { attachTo: document.body });
    expect(wrapper.find('.host').element.children).toHaveLength(0);
  });

  it('renders the content unpositioned when disabled', () => {
    createReference();
    mount(() => floating({ disable: true }), { attachTo: document.body });
    const el = findFloating();
    expect(el).not.toBeNull();
    expect(el!.style.position).toBe('');
  });
});
