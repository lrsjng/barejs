/*jshint node: true, mocha: true */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');
var assert = require('chai').assert;

function load(sandbox) {

    sandbox = sandbox || {};
    vm.runInNewContext(load.src, sandbox, 'barejs.js');
    return sandbox;
}
load.src = fs.readFileSync(path.join(__dirname, '../src/barejs.js'), 'utf-8');

describe('barejs', function () {

    it('only published global', function () {

        var root = load();
        assert.isObject(root);
        assert.deepEqual(Object.keys(root), ['barejs']);
    });

    it('is object', function () {

        var barejs = load().barejs;
        assert.isObject(barejs);
    });

    it('has 0 properties', function () {

        var barejs = load().barejs;
        assert.lengthOf(Object.keys(barejs), 0);
    });
});
