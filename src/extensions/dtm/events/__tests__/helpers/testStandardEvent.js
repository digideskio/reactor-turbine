'use strict';

var testElement;
var nestedElement;

function assertTriggerCall(options) {
  expect(options.call.args[0].type).toBe(options.type);
  expect(options.call.args[0].target).toBe(options.target);
  expect(options.call.args[1]).toBe(options.relatedElement);
}

module.exports = function(delegate, type) {
  beforeAll(function() {
    testElement = document.createElement('div');
    testElement.id = 'test';

    nestedElement = document.createElement('div');
    nestedElement.id = 'nested';
    testElement.appendChild(nestedElement);

    document.body.insertBefore(testElement, document.body.firstChild);
  });

  afterAll(function() {
    document.body.removeChild(testElement);
  });

  it('triggers rule when event occurs', function() {
    var trigger = jasmine.createSpy();

    delegate({
      eventConfig: {
        selector: '#test',
        bubbleFireIfParent: true
      }
    }, trigger);

    // We're overloading our usage of Simulate here. The second arg is a character which only
    // applies for simulating keyboard events but doesn't really do anything in the case of
    // mouse events.
    Simulate[type](nestedElement, 'A');

    expect(trigger.calls.count()).toBe(1);

    assertTriggerCall({
      call: trigger.calls.mostRecent(),
      type: type,
      target: nestedElement,
      relatedElement: testElement
    });
  });
};