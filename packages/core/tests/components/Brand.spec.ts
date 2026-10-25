import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Brand/brand';
import PfBrand from '../../src/components/Brand.vue';

describe('Brand', () => {
  it('renders an img with src and alt', () => {
    const wrapper = mount(PfBrand, { props: { src: 'test.png', alt: 'brand' } });

    expect(wrapper.element.tagName).toBe('IMG');
    expect(wrapper.classes()).toEqual([styles.brand]);
    expect(wrapper.attributes('src')).toBe('test.png');
    expect(wrapper.attributes('alt')).toBe('brand');
  });

  it('renders a picture with the slot and a fallback img', () => {
    const wrapper = mount(PfBrand, {
      props: { src: 'test.png', alt: 'brand' },
      slots: { default: () => h('source', { srcset: 'large.png', media: '(min-width: 1200px)' }) },
    });

    expect(wrapper.element.tagName).toBe('PICTURE');
    expect(wrapper.classes()).toEqual([styles.brand, styles.modifiers.picture]);
    expect([...wrapper.element.children].map(c => c.tagName)).toEqual(['SOURCE', 'IMG']);
    const img = wrapper.get('img');
    expect(img.attributes('src')).toBe('test.png');
    expect(img.attributes('alt')).toBe('brand');
    expect(img.classes()).toEqual([]);
  });

  it('forwards class, style and attributes in both forms', () => {
    const img = mount(PfBrand, { props: { alt: 'brand' }, attrs: { class: 'custom-class', style: 'width: 30px' } });
    expect(img.classes()).toContain('custom-class');
    expect(img.attributes('style')).toContain('width: 30px');

    const picture = mount(PfBrand, {
      props: { alt: 'brand' },
      attrs: { class: 'custom-class', style: 'color: blue', 'data-testid': 'brand' },
      slots: { default: () => h('source') },
    });
    expect(picture.classes()).toContain('custom-class');
    expect(picture.attributes('style')).toContain('color: blue');
    expect(picture.attributes('data-testid')).toBe('brand');
  });

  it('sets the width variables at every breakpoint on an img', () => {
    // regression: the responsive styles were only applied to a picture
    const wrapper = mount(PfBrand, {
      props: {
        alt: 'brand',
        width: '100px',
        widthSm: '25px',
        widthMd: '50px',
        widthLg: '100px',
        widthXl: '125px',
        width2xl: '150px',
      },
    });
    expect(wrapper.attributes('style')).toBe(
      '--pf-v6-c-brand--Width: 100px; --pf-v6-c-brand--Width-on-sm: 25px; --pf-v6-c-brand--Width-on-md: 50px; --pf-v6-c-brand--Width-on-lg: 100px; --pf-v6-c-brand--Width-on-xl: 125px; --pf-v6-c-brand--Width-on-2xl: 150px;',
    );
  });

  it('sets the height variables on a picture', () => {
    const wrapper = mount(PfBrand, {
      props: { alt: 'brand', height: '40px', heightMd: '80px' },
      slots: { default: () => h('source') },
    });
    expect(wrapper.attributes('style')).toBe('--pf-v6-c-brand--Height: 40px; --pf-v6-c-brand--Height-on-md: 80px;');
  });

  it('updates the responsive styles when the props change', async () => {
    // regression: the styles were computed once at setup
    const wrapper = mount(PfBrand, { props: { alt: 'brand', width: '100px' }, slots: { default: () => h('source') } });
    await wrapper.setProps({ width: '200px' });
    await nextTick();
    expect(wrapper.attributes('style')).toBe('--pf-v6-c-brand--Width: 200px;');
  });
});
