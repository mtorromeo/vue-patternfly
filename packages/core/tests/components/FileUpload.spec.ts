import { describe, expect, it, vi } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';
import { h, nextTick } from 'vue';
import styles from '@patternfly/react-styles/css/components/FileUpload/file-upload';
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';
import formControlStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import spinnerStyles from '@patternfly/react-styles/css/components/Spinner/spinner';
import PfFileUpload from '../../src/components/FileUpload/FileUpload.vue';
import PfFileUploadField from '../../src/components/FileUpload/FileUploadField.vue';
import PfFileUploadHelperText from '../../src/components/FileUpload/FileUploadHelperText.vue';

/** Mounts a component wiring `update:<model>` back to the prop, like `v-model` would */
function mountWithModels<C>(
  component: C,
  models: string[],
  props: Record<string, unknown>,
  options: Record<string, unknown> = {},
) {
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

function dragEvent(type: string, files: File[]) {
  const event = new Event(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'dataTransfer', { value: { types: ['Files'], files, dropEffect: 'none' } });
  return event;
}

function buttons(wrapper: VueWrapper<any>) {
  const [browse, clear] = wrapper.findAll(`.${buttonStyles.button}`);
  return { browse, clear };
}

describe('FileUpload', () => {
  it('renders the file select, browse/clear buttons and the text preview', () => {
    const wrapper = mount(PfFileUpload, { props: { id: 'upload', type: 'text' } });
    expect(wrapper.classes()).toContain(styles.fileUpload);
    expect(wrapper.find(`.${styles.fileUploadFileSelect}`).exists()).toBe(true);

    const filename = wrapper.find('#upload-filename');
    expect(filename.attributes('readonly')).toBeDefined();
    expect(filename.attributes('placeholder')).toBe('Drag a file here or browse to upload');
    expect(filename.attributes('aria-label')).toBe('Drag a file here or browse to upload');
    expect(filename.attributes('aria-describedby')).toBeUndefined();
    expect(filename.attributes('name')).toBe('upload-filename');

    const { browse, clear } = buttons(wrapper);
    expect(browse.element.tagName).toBe('BUTTON');
    expect(browse.attributes('disabled')).toBeUndefined();
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
    const wrapper = mount(PfFileUpload, { props: { type: 'text' } });
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
        type: 'text',
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
    const wrapper = mount(PfFileUpload, { props: { filename: 'a.txt', modelValue: 'hello', type: 'text' } });
    const filename = wrapper.find<HTMLInputElement>('input:not([type="file"])');
    expect(filename.element.value).toBe('a.txt');
    expect(filename.attributes('aria-label')).toBe('Read only filename');
    const textarea = wrapper.find<HTMLTextAreaElement>('textarea');
    expect(textarea.element.value).toBe('hello');
    expect(textarea.attributes('readonly')).toBeDefined();
    expect(buttons(wrapper).clear.attributes('disabled')).toBeUndefined();
  });

  it('keeps the preview editable with allowEditingUploadedText', () => {
    const wrapper = mount(PfFileUpload, {
      props: { filename: 'a.txt', modelValue: 'hello', allowEditingUploadedText: true, type: 'text' },
    });
    expect(wrapper.find('textarea').attributes('readonly')).toBeUndefined();
  });

  it('forwards accept and name to the hidden file input', () => {
    const wrapper = mount(PfFileUpload, { props: { accept: ['.txt', 'text/plain'], name: 'file' } });
    const input = wrapper.find('input[type="file"]');
    expect(input.attributes('accept')).toBe('.txt,text/plain');
    expect(input.attributes('name')).toBe('file');
    expect(input.attributes('hidden')).toBeDefined();
    expect(input.attributes('tabindex')).toBe('-1');
    expect(wrapper.find('input:not([type="file"])').attributes('name')).toMatch(/-filename$/);
  });

  it('only marks the text preview as required, not the hidden file input', () => {
    const wrapper = mount(PfFileUpload, { props: { type: 'text', required: true } });
    expect(wrapper.find('textarea').attributes('required')).toBeDefined();
    expect(wrapper.find('input[type="file"]').attributes('required')).toBeUndefined();
  });

  it('disables inputs and buttons', () => {
    const wrapper = mount(PfFileUpload, { props: { disabled: true, filename: 'a.txt', type: 'text' } });
    expect(wrapper.find('input:not([type="file"])').attributes('disabled')).toBeDefined();
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined();
    expect(buttons(wrapper).clear.attributes('disabled')).toBeDefined();
    expect(buttons(wrapper).browse.attributes('disabled')).toBeDefined();
  });

  it('respects clearButtonDisabled', () => {
    const wrapper = mount(PfFileUpload, { props: { filename: 'a.txt', clearButtonDisabled: true } });
    expect(buttons(wrapper).clear.attributes('disabled')).toBeDefined();
  });

  it('hides the default preview and renders the default slot', () => {
    const wrapper = mount(PfFileUpload, {
      props: { hideDefaultPreview: true, type: 'text' },
      slots: { default: () => h('p', { class: 'preview' }, 'custom') },
    });
    expect(wrapper.find('textarea').exists()).toBe(false);
    expect(wrapper.find('p.preview').text()).toBe('custom');
    expect(wrapper.find(`.${styles.fileUploadFileDetails}`).exists()).toBe(false);
  });

  it('does not render the file details without a text preview or loading', () => {
    for (const type of ['dataURL', undefined] as const) {
      const wrapper = mount(PfFileUpload, { props: { type } });
      expect(wrapper.find('textarea').exists()).toBe(false);
      expect(wrapper.find(`.${styles.fileUploadFileDetails}`).exists()).toBe(false);
    }
  });

  it('applies the validation state to the text preview', () => {
    const wrapper = mount(PfFileUpload, { props: { type: 'text', validated: 'error' } });
    expect(wrapper.find(`.${formControlStyles.formControl}:has(textarea)`).classes()).toContain(
      formControlStyles.modifiers.error,
    );
  });

  it('shows a spinner while loading', () => {
    const wrapper = mount(PfFileUpload, { props: { loading: true, spinnerAriaValueText: 'Reading' } });
    expect(wrapper.classes()).toContain(styles.modifiers.loading);
    const spinner = wrapper.find(`.${styles.fileUploadFileDetailsSpinner} .${spinnerStyles.spinner}`);
    expect(spinner.classes()).toContain(spinnerStyles.modifiers.lg);
    expect(spinner.attributes('aria-valuetext')).toBe('Reading');
  });

  it('reads a selected text file updating the models', async () => {
    const wrapper = mountWithModels(PfFileUpload, ['modelValue', 'filename', 'loading'], { type: 'text' });
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

  it('does not read the content without a type, using the File as value', async () => {
    const wrapper = mount(PfFileUpload);
    const file = new File(['abc'], 'a.bin');
    await selectFile(wrapper, file);
    await flushPromises();
    expect(wrapper.emitted('fileInputChange')).toEqual([[file]]);
    expect(wrapper.emitted('update:filename')).toEqual([['a.bin']]);
    expect(wrapper.emitted('readStarted')).toBeUndefined();
    expect(wrapper.emitted('update:modelValue')).toEqual([[file]]);
  });

  it('reads a file dropped anywhere on the component', async () => {
    const wrapper = mount(PfFileUpload, { props: { type: 'text' } });
    await nextTick();
    const file = new File(['dropped'], 'drop.txt', { type: 'text/plain' });
    const event = dragEvent('drop', [file]);
    wrapper.find(`.${styles.fileUploadFileDetails}`).element.dispatchEvent(event);

    await vi.waitFor(() => expect(wrapper.emitted('update:modelValue')).toBeTruthy());
    expect(event.defaultPrevented).toBe(true);
    expect(wrapper.emitted('update:filename')).toEqual([['drop.txt']]);
    expect(wrapper.emitted('update:modelValue')).toEqual([['dropped']]);
  });

  it('clears the file', async () => {
    const wrapper = mountWithModels(PfFileUpload, ['modelValue', 'filename'], {
      modelValue: 'hello',
      filename: 'a.txt',
      type: 'text',
    });
    await buttons(wrapper).clear.trigger('click');

    expect(wrapper.emitted('clearButtonClick')).toHaveLength(1);
    expect(wrapper.emitted('fileInputChange')).toEqual([[null]]);
    expect(wrapper.emitted('update:filename')).toEqual([[null]]);
    expect(wrapper.emitted('update:modelValue')).toEqual([[null]]);
    expect(wrapper.find<HTMLTextAreaElement>('textarea').element.value).toBe('');
    expect(buttons(wrapper).clear.attributes('disabled')).toBeDefined();
  });

  it('emits browse, textarea click and blur events', async () => {
    const onTextAreaClick = vi.fn();
    const onTextAreaBlur = vi.fn();
    const wrapper = mount(PfFileUpload, { props: { type: 'text' }, attrs: { onTextAreaClick, onTextAreaBlur } });
    await buttons(wrapper).browse.trigger('click');
    expect(wrapper.emitted('browseButtonClick')).toBeTruthy();

    await wrapper.find('textarea').trigger('click');
    expect(onTextAreaClick).toHaveBeenCalledTimes(1);

    await wrapper.find('textarea').trigger('blur');
    expect(onTextAreaBlur).toHaveBeenCalledTimes(1);
  });

  it('emits browseButtonClick once per click', async () => {
    const wrapper = mount(PfFileUpload);
    await buttons(wrapper).browse.trigger('click');
    expect(wrapper.emitted('browseButtonClick')).toHaveLength(1);
  });

  it('updates the model when editing the text preview', async () => {
    const wrapper = mount(PfFileUpload, { props: { modelValue: 'hello', type: 'text' } });
    await wrapper.find('textarea').setValue('edited');
    expect(wrapper.emitted('update:modelValue')).toEqual([['edited']]);
  });
  it('opens the file dialog from the browse button', async () => {
    const wrapper = mount(PfFileUpload);
    const click = vi.spyOn(wrapper.find<HTMLInputElement>('input[type="file"]').element, 'click');
    await buttons(wrapper).browse.trigger('click');
    expect(click).toHaveBeenCalledTimes(1);
  });

  it('resets the file input on clear, so the same file can be selected again', async () => {
    const wrapper = mount(PfFileUpload, { props: { filename: 'a.txt' } });
    const input = wrapper.find<HTMLInputElement>('input[type="file"]').element;
    let resetTo: string | undefined;
    Object.defineProperty(input, 'value', {
      set: v => {
        resetTo = v;
      },
      get: () => '',
      configurable: true,
    });
    await buttons(wrapper).clear.trigger('click');
    expect(resetTo).toBe('');
  });

  it('shows the drag hover state while dragging files over the component', async () => {
    const wrapper = mount(PfFileUpload);
    wrapper.element.dispatchEvent(dragEvent('dragenter', []));
    await nextTick();
    expect(wrapper.classes()).toContain(styles.modifiers.dragHover);
    wrapper.element.dispatchEvent(dragEvent('dragleave', []));
    await nextTick();
    expect(wrapper.classes()).not.toContain(styles.modifiers.dragHover);
  });

  it('does not accept drops when disabled', async () => {
    const wrapper = mount(PfFileUpload, { props: { disabled: true } });
    wrapper.element.dispatchEvent(dragEvent('drop', [new File(['a'], 'a.txt')]));
    await flushPromises();
    expect(wrapper.emitted('fileInputChange')).toBeUndefined();
  });

  it('accepts files matching an extension, a MIME type or a wildcard', async () => {
    for (const [accept, file] of [
      ['.csv', new File(['a'], 'data.CSV', { type: '' })],
      ['text/csv', new File(['a'], 'data', { type: 'text/csv' })],
      ['image/*', new File(['a'], 'pic', { type: 'image/png' })],
      ['.txt, text/csv', new File(['a'], 'data', { type: 'text/csv' })],
    ] as const) {
      const wrapper = mount(PfFileUpload, { props: { accept } });
      wrapper.element.dispatchEvent(dragEvent('drop', [file]));
      await flushPromises();
      expect(wrapper.emitted('dropAccepted')).toEqual([[[file]]]);
      expect(wrapper.emitted('fileInputChange')).toEqual([[file]]);
    }
  });

  it('rejects files of the wrong type or size with error codes', async () => {
    const wrapper = mount(PfFileUpload, { props: { accept: '.csv', maxSize: 2, minSize: 1 } });
    const wrongType = new File(['a'], 'a.txt', { type: 'text/plain' });
    wrapper.element.dispatchEvent(dragEvent('drop', [wrongType]));
    const tooLarge = new File(['abc'], 'a.csv');
    wrapper.element.dispatchEvent(dragEvent('drop', [tooLarge]));
    const tooSmall = new File([], 'a.csv');
    wrapper.element.dispatchEvent(dragEvent('drop', [tooSmall]));
    await flushPromises();

    const codes = wrapper
      .emitted<[{ file: File; errors: { code: string }[] }[]]>('dropRejected')!
      .map(([r]) => [r[0].file, r[0].errors.map(e => e.code)]);
    expect(codes).toEqual([
      [wrongType, ['file-invalid-type']],
      [tooLarge, ['file-too-large']],
      [tooSmall, ['file-too-small']],
    ]);
    expect(wrapper.emitted('fileInputChange')).toBeUndefined();
  });

  it('rejects more than one file', async () => {
    const wrapper = mount(PfFileUpload);
    const files = [new File(['a'], 'a.txt'), new File(['b'], 'b.txt')];
    wrapper.element.dispatchEvent(dragEvent('drop', files));
    await flushPromises();
    const [[rejections]] = wrapper.emitted<[{ file: File; errors: { code: string }[] }[]]>('dropRejected')!;
    expect(rejections.map(r => r.errors.map(e => e.code))).toEqual([['too-many-files'], ['too-many-files']]);
  });

  it('validates files selected with the browse dialog, resetting rejected ones', async () => {
    const wrapper = mount(PfFileUpload, { props: { accept: '.csv' } });
    const input = wrapper.find<HTMLInputElement>('input[type="file"]').element;
    let resetTo: string | undefined;
    Object.defineProperty(input, 'value', {
      set: v => {
        resetTo = v;
      },
      get: () => '',
      configurable: true,
    });
    await selectFile(wrapper, new File(['a'], 'a.txt'));
    expect(wrapper.emitted('dropRejected')).toHaveLength(1);
    expect(wrapper.emitted('fileInputChange')).toBeUndefined();
    expect(resetTo).toBe('');
  });

  it('emits readFailed and an empty value when the file cannot be read', async () => {
    const error = new DOMException('broken');
    const readAsText = vi.spyOn(FileReader.prototype, 'readAsText').mockImplementation(function (this: FileReader) {
      Object.defineProperty(this, 'error', { value: error });
      this.onerror?.(new ProgressEvent('error') as ProgressEvent<FileReader>);
    });
    const wrapper = mountWithModels(PfFileUpload, ['modelValue', 'loading'], { type: 'text' });
    const file = new File(['a'], 'a.txt');
    await selectFile(wrapper, file);
    await flushPromises();

    expect(wrapper.emitted('readFailed')).toEqual([[error, file]]);
    expect(wrapper.emitted('readFinished')).toEqual([[file, '']]);
    expect(wrapper.emitted('update:modelValue')).toEqual([['']]);
    expect(wrapper.emitted('update:loading')?.slice(-1)[0]).toEqual([false]);
    readAsText.mockRestore();
  });
});

describe('FileUploadField', () => {
  it('matches the upstream markup', () => {
    const wrapper = mount(PfFileUploadField, {
      props: { id: 'custom-file-upload', type: 'text', filenamePlaceholder: 'Do something custom with this!' },
      slots: { default: () => h('p', 'A custom preview') },
    });
    const [select, details, custom] = wrapper.element.children;
    expect(wrapper.classes()).toEqual([styles.fileUpload]);
    expect(select.className).toBe(styles.fileUploadFileSelect);
    expect(details.className).toBe(styles.fileUploadFileDetails);
    expect(details.querySelector('textarea')?.id).toBe('custom-file-upload');
    expect(custom.tagName).toBe('P');
    expect(wrapper.find('input').attributes('aria-label')).toBe('Do something custom with this!');
    expect(wrapper.find('input').attributes('name')).toBe('custom-file-upload-filename');
    expect(wrapper.find('input[type="file"]').exists()).toBe(false);
  });

  it('renders the browse button without aria-describedby by default', () => {
    const wrapper = mount(PfFileUploadField, { props: { browseButtonText: 'Upload' } });
    expect(buttons(wrapper).browse.attributes('aria-describedby')).toBeUndefined();
  });

  it('forwards browseButtonAttrs to the browse button', () => {
    const wrapper = mount(PfFileUploadField, { props: { browseButtonAttrs: { 'aria-describedby': 'helper-text' } } });
    expect(buttons(wrapper).browse.attributes('aria-describedby')).toBe('helper-text');
  });

  it('disables the browse button with browseButtonDisabled', () => {
    const wrapper = mount(PfFileUploadField);
    expect(buttons(wrapper).browse.attributes('disabled')).toBeUndefined();
    expect(
      buttons(mount(PfFileUploadField, { props: { browseButtonDisabled: true } })).browse.attributes('disabled'),
    ).toBeDefined();
  });

  it('applies the drag hover and loading modifiers', () => {
    const wrapper = mount(PfFileUploadField, { props: { dragActive: true, loading: true } });
    expect(wrapper.classes()).toContain(styles.modifiers.dragHover);
    expect(wrapper.classes()).toContain(styles.modifiers.loading);
    expect(wrapper.find(`.${styles.fileUploadFileDetails} .${styles.fileUploadFileDetailsSpinner}`).exists()).toBe(
      true,
    );
  });

  it('emits the button clicks and text changes', async () => {
    const wrapper = mount(PfFileUploadField, { props: { type: 'text', filename: 'a.txt' } });
    await buttons(wrapper).browse.trigger('click');
    await buttons(wrapper).clear.trigger('click');
    await wrapper.find('textarea').setValue('typed');
    expect(wrapper.emitted('browseButtonClick')).toHaveLength(1);
    expect(wrapper.emitted('clearButtonClick')).toHaveLength(1);
    expect(wrapper.emitted('update:modelValue')).toEqual([['typed']]);
  });
});

describe('FileUploadHelperText', () => {
  it('renders only the helper text class and forwards attributes', () => {
    const wrapper = mount(PfFileUploadHelperText, {
      attrs: { id: 'test-id', class: 'test' },
      slots: { default: 'Content' },
    });
    expect(wrapper.classes()).toEqual([`${styles.fileUpload}__helper-text`, 'test']);
    expect(wrapper.attributes('id')).toBe('test-id');
    expect(wrapper.text()).toBe('Content');
  });
});
