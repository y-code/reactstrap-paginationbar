'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Reactstrap = _interopDefault(require('reactstrap'));
var PropTypes = _interopDefault(require('prop-types'));
require('classnames');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var propTypes = {
  totalItems: PropTypes.number,
  pageSize: PropTypes.number,
  first: PropTypes.number,
  current: PropTypes.number,
  onTurnPage: PropTypes.func
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
    return React.createElement(Reactstrap.Pagination, {
      className: className,
      listClassName: listClassName,
      cssModule: cssModule,
      size: size,
      tag: tag,
      listTag: listTag,
      'aria-label': label
    }, React.createElement(Reactstrap.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(firstPage);
      },
      disabled: firstPage === currentPage
    }, React.createElement(Reactstrap.PaginationLink, {
      first: true
    })), React.createElement(Reactstrap.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(previousPage);
      },
      disabled: previousPage === currentPage
    }, React.createElement(Reactstrap.PaginationLink, {
      previous: true
    })), this.renderPages(currentPage, firstPage, lastPage), React.createElement(Reactstrap.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(nextPage);
      },
      disabled: nextPage === currentPage
    }, React.createElement(Reactstrap.PaginationLink, {
      next: true
    })), React.createElement(Reactstrap.PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(lastPage);
      },
      disabled: lastPage === currentPage
    }, React.createElement(Reactstrap.PaginationLink, {
      last: true
    })));
  };

  _proto.renderPages = function renderPages(currentPage, firstPage, lastPage) {
    var _this3 = this;

    var pages = [];

    var _loop = function _loop(i) {
      pages.push(React.createElement(Reactstrap.PaginationItem, {
        key: "page-" + i,
        onClick: function onClick() {
          return _this3.handleGoTo(i);
        },
        active: i === currentPage
      }, React.createElement(Reactstrap.PaginationLink, null, i)));
    };

    for (var i = firstPage; i <= lastPage; i++) {
      _loop(i);
    }

    return pages;
  };

  return Paginationbar;
}(React.Component);

var getLastPage = function getLastPage(firstPage, totalItems, pageSize) {
  return totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) + (firstPage - 1) : firstPage;
};

Paginationbar.propTypes = propTypes;
Paginationbar.defaultProps = defaultProps;

exports.Paginationbar = Paginationbar;
//# sourceMappingURL=reactstrap-paginationbar.cjs.js.map
