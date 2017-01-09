'use strict';

export default (obj, path, value) => {
    let parts = path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .replace(/^\./, '')
    .split('.');

    parts.reduce((prev, curr, i) => {
        if (!(typeof prev[curr] == 'object')) {
            prev[curr] = {};
        }

        if (parts.length === i + 1) {
            prev[curr] = value;
        }

        return prev[curr];
    }, obj || {});

    return obj;
}