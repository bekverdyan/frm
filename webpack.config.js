'use strict';

const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./config/webpack.config.dev');
} else if (environment === 'test') {
    module.exports = require('./webpack.test.config');
} else {
    module.exports = require('./config/webpack.config.prod');
}