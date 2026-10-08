import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import styles from '@patternfly/react-styles/css/components/Login/login';
import titleStyles from '@patternfly/react-styles/css/components/Title/title';
import listStyles from '@patternfly/react-styles/css/components/List/list';
import brandStyles from '@patternfly/react-styles/css/components/Brand/brand';
import backgroundImageStyles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
import PfLoginPage from '../../src/components/LoginPage/LoginPage.vue';
import PfLogin from '../../src/components/LoginPage/Login.vue';
import PfLoginHeader from '../../src/components/LoginPage/LoginHeader.vue';
import PfLoginFooter from '../../src/components/LoginPage/LoginFooter.vue';
import PfLoginMainHeader from '../../src/components/LoginPage/LoginMainHeader.vue';
import PfLoginMainBody from '../../src/components/LoginPage/LoginMainBody.vue';
import PfLoginMainFooter from '../../src/components/LoginPage/LoginMainFooter.vue';
import PfLoginMainFooterBandItem from '../../src/components/LoginPage/LoginMainFooterBandItem.vue';
import PfLoginMainFooterLinksItem from '../../src/components/LoginPage/LoginMainFooterLinksItem.vue';

describe('LoginPage', () => {
  it('renders the login layout with title and body', () => {
    const wrapper = mount(PfLoginPage, {
      props: { title: 'Log in', subtitle: 'Welcome' },
      slots: { default: () => h('form', { class: 'login-form' }) },
    });

    const login = wrapper.find(`.${styles.login}`);
    expect(login.exists()).toBe(true);
    expect(login.find(`.${styles.loginContainer} main.${styles.loginMain}`).exists()).toBe(true);
    const header = wrapper.find(`.${styles.loginMainHeader}`);
    const title = header.find(`h2.${titleStyles.title}`);
    expect(title.text()).toBe('Log in');
    expect(title.classes()).toContain(titleStyles.modifiers['3xl']);
    expect(header.find(`.${styles.loginMainHeaderDesc}`).text()).toBe('Welcome');
    expect(wrapper.find(`.${styles.loginMainBody} .login-form`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.loginMainFooter}`).exists()).toBe(false);
    expect(wrapper.find(`.${backgroundImageStyles.backgroundImage}`).exists()).toBe(false);
  });

  it('renders the brand and background image', () => {
    const wrapper = mount(PfLoginPage, {
      props: { title: 'Log in', brandImgSrc: 'brand.svg', brandImgAlt: 'Brand', backgroundImgSrc: 'bg.jpg' },
    });

    const brand = wrapper.find(`header.${styles.loginHeader} img.${brandStyles.brand}`);
    expect(brand.attributes('src')).toBe('brand.svg');
    expect(brand.attributes('alt')).toBe('Brand');
    expect(wrapper.find(`.${backgroundImageStyles.backgroundImage}`).exists()).toBe(true);
  });

  it('omits the brand without a brand image', () => {
    const wrapper = mount(PfLoginPage, { props: { title: 'Log in' } });
    expect(wrapper.find(`.${styles.loginHeader} img`).exists()).toBe(false);
  });

  it('renders the footer text and list items', () => {
    const wrapper = mount(PfLoginPage, {
      props: { title: 'Log in', textContent: 'Footer text', footerListVariants: 'inline' },
      slots: { 'footer-list-items': () => h('li', 'Terms') },
    });

    const footer = wrapper.find(`footer.${styles.loginFooter}`);
    expect(footer.find('p').text()).toBe('Footer text');
    const list = footer.find(`ul.${listStyles.list}`);
    expect(list.classes()).toContain(listStyles.modifiers.inline);
    expect(list.find('li').text()).toBe('Terms');
  });

  it('renders the utilities slot in the main header', () => {
    const wrapper = mount(PfLoginPage, { props: { title: 'Log in' }, slots: { utilities: () => h('button', 'Lang') } });
    expect(wrapper.find(`.${styles.loginMainHeaderUtilities} button`).text()).toBe('Lang');
  });

  it('renders the main footer with social links, sign up and forgot credentials', () => {
    const wrapper = mount(PfLoginPage, {
      props: { title: 'Log in' },
      slots: {
        social: () => h(PfLoginMainFooterLinksItem, () => 'Google'),
        signup: () => h(PfLoginMainFooterBandItem, () => 'Sign up'),
        'forgot-credentials': () => h(PfLoginMainFooterBandItem, () => 'Forgot?'),
      },
    });

    const footer = wrapper.find(`.${styles.loginMainFooter}`);
    expect(footer.find(`ul.${styles.loginMainFooterLinks} .${styles.loginMainFooterLinksItem}`).text()).toBe('Google');
    expect(footer.find(`.${styles.loginMainFooterBand}`).text()).toContain('Sign up');
    expect(footer.find(`.${styles.loginMainFooterBand}`).text()).toContain('Forgot?');
  });

  it('forwards attributes to the login container', () => {
    const wrapper = mount(PfLoginPage, { props: { title: 'Log in' }, attrs: { id: 'login', 'data-test': 'x' } });
    const login = wrapper.find(`.${styles.login}`);
    expect(login.attributes('id')).toBe('login');
    expect(login.attributes('data-test')).toBe('x');
  });
});

describe('Login', () => {
  it('renders header, main content and footer in order', () => {
    const wrapper = mount(PfLogin, {
      slots: {
        header: () => h(PfLoginHeader, () => 'Header'),
        default: () => 'Main',
        footer: () => h(PfLoginFooter, () => 'Footer'),
      },
    });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.login);
    const container = wrapper.find(`.${styles.loginContainer}`);
    const children = Array.from(container.element.children);
    expect(children.map(c => c.tagName)).toEqual(['HEADER', 'MAIN', 'FOOTER']);
    expect(container.find(`main.${styles.loginMain}`).text()).toBe('Main');
  });
});

describe('LoginHeader', () => {
  it('renders a header element', () => {
    const wrapper = mount(PfLoginHeader, { slots: { default: () => 'Header' } });
    expect(wrapper.element.tagName).toBe('HEADER');
    expect(wrapper.classes()).toContain(styles.loginHeader);
    expect(wrapper.text()).toBe('Header');
  });
});

describe('LoginFooter', () => {
  it('renders a footer element', () => {
    const wrapper = mount(PfLoginFooter, { slots: { default: () => 'Footer' } });
    expect(wrapper.element.tagName).toBe('FOOTER');
    expect(wrapper.classes()).toContain(styles.loginFooter);
    expect(wrapper.text()).toBe('Footer');
  });
});

describe('LoginMainHeader', () => {
  it('renders title, subtitle, utilities and default slot', () => {
    const wrapper = mount(PfLoginMainHeader, {
      props: { title: 'Title', subtitle: 'Subtitle' },
      slots: { utilities: () => h('button', 'Util'), default: () => h('span', { class: 'extra' }) },
    });

    expect(wrapper.element.tagName).toBe('HEADER');
    expect(wrapper.classes()).toContain(styles.loginMainHeader);
    expect(wrapper.find('h2').text()).toBe('Title');
    expect(wrapper.find(`p.${styles.loginMainHeaderDesc}`).text()).toBe('Subtitle');
    expect(wrapper.find(`.${styles.loginMainHeaderUtilities} button`).exists()).toBe(true);
    expect(wrapper.find('.extra').exists()).toBe(true);
  });

  it('omits empty sections', () => {
    const wrapper = mount(PfLoginMainHeader);
    expect(wrapper.find('h2').exists()).toBe(false);
    expect(wrapper.find(`.${styles.loginMainHeaderDesc}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.loginMainHeaderUtilities}`).exists()).toBe(false);
  });
});

describe('LoginMainBody', () => {
  it('renders the body', () => {
    const wrapper = mount(PfLoginMainBody, { slots: { default: () => 'Body' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.loginMainBody);
    expect(wrapper.text()).toBe('Body');
  });
});

describe('LoginMainFooter', () => {
  it('renders only the default slot without optional slots', () => {
    const wrapper = mount(PfLoginMainFooter, { slots: { default: () => 'Content' } });
    expect(wrapper.classes()).toContain(styles.loginMainFooter);
    expect(wrapper.text()).toBe('Content');
    expect(wrapper.find(`.${styles.loginMainFooterLinks}`).exists()).toBe(false);
    expect(wrapper.find(`.${styles.loginMainFooterBand}`).exists()).toBe(false);
  });

  it('renders the social links list', () => {
    const wrapper = mount(PfLoginMainFooter, { slots: { social: () => h(PfLoginMainFooterLinksItem, () => 'Link') } });
    expect(wrapper.find(`ul.${styles.loginMainFooterLinks} li`).text()).toBe('Link');
  });

  it('renders the band with signup and forgot credentials', () => {
    const wrapper = mount(PfLoginMainFooter, { slots: { 'forgot-credentials': () => h('p', 'Forgot') } });
    expect(wrapper.find(`.${styles.loginMainFooterBand}`).text()).toBe('Forgot');

    const signup = mount(PfLoginMainFooter, { slots: { signup: () => h('p', 'Sign up') } });
    expect(signup.find(`.${styles.loginMainFooterBand}`).text()).toBe('Sign up');
  });
});

describe('LoginMainFooterBandItem', () => {
  it('renders a paragraph with the band item class', () => {
    const wrapper = mount(PfLoginMainFooterBandItem, { slots: { default: () => 'Item' } });
    expect(wrapper.element.tagName).toBe('P');
    expect(wrapper.classes()).toContain(`${styles.loginMainFooterBand}-item`);
    expect(wrapper.text()).toBe('Item');
  });
});

describe('LoginMainFooterLinksItem', () => {
  it('renders a list item', () => {
    const wrapper = mount(PfLoginMainFooterLinksItem, { slots: { default: () => h('a', { href: '#' }, 'Link') } });
    expect(wrapper.element.tagName).toBe('LI');
    expect(wrapper.classes()).toContain(styles.loginMainFooterLinksItem);
    expect(wrapper.find('a').text()).toBe('Link');
  });
});
