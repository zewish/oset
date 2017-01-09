(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.oset = factory());
}(this, (function () { 'use strict';

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

return oset;

})));
