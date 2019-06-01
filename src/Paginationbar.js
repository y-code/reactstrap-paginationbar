import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import PropTypes from 'prop-types'

const propTypes = {
  totalItems: PropTypes.oneOfType([PropTypes.number, PropTypes.array],),
  pageSize: PropTypes.number,
  first: PropTypes.number,
  current: PropTypes.number,
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

class Paginationbar extends React.Component {
  constructor(props) {
    super(props)

    // Revision
    this.totalItems = reviseTotalItems(props.totalItems)

    this.last = getLast(this.totalItems, props.pageSize)
    this.state = {
      current: props.current || this.props.first
    }
  }

  componentDidMount() {
    this.triggerTurnPage(this.state.current, { ...this.props, totalItems: this.totalItems })
  }

  componentWillReceiveProps(nextProps) {
    var nextTotalItems = reviseTotalItems(nextProps.totalItems)

    if (nextProps.current && (nextProps.current - nextProps.first + 1) !== this.state.current) {
      this.setState({
        current: nextProps.current - nextProps.first + 1
      })
    }
    if (nextProps.first !== this.props.first
      || nextTotalItems !== this.totalItems
      || nextProps.pageSize !== this.props.pageSize) {
        this.last = getLast(nextTotalItems, nextProps.pageSize)
        this.triggerTurnPage(nextProps.first, { ...nextProps, totalItems: nextTotalItems })
      }

    this.totalItems = nextTotalItems
  }

  handleGoTo(page) {
    if (page === this.state.current + (this.props.first - 1))
      return

    this.triggerTurnPage(page, this.props)
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
    } = this.props

    const firstPage = this.props.first
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
    } = this.props
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

/**
 * Revise totalItems property of Paginationbar class
 * @param {(number\|array)} totalItems - This must be totalItems property of Paginationbar class
 */
function reviseTotalItems(totalItems) {
  if (isNaN(totalItems))
    return totalItems.length
  else if (totalItems < 0) {
    console.error(`Negative number prop \`totalItems\` supplied to \`Paginationbar\`.`)
    return 0
  }
  else if (Number.isInteger(totalItems))
    return totalItems
  else {
    let revised = Math.ceil(totalItems)
    console.error(`Non-integer number prop \`totalItems\` supplied to \`Paginationbar\`. ${totalItems} is revised to ${revised}`)
    return revised
  }
}

let getLast = (totalItems, pageSize) => ( totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) : 1 )

Paginationbar.propTypes = propTypes
Paginationbar.defaultProps = defaultProps

export default Paginationbar
