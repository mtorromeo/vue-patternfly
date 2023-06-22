import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function *findComponentExports(index) {
  for (const match of index.matchAll(/^export { default as (.*) } from /gm)) {
    yield match[1];
  }
}

function strComponentType(name) {
  return `    ${name}: typeof import('@vue-patternfly/core').${name},\n`;
}

function extractComponentsFromDist(distDir) {
  const index = fs.readFileSync(path.join(__dirname, '../dist', distDir, 'index.d.ts'), { encoding: 'utf-8' });

  let out = '';
  for (const name of findComponentExports(index)) {
    out += strComponentType(name);
  }

  for (const match of index.matchAll(/^export \* from '(.*)'/gm)) {
    const groupIndex = fs.readFileSync(path.join(__dirname, '../dist/', distDir, match[1], 'index.d.ts'), { encoding: 'utf-8' });
    for (const name of findComponentExports(groupIndex)) {
      out += strComponentType(name);
    }
  }

  return out;
}

const mainDTSPath = path.join(__dirname, '../dist/main.d.ts');
const mainDTS = fs.readFileSync(mainDTSPath, { encoding: 'utf-8' });

const declaration = `declare module 'vue' {
  export interface GlobalComponents {
${extractComponentsFromDist('components')}
${extractComponentsFromDist('layouts')}
  }\n}`;

const out = fs.openSync(mainDTSPath, 'w');
fs.writeSync(out, mainDTS.replace(/^declare module 'vue' \{\s*\}$/m, declaration));
fs.closeSync(out);
