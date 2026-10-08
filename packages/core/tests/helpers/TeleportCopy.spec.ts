import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick, ref } from 'vue';
import TeleportCopy from '../../src/helpers/TeleportCopy.vue';

function slot({ copy }: { copy: boolean }) {
  return [h('span', { class: copy ? 'copy' : 'original' }, 'content')];
}

describe('TeleportCopy', () => {
  it('renders the content in place and a copy in the target', () => {
    const target = document.createElement('div');
    target.id = 'target';
    document.body.appendChild(target);

    const wrapper = mount(() => h('div', { class: 'host' }, [h(TeleportCopy, { to: '#target' }, { default: slot })]), { attachTo: document.body });
    expect(wrapper.find('.original').exists()).toBe(true);
    expect(wrapper.find('.copy').exists()).toBe(false);
    expect(target.querySelector('.copy')?.textContent).toBe('content');
    expect(target.querySelector('.original')).toBeNull();
  });

  it('accepts an element as target', () => {
    const target = document.createElement('section');
    document.body.appendChild(target);
    mount(() => h(TeleportCopy, { to: target }, { default: slot }), { attachTo: document.body });
    expect(target.querySelector('.copy')).not.toBeNull();
  });

  it('does not render the copy when disabled or without a target', async () => {
    const target = document.createElement('div');
    target.id = 'target';
    document.body.appendChild(target);
    const disabled = ref(true);

    const wrapper = mount(() => h('div', [
      h(TeleportCopy, { to: '#target', disabled: disabled.value }, { default: slot }),
      h(TeleportCopy, { to: null }, { default: slot }),
    ]), { attachTo: document.body });
    expect(wrapper.findAll('.original')).toHaveLength(2);
    expect(document.querySelectorAll('.copy')).toHaveLength(0);

    disabled.value = false;
    await nextTick();
    expect(target.querySelectorAll('.copy')).toHaveLength(1);
  });

  it('renders nothing without a default slot', () => {
    const wrapper = mount(() => h('div', [h(TeleportCopy, { to: 'body' })]));
    expect(wrapper.html({ raw: true })).toBe('<div></div>');
  });
});
