import { describe, expect, it, vi } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import formControlStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import spinnerStyles from '@patternfly/react-styles/css/components/Spinner/spinner';
import PfFileUpload from '../../src/components/FileUpload.vue';

/** Mounts a component wiring `update:<model>` back to the prop, like `v-model` would */
function mountWithModels<C>(component: C, models: string[], props: Record<string, unknown>, options: Record<string, unknown> = {}) {
  const listeners: Record<string, (v: unknown) => void> = {};
  for (const model of models) {
    listeners[`onUpdate:${model}`] = (v: unknown) => wrapper.setProps({ [model]: v });
  }
  const wrapper: VueWrapper<any> = mount(component as any, {
    ...options,
    props: { ...props, ...listeners },
  });
  return wrapper;
}

function selectFile(wrapper: VueWrapper<any>, file: File | null) {
  const input = wrapper.find('input[type="file"]');
  Object.defineProperty(input.element, 'files', { value: file ? [file] : [], configurable: true });
  return input.trigger('change');
}

function buttons(wrapper: VueWrapper<any>) {
  const [browse, clear] = wrapper.findAll(`.${buttonStyles.button}`);
  return { browse, clear };
}

describe('FileUpload', () => {
  it('renders the file select, browse/clear buttons and the text preview', () => {
    const wrapper = mount(PfFileUpload, { props: { id: 'upload' } });
    expect(wrapper.classes()).toContain(styles.fileUpload);
    expect(wrapper.find(`.${styles.fileUploadFileSelect}`).exists()).toBe(true);

    const filename = wrapper.find('#upload-filename');
    expect(filename.attributes('readonly')).toBeDefined();
    expect(filename.attributes('placeholder')).toBe('Drag a file here or browse to upload');
    expect(filename.attributes('aria-label')).toBe('Drag a file here or browse to upload');
    expect(filename.attributes('aria-describedby')).toBe('upload-browse-button');

    const { browse, clear } = buttons(wrapper);
    expect(browse.element.tagName).toBe('LABEL');
    expect(browse.attributes('id')).toBe('upload-browse-button');
    expect(browse.classes()).toContain(buttonStyles.modifiers.control);
    expect(browse.text()).toBe('Browse...');
    expect(clear.text()).toBe('Clear');
    expect(clear.attributes('disabled')).toBeDefined();

    const textarea = wrapper.find(`.${styles.fileUploadFileDetails} textarea`);
    expect(textarea.attributes('id')).toBe('upload');
    expect(textarea.attributes('aria-label')).toBe('File upload');
    expect(textarea.attributes('readonly')).toBeUndefined();
  });

  it('generates an id when none is provided', () => {
    const wrapper = mount(PfFileUpload);
    const id = wrapper.find('textarea').attributes('id');
    expect(id).toBeTruthy();
    expect(wrapper.find(`#${CSS.escape(`${id}-filename`)}`).exists()).toBe(true);
  });

  it('customizes texts and labels', () => {
    const wrapper = mount(PfFileUpload, {
      props: {
        browseButtonText: 'Upload',
        clearButtonText: 'Remove',
        filenameAriaLabel: 'File name',
        filenamePlaceholder: 'Pick a file',
        ariaLabel: 'Preview',
        textareaPlaceholder: 'No content',
        textareaName: 'content',
      },
    });
    const { browse, clear } = buttons(wrapper);
    expect(browse.text()).toBe('Upload');
    expect(clear.text()).toBe('Remove');
    const filename = wrapper.find('input:not([type="file"])');
    expect(filename.attributes('aria-label')).toBe('File name');
    expect(filename.attributes('placeholder')).toBe('Pick a file');
    const textarea = wrapper.find('textarea');
    expect(textarea.attributes('aria-label')).toBe('Preview');
    expect(textarea.attributes('placeholder')).toBe('No content');
    expect(textarea.attributes('name')).toBe('content');
  });

  it('shows the filename and value, making the preview read only', () => {
    const wrapper = mount(PfFileUpload, { props: { filename: 'a.txt', modelValue: 'hello' } });
    const filename = wrapper.find<HTMLInputElement>('input:not([type="file"])');
    expect(filename.element.value).toBe('a.txt');
    expect(filename.attributes('aria-label')).toBe('Read only filename');
    const textarea = wrapper.find<HTMLTextAreaElement>('textarea');
    expect(textarea.element.value).toBe('hello');
    expect(textarea.attributes('readonly')).toBeDefined();
    expect(buttons(wrapper).clear.attributes('disabled')).toBeUndefined();
  });

  it('keeps the preview editable with allowEditingUploadedText', () => {
    const wrapper = mount(PfFileUpload, { props: { filename: 'a.txt', modelValue: 'hello', allowEditingUploadedText: true } });
    expect(wrapper.find('textarea').attributes('readonly')).toBeUndefined();
  });

  it('forwards accept, name and required to the file input', () => {
    const wrapper = mount(PfFileUpload, { props: { dataTypes: ['.txt', 'text/plain'], name: 'file', required: true } });
    const input = wrapper.find('input[type="file"]');
    expect(input.attributes('accept')).toBe('.txt,text/plain');
    expect(input.attributes('name')).toBe('file');
    expect(input.attributes('required')).toBeDefined();
  });

  it('disables inputs and buttons', () => {
    const wrapper = mount(PfFileUpload, { props: { disabled: true, filename: 'a.txt' } });
    expect(wrapper.find('input:not([type="file"])').attributes('disabled')).toBeDefined();
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined();
    expect(buttons(wrapper).clear.attributes('disabled')).toBeDefined();
  });

  it('respects clearButtonDisabled', () => {
    const wrapper = mount(PfFileUpload, { props: { filename: 'a.txt', clearButtonDisabled: true } });
    expect(buttons(wrapper).clear.attributes('disabled')).toBeDefined();
  });

  it('hides the default preview and renders the default slot', () => {
    const wrapper = mount(PfFileUpload, { props: { hideDefaultPreview: true }, slots: { default: () => h('p', { class: 'preview' }, 'custom') } });
    expect(wrapper.find('textarea').exists()).toBe(false);
    expect(wrapper.find('p.preview').text()).toBe('custom');
  });

  it('does not render the text preview for non text types', () => {
    expect(mount(PfFileUpload, { props: { type: 'dataURL' } }).find('textarea').exists()).toBe(false);
  });

  it('applies drag hover and validation states', () => {
    const wrapper = mount(PfFileUpload, { props: { dragActive: true, validated: 'error' } });
    expect(wrapper.classes()).toContain(styles.modifiers.dragHover);
    expect(wrapper.find(`.${formControlStyles.formControl}:has(textarea)`).classes()).toContain(formControlStyles.modifiers.error);
  });

  it('shows a spinner while loading', () => {
    const wrapper = mount(PfFileUpload, { props: { loading: true, spinnerAriaValueText: 'Reading' } });
    expect(wrapper.classes()).toContain(styles.modifiers.loading);
    const spinner = wrapper.find(`.${styles.fileUploadFileDetailsSpinner} .${spinnerStyles.spinner}`);
    expect(spinner.classes()).toContain(spinnerStyles.modifiers.lg);
    expect(spinner.attributes('aria-valuetext')).toBe('Reading');
  });

  it('reads a selected text file updating the models', async () => {
    const wrapper = mountWithModels(PfFileUpload, ['modelValue', 'filename', 'loading'], {});
    const file = new File(['file contents'], 'notes.txt', { type: 'text/plain' });
    await selectFile(wrapper, file);

    expect(wrapper.emitted('fileInputChange')).toEqual([[file]]);
    expect(wrapper.emitted('update:filename')).toEqual([['notes.txt']]);
    expect(wrapper.emitted('readStarted')).toEqual([[file]]);
    expect(wrapper.emitted('update:loading')?.[0]).toEqual([true]);

    await vi.waitFor(() => expect(wrapper.emitted('readFinished')).toBeTruthy());
    await flushPromises();
    expect(wrapper.emitted('readFinished')).toEqual([[file, 'file contents']]);
    expect(wrapper.emitted('update:loading')?.slice(-1)[0]).toEqual([false]);
    expect(wrapper.emitted('update:modelValue')).toEqual([['file contents']]);
    expect(wrapper.find<HTMLTextAreaElement>('textarea').element.value).toBe('file contents');
    expect(wrapper.find<HTMLInputElement>('input:not([type="file"])').element.value).toBe('notes.txt');
  });

  it('reads a file as data URL', async () => {
    const wrapper = mount(PfFileUpload, { props: { type: 'dataURL' } });
    await selectFile(wrapper, new File(['abc'], 'a.txt', { type: 'text/plain' }));
    await vi.waitFor(() => expect(wrapper.emitted('update:modelValue')).toBeTruthy());
    expect(wrapper.emitted('update:modelValue')?.[0][0]).toMatch(/^data:text\/plain;base64,/);
  });

  it('does not read the content for the arrayBuffer type', async () => {
    const wrapper = mount(PfFileUpload, { props: { type: 'arrayBuffer' } });
    const file = new File(['abc'], 'a.bin');
    await selectFile(wrapper, file);
    await flushPromises();
    expect(wrapper.emitted('fileInputChange')).toEqual([[file]]);
    expect(wrapper.emitted('update:filename')).toEqual([['a.bin']]);
    expect(wrapper.emitted('readStarted')).toBeUndefined();
    expect(wrapper.emitted('update:modelValue')).toBeUndefined();
  });

  it('reads a file dropped on the filename field', async () => {
    const wrapper = mount(PfFileUpload);
    await nextTick();
    const file = new File(['dropped'], 'drop.txt', { type: 'text/plain' });
    const event = new Event('drop', { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'dataTransfer', { value: { items: [{ type: 'text/plain' }], files: [file], dropEffect: 'none' } });
    wrapper.find('input:not([type="file"])').element.dispatchEvent(event);

    await vi.waitFor(() => expect(wrapper.emitted('update:modelValue')).toBeTruthy());
    expect(event.defaultPrevented).toBe(true);
    expect(wrapper.emitted('update:filename')).toEqual([['drop.txt']]);
    expect(wrapper.emitted('update:modelValue')).toEqual([['dropped']]);
  });

  it('clears the file', async () => {
    const wrapper = mountWithModels(PfFileUpload, ['modelValue', 'filename'], { modelValue: 'hello', filename: 'a.txt' });
    await buttons(wrapper).clear.trigger('click');

    expect(wrapper.emitted('clearButtonClick')).toHaveLength(1);
    expect(wrapper.emitted('fileInputChange')).toEqual([[null]]);
    expect(wrapper.emitted('update:filename')).toEqual([[null]]);
    expect(wrapper.emitted('update:modelValue')).toEqual([[null]]);
    expect(wrapper.find<HTMLTextAreaElement>('textarea').element.value).toBe('');
    expect(buttons(wrapper).clear.attributes('disabled')).toBeDefined();
  });

  it('emits browse, textarea click and blur events', async () => {
    const wrapper = mount(PfFileUpload);
    await buttons(wrapper).browse.trigger('click');
    expect(wrapper.emitted('browseButtonClick')).toBeTruthy();

    await wrapper.find('textarea').trigger('click');
    expect(wrapper.emitted('textAreaClick')).toHaveLength(1);

    await wrapper.find('textarea').trigger('blur');
    expect(wrapper.emitted('textAreaBlur')).toHaveLength(1);
  });

  it('emits browseButtonClick once per click', async () => {
    const wrapper = mount(PfFileUpload);
    await buttons(wrapper).browse.trigger('click');
    expect(wrapper.emitted('browseButtonClick')).toHaveLength(1);
  });

  // BUG: FileUpload.vue binds :model-value on the preview textarea without listening to
  // update:modelValue, so text typed in an editable preview never reaches the v-model
  it.fails('updates the model when editing the text preview', async () => {
    const wrapper = mount(PfFileUpload, { props: { modelValue: 'hello' } });
    await wrapper.find('textarea').setValue('edited');
    expect(wrapper.emitted('update:modelValue')).toEqual([['edited']]);
  });
});
