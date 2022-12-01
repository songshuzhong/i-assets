(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["Verify"] = factory(require("vue"));
	else
		root["Verify"] = factory(root["vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/Verify.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/toPropertyKey.js\");\nfunction _defineProperty(obj, key, value) {\n  key = toPropertyKey(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\nmodule.exports = _defineProperty, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nfunction _toPrimitive(input, hint) {\n  if (_typeof(input) !== \"object\" || input === null) return input;\n  var prim = input[Symbol.toPrimitive];\n  if (prim !== undefined) {\n    var res = prim.call(input, hint || \"default\");\n    if (_typeof(res) !== \"object\") return res;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (hint === \"string\" ? String : Number)(input);\n}\nmodule.exports = _toPrimitive, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/@babel/runtime/helpers/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"];\nvar toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/toPrimitive.js\");\nfunction _toPropertyKey(arg) {\n  var key = toPrimitive(arg, \"string\");\n  return _typeof(key) === \"symbol\" ? key : String(key);\n}\nmodule.exports = _toPropertyKey, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/@babel/runtime/helpers/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/components/Verify.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./src/components/Verify.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"defineComponent\"])({\n  name: 'Verify',\n  props: {\n    width: {\n      type: String,\n      required: false\n    },\n    height: {\n      type: String,\n      required: false\n    }\n  },\n  setup: function setup(props, con) {\n    var verify = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"ref\"])(null);\n    var state = Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"reactive\"])({\n      pool: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890\",\n      // 随机字符串\n      width: 120,\n      //展示区域宽度\n      height: 40,\n      //展示区域高度\n      imgCode: \"\" //保存页面的内容（用来判断输入验证是否满足改code）\n    });\n\n    var randomNum = function randomNum(min, max) {\n      return parseInt(Math.random() * (max - min + 1) + min);\n    };\n    var randomColor = function randomColor(min, max) {\n      var r = randomNum(min, max);\n      var g = randomNum(min, max);\n      var b = randomNum(min, max);\n      return \"rgb(\".concat(r, \",\").concat(g, \",\").concat(b, \")\");\n    };\n    var handleDraw = function handleDraw() {\n      draw();\n      state.imgCode = draw();\n    };\n    var draw = function draw() {\n      var ctx = verify.value.getContext(\"2d\");\n      ctx.fillStyle = randomColor(180, 230);\n      ctx.fillRect(0, 0, state.width, state.height);\n      var imgCode = \"\";\n      for (var i = 0; i < 4; i++) {\n        var text = state.pool[randomNum(0, state.pool.length - 1)];\n        var fontSize = randomNum(18, 40);\n        var deg = randomNum(-30, 30);\n        ctx.font = fontSize + \"px Simhei\";\n        ctx.textBaseline = \"top\";\n        ctx.fillStyle = randomColor(80, 150);\n        ctx.save();\n        ctx.translate(30 * i + 15, 15);\n        ctx.rotate(deg * Math.PI / 180);\n        ctx.fillText(text, -15 + 5, -15);\n        ctx.restore();\n        imgCode += text;\n      }\n      for (var _i = 0; _i < 5; _i++) {\n        ctx.beginPath();\n        ctx.moveTo(randomNum(0, state.width), randomNum(0, state.height));\n        ctx.lineTo(randomNum(0, state.width), randomNum(0, state.height));\n        ctx.strokeStyle = randomColor(180, 230);\n        ctx.closePath();\n        ctx.stroke();\n      }\n      for (var _i2 = 0; _i2 < 40; _i2++) {\n        ctx.beginPath();\n        ctx.arc(randomNum(0, state.width), randomNum(0, state.height), 1, 0, 2 * Math.PI);\n        ctx.closePath();\n        ctx.fillStyle = randomColor(150, 200);\n        ctx.fill();\n      }\n      return imgCode;\n    };\n    Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"onMounted\"])(function () {\n      Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"nextTick\"])(function () {\n        draw();\n        state.imgCode = draw();\n      });\n    });\n    return _objectSpread(_objectSpread({}, Object(vue__WEBPACK_IMPORTED_MODULE_1__[\"toRefs\"])(state)), {}, {\n      handleDraw: handleDraw,\n      verify: verify\n    });\n  }\n}));\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Verify.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Verify.vue?vue&type=template&id=a3276bae":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--0!./src/components/Verify.vue?vue&type=template&id=a3276bae ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _hoisted_1 = [\"width\", \"height\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"canvas\", {\n    ref: \"verify\",\n    width: _ctx.width,\n    height: _ctx.height,\n    onClick: _cache[0] || (_cache[0] = function () {\n      return _ctx.handleDraw && _ctx.handleDraw.apply(_ctx, arguments);\n    })\n  }, null, 8 /* PROPS */, _hoisted_1)]);\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Verify.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--0");

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// runtime helper for setting properties on components\n// in a tree-shakable way\nexports.default = (sfc, props) => {\n    const target = sfc.__vccOpts || sfc;\n    for (const [key, val] of props) {\n        target[key] = val;\n    }\n    return target;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/vue-loader/dist/exportHelper.js?");

/***/ }),

/***/ "./src/components/Verify.vue":
/*!***********************************!*\
  !*** ./src/components/Verify.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Verify_vue_vue_type_template_id_a3276bae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Verify.vue?vue&type=template&id=a3276bae */ \"./src/components/Verify.vue?vue&type=template&id=a3276bae\");\n/* harmony import */ var _Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Verify.vue?vue&type=script&lang=js */ \"./src/components/Verify.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Users_shuzhong_workspace_github_i_components_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n/* harmony import */ var _Users_shuzhong_workspace_github_i_components_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_shuzhong_workspace_github_i_components_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_Users_shuzhong_workspace_github_i_components_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_Verify_vue_vue_type_template_id_a3276bae__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__file',\"src/components/Verify.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Verify.vue?");

/***/ }),

/***/ "./src/components/Verify.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Verify.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/dist??ref--0!./Verify.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/components/Verify.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_0_Verify_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Verify.vue?");

/***/ }),

/***/ "./src/components/Verify.vue?vue&type=template&id=a3276bae":
/*!*****************************************************************!*\
  !*** ./src/components/Verify.vue?vue&type=template&id=a3276bae ***!
  \*****************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_Verify_vue_vue_type_template_id_a3276bae__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../node_modules/vue-loader/dist??ref--0!./Verify.vue?vue&type=template&id=a3276bae */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/components/Verify.vue?vue&type=template&id=a3276bae\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_0_Verify_vue_vue_type_template_id_a3276bae__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Verify.vue?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22vue%22?");

/***/ })

/******/ });
});