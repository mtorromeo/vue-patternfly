import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const out = fs.openSync(path.join(__dirname, '../global.d.ts'), 'w');

function *findComponentExports(index) {
  for (const match of index.matchAll(/^export { default as (.*) } from /gm)) {
    yield match[1];
  }
}

function writeType(name) {
  fs.writeSync(out, `    ${name}: typeof import('@vue-patternfly/core').${name},\n`);
}

function extractComponentsFromDist(distDir) {
  const index = fs.readFileSync(path.join(__dirname, '../dist', distDir, 'index.d.ts'), { encoding: 'utf-8' });

  for (const name of findComponentExports(index)) {
    writeType(name);
  }

  for (const match of index.matchAll(/^export \* from '(.*)'/gm)) {
    const groupIndex = fs.readFileSync(path.join(__dirname, '../dist/', distDir, match[1], 'index.d.ts'), { encoding: 'utf-8' });
    for (const name of findComponentExports(groupIndex)) {
      writeType(name);
    }
  }
}

fs.writeSync(out, "declare module 'vue' {\n\
  export interface GlobalComponents {\n");

extractComponentsFromDist('components');
extractComponentsFromDist('layouts');

fs.writeSync(out, "  }\n}\n\nexport {};\n");
fs.closeSync(out);
