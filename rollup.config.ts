import ts from '@wessberg/rollup-plugin-ts';

export default {
  input: './src/oset.ts',
  output: {
    name: 'oset',
    exports: 'default',
    strict: false
  },
  plugins: [
    ts({
      hook: {
        outputPath(path, kind) {
          if (kind === 'declaration') {
            return `${__dirname}/oset.d.ts`;
          }

          return path;
        }
      }
    })
  ]
};
