(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        App: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/App.js", "vendors~App" ]);
    return checkDeferredModules();
})({
    "./assets/js/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Counter_Counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Counter/Counter.js */ "./assets/js/components/Counter/Counter.js");\n/* harmony import */ var _components_Immutable_Immutable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Immutable/Immutable.js */ "./assets/js/components/Immutable/Immutable.js");\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'container\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Immutable_Immutable_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\'app\'));\n\n//# sourceURL=webpack:///./assets/js/App.js?');
    },
    "./assets/js/components/Counter/Button.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Button extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.toggleHover = () => {\n      this.setState({\n        hover: !this.state.hover\n      });\n    };\n\n    this.state = {\n      hover: false\n    };\n  }\n\n  render() {\n    const styleButton = {\n      color: this.props.fontColor,\n      width: '50%',\n      border: '3px solid black',\n      padding: '20px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center',\n      cursor: 'pointer',\n      transition: 'all .6s ease-in-out',\n      background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button \".concat(this.props.action),\n      style: styleButton,\n      onMouseEnter: this.toggleHover,\n      onMouseLeave: this.toggleHover,\n      onClick: this.props.trigger\n    }, this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Button.js?");
    },
    "./assets/js/components/Counter/Counter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.js */ \"./assets/js/components/Counter/Button.js\");\n\n\nclass Counter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.clickedAdd = () => {\n      this.setState({\n        currentNumber: this.state.currentNumber + 1\n      }, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.clickedMinus = () => {\n      this.setState({\n        currentNumber: this.state.currentNumber - 1\n      });\n    };\n\n    this.counterRun = () => {\n      setInterval(() => {\n        this.setState({\n          currentNumber: this.state.currentNumber + 1\n        });\n      }, 1000);\n    };\n\n    this.state = {\n      status: 'manual',\n      currentNumber: 0\n    };\n  }\n\n  componentWillUnmount() {\n    console.log('component will mount stated');\n  }\n\n  componentDidMount() {\n    if (this.props.status == 'manual') {\n      this.setState({\n        status: this.props.status\n      }, () => {\n        this.counterRun();\n      });\n    }\n  }\n\n  render() {\n    const styleCounterComp = {\n      width: '100%',\n      maxWidth: '400px',\n      margin: '0 auto'\n    };\n    const styleNumber = {\n      border: '3px solid black',\n      padding: '20px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center'\n    };\n    const styleButton = {\n      width: '50%',\n      border: '3px solid black',\n      padding: '20px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center',\n      cursor: 'pointer'\n    };\n    const styleButtons = {\n      display: this.props.status == 'auto' ? 'none' : 'flex'\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"counter-comp\",\n      style: styleCounterComp\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"number\",\n      style: styleNumber\n    }, this.state.currentNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"buttons\",\n      style: styleButtons\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      action: \"minus\",\n      hoverColor: \"red\",\n      fontColor: \"white\",\n      backgroundColor: \"black\",\n      trigger: this.clickedMinus\n    }, \"-\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      action: \"plus\",\n      hoverColor: \"purple\",\n      fontColor: \"black\",\n      backgroundColor: \"white\",\n      trigger: this.clickedAdd\n    }, \"+\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Counter.js?");
    },
    "./assets/js/components/Immutable/Immutable.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Immutable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass Immutable extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {\n      console.log(this.state);\n\n      const newGrade = _objectSpread(_objectSpread({}, this.state.user.grades), {}, {\n        math: 'A+'\n      });\n\n      const newUser = Object.assign({}, this.state.user, {\n        name: 'Mark',\n        grades: newGrade\n      });\n      this.setState({\n        background: 'green',\n        user: newUser\n      }, () => {\n        console.log(this.state);\n      });\n      console.log('Clicked BTN');\n    };\n\n    this.changeToActive = () => {\n      if (this.state.user.grades.math == 'A+') {\n        return 'active';\n      } else {\n        return '';\n      }\n    };\n\n    this.state = {\n      background: 'black',\n      user: {\n        name: 'Gary',\n        age: 23,\n        location: 'NYC',\n        grades: {\n          math: 'A',\n          english: 'B+',\n          science: 'C-',\n          gym: 'F'\n        }\n      }\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"Immutable-comp\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"box \".concat(this.changeToActive())\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button\",\n      onClick: this.clickedBtn\n    }, \"Press Me\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Immutable/Immutable.js?");
    }
});