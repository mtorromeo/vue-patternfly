const babel = require('@babel/core');
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');
const { generateIcons } = require('./generateIcons');

const srcDir = path.join(__dirname, '../src');
const outDir = path.join(__dirname, '../dist');

const removeSnake = s =>
  s
    .toUpperCase()
    .replace(/[-_]/, '');
const toCamel = s => `${s[0].toUpperCase()}${s.substr(1).replace(/([-_][a-z0-9])/gi, removeSnake)}`;

const compileIcon = (jsName, icon) => `
import { createIcon } from '../createIcon';

export const ${jsName}Config = {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0}
};

export const ${jsName} = createIcon(${jsName}Config);

export default ${jsName};
`.trim();

const compileDTSIcon = (jsName, icon) => `
import { createIcon } from '../createIcon';

export declare const ${jsName}Config: {
  name: '${jsName}',
  height: ${icon.height},
  width: ${icon.width},
  svgPath: '${icon.svgPathData}',
  yOffset: ${icon.yOffset || 0},
  xOffset: ${icon.xOffset || 0}
};

export declare const ${jsName}: ReturnType<typeof createIcon>;

export default ${jsName};
`.trim();

async function esm2cjs(dest, code) {
  const cjs = await babel.transformAsync(code, {
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  });
  await fs.outputFile(dest, cjs.code);
}

(async function(icons) {
  await fs.copy(srcDir, path.join(outDir, 'esm'), {
    filter: (src) => !src.endsWith('.ts'),
  });
  for (const js of glob.sync(path.join(srcDir, '**/*.js'))) {
    const relFilename = js.slice(srcDir.length);
    const dest = path.join(outDir, 'js', relFilename);
    (async() => {
      const code = await fs.readFile(js);
      await esm2cjs(dest, code);
    })();
  }

  const index = [];
  for (const [iconName, icon] of Object.entries(icons)) {
    const fname = `${iconName}-icon`;
    const jsName = `${toCamel(iconName)}Icon`
      .replace(/^0/, 'Zero')
      .replace(/^1/, 'One')
      .replace(/^2/, 'Two')
      .replace(/^3/, 'Three')
      .replace(/^4/, 'Four')
      .replace(/^5/, 'Five')
      .replace(/^6/, 'Six')
      .replace(/^7/, 'Seven')
      .replace(/^8/, 'Eight')
      .replace(/^9/, 'Nine');
    const esmIcon = compileIcon(jsName, icon);
    const dtsIcon = compileDTSIcon(jsName, icon);
    (async() => {
      await fs.outputFile(path.join(outDir, 'esm/icons', `${fname}.js`), esmIcon);
      await fs.outputFile(path.join(outDir, 'esm/icons', `${fname}.d.ts`), dtsIcon);
      await esm2cjs(path.join(outDir, 'js/icons', `${fname}.js`), esmIcon);
      await fs.outputFile(path.join(outDir, 'js/icons', `${fname}.d.ts`), dtsIcon);
    })();
    index.push(fname);
  }

  const esmIndexString = index
    .sort()
    .map(file => `export * from './${file}';`)
    .join('\n');
  await fs.outputFile(path.join(outDir, 'esm', 'icons/index.js'), esmIndexString);
  await fs.outputFile(path.join(outDir, 'esm', 'icons/index.d.ts'), esmIndexString);
  await esm2cjs(path.join(outDir, 'js/icons/index.js'), esmIndexString);
  await fs.outputFile(path.join(outDir, 'js', 'icons/index.d.ts'), esmIndexString);

  // eslint-disable-next-line no-console
  console.log('Wrote', (index.length + 3) * 4, ' files.');
})(generateIcons());
