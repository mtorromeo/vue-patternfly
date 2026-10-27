import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { devError, devWarn } from '../../src/helpers/dev';
import PfTextInput from '../../src/components/TextInput.vue';

describe('dev warnings', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('logs outside of production', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});

    devWarn('a', 1);
    devError('b');

    expect(warn).toHaveBeenCalledWith('a', 1);
    expect(error).toHaveBeenCalledWith('b');
  });

  it('logs nothing in production', () => {
    vi.stubEnv('NODE_ENV', 'production');
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});

    devWarn('a');
    devError('b');
    mount(PfTextInput);

    expect(warn).not.toHaveBeenCalled();
    expect(error).not.toHaveBeenCalled();
  });
});
