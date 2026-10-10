import { describe, it, expect } from 'vitest';

// The build emits every SFC as a wrapper module that copies the component into a local variable.
// Inside an import cycle that copy can run before the component is defined, leaving the wrapper's
// default export undefined forever (e.g. Menu.vue <-> MenuItem.vue left PfMenuItem unregistered).
// Injection keys shared between a parent and its children belong in a common.ts module instead.

const sources = import.meta.glob<string>(['../src/**/*.{vue,ts}', '!../src/**/*.d.ts'], { query: '?raw', import: 'default', eager: true });

const importRe = /^\s*(?:import|export)\s+(type\s+)?([^;]*?)\s+from\s+['"](\.[^'"]+)['"]|^\s*import\s+['"](\.[^'"]+)['"]/gm;

function isTypeOnly(typeKeyword: string | undefined, specifiers: string) {
  if (typeKeyword) {
    return true;
  }
  const named = specifiers.match(/^\{([\s\S]*)\}$/);
  return !!named && named[1].split(',').map(s => s.trim()).filter(Boolean).every(s => s.startsWith('type '));
}

function resolvePath(from: string, specifier: string) {
  const segments = from.split('/').slice(0, -1);
  for (const segment of specifier.split('/')) {
    if (segment === '..') {
      segments.pop();
    } else if (segment !== '.') {
      segments.push(segment);
    }
  }
  return segments.join('/');
}

function resolveImport(from: string, specifier: string) {
  const path = resolvePath(from, specifier);
  return [path, `${path}.ts`, `${path}/index.ts`].find(p => p in sources);
}

function runtimeImports(file: string) {
  const imports: string[] = [];
  for (const [, typeKeyword, specifiers, from, bare] of sources[file].matchAll(importRe)) {
    if (bare || !isTypeOnly(typeKeyword, specifiers)) {
      const target = resolveImport(file, bare ?? from);
      if (target) {
        imports.push(target);
      }
    }
  }
  return imports;
}

function findCycles(graph: Map<string, string[]>) {
  const cycles: string[][] = [];
  const done = new Set<string>();
  const stack: string[] = [];

  function visit(file: string) {
    const index = stack.indexOf(file);
    if (index >= 0) {
      cycles.push([...stack.slice(index), file]);
      return;
    }
    if (done.has(file)) {
      return;
    }
    stack.push(file);
    for (const dep of graph.get(file) ?? []) {
      visit(dep);
    }
    stack.pop();
    done.add(file);
  }

  for (const file of graph.keys()) {
    visit(file);
  }
  return cycles;
}

describe('source imports', () => {
  it('have no runtime cycles', () => {
    const graph = new Map(Object.keys(sources).map(file => [file, runtimeImports(file)]));
    const cycles = findCycles(graph).map(cycle => cycle.map(file => file.replace('../src/', '')).join(' -> '));
    expect(cycles).toEqual([]);
  });
});
