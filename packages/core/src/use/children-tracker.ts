import { tryOnMounted } from "@vueuse/shared";
import { getCurrentInstance, inject, onBeforeUnmount, provide, ref, type Component, type InjectionKey, type Ref, type ComponentPublicInstance } from "vue";

type ChildrenTracker = {
  register: (item: Component) => void;
  unregister: (item: Component) => void;
}

export type ChildrenTrackerInjectionKey = InjectionKey<ChildrenTracker>;

const ChildrenTrackerSymbol = Symbol('Children tracker provide/inject symbol') as ChildrenTrackerInjectionKey;

export function provideChildrenTracker<T extends Component = ComponentPublicInstance>(symbol: symbol | ChildrenTrackerInjectionKey) {
  const items: Ref<T[]> = ref([]);

  provide(symbol || ChildrenTrackerSymbol, {
    register: (item: Component) => items.value.push(item as any),

    unregister: (item: Component) => {
      const idx = items.value.findIndex(i => i === item);
      if (idx >= 0) {
        items.value.splice(idx, 1);
      }
    },
  });

  return items;
}

export function useChildrenTracker(symbol: symbol | ChildrenTrackerInjectionKey) {
  const tracker = inject(symbol || ChildrenTrackerSymbol, null);

  if (tracker) {
    tryOnMounted(() => {
      const instance = getCurrentInstance();
      if (instance?.proxy) {
        tracker.register(instance.proxy);
      }
    });

    onBeforeUnmount(() => {
      const instance = getCurrentInstance();
      if (instance?.proxy) {
        tracker.unregister(instance.proxy);
      }
    });
  }

  return tracker;
}
