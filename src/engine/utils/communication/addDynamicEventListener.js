var forEach = require('./../array/forEach');
var covertData = require('./../covertData');
var querySelectorAll = require('./../dom/querySelectorAll');
var addEventListener = require('./../dom/addEventListener');
var globalPoll = require('./globalPoll');

var configs = [];
var nextuid = -1;

var registeredWithPoller = false;
module.exports = function(selector, type, callback) {
  var config = {
    selector: selector,
    type: type,
    callback: callback,
    id: nextuid++
  };

  configs.push(config);

  // While we could just wait for the global poller's next tick, let's try to
  // add the event listener to the target element immediately.
  addListenersToNewElements(config);

  if (!registeredWithPoller) {
    globalPoll('dynamicEvents', function() {
      forEach(configs, addListenersToNewElements);
    });
    registeredWithPoller = true;
  }
};

function addListenersToNewElements(config){
  var elements = querySelectorAll(config.selector);
  forEach(elements, function(element){
    if (covertData(element, 'dynamicRules.seen' + config.id)) {
      return;
    }

    covertData(element, 'dynamicRules.seen' + config.id, true);

    // TODO: understand this chunk below
    // if (SL.propertiesMatch(rule.property, elm)){
    //   SL.registerEvents(elm, [rule.event])
    // }

    addEventListener(element, config.type, config.callback);
  });
}