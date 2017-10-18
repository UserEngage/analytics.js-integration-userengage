'use strict';

/**
 * Module dependencies.
 */

var integration = require('@segment/analytics.js-integration');

/**
 * Expose `UserEngage` integration.
 */
var UserEngage = module.exports = integration('UserEngage')
  .global('UE')
  .global('userengage')
  .option('appKey', '')
  .tag('<script src="https://app.userengage.com/widget.js">');

