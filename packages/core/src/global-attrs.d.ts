import { type HTMLAttributes } from 'vue';

declare module 'vue' {
  export interface AllowedComponentProps {
    'aria-controls'?: HTMLAttributes['aria-controls'];
    'aria-describedby'?: HTMLAttributes['aria-describedby'];
    'aria-expanded'?: HTMLAttributes['aria-expanded'];
    'aria-haspopup'?: HTMLAttributes['aria-haspopup'];
    'aria-hidden'?: HTMLAttributes['aria-hidden'];
    'aria-label'?: HTMLAttributes['aria-label'];
    'aria-labelledby'?: HTMLAttributes['aria-labelledby'];
    'aria-modal'?: HTMLAttributes['aria-modal'];
    'aria-pressed'?: HTMLAttributes['aria-pressed'];
    'aria-valuetext'?: HTMLAttributes['aria-valuetext'];
    'aria-valid'?: HTMLAttributes['aria-valid'];
    'hidden'?: HTMLAttributes['hidden'];
    'id'?: HTMLAttributes['id'];
    'role'?: HTMLAttributes['role'];
    'tabindex'?: HTMLAttributes['tabindex'];
  }
}

export {};
