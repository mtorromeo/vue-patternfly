import { describe, expect, it, vi } from 'vitest';
import { mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/Card/card';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';
import PfCard from '../../src/components/Card/Card.vue';
import PfCardActions from '../../src/components/Card/CardActions.vue';
import PfCardBody from '../../src/components/Card/CardBody.vue';
import PfCardExpandableContent from '../../src/components/Card/CardExpandableContent.vue';
import PfCardFooter from '../../src/components/Card/CardFooter.vue';
import PfCardHeader from '../../src/components/Card/CardHeader.vue';
import PfCardHeaderMain from '../../src/components/Card/CardHeaderMain.vue';
import PfCardTitle from '../../src/components/Card/CardTitle.vue';

/** Mounts a component wiring `update:<model>` back to the prop, like `v-model` would */
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

describe('Card', () => {
  it('renders a div with the card class and the default slot', () => {
    const wrapper = mount(PfCard, { slots: { default: () => h('p', 'Content') } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual([styles.card]);
    expect(wrapper.attributes('tabindex')).toBeUndefined();
    expect(wrapper.find('p').text()).toBe('Content');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/Card');
  });

  it('renders a custom component and forwards attributes', () => {
    const wrapper = mount(PfCard, { props: { component: 'article' }, attrs: { id: 'card', 'aria-label': 'My card' } });

    expect(wrapper.element.tagName).toBe('ARTICLE');
    expect(wrapper.attributes('id')).toBe('card');
    expect(wrapper.attributes('aria-label')).toBe('My card');
  });

  it('applies style modifiers', () => {
    const wrapper = mount(PfCard, {
      props: { compact: true, fullHeight: true, plain: true, glass: true, variant: 'secondary', disabled: true },
    });

    for (const modifier of ['compact', 'fullHeight', 'plain', 'glass', 'secondary', 'disabled'] as const) {
      expect(wrapper.classes()).toContain(styles.modifiers[modifier]);
    }
  });

  it('applies the large modifier only when not compact', async () => {
    const wrapper = mount(PfCard, { props: { large: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.displayLg);

    await wrapper.setProps({ compact: true });
    expect(wrapper.classes()).not.toContain(styles.modifiers.displayLg);
  });

  it('applies the expanded modifier', () => {
    const wrapper = mount(PfCard, { props: { expanded: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
  });

  it('is clickable when an onClick handler is set', async () => {
    const onClick = vi.fn();
    const wrapper = mount(PfCard, { props: { onClick } });

    expect(wrapper.classes()).toContain(styles.modifiers.clickable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.selectable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.current);

    await wrapper.trigger('click');
    expect(onClick).toHaveBeenCalledTimes(1);

    await wrapper.setProps({ clicked: true });
    expect(wrapper.classes()).toContain(styles.modifiers.current);
  });

  it('is selectable and focusable', async () => {
    const wrapper = mount(PfCard, { props: { selectable: true } });

    expect(wrapper.classes()).toContain(styles.modifiers.selectable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.clickable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.selected);
    expect(wrapper.attributes('tabindex')).toBe('0');

    await wrapper.setProps({ selected: true });
    expect(wrapper.classes()).toContain(styles.modifiers.selected);
  });

  it('is both selectable and clickable with an onClick handler', async () => {
    const wrapper = mount(PfCard, { props: { selectable: true, onClick: vi.fn() } });

    expect(wrapper.classes()).toContain(styles.modifiers.selectable);
    expect(wrapper.classes()).toContain(styles.modifiers.clickable);
    expect(wrapper.classes()).not.toContain(styles.modifiers.current);

    await wrapper.setProps({ selected: true });
    expect(wrapper.classes()).toContain(styles.modifiers.current);
    expect(wrapper.classes()).not.toContain(styles.modifiers.selected);
  });

  it('renders a selection checkbox in the header bound to v-model:selected', async () => {
    const wrapper = mountWithModel(PfCard, 'selected', { selected: false, selectable: true, selectableInput: 'visible', name: 'card-check' }, {
      slots: { default: () => h(PfCardHeader, () => 'Header') },
    });

    const input = wrapper.find<HTMLInputElement>(`.${styles.cardSelectableActions} input[type="checkbox"]`);
    expect(input.exists()).toBe(true);
    expect(input.attributes('name')).toBe('card-check');
    expect(input.attributes('tabindex')).toBe('-1');
    expect(input.classes()).not.toContain(styles.screenReader);
    expect(input.element.checked).toBe(false);

    await input.setValue(true);
    expect(wrapper.emitted('update:selected')).toEqual([[true]]);
    expect(wrapper.classes()).toContain(styles.modifiers.selected);

    await wrapper.setProps({ selected: false });
    expect(input.element.checked).toBe(false);
  });

  it('hides the selection checkbox visually by default', () => {
    const wrapper = mount(PfCard, { props: { selectableInput: true }, slots: { default: () => h(PfCardHeader) } });
    expect(wrapper.find(`.${styles.cardSelectableActions} input`).classes()).toContain(styles.screenReader);
  });

  it('disables the selection checkbox when the card is disabled', () => {
    const wrapper = mount(PfCard, { props: { name: 'n', disabled: true }, slots: { default: () => h(PfCardHeader) } });
    expect(wrapper.find(`.${styles.cardSelectableActions} input`).attributes('disabled')).toBeDefined();
  });

  it('does not render a selection checkbox without selectableInput or name', () => {
    const wrapper = mount(PfCard, { props: { selectable: true }, slots: { default: () => h(PfCardHeader) } });
    expect(wrapper.find(`.${styles.cardSelectableActions}`).exists()).toBe(false);
  });

  it('emits change when the selection checkbox changes', async () => {
    const wrapper = mount(PfCard, { props: { name: 'n' }, slots: { default: () => h(PfCardHeader) } });
    await wrapper.find(`.${styles.cardSelectableActions} input`).setValue(true);
    expect(wrapper.emitted('change')).toHaveLength(1);
  });

  describe('expandable', () => {
    const expandableSlots = {
      default: () => [
        h(PfCardHeader, () => h(PfCardTitle, () => 'Title')),
        h(PfCardExpandableContent, () => h(PfCardBody, () => 'Hidden body')),
      ],
    };

    it('renders a toggle button that expands and collapses the content with v-model:expanded', async () => {
      const wrapper = mountWithModel(PfCard, 'expanded', { expanded: false }, { slots: expandableSlots });

      const toggle = wrapper.find(`.${styles.cardHeaderToggle} button`);
      expect(toggle.classes()).toContain(buttonStyles.modifiers.plain);
      expect(toggle.find(`.${styles.cardHeaderToggleIcon} svg`).exists()).toBe(true);
      expect(wrapper.find(`.${styles.cardExpandableContent}`).exists()).toBe(false);

      await toggle.trigger('click');
      expect(wrapper.emitted('update:expanded')).toEqual([[true]]);
      expect(wrapper.classes()).toContain(styles.modifiers.expanded);
      expect(wrapper.find(`.${styles.cardExpandableContent}`).text()).toBe('Hidden body');

      await toggle.trigger('click');
      expect(wrapper.emitted('update:expanded')?.[1]).toEqual([false]);
      expect(wrapper.find(`.${styles.cardExpandableContent}`).exists()).toBe(false);
    });

    it('works uncontrolled with the expandable prop', async () => {
      const wrapper = mount(PfCard, { props: { expandable: true }, slots: expandableSlots });

      expect(wrapper.find(`.${styles.cardExpandableContent}`).exists()).toBe(false);
      await wrapper.find(`.${styles.cardHeaderToggle} button`).trigger('click');
      expect(wrapper.find(`.${styles.cardExpandableContent}`).exists()).toBe(true);
      expect(wrapper.classes()).toContain(styles.modifiers.expanded);
    });

    it('does not render a toggle when not expandable', () => {
      const wrapper = mount(PfCard, { slots: expandableSlots });
      expect(wrapper.find(`.${styles.cardHeaderToggle}`).exists()).toBe(false);
    });

    it('places the toggle before the content by default and after it when right aligned', async () => {
      const wrapper = mount(PfCard, {
        props: { expanded: false },
        slots: { default: () => h(PfCardHeader, { toggleRightAligned: true }, () => h('span', { class: 'content' })) },
      });

      const header = wrapper.find(`.${styles.cardHeader}`);
      expect(header.classes()).toContain(styles.modifiers.toggleRight);
      const children = Array.from(header.element.children);
      expect(children[0]?.classList.contains('content')).toBe(true);
      expect(children[1]?.classList.contains(styles.cardHeaderToggle)).toBe(true);

      const left = mount(PfCard, {
        props: { expanded: false },
        slots: { default: () => h(PfCardHeader, () => h('span', { class: 'content' })) },
      });
      const leftChildren = Array.from(left.find(`.${styles.cardHeader}`).element.children);
      expect(leftChildren[0]?.classList.contains(styles.cardHeaderToggle)).toBe(true);
      expect(leftChildren[1]?.classList.contains('content')).toBe(true);
    });

    it('forwards toggleButtonAttrs to the toggle button', () => {
      const wrapper = mount(PfCard, {
        props: { expanded: false },
        slots: { default: () => h(PfCardHeader, { toggleButtonAttrs: { 'aria-label': 'Details', id: 'toggle' } as any }) },
      });

      const toggle = wrapper.find(`.${styles.cardHeaderToggle} button`);
      expect(toggle.attributes('aria-label')).toBe('Details');
      expect(toggle.attributes('id')).toBe('toggle');
    });

    // BUG: CardHeader.vue:4 does not set aria-expanded on the toggle button (PatternFly React does)
    it.fails('exposes the expanded state on the toggle button', () => {
      const wrapper = mount(PfCard, { props: { expanded: true }, slots: expandableSlots });
      expect(wrapper.find(`.${styles.cardHeaderToggle} button`).attributes('aria-expanded')).toBe('true');
    });
  });
});

describe('CardHeader', () => {
  it('renders the header class, wrap modifier and forwards attributes', () => {
    const card = mount(PfCard, {
      slots: { default: () => h(PfCardHeader, { wrap: true, ouiaId: 'hdr', id: 'header' }, () => 'Header') },
    });

    const header = card.find(`.${styles.cardHeader}`);
    expect(header.classes()).toContain(styles.modifiers.wrap);
    expect(header.classes()).not.toContain(styles.modifiers.toggleRight);
    expect(header.attributes('id')).toBe('header');
    expect(header.attributes('data-ouia-component-id')).toBe('hdr');
    expect(header.text()).toBe('Header');
  });

  it('does not render toggle or checkbox outside a card', () => {
    const wrapper = mount(PfCardHeader);
    expect(wrapper.find(`.${styles.cardHeaderToggle}`).exists()).toBe(false);
    expect(wrapper.find(`.${checkStyles.check}`).exists()).toBe(false);
  });

  it('exposes a toggle method that flips the card expanded state', async () => {
    const wrapper = mount(PfCard, { props: { expandable: true }, slots: { default: () => h(PfCardHeader) } });

    (wrapper.findComponent(PfCardHeader).vm as unknown as { toggle: () => void }).toggle();
    await nextTick();
    expect(wrapper.classes()).toContain(styles.modifiers.expanded);
  });
});

describe('CardTitle', () => {
  it('renders the title text in a div by default', () => {
    const wrapper = mount(PfCardTitle, { slots: { default: () => 'Title' } });

    expect(wrapper.classes()).toContain(styles.cardTitle);
    const text = wrapper.find(`.${styles.cardTitleText}`);
    expect(text.element.tagName).toBe('DIV');
    expect(text.text()).toBe('Title');
    expect(text.attributes('data-ouia-component-type')).toBe('PF/CardTitle');
    expect(wrapper.find(`.${styles.cardSubtitle}`).exists()).toBe(false);
  });

  it('renders a custom component and a subtitle', () => {
    const wrapper = mount(PfCardTitle, { props: { component: 'h2' }, slots: { default: () => 'Title', subtitle: () => 'Sub' } });

    expect(wrapper.find(`.${styles.cardTitleText}`).element.tagName).toBe('H2');
    expect(wrapper.find(`.${styles.cardSubtitle}`).text()).toBe('Sub');
  });
});

describe('CardBody', () => {
  it('renders a div by default with the body class', () => {
    const wrapper = mount(PfCardBody, { slots: { default: () => 'Body' } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.cardBody);
    expect(wrapper.text()).toBe('Body');
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfCardBody, { props: { component: 'section' } });
    expect(wrapper.element.tagName).toBe('SECTION');
  });

  it('does not apply the no-fill modifier when filled', () => {
    const wrapper = mount(PfCardBody, { props: { filled: true } });
    expect(wrapper.classes()).not.toContain(styles.modifiers.noFill);
  });

  // BUG: CardBody.vue:2 applies pf-m-no-fill whenever `filled` is falsy, and `filled` defaults to false,
  // so every body is no-fill by default (PatternFly React defaults isFilled to true)
  it.fails('fills the card height by default', () => {
    const wrapper = mount(PfCardBody);
    expect(wrapper.classes()).not.toContain(styles.modifiers.noFill);
  });
});

describe('CardFooter', () => {
  it('renders a div by default with the footer class', () => {
    const wrapper = mount(PfCardFooter, { slots: { default: () => 'Footer' } });

    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toContain(styles.cardFooter);
    expect(wrapper.text()).toBe('Footer');
  });

  it('renders a custom component', () => {
    const wrapper = mount(PfCardFooter, { props: { component: 'footer' } });
    expect(wrapper.element.tagName).toBe('FOOTER');
  });
});

describe('CardActions', () => {
  it('renders the actions class and noOffset modifier', async () => {
    const wrapper = mount(PfCardActions, { slots: { default: () => h('button', 'Act') } });

    expect(wrapper.classes()).toContain(styles.cardActions);
    expect(wrapper.classes()).not.toContain(styles.modifiers.noOffset);
    expect(wrapper.find('button').text()).toBe('Act');

    await wrapper.setProps({ noOffset: true });
    expect(wrapper.classes()).toContain(styles.modifiers.noOffset);
  });
});

describe('CardHeaderMain', () => {
  it('renders the default slot', () => {
    const wrapper = mount(PfCardHeaderMain, { slots: { default: () => 'Main' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.text()).toBe('Main');
    expect(wrapper.attributes('data-ouia-component-type')).toBe('PF/CardHeaderMain');
  });

  // BUG: CardHeaderMain.vue:2 never applies styles.cardHeaderMain to its root
  it.fails('applies the header main class', () => {
    const wrapper = mount(PfCardHeaderMain);
    expect(wrapper.classes()).toContain(styles.cardHeaderMain);
  });
});

describe('CardExpandableContent', () => {
  it('is not rendered outside of a card', () => {
    const wrapper = mount(PfCardExpandableContent, { slots: { default: () => 'Content' } });
    expect(wrapper.find(`.${styles.cardExpandableContent}`).exists()).toBe(false);
  });

  it('is rendered inside an expanded card', () => {
    const wrapper = mount(PfCard, { props: { expanded: true }, slots: { default: () => h(PfCardExpandableContent, () => 'Content') } });
    expect(wrapper.find(`.${styles.cardExpandableContent}`).text()).toBe('Content');
  });
});
