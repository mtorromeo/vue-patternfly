import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
import cssBackgroundImage from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';
import PfBackgroundImage from '../../src/components/BackgroundImage.vue';

describe('BackgroundImage', () => {
  it('renders a div with only the background image class', () => {
    const wrapper = mount(PfBackgroundImage, { props: { src: '/image/url.png' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.backgroundImage]);
  });

  it('applies the src URL to the style', () => {
    const wrapper = mount(PfBackgroundImage, { props: { src: '/image/url.png' } });
    expect(wrapper.attributes('style')).toBe(`${cssBackgroundImage.name}: url(/image/url.png);`);
  });

  it('forwards class and attributes', () => {
    const wrapper = mount(PfBackgroundImage, {
      props: { src: '/image/url.png' },
      attrs: { class: 'another-class', lang: 'en-US' },
    });
    expect(wrapper.classes()).toEqual([styles.backgroundImage, 'another-class']);
    expect(wrapper.attributes('lang')).toBe('en-US');
  });

  it('sets OUIA attributes', () => {
    const wrapper = mount(PfBackgroundImage, { props: { src: '/image/url.png', ouiaId: 'bg' } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/BackgroundImage');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('bg');
  });
});
