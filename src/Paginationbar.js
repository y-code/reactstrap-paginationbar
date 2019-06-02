import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import PropTypes from 'prop-types'

class CustomPropTypes {
  static integer(props, propName, componentName, location, propFullName, secret) {
    let error = PropTypes.number(props, propName, componentName, location, propFullName, secret)

    const value = props[propName]
    if (error || (!isNaN(value) && !Number.isInteger(value)))
      return new Error(`Invalid prop \`${propName}\` supplied to \`Paginationbar\`, expected an integer.`)
    return null
  }
  static natualNumber(props, propName, componentName, location, propFullName, secret) {
    let error = CustomPropTypes.integer(props, propName, componentName, location, propFullName, secret)

    const value = props[propName]
    if (error || (!isNaN(value) && value < 0))
      return new Error(`Invalid prop \`${propName}\` supplied to \`Paginationbar\`, expected a natural number.`)
    return null
  }
  static arrayOrNatualNumber(props, propName, componentName, location, propFullName, secret) {
    let error = PropTypes.oneOfType([CustomPropTypes.natualNumber, PropTypes.array])(props, propName, componentName, location, propFullName, secret)
    if (error)
      return new Error(`Invalid prop \`${propName}\` supplied to \`Paginationbar\`, expected an array or a natural number.`)
    return null
  }
  static currentPageNumber(props, propName, componentName, location, propFullName, secret) {
    let error = CustomPropTypes.integer(props, propName, componentName, location, propFullName, secret);

    const { totalItems, pageSize, current, first } = props
    const last = getLast(reviseTotalItems(totalItems), revisePageSize(pageSize))
    if (error || (!isNaN(current) && (current < first || last < current)))
      return new Error(`Invalid prop \`${propName}\` supplied to \`Paginationbar\`, expected an integer number more than the first page and less than the last page.`)
    return null
  }
}

const propTypes = {
  totalItems: CustomPropTypes.arrayOrNatualNumber,
  pageSize: CustomPropTypes.natualNumber,
  first: CustomPropTypes.integer,
  current: CustomPropTypes.currentPageNumber,
  visibility: PropTypes.number,
  ellipsis: PropTypes.bool,
  onTurnPage: PropTypes.func,
}

const defaultProps = {
  totalItems: 0,
  pageSize: 10,
  first: 1,
  visibility: 3,
  ellipsis: true,
}

let reviseToIntegerNumber = (n, d) => isNaN(n) ? d : Math.ceil(n)
let reviseToNatualNumber = (n, d) => Math.max(0, reviseToIntegerNumber(n, d))
let reviseTotalItems = totalItems => totalItems.length || reviseToNatualNumber(totalItems, defaultProps.totalItems)
let revisePageSize = pageSize => reviseToNatualNumber(pageSize, defaultProps.pageSize)
let reviseFirst = first => reviseToIntegerNumber(first, defaultProps.first)
let reviseCurrent = current => isNaN(current) ? undefined : reviseToIntegerNumber(current, undefined)
let reviseProps = props => {
  let revised = { ...props }
  revised.totalItems = reviseTotalItems(props.totalItems)
  revised.pageSize = revisePageSize(props.pageSize)
  revised.first = reviseFirst(props.first)
  revised.current = reviseCurrent(props.current)
  return revised
}

class Paginationbar extends React.Component {
  constructor(props) {
    super(props)

    this.rProps = reviseProps(props)

    this.last = getLast(this.rProps.totalItems, this.rProps.pageSize)
    this.state = {
      current: this.rProps.current || this.rProps.first
    }
  }

  componentDidMount() {
    this.triggerTurnPage(this.state.current, this.rProps)
  }

  componentWillReceiveProps(nextProps) {
    const rNextProps = reviseProps(nextProps)

    if (rNextProps.current && (rNextProps.current - rNextProps.first + 1) !== this.rProps.current) {
      this.setState({
        current: rNextProps.current - rNextProps.first + 1
      })
    }
    if (rNextProps.first !== this.rProps.first
      || rNextProps.totalItems !== this.rProps.totalItems
      || rNextProps.pageSize !== this.rProps.pageSize) {
      this.last = getLast(rNextProps.totalItems, rNextProps.pageSize)
      this.triggerTurnPage(rNextProps.first, rNextProps)
    }

    this.rProps = rNextProps
  }

  handleGoTo(page) {
    if (page === this.state.current + (this.rProps.first - 1))
      return

    this.triggerTurnPage(page, this.rProps)
  }

  triggerTurnPage(page, props) {
    const {
      totalItems,
      pageSize,
      first,
    } = props
    const current = page - first + 1

    this.setState({ current })

    if (this.props.onTurnPage) {
      if (totalItems === 0) {
        this.props.onTurnPage({ page: 1, fromItem: Number.NaN, toItem: Number.NaN })
      } else {
        const fromItem = pageSize * (current - 1)
        const toItem = Math.min(pageSize * current - 1, totalItems - 1)
        this.props.onTurnPage({ page, fromItem, toItem })
      }
    }
  }

  render() {
    const {
      className,
      listClassName,
      cssModule,
      size,
      tag,
      listTag,
      'aria-label': label,
    } = this.rProps

    const firstPage = this.rProps.first
    const lastPage = firstPage + this.last - 1
    const currentPage = firstPage + this.state.current - 1
    const previousPage = currentPage > firstPage ? currentPage - 1 : firstPage
    const nextPage = currentPage < lastPage ? currentPage + 1 : lastPage

    return (
      <Pagination {...{className, listClassName, cssModule, size, tag, listTag, 'aria-label': label}}>
        <PaginationItem onClick={() => { if (firstPage !== currentPage) this.handleGoTo(firstPage) }} disabled={firstPage === currentPage}>
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem onClick={() => { if (previousPage !== currentPage) this.handleGoTo(previousPage) }} disabled={previousPage === currentPage}>
          <PaginationLink previous />
        </PaginationItem>
        {this.renderPages(currentPage, firstPage, lastPage)}
        <PaginationItem onClick={() => { if (nextPage !== currentPage) this.handleGoTo(nextPage) }} disabled={nextPage === currentPage}>
          <PaginationLink next />
        </PaginationItem>
        <PaginationItem onClick={() => { if (lastPage !== currentPage) this.handleGoTo(lastPage) }} disabled={lastPage === currentPage}>
          <PaginationLink last />
        </PaginationItem>
      </Pagination>
    )
  }

  renderPages(currentPage, firstPage, lastPage) {
    const {
      visibility,
      ellipsis,
    } = this.rProps
    let pages = []
    let visibleFirstPage, visibleLastPage
    let hasPreviousEllipsis = false
    let hasNextEllipsis = false

    if (!visibility) {
      visibleFirstPage = firstPage
      visibleLastPage = lastPage
    } else if (this.last < visibility * 2) {
      visibleFirstPage = firstPage
      visibleLastPage = lastPage
    } else if (this.state.current < visibility + 1) {
      visibleFirstPage = firstPage
      visibleLastPage = firstPage + (visibility - 1) * 2 + (ellipsis ? 1 : 0)
      hasPreviousEllipsis = false
      hasNextEllipsis = true
    } else if (this.state.current > this.last - visibility) {
      visibleFirstPage = lastPage - (visibility - 1) * 2 + (ellipsis ? -1 : 0)
      visibleLastPage = lastPage
      hasPreviousEllipsis = true
      hasNextEllipsis = false
    } else {
      visibleFirstPage = currentPage - visibility + 1
      visibleLastPage = currentPage + visibility - 1
      hasPreviousEllipsis = true
      hasNextEllipsis = true
    }

    if (ellipsis && hasPreviousEllipsis)
      pages.push(
        <PaginationItem
          key={`page-previous-ellipsis`}
          disabled
        >
          <PaginationLink>
            &hellip;
          </PaginationLink>
        </PaginationItem>
      )

    for (let i = visibleFirstPage; i <= visibleLastPage; i++)
      pages.push(
        <PaginationItem
          key={`page-${i}`}
          onClick={() => { if (i !== currentPage) this.handleGoTo(i) }}
          active={i === currentPage}
        >
          <PaginationLink>
            {i}
          </PaginationLink>
        </PaginationItem>
      )

    if (ellipsis && hasNextEllipsis)
      pages.push(
        <PaginationItem
          key={`page-next-ellipsis`}
          disabled
        >
          <PaginationLink>
            &hellip;
          </PaginationLink>
        </PaginationItem>
      )

    return pages
  }
}

let getLast = (totalItems, pageSize) => ( totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) : 1 )

Paginationbar.propTypes = propTypes
Paginationbar.defaultProps = defaultProps

export default Paginationbar
export { CustomPropTypes }
