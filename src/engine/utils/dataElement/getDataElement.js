var dataElementDefinitions = require('../../stores/dataElementDefinitions');
var dataElementDelegates = require('../../stores/extensionDelegates/dataElementDelegates');
var dataElementSafe = require('../../stores/dataElementSafe');
var querySelectorAll = require('./../dom/querySelectorAll');
var cleanText = require('./../string/cleanText');

module.exports = function(variable, suppressDefault, dataDef) {
  dataDef = dataDef || dataElementDefinitions.getByName(variable);
  var storeLength = dataDef.settings.storeLength;

  var delegate = dataElementDelegates.get(dataDef.type);
  var value = delegate(dataDef.settings);

  // TODO: Move this to data element delegates?
  if (dataDef.settings.cleanText) {
    value = cleanText(value);
  }

  if (value === undefined && storeLength) {
    value = dataElementSafe(variable, storeLength);
  } else if (value !== undefined && storeLength) {
    dataElementSafe(variable, storeLength, value);
  }
  if (value === undefined && !suppressDefault) {
    // Have to wrap "default" in quotes since it is a keyword.
    value = dataDef.settings['default'] || '';
  }

  // TODO: Move this to data element delegates?
  if (dataDef.settings.forceLowerCase) {
    value = value.toLowerCase();
  }
  return value;
};
