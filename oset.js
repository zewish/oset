'use strict';

var oset = function (obj, path, value) {
    var parts = path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .replace(/^\./, '')
    .split('.');

    parts.reduce(function (prev, curr, i) {
        if (!(typeof prev[curr] == 'object')) {
            prev[curr] = {};
        }

        if (parts.length === i + 1) {
            prev[curr] = value;
        }

        return prev[curr];
    }, obj || {});

    return obj;
};

module.exports = oset;
