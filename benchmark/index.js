#!/usr/bin/env node

'use strict';

let { execSync } = require('child_process')
    , { resolve } = require('path');

process.chdir(resolve(__dirname));

let times = {
    oset: []
    , _set: []
};

let bench = (lib) => {
    for (let i = 1; i <= 1000; i++) {
        console.log(`[${lib}] ${i}...`);

        let res = String(
            execSync(`node ./${lib}.js`)
        )
        .split('\n');

        times[lib].push(
            parseInt(res[res.length - 2])
        );
    }
}

let print = (lib) => console.log(
    `[${lib}] average time:`
    , times[lib].reduce((a, b) => a + b, 0) / times[lib].length
);

bench('oset');
bench('_set');

print('oset');
print('_set');