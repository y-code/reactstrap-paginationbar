(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('reactstrap')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'reactstrap'], factory) :
  (global = global || self, factory(global.ReactstrapPaginationbar = {}, global.React, global.Reactstrap));
}(this, function (exports, React, reactstrap) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var b = "function" === typeof Symbol && Symbol.for,
        c = b ? Symbol.for("react.element") : 60103,
        d = b ? Symbol.for("react.portal") : 60106,
        e = b ? Symbol.for("react.fragment") : 60107,
        f = b ? Symbol.for("react.strict_mode") : 60108,
        g = b ? Symbol.for("react.profiler") : 60114,
        h = b ? Symbol.for("react.provider") : 60109,
        k = b ? Symbol.for("react.context") : 60110,
        l = b ? Symbol.for("react.async_mode") : 60111,
        m = b ? Symbol.for("react.concurrent_mode") : 60111,
        n = b ? Symbol.for("react.forward_ref") : 60112,
        p = b ? Symbol.for("react.suspense") : 60113,
        q = b ? Symbol.for("react.memo") : 60115,
        r = b ? Symbol.for("react.lazy") : 60116;

    function t(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;

        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;

              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case h:
                    return a;

                  default:
                    return u;
                }

            }

          case r:
          case q:
          case d:
            return u;
        }
      }
    }

    function v(a) {
      return t(a) === m;
    }

    exports.typeOf = t;
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = r;
    exports.Memo = q;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;

    exports.isValidElementType = function (a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || "object" === typeof a && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
    };

    exports.isAsyncMode = function (a) {
      return v(a) || t(a) === l;
    };

    exports.isConcurrentMode = v;

    exports.isContextConsumer = function (a) {
      return t(a) === k;
    };

    exports.isContextProvider = function (a) {
      return t(a) === h;
    };

    exports.isElement = function (a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };

    exports.isForwardRef = function (a) {
      return t(a) === n;
    };

    exports.isFragment = function (a) {
      return t(a) === e;
    };

    exports.isLazy = function (a) {
      return t(a) === r;
    };

    exports.isMemo = function (a) {
      return t(a) === q;
    };

    exports.isPortal = function (a) {
      return t(a) === d;
    };

    exports.isProfiler = function (a) {
      return t(a) === g;
    };

    exports.isStrictMode = function (a) {
      return t(a) === f;
    };

    exports.isSuspense = function (a) {
      return t(a) === p;
    };
  });
  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });
  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_production_min;
    }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
  });

  var propTypes$1 = {
    totalItems: propTypes.number,
    pageSize: propTypes.number,
    first: propTypes.number,
    current: propTypes.number,
    visibility: propTypes.number,
    ellipsis: propTypes.bool,
    onTurnPage: propTypes.func
  };
  var defaultProps = {
    totalItems: 0,
    pageSize: 10,
    first: 1,
    current: 0,
    visibility: 3,
    ellipsis: true,
    onTurnPage: function onTurnPage(page, fromItem, toItem) {}
  };

  var Paginationbar =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Paginationbar, _React$Component);

    function Paginationbar(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.firstPage = _this.props.first;
      _this.lastPage = getLastPage(props.first, props.totalItems, props.pageSize);
      _this.state = {
        current: props.current || _this.props.first
      };
      return _this;
    }

    var _proto = Paginationbar.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.triggerTurnPage(this.state.current, this.props);
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (nextProps.current && nextProps.current !== this.state.current) {
        this.setState({
          current: nextProps.current
        });
      }

      if (nextProps.first !== this.props.first || nextProps.totalItems !== this.props.totalItems || nextProps.pageSize !== this.props.pageSize) {
        this.lastPage = getLastPage(nextProps.first, nextProps.totalItems, nextProps.pageSize);
        this.triggerTurnPage(nextProps.first, nextProps);
      }
    };

    _proto.handleGoTo = function handleGoTo(page) {
      if (page === this.state.current) return;
      this.triggerTurnPage(page, this.props);
    };

    _proto.triggerTurnPage = function triggerTurnPage(page, props) {
      this.setState({
        current: page
      });
      var totalItems = props.totalItems,
          pageSize = props.pageSize;
      var fromItem = pageSize * (page - 1);
      var toItem = Math.min(pageSize * page - 1, totalItems - 1);
      this.props.onTurnPage(page, fromItem, toItem);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          listClassName = _this$props.listClassName,
          cssModule = _this$props.cssModule,
          size = _this$props.size,
          tag = _this$props.tag,
          listTag = _this$props.listTag,
          label = _this$props['aria-label'];
      var currentPage = this.state.current;
      var firstPage = this.props.first;
      var lastPage = this.lastPage;
      var previousPage = currentPage > firstPage ? currentPage - 1 : firstPage;
      var nextPage = currentPage < lastPage ? currentPage + 1 : lastPage;
      return React.createElement(reactstrap.Pagination, {
        className: className,
        listClassName: listClassName,
        cssModule: cssModule,
        size: size,
        tag: tag,
        listTag: listTag,
        'aria-label': label
      }, React.createElement(reactstrap.PaginationItem, {
        onClick: function onClick() {
          return _this2.handleGoTo(firstPage);
        },
        disabled: firstPage === currentPage
      }, React.createElement(reactstrap.PaginationLink, {
        first: true
      })), React.createElement(reactstrap.PaginationItem, {
        onClick: function onClick() {
          return _this2.handleGoTo(previousPage);
        },
        disabled: previousPage === currentPage
      }, React.createElement(reactstrap.PaginationLink, {
        previous: true
      })), this.renderPages(currentPage, firstPage, lastPage), React.createElement(reactstrap.PaginationItem, {
        onClick: function onClick() {
          return _this2.handleGoTo(nextPage);
        },
        disabled: nextPage === currentPage
      }, React.createElement(reactstrap.PaginationLink, {
        next: true
      })), React.createElement(reactstrap.PaginationItem, {
        onClick: function onClick() {
          return _this2.handleGoTo(lastPage);
        },
        disabled: lastPage === currentPage
      }, React.createElement(reactstrap.PaginationLink, {
        last: true
      })));
    };

    _proto.renderPages = function renderPages(currentPage, firstPage, lastPage) {
      var _this3 = this;

      var _this$props2 = this.props,
          visibility = _this$props2.visibility,
          ellipsis = _this$props2.ellipsis;
      var pages = [];
      var visibleFirstPage, visibleLastPage;
      var hasPreviousEllipsis = false;
      var hasNextEllipsis = false;

      if (!visibility) {
        visibleFirstPage = firstPage;
        visibleLastPage = lastPage;
      } else if (lastPage < visibility * 2) {
        visibleFirstPage = firstPage;
        visibleLastPage = lastPage;
      } else if (currentPage < visibility + 1) {
        visibleFirstPage = firstPage;
        visibleLastPage = firstPage + (visibility - 1) * 2 + (ellipsis ? 1 : 0);
        hasPreviousEllipsis = false;
        hasNextEllipsis = true;
      } else if (currentPage > lastPage - visibility) {
        visibleFirstPage = lastPage - (visibility - 1) * 2 + (ellipsis ? -1 : 0);
        visibleLastPage = lastPage;
        hasPreviousEllipsis = true;
        hasNextEllipsis = false;
      } else {
        visibleFirstPage = currentPage - visibility + 1;
        visibleLastPage = currentPage + visibility - 1;
        hasPreviousEllipsis = true;
        hasNextEllipsis = true;
      }

      if (ellipsis && hasPreviousEllipsis) pages.push(React.createElement(reactstrap.PaginationItem, {
        key: "page-previous-ellipsis",
        disabled: true
      }, React.createElement(reactstrap.PaginationLink, null, "\u2026")));

      var _loop = function _loop(i) {
        pages.push(React.createElement(reactstrap.PaginationItem, {
          key: "page-" + i,
          onClick: function onClick() {
            return _this3.handleGoTo(i);
          },
          active: i === currentPage
        }, React.createElement(reactstrap.PaginationLink, null, i)));
      };

      for (var i = visibleFirstPage; i <= visibleLastPage; i++) {
        _loop(i);
      }

      if (ellipsis && hasNextEllipsis) pages.push(React.createElement(reactstrap.PaginationItem, {
        key: "page-next-ellipsis",
        disabled: true
      }, React.createElement(reactstrap.PaginationLink, null, "\u2026")));
      return pages;
    };

    return Paginationbar;
  }(React.Component);

  var getLastPage = function getLastPage(firstPage, totalItems, pageSize) {
    return totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) + (firstPage - 1) : firstPage;
  };

  Paginationbar.propTypes = propTypes$1;
  Paginationbar.defaultProps = defaultProps;

  exports.Paginationbar = Paginationbar;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=reactstrap-paginationbar.full.js.map
