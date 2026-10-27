// replaced by the bundler of the application, like in vue: vite would replace import.meta.env.DEV already in the library build
declare const process: { env: { NODE_ENV?: string } };

function isDev() {
  try {
    return process.env.NODE_ENV !== 'production';
  } catch {
    // no bundler and no process
    return true;
  }
}

/** Warns about a wrong usage, only outside of production builds */
export function devWarn(...args: unknown[]) {
  if (isDev()) {
    console.warn(...args);
  }
}

/** Reports a wrong usage, only outside of production builds */
export function devError(...args: unknown[]) {
  if (isDev()) {
    console.error(...args);
  }
}
