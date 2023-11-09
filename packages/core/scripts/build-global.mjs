import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

/** @type {string} */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @param {string} index */
function *findComponentExports(index) {
  for (const match of index.matchAll(/^export { default as (.*) } from /gm)) {
    yield match[1];
  }
}

/**
 * @param {string} distDir
 * @param {string} name
 */
function strComponentType(distDir, name) {
  return `    ${name}: typeof import('./${distDir}').${name},\n`;
}

/** @param {string} distDir */
function extractComponentsFromDist(distDir) {
  const index = fs.readFileSync(path.join(__dirname, '../dist', distDir, 'index.d.ts'), { encoding: 'utf-8' });

  let out = '';
  for (const name of findComponentExports(index)) {
    out += strComponentType(distDir, name);
  }

  for (const match of index.matchAll(/^export \* from '(.*)'/gm)) {
    /** @type {string} */
    const groupIndex = fs.readFileSync(path.join(__dirname, '../dist/', distDir, match[1], 'index.d.ts'), { encoding: 'utf-8' });
    for (const name of findComponentExports(groupIndex)) {
      out += strComponentType(distDir, name);
    }
  }

  return out;
}

/** @type {string} */
const mainDTSPath = path.join(__dirname, '../dist/main.d.ts');
/** @type {string} */
const mainDTS = fs.readFileSync(mainDTSPath, { encoding: 'utf-8' });

const declaration = `declare module 'vue' {
  export interface GlobalComponents {
${extractComponentsFromDist('components')}
${extractComponentsFromDist('layouts')}
  }\n}`;

if (!mainDTS.includes(declaration)) {
  const out = fs.openSync(mainDTSPath, 'w');
  fs.writeSync(out, mainDTS.replace(/^declare module 'vue' \{.*\}$/ms, declaration));
  fs.closeSync(out);
}
