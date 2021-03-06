/* global describe it */
/* eslint no-undef: "error" */
const { join } = require('path');
const { runSass } = require('sass-true');
const sass = require('sass');
const includePaths = [
    'node_modules',
];

const file = join(__dirname, 'test.scss');
runSass({ file, includePaths }, { describe, it, sass });
