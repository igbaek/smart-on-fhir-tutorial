/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/es/array/find.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/find.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

var entryUnbind = __webpack_require__(/*! ../../internals/entry-unbind */ "./node_modules/core-js/internals/entry-unbind.js");

module.exports = entryUnbind('Array', 'find');

/***/ }),

/***/ "./node_modules/core-js/es/object/assign.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/es/object/assign.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Object.assign;

/***/ }),

/***/ "./node_modules/core-js/es/promise/index.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/es/promise/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! ../../modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! ../../modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");

var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Promise;

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js"); // `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from


module.exports = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();

    for (; !(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);

    for (; length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }

  result.length = index;
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes


module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-methods.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/array-methods.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js"); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
// 0 -> Array#forEach
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
// 1 -> Array#map
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// 2 -> Array#filter
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// 3 -> Array#some
// https://tc39.github.io/ecma262/#sec-array.prototype.some
// 4 -> Array#every
// https://tc39.github.io/ecma262/#sec-array.prototype.every
// 5 -> Array#find
// https://tc39.github.io/ecma262/#sec-array.prototype.find
// 6 -> Array#findIndex
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex


module.exports = function (TYPE, specificCreate) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = specificCreate || arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                target.push(value);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"); // call something on iterator step with safe closing on error


module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function next() {
      return {
        done: !!called++
      };
    },
    'return': function _return() {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR] = function () {
    return this;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR] = function () {
      return {
        next: function next() {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");

var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function returnThis() {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function getIterationMethod(KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"); // Thank's IE8 for his funny defineProperty


module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document; // typeof document.createElement is 'object' in old IE

var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

/***/ }),

/***/ "./node_modules/core-js/internals/entry-unbind.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/entry-unbind.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (_typeof(sourceProperty) === _typeof(targetProperty)) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      hide(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);

  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  }

  return anObject(iteratorMethod.call(it));
};

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var O = 'object';

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line no-undef
check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == O && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == O && window) || check((typeof self === "undefined" ? "undefined" : _typeof(self)) == O && self) || check((typeof global === "undefined" ? "undefined" : _typeof(global)) == O && global) || // eslint-disable-next-line no-new-func
Function('return this')();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;

  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;
module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var BREAK = {};

var exports = module.exports = function (iterable, fn, that, ENTRIES, ITERATOR) {
  var boundFunction = bind(fn, that, ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
        if (result === BREAK) return BREAK;
      }

      return;
    }

    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    if (callWithSafeIterationClosing(iterator, boundFunction, step.value, ENTRIES) === BREAK) return BREAK;
  }
};

exports.BREAK = BREAK;

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function returnThis() {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;

var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process'; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify, toggle, node, promise; // modern engines have queueMicrotask method

if (!queueMicrotask) {
  flush = function flush() {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (error) {
        if (head) notify();else last = undefined;
        throw error;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (IS_NODE) {
    notify = function notify() {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339

  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = {
    fn: fn,
    next: undefined
  };
  if (last) last.next = task;

  if (!head) {
    head = task;
    notify();
  }

  last = task;
};

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

/***/ }),

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
module.exports = !fails(function () {
  var url = new URL('b?e=1', 'http://a');
  var searchParams = url.searchParams;
  url.pathname = 'c%20d';
  return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?e=1' || searchParams.get('e') !== '1' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR] // throws in Edge
  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
  || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
  || new URL('http://a#б').hash !== '#%D0%B1';
});

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));

/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}; // 25.4.1.5 NewPromiseCapability(C)


module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign; // 19.1.2.1 Object.assign(target, source, ...)
// should work with symbols and should have deterministic property order (V8 bug)

module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : nativeAssign;

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");

var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var IE_PROTO = sharedKey('IE_PROTO');
var PROTOTYPE = 'prototype';

var Empty = function Empty() {
  /* empty */
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (length--) {
    delete _createDict[PROTOTYPE][enumBugKeys[length]];
  }

  return _createDict();
}; // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;

  while (length > i) {
    definePropertyModule.f(O, key = keys[i++], Properties[key]);
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"); // 19.1.2.14 / 15.2.3.14 Object.keys(O)


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1);
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js"); // Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */


module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;

  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z'; // `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring

module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect; // all object keys, includes non-enumerable and symbols

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      error: false,
      value: exec()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),

/***/ "./node_modules/core-js/internals/punycode-to-ascii.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/punycode-to-ascii.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80

var delimiter = '-'; // '\x2D'

var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;
/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */

var ucs2decode = function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;

  while (counter < length) {
    var value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
};
/**
 * Converts a digit/integer into a basic code point.
 */


var digitToBasic = function digitToBasic(digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};
/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */


var adapt = function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);

  for (;
  /* no initialization */
  delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }

  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements


var encode = function encode(input) {
  var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

  input = ucs2decode(input); // Cache the length.

  var inputLength = input.length; // Initialize the state.

  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue; // Handle the basic code points.

  for (i = 0; i < input.length; i++) {
    currentValue = input[i];

    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.

  var handledCPCount = basicLength; // number of code points that have been handled;
  // Finish the basic string with a delimiter unless it's empty.

  if (basicLength) {
    output.push(delimiter);
  } // Main encoding loop:


  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


    var handledCPCountPlusOne = handledCPCount + 1;

    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }

      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;

        for (var k = base;;
        /* no condition */
        k += base) {
          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

          if (q < t) {
            break;
          }

          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }

  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, ".").split('.');
  var i, label;

  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }

  return encoded.join('.');
};

/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) {
    redefine(target, key, src[key], options);
  }

  return target;
};

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');
shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var C = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;
  if (DESCRIPTORS && C && !C[SPECIES]) defineProperty(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"); // CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt


module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};

/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");

var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function run(id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function runner(id) {
  return function () {
    run(id);
  };
};

var listener = function listener(event) {
  run(event.data);
};

var post = function post(id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };

    defer(counter);
    return counter;
  };

  clear = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (classof(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(runner(id));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(runner(id));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function defer(id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    }; // Rest old browsers

  } else {
    defer = function defer(id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min; // `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"); // 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);

  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var _Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && _Symbol[name] || (NATIVE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var arrayMethods = __webpack_require__(/*! ../internals/array-methods */ "./node_modules/core-js/internals/array-methods.js");

var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var internalFind = arrayMethods(5);
var FIND = 'find';
var SKIPS_HOLES = true; // Shouldn't skip holes

if (FIND in []) Array(1)[FIND](function () {
  SKIPS_HOLES = false;
}); // `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find

$({
  target: 'Array',
  proto: true,
  forced: SKIPS_HOLES
}, {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return internalFind(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables(FIND);

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator

module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js"); // `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign


$({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

var ObjectPrototype = Object.prototype; // `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring

if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, {
    unsafe: true
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.finally.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.finally.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js"); // `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally


$({
  target: 'Promise',
  proto: true,
  real: true
}, {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;

var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");

var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");

var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");

var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");

var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = global[PROMISE];
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = global.fetch;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper;
var FORCED = isForced(PROMISE, function () {
  // correct subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);

  var empty = function empty() {
    /* empty */
  };

  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
    exec(empty, empty);
  }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


  return !((IS_NODE || typeof PromiseRejectionEvent == 'function') && (!IS_PURE || promise['finally']) && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // we can't detect it synchronously, so just check versions
  && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1);
});
var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () {
    /* empty */
  });
}); // helpers

var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function notify(promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var i = 0;

    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    };

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function dispatchEvent(name, promise, reason) {
  var event, handler;

  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = {
    promise: promise,
    reason: reason
  };

  if (handler = global['on' + name]) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function onUnhandled(promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;

    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function isUnhandled(state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function onHandleUnhandled(promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function bind(fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function internalReject(promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function internalResolve(promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);

    if (then) {
      microtask(function () {
        var wrapper = {
          done: false
        };

        try {
          then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, {
      done: false
    }, error, state);
  }
}; // constructor polyfill


if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);

    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  }; // wrap fetch result


  if (!IS_PURE && typeof $fetch == 'function') $({
    global: true,
    enumerable: true,
    forced: true
  }, {
    // eslint-disable-next-line no-unused-vars
    fetch: function fetch(input) {
      return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
    }
  });
}

$({
  global: true,
  wrap: true,
  forced: FORCED
}, {
  Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);
PromiseWrapper = path[PROMISE]; // statics

$({
  target: PROMISE,
  stat: true,
  forced: FORCED
}, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});
$({
  target: PROMISE,
  stat: true,
  forced: IS_PURE || FORCED
}, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});
$({
  target: PROMISE,
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");

var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      hide(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var hasOwn = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function percentSequence(bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function percentDecode(sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function deserialize(it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;

  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }

    return result;
  }
};

var find = /[!'()~]|%20/g;
var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function replacer(match) {
  return replace[match];
};

var serialize = function serialize(it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function parseSearchParams(result, query) {
  if (query) {
    var attributes = query.split('&');
    var i = 0;
    var attribute, entry;

    while (i < attributes.length) {
      attribute = attributes[i++];

      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }

  return result;
};

var updateSearchParams = function updateSearchParams(query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function validateArgumentsLength(passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;

  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  }

  return step;
}); // `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams

var URLSearchParamsConstructor = function URLSearchParams()
/* init */
{
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, step, entryIterator, first, second, key;
  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: null,
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);

      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);

        while (!(step = iterator.next()).done) {
          entryIterator = getIterator(anObject(step.value));
          if ((first = entryIterator.next()).done || (second = entryIterator.next()).done || !entryIterator.next().done) throw TypeError('Expected sequence with length 2');
          entries.push({
            key: first.value + '',
            value: second.value + ''
          });
        }
      } else for (key in init) {
        if (hasOwn(init, key)) entries.push({
          key: key,
          value: init[key] + ''
        });
      }
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.appent` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({
      key: name + '',
      value: value + ''
    });
    if (state.updateURL) state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function _delete(name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var i = 0;

    while (i < entries.length) {
      if (entries[i].key === key) entries.splice(i, 1);else i++;
    }

    if (state.updateURL) state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var i = 0;

    for (; i < entries.length; i++) {
      if (entries[i].key === key) return entries[i].value;
    }

    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var i = 0;

    for (; i < entries.length; i++) {
      if (entries[i].key === key) result.push(entries[i].value);
    }

    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var i = 0;

    while (i < entries.length) {
      if (entries[i++].key === key) return true;
    }

    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var i = 0;
    var entry;

    for (; i < entries.length; i++) {
      entry = entries[i];

      if (entry.key === key) {
        if (found) entries.splice(i--, 1);else {
          found = true;
          entry.value = val;
        }
      }
    }

    if (!found) entries.push({
      key: key,
      value: val
    });
    if (state.updateURL) state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries; // Array#sort is not stable in some engines

    var slice = entries.slice();
    var entry, i, j;
    entries.length = 0;

    for (i = 0; i < slice.length; i++) {
      entry = slice[i];

      for (j = 0; j < i; j++) {
        if (entries[j].key > entry.key) {
          entries.splice(j, 0, entry);
          break;
        }
      }

      if (j === i) entries.push(entry);
    }

    if (state.updateURL) state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback
  /* , thisArg */
  ) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var i = 0;
    var entry;

    while (i < entries.length) {
      entry = entries[i++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, {
  enumerable: true
}); // `URLSearchParams.prototype[@@iterator]` method

redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries); // `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var i = 0;
  var entry;

  while (i < entries.length) {
    entry = entries[i++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  }

  return result.join('&');
}, {
  enumerable: true
});
setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
$({
  global: true,
  forced: !USE_NATIVE_URL
}, {
  URLSearchParams: URLSearchParamsConstructor
});
module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");

var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");

var toASCII = __webpack_require__(/*! ../internals/punycode-to-ascii */ "./node_modules/core-js/internals/punycode-to-ascii.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var pow = Math.pow;
var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';
var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/; // eslint-disable-next-line no-control-regex

var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/; // eslint-disable-next-line no-control-regex

var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/; // eslint-disable-next-line no-control-regex

var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g; // eslint-disable-next-line no-control-regex

var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function parseHost(url, input) {
  var result, codePoints, i;

  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result; // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);

    for (i = 0; i < codePoints.length; i++) {
      result += percentEncode(codePoints[i], C0ControlPercentEncodeSet);
    }

    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function parseIPv4(input) {
  var parts = input.split('.');
  var partsLength, numbers, i, part, R, n, ipv4;

  if (parts[parts.length - 1] == '') {
    if (parts.length) parts.pop();
  }

  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];

  for (i = 0; i < partsLength; i++) {
    part = parts[i];
    if (part == '') return input;
    R = 10;

    if (part.length > 1 && part.charAt(0) == '0') {
      R = HEX_START.test(part) ? 16 : 8;
      part = part.slice(R == 8 ? 1 : 2);
    }

    if (part === '') {
      n = 0;
    } else {
      if (!(R == 10 ? DEC : R == 8 ? OCT : HEX).test(part)) return input;
      n = parseInt(part, R);
    }

    numbers.push(n);
  }

  for (i = 0; i < partsLength; i++) {
    n = numbers[i];

    if (i == partsLength - 1) {
      if (n >= pow(256, 5 - partsLength)) return null;
    } else if (n > 255) return null;
  }

  ipv4 = numbers.pop();

  for (i = 0; i < numbers.length; i++) {
    ipv4 += numbers[i] * pow(256, 3 - i);
  }

  return ipv4;
}; // eslint-disable-next-line max-statements


var parseIPv6 = function parseIPv6(input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function char() {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }

  while (char()) {
    if (pieceIndex == 8) return;

    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }

    value = length = 0;

    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }

    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;

      while (char()) {
        ipv4Piece = null;

        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;else return;
        }

        if (!DIGIT.test(char())) return;

        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }

        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }

      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;

    address[pieceIndex++] = value;
  }

  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;

    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;

  return address;
};

var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var i = 0;

  for (; i < 8; i++) {
    if (ipv6[i] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }

      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = i;
      ++currLength;
    }
  }

  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }

  return maxIndex;
};

var serializeHost = function serializeHost(host) {
  var result, i, compress, ignore0; // ipv4

  if (typeof host == 'number') {
    result = [];

    for (i = 0; i < 4; i++) {
      result.unshift(host % 256);
      host = Math.floor(host / 256);
    }

    return result.join('.'); // ipv6
  } else if (_typeof(host) == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);

    for (i = 0; i < 8; i++) {
      if (ignore0 && host[i] === 0) continue;
      if (ignore0) ignore0 = false;

      if (compress === i) {
        result += i ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[i].toString(16);
        if (i < 7) result += ':';
      }
    }

    return '[' + result + ']';
  }

  return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1,
  '"': 1,
  '<': 1,
  '>': 1,
  '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1,
  '?': 1,
  '{': 1,
  '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1,
  ':': 1,
  ';': 1,
  '=': 1,
  '@': 1,
  '[': 1,
  '\\': 1,
  ']': 1,
  '^': 1,
  '|': 1
});

var percentEncode = function percentEncode(char, set) {
  var code = codePointAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function isSpecial(url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function includesCredentials(url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function cannotHaveUsernamePasswordPort(url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
};

var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
};

var shortenURLsPath = function shortenURLsPath(url) {
  var path = url.path;
  var pathSize = path.length;

  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function isSingleDot(segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function isDoubleDot(segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
}; // States:


var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {}; // eslint-disable-next-line max-statements

var parseURL = function parseURL(url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');
  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];

    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;

        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride) {
            if (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host) return;
          }

          url.scheme = buffer;

          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }

          buffer = '';

          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;

        break;

      case NO_SCHEME:
        if (!base || base.cannotBeABaseURL && char != '#') return INVALID_SCHEME;

        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }

        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        }

        break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;

        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || char == '\\' && isSpecial(url)) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        }

        break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        }

        break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        }

        break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);

          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];

            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }

            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
          }

          buffer = '';
        } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;

        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;else if (char == ']') seenBracket = false;
          buffer += char;
        }

        break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url) || stateOverride) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
            buffer = '';
          }

          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;

        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }

            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        }
        break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }

        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);else url.host = base.host;
        }

        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          }

          continue;
        } else buffer += char;

        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        }

        break;

      case PATH:
        if (char == EOF || char == '/' || char == '\\' && isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);

            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }

            url.path.push(buffer);
          }

          buffer = '';

          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }

          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        }

        break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        }

        break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';else if (char == '#') url.query += '%23';else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        }

        break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
}; // `URL` constructor
// https://url.spec.whatwg.org/#url-class


var URLConstructor = function URL(url
/* , base */
) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, {
    type: 'URL'
  });
  var baseState, failure;

  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }

  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);

  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };

  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function serializeURL() {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';

  if (host !== null) {
    output += '//';

    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }

    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';

  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function getOrigin() {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function getProtocol() {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function getUsername() {
  return getInternalURLState(this).username;
};

var getPassword = function getPassword() {
  return getInternalURLState(this).password;
};

var getHost = function getHost() {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
};

var getHostname = function getHostname() {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function getPort() {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function getPathname() {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function getSearch() {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function getSearchParams() {
  return getInternalURLState(this).searchParams;
};

var getHash = function getHash() {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function accessorDescriptor(getter, setter) {
  return {
    get: getter,
    set: setter,
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';

      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';

      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);

      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }

      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);

      if (hash == '') {
        url.fragment = null;
        return;
      }

      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
} // `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson


redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, {
  enumerable: true
}); // `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior

redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, {
  enumerable: true
});

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars

  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  }); // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars

  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');
$({
  global: true,
  forced: !USE_NATIVE_URL,
  sham: !DESCRIPTORS
}, {
  URL: URLConstructor
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.url.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js"); // `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson


$({
  target: 'URL',
  proto: true,
  enumerable: true
}, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});

/***/ }),

/***/ "./node_modules/core-js/stable/array/find.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/stable/array/find.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/array/find */ "./node_modules/core-js/es/array/find.js");

/***/ }),

/***/ "./node_modules/core-js/stable/object/assign.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/stable/object/assign.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/assign */ "./node_modules/core-js/es/object/assign.js");

/***/ }),

/***/ "./node_modules/core-js/stable/promise/index.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/stable/promise/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/promise */ "./node_modules/core-js/es/promise/index.js");

/***/ }),

/***/ "./node_modules/core-js/stable/url-search-params/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/stable/url-search-params/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../web/url-search-params */ "./node_modules/core-js/web/url-search-params.js");

/***/ }),

/***/ "./node_modules/core-js/stable/url/index.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/stable/url/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../web/url */ "./node_modules/core-js/web/url.js");

/***/ }),

/***/ "./node_modules/core-js/web/url-search-params.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/web/url-search-params.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.URLSearchParams;

/***/ }),

/***/ "./node_modules/core-js/web/url.js":
/*!*****************************************!*\
  !*** ./node_modules/core-js/web/url.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.url */ "./node_modules/core-js/modules/web.url.js");

__webpack_require__(/*! ../modules/web.url.to-json */ "./node_modules/core-js/modules/web.url.to-json.js");

__webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.URL;

/***/ }),

/***/ "./node_modules/debug/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debug/node_modules/ms/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/debug/node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

module.exports = self.fetch.bind(self);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (_typeof(global.process) === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob: 'FileReader' in self && 'Blob' in self && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}

if (support.arrayBuffer) {
  var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

  var isArrayBufferView = ArrayBuffer.isView || function (obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }

  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }

  return value;
} // Build a destructive iterator for the value list


function iteratorFor(items) {
  var iterator = {
    next: function next() {
      var value = items.shift();
      return {
        done: value === undefined,
        value: value
      };
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function (callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};

Headers.prototype.keys = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};

Headers.prototype.values = function () {
  var items = [];
  this.forEach(function (value) {
    items.push(value);
  });
  return iteratorFor(items);
};

Headers.prototype.entries = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }

  return chars.join('');
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    this._bodyInit = body;

    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }

  this.text = function () {
    var rejected = consumed(this);

    if (rejected) {
      return rejected;
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text');
    } else {
      return Promise.resolve(this._bodyText);
    }
  };

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(input, options) {
  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read');
    }

    this.url = input.url;
    this.credentials = input.credentials;

    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }

    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;

    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';

  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }

  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(body);
}

Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function parseHeaders(rawHeaders) {
  var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2

  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
  preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers;
}

Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = 'statusText' in options ? options.statusText : 'OK';
  this.headers = new Headers(options.headers);
  this.url = options.url || '';

  this._initBody(bodyInit);
}
Body.call(Response.prototype);

Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};

Response.error = function () {
  var response = new Response(null, {
    status: 0,
    statusText: ''
  });
  response.type = 'error';
  return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function (url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code');
  }

  return new Response(null, {
    status: status,
    headers: {
      location: url
    }
  });
};

var DOMException = self.DOMException;

try {
  new DOMException();
} catch (err) {
  DOMException = function DOMException(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };

  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch(input, init) {
  return new Promise(function (resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function () {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, options));
    };

    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.ontimeout = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.onabort = function () {
      reject(new DOMException('Aborted', 'AbortError'));
    };

    xhr.open(request.method, request.url, true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob';
    }

    request.headers.forEach(function (value, name) {
      xhr.setRequestHeader(name, value);
    });

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function () {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
}
fetch.polyfill = true;

if (!self.fetch) {
  self.fetch = fetch;
  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;
}

/***/ }),

/***/ "./src/Client.js":
/*!***********************!*\
  !*** ./src/Client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! ./lib */ "./src/lib.js"),
    fetchJSON = _require.fetchJSON,
    absolute = _require.absolute,
    debug = _require.debug,
    _getPath = _require.getPath,
    setPath = _require.setPath,
    jwtDecode = _require.jwtDecode,
    makeArray = _require.makeArray,
    request = _require.request,
    responseToJSON = _require.responseToJSON,
    btoa = _require.btoa,
    _byCode = _require.byCode,
    _byCodes = _require.byCodes,
    units = _require.units;
/**
 * Gets single reference by id. Caches the result.
 * @param {String} refId
 * @param {Object} cache A map to store the resolved refs
 * @param {FhirClient} client The client instance
 * @returns {Promise<Object>} The resolved reference
 * @private
 */


function getRef(refId, cache, client) {
  var sub = cache[refId];

  if (!sub) {
    // Note that we set cache[refId] immediately! When the promise is settled
    // it will be updated. This is to avoid a ref being fetched twice because
    // some of these requests are executed in parallel.
    cache[refId] = client.request(refId).then(function (sub) {
      cache[refId] = sub;
      return sub;
    }, function (error) {
      delete cache[refId];
      throw error;
    });
    return cache[refId];
  }

  return sub;
}
/**
 * Resolves a reference in the given resource.
 * @param {Object} obj FHIR Resource
 */


function resolveRef(obj, path, graph, cache, client) {
  var node = _getPath(obj, path);

  if (node) {
    var isArray = Array.isArray(node);
    return Promise.all(makeArray(node).map(function (item, i) {
      var ref = item.reference;

      if (ref) {
        return getRef(ref, cache, client).then(function (sub) {
          if (graph) {
            if (isArray) {
              setPath(obj, "".concat(path, ".").concat(i), sub);
            } else {
              setPath(obj, path, sub);
            }
          }
        }).catch(function () {
          /* ignore */
        });
      }
    }));
  }
}
/**
 * Given a resource and a list of ref paths - resolves them all
 * @param {Object} obj FHIR Resource
 * @param {Object} fhirOptions The fhir options of the initiating request call
 * @param {Object} cache A map to store fetched refs
 * @param {FhirClient} client The client instance
 * @private
 */


function resolveRefs(obj, fhirOptions, cache, client) {
  // 1. Sanitize paths, remove any invalid ones
  var paths = makeArray(fhirOptions.resolveReferences).filter(Boolean) // No false, 0, null, undefined or ""
  .map(function (path) {
    return String(path).trim();
  }).filter(Boolean); // No space-only strings
  // 2. Remove duplicates

  paths = paths.filter(function (p, i) {
    var index = paths.indexOf(p, i + 1);

    if (index > -1) {
      debug("[client.request] Duplicated reference path \"".concat(p, "\""));
      return false;
    }

    return true;
  }); // 3. Early exit if no valid paths are found

  if (!paths.length) {
    return Promise.resolve();
  } // 4. Group the paths by depth so that child refs are looked up
  // after their parents!


  var groups = {};
  paths.forEach(function (path) {
    var len = path.split(".").length;

    if (!groups[len]) {
      groups[len] = [];
    }

    groups[len].push(path);
  }); // 5. Execute groups sequentially! Paths within same group are
  // fetched in parallel!

  var task = Promise.resolve();
  Object.keys(groups).sort().forEach(function (len) {
    var group = groups[len];
    task = task.then(function () {
      return Promise.all(group.map(function (path) {
        return resolveRef(obj, path, fhirOptions.graph, cache, client);
      }));
    });
  });
  return task;
}

var FhirClient =
/*#__PURE__*/
function () {
  /**
   * @param {Object}  state
   * @param {String}  state.clientId
   * @param {String}  state.clientSecret
   * @param {String}  state.key
   * @param {String}  state.scope
   * @param {String}  state.serverUrl
   * @param {String}  state.tokenUri
   * @param {String}  state.username
   * @param {String}  state.password
   * @param {Object}  state.tokenResponse
   * @param {String}  state.tokenResponse.access_token
   * @param {String}  state.tokenResponse.encounter
   * @param {Number}  state.tokenResponse.expires_in
   * @param {Boolean} state.tokenResponse.need_patient_banner
   * @param {String}  state.tokenResponse.patient
   * @param {String}  state.tokenResponse.refresh_token
   * @param {String}  state.tokenResponse.scope
   * @param {String}  state.tokenResponse.smart_style_url
   * @param {String}  state.tokenResponse.token_type
   */
  function FhirClient(environment, state) {
    var _this = this;

    _classCallCheck(this, FhirClient);

    // Accept string as argument
    if (typeof state == "string") {
      state = {
        serverUrl: state
      };
    } // Valid serverUrl is required!


    if (!state.serverUrl || !state.serverUrl.match(/https?:\/\/.+/)) {
      throw new Error("A `serverUrl` option is required and must begin with 'http(s)'");
    }

    this.state = state;
    this.environment = environment;
    var client = this; // patient api ---------------------------------------------------------

    this.patient = {
      get id() {
        return client.getPatientId();
      },

      read: function read() {
        var id = _this.patient.id;
        return id ? _this.request("Patient/".concat(id)) : Promise.reject(new Error("Patient is not available"));
      }
    }; // encounter api -------------------------------------------------------

    this.encounter = {
      get id() {
        return client.getEncounterId();
      },

      read: function read() {
        var id = _this.encounter.id;
        return id ? _this.request("Encounter/".concat(id)) : Promise.reject(new Error("Encounter is not available"));
      }
    }; // user api ------------------------------------------------------------

    this.user = {
      get fhirUser() {
        return client.getFhirUser();
      },

      get id() {
        return client.getUserId();
      },

      get resourceType() {
        return client.getUserType();
      },

      read: function read() {
        var fhirUser = _this.user.fhirUser;
        return fhirUser ? _this.request(fhirUser) : Promise.reject(new Error("User is not available"));
      }
    }; // fhir.js api (attached automatically in browser)
    // ---------------------------------------------------------------------

    if (environment.fhir) {
      this.connect(environment.fhir);
    }
  }

  _createClass(FhirClient, [{
    key: "connect",
    value: function connect(fhirJs) {
      if (typeof fhirJs == "function") {
        var options = {
          baseUrl: this.state.serverUrl.replace(/\/$/, "")
        };

        var accessToken = _getPath(this, "state.tokenResponse.access_token");

        if (accessToken) {
          options.auth = {
            token: accessToken
          };
        } else {
          var _this$state = this.state,
              username = _this$state.username,
              password = _this$state.password;

          if (username && password) {
            options.auth = {
              user: username,
              pass: password
            };
          }
        }

        this.api = fhirJs(options);

        var patientId = _getPath(this, "state.tokenResponse.patient");

        if (patientId) {
          this.patient.api = fhirJs(_objectSpread({}, options, {
            patient: patientId
          }));
        }
      }
    }
    /**
     * Returns the ID of the selected patient or null. You should have requested
     * "launch/patient" scope. Otherwise this will return null.
     */

  }, {
    key: "getPatientId",
    value: function getPatientId() {
      var tokenResponse = this.state.tokenResponse;

      if (tokenResponse) {
        // We have been authorized against this server but we don't know
        // the patient. This should be a scope issue.
        if (!tokenResponse.patient) {
          if (!(this.state.scope || "").match(/\blaunch(\/patient)?\b/)) {
            debug("You are trying to get the ID of the selected patient " + "but you have not used the right scopes. Please add " + "'launch' or 'launch/patient' to the scopes you are " + "requesting and try again.");
          } else {
            // The server should have returned the patient!
            debug("The ID of the selected patient is not available. " + "Please check if your server supports that.");
          }

          return null;
        }

        return tokenResponse.patient;
      }

      if (this.state.authorizeUri) {
        debug("You are trying to get the ID of the selected patient " + "but your app is not authorized yet.");
      } else {
        debug("You are trying to get the ID of the selected patient " + "but your app needs to be authorized first. Please don't use " + "open fhir servers if you need to access launch context items " + "like the selected patient.");
      }

      return null;
    }
    /**
     * Returns the ID of the selected encounter or null. You should have
     * requested "launch/encounter" scope. Otherwise this will return null.
     * Note that not all servers support the "launch/encounter" scope so this
     * will be null if they don't.
     */

  }, {
    key: "getEncounterId",
    value: function getEncounterId() {
      var tokenResponse = this.state.tokenResponse;

      if (tokenResponse) {
        // We have been authorized against this server but we don't know
        // the encounter. This should be a scope issue.
        if (!tokenResponse.encounter) {
          if (!(this.state.scope || "").match(/\blaunch(\/encounter)?\b/)) {
            debug("You are trying to get the ID of the selected encounter " + "but you have not used the right scopes. Please add " + "'launch' or 'launch/encounter' to the scopes you " + "are requesting and try again.");
          } else {
            // The server should have returned the encounter!
            debug("The ID of the selected encounter is not available. " + "Please check if your server supports that, and that " + "the selected patient has any recorded encounters.");
          }

          return null;
        }

        return tokenResponse.encounter;
      }

      if (this.state.authorizeUri) {
        debug("You are trying to get the ID of the selected encounter " + "but your app is not authorized yet.");
      } else {
        debug("You are trying to get the ID of the selected encounter " + "but your app needs to be authorized first. Please don't use " + "open fhir servers if you need to access launch context items " + "like the selected encounter.");
      }

      return null;
    }
    /**
     * Returns the (decoded) id_token if any. You need to request "openid" and
     * "profile" scopes if you need to receive an id_token (if you need to know
     * who the logged-in user is).
     */

  }, {
    key: "getIdToken",
    value: function getIdToken() {
      var tokenResponse = this.state.tokenResponse;

      if (tokenResponse) {
        var idToken = tokenResponse.id_token;
        var scope = this.state.scope || ""; // We have been authorized against this server but we don't have
        // the id_token. This should be a scope issue.

        if (!idToken) {
          var hasOpenid = scope.match(/\bopenid\b/);
          var hasProfile = scope.match(/\bprofile\b/);
          var hasFhirUser = scope.match(/\bfhirUser\b/);

          if (!hasOpenid || !(hasFhirUser || hasProfile)) {
            debug("You are trying to get the id_token but you are not " + "using the right scopes. Please add 'openid' and " + "'fhirUser' or 'profile' to the scopes you are " + "requesting and try again.");
          } else {
            // The server should have returned the id_token!
            debug("The id_token is not available. Please check if your " + "server supports that.");
          }

          return null;
        }

        return jwtDecode(idToken);
      }

      if (this.state.authorizeUri) {
        debug("You are trying to get the id_token " + "but your app is not authorized yet.");
      } else {
        debug("You are trying to get the id_token but your app needs to be " + "authorized first. Please don't use open fhir servers if you " + "need to access launch context items like the id_token.");
      }

      return null;
    }
    /**
     * Returns the profile of the logged_in user (if any). This is a string
     * having the following shape "{user type}/{user id}". For example:
     * "Practitioner/abc" or "Patient/xyz".
     */

  }, {
    key: "getFhirUser",
    value: function getFhirUser() {
      var idToken = this.getIdToken();

      if (idToken) {
        return idToken.profile;
      }

      return null;
    }
    /**
     * Returns the user ID or null.
     */

  }, {
    key: "getUserId",
    value: function getUserId() {
      var profile = this.getFhirUser();

      if (profile) {
        return profile.split("/")[1];
      }

      return null;
    }
    /**
     * Returns the type of the logged-in user or null. The result can be
     * "Practitioner", "Patient" or "RelatedPerson".
     */

  }, {
    key: "getUserType",
    value: function getUserType() {
      var profile = this.getFhirUser();

      if (profile) {
        return profile.split("/")[0];
      }

      return null;
    }
  }, {
    key: "getAuthorizationHeader",
    value: function getAuthorizationHeader() {
      var accessToken = _getPath(this, "state.tokenResponse.access_token");

      if (accessToken) {
        return "Bearer " + accessToken;
      }

      var _this$state2 = this.state,
          username = _this$state2.username,
          password = _this$state2.password;

      if (username && password) {
        return "Basic " + btoa(username + ":" + password);
      }

      return null;
    }
    /**
     * @param {Object|String} requestOptions Can be a string URL (relative to
     *  the serviceUrl), or an object which will be passed to fetch()
     * @param {Object} fhirOptions Additional options to control the behavior
     * @param {Boolean} fhirOptions.useRefreshToken If false, the request will
     *  fail if your access token is expired. If true (default), when you receive
     *  a 401 response and you have a refresh token, the client will attempt to
     *  re-authorize and try again.
     * @param {String|String[]} fhirOptions.resolveReferences One or more
     *  references to resolve.
     * @param {Function} fhirOptions.onPage
     * @param {Boolean} fhirOptions.graph Ignored if `fhirOptions.resolveReferences`
     *  is not used. If you use `fhirOptions.resolveReferences` and set
     *  `fhirOptions.graph` to false, the result promise will be resolved with an
     *  object like `{ data: Bundle, references: [ ...Resource ] }`.
     *  If you set `fhirOptions.graph` to true, the resolved references will be
     *  mounted in place and you just get the data property: `{ data: Bundle }`.
     */

  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(requestOptions) {
        var _this2 = this;

        var fhirOptions,
            _resolvedRefs,
            url,
            authHeader,
            hasPageCallback,
            _args3 = arguments;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fhirOptions = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                _resolvedRefs = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};

                if (requestOptions) {
                  _context3.next = 4;
                  break;
                }

                throw new Error("client.request requires an url or request options as argument");

              case 4:
                if (typeof requestOptions == "string" || requestOptions instanceof URL) {
                  url = String(requestOptions);
                  requestOptions = {};
                } else {
                  url = String(requestOptions.url);
                }

                url = absolute(url, this.state.serverUrl); // authentication ------------------------------------------------------

                authHeader = this.getAuthorizationHeader();

                if (authHeader) {
                  requestOptions.headers = _objectSpread({}, requestOptions.headers, {
                    Authorization: authHeader
                  });
                } // fhirOptions.graph ---------------------------------------------------


                fhirOptions.graph = fhirOptions.graph !== false; // fhirOptions.flat ---------------------------------------------

                fhirOptions.flat = !!fhirOptions.flat; // fhirOptions.pageLimit -----------------------------------------------

                if (!fhirOptions.pageLimit && fhirOptions.pageLimit !== 0) {
                  fhirOptions.pageLimit = 1;
                }

                hasPageCallback = typeof fhirOptions.onPage == "function";
                debug("[client.request] Request url: %s, options: %O, fhirOptions: %O", url, requestOptions, fhirOptions);
                return _context3.abrupt("return", fetchJSON(url, requestOptions) // Automatic re-auth via refresh token -----------------------------
                .catch(function (error) {
                  debug("failed %o", error);

                  if (error.status == 401 && fhirOptions.useRefreshToken !== false) {
                    var hasRefreshToken = _getPath(_this2, "state.tokenResponse.refresh_token");

                    if (hasRefreshToken) {
                      return _this2.refresh().then(function () {
                        return _this2.request(_objectSpread({}, requestOptions, {
                          url: url
                        }), fhirOptions, _resolvedRefs);
                      });
                    }
                  }

                  throw error;
                }) // Resolve References ----------------------------------------------
                .then(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(data) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!(data && data.resourceType == "Bundle")) {
                              _context.next = 5;
                              break;
                            }

                            _context.next = 3;
                            return Promise.all((data.entry || []).map(function (item) {
                              return resolveRefs(item.resource, fhirOptions, _resolvedRefs, _this2);
                            }));

                          case 3:
                            _context.next = 7;
                            break;

                          case 5:
                            _context.next = 7;
                            return resolveRefs(data, fhirOptions, _resolvedRefs, _this2);

                          case 7:
                            return _context.abrupt("return", data);

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()) // Pagination ------------------------------------------------------
                .then(
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(data) {
                    var links, next, nextPage;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(data && data.resourceType == "Bundle")) {
                              _context2.next = 19;
                              break;
                            }

                            links = data.link || [];

                            if (fhirOptions.flat) {
                              data = (data.entry || []).map(function (entry) {
                                return entry.resource;
                              });
                            }

                            if (!hasPageCallback) {
                              _context2.next = 6;
                              break;
                            }

                            _context2.next = 6;
                            return fhirOptions.onPage(data, _objectSpread({}, _resolvedRefs));

                          case 6:
                            if (! --fhirOptions.pageLimit) {
                              _context2.next = 19;
                              break;
                            }

                            next = links.find(function (l) {
                              return l.relation == "next";
                            });
                            data = makeArray(data); // console.log("===>", data);

                            if (!(next && next.url)) {
                              _context2.next = 19;
                              break;
                            }

                            _context2.next = 12;
                            return _this2.request(next.url, fhirOptions, _resolvedRefs);

                          case 12:
                            nextPage = _context2.sent;

                            if (!hasPageCallback) {
                              _context2.next = 15;
                              break;
                            }

                            return _context2.abrupt("return", null);

                          case 15:
                            if (!(fhirOptions.resolveReferences && fhirOptions.resolveReferences.length)) {
                              _context2.next = 18;
                              break;
                            }

                            Object.assign(_resolvedRefs, nextPage.references);
                            return _context2.abrupt("return", data.concat(makeArray(nextPage.data || nextPage)));

                          case 18:
                            return _context2.abrupt("return", data.concat(makeArray(nextPage)));

                          case 19:
                            return _context2.abrupt("return", data);

                          case 20:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }()) // Finalize --------------------------------------------------------
                .then(function (data) {
                  if (fhirOptions.graph) {
                    _resolvedRefs = {};
                  } else if (!hasPageCallback && fhirOptions.resolveReferences.length) {
                    return {
                      data: data,
                      references: _resolvedRefs
                    };
                  }

                  return data;
                }));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function request(_x) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Use the refresh token to obtain new access token. If the refresh token is
     * expired (or this fails for any other reason) it will be deleted from the
     * state, so that we don't enter into loops trying to re-authorize.
     */

  }, {
    key: "refresh",
    value: function refresh() {
      var _this3 = this;

      debug("[refresh] Attempting to refresh using a refresh_token...");

      var refreshToken = _getPath(this, "state.tokenResponse.refresh_token");

      if (!refreshToken) {
        throw new Error("Unable to refresh. No refresh_token found in state");
      }

      var tokenUri = this.state.tokenUri;

      if (!tokenUri) {
        throw new Error("Unable to refresh. No tokenUri found in storage");
      }

      var scopes = _getPath(this, "state.tokenResponse.scope") || "";

      if (scopes.indexOf("offline_access") == -1) {
        throw new Error("Trying to refresh but no `offline_access` scope was granted");
      }

      return request(tokenUri, {
        mode: "cors",
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=refresh_token&refresh_token=".concat(encodeURIComponent(refreshToken))
      }).then(responseToJSON).then(function (data) {
        if (!data.access_token) {
          throw new Error("No access token received");
        }

        return data;
      }).then(function (data) {
        debug("[refresh] Received new access token %O", data);
        Object.assign(_this3.state.tokenResponse, data);
        return _this3.state;
      }).catch(function (error) {
        debug("[refresh] Deleting the expired or invalid refresh token");
        delete _this3.state.tokenResponse.refresh_token;
        throw error;
      }).finally(function () {
        _this3.environment.getStorage().set(_this3.state.key, _this3.state);
      });
    } // utils -------------------------------------------------------------------

  }, {
    key: "byCode",
    value: function byCode(observations, property) {
      return _byCode(observations, property);
    }
  }, {
    key: "byCodes",
    value: function byCodes(observations, property) {
      return _byCodes(observations, property);
    }
  }, {
    key: "getPath",
    value: function getPath(object, path) {
      return _getPath(object, path);
    }
  }, {
    key: "units",
    get: function get() {
      return units;
    }
  }]);

  return FhirClient;
}();

module.exports = FhirClient;

/***/ }),

/***/ "./src/HttpError.js":
/*!**************************!*\
  !*** ./src/HttpError.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HttpError =
/*#__PURE__*/
function (_Error) {
  _inherits(HttpError, _Error);

  function HttpError(message, statusCode, statusText) {
    var _this;

    _classCallCheck(this, HttpError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HttpError).call(this, message));
    _this.message = message;
    _this.name = "HttpError";
    _this.statusCode = statusCode;
    _this.status = statusCode;
    _this.statusText = statusText;
    return _this;
  }

  _createClass(HttpError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        statusCode: this.statusCode,
        status: this.status,
        statusText: this.statusText,
        message: this.message
      };
    }
  }], [{
    key: "create",
    value: function create(failure) {
      // start with generic values
      var status = 0;
      var statusText = "Error";
      var message = "Unknown error";

      if (failure) {
        if (_typeof(failure) == "object") {
          if (failure instanceof Error) {
            message = failure.message; // console.log(failure.stack);
          } else if (failure.error) {
            status = failure.error.status || 0;
            statusText = failure.error.statusText || "Error";

            if (failure.error.responseText) {
              message = failure.error.responseText;
            }
          }
        } else if (typeof failure == "string") {
          message = failure;
        }
      }

      return new HttpError(message, status, statusText);
    }
  }]);

  return HttpError;
}(_wrapNativeSuper(Error));

module.exports = HttpError;

/***/ }),

/***/ "./src/adapters/BaseAdapter.js":
/*!*************************************!*\
  !*** ./src/adapters/BaseAdapter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var smart = __webpack_require__(/*! ../smart */ "./src/smart.js");

var Client = __webpack_require__(/*! ../Client */ "./src/Client.js");
/**
 * This is the abstract base class that adapters must inherit. It just a
 * collection of environment-specific methods that subclasses have to implement.
 */


var BaseAdapter =
/*#__PURE__*/
function () {
  function BaseAdapter() {
    _classCallCheck(this, BaseAdapter);
  }

  _createClass(BaseAdapter, [{
    key: "getUrl",

    /**
     * Given the current environment, this method must return the current url
     * as URL instance
     * @returns {URL}
     */
    value: function getUrl() {}
    /**
     * Given the current environment, this method must redirect to the given
     * path
     * @param {String} to The path to redirect to
     * @returns {*}
     */

  }, {
    key: "redirect",
    value: function redirect()
    /*to*/
    {}
    /**
     * This must return a Storage object
     * @returns {Storage}
     */

  }, {
    key: "getStorage",
    value: function getStorage() {}
    /**
     * Given a relative path, compute and return the full url, assuming that it
     * is relative to the current location
     * @param {String} path The path to convert to absolute
     * @returns {String}
     */

  }, {
    key: "relative",
    value: function relative(path) {
      return new URL(path, this.getUrl().href).href;
    }
    /**
     * Creates and returns adapter-aware SMART api. Not that while the shape of
     * the returned object is well known, the arguments to this function are not.
     * Those who override this method are free to require any environment-specific
     * arguments. For example in node we will need a request, a response and
     * optionally a storage or storage factory function.
     */

  }, {
    key: "getSmartApi",
    value: function getSmartApi() {
      var _this = this;

      return {
        ready: function ready() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return smart.ready.apply(smart, [_this].concat(args));
        },
        authorize: function authorize() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return smart.authorize.apply(smart, [_this].concat(args));
        },
        init: function init() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return smart.init.apply(smart, [_this].concat(args));
        },
        client: function client() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return _construct(Client, [_this].concat(args));
        }
      };
    }
  }]);

  return BaseAdapter;
}();

module.exports = BaseAdapter;

/***/ }),

/***/ "./src/adapters/BrowserAdapter.js":
/*!****************************************!*\
  !*** ./src/adapters/BrowserAdapter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* global fhir */
__webpack_require__(/*! ../polyfills */ "./src/polyfills.js");

var BrowserStorage = __webpack_require__(/*! ../storage/BrowserStorage */ "./src/storage/BrowserStorage.js");

var BaseAdapter = __webpack_require__(/*! ./BaseAdapter */ "./src/adapters/BaseAdapter.js");
/**
 * Browser Adapter
 */


var BrowserAdapter =
/*#__PURE__*/
function (_BaseAdapter) {
  _inherits(BrowserAdapter, _BaseAdapter);

  function BrowserAdapter() {
    _classCallCheck(this, BrowserAdapter);

    return _possibleConstructorReturn(this, _getPrototypeOf(BrowserAdapter).apply(this, arguments));
  }

  _createClass(BrowserAdapter, [{
    key: "getUrl",

    /**
     * Given the current environment, this method must return the current url
     * as URL instance
     * @returns {URL}
     */
    value: function getUrl() {
      if (!this._url) {
        this._url = new URL(location + "");
      }

      return this._url;
    }
    /**
     * Given the current environment, this method must redirect to the given
     * path
     * @param {String} to The path to redirect to
     * @returns {void}
     */

  }, {
    key: "redirect",
    value: function redirect(to) {
      location.href = to;
    }
    /**
     * Returns a BrowserStorage object which is just a wrapper around
     * sessionStorage
     * @returns {BrowserStorage}
     */

  }, {
    key: "getStorage",
    value: function getStorage() {
      if (!this._storage) {
        this._storage = new BrowserStorage();
      }

      return this._storage;
    }
  }, {
    key: "fhir",

    /**
     * In browsers we need to be able to (dynamically) check if fhir.js is
     * included in the page. If it is, it should have created a "fhir" variable
     * in the global scope.
     */
    get: function get() {
      return typeof fhir === "function" ? fhir : null;
    }
  }], [{
    key: "smart",
    value: function smart() {
      return new BrowserAdapter().getSmartApi();
    }
  }]);

  return BrowserAdapter;
}(BaseAdapter);

module.exports = BrowserAdapter.smart;
module.exports.Adapter = BrowserAdapter;

/***/ }),

/***/ "./src/adapters/NodeAdapter.js":
/*!*************************************!*\
  !*** ./src/adapters/NodeAdapter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var ServerStorage = __webpack_require__(/*! ../storage/ServerStorage */ "./src/storage/ServerStorage.js");

var BaseAdapter = __webpack_require__(/*! ./BaseAdapter */ "./src/adapters/BaseAdapter.js");
/**
 * Node Adapter - works with native NodeJS and with Express
 */


var NodeAdapter =
/*#__PURE__*/
function (_BaseAdapter) {
  _inherits(NodeAdapter, _BaseAdapter);

  /**
   * @param {Object} options
   * @param {Object} options.request required
   * @param {Object} options.response required
   * @param {Object} options.storage optional
   */
  function NodeAdapter(options) {
    var _this;

    _classCallCheck(this, NodeAdapter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeAdapter).call(this));
    _this.options = options;
    return _this;
  }
  /**
   * Given the current environment, this method must return the current url
   * as URL instance. In Node we might be behind a proxy!
   * @returns {URL}
   */


  _createClass(NodeAdapter, [{
    key: "getUrl",
    value: function getUrl() {
      var req = this.options.request;
      var host = req.headers.host;

      if (req.headers["x-forwarded-host"]) {
        host = req.headers["x-forwarded-host"];

        if (req.headers["x-forwarded-port"]) {
          host += ":" + req.headers["x-forwarded-port"];
        }
      }

      var protocol = req.headers["x-forwarded-proto"] || req.protocol || "http";
      var orig =
      /*req.originalUrl || */
      req.headers["x-original-uri"] || req.url;
      return new URL(orig, protocol + "://" + host);
    }
    /**
     * Given the current environment, this method must redirect to the given
     * path
     * @param {String} location The path to redirect to
     * @returns {void}
     */

  }, {
    key: "redirect",
    value: function redirect(location) {
      this.options.response.writeHead(302, {
        location: location
      });
      this.options.response.end();
    }
    /**
     * Returns a ServerStorage instance
     * @returns {ServerStorage}
     */

  }, {
    key: "getStorage",
    value: function getStorage() {
      if (!this._storage) {
        if (this.options.storage) {
          if (typeof this.options.storage == "function") {
            this._storage = this.options.storage(this.options);
          } else {
            this._storage = this.options.storage;
          }
        } else {
          this._storage = new ServerStorage(this.options.request);
        }
      }

      return this._storage;
    }
    /**
     * This is the static entry point and MUST be provided
     * @param {Object} req The http request
     * @param {Object} res The http response
     * @param {Object|Function} storage Custom storage instance or a storage
     *  factory function
     */

  }], [{
    key: "smart",
    value: function smart(req, res, storage) {
      return new NodeAdapter({
        request: req,
        response: res,
        storage: storage
      }).getSmartApi();
    }
  }]);

  return NodeAdapter;
}(BaseAdapter);

module.exports = NodeAdapter.smart;
module.exports.Adapter = NodeAdapter;

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// In Browsers we create an adapter, get the SMART api from it and build the
// global FHIR object
if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object") {
  var smart = __webpack_require__(/*! ./adapters/BrowserAdapter */ "./src/adapters/BrowserAdapter.js");

  var _smart = smart(),
      ready = _smart.ready,
      authorize = _smart.authorize,
      init = _smart.init,
      client = _smart.client; // $lab:coverage:off$


  var FHIR = {
    client: client,
    oauth2: {
      settings: {
        // Replaces the browser's current URL
        // using window.history.replaceState API or by reloading.
        replaceBrowserHistory: true,
        // When set to true, this variable will fully utilize
        // HTML5 sessionStorage API.
        // This variable can be overridden to false by setting
        // FHIR.oauth2.settings.fullSessionStorageSupport = false.
        // When set to false, the sessionStorage will be keyed
        // by a state variable. This is to allow the embedded IE browser
        // instances instantiated on a single thread to continue to
        // function without having sessionStorage data shared
        // across the embedded IE instances.
        fullSessionStorageSupport: true
      },
      ready: ready,
      authorize: authorize,
      init: init
    }
  }; // $lab:coverage:on$

  window.FHIR = FHIR;
  module.exports = FHIR;
} // In node we return the node adapter by default, meaning that one could do:
// require("fhirclient").smart({ request, response }).authorize(options)
// Other adapters can be included directly (E.g.: require("fhirclient/src/adapters/hapi"))
else {
    module.exports = __webpack_require__(/*! ./adapters/NodeAdapter */ "./src/adapters/NodeAdapter.js");
  }

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * This file contains some shared functions. The are used by other modules, but
 * are defined here so that tests can import this library and test them.
 */
var HttpError = __webpack_require__(/*! ./HttpError */ "./src/HttpError.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("FHIRClient");

function isBrowser() {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";
}
/**
 * Used in fetch Promise chains to reject if the "ok" property is not true
 */


function checkResponse(_x) {
  return _checkResponse.apply(this, arguments);
}
/**
 * Used in fetch Promise chains to return the JSON version of the response
 */


function _checkResponse() {
  _checkResponse = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(resp) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (resp.ok) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return humanizeError(resp);

          case 3:
            throw _context.sent;

          case 4:
            return _context.abrupt("return", resp);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkResponse.apply(this, arguments);
}

function responseToJSON(resp) {
  // return resp.json();
  return resp.text().then(function (text) {
    return text.length ? JSON.parse(text) : "";
  });
}

function fetchJSON(url, options) {
  return request(url, _objectSpread({
    mode: "cors"
  }, options)).then(responseToJSON);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function humanizeError(_x2) {
  return _humanizeError.apply(this, arguments);
}

function _humanizeError() {
  _humanizeError = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(resp) {
    var msg, json, text;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            msg = "".concat(resp.status, " ").concat(resp.statusText, "\nURL: ").concat(resp.url);
            _context2.prev = 1;
            _context2.next = 4;
            return resp.json();

          case 4:
            json = _context2.sent;

            if (json.error) {
              msg += "\n" + json.error;

              if (json.error_description) {
                msg += ": " + json.error_description;
              }
            } else {
              msg += "\n\n" + JSON.stringify(json, null, 4);
            }

            _context2.next = 19;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            _context2.prev = 10;
            _context2.next = 13;
            return resp.text();

          case 13:
            text = _context2.sent;

            if (text) {
              msg += "\n\n" + text;
            }

            _context2.next = 19;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t1 = _context2["catch"](10);

          case 19:
            throw new HttpError(msg, resp.status, resp.statusText);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8], [10, 17]]);
  }));
  return _humanizeError.apply(this, arguments);
}

function stripTrailingSlash(str) {
  return String(str || "").replace(/\/+$/, "");
}
/**
 * Walks through an object (or array) and returns the value found at the
 * provided path. This function is very simple so it intentionally does not
 * support any argument polymorphism, meaning that the path can only be a
 * dot-separated string. If the path is invalid returns undefined.
 * @param {Object} obj The object (or Array) to walk through
 * @param {String} path The path (eg. "a.b.4.c")
 * @returns {*} Whatever is found in the path or undefined
 */


function getPath(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  path = path.trim();

  if (!path) {
    return obj;
  }

  return path.split(".").reduce(function (out, key) {
    return out ? out[key] : undefined;
  }, obj);
}
/**
 * Like getPath, but if the node is found, its value is set to @value
 * @param {Object} obj The object (or Array) to walk through
 * @param {String} path The path (eg. "a.b.4.c")
 * @param {*} value The value to set
 * @returns {Object} The modified object
 */


function setPath(obj, path, value) {
  path.trim().split(".").reduce(function (out, key, idx, arr) {
    if (out && idx === arr.length - 1) {
      out[key] = value;
    } else {
      return out ? out[key] : undefined;
    }
  }, obj);
  return obj;
}

function makeArray(arg) {
  if (Array.isArray(arg)) {
    return arg;
  }

  return [arg];
}

function absolute(path, baseUrl) {
  if (path.match(/^http/)) return path;
  if (path.match(/^urn/)) return path;
  return baseUrl.replace(/\/+$/, "") + "/" + path.replace(/^\/+/, "");
}
/**
 * Generates random strings. By default this returns random 8 characters long
 * alphanumeric strings.
 * @param {Number} strLength The length of the output string. Defaults to 8.
 * @param {String} charSet A string containing all the possible characters.
 *     Defaults to all the upper and lower-case letters plus digits.
 */


function randomString() {
  var strLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var charSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var result = [];
  charSet = charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";
  var len = charSet.length;

  while (strLength--) {
    result.push(charSet.charAt(Math.floor(Math.random() * len)));
  }

  return result.join("");
}

function atob(str) {
  if (isBrowser()) {
    return window.atob(str);
  } // The "global." makes Webpack understand that it doesn't have to include
  // the Buffer code in the bundle


  return global.Buffer.from(str, "base64").toString("ascii");
}

function btoa(str) {
  if (isBrowser()) {
    return window.btoa(str);
  } // The "global." makes Webpack understand that it doesn't have to include
  // the Buffer code in the bundle


  return global.Buffer.from(str).toString("base64");
}

function jwtDecode(token) {
  var payload = token.split(".")[1];
  return JSON.parse(atob(payload));
}
/**
 * Groups the observations by code. Returns a map that will look like:
 * {
 *   "55284-4": [ observation1, observation2 ],
 *   "6082-2" : [ observation3 ]
 * }
 * @param {Object|Object[]} observations Array of observations
 * @param {String} property The name of a CodeableConcept property to group by
 * @returns {Object}
 */


function byCode(observations, property) {
  var ret = {};

  function handleCodeableConcept(concept, observation) {
    if (concept && Array.isArray(concept.coding)) {
      concept.coding.forEach(function (_ref) {
        var code = _ref.code;
        ret[code] = ret[code] || [];
        ret[code].push(observation);
      });
    }
  }

  makeArray(observations).forEach(function (o) {
    if (o.resourceType === "Observation" && o[property]) {
      if (Array.isArray(o[property])) {
        o[property].forEach(function (concept) {
          return handleCodeableConcept(concept, o);
        });
      } else {
        handleCodeableConcept(o[property], o);
      }
    }
  });
  return ret;
}
/**
 * First groups the observations by code using `byCode`. Then returns a function
 * that accepts codes as arguments and will return a flat array of observations
 * having that codes
 * @param {Object|Object[]} observations Array of observations
 * @param {String} property The name of a CodeableConcept property to group by
 * @returns {Function}
 */


function byCodes(observations, property) {
  var bank = byCode(observations, property);
  return function () {
    for (var _len = arguments.length, codes = new Array(_len), _key = 0; _key < _len; _key++) {
      codes[_key] = arguments[_key];
    }

    return codes.filter(function (code) {
      return code in bank;
    }).reduce(function (prev, code) {
      return [].concat(_toConsumableArray(prev), _toConsumableArray(bank[code]));
    }, []);
  };
}

function ensureNumerical(_ref2) {
  var value = _ref2.value,
      code = _ref2.code;

  if (typeof value !== "number") {
    throw new Error("Found a non-numerical unit: " + value + " " + code);
  }
}

var units = {
  cm: function cm(_ref3) {
    var code = _ref3.code,
        value = _ref3.value;
    ensureNumerical({
      code: code,
      value: value
    });
    if (code == "cm") return value;
    if (code == "m") return value * 100;
    if (code == "in") return value * 2.54;
    if (code == "[in_us]") return value * 2.54;
    if (code == "[in_i]") return value * 2.54;
    if (code == "ft") return value * 30.48;
    if (code == "[ft_us]") return value * 30.48;
    throw new Error("Unrecognized length unit: " + code);
  },
  kg: function kg(_ref4) {
    var code = _ref4.code,
        value = _ref4.value;
    ensureNumerical({
      code: code,
      value: value
    });
    if (code == "kg") return value;
    if (code == "g") return value / 1000;
    if (code.match(/lb/)) return value / 2.20462;
    if (code.match(/oz/)) return value / 35.274;
    throw new Error("Unrecognized weight unit: " + code);
  },
  any: function any(pq) {
    ensureNumerical(pq);
    return pq.value;
  }
};
module.exports = {
  stripTrailingSlash: stripTrailingSlash,
  absolute: absolute,
  getPath: getPath,
  setPath: setPath,
  makeArray: makeArray,
  randomString: randomString,
  isBrowser: isBrowser,
  debug: debug,
  checkResponse: checkResponse,
  responseToJSON: responseToJSON,
  fetchJSON: fetchJSON,
  humanizeError: humanizeError,
  jwtDecode: jwtDecode,
  request: request,
  atob: atob,
  btoa: btoa,
  byCode: byCode,
  byCodes: byCodes,
  units: units
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/polyfills.js":
/*!**************************!*\
  !*** ./src/polyfills.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../node_modules/core-js/stable/promise */ "./node_modules/core-js/stable/promise/index.js");

__webpack_require__(/*! ../node_modules/core-js/stable/object/assign */ "./node_modules/core-js/stable/object/assign.js");

__webpack_require__(/*! ../node_modules/core-js/stable/url */ "./node_modules/core-js/stable/url/index.js");

__webpack_require__(/*! ../node_modules/core-js/stable/url-search-params */ "./node_modules/core-js/stable/url-search-params/index.js");

__webpack_require__(/*! ../node_modules/core-js/stable/array/find */ "./node_modules/core-js/stable/array/find.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (typeof window.fetch != "function") {
  window.fetch = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
}

/***/ }),

/***/ "./src/smart.js":
/*!**********************!*\
  !*** ./src/smart.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Client = __webpack_require__(/*! ./Client */ "./src/Client.js");

var _require = __webpack_require__(/*! ./lib */ "./src/lib.js"),
    isBrowser = _require.isBrowser,
    debug = _require.debug,
    fetchJSON = _require.fetchJSON,
    getPath = _require.getPath,
    randomString = _require.randomString,
    btoa = _require.btoa;

var SMART_KEY = "SMART_KEY";

function fetchConformanceStatement() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var url = String(baseUrl).replace(/\/*$/, "/") + "metadata";
  return fetchJSON(url).catch(function (ex) {
    throw new Error("Failed to fetch the conformance statement from \"".concat(url, "\". ").concat(ex));
  });
}

function fetchWellKnownJson() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var url = String(baseUrl).replace(/\/*$/, "/") + ".well-known/smart-configuration";
  return fetchJSON(url).catch(function (ex) {
    throw new Error("Failed to fetch the well-known json \"".concat(url, "\". ").concat(ex.message));
  });
}
/**
 * Given a fhir server returns an object with it's Oauth security endpoints that
 * we are interested in
 * @param baseUrl Fhir server base URL
 */


function getSecurityExtensions() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  return fetchWellKnownJson(baseUrl).then(function (meta) {
    if (!meta.authorization_endpoint || !meta.token_endpoint) {
      throw new Error("Invalid wellKnownJson");
    }

    return {
      registrationUri: meta.registration_endpoint || "",
      authorizeUri: meta.authorization_endpoint,
      tokenUri: meta.token_endpoint
    };
  }).catch(function () {
    return fetchConformanceStatement(baseUrl).then(function (metadata) {
      var nsUri = "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris";
      var extensions = (getPath(metadata || {}, "rest.0.security.extension") || []).filter(function (e) {
        return e.url === nsUri;
      }).map(function (o) {
        return o.extension;
      })[0];
      var out = {
        registrationUri: "",
        authorizeUri: "",
        tokenUri: ""
      };

      if (extensions) {
        extensions.forEach(function (ext) {
          if (ext.url === "register") {
            out.registrationUri = ext.valueUri;
          }

          if (ext.url === "authorize") {
            out.authorizeUri = ext.valueUri;
          }

          if (ext.url === "token") {
            out.tokenUri = ext.valueUri;
          }
        });
      }

      return out;
    });
  });
}
/**
 * @param {Object} params
 * @param {String} params.iss This should come as url parameter but can also be
 *  passed as an option for testing
 * @param {String} params.launch This should come as url parameter but can also
 *  be passed as an option for testing
 * @param {String} params.fhirServiceUrl Can be passed as an option or as an URL param.
 *  If present (and if `iss` is not present), it will make the client bypass the
 *  authorization
 * @param {String} params.redirectUri (or redirect_uri) redirect_uri Defaults to the current directory (it's index file)
 * @param {String} params.clientId // or "client_id"
 * @param {String} params.scope
 * @param {String} params.patientId
 * @param {String} params.encounterId
 * @param {Object} params.fakeTokenResponse
 * @param {Boolean} _noRedirect If true, resolve with the redirect url without
 *  trying to redirect to it
 */


function authorize(_x) {
  return _authorize.apply(this, arguments);
}
/**
 * The completeAuth function should only be called on the page that represents
 * the redirectUri. We typically land there after a redirect from the
 * authorization server..
 */


function _authorize() {
  _authorize = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(env) {
    var params,
        _noRedirect,
        iss,
        launch,
        fhirServiceUrl,
        redirect_uri,
        redirectUri,
        _params$scope,
        scope,
        clientSecret,
        fakeTokenResponse,
        patientId,
        encounterId,
        client_id,
        clientId,
        url,
        serverUrl,
        stateKey,
        state,
        redirectUrl,
        extensions,
        redirectParams,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _noRedirect = _args.length > 2 ? _args[2] : undefined;
            // Obtain input
            iss = params.iss, launch = params.launch, fhirServiceUrl = params.fhirServiceUrl, redirect_uri = params.redirect_uri, redirectUri = params.redirectUri, _params$scope = params.scope, scope = _params$scope === void 0 ? "" : _params$scope, clientSecret = params.clientSecret, fakeTokenResponse = params.fakeTokenResponse, patientId = params.patientId, encounterId = params.encounterId, client_id = params.client_id, clientId = params.clientId;
            url = env.getUrl(); // For these three an url param takes precedence over inline option

            iss = url.searchParams.get("iss") || iss;
            fhirServiceUrl = url.searchParams.get("fhirServiceUrl") || fhirServiceUrl;
            launch = url.searchParams.get("launch") || launch;

            if (!clientId) {
              clientId = client_id;
            }

            if (!redirectUri) {
              redirectUri = redirect_uri;
            }

            if (!redirectUri) {
              redirectUri = env.relative(".");
            } else {
              redirectUri = env.relative(redirectUri);
            }

            serverUrl = String(iss || fhirServiceUrl || ""); // Validate input

            if (serverUrl) {
              _context.next = 13;
              break;
            }

            throw new Error("No server url found. It must be specified as `iss` or as " + "`fhirServiceUrl` parameter");

          case 13:
            if (iss) {
              debug("[authorize] Making %s launch...", launch ? "EHR" : "standalone");
            } // append launch scope if needed


            if (launch && !scope.match(/launch/)) {
              scope += " launch";
            } // prevent inheritance of tokenResponse from parent window


            _context.next = 17;
            return env.getStorage().unset(SMART_KEY);

          case 17:
            // create initial state
            stateKey = randomString(16);
            state = {
              clientId: clientId,
              scope: scope,
              redirectUri: redirectUri,
              serverUrl: serverUrl,
              clientSecret: clientSecret,
              tokenResponse: {},
              key: stateKey
            }; // fakeTokenResponse to override stuff (useful in development)

            if (fakeTokenResponse) {
              Object.assign(state.tokenResponse, fakeTokenResponse);
            } // Fixed patientId (useful in development)


            if (patientId) {
              Object.assign(state.tokenResponse, {
                patient: patientId
              });
            } // Fixed encounterId (useful in development)


            if (encounterId) {
              Object.assign(state.tokenResponse, {
                encounter: encounterId
              });
            }

            redirectUrl = redirectUri + "?state=" + encodeURIComponent(stateKey); // bypass oauth if fhirServiceUrl is used (but iss takes precedence)

            if (!(fhirServiceUrl && !iss)) {
              _context.next = 32;
              break;
            }

            debug("[authorize] Making fake launch..."); // Storage.set(stateKey, state);

            _context.next = 27;
            return env.getStorage().set(stateKey, state);

          case 27:
            if (!_noRedirect) {
              _context.next = 29;
              break;
            }

            return _context.abrupt("return", redirectUrl);

          case 29:
            _context.next = 31;
            return env.redirect(redirectUrl);

          case 31:
            return _context.abrupt("return", _context.sent);

          case 32:
            _context.next = 34;
            return getSecurityExtensions(serverUrl);

          case 34:
            extensions = _context.sent;
            Object.assign(state, extensions);
            _context.next = 38;
            return env.getStorage().set(stateKey, state);

          case 38:
            if (state.authorizeUri) {
              _context.next = 44;
              break;
            }

            if (!_noRedirect) {
              _context.next = 41;
              break;
            }

            return _context.abrupt("return", redirectUrl);

          case 41:
            _context.next = 43;
            return env.redirect(redirectUrl);

          case 43:
            return _context.abrupt("return", _context.sent);

          case 44:
            // build the redirect uri
            redirectParams = ["response_type=code", "client_id=" + encodeURIComponent(clientId), "scope=" + encodeURIComponent(scope), "redirect_uri=" + encodeURIComponent(redirectUri), "aud=" + encodeURIComponent(serverUrl), "state=" + encodeURIComponent(stateKey)]; // also pass this in case of EHR launch

            if (launch) {
              redirectParams.push("launch=" + encodeURIComponent(launch));
            }

            redirectUrl = state.authorizeUri + "?" + redirectParams.join("&");

            if (!_noRedirect) {
              _context.next = 49;
              break;
            }

            return _context.abrupt("return", redirectUrl);

          case 49:
            _context.next = 51;
            return env.redirect(redirectUrl);

          case 51:
            return _context.abrupt("return", _context.sent);

          case 52:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _authorize.apply(this, arguments);
}

function completeAuth(_x2) {
  return _completeAuth.apply(this, arguments);
}
/**
 * Builds the token request options. Does not make the request, just
 * creates it's configuration and returns it in a Promise.
 */


function _completeAuth() {
  _completeAuth = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(env) {
    var url, Storage, key, code, authError, authErrorDescription, msg, state, fullSessionStorageSupport, settings, hasState, requestOptions, tokenResponse, client;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = env.getUrl();
            Storage = env.getStorage();
            key = url.searchParams.get("state");
            code = url.searchParams.get("code");
            authError = url.searchParams.get("error");
            authErrorDescription = url.searchParams.get("error_description");

            if (key) {
              _context2.next = 10;
              break;
            }

            _context2.next = 9;
            return Storage.get(SMART_KEY);

          case 9:
            key = _context2.sent;

          case 10:
            if (!(authError || authErrorDescription)) {
              _context2.next = 13;
              break;
            }

            msg = [authError, authErrorDescription].filter(Boolean).join(": ");
            throw new Error(msg);

          case 13:
            debug("[completeAuth] key: %s, code: %O", key, code); // key might be coming from the page url so it might be empty or missing

            if (key) {
              _context2.next = 16;
              break;
            }

            throw new Error("No 'state' parameter found.");

          case 16:
            _context2.next = 18;
            return Storage.get(key);

          case 18:
            state = _context2.sent;
            fullSessionStorageSupport = isBrowser() ? getPath(window, "FHIR.oauth2.settings.fullSessionStorageSupport") : true; // Do we have to remove the `code` and `state` params from the URL?

            if (!isBrowser()) {
              _context2.next = 32;
              break;
            }

            settings = window.FHIR.oauth2.settings;
            hasState = url.searchParams.has("state");

            if (!(settings.replaceBrowserHistory && (code || hasState))) {
              _context2.next = 32;
              break;
            }

            // `code` is the flag that tell us to request an access token.
            // We have to remove it, otherwise the page will authorize on
            // every load!
            if (code) {
              debug("[completeAuth] Removing code parameter from the url...");
              url.searchParams.delete("code");
            } // If we have `fullSessionStorageSupport` it means we no longer
            // need the `state` key. It will be stored to a well know
            // location - sessionStorage[SMART_KEY]. However, no
            // fullSessionStorageSupport means that this "well know location"
            // might be shared between windows and tabs. In this case we
            // MUST keep the `state` url parameter.


            if (hasState && fullSessionStorageSupport) {
              debug("[completeAuth] Removing state parameter from the url...");
              url.searchParams.delete("state");
            } // If the browser does not support the replaceState method for the
            // History Web API, the "code" parameter cannot be removed. As a
            // consequence, the page will (re)authorize on every load. The
            // workaround is to reload the page to new location without those
            // parameters. If that is not acceptable replaceBrowserHistory
            // should be set to false.


            if (!window.history.replaceState) {
              _context2.next = 30;
              break;
            }

            window.history.replaceState({}, "", url.href);
            _context2.next = 32;
            break;

          case 30:
            _context2.next = 32;
            return env.redirect(url.href);

          case 32:
            if (state) {
              _context2.next = 34;
              break;
            }

            throw new Error("No state found! Please (re)launch the app.");

          case 34:
            if (!code) {
              _context2.next = 55;
              break;
            }

            debug("[completeAuth] Preparing to exchange the code for access token...");
            _context2.next = 38;
            return buildTokenRequest(code, state);

          case 38:
            requestOptions = _context2.sent;
            debug("[completeAuth] Token request options: %O", requestOptions); // The EHR authorization server SHALL return a JSON structure that
            // includes an access token or a message indicating that the
            // authorization request has been denied.

            _context2.next = 42;
            return fetchJSON(state.tokenUri, requestOptions);

          case 42:
            tokenResponse = _context2.sent;
            debug("[completeAuth] Token response: %O", tokenResponse);

            if (tokenResponse.access_token) {
              _context2.next = 46;
              break;
            }

            throw new Error("Failed to obtain access token.");

          case 46:
            // save the tokenResponse so that we don't have to re-authorize on
            // every page reload
            state = _objectSpread({}, state, {
              tokenResponse: tokenResponse
            });
            _context2.next = 49;
            return Storage.set(key, state);

          case 49:
            if (!fullSessionStorageSupport) {
              _context2.next = 52;
              break;
            }

            _context2.next = 52;
            return Storage.set(SMART_KEY, key);

          case 52:
            debug("[completeAuth] Authorization successful!");
            _context2.next = 56;
            break;

          case 55:
            debug("[completeAuth] %s", state.tokenResponse.access_token ? "Already authorized" : "No authorization needed");

          case 56:
            client = new Client(env, state);
            debug("[completeAuth] Created client instance: %O", client);
            return _context2.abrupt("return", client);

          case 59:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _completeAuth.apply(this, arguments);
}

function buildTokenRequest(code, state) {
  var redirectUri = state.redirectUri,
      clientSecret = state.clientSecret,
      tokenUri = state.tokenUri,
      clientId = state.clientId;

  if (!redirectUri) {
    throw new Error("Missing state.redirectUri");
  }

  if (!tokenUri) {
    throw new Error("Missing state.tokenUri");
  }

  if (!clientId) {
    throw new Error("Missing state.clientId");
  }

  var requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: "code=".concat(code, "&grant_type=authorization_code&redirect_uri=").concat(encodeURIComponent(redirectUri))
  }; // For public apps, authentication is not possible (and thus not required),
  // since a client with no secret cannot prove its identity when it issues a
  // call. (The end-to-end system can still be secure because the client comes
  // from a known, https protected endpoint specified and enforced by the
  // redirect uri.) For confidential apps, an Authorization header using HTTP
  // Basic authentication is required, where the username is the app’s
  // client_id and the password is the app’s client_secret (see example).

  if (clientSecret) {
    requestOptions.headers.Authorization = "Basic " + btoa(clientId + ":" + clientSecret);
    debug("[buildTokenRequest] Using state.clientSecret to construct the " + "authorization header: %s", requestOptions.headers.Authorization);
  } else {
    debug("[buildTokenRequest] No clientSecret found in state. Adding " + "the client_id to the POST body");
    requestOptions.body += "&client_id=".concat(encodeURIComponent(clientId));
  }

  return requestOptions;
}

function ready(_x3, _x4, _x5) {
  return _ready.apply(this, arguments);
}

function _ready() {
  _ready = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(env, onSuccess, onError) {
    var task;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            task = completeAuth(env);

            if (onSuccess) {
              task = task.then(onSuccess);
            }

            if (onError) {
              task = task.catch(onError);
            }

            return _context3.abrupt("return", task);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _ready.apply(this, arguments);
}

function init(_x6, _x7) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(env, options) {
    var url, code, state, storage, key, cached;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = env.getUrl();
            code = url.searchParams.get("code");
            state = url.searchParams.get("state"); // if `code` and `state` params are present we need to complete the auth flow

            if (!(code && state)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", completeAuth(env));

          case 5:
            // Check for existing client state. If state is found, it means a client
            // instance have already been created in this session and we should try to
            // "revive" it.
            storage = env.getStorage();
            _context4.t0 = state;

            if (_context4.t0) {
              _context4.next = 11;
              break;
            }

            _context4.next = 10;
            return storage.get(SMART_KEY);

          case 10:
            _context4.t0 = _context4.sent;

          case 11:
            key = _context4.t0;
            _context4.next = 14;
            return storage.get(key);

          case 14:
            cached = _context4.sent;

            if (!cached) {
              _context4.next = 17;
              break;
            }

            return _context4.abrupt("return", Promise.resolve(new Client(env, cached)));

          case 17:
            return _context4.abrupt("return", authorize(env, options).then(function () {
              // `init` promises a Client but that cannot happen in this case. The
              // browser will be redirected (unload the page and be redirected back
              // to it later and the same init function will be called again). On
              // success, authorize will resolve with the redirect url but we don't
              // want to return that from this promise chain because it is not a
              // Client instance. At the same time, if authorize fails, we do want to
              // pass the error to those waiting for a client instance.
              return new Promise(function () {
                /* leave it pending!!! */
              });
            }));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _init.apply(this, arguments);
}

module.exports = {
  fetchConformanceStatement: fetchConformanceStatement,
  fetchWellKnownJson: fetchWellKnownJson,
  getSecurityExtensions: getSecurityExtensions,
  buildTokenRequest: buildTokenRequest,
  authorize: authorize,
  completeAuth: completeAuth,
  ready: ready,
  init: init,
  KEY: SMART_KEY
};

/***/ }),

/***/ "./src/storage/BrowserStorage.js":
/*!***************************************!*\
  !*** ./src/storage/BrowserStorage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Storage =
/*#__PURE__*/
function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(key) {
        var value;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                value = sessionStorage[key];

                if (!value) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", JSON.parse(value));

              case 3:
                return _context.abrupt("return", null);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(key, value) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sessionStorage[key] = JSON.stringify(value);
                return _context2.abrupt("return", value);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function set(_x2, _x3) {
        return _set.apply(this, arguments);
      }

      return set;
    }()
  }, {
    key: "unset",
    value: function () {
      var _unset = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(key) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(key in sessionStorage)) {
                  _context3.next = 3;
                  break;
                }

                delete sessionStorage[key];
                return _context3.abrupt("return", true);

              case 3:
                return _context3.abrupt("return", false);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function unset(_x4) {
        return _unset.apply(this, arguments);
      }

      return unset;
    }()
  }]);

  return Storage;
}();

module.exports = Storage;

/***/ }),

/***/ "./src/storage/ServerStorage.js":
/*!**************************************!*\
  !*** ./src/storage/ServerStorage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ServerStorage =
/*#__PURE__*/
function () {
  function ServerStorage(request) {
    _classCallCheck(this, ServerStorage);

    this.request = request;
  }

  _createClass(ServerStorage, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(key) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.request.session[key]);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(key, value) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.request.session[key] = value;
                return _context2.abrupt("return", value);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function set(_x2, _x3) {
        return _set.apply(this, arguments);
      }

      return set;
    }()
  }, {
    key: "unset",
    value: function () {
      var _unset = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(key) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.request.session.hasOwnProperty(key)) {
                  _context3.next = 3;
                  break;
                }

                delete this.request.session[key];
                return _context3.abrupt("return", true);

              case 3:
                return _context3.abrupt("return", false);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function unset(_x4) {
        return _unset.apply(this, arguments);
      }

      return unset;
    }()
  }]);

  return ServerStorage;
}();

module.exports = ServerStorage;

/***/ })

/******/ });