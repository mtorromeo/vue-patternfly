import { autoUpdate, computePosition } from "@floating-ui/dom";
import { resolveUnref, type MaybeComputedRef } from "@vueuse/shared";
import { onBeforeUnmount, reactive, unref, watch } from "vue";

export type FloatingOptions = Parameters<typeof computePosition>[2];

export function useFloatingUI(reference: MaybeComputedRef<HTMLElement | null | undefined>, floating: MaybeComputedRef<HTMLElement | null | undefined>, options: MaybeComputedRef<FloatingOptions>) {
  const defaultFloatingData: Awaited<ReturnType<typeof computePosition>> = {
    x: 0,
    y: 0,
    placement: 'top',
    strategy: 'absolute',
    middlewareData: {},
  };
  const floatingData = reactive(defaultFloatingData);

  let cleanup = (): any => undefined;

  watch([reference, floating, options], () => {
    const referenceElement = resolveUnref(reference);
    const floatingElement = resolveUnref(floating);
    cleanup();
    Object.assign(floatingData, defaultFloatingData);
    if (referenceElement && floatingElement) {
      cleanup = autoUpdate(referenceElement, floatingElement, async() => {
        const data = await computePosition(referenceElement, floatingElement, unref(options) as FloatingOptions);
        Object.assign(floatingData, data);
      });
    }
  }, { immediate: true });

  onBeforeUnmount(() => cleanup());

  return floatingData;
}
