module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-proposal-decorators',
      {
        decoratorsBeforeExport: false,
        legacy: false,
      },
    ],
    '@babel/plugin-proposal-class-properties',
  ],
};
