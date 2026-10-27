import type { App } from 'vue';

import PfDragDropContainer from './DragDropContainer.vue';
import PfDragDropSort from './DragDropSort.vue';
import PfDroppable from './Droppable.vue';

export * from './common';
export { PfDragDropContainer, PfDragDropSort, PfDroppable };

export function install(app: App) {
  app.component('PfDragDropContainer', PfDragDropContainer);
  app.component('PfDragDropSort', PfDragDropSort);
  app.component('PfDroppable', PfDroppable);
}

const plugin = {
  install,
};

declare module 'vue' {
  export interface GlobalComponents {
    PfDragDropContainer: typeof PfDragDropContainer;
    PfDragDropSort: typeof PfDragDropSort;
    PfDroppable: typeof PfDroppable;
  }
}

export default plugin;
