import buble from 'rollup-plugin-buble';

export default {
    entry: 'src/oset.js'
    , format: 'umd'
    , moduleName: 'oset'
    , plugins: [ buble() ]
    , dest: 'oset.js'
};