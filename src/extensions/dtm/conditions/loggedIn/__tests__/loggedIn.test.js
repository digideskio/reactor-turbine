var conditionDelegateInjector = require('inject!../loggedIn');

describe('logged in condition delegate', function() {
  it('returns the data element value', function() {
    var dataElementValue;

    var getDataElement = jasmine.createSpy().and.callFake(function() {
      return dataElementValue;
    });

    var conditionDelegate = conditionDelegateInjector({
      getDataElement: getDataElement
    });

    var config = {
      conditionConfig: {
        dataElementName: 'foo'
      }
    };

    dataElementValue = true;
    expect(conditionDelegate(config)).toBe(true);

    dataElementValue = false;
    expect(conditionDelegate(config)).toBe(false);

    dataElementValue = undefined;
    expect(conditionDelegate(config)).toBe(false);

    expect(getDataElement).toHaveBeenCalledWith('foo', true);
  });
});
