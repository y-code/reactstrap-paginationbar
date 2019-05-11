"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactstrap = _interopRequireDefault(require("reactstrap"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var propTypes = {
  totalItems: _propTypes.default.number,
  pageSize: _propTypes.default.number,
  first: _propTypes.default.number,
  current: _propTypes.default.number,
  onTurnPage: _propTypes.default.func
};
var defaultProps = {
  totalItems: 0,
  pageSize: 10,
  first: 1,
  current: 0,
  onTurnPage: function onTurnPage(page, fromItem, toItem) {}
};

var Paginationbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Paginationbar, _React$Component);

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
      // this.setState({
      //   current: this.props.first
      // })
      this.lastPage = getLastPage(nextProps.first, nextProps.totalItems, nextProps.pageSize);
      this.triggerTurnPage(this.props.first, nextProps);
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
        totalItems = _this$props.totalItems,
        pageSize = _this$props.pageSize,
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
    return _react.default.createElement(_reactstrap.default.Pagination, {
      className: className,
      listClassName: listClassName,
      cssModule: cssModule,
      size: size,
      tag: tag,
      listTag: listTag,
      'aria-label': label
    }, _react.default.createElement(_reactstrap.default.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(firstPage);
      },
      disabled: firstPage === currentPage
    }, _react.default.createElement(_reactstrap.default.PaginationLink, {
      first: true
    })), _react.default.createElement(_reactstrap.default.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(previousPage);
      },
      disabled: previousPage === currentPage
    }, _react.default.createElement(_reactstrap.default.PaginationLink, {
      previous: true
    })), this.renderPages(currentPage, firstPage, lastPage), _react.default.createElement(_reactstrap.default.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(nextPage);
      },
      disabled: nextPage === currentPage
    }, _react.default.createElement(_reactstrap.default.PaginationLink, {
      next: true
    })), _react.default.createElement(_reactstrap.default.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(lastPage);
      },
      disabled: lastPage === currentPage
    }, _react.default.createElement(_reactstrap.default.PaginationLink, {
      last: true
    })));
  };

  _proto.renderPages = function renderPages(currentPage, firstPage, lastPage) {
    var _this3 = this;

    var pages = [];

    var _loop = function _loop(i) {
      pages.push(_react.default.createElement(_reactstrap.default.PaginationItem, {
        key: "page-" + i,
        onClick: function onClick() {
          return _this3.handleGoTo(i);
        },
        active: i === currentPage
      }, _react.default.createElement(_reactstrap.default.PaginationLink, null, i)));
    };

    for (var i = firstPage; i <= lastPage; i++) {
      _loop(i);
    }

    return pages;
  };

  return Paginationbar;
}(_react.default.Component);

var getLastPage = function getLastPage(firstPage, totalItems, pageSize) {
  return totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) + (firstPage - 1) : firstPage;
};

Paginationbar.propTypes = propTypes;
Paginationbar.defaultProps = defaultProps;
var _default = Paginationbar;
exports.default = _default;