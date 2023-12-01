import { autoUpdate, computePosition, type ReferenceElement } from "@floating-ui/dom";
import { onBeforeUnmount, reactive, toValue, unref, watch, type MaybeRef } from "vue";

export type FloatingOptions = Parameters<typeof computePosition>[2];

export function useFloatingUI(reference: MaybeRef<ReferenceElement | null | undefined>, floating: MaybeRef<HTMLElement | null | undefined>, options: MaybeRef<FloatingOptions>) {
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
    const referenceElement = toValue(reference);
    const floatingElement = toValue(floating);
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
