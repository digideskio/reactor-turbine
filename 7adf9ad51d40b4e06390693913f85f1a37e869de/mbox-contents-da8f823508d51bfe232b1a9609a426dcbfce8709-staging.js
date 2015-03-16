
// compression: 1

var mboxCopyright = "Copyright 1996-2014. Adobe Systems Incorporated. All rights reserved.";
var TNT = TNT || {};
TNT._internal = TNT._internal || {};
TNT._internal.nestedMboxes = [];
TNT._internal.isDomLoaded = false;

TNT._internal._settings = {
  "companyName": "Test&amp;Target",
  "isProduction": true,
  "adminUrl": "//admin3.testandtarget.omniture.com/admin",
  "clientCode": "adobeinternaldtmdemo",
  "serverHost": "adobeinternaldtmdemo.tt.omtrdc.net",
  "mboxTimeout": 15000,
  "mboxLoadedTimeout": 16,
  "mboxFactoryDisabledTimeout": 60 * 60,
  "bodyPollingTimeout": 16,
  "sessionExpirationTimeout": 31 * 60,
  "experienceManagerDisabledTimeout": 30 * 60,
  "experienceManagerTimeout": 5000,
  "tntIdLifetime": 1209600,
  "crossDomain": "disabled",
  "trafficDuration": 10368000,
  "trafficLevelPercentage": 100,
  "clientSessionIdSupport": false,
  "clientTntIdSupport": false,
  "passPageParameters": true,
  "usePersistentCookies": true,
  "crossDomainEnabled": false,
  "crossDomainXOnly": false,
  "imsOrgId": "824A1C8B532710590A490D4D@AdobeOrg",
  "includeExperienceManagerPlugin": true,
  "globalMboxName": "existingGlobalMbox",
  "globalMboxLocationDomId": "",
  "globalMboxAutoCreate": false,
  "experienceManagerPluginUrl": "//cdn.tt.omtrdc.net/cdn/target.js",
  "siteCatalystPluginName": "tt",
  "includeSiteCatalystPlugin": false,
  "mboxVersion": 56,
  "mboxIsSupportedFunction": function () {
    return true;
  },
  "clientJavascriptFunction": function () {
  },
  "parametersFunction": function () {
    return "";
  },
  "cookieDomainFunction": function () {
    return mboxCookiePageDomain();
  }
};

TNT._internal._params = {
  "page": "mboxPage",
  "mcgvid": "mboxMCGVID",
  "mcglh": "mboxMCGLH",
  "aamb": "mboxAAMB",
  "mcavid": "mboxMCAVID",
  "mcsdid": "mboxMCSDID",
  "count": "mboxCount",
  "host": "mboxHost",
  "factoryId": "mboxFactoryId",
  "tntId": "mboxPC",
  "screeHeight": "screenHeight",
  "screenWidth": "screenWidth",
  "browserWidth": "browserWidth",
  "browserHeight": "browserHeight",
  "browserTimeOffset": "browserTimeOffset",
  "colorDepth": "colorDepth",
  "crossDomain": "mboxXDomain",
  "url": "mboxURL",
  "referrer": "mboxReferrer",
  "version": "mboxVersion",
  "name": "mbox",
  "id": "mboxId",
  "domLoaded": "mboxDOMLoaded",
  "time": "mboxTime",
  "scPluginVersion": "scPluginVersion"
};

TNT._internal._pageParams = {
  "disable": "mboxDisable",
  "session": "mboxSession",
  "environment": "mboxEnv",
  "debug": "mboxDebug"
};

TNT._internal._cookies = {
  "disable": "disable",
  "session": "session",
  "tntId": "PC",
  "level": "level",
  "signalPrefix": "signal-",
  "check": "check",
  "debug": "debug"
};

TNT._internal._constants = {
  "defaultFactoryId": "default",
  "cookiePrefix": "mbox",
  "divImportPrefix": "mboxImported-",
  "millisInMinute": 60000,
  "divDefaultClass": "mboxDefault",
  "divMarkerPrefix": "mboxMarker-",
  "nameLength": 250,
  "scPluginVersion": 1,
  "version": 54
};

TNT.getGlobalMboxName = function () {
  return TNT._internal._settings.globalMboxName;
};

TNT.getGlobalMboxLocation = function () {
  return TNT._internal._settings.globalMboxLocationDomId;
};

TNT.isAutoCreateGlobalMbox = function () {
  return TNT._internal._settings.globalMboxAutoCreate;
};

TNT.getClientMboxExtraParameters = function () {
  return TNT._internal._settings.parametersFunction();
};

TNT.getMboxSettings = function () {
  return TNT._internal._settings;
};

TNT.setMboxSettings = function (_settings) {
  TNT._internal._settings = _settings;
};

TNT._internal._getGlobalMboxParameters = function () {
  var _getClass = {}.toString;
  var _possibleFunction = window.targetPageParams;
  var _functionResult = null;

  if (typeof(_possibleFunction) === 'undefined' || _getClass.call(_possibleFunction) !== '[object Function]') {
    return [];
  }

  try {
    _functionResult = _possibleFunction();
  } catch (_ignore) { }

  if (_functionResult === null) {
    return [];
  }

  if (_getClass.call(_functionResult) === '[object Array]') {
    return _functionResult;
  }

  if (_getClass.call(_functionResult) === '[object String]' && _functionResult.length > 0) {
    var _params = _functionResult.trim().split("&");
    for (var _index = 0; _index < _params.length; _index++) {
      if (_params[_index].indexOf('=') <= 0) {
        _params.splice(_index, 1);
        continue;
      }
      _params[_index] = decodeURIComponent(_params[_index]);
    }
    return _params;
  }

  if (_getClass.call(_functionResult) === '[object Object]') {
    return TNT._internal._extractParamsFromObject([], _functionResult);
  }

  return [];
};

TNT._internal._extractParamsFromObject = function (_nestedParams, _objectWithParams) {
  var _result = [];
  var _paramNamePrefix = _nestedParams.join('.');
  var _paramValue;

  for (var _paramName in _objectWithParams) {
    if (!_objectWithParams.hasOwnProperty(_paramName)) {
      continue;
    }

    _paramValue = _objectWithParams[_paramName];

    if (typeof _paramValue === "object") {
      _nestedParams.push(_paramName);
      var _nestedResult = TNT._internal._extractParamsFromObject(_nestedParams, _paramValue);
      _nestedParams.pop();

      for (var _index = 0; _index < _nestedResult.length; _index++) {
        _result.push(_nestedResult[_index]);
      }
      continue;
    }

    _result.push((_paramNamePrefix.length > 0 ? _paramNamePrefix + '.' : '') + _paramName + '=' + _paramValue);
  }

  return _result;
};

TNT._internal._globalMboxFetcher = function() { };

TNT._internal._globalMboxFetcher.prototype.getType = function() {
  return 'ajax';
};

TNT._internal._globalMboxFetcher.prototype.fetch = function(_urlBuilder) {
  _urlBuilder.setServerType(this.getType());
  document.write('<' + 'scr' + 'ipt src="' + _urlBuilder.buildUrl() +'" language="JavaScript"><' + '\/scr' + 'ipt>');
};

TNT._internal._globalMboxFetcher.prototype.cancel = function() { };



/**
 * Builds the url of a request given the mbox server host, client code
 * and server type.
 * @PrivateClass
 *
 * @param _mboxServer host of the mbox server e.g.
 *   mbox-test.dev.tt.omtrdc.net
 */
mboxUrlBuilder = function(_mboxServer, _clientCode) {
  this._mboxServer = _mboxServer;
  this._clientCode = _clientCode;
  this._parameters = [];
  this._urlProcess = function(_url) { return _url; };
  this._basePath = null;
};

/**
 * Adds a new parameter regardless of whether or not it's present already, use with caution
 *
 * @param _name - parameter name, should not contain single or double quotes
 * @param _value - parameter value, should not be html escaped
 */
mboxUrlBuilder.prototype.addNewParameter = function (_name, _value) {
  this._parameters.push({name: _name, value: _value});
  return this;
};

/**
 * Adds a parameter if it's not already present
 *
 * @param _name - parameter name, should not contain single or double quotes
 * @param _value - parameter value, should not be html escaped
 */
mboxUrlBuilder.prototype.addParameterIfAbsent = function (_name, _value) {
  if (_value) {
    for (var _i = 0; _i < this._parameters.length; _i++) {
      var _parameter = this._parameters[_i];
      if (_parameter.name === _name) {
        return this;
      }
    }

    this.checkInvalidCharacters(_name);
    return this.addNewParameter(_name, _value);
  }
};

/**
 * Adds a parameter
 *
 * @param _name - parameter name, should not contain single or double quotes
 * @param _value - parameter value, should not be html escaped
 */
mboxUrlBuilder.prototype.addParameter = function(_name, _value) {
  this.checkInvalidCharacters(_name);

  for (var _i = 0; _i < this._parameters.length; _i++) {
    var _parameter = this._parameters[_i];
    if (_parameter.name === _name) {
      _parameter.value = _value;
      return this;
    }
  }

  return this.addNewParameter(_name, _value);
};

/**
 * @param _parameters An array with items of the form "name=value".
 */
mboxUrlBuilder.prototype.addParameters = function(_parameters) {
  if (!_parameters) {
    return this;
  }
  for (var _i = 0; _i < _parameters.length; _i++) {
    var _splitIndex = _parameters[_i].indexOf('=');
    if (_splitIndex === -1 || _splitIndex === 0) {
      continue;
    }
    this.addParameter(_parameters[_i].substring(0, _splitIndex),
        _parameters[_i].substring(_splitIndex + 1, _parameters[_i].length));
  }
  return this;
};

mboxUrlBuilder.prototype.setServerType = function(_type) {
  this._serverType = _type;
};

mboxUrlBuilder.prototype.setBasePath = function(_basePath) {
  this._basePath = _basePath;
};

/**
 * @param _action is a function that accepts a string parameter (url)
 * @return The new url string
 */
mboxUrlBuilder.prototype.setUrlProcessAction = function(_action) {
  this._urlProcess = _action;
};

mboxUrlBuilder.prototype.buildUrl = function() {
  var _path = this._basePath ? this._basePath :
  '/m2/' + this._clientCode + '/mbox/' + this._serverType;

  var _protocol = document.location.protocol == 'file:' ? 'http:' :
      document.location.protocol;

  var _url = _protocol + "//" + this._mboxServer + _path;

  var _separator = _url.indexOf('?') != -1 ? '&' : '?';
  for (var _i = 0; _i < this._parameters.length; _i++) {
    var _parameter = this._parameters[_i];
    _url += _separator + encodeURIComponent(_parameter.name) + '=' +
    encodeURIComponent(_parameter.value);
    _separator = '&';
  }
  return this._escapeQuote(this._urlProcess(_url));
};

/**
 * @return An array of objects with two properties "name" and "value"
 */
mboxUrlBuilder.prototype.getParameters = function() {
  return this._parameters;
};

mboxUrlBuilder.prototype.setParameters = function(_parameters) {
  this._parameters = _parameters;
};

mboxUrlBuilder.prototype.clone = function() {
  var _newUrlBuilder = new mboxUrlBuilder(this._mboxServer, this._clientCode);
  _newUrlBuilder.setServerType(this._serverType);
  _newUrlBuilder.setBasePath(this._basePath);
  _newUrlBuilder.setUrlProcessAction(this._urlProcess);
  for (var _i = 0; _i < this._parameters.length; _i++) {
    _newUrlBuilder.addParameter(this._parameters[_i].name,
        this._parameters[_i].value);
  }
  return _newUrlBuilder;
};

mboxUrlBuilder.prototype._escapeQuote = function(_text) {
  return _text.replace(/\"/g, '&quot;').replace(/>/g, '&gt;');
};

/**
 * Checks a parameter's name for prohibited chars
 */
mboxUrlBuilder.prototype.checkInvalidCharacters = function (_name) {
  var _invalidCharacters = new RegExp('(\'|")');
  if (_invalidCharacters.exec(_name)) {
    throw "Parameter '" + _name + "' contains invalid characters";
  }
};

/**
 * Fetches the content given the url builder by including the script using
 * document.write(..)
 * @PrivateClass
 */
mboxStandardFetcher = function() { };

mboxStandardFetcher.prototype.getType = function() {
  return 'standard';
};

mboxStandardFetcher.prototype.fetch = function(_urlBuilder) {
  _urlBuilder.setServerType(this.getType());

  document.write('<' + 'scr' + 'ipt src="' + _urlBuilder.buildUrl() +
  '" language="JavaScript"><' + '\/scr' + 'ipt>');
};

mboxStandardFetcher.prototype.cancel = function() { };

/**
 * Fetches the content given the url builder by creating the script dynamically
 * in the DOM.
 * @PrivateClass
 */
mboxAjaxFetcher = function() { };

mboxAjaxFetcher.prototype.getType = function() {
  return 'ajax';
};

mboxAjaxFetcher.prototype.fetch = function(_urlBuilder) {
  _urlBuilder.setServerType(this.getType());
  var _url = _urlBuilder.buildUrl();

  this._include = document.createElement('script');
  this._include.src = _url;

  document.body.appendChild(this._include);
};

mboxAjaxFetcher.prototype.cancel = function() { };

/**
 * A map of elements.
 *
 * @PrivateClass
 */
mboxMap = function() {
  this._backingMap = {};
  this._keys = [];
};

mboxMap.prototype.put = function(_key, _value) {
  if (!this._backingMap[_key]) {
    this._keys[this._keys.length] = _key;
  }
  this._backingMap[_key] = _value;
};

mboxMap.prototype.get = function(_key) {
  return this._backingMap[_key];
};

mboxMap.prototype.remove = function(_key) {
  this._backingMap[_key] = undefined;
  var _updatedKeys = [];

  for (var i = 0; i < this._keys.length; i++) {
    if (this._keys[i] !== _key) {
      _updatedKeys.push(this._keys[i]);
    }
  }
  this._keys = _updatedKeys;
};

mboxMap.prototype.each = function(_action) {
  for (var _i = 0; _i < this._keys.length; _i++ ) {
    var _key = this._keys[_i];
    var _value = this._backingMap[_key];
    if (_value) {
      var _result = _action(_key, _value);
      if (_result === false) {
        break;
      }
    }
  }
};

mboxMap.prototype.isEmpty = function() {
  return this._keys.length === 0;
};

/**
 * Creates and updates mboxes.
 *
 * @param _mboxServer host of the mbox server e.g.
 *   mbox-test.dev.tt.omtrdc.net
 * @param _clientCode - client's code e.g. 'demo'
 * @param _factoryId - a unique string identifying this factory
 */
mboxFactory = function(_server, _clientCode, _factoryId) {
  this._pageLoaded = false;
  this._server = _server;
  this._factoryId = _factoryId;
  this._mboxes = new mboxList();

  mboxFactories.put(_factoryId, this);

  // mboxIsSupported is a client defined function to test if mbox is supported
  // on this platform (defaults to just returning true)
  this._supported =
      typeof document.createElement('div').replaceChild != 'undefined' &&
      TNT._internal._settings.mboxIsSupportedFunction() &&
      typeof document.getElementById != 'undefined' &&
      typeof (window.attachEvent || document.addEventListener || window.addEventListener) != 'undefined' &&
      typeof encodeURIComponent  != 'undefined';

  this._enabled = this._supported && mboxGetPageParameter(TNT._internal._pageParams.disable) === null;

  var _isDefaultFactory = _factoryId == TNT._internal._constants.defaultFactoryId;
  this._cookieManager = new mboxCookieManager(
      TNT._internal._constants.cookiePrefix + (_isDefaultFactory ? '' : ('-' + _factoryId)),
      TNT._internal._settings.cookieDomainFunction());

  if (TNT._internal._settings.crossDomainXOnly) {
    this._enabled = this._enabled && this._cookieManager.isEnabled() &&
    (this._cookieManager.getCookie(TNT._internal._cookies.disable) === null);
  } else {
    this._enabled = this._enabled && (this._cookieManager.getCookie(TNT._internal._cookies.disable) === null);
  }

  if (this.isAdmin()) {
    this.enable();
  }

  this._listenForDomReady();
  this._mboxPageId = mboxGenerateId();
  this._mboxScreenHeight = mboxScreenHeight();
  this._mboxScreenWidth = mboxScreenWidth();
  this._mboxBrowserWidth = mboxBrowserWidth();
  this._mboxBrowserHeight = mboxBrowserHeight();
  this._mboxColorDepth = mboxScreenColorDepth();
  this._mboxBrowserTimeOffset = mboxBrowserTimeOffset();
  this._mboxSessionId = new mboxSession(
      this._mboxPageId,
      TNT._internal._pageParams.session,
      TNT._internal._cookies.session,
      31 * 60, this._cookieManager);

  this._mboxPCId = new mboxPC(
      TNT._internal._cookies.tntId,
      TNT._internal._settings.tntIdLifetime,
      this._cookieManager);

  this._urlBuilder = new mboxUrlBuilder(_server, _clientCode);
  this._initGlobalParameters(this._urlBuilder, _isDefaultFactory);

  this._pageStartTime = new Date().getTime();
  this._pageEndTime = this._pageStartTime;

  var _self = this;
  this.addOnLoad(function() { _self._pageEndTime = new Date().getTime(); });

  if (this._supported) {
    // Checks that all mboxes have been successfully imported
    // and shows default content for any that failed
    this.addOnLoad(function() {
      _self._pageLoaded = true;
      _self.getMboxes().each(function(_mbox) {
        _mbox._disableWaitForNestedMboxes();
        _mbox.setFetcher(new mboxAjaxFetcher());
        _mbox.finalize(); });
      TNT._internal.nestedMboxes = [];
      TNT._internal.isDomLoaded = true;
    });

    if (this._enabled) {
      this.limitTraffic(TNT._internal._settings.trafficLevelPercentage, TNT._internal._settings.trafficDuration);

      this._makeDefaultContentInvisible();

      this._mboxSignaler = new mboxSignaler(function(_mboxName, _parameters) {
        return _self.create(_mboxName, _parameters);
      }, this._cookieManager);
    }
    else {
      if (!TNT._internal._settings.isProduction) {
        if (this.isAdmin()) {
          if (!this.isEnabled()) {
            alert("mbox disabled, probably due to timeout\n" +
            "Reset your cookies to re-enable\n(this message will only appear in administrative mode)");
          } else {
            alert("It looks like your browser will not allow " +
            TNT._internal._settings.companyName +
            " to set its administrative cookie. To allow setting the" +
            " cookie please lower the privacy settings of your browser.\n" +
            "(this message will only appear in administrative mode)");
          }
        }
      }
    }
  }
};

/**
 * Forcibly sets new PC ID.
 * This method should be used when there is a better way to track
 * a site user than by PC ID.
 *
 * @param _forcedId New PC ID to set.
 */
mboxFactory.prototype.forcePCId = function(_forcedId) {
  if (!TNT._internal._settings.clientTntIdSupport) {
    return;
  }

  if (this._mboxPCId.forceId(_forcedId)) {
    this._mboxSessionId.forceId(mboxGenerateId());
  }
};

/**
 * Allows the client to use their sessionId as the mbox sessionId. This
 * is useful if the client is required to preserve their id through their
 * site.
 *
 * @param sessionId for New session id.
 */
mboxFactory.prototype.forceSessionId = function(_forcedId) {
  if (!TNT._internal._settings.clientSessionIdSupport) {
    return;
  }

  this._mboxSessionId.forceId(_forcedId);
};

/**
 * @return true if the factory is enabled. If factory is disabled, the mboxes
 * are still created but they show default content only.
 */
mboxFactory.prototype.isEnabled = function() {
  return this._enabled;
};

/**
 * @return cause of mbox disabling
 */
mboxFactory.prototype.getDisableReason = function() {
  return this._cookieManager.getCookie(TNT._internal._cookies.disable);
};

/**
 * @return true if the client's environment is supported (i.e. there's a way
 *   to access DOM elements via document.getElementById and event handling
 *   is supported)
 */
mboxFactory.prototype.isSupported = function() {
  return this._supported;
};

/**
 * Disables the factory for the specified duration.
 *
 * @param _duration - duration in seconds (optional)
 * @param _cause - cause of disable (optional)
 */
mboxFactory.prototype.disable = function(_duration, _cause) {
  if (typeof _duration == 'undefined') {
    _duration = 60 * 60;
  }

  if (typeof _cause == 'undefined') {
    _cause = 'unspecified';
  }

  if (!this.isAdmin()) {
    this._enabled = false;
    this._cookieManager.setCookie(TNT._internal._cookies.disable, _cause, _duration);
  }
};

mboxFactory.prototype.enable = function() {
  this._enabled = true;
  this._cookieManager.deleteCookie(TNT._internal._cookies.disable);
};

mboxFactory.prototype.isAdmin = function() {
  return document.location.href.indexOf(TNT._internal._pageParams.environment) != -1;
};

/**
 * Limits the traffic (by disabling the factory for certain users) to the given
 * level for the specified duration.
 */
mboxFactory.prototype.limitTraffic = function(_level, _duration) {
  if (TNT._internal._settings.trafficLevelPercentage != 100) {
    if (_level == 100) {
      return;
    }

    var _enable = true;

    if (parseInt(this._cookieManager.getCookie(TNT._internal._cookies.level)) != _level) {
      _enable = (Math.random() * 100) <= _level;
    }

    this._cookieManager.setCookie(TNT._internal._cookies.level, _level, _duration);

    if (!_enable) {
      this.disable(60 * 60, 'limited by traffic');
    }
  }
};

/**
 * Adds a function to be called with body onload.
 */
mboxFactory.prototype.addOnLoad = function(_function) {

  // This extra checking is so that if there is a race, where addOnLoad
  // is called as the onload functions are being called, we'll detect this
  // and correctly call the passed in function exactly once, after the dom
  // has loaded.

  if (this.isDomLoaded()) {
    _function();
  } else {
    var _calledFunction = false;
    var _wrapper = function() {
      if (_calledFunction) {
        return;
      }
      _calledFunction = true;
      _function();
    };

    this._onloadFunctions.push(_wrapper);

    if (this.isDomLoaded() && !_calledFunction) {
      _wrapper();
    }
  }
};

mboxFactory.prototype.getEllapsedTime = function() {
  return this._pageEndTime - this._pageStartTime;
};

mboxFactory.prototype.getEllapsedTimeUntil = function(_time) {
  return _time - this._pageStartTime;
};

/**
 * @return An mboxList object that contains the mboxes associated with this
 *   factory.
 */
mboxFactory.prototype.getMboxes = function() {
  return this._mboxes;
};

/**
 * @param _mboxId the id of the mbox, defaults to 0 if not specified.
 *
 * @return mbox with the specified _mboxName and _mboxId.
 */
mboxFactory.prototype.get = function(_mboxName, _mboxId) {
  return this._mboxes.get(_mboxName).getById(_mboxId || 0);
};

/**
 * Updates one or more mboxes with the name _mboxName
 *
 * @param _mboxName - name of the mbox
 * @param _parameters - array of 0 or more items of the form "name=value"
 *   (the values need to be escaped for inclusion in the url)
 */
mboxFactory.prototype.update = function(_mboxName, _parameters) {
  if (!this.isEnabled()) {
    return;
  }

  var _self = this;

  if (!this.isDomLoaded()) {
    this.addOnLoad(function() { _self.update(_mboxName, _parameters); });
    return;
  }

  if (this._mboxes.get(_mboxName).length() === 0) {
    throw "Mbox " + _mboxName + " is not defined";
  }

  this._mboxes.get(_mboxName).each(function(_mbox) {
    var _urlBuilder = _mbox.getUrlBuilder();
    var _tntId = _self.getPCId().getId();

    if (_tntId) {
      _urlBuilder.addParameter(TNT._internal._params.tntId, _tntId);
    }

    _urlBuilder.addParameter(TNT._internal._params.page, mboxGenerateId());
    _self.setVisitorIdParameters(_urlBuilder, _mboxName);
    _mbox.load(_parameters);
  });
};

/**
 * This method sets the value for the visitor Ids that come from the VisitorAPI.js
 */
mboxFactory.prototype.setVisitorIdParameters =  function(_url, _mboxName) {
  if (typeof Visitor == 'undefined' || !TNT._internal._settings.imsOrgId) {
    return;
  }

  var visitor = Visitor.getInstance(TNT._internal._settings.imsOrgId);

  if (visitor.isAllowed()) {
    // calling a getter on the visitor may either return a value, or invoke
    // the callback, depending on if the value is immediately available.
    var addVisitorValueToUrl = function(param, getter, mboxName) {
      if (visitor[getter]) {
        var callback = function(value) {
          if (value) {
            _url.addParameter(param, value);
          }
        };
        var value;
        if (typeof mboxName != 'undefined') {
          value = visitor[getter]("mbox:" + mboxName);
        } else {
          value = visitor[getter](callback);
        }
        callback(value);
      }
    };

    addVisitorValueToUrl(TNT._internal._params.mcgvid, "getMarketingCloudVisitorID");
    addVisitorValueToUrl(TNT._internal._params.mcglh, "getAudienceManagerLocationHint");
    addVisitorValueToUrl(TNT._internal._params.aamb, "getAudienceManagerBlob");
    addVisitorValueToUrl(TNT._internal._params.mcavid, "getAnalyticsVisitorID");
    addVisitorValueToUrl(TNT._internal._params.mcsdid, "getSupplementalDataID", _mboxName);
  }
};

/**
 * Creates an mbox called _mboxName.
 *
 * There is a small chance that an mbox with the same name is created after
 * we call update - we will ignore this chance.
 *
 * @param _mboxName - name of the mbox
 * @param _parameters - array of 0 or more items of the form "name=value"
 *   (the values need to be escaped for inclusion in the url)
 * @param _defaultNode - the DOM node that is the default content
 *                       the name of the DOM that is the default content
 *                       or is not specified, search bacwords for
 *                       mboxDefault class to use as default content
 */
mboxFactory.prototype.create = function(_mboxName, _parameters, _defaultNode) {

  if (!this.isSupported()) {
    return null;
  }

  var _url = this._urlBuilder.clone();
  _url.addParameter(TNT._internal._params.count, this._mboxes.length() + 1);
  _url.addParameters(_parameters);

  this.setVisitorIdParameters(_url, _mboxName);

  var _mboxId = this._mboxes.get(_mboxName).length();
  var _divSuffix = this._factoryId + '-' + _mboxName + '-' + _mboxId;
  var _locator;
  var _mbox;

  if (_defaultNode) {
    _locator = new mboxLocatorNode(_defaultNode);
  } else {
    if (this._pageLoaded) {
      throw 'The page has already been loaded, can\'t write marker';
    }
    _locator = new mboxLocatorDefault(_divSuffix);
  }

  try {
    var _self = this;
    var _importName = TNT._internal._constants.divImportPrefix + _divSuffix;
    _mbox = new mbox(_mboxName, _mboxId, _url, _locator, _importName);

    if (this._enabled) {
      _mbox.setFetcher(
          this._pageLoaded ? new mboxAjaxFetcher() : new mboxStandardFetcher());
    }

    _mbox.setOnError(function(_message, _type) {
      _mbox.setMessage(_message);
      _mbox.activate();
      if (!_mbox.isActivated()) {
        _self.disable(60 * 60, _message);
        window.location.reload(false);
      }


    });
    this._mboxes.add(_mbox);
  } catch (_e) {
    this.disable();
    throw 'Failed creating mbox "' + _mboxName + '", the error was: ' + _e;
  }

  var _now = new Date();
  var _time = _now.getTime() - (_now.getTimezoneOffset() * TNT._internal._constants.millisInMinute);
  var _tntId = _self.getPCId().getId();

  if (_tntId) {
    _url.addParameter(TNT._internal._params.tntId, _tntId);
  }

  _url.addParameter(TNT._internal._params.time, _time);

  return _mbox;
};

mboxFactory.prototype.getCookieManager = function() {
  return this._cookieManager;
};

mboxFactory.prototype.getPageId = function() {
  return this._mboxPageId;
};

mboxFactory.prototype.getPCId = function() {
  return this._mboxPCId;
};

mboxFactory.prototype.getSessionId = function() {
  return this._mboxSessionId;
};

mboxFactory.prototype.getSignaler = function() {
  return this._mboxSignaler;
};

mboxFactory.prototype.getUrlBuilder = function() {
  return this._urlBuilder;
};

mboxFactory.prototype._initGlobalParameters = function(_url, _isDefaultFactory) {
  _url.addParameter(TNT._internal._params.host, document.location.hostname)
      .addParameter(TNT._internal._pageParams.session, this._mboxSessionId.getId());
  if (!_isDefaultFactory) {
    _url.addParameter(TNT._internal._params.factoryId, this._factoryId);
  }
  if (this._mboxPCId.getId()) {
    _url.addParameter(TNT._internal._params.tntId, this._mboxPCId.getId());
  }
  _url.addParameter(TNT._internal._params.page, this._mboxPageId);
  _url.addParameter(TNT._internal._params.screeHeight, this._mboxScreenHeight);
  _url.addParameter(TNT._internal._params.screenWidth, this._mboxScreenWidth);
  _url.addParameter(TNT._internal._params.browserWidth, this._mboxBrowserWidth);
  _url.addParameter(TNT._internal._params.browserHeight, this._mboxBrowserHeight);
  _url.addParameter(TNT._internal._params.browserTimeOffset, this._mboxBrowserTimeOffset);
  _url.addParameter(TNT._internal._params.colorDepth, this._mboxColorDepth);


  if (TNT._internal._settings.crossDomainEnabled) {
    _url.addParameter(TNT._internal._params.crossDomain, TNT._internal._settings.crossDomain);
  }

  var params = TNT._internal._settings.parametersFunction();

  if (params) {
    _url.addParameters(this._mboxParametersClient().split('&'));
  }

  _url.setUrlProcessAction(function(_url) {
    if (TNT._internal._settings.passPageParameters) {
      _url += '&';
      _url += TNT._internal._params.url;
      _url += '=' + encodeURIComponent(document.location);

      var _referrer = encodeURIComponent(document.referrer);

      if (_url.length + _referrer.length < 2000) {
        _url += '&';
        _url += TNT._internal._params.referrer;
        _url += '=' + _referrer;
      }
    }

    _url += '&';
    _url += TNT._internal._params.version;
    _url += '=' + mboxVersion;

    return _url;
  });
};

mboxFactory.prototype._mboxParametersClient = function() {
  return TNT._internal._settings.parametersFunction();
};

/**
 * Causes all mbox default content to not be displayed:
 */
mboxFactory.prototype._makeDefaultContentInvisible = function() {
  document.write('<style>.' + TNT._internal._constants.divDefaultClass + ' { visibility:hidden; }</style>');
};

mboxFactory.prototype.isDomLoaded = function() {
  return this._pageLoaded;
};

mboxFactory.prototype._listenForDomReady = function() {
  if (this._onloadFunctions) {
    return;
  }

  this._onloadFunctions = [];

  var _self = this;
  (function() {
    var _eventName = document.addEventListener ? "DOMContentLoaded" : "onreadystatechange";
    var _loaded = false;
    var _ready = function() {
      if (_loaded) {
        return;
      }
      _loaded = true;
      for (var i = 0; i < _self._onloadFunctions.length; ++i) {
        _self._onloadFunctions[i]();
      }
    };

    if (document.addEventListener) {
      document.addEventListener(_eventName, function() {
        document.removeEventListener(_eventName, arguments.callee, false);
        _ready();
      }, false);

      window.addEventListener("load", function(){
        document.removeEventListener("load", arguments.callee, false);
        _ready();
      }, false);

    } else if (document.attachEvent) {
      if (self !== self.top) {
        document.attachEvent(_eventName, function() {
          if (document.readyState === 'complete') {
            document.detachEvent(_eventName, arguments.callee);
            _ready();
          }
        });
      } else {
        var _checkScrollable = function() {
          try {
            document.documentElement.doScroll('left');
            _ready();
          } catch (_domNotReady) {
            setTimeout(_checkScrollable, 13);
          }
        };
        _checkScrollable();
      }
    }

    if (document.readyState === "complete") {
      _ready();
    }

  })();
};

/**
 * Iterates all signal cookies (e.g. prefixed with mboxSignalPrefix), and
 * creates a signal mbox for each signal cookie.
 *
 * @param _createMboxMethod Takes two arguments, first is the name of the mbox,
 *   second is an array of parameters.
 * @PrivateClass
 */
mboxSignaler = function(_createMboxMethod, _cookieManager) {
  this._cookieManager = _cookieManager;
  var _signalCookieNames =
      _cookieManager.getCookieNames(TNT._internal._cookies.signalPrefix);
  for (var _i = 0; _i < _signalCookieNames.length; _i++) {
    var _cookieName = _signalCookieNames[_i];
    var _args = _cookieManager.getCookie(_cookieName).split('&');
    var _mbox = _createMboxMethod(_args[0], _args);
    _mbox.load();
    _cookieManager.deleteCookie(_cookieName);
  }
};

/**
 * Called from the imported div tag to signal that an mbox was clicked on.
 */
mboxSignaler.prototype.signal = function(_signalType, _mboxName /*,...*/) {
  this._cookieManager.setCookie(TNT._internal._cookies.signalPrefix +_signalType,
      mboxShiftArray(arguments).join('&'), 45 * 60);
};

/**
 * Represents a list of mboxes.
 *
 * @PrivateClass
 */
mboxList = function() {
  this._mboxes = [];
};

mboxList.prototype.add = function(_mbox) {
  if (_mbox) {
    this._mboxes[this._mboxes.length] = _mbox;
  }
};

/**
 * @return a subset of this mbox list with items of the specified name.
 */
mboxList.prototype.get = function(_mboxName) {
  var _result = new mboxList();
  for (var _i = 0; _i < this._mboxes.length; _i++) {
    var _mbox = this._mboxes[_i];
    if (_mbox.getName() == _mboxName) {
      _result.add(_mbox);
    }
  }
  return _result;
};

mboxList.prototype.getById = function(_index) {
  return this._mboxes[_index];
};

mboxList.prototype.length = function() {
  return this._mboxes.length;
};

/**
 * @param _action a function that taken an mbox instance as parameter.
 */
mboxList.prototype.each = function(_action) {
  if (typeof _action !== 'function') {
    throw 'Action must be a function, was: ' + typeof(_action);
  }
  for (var _i = 0; _i < this._mboxes.length; _i++) {
    _action(this._mboxes[_i]);
  }
};

//
// Note this constructor also writes a node to the DOM, do not create
// after the page is loaded
//
mboxLocatorDefault = function(_name) {
  this._name = TNT._internal._constants.divMarkerPrefix + _name;

  document.write('<div id="' + this._name + '" style="visibility:hidden;display:none">&nbsp;</div>');
};

mboxLocatorDefault.prototype.locate = function() {
  var _node = document.getElementById(this._name);
  while (_node) {
    // check is DOM_ELEMENT_NODE before testing class name
    if (_node.nodeType == 1) {
      if (_node.className == 'mboxDefault') {
        return _node;
      }
    }
    _node = _node.previousSibling;
  }

  return null;
};

mboxLocatorDefault.prototype.force = function() {
  // There was no default div, add an empty one
  var _div = document.createElement('div');
  _div.className = 'mboxDefault';

  var _marker = document.getElementById(this._name);
  if (_marker) {
    _marker.parentNode.insertBefore(_div, _marker);
  }

  return _div;
};

mboxLocatorNode = function(_DOMNode) {
  this._node = _DOMNode;
};

mboxLocatorNode.prototype.locate = function() {
  return typeof this._node == 'string' ?
      document.getElementById(this._node) : this._node;
};

mboxLocatorNode.prototype.force = function() {
  return null;
};

/*
 * Creates an mbox called '_mboxName' and attempts to load it
 *
 * @return the created mbox or null if the platform is not supported
 */
mboxCreate = function(_mboxName /*, ... */) {
  var _mbox = mboxFactoryDefault.create( _mboxName, mboxShiftArray(arguments));

  if (_mbox) {
    _mbox.load();
  }
  return _mbox;
};

/*
 * Creates and associates an mbox with a specified '_DOMNode'
 * The created mbox needs to be load()ed
 *
 * @param _defaultNode of default content
 *        - if null or empty string looks back for mboxDefault
 *        - if a string looks for a DOM node with the passed id
 *        - otherwise it is assumed to be a DOM node
 *
 * @return the created mbox or null if the platform is not supported
 */
mboxDefine = function(_defaultNode, _mboxName /*, ...*/) {
  var _mbox = mboxFactoryDefault.create(_mboxName,
      mboxShiftArray(mboxShiftArray(arguments)), _defaultNode);

  return _mbox;
};

mboxUpdate = function(_mboxName /*, ... */) {
  mboxFactoryDefault.update(_mboxName, mboxShiftArray(arguments));
};

/**
 * Class that is the base of all mbox types.
 * @PrivateClass
 *
 * @parm _name - name of mbox
 * @param _id - index of this mbox in the list of mboxes of the same name
 * @param _urlBuilder - used to build url of the request
 * @param _mboxLocator object must support
 *   DOMNode locate() which should return null until the DOMNode is found.
 *   DOMNode force() which as a last resort should attempt to create
 *                   a DOMNOde and return it or null
 * @param _importName id of the node containing offer content
 */
mbox = function(_name, _id, _urlBuilder, _mboxLocator, _importName) {
  this._timeout = null;
  this._activated = 0;
  this._locator = _mboxLocator;
  this._importName = _importName;
  this._contentFetcher = null;

  this._offer = new mboxOfferContent();
  this._div = null;
  this._urlBuilder = _urlBuilder;

  // Information to support debugging
  this.message = '';
  this._times = {};
  this._activateCount = 0;

  this._id = _id;
  this._name = _name;

  this._validateName();

  _urlBuilder.addParameter(TNT._internal._params.name, _name)
      .addParameter(TNT._internal._params.id, _id);

  this._onError = function() {};
  this._onLoad = function() {};

  this._defaultDiv = null;
  // enabled for IE10+ only during page load
  this._waitForNestedMboxes = document.documentMode >= 10 && !TNT._internal.isDomLoaded;

  if (this._waitForNestedMboxes) {
    this._nestedMboxes = TNT._internal.nestedMboxes;
    this._nestedMboxes.push(this._name);
  }
};

mbox.prototype.getId = function() {
  return this._id;
};

mbox.prototype._validateName = function() {
  if (this._name.length > TNT._internal._constants.nameLength) {
    throw "Mbox Name " + this._name + " exceeds max length of " + TNT._internal._constants.nameLength + " characters.";
  } else if (this._name.match(/^\s+|\s+$/g)) {
    throw "Mbox Name " + this._name + " has leading/trailing whitespace(s).";
  }
};

mbox.prototype.getName = function() {
  return this._name;
};

/**
 * @return an array of parameters
 */
mbox.prototype.getParameters = function() {
  var _parameters = this._urlBuilder.getParameters();
  var _result = [];
  for (var _i = 0; _i < _parameters.length; _i++) {
    // do not include internal parameters
    if (_parameters[_i].name.indexOf('mbox') !== 0) {
      _result[_result.length] = _parameters[_i].name + '=' + _parameters[_i].value;
    }
  }
  return _result;
};

/**
 * Sets the action to execute when the offer has loaded.
 * To be used with mboxUpdate.
 */
mbox.prototype.setOnLoad = function(_action) {
  this._onLoad = _action;
  return this;
};

mbox.prototype.setMessage = function(_message) {
  this.message = _message;
  return this;
};

/**
 * @param _onError is a function that takes two string arguments:
 *   message, fetch type
 */
mbox.prototype.setOnError = function(_onError) {
  this._onError = _onError;
  return this;
};

mbox.prototype.setFetcher = function(_fetcher) {
  if (this._contentFetcher) {
    this._contentFetcher.cancel();
  }
  this._contentFetcher = _fetcher;
  return this;
};

mbox.prototype.getFetcher = function() {
  return this._contentFetcher;
};

/**
 * Loads mbox content.
 * @param _parameters - Optional parameters to be added to the request.
 */
mbox.prototype.load = function(_parameters) {
  if (this._contentFetcher === null) {
    return this;
  }

  this.setEventTime("load.start");
  this.cancelTimeout();
  this._activated = 0;

  var _urlBuilder = (_parameters && _parameters.length > 0) ?
      this._urlBuilder.clone().addParameters(_parameters) : this._urlBuilder;
  this._contentFetcher.fetch(_urlBuilder);

  var _self = this;
  this._timer = setTimeout(function() {
    _self._onError('browser timeout', _self._contentFetcher.getType());
  }, TNT._internal._settings.timeout);

  this.setEventTime("load.end");

  return this;
};

/*
 * Used by the server to signal that all assets have been loaded by
 * the browser.
 */
mbox.prototype.loaded = function() {
  this.cancelTimeout();
  if (!this.activate()) {
    var _self = this;
    setTimeout(function() { _self.loaded();  }, 100);
  }
};

/**
 * Called when the mbox has been successfully loaded to activate
 * the mbox for display.
 *
 * This call may fail if the DOM has not been fully constructed
 */
mbox.prototype.activate = function() {
  if (this._activated) {
    return this._activated;
  }
  this.setEventTime('activate' + (++this._activateCount) + '.start');

  if (this._waitForNestedMboxes && this._nestedMboxes[this._nestedMboxes.length - 1] !== this._name) {
    return this._activated;
  }

  if (this.show()) {
    this.cancelTimeout();
    this._activated = 1;
  }
  this.setEventTime('activate' + this._activateCount + '.end');

  if (this._waitForNestedMboxes) {
    this._nestedMboxes.pop();
  }
  return this._activated;
};

/**
 * @return true if the mbox has been successfully activated
 */
mbox.prototype.isActivated = function() {
  return this._activated;
};

/**
 * Sets an offer into mbox.
 *
 * @param _offer Offer object that must have 'show(mbox)' method which
 * will be called to render this offer within the mbox passed in.
 *
 * The offer.show() method should return 1 on success and 0 on error.
 */
mbox.prototype.setOffer = function(_offer) {
  if (_offer && _offer.show && _offer.setOnLoad) {
    this._offer = _offer;
  } else {
    throw 'Invalid offer';
  }
  return this;
};

mbox.prototype.getOffer = function() {
  return this._offer;
};

/**
 * Shows the offer.
 *
 * @return 1 if it was possible to show the content, 0 otherwise.
 */
mbox.prototype.show = function() {
  this.setEventTime('show.start');
  var _result = this._offer.show(this);
  this.setEventTime(_result == 1 ? "show.end.ok" : "show.end");

  return _result;
};

/**
 * Shows the specified content in the mbox.
 *
 * @return 1 if it was possible to show the content, 0 otherwise.
 */
mbox.prototype.showContent = function(_content) {
  if (_content === null) {
    // content is not loaded into DOM yet
    return 0;
  }
  // div might be non-null but no longer in the DOM, so we check if the
  // parentNode exists
  if (this._div === null || !this._div.parentNode) {
    this._div = this.getDefaultDiv();

    if (this._div === null) {
      // default div is not in the DOM yet
      return 0;
    }
  }

  if (this._div !== _content) {
    this._hideDiv(this._div);
    this._div.parentNode.replaceChild(_content, this._div);
    this._div = _content;
  }

  this._showDiv(_content);

  this._onLoad();

  // Content was successfully displayed in place of the previous content node
  return 1;
};

/**
 * Hides any fetched content and show Default Content associated
 * with the mbox if it is avaliable yet.
 *
 * @return 1 if it was possible to show the default content
 */
mbox.prototype.hide = function() {
  this.setEventTime('hide.start');
  var _result = this.showContent(this.getDefaultDiv());
  this.setEventTime(_result == 1 ? 'hide.end.ok' : 'hide.end.fail');
  return _result;
};

/**
 * Puts the mbox into a shown state, if that fails shows default content
 * Also cancels any timeouts associated with the mbox
 */
mbox.prototype.finalize = function() {
  this.setEventTime('finalize.start');
  this.cancelTimeout();

  if (!this.getDefaultDiv()) {
    if (this._locator.force()) {
      this.setMessage('No default content, an empty one has been added');
    } else {
      this.setMessage('Unable to locate mbox');
    }
  }

  if (!this.activate()) {
    this.hide();
    this.setEventTime('finalize.end.hide');
  }
  this.setEventTime('finalize.end.ok');
};

mbox.prototype.cancelTimeout = function() {
  if (this._timer) {
    clearTimeout(this._timer);
  }
  if (this._contentFetcher) {
    this._contentFetcher.cancel();
  }
};

mbox.prototype.getDiv = function() {
  return this._div;
};

/**
 * returns valid default div
 * (even if it's not present in the DOM anymore)
 */
mbox.prototype.getDefaultDiv = function() {
  if (this._defaultDiv === null) {
    this._defaultDiv = this._locator.locate();
  }
  return this._defaultDiv;
};

mbox.prototype.setEventTime = function(_event) {
  this._times[_event] = (new Date()).getTime();
};

mbox.prototype.getEventTimes = function() {
  return this._times;
};

mbox.prototype.getImportName = function() {
  return this._importName;
};

mbox.prototype.getURL = function() {
  return this._urlBuilder.buildUrl();
};

mbox.prototype.getUrlBuilder = function() {
  return this._urlBuilder;
};

mbox.prototype._isVisible = function(_div) {
  return _div.style.display != 'none';
};

mbox.prototype._showDiv = function(_div) {
  this._toggleDiv(_div, true);
};

mbox.prototype._hideDiv = function(_div) {
  this._toggleDiv(_div, false);
};

mbox.prototype._toggleDiv = function(_div, _visible) {
  _div.style.visibility = _visible ? "visible" : "hidden";
  _div.style.display = _visible ? "block" : "none";
};

mbox.prototype._disableWaitForNestedMboxes = function() {
  this._waitForNestedMboxes = false;
};

mbox.prototype.relocateDefaultDiv = function() {
  this._defaultDiv = this._locator.locate();
};

mboxOfferContent = function() {
  this._onLoad = function() {};
};

mboxOfferContent.prototype.show = function(_mbox) {
  var _result = _mbox.showContent(document.getElementById(_mbox.getImportName()));
  if (_result == 1) {
    this._onLoad();
  }
  return _result;
};

mboxOfferContent.prototype.setOnLoad = function(_onLoad) {
  this._onLoad = _onLoad;
};

/**
 * Ajax offer.
 */
mboxOfferAjax = function(_content) {
  this._content = _content;
  this._onLoad = function() {};
};

mboxOfferAjax.prototype.setOnLoad = function(_onLoad) {
  this._onLoad = _onLoad;
};

mboxOfferAjax.prototype.show = function(_mbox) {
  var _contentDiv = document.createElement('div');

  _contentDiv.id = _mbox.getImportName();
  _contentDiv.innerHTML = this._content;

  var _result = _mbox.showContent(_contentDiv);
  if (_result == 1) {
    this._onLoad();
  }
  return _result;
};

/**
 * Offer that shows default content.
 */
mboxOfferDefault = function() {
  this._onLoad = function() {};
};

mboxOfferDefault.prototype.setOnLoad = function(_onLoad) {
  this._onLoad = _onLoad;
};

mboxOfferDefault.prototype.show = function(_mbox) {
  var _result = _mbox.hide();
  if (_result == 1) {
    this._onLoad();
  }
  return _result;
};

mboxCookieManager = function mboxCookieManager(_name, _domain) {
  this._name = _name;
  // single word domains are not accepted in a cookie domain clause
  this._domain = _domain === '' || _domain.indexOf('.') === -1 ? '' : '; domain=' + _domain;
  this._cookiesMap = new mboxMap();
  this.loadCookies();
};

mboxCookieManager.prototype.isEnabled = function() {
  this.setCookie(TNT._internal._cookies.check, 'true', 60);
  this.loadCookies();
  return this.getCookie(TNT._internal._cookies.check) == 'true';
};

/**
 * Sets cookie inside of mbox cookies string.
 *
 * @param name Cookie name.
 * @param value Cookie value.
 * @param duration Cookie duration time in seconds.
 */
mboxCookieManager.prototype.setCookie = function(_name, _value, _duration) {
  if (typeof _name != 'undefined' && typeof _value != 'undefined' &&
      typeof _duration != 'undefined') {
    var _cookie = {};
    _cookie.name = _name;
    _cookie.value = encodeURIComponent(_value);
    // Store expiration time in seconds to save space.
    _cookie.expireOn = Math.ceil(_duration + new Date().getTime() / 1000);
    this._cookiesMap.put(_name, _cookie);
    this.saveCookies();
  }
};

mboxCookieManager.prototype.getCookie = function(_name) {
  var _cookie = this._cookiesMap.get(_name);
  return _cookie ? decodeURIComponent(_cookie.value) : null;
};

mboxCookieManager.prototype.deleteCookie = function(_name) {
  this._cookiesMap.remove(_name);
  this.saveCookies();
};

mboxCookieManager.prototype.getCookieNames = function(_namePrefix) {
  var _cookieNames = [];
  this._cookiesMap.each(function(_name, _cookie) {
    if (_name.indexOf(_namePrefix) === 0) {
      _cookieNames[_cookieNames.length] = _name;
    }
  });
  return _cookieNames;
};

mboxCookieManager.prototype.saveCookies = function() {
  var _xDomainOnly = TNT._internal._settings.crossDomainXOnly;
  var _disabledCookieName = TNT._internal._cookies.disable;
  var _cookieValues = [];
  var _maxExpireOn = 0;

  this._cookiesMap.each(function(_name, _cookie) {
    if(!_xDomainOnly || _name === _disabledCookieName) {
      _cookieValues[_cookieValues.length] = _name + '#' + _cookie.value + '#' +
      _cookie.expireOn;
      if (_maxExpireOn < _cookie.expireOn) {
        _maxExpireOn = _cookie.expireOn;
      }
    }
  });

  var _expiration = new Date(_maxExpireOn * 1000);
  var _parts = [];

  _parts.push(this._name, '=', _cookieValues.join('|'));

  if (TNT._internal._settings.usePersistentCookies) {
    _parts.push('; expires=', _expiration.toGMTString());
  }

  _parts.push('; path=/', this._domain);

  document.cookie = _parts.join("");
};

mboxCookieManager.prototype.loadCookies = function() {
  this._cookiesMap = new mboxMap();
  var _cookieStart = document.cookie.indexOf(this._name + '=');
  if (_cookieStart != -1) {
    var _cookieEnd = document.cookie.indexOf(';', _cookieStart);
    if (_cookieEnd == -1) {
      _cookieEnd =  document.cookie.indexOf(',', _cookieStart);
      if (_cookieEnd == -1) {
        _cookieEnd = document.cookie.length;
      }
    }
    var _internalCookies = document.cookie.substring(
        _cookieStart + this._name.length + 1, _cookieEnd).split('|');

    var _nowInSeconds = Math.ceil(new Date().getTime() / 1000);
    for (var _i = 0; _i < _internalCookies.length; _i++) {
      var _cookie = _internalCookies[_i].split('#');
      if (_nowInSeconds <= _cookie[2]) {
        var _newCookie = {};
        _newCookie.name = _cookie[0];
        _newCookie.value = _cookie[1];
        _newCookie.expireOn = _cookie[2];
        this._cookiesMap.put(_newCookie.name, _newCookie);
      }
    }
  }
};

/**
 * Class representing the users Session Id
 *
 * Retrieves the users sessionId from the url or cookie
 * Uses the specified _randomId if no id is found
 * @PrivateClass
 */
mboxSession = function(_randomId, _idArg, _cookieName, _expireTime,
                       _cookieManager) {
  this._idArg = _idArg;
  this._cookieName = _cookieName;
  this._expireTime = _expireTime;
  this._cookieManager = _cookieManager;

  this._newSession = false;

  this._id = typeof mboxForceSessionId != 'undefined' ?
      mboxForceSessionId : mboxGetPageParameter(this._idArg);

  if (this._id === null || this._id.length === 0) {
    this._id = _cookieManager.getCookie(_cookieName);
    if (this._id === null || this._id.length === 0) {
      this._id = _randomId;
      this._newSession = true;
    }
  }

  _cookieManager.setCookie(_cookieName, this._id, _expireTime);
};

/**
 * @return the users session id
 */
mboxSession.prototype.getId = function() {
  return this._id;
};

mboxSession.prototype.forceId = function(_forcedId) {
  this._id = _forcedId;

  this._cookieManager.setCookie(this._cookieName, this._id, this._expireTime);
};

/**
 * Class representing users PC Id.
 * @PrivateClass
 *
 * @param _randomId Randomly assigned ID to user PC.
 * @param _expireTime Expiration time in seconds for this PC ID.
 */
mboxPC = function(_cookieName, _expireTime, _cookieManager) {
  this._cookieName = _cookieName;
  this._expireTime = _expireTime;
  this._cookieManager = _cookieManager;
  this._id = typeof mboxForcePCId != 'undefined' ? mboxForcePCId : _cookieManager.getCookie(_cookieName);

  if (this._id) {
    _cookieManager.setCookie(_cookieName, this._id, _expireTime);
  }

};

/**
 * @return the PC id
 */
mboxPC.prototype.getId = function() {
  return this._id;
};

/**
 * @return True if forced ID value was set, false otherwise.
 */
mboxPC.prototype.forceId = function(_forcedId) {
  if (this._id != _forcedId) {
    this._id = _forcedId;
    this._cookieManager.setCookie(this._cookieName, this._id, this._expireTime);
    return true;
  }
  return false;
};

mboxGetPageParameter = function(_name) {
  var _result = null;
  var _parameterRegExp = new RegExp("\\?[^#]*" + _name + "=([^\&;#]*)");
  var _parameterMatch = _parameterRegExp.exec(document.location);

  if (_parameterMatch && _parameterMatch.length >= 2) {
    _result = _parameterMatch[1];
  }

  return _result;
};

mboxSetCookie = function(_name, _value, _duration) {
  return mboxFactoryDefault.getCookieManager().setCookie(_name, _value, _duration);
};

mboxGetCookie = function(_name) {
  return mboxFactoryDefault.getCookieManager().getCookie(_name);
};

mboxCookiePageDomain = function() {
  var _domain = (/([^:]*)(:[0-9]{0,5})?/).exec(document.location.host)[1];
  var _ipRegExp = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/;

  if (!_ipRegExp.exec(_domain)) {
    var _baseDomain = (/([^\.]+\.[^\.]{3}|[^\.]+\.[^\.]+\.[^\.]{2})$/).exec(_domain);

    if (_baseDomain) {
      _domain = _baseDomain[0];

      if (_domain.indexOf("www.") === 0) {
        _domain=_domain.substr(4);
      }
    }
  }

  return _domain ? _domain: "";
};

mboxShiftArray = function(_iterable) {
  var _result = [];

  for (var _i = 1; _i < _iterable.length; _i++) {
    _result[_result.length] = _iterable[_i];
  }

  return _result;
};

mboxGenerateId = function() {
  return (new Date()).getTime() + "-" + Math.floor(Math.random() * 999999);
};

mboxScreenHeight = function() {
  return screen.height;
};

mboxScreenWidth = function() {
  return screen.width;
};

mboxBrowserWidth = function() {
  return (window.innerWidth) ? window.innerWidth :
      document.documentElement ? document.documentElement.clientWidth :
          document.body.clientWidth;
};

mboxBrowserHeight = function() {
  return (window.innerHeight) ? window.innerHeight :
      document.documentElement ? document.documentElement.clientHeight :
          document.body.clientHeight;
};

mboxBrowserTimeOffset = function() {
  return -new Date().getTimezoneOffset();
};

mboxScreenColorDepth = function() {
  return screen.pixelDepth;
};

if (typeof mboxVersion == 'undefined') {
  var mboxVersion = TNT._internal._settings.version;

  if (!mboxVersion) {
    mboxVersion = TNT._internal._constants.version;
  }

  var mboxFactories = new mboxMap();
  var mboxFactoryDefault = new mboxFactory(
      TNT._internal._settings.serverHost,
      TNT._internal._settings.clientCode,
      TNT._internal._constants.defaultFactoryId);
}

if (mboxGetPageParameter(TNT._internal._pageParams.debug) ||
    mboxFactoryDefault.getCookieManager().getCookie(TNT._internal._cookies.debug)) {

  setTimeout(function() {
    if (typeof mboxDebugLoaded == 'undefined') {
      alert('Could not load the remote debug.\nPlease check your connection to ' +
      TNT._internal._settings.companyName + ' servers');
    }
  }, 60*60);

  document.write('<' + 'scr' + 'ipt language="Javascript1.2" src="' +
  TNT._internal._settings.adminUrl +
  '/mbox/mbox_debug.jsp?mboxServerHost=' +
  TNT._internal._settings.serverHost +
  '&clientCode=' +
  TNT._internal._settings.clientCode +
  '"><' + '\/scr' + 'ipt>');
}

if (TNT._internal._settings.includeScPlugin) {
  mboxScPluginFetcher = function (_clientCode, _siteCatalystCore) {
    this._clientCode = _clientCode;
    this._siteCatalystCore = _siteCatalystCore;
  };

  /**
   * @PrivateClass
   */
  mboxScPluginFetcher.prototype._buildUrl = function (_urlBuilder) {
    _urlBuilder.setBasePath('/m2/' + this._clientCode + '/sc/standard');
    this._addParameters(_urlBuilder);

    var _url = _urlBuilder.buildUrl();
    _url += '&' + TNT._internal._params.scPluginVersion + '=' + TNT._internal._constants.scPluginVersion;
    return _url;
  };

  /**
   * Deliberately ignores "pageURL","referrer"
   */
  mboxScPluginFetcher.prototype._addParameters = function (_urlBuilder) {
    var _parametersToRead = [
      "dynamicVariablePrefix", "visitorID", "vmk", "ppu", "charSet",
      "visitorNamespace", "cookieDomainPeriods", "cookieLifetime", "pageName",
      "currencyCode", "variableProvider", "channel", "server",
      "pageType", "transactionID", "purchaseID", "campaign", "state", "zip", "events",
      "products", "linkName", "linkType", "resolution", "colorDepth",
      "javascriptVersion", "javaEnabled", "cookiesEnabled", "browserWidth",
      "browserHeight", "connectionType", "homepage", "pe", "pev1", "pev2", "pev3",
      "visitorSampling", "visitorSamplingGroup", "dynamicAccountSelection",
      "dynamicAccountList", "dynamicAccountMatch", "trackDownloadLinks",
      "trackExternalLinks", "trackInlineStats", "linkLeaveQueryString",
      "linkDownloadFileTypes", "linkExternalFilters", "linkInternalFilters",
      "linkTrackVars", "linkTrackEvents", "linkNames", "lnk", "eo" ];

    for (var _i = 0; _i < _parametersToRead.length; _i++) {
      this._addParameterFromCore(_parametersToRead[_i], _urlBuilder);
    }

    for (_i = 1; _i <= 75; _i++) {
      this._addParameterFromCore('prop' + _i, _urlBuilder);
      this._addParameterFromCore('eVar' + _i, _urlBuilder);
      this._addParameterFromCore('hier' + _i, _urlBuilder);
    }
  };

  mboxScPluginFetcher.prototype._addParameterFromCore = function (_name, _urlBuilder) {
    var _value = this._siteCatalystCore[_name];

    if (typeof _value === 'undefined' || _value === null || _value === '' || typeof _value === 'object') {
      return;
    }

    _urlBuilder.addParameter(_name, _value);
  };

  mboxScPluginFetcher.prototype.cancel = function () {
  };

  mboxScPluginFetcher.prototype.fetch = function (_urlBuilder) {
    _urlBuilder.setServerType(this.getType());
    var _url = this._buildUrl(_urlBuilder);

    this._include = document.createElement('script');
    this._include.src = _url;

    document.body.appendChild(this._include);
  };

  mboxScPluginFetcher.prototype.getType = function () {
    return 'ajax';
  };

  /**
   * This function returns the plugin, or null if it was not loaded.
   */
  mboxLoadSCPlugin = function (_siteCatalystCore) {
    if (!_siteCatalystCore) {
      return null;
    }

    _siteCatalystCore["m_" + TNT._internal._settings.pluginName] = function (_siteCatalystCore) {
      var _plugin = _siteCatalystCore.m_i(TNT._internal._settings.pluginName);

      _plugin._enabled = true;
      _plugin._clientCode = TNT._internal._settings.clientCode;

      /** This method is called by the core when it's ready to make a request.
       * it cannot be obfuscated, since _t is a special name.  Hence the
       * strange syntax.
       */
      _plugin._t = function () {
        if (!this.isEnabled()) {
          return;
        }

        var _mbox = this._createMbox();

        if (_mbox) {
          var _fetcher = new mboxScPluginFetcher(this._clientCode, this.s);
          _mbox.setFetcher(_fetcher);
          _mbox.load();
        }
      };

      _plugin.isEnabled = function () {
        return this._enabled && mboxFactoryDefault.isEnabled();
      };

      _plugin._createMbox = function () {
        var _mboxName = this._generateMboxName();
        var _div = document.createElement('DIV');
        return mboxFactoryDefault.create(_mboxName, [], _div);
      };

      _plugin._generateMboxName = function () {
        var _isPurchase = this.s.events && this.s.events.indexOf('purchase') != -1;
        return 'SiteCatalyst: ' + (_isPurchase ? 'purchase' : 'event');
      };
    };

    return _siteCatalystCore.loadModule(TNT._internal._settings.pluginName);
  };
}


mboxVizTargetUrl = function(_mboxName /*, ... */) {
  if (!mboxFactoryDefault.isEnabled()) {
    return;
  }

  var _urlBuilder = mboxFactoryDefault.getUrlBuilder().clone();

  _urlBuilder.setBasePath('/m2/' + TNT._internal._settings.clientCode + '/viztarget');
  _urlBuilder.addParameter(TNT._internal._params.name, _mboxName);
  _urlBuilder.addParameter(TNT._internal._params.id, 0);
  _urlBuilder.addParameter(TNT._internal._params.count, mboxFactoryDefault.getMboxes().length() + 1);

  var _now = new Date();
  _urlBuilder.addParameter(TNT._internal._params.time, _now.getTime() -
  (_now.getTimezoneOffset() * TNT._internal._constants.millisInMinute));

  _urlBuilder.addParameter(TNT._internal._params.page, mboxGenerateId());

  var _parameters = mboxShiftArray(arguments);
  if (_parameters && _parameters.length > 0) {
    _urlBuilder.addParameters(_parameters);
  }

  _urlBuilder.addParameter(TNT._internal._params.domLoaded, mboxFactoryDefault.isDomLoaded());

  mboxFactoryDefault.setVisitorIdParameters(_urlBuilder, _mboxName);

  return _urlBuilder.buildUrl();
};

TNT.createGlobalMbox = function () {
  if (!mboxFactoryDefault.isEnabled()) {
    return;
  }

  var _globalMboxName = TNT._internal._settings.globalMboxName;
  var _globalMboxDomElementId = TNT._internal._settings.globalMboxLocationDomId;
  var _globalMboxDiv;

  if (!_globalMboxDomElementId) {
    _globalMboxDomElementId = "mbox-" + _globalMboxName + "-" + mboxGenerateId();
    _globalMboxDiv = document.createElement("div");
    _globalMboxDiv.className = "mboxDefault";
    _globalMboxDiv.id = _globalMboxDomElementId;
    _globalMboxDiv.style.visibility = "hidden";
    _globalMboxDiv.style.display = "none";
    mboxFactoryDefault.addOnLoad(function(){
      document.body.insertBefore(_globalMboxDiv, document.body.firstChild);
    });
  }

  var _globalMbox = mboxFactoryDefault.create(_globalMboxName,
      TNT._internal._getGlobalMboxParameters(), _globalMboxDomElementId);

  if (_globalMbox && mboxFactoryDefault.isEnabled()) {
    _globalMbox.setFetcher(new TNT._internal._globalMboxFetcher());
    _globalMbox.load();
  }
};

if (TNT._internal._settings.includeExperienceManagerPlugin) {
  if (!("_AT" in window)) {
    window._AT = {};
    window._AT.applyWhenReady = function (_actions) {
      setTimeout(function () {
        window._AT.applyWhenReady(_actions);
      }, 50);
    };
  }

  document.write('<scr' + 'ipt src="' + TNT._internal._settings.experienceManagerPluginUrl + '"></sc' + 'ript>');
}

TNT._internal._settings.clientJavascriptFunction();

if (TNT._internal._settings.globalMboxAutoCreate) {
  TNT.createGlobalMbox();
}
