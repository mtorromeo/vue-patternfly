import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import avatarStyles from '@patternfly/react-styles/css/components/Avatar/avatar';
import backdropStyles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import backgroundImageStyles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
import badgeStyles from '@patternfly/react-styles/css/components/Badge/badge';
import brandStyles from '@patternfly/react-styles/css/components/Brand/brand';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import dividerStyles from '@patternfly/react-styles/css/components/Divider/divider';
import formControlStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import iconStyles from '@patternfly/react-styles/css/components/Icon/icon';
import skeletonStyles from '@patternfly/react-styles/css/components/Skeleton/skeleton';
import spinnerStyles from '@patternfly/react-styles/css/components/Spinner/spinner';
import titleStyles from '@patternfly/react-styles/css/components/Title/title';
import cssBackgroundImage from '@patternfly/react-tokens/dist/esm/c_background_image_BackgroundImage';
import cssBrandHeight from '@patternfly/react-tokens/dist/esm/c_brand_Height';
import cssBrandWidth from '@patternfly/react-tokens/dist/esm/c_brand_Width';
import cssSkeletonHeight from '@patternfly/react-tokens/dist/esm/c_skeleton_Height';
import cssSkeletonWidth from '@patternfly/react-tokens/dist/esm/c_skeleton_Width';
import cssSpinnerDiameter from '@patternfly/react-tokens/dist/esm/c_spinner_diameter';
import PfAvatar from '../../src/components/Avatar.vue';
import PfBackdrop from '../../src/components/Backdrop.vue';
import PfBackgroundImage from '../../src/components/BackgroundImage.vue';
import PfBadge from '../../src/components/Badge.vue';
import PfBrand from '../../src/components/Brand.vue';
import PfCloseButton from '../../src/components/CloseButton.vue';
import PfDivider from '../../src/components/Divider.vue';
import PfFormControlIcon from '../../src/components/FormControlIcon.vue';
import PfIcon from '../../src/components/Icon.vue';
import PfSkeleton from '../../src/components/Skeleton.vue';
import PfSpinner from '../../src/components/Spinner.vue';
import PfTitle from '../../src/components/Title.vue';

describe('Avatar', () => {
  it('renders an img with the avatar class and forwards attributes', () => {
    const wrapper = mount(PfAvatar, { attrs: { src: 'avatar.svg', alt: 'User avatar' } });
    expect(wrapper.element.tagName).toBe('IMG');
    expect(wrapper.classes()).toContain(avatarStyles.avatar);
    expect(wrapper.classes()).not.toContain(avatarStyles.modifiers.bordered);
    expect(wrapper.attributes('src')).toBe('avatar.svg');
    expect(wrapper.attributes('alt')).toBe('User avatar');
  });

  it('applies bordered and size modifiers', () => {
    const wrapper = mount(PfAvatar, { props: { bordered: true, size: 'lg' } });
    expect(wrapper.classes()).toContain(avatarStyles.modifiers.bordered);
    expect(wrapper.classes()).toContain(avatarStyles.modifiers.lg);
  });

  it('sets OUIA attributes', () => {
    const wrapper = mount(PfAvatar, { props: { ouiaId: 'my-avatar' } });
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Avatar');
    expect(wrapper.attributes('data-ouia-component-id')).toBe('my-avatar');
  });
});

describe('Backdrop', () => {
  it('renders a div with the backdrop class and the default slot', () => {
    const wrapper = mount(PfBackdrop, { slots: { default: () => h('p', 'content') } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(backdropStyles.backdrop);
    expect(wrapper.find('p').text()).toBe('content');
  });
});

describe('BackgroundImage', () => {
  it('sets the background image css variable from src', () => {
    const wrapper = mount(PfBackgroundImage, { props: { src: '/bg.png' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(backgroundImageStyles.backgroundImage);
    expect((wrapper.element as HTMLElement).style.getPropertyValue(cssBackgroundImage.name)).toBe('url(/bg.png)');
  });
});

describe('Badge', () => {
  it('renders an unread badge by default', () => {
    const wrapper = mount(PfBadge, { slots: { default: () => '7' } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(badgeStyles.badge);
    expect(wrapper.classes()).toContain(badgeStyles.modifiers.unread);
    expect(wrapper.classes()).not.toContain(badgeStyles.modifiers.read);
    expect(wrapper.text()).toBe('7');
  });

  it('applies read and disabled modifiers', () => {
    const wrapper = mount(PfBadge, { props: { read: true, disabled: true } });
    expect(wrapper.classes()).toContain(badgeStyles.modifiers.read);
    expect(wrapper.classes()).not.toContain(badgeStyles.modifiers.unread);
    expect(wrapper.classes()).toContain(badgeStyles.modifiers.disabled);
  });
});

describe('Brand', () => {
  it('renders an img with src and alt without a default slot', () => {
    const wrapper = mount(PfBrand, { props: { src: 'logo.svg', alt: 'Logo' }, attrs: { id: 'brand' } });
    expect(wrapper.element.tagName).toBe('IMG');
    expect(wrapper.classes()).toContain(brandStyles.brand);
    expect(wrapper.attributes('src')).toBe('logo.svg');
    expect(wrapper.attributes('alt')).toBe('Logo');
    expect(wrapper.attributes('id')).toBe('brand');
  });

  it('renders a picture with sources and a fallback img when the default slot is used', () => {
    const wrapper = mount(PfBrand, {
      props: { src: 'logo.svg', alt: 'Logo' },
      attrs: { id: 'brand' },
      slots: { default: () => h('source', { srcset: 'logo-lg.svg', media: '(min-width: 1200px)' }) },
    });
    expect(wrapper.element.tagName).toBe('PICTURE');
    expect(wrapper.classes()).toContain(brandStyles.brand);
    expect(wrapper.classes()).toContain(brandStyles.modifiers.picture);
    expect(wrapper.attributes('id')).toBe('brand');
    expect(wrapper.find('source').attributes('srcset')).toBe('logo-lg.svg');
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('logo.svg');
    expect(img.attributes('alt')).toBe('Logo');
  });

  it('sets width and height css variables per breakpoint on the picture', () => {
    const wrapper = mount(PfBrand, {
      props: { src: 'logo.svg', width: '100px', widthMd: '200px', height: '40px' },
      slots: { default: () => h('source', { srcset: 'logo.svg' }) },
    });
    const style = (wrapper.element as HTMLElement).style;
    expect(style.getPropertyValue(cssBrandWidth.name)).toBe('100px');
    expect(style.getPropertyValue(`${cssBrandWidth.name}-on-md`)).toBe('200px');
    expect(style.getPropertyValue(cssBrandHeight.name)).toBe('40px');
  });
});

describe('CloseButton', () => {
  it('renders a plain button labelled Close with an icon', () => {
    const wrapper = mount(PfCloseButton);
    const button = wrapper.find('button');
    expect(button.classes()).toContain(buttonStyles.button);
    expect(button.classes()).toContain(buttonStyles.modifiers.plain);
    expect(button.attributes('aria-label')).toBe('Close');
    expect(button.find(`.${buttonStyles.buttonIcon} svg`).exists()).toBe(true);
  });

  it('forwards click listeners', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfCloseButton, { attrs: { onClick } });
    await wrapper.find('button').trigger('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('uses the given ouiaId', () => {
    const wrapper = mount(PfCloseButton, { attrs: { ouiaId: 'close' } });
    expect(wrapper.find('button').attributes('data-ouia-component-id')).toBe('close');
  });
});

describe('Divider', () => {
  it('renders an hr without role by default', () => {
    const wrapper = mount(PfDivider, { props: { role: 'separator' } });
    expect(wrapper.element.tagName).toBe('HR');
    expect(wrapper.classes()).toContain(dividerStyles.divider);
    expect(wrapper.attributes('role')).toBeUndefined();
  });

  it('renders a custom component with the given role', () => {
    const wrapper = mount(PfDivider, { props: { component: 'li', role: 'presentation' } });
    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.attributes('role')).toBe('presentation');
  });

  it('applies vertical, inset and orientation modifiers', () => {
    const wrapper = mount(PfDivider, { props: { component: 'div', vertical: true, inset: 'md', insetLg: '2xl', orientationMd: 'horizontal' } });
    expect(wrapper.classes()).toContain(dividerStyles.modifiers.vertical);
    expect(wrapper.classes()).toContain(dividerStyles.modifiers.insetMd);
    expect(wrapper.classes()).toContain(dividerStyles.modifiers.inset_2xlOnLg);
    expect(wrapper.classes()).toContain(dividerStyles.modifiers.horizontalOnMd);
  });
});

describe('FormControlIcon', () => {
  it('renders a span with the form control icon class', () => {
    const wrapper = mount(PfFormControlIcon, { slots: { default: () => h('i', { class: 'custom' }) } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(formControlStyles.formControlIcon);
    expect(wrapper.classes()).not.toContain(formControlStyles.modifiers.status);
    expect(wrapper.find('i.custom').exists()).toBe(true);
  });

  it.each(['success', 'warning', 'error'] as const)('renders a default icon for the %s status', (status) => {
    const wrapper = mount(PfFormControlIcon, { props: { status } });
    expect(wrapper.classes()).toContain(formControlStyles.modifiers.status);
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('renders nothing inside without status or slot', () => {
    const wrapper = mount(PfFormControlIcon);
    expect(wrapper.find('svg').exists()).toBe(false);
  });
});

describe('Icon', () => {
  it('renders the icon container and content', () => {
    const wrapper = mount(PfIcon, { slots: { default: () => h('svg', { class: 'my-icon' }) } });
    expect(wrapper.element.tagName).toBe('SPAN');
    expect(wrapper.classes()).toContain(iconStyles.icon);
    expect(wrapper.find(`.${iconStyles.iconContent} .my-icon`).exists()).toBe(true);
    expect(wrapper.find(`.${iconStyles.iconProgress}`).exists()).toBe(false);
  });

  it('applies size, inline and content modifiers', () => {
    const wrapper = mount(PfIcon, { props: { size: 'lg', iconSize: 'sm', status: 'danger', inline: true, shouldMirrorRTL: true } });
    expect(wrapper.classes()).toContain(iconStyles.modifiers.lg);
    expect(wrapper.classes()).toContain(iconStyles.modifiers.inline);
    const content = wrapper.find(`.${iconStyles.iconContent}`);
    expect(content.classes()).toContain(iconStyles.modifiers.sm);
    expect(content.classes()).toContain(iconStyles.modifiers.danger);
    expect(content.classes()).toContain('pf-v6-m-mirror-inline-rtl');
  });

  it('renders a default spinner when in progress', () => {
    const wrapper = mount(PfIcon, { props: { inProgress: true, progressIconSize: 'xl' } });
    expect(wrapper.classes()).toContain(iconStyles.modifiers.inProgress);
    const progress = wrapper.find(`.${iconStyles.iconProgress}`);
    expect(progress.classes()).toContain(iconStyles.modifiers.xl);
    const spinner = progress.find('svg');
    expect(spinner.classes()).toContain(spinnerStyles.spinner);
    expect(spinner.attributes('aria-label')).toBe('Loading...');
  });

  it('uses a custom progress label and progress-icon slot', () => {
    const labelled = mount(PfIcon, { props: { inProgress: true, defaultProgressArialabel: 'Working' } });
    expect(labelled.find('svg').attributes('aria-label')).toBe('Working');

    const custom = mount(PfIcon, { props: { inProgress: true }, slots: { 'progress-icon': () => h('i', { class: 'progress' }) } });
    expect(custom.find(`.${iconStyles.iconProgress} i.progress`).exists()).toBe(true);
    expect(custom.find(`.${spinnerStyles.spinner}`).exists()).toBe(false);
  });
});

describe('Skeleton', () => {
  it('renders a div with screen reader text', () => {
    const wrapper = mount(PfSkeleton, { props: { screenreaderText: 'Loading content' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(skeletonStyles.skeleton);
    expect(wrapper.find('span').text()).toBe('Loading content');
  });

  it('applies shape modifiers', () => {
    expect(mount(PfSkeleton, { props: { shape: 'circle' } }).classes()).toContain(skeletonStyles.modifiers.circle);
    expect(mount(PfSkeleton, { props: { shape: 'square' } }).classes()).toContain(skeletonStyles.modifiers.square);
  });

  it('applies the font size modifier', () => {
    const wrapper = mount(PfSkeleton, { props: { fontSize: '2xl' } });
    expect(wrapper.classes()).toContain(skeletonStyles.modifiers.text_2xl);
    expect(wrapper.classes()).not.toContain(skeletonStyles.modifiers.circle);
    expect(mount(PfSkeleton, { props: { fontSize: 'sm' } }).classes()).toContain(skeletonStyles.modifiers.textSm);
  });

  it('sets width and height css variables', () => {
    const wrapper = mount(PfSkeleton, { props: { width: '50%', height: '20px' } });
    const style = (wrapper.element as HTMLElement).style;
    expect(style.getPropertyValue(cssSkeletonWidth.name)).toBe('50%');
    expect(style.getPropertyValue(cssSkeletonHeight.name)).toBe('20px');
  });
});

describe('Spinner', () => {
  it('renders an accessible progressbar svg with defaults', () => {
    const wrapper = mount(PfSpinner);
    expect(wrapper.element.tagName.toLowerCase()).toBe('svg');
    expect(wrapper.classes()).toContain(spinnerStyles.spinner);
    expect(wrapper.classes()).toContain(spinnerStyles.modifiers.xl);
    expect(wrapper.attributes('role')).toBe('progressbar');
    expect(wrapper.attributes('viewBox')).toBe('0 0 100 100');
    expect(wrapper.attributes('aria-valuetext')).toBe('Loading...');
    expect(wrapper.attributes('aria-label')).toBe('Contents');
    expect(wrapper.find('circle').classes()).toContain(spinnerStyles.spinnerPath);
  });

  it('applies size, or inline overriding size', () => {
    expect(mount(PfSpinner, { props: { size: 'sm' } }).classes()).toContain(spinnerStyles.modifiers.sm);
    const inline = mount(PfSpinner, { props: { size: 'sm', inline: true } });
    expect(inline.classes()).toContain(spinnerStyles.modifiers.inline);
    expect(inline.classes()).not.toContain(spinnerStyles.modifiers.sm);
  });

  it('sets the diameter css variable', () => {
    const wrapper = mount(PfSpinner, { props: { diameter: '80px' } });
    expect((wrapper.element as unknown as SVGElement).style.getPropertyValue(cssSpinnerDiameter.name)).toBe('80px');
  });

  it('uses the provided aria label, value text or labelledby', () => {
    const labelled = mount(PfSpinner, { props: { ariaLabel: 'Loading table', ariaValueText: 'Half way' } });
    expect(labelled.attributes('aria-label')).toBe('Loading table');
    expect(labelled.attributes('aria-valuetext')).toBe('Half way');

    const labelledBy = mount(PfSpinner, { props: { ariaLabelledby: 'lbl' } });
    expect(labelledBy.attributes('aria-labelledby')).toBe('lbl');
    expect(labelledBy.attributes('aria-label')).toBeUndefined();
  });
});

describe('Title', () => {
  it('renders an h1 with the h1 modifier by default', () => {
    const wrapper = mount(PfTitle, { slots: { default: () => 'Heading' } });
    expect(wrapper.element.tagName).toBe('H1');
    expect(wrapper.classes()).toContain(titleStyles.title);
    expect(wrapper.classes()).toContain(titleStyles.modifiers.h1);
    expect(wrapper.text()).toBe('Heading');
  });

  it.each([
    [2, 'h2'],
    ['3', 'h3'],
    [4, 'h4'],
    [6, 'h6'],
  ] as const)('maps heading level %s to the %s modifier', (level, size) => {
    const wrapper = mount(PfTitle, { props: { h: level } });
    expect(wrapper.element.tagName).toBe(`H${level}`);
    expect(wrapper.classes()).toContain(titleStyles.modifiers[size]);
  });

  it('uses the explicit size instead of the heading level size', () => {
    const wrapper = mount(PfTitle, { props: { h: 3, size: '4xl' } });
    expect(wrapper.element.tagName).toBe('H3');
    expect(wrapper.classes()).toContain(titleStyles.modifiers['4xl']);
    expect(wrapper.classes()).not.toContain(titleStyles.modifiers.h3);
  });

  it('accepts the h1..h6 string form of the heading level', () => {
    const wrapper = mount(PfTitle, { props: { h: 'h2' } });
    expect(wrapper.element.tagName).toBe('H2');
    expect(wrapper.classes()).toContain(titleStyles.modifiers.h2);
  });
});
