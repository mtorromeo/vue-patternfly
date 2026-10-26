import type { InjectionKey, Ref } from 'vue';

export type ModalProvide = {
  /** Id of the title rendered by the modal header, labelling the dialog */
  titleId: Ref<string | undefined>;
  /** Id of the description rendered by the modal header, describing the dialog */
  descriptionId: Ref<string | undefined>;
};

export const ModalKey = Symbol('ModalKey') as InjectionKey<ModalProvide>;

export type ModalTitleIconVariant = 'success' | 'danger' | 'warning' | 'info' | 'custom' | 'default';
