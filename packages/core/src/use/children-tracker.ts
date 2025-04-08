import { tryOnMounted } from "@vueuse/shared";
import { getCurrentInstance, inject, onBeforeUnmount, provide, type InjectionKey, type ComponentPublicInstance, reactive, type Reactive } from "vue";

type ChildrenTracker<T> = {
  register: (item: T) => void;
  unregister: (item: T) => void;
}

export type ChildrenTrackerInjectionKey<T> = InjectionKey<ChildrenTracker<T>>;

const ChildrenTrackerSymbol = Symbol('Children tracker provide/inject symbol') as ChildrenTrackerInjectionKey<ComponentPublicInstance>;

export function provideChildrenTracker<T = ComponentPublicInstance>(symbol: symbol | ChildrenTrackerInjectionKey<T>): Reactive<T[]> {
  const items = reactive<T[]>([]);

  provide(symbol || ChildrenTrackerSymbol, {
    register: (item: T) => items.push(item as any),

    unregister: (item: T) => {
      const idx = items.findIndex(i => i === item);
      if (idx >= 0) {
        items.splice(idx, 1);
      }
    },
  });

  return items;
}

export function useChildrenTracker<T extends ComponentPublicInstance>(symbol: ChildrenTrackerInjectionKey<T>): ChildrenTracker<T> | null;
export function useChildrenTracker<T>(symbol: ChildrenTrackerInjectionKey<T>, item: T): ChildrenTracker<T> | null;
export function useChildrenTracker<T = ComponentPublicInstance>(symbol: symbol | ChildrenTrackerInjectionKey<T>, item?: T) {
  const tracker = inject(symbol || ChildrenTrackerSymbol, null);

  if (tracker) {
    tryOnMounted(() => {
      if (item !== undefined) {
        tracker.register(item);
        return;
      }
      const instance = getCurrentInstance();
      if (instance?.proxy) {
        tracker.register(instance.proxy as T);
      }
    });

    onBeforeUnmount(() => {
      if (item !== undefined) {
        tracker.unregister(item);
        return;
      }
      const instance = getCurrentInstance();
      if (instance?.proxy) {
        tracker.unregister(instance.proxy as T);
      }
    });
  }

  return tracker;
}
