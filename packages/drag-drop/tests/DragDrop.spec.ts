import { describe, expect, test } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { defineComponent, h, nextTick, ref } from 'vue';
import { DragDropProvider, useDragDropManager } from '@dnd-kit/vue';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import dataListStyles from '@patternfly/react-styles/css/components/DataList/data-list';
import dragStyles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import dualListSelectorStyles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { PfDataList, PfDualListSelectorList, PfDualListSelectorPane } from '@vue-patternfly/core';
import { PfDragDropContainer, PfDragDropSort, PfDroppable, type DraggableObject } from '../src';

const sortItems = (): DraggableObject[] => [
  { id: '1', content: 'one' },
  { id: '2', content: 'two' },
  { id: '3', content: 'three' },
];

const containerItems = (): Record<string, DraggableObject[]> => ({
  container1: [
    { id: 'button-1', content: 'one' },
    { id: 'button-2', content: 'two' },
  ],
  container2: [
    { id: 'button-4', content: 'four' },
    { id: 'button-5', content: 'five' },
  ],
  container3: [],
});

/** A dnd-kit event as seen by the provider listeners, with the source dragged over the target */
function dragEvent(sourceId: string, targetId: string | undefined, canceled = false) {
  return {
    operation: {
      source: { id: sourceId, manager: { dragOperation: { position: { current: { x: 0, y: 0 } } } } },
      target: targetId === undefined ? null : { id: targetId },
      canceled,
    },
    canceled,
    defaultPrevented: false,
    preventDefault() {
      this.defaultPrevented = true;
    },
  };
}

function texts(el: Element | undefined) {
  return Array.from(el?.children ?? [], child => child.textContent?.trim());
}

function mountContainer(props: Record<string, unknown> = {}) {
  const items = ref(containerItems());
  const wrapper = mount(
    defineComponent({
      setup() {
        return () =>
          h(
            PfDragDropContainer,
            {
              items: items.value,
              'onUpdate:items': (value: Record<string, DraggableObject[]>) => (items.value = value),
              ...props,
            },
            () => Object.keys(items.value).map(id => h(PfDroppable, { id, items: items.value[id], 'data-zone': id })),
          );
      },
    }),
  );
  const provider = wrapper.findComponent(DragDropProvider);
  const container = wrapper.findComponent(PfDragDropContainer);
  const zone = (id: string) => wrapper.find(`[data-zone="${id}"]`).element;
  return { wrapper, items, provider, container, zone };
}

describe('PfDragDropSort', () => {
  test('renders a div per item with a drag button and the content', async () => {
    const wrapper = mount(PfDragDropSort, { props: { items: sortItems() }, attachTo: document.body });
    await flushPromises();

    const zone = wrapper.findComponent(PfDroppable).element as HTMLElement;
    expect(zone.tagName).toBe('DIV');
    expect(zone.children).toHaveLength(3);
    expect(texts(zone)).toEqual(['one', 'two', 'three']);

    const draggable = zone.children[0];
    expect(draggable.tagName).toBe('DIV');
    expect(draggable.className).toBe('');
    const button = draggable.children[0] as HTMLButtonElement;
    expect(button.tagName).toBe('BUTTON');
    expect(button.classList).toContain(buttonStyles.button);
    expect(button.classList).toContain(buttonStyles.modifiers.plain);
    expect(button.getAttribute('type')).toBe('button');
    expect(button.getAttribute('aria-label')).toBe('Drag button');
    expect(button.style.touchAction).toBe('none');
    const icon = button.querySelector(
      `.${buttonStyles.buttonIcon} > .${dataListStyles.dataListItemDraggableIcon} > svg`,
    );
    expect(icon).not.toBeNull();

    // dnd-kit sets the accessibility attributes of the handles in a scheduled task
    await new Promise(resolve => setTimeout(resolve));
    // the button is the drag handle, described by the dnd-kit keyboard instructions
    expect(button.getAttribute('aria-roledescription')).toBe('draggable');
    const description = document.getElementById(button.getAttribute('aria-describedby')!);
    expect(description?.textContent).toContain('To pick up a draggable item, press the space bar.');

    wrapper.unmount();
  });

  test('renders the item slot and binds the item attrs to its wrapper', () => {
    const wrapper = mount(PfDragDropSort, {
      props: { items: [{ id: 'a', content: 'ignored', attrs: { class: 'custom', 'data-x': 'y' } }] },
      slots: { item: ({ item }: { item: DraggableObject }) => h('b', `item ${item.id}`) },
    });

    const draggable = wrapper.findComponent(PfDroppable).element.children[0];
    expect(draggable.classList).toContain('custom');
    expect(draggable.getAttribute('data-x')).toBe('y');
    expect(draggable.querySelector('b')?.textContent).toBe('item a');
    expect(draggable.textContent).not.toContain('ignored');
  });

  test('component wraps the draggables and receives the attrs (data-list variant)', () => {
    const wrapper = mount(PfDragDropSort, {
      props: { items: sortItems(), variant: 'data-list', component: PfDataList },
      attrs: { compact: true, 'aria-label': 'draggable data list example' },
    });

    const list = wrapper.findComponent(PfDroppable).element as HTMLElement;
    expect(list.tagName).toBe('UL');
    expect(list.classList).toContain(dataListStyles.dataList);
    expect(list.classList).toContain(dataListStyles.modifiers.compact);
    expect(list.getAttribute('aria-label')).toBe('draggable data list example');

    const item = list.children[0];
    expect(item.tagName).toBe('LI');
    expect(item.id).toBe('1');
    expect(item.className).toBe(dataListStyles.dataListItem);
    const row = item.children[0];
    expect(row.className).toBe(dataListStyles.dataListItemRow);
    const control = row.children[0];
    expect(control.className).toBe(dataListStyles.dataListItemControl);
    const button = control.children[0];
    expect(button.classList).toContain(buttonStyles.button);
    expect(button.classList).toContain(dataListStyles.dataListItemDraggableButton);
    expect(row.textContent?.trim()).toBe('one');
  });

  test('drop emits the sorted items with the old and new index and updates the model', async () => {
    const wrapper = mount(PfDragDropSort, {
      props: {
        items: sortItems(),
        'onUpdate:items': (items: DraggableObject[]) => wrapper.setProps({ items }),
      },
    });
    const provider = wrapper.findComponent(DragDropProvider);

    provider.vm.$emit('dragStart', dragEvent('1', undefined));
    expect(wrapper.emitted('drag')?.[0][1]).toBe(0);

    provider.vm.$emit('dragOver', dragEvent('1', '3'));
    provider.vm.$emit('dragEnd', dragEvent('1', '3'));
    await nextTick();

    const [, items, oldIndex, newIndex] = wrapper.emitted('drop')![0] as [unknown, DraggableObject[], number, number];
    expect(items.map(item => item.id)).toEqual(['2', '3', '1']);
    expect(oldIndex).toBe(0);
    expect(newIndex).toBe(2);
    expect(texts(wrapper.findComponent(PfDroppable).element)).toEqual(['two', 'three', 'one']);
  });
});

describe('dual-list-selector variant', () => {
  test('renders dual list selector options with a drag button, toggling their selection', async () => {
    const items = ref<DraggableObject[]>([
      { id: 'Apple', content: 'Apple', attrs: { selected: false } },
      { id: 'Banana', content: 'Banana', attrs: { selected: true } },
    ]);
    const wrapper = mount(
      () =>
        h(PfDualListSelectorPane, { id: 'chosen', status: 'status' }, () =>
          h(PfDragDropSort, {
            items: items.value,
            variant: 'dual-list-selector',
            component: PfDualListSelectorList,
          }),
        ),
      { attachTo: document.body },
    );

    const list = wrapper.find('ul').element;
    expect(list.className).toBe(dualListSelectorStyles.dualListSelectorList);
    expect(list.getAttribute('role')).toBe('listbox');

    const option = list.children[0];
    expect(option.tagName).toBe('LI');
    expect(option.id).toBe('Apple');
    expect(option.className).toBe(dualListSelectorStyles.dualListSelectorListItem);
    expect(option.getAttribute('role')).toBe('presentation');
    const row = option.children[0];
    expect(row.className).toBe(dualListSelectorStyles.dualListSelectorListItemRow);
    const [button, item] = Array.from(row.children);
    expect(button.tagName).toBe('BUTTON');
    expect(button.classList).toContain(dualListSelectorStyles.dualListSelectorDraggable);
    expect(item.className).toBe(dualListSelectorStyles.dualListSelectorItem);
    expect(item.getAttribute('role')).toBe('option');
    expect(item.getAttribute('aria-selected')).toBe('false');
    expect(item.querySelector(`.${dualListSelectorStyles.dualListSelectorItemText}`)?.textContent).toBe('Apple');
    expect(list.children[1].children[0].classList).toContain(dualListSelectorStyles.modifiers.selected);

    await wrapper.find('#Apple [role="option"]').trigger('click');
    expect(item.getAttribute('aria-selected')).toBe('true');
    expect(list.getAttribute('aria-activedescendant')).toBe('Apple');

    wrapper.unmount();
  });

  test('the overlay copy is wrapped in a dual list selector', async () => {
    let manager: ReturnType<typeof useDragDropManager> | undefined;
    const Probe = defineComponent({
      setup() {
        manager = useDragDropManager();
        return () => null;
      },
    });
    const items = ref(containerItems());
    const wrapper = mount(
      () =>
        h(PfDragDropContainer, { items: items.value, variant: 'dual-list-selector' }, () => [
          h(Probe),
          h(PfDroppable, { id: 'container1', items: items.value.container1 }),
        ]),
      { attachTo: document.body },
    );
    await flushPromises();

    manager!.value.actions.start({ source: 'button-2', coordinates: { x: 0, y: 0 } });
    await flushPromises();

    const overlay = document.querySelector(`[data-dnd-overlay] > .${dragStyles.draggable}`);
    const selector = overlay?.children[0];
    expect(selector?.tagName).toBe('UL');
    expect(selector?.className).toBe(dualListSelectorStyles.dualListSelector);
    expect(selector?.children[0].className).toBe(dualListSelectorStyles.dualListSelectorListItem);
    expect(selector?.textContent?.trim()).toBe('two');

    wrapper.unmount();
  });
});

describe('PfDragDropContainer', () => {
  test('sorts inside a drop zone while dragging and commits on drop', async () => {
    const { provider, container, zone, items } = mountContainer();

    provider.vm.$emit('dragStart', dragEvent('button-1', undefined));
    const over = dragEvent('button-1', 'button-2');
    provider.vm.$emit('dragOver', over);
    await nextTick();

    // rendered from the drag state, with dnd-kit's optimistic sorting prevented
    expect(over.defaultPrevented).toBe(true);
    expect(texts(zone('container1'))).toEqual(['two', 'one']);
    expect(items.value.container1.map(item => item.id)).toEqual(['button-1', 'button-2']);
    expect(container.emitted('containerMove')).toBeUndefined();

    provider.vm.$emit('dragEnd', dragEvent('button-1', 'button-2'));
    await nextTick();

    expect(items.value.container1.map(item => item.id)).toEqual(['button-2', 'button-1']);
    expect(container.emitted('drop')?.[0][1]).toEqual(items.value);
  });

  test('moving to another drop zone emits containerMove', async () => {
    const { provider, container, zone, items } = mountContainer();

    provider.vm.$emit('dragStart', dragEvent('button-1', undefined));
    provider.vm.$emit('dragOver', dragEvent('button-1', 'button-5'));
    await nextTick();

    expect(texts(zone('container1'))).toEqual(['two']);
    expect(texts(zone('container2'))).toEqual(['four', 'one', 'five']);
    const moved = container.emitted('containerMove')![0][1] as Record<string, DraggableObject[]>;
    expect(moved.container2.map(item => item.id)).toEqual(['button-4', 'button-1', 'button-5']);

    provider.vm.$emit('dragEnd', dragEvent('button-1', 'button-5'));
    await nextTick();
    expect(items.value).toEqual(moved);
    expect(container.emitted('drop')).toHaveLength(1);
  });

  test('drops into an empty drop zone', async () => {
    const { provider, zone, items } = mountContainer();

    provider.vm.$emit('dragStart', dragEvent('button-4', undefined));
    provider.vm.$emit('dragOver', dragEvent('button-4', 'container3'));
    provider.vm.$emit('dragEnd', dragEvent('button-4', 'container3'));
    await nextTick();

    expect(items.value.container3.map(item => item.id)).toEqual(['button-4']);
    expect(texts(zone('container3'))).toEqual(['four']);
  });

  test('cancel restores the items as they were before the drag', async () => {
    const { provider, container, zone, items } = mountContainer();
    const before = items.value;

    provider.vm.$emit('dragStart', dragEvent('button-1', undefined));
    provider.vm.$emit('dragOver', dragEvent('button-1', 'button-5'));
    provider.vm.$emit('dragEnd', dragEvent('button-1', 'button-5', true));
    await nextTick();

    expect(container.emitted('cancel')?.[0][1]).toBe(before);
    expect(container.emitted('drop')).toBeUndefined();
    expect(items.value).toBe(before);
    expect(texts(zone('container1'))).toEqual(['one', 'two']);
    expect(texts(zone('container2'))).toEqual(['four', 'five']);
  });

  test('a drop without changes emits nothing', async () => {
    const { provider, container } = mountContainer();

    provider.vm.$emit('dragStart', dragEvent('button-1', undefined));
    provider.vm.$emit('dragEnd', dragEvent('button-1', 'button-1'));
    await nextTick();

    expect(container.emitted('drop')).toBeUndefined();
    expect(container.emitted('update:items')).toBeUndefined();
  });

  test('droppables inherit the variant of the container', () => {
    const { zone } = mountContainer({ variant: 'data-list' });
    expect(zone('container1').children[0].tagName).toBe('LI');
    expect(zone('container1').children[0].className).toBe(dataListStyles.dataListItem);
  });

  test('the drag source is marked as dragging and the overlay renders a copy', async () => {
    let manager: ReturnType<typeof useDragDropManager> | undefined;
    const Probe = defineComponent({
      setup() {
        manager = useDragDropManager();
        return () => null;
      },
    });
    const items = ref(containerItems());
    const wrapper = mount(
      () =>
        h(
          PfDragDropContainer,
          { items: items.value, variant: 'data-list', overlayAttrs: { compact: true } },
          {
            default: () => [
              h(Probe),
              h(
                PfDroppable,
                { id: 'container1', items: items.value.container1 },
                {
                  item: ({ item }: { item: DraggableObject }) => h('em', item.content),
                },
              ),
            ],
          },
        ),
      { attachTo: document.body },
    );
    await flushPromises();

    manager!.value.actions.start({ source: 'button-1', coordinates: { x: 0, y: 0 } });
    await flushPromises();

    const source = wrapper.find('#button-1').element;
    expect(source.classList).toContain(dragStyles.droppable);
    expect(source.classList).toContain(dragStyles.modifiers.dragging);

    const overlay = document.querySelector(`[data-dnd-overlay] > .${dragStyles.draggable}`);
    expect(overlay?.classList).toContain(dragStyles.modifiers.dragging);
    const list = overlay?.children[0];
    expect(list?.tagName).toBe('UL');
    expect(list?.classList).toContain(dataListStyles.modifiers.compact);
    expect(list?.getAttribute('aria-label')).toBe('draggable overlay');
    const copy = list?.children[0];
    expect(copy?.classList).not.toContain(dragStyles.droppable);
    expect(copy?.querySelector('em')?.textContent).toBe('one');

    wrapper.unmount();
  });
});
