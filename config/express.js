var express = require('express'),
    compression = require('compression'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
  env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];

module.exports = function(app) {
  app.use(express.static(config.rootPath + '/public'));
  app.use(compression());
  app.use(methodOverride());
  app.use(bodyParser());
};
