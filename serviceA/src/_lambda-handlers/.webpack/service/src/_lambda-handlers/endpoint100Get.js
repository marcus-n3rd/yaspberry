(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/_lambda-handlers/endpoint100Get.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/harmony-module.js?");

/***/ }),

/***/ "./business/controllers/domain.controller.clientName.js":
/*!**************************************************************!*\
  !*** ./business/controllers/domain.controller.clientName.js ***!
  \**************************************************************/
/*! exports provided: somethingGet, somethingWrite */
/*! exports used: somethingGet, somethingWrite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return somethingGet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return somethingWrite; });\nconst somethingGet = (rawData) => {\r\n  // Pseudo-class instantiation\r\n  return { ...rawData };\r\n};\r\n\r\n// Prepares data, does not actually write it\r\nconst somethingWrite = (rawData) => {\r\n  // Pseudo-class instantiation with mutation\r\n  return { ...rawData, version: (new Date()).toISOString() };\r\n}\r\n\n\n//# sourceURL=webpack:///./business/controllers/domain.controller.clientName.js?");

/***/ }),

/***/ "./src/_lambda-handlers/endpoint100Get.js":
/*!************************************************!*\
  !*** ./src/_lambda-handlers/endpoint100Get.js ***!
  \************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_secrets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/secrets */ \"./src/config/secrets.js\");\n/* harmony import */ var _controllers_domain_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/domain.controller */ \"./src/controllers/domain.controller.js\");\n// import env from '../config/env.aws';\r\n\r\n\r\n\r\n// Initialize \r\n_config_secrets__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].get('secretAlpha');\r\n\r\nmodule.exports.handler = withHttpMiddleware(async event => {\r\n  const arbitraryValue = event.arbitraryProperty;\r\n  const password = await _config_secrets__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].get('secretAlpha');\r\n  await Object(_controllers_domain_controller__WEBPACK_IMPORTED_MODULE_1__[/* endpoint100GetHandler */ \"a\"])(arbitraryValue, password);\r\n})\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/_lambda-handlers/endpoint100Get.js?");

/***/ }),

/***/ "./src/config/env.js":
/*!***************************!*\
  !*** ./src/config/env.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const configStage = ['dev', 'staging', 'prod'].includes(process.env.STAGE_NAME) ? process.env.STAGE_NAME : 'dev';\r\n\r\nconst envConfig = Object.freeze({\r\n  stageName: process.env.STAGE_NAME,\r\n  configStage,\r\n  logLevel: process.env.LOG_LEVEL,\r\n  releaseVersion: process.env.RELEASE_VERSION,\r\n  // MAB: up = common, down = AWS specific\r\n  region: process.env.AWS_REGION,\r\n  stackType: 'aws',\r\n  // MAB: service specific\r\n  // MAB: lambda specific\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (envConfig);\r\n\n\n//# sourceURL=webpack:///./src/config/env.js?");

/***/ }),

/***/ "./src/config/secrets.js":
/*!*******************************!*\
  !*** ./src/config/secrets.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ \"./src/config/env.js\");\nconst SSM = {\r\n  something: ({ name: fullName }) => `${fullName.split('/')[1]} Value`,\r\n};\r\n\r\n\r\nclass Secrets {\r\n  constructor() {\r\n    this.secret = {};\r\n    this.secret.prototype.toString = () => '';\r\n  }\r\n\r\n  async get(name) {\r\n    if (typeof this.secret[name] === 'undefined') {\r\n      const params = {\r\n        name: `${_env__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].configStage}/${name}`,\r\n      };\r\n      const result = await SSM.something(params);\r\n      this.secret[name] = typeof result === 'undefined' ? null : result;\r\n    }\r\n    return this.secret[name];\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (new Secrets());\r\n\n\n//# sourceURL=webpack:///./src/config/secrets.js?");

/***/ }),

/***/ "./src/controllers/domain.controller.js":
/*!**********************************************!*\
  !*** ./src/controllers/domain.controller.js ***!
  \**********************************************/
/*! exports provided: endpoint100GetHandler, endpoint100PutHandler */
/*! exports used: endpoint100GetHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return endpoint100GetHandler; });\n/* unused harmony export endpoint100PutHandler */\n/* harmony import */ var _services_logging_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/logging.service */ \"./src/services/logging.service.js\");\n/* harmony import */ var _repositories_domain_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/domain.repository */ \"./src/repositories/domain.repository.js\");\n/* harmony import */ var _business_controllers_domain_controller_clientName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../business/controllers/domain.controller.clientName */ \"./business/controllers/domain.controller.clientName.js\");\n\r\n\r\n\r\n\r\nconst endpoint100GetHandler = async (arbitraryValue, secret) => {\r\n  _services_logging_service__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].debug(`Arbitrary value`, { arbitraryValue });\r\n  _services_logging_service__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].debug(`Arbitrary secret`, { secret });\r\n  const rawData = Object(_repositories_domain_repository__WEBPACK_IMPORTED_MODULE_1__[\"getEntity\"])(arbitraryValue);\r\n  return Object(_business_controllers_domain_controller_clientName__WEBPACK_IMPORTED_MODULE_2__[/* somethingGet */ \"a\"])(rawData);\r\n};\r\n\r\nconst endpoint100PutHandler = async arbitraryValue => {\r\n  _services_logging_service__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"].debug(`Arbitrary value`, { arbitraryValue });\r\n  const rawData = Object(_repositories_domain_repository__WEBPACK_IMPORTED_MODULE_1__[\"getEntity\"])(arbitraryValue);\r\n  const newEntity = Object(_business_controllers_domain_controller_clientName__WEBPACK_IMPORTED_MODULE_2__[/* somethingWrite */ \"b\"])(rawData); // Preps, doesn't write\r\n  return Object(_repositories_domain_repository__WEBPACK_IMPORTED_MODULE_1__[/* putEntity */ \"b\"])(newEntity);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/controllers/domain.controller.js?");

/***/ }),

/***/ "./src/repositories/domain.repository.js":
/*!***********************************************!*\
  !*** ./src/repositories/domain.repository.js ***!
  \***********************************************/
/*! exports provided: putEntity, updateEntity */
/*! exports used: getEntity, putEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return putEntity; });\n/* unused harmony export updateEntity */\n// import * as AWS from 'aws-sdk';\r\n\r\n// const params = {};\r\n// const dynamo = new AWS.DynamoDB(params);\r\n\r\nconst putEntity = entity => {\r\n  console.log('docClient:', 'putting entity', entity);\r\n  // return await dynamo.putItem(entity).promise();\r\n};\r\n\r\nconst updateEntity = entity => {\r\n  console.log('docClient:', 'updating entity', entity);\r\n  // return await dynamo.updateItem(entity).promise();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/repositories/domain.repository.js?");

/***/ }),

/***/ "./src/services/logging.service.js":
/*!*****************************************!*\
  !*** ./src/services/logging.service.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flatted'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/env */ \"./src/config/env.js\");\n\r\n\r\n\r\nclass LoggerService {\r\n  constructor() {\r\n    this.envConfig = _config_env__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"];\r\n\r\n    // eslint-disable-next-line no-console\r\n    this._output = console.log;\r\n\r\n    // Log levels standard defined by Log4j\r\n    this.logLevels = {\r\n      off: 0,\r\n      fatal: 100,\r\n      error: 200,\r\n      warn: 300,\r\n      info: 400,\r\n      debug: 500,\r\n      trace: 600,\r\n      all: 10000,\r\n    };\r\n\r\n    this.configSecrets = [];\r\n  }\r\n\r\n  maskSecret(secret) {\r\n    this.configSecrets.push(secret);\r\n  }\r\n\r\n  // The log() function is an alias to allow our Logger class to be used as a logger for AWS sdk calls\r\n  log(message, data, className, correlationObject) {\r\n    this.writeLog('info', message, data, className, correlationObject);\r\n  }\r\n  fatal(message, data, className, correlationObject) {\r\n    this.writeLog('fatal', message, data, className, correlationObject);\r\n  }\r\n  error(message, data, className, correlationObject) {\r\n    this.writeLog('error', message, data, className, correlationObject);\r\n  }\r\n  warn(message, data, className, correlationObject) {\r\n    this.writeLog('warn', message, data, className, correlationObject);\r\n  }\r\n  info(message, data, className, correlationObject) {\r\n    this.writeLog('info', message, data, className, correlationObject);\r\n  }\r\n  debug(message, data, className, correlationObject) {\r\n    this.writeLog('debug', message, data, className, correlationObject);\r\n  }\r\n  trace(message, data, className, correlationObject) {\r\n    this.writeLog('trace', message, data, className, correlationObject);\r\n  }\r\n\r\n  writeLog(messageLevel, message, data, className, correlationObject) {\r\n    const loggerLevel = (this.envConfig && this.envConfig.logLevel) || 'warn';\r\n\r\n    // Only output if the messageLevel is lower than the Logger configuration\r\n    if (this.logLevels[messageLevel] <= this.logLevels[loggerLevel]) {\r\n      let dataOutput = data !== undefined ? data : {};\r\n      if (dataOutput instanceof Error) {\r\n        // Improved serialization for Error objects\r\n        dataOutput =\r\n          'Error message: ' +\r\n          dataOutput.message +\r\n          '; Stack: ' +\r\n          dataOutput.stack;\r\n      } else {\r\n        // Use flatted object structure for arbitrary data objects to avoid circular JSON errors\r\n        dataOutput = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flatted'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).stringify(dataOutput);\r\n      }\r\n\r\n      // Project-specific convention for Error output structure\r\n      let outObject = {\r\n        level: messageLevel,\r\n        message: message,\r\n        data: dataOutput,\r\n        timestamp: new Date().toISOString(),\r\n        location: className,\r\n        correlationObject: correlationObject,\r\n      };\r\n\r\n      let outString;\r\n      try {\r\n        outString = JSON.stringify(outObject);\r\n      } catch (err) {\r\n        outString = `{\"level\":\"error\",\"message\":\"Error trying to serialize for logs; ${err}\"}`;\r\n      }\r\n\r\n      // Mask secrets from being written to the logs\r\n      this.configSecrets.forEach(secret => {\r\n        outString = outString && outString.replace(secret, '*****');\r\n      });\r\n\r\n      this._output(outString);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (new LoggerService()); // Export new instance for an easy singleton\r\n\n\n//# sourceURL=webpack:///./src/services/logging.service.js?");

/***/ })

/******/ })));