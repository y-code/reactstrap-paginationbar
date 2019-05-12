import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
var propTypes = {
  totalItems: PropTypes.number,
  pageSize: PropTypes.number,
  first: PropTypes.number,
  current: PropTypes.number,
  visibility: PropTypes.number,
  ellipsis: PropTypes.bool,
  onTurnPage: PropTypes.func
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
    return React.createElement(Pagination, {
      className: className,
      listClassName: listClassName,
      cssModule: cssModule,
      size: size,
      tag: tag,
      listTag: listTag,
      'aria-label': label
    }, React.createElement(PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(firstPage);
      },
      disabled: firstPage === currentPage
    }, React.createElement(PaginationLink, {
      first: true
    })), React.createElement(PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(previousPage);
      },
      disabled: previousPage === currentPage
    }, React.createElement(PaginationLink, {
      previous: true
    })), this.renderPages(currentPage, firstPage, lastPage), React.createElement(PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(nextPage);
      },
      disabled: nextPage === currentPage
    }, React.createElement(PaginationLink, {
      next: true
    })), React.createElement(PaginationItem, {
      onClick: function onClick() {
        return _this2.handleGoTo(lastPage);
      },
      disabled: lastPage === currentPage
    }, React.createElement(PaginationLink, {
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

    if (ellipsis && hasPreviousEllipsis) pages.push(React.createElement(PaginationItem, {
      key: "page-previous-ellipsis",
      disabled: true
    }, React.createElement(PaginationLink, null, "\u2026")));

    var _loop = function _loop(i) {
      pages.push(React.createElement(PaginationItem, {
        key: "page-" + i,
        onClick: function onClick() {
          return _this3.handleGoTo(i);
        },
        active: i === currentPage
      }, React.createElement(PaginationLink, null, i)));
    };

    for (var i = visibleFirstPage; i <= visibleLastPage; i++) {
      _loop(i);
    }

    if (ellipsis && hasNextEllipsis) pages.push(React.createElement(PaginationItem, {
      key: "page-next-ellipsis",
      disabled: true
    }, React.createElement(PaginationLink, null, "\u2026")));
    return pages;
  };

  return Paginationbar;
}(React.Component);

var getLastPage = function getLastPage(firstPage, totalItems, pageSize) {
  return totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) + (firstPage - 1) : firstPage;
};

Paginationbar.propTypes = propTypes;
Paginationbar.defaultProps = defaultProps;
export default Paginationbar;