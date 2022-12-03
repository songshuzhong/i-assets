/*! i-components v0.1.0 | (c) 2021, author sshuzhong@outlook.com */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("HelloWorld", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["HelloWorld"] = factory(require("vue"));
	else
		root["HelloWorld"] = factory(root["vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/HelloWorld/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// runtime helper for setting properties on components\n// in a tree-shakable way\nexports.default = (sfc, props) => {\n    const target = sfc.__vccOpts || sfc;\n    for (const [key, val] of props) {\n        target[key] = val;\n    }\n    return target;\n};\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/vue-loader/dist/exportHelper.js?");

/***/ }),

/***/ "./src/components/HelloWorld/index.js":
/*!********************************************************!*\
  !*** ./src/components/HelloWorld/index.js + 5 modules ***!
  \********************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/vue-loader/dist/exportHelper.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "vue" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"vue\"\nvar external_vue_ = __webpack_require__(\"vue\");\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--0!./src/components/HelloWorld/HelloWorld.vue?vue&type=template&id=0396fe0f\n\nvar _hoisted_1 = {\n  class: \"hello\"\n};\nvar _hoisted_2 = /*#__PURE__*/Object(external_vue_[\"createStaticVNode\"])(\"<p> For a guide and recipes on how to configure / customize this project,<br> check out the <a href=\\\"https://cli.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-cli documentation</a>. </p><h3>Installed CLI Plugins</h3><ul><li><a href=\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">babel</a></li><li><a href=\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">pwa</a></li><li><a href=\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">router</a></li><li><a href=\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">eslint</a></li><li><a href=\\\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">typescript</a></li></ul><h3>Essential Links</h3><ul><li><a href=\\\"https://vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Core Docs</a></li><li><a href=\\\"https://forum.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Forum</a></li><li><a href=\\\"https://chat.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Community Chat</a></li><li><a href=\\\"https://twitter.com/vuejs\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Twitter</a></li><li><a href=\\\"https://news.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">News</a></li></ul><h3>Ecosystem</h3><ul><li><a href=\\\"https://router.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-router</a></li><li><a href=\\\"https://vuex.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vuex</a></li><li><a href=\\\"https://github.com/vuejs/vue-devtools#vue-devtools\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-devtools</a></li><li><a href=\\\"https://vue-loader.vuejs.org\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">vue-loader</a></li><li><a href=\\\"https://github.com/vuejs/awesome-vue\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">awesome-vue</a></li></ul>\", 7);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(external_vue_[\"openBlock\"])(), Object(external_vue_[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(external_vue_[\"createElementVNode\"])(\"h1\", null, Object(external_vue_[\"toDisplayString\"])($props.msg), 1 /* TEXT */), _hoisted_2]);\n}\n// CONCATENATED MODULE: ./src/components/HelloWorld/HelloWorld.vue?vue&type=template&id=0396fe0f\n\n// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--0!./src/components/HelloWorld/HelloWorld.vue?vue&type=script&lang=js\n/* harmony default export */ var HelloWorldvue_type_script_lang_js = ({\n  name: 'HelloWorld',\n  props: {\n    msg: String\n  }\n});\n// CONCATENATED MODULE: ./src/components/HelloWorld/HelloWorld.vue?vue&type=script&lang=js\n \n// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js\nvar exportHelper = __webpack_require__(\"./node_modules/vue-loader/dist/exportHelper.js\");\nvar exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);\n\n// CONCATENATED MODULE: ./src/components/HelloWorld/HelloWorld.vue\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/exportHelper_default()(HelloWorldvue_type_script_lang_js, [['render',render],['__file',\"src/components/HelloWorld/HelloWorld.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ var HelloWorld = (__exports__);\n// CONCATENATED MODULE: ./src/components/HelloWorld/index.js\n\nvar HelloWorld_install = function install(app) {\n  app.component(HelloWorld.name, HelloWorld);\n};\nif (typeof window !== 'undefined' && window.Vue) {\n  HelloWorld_install(window.Vue);\n}\n/* harmony default export */ var components_HelloWorld = __webpack_exports__[\"default\"] = ({\n  install: HelloWorld_install,\n  HelloWorld: HelloWorld\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/HelloWorld/index.js_+_5_modules?");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22vue%22?");

/***/ })

/******/ });
});