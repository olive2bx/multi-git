#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('source-map-support').install();

var Client = _interopRequireDefault(require('../build/client')).default;

var client = new Client();
client.run();
