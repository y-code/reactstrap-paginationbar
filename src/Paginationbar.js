import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import PropTypes from 'prop-types'

const propTypes = {
  totalItems: PropTypes.number,
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
  current: 0,
  visibility: 3,
  ellipsis: true,
}

class Paginationbar extends React.Component {
  constructor(props) {
    super(props)
    this.firstPage = this.props.first
    this.lastPage = getLastPage(props.first, props.totalItems, props.pageSize)
    this.state = {
      current: props.current || this.props.first
    }
  }

  componentDidMount() {
    this.triggerTurnPage(this.state.current, this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current && nextProps.current !== this.state.current) {
      this.setState({
        current: nextProps.current
      })
    }
    if (nextProps.first !== this.props.first
      || nextProps.totalItems !== this.props.totalItems
      || nextProps.pageSize !== this.props.pageSize) {
        this.lastPage = getLastPage(nextProps.first, nextProps.totalItems, nextProps.pageSize)
        this.triggerTurnPage(nextProps.first, nextProps)
      }
  }

  handleGoTo(page) {
    if (page === this.state.current)
      return

    this.triggerTurnPage(page, this.props)
  }

  triggerTurnPage(page, props) {
    this.setState({
      current: page
    })

    const {
      totalItems,
      pageSize,
    } = props
    const fromItem = pageSize * (page - 1)
    const toItem = Math.min(pageSize * page - 1, totalItems - 1)
    if (this.props.onTurnPage)
      this.props.onTurnPage({ page, fromItem, toItem })
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

    const currentPage = this.state.current
    const firstPage = this.props.first
    const lastPage = this.lastPage
    const previousPage = currentPage > firstPage ? currentPage - 1 : firstPage
    const nextPage = currentPage < lastPage ? currentPage + 1 : lastPage

    return (
      <Pagination {...{className, listClassName, cssModule, size, tag, listTag, 'aria-label': label}}>
        <PaginationItem onClick={() => { if (firstPage !== currentPage) this.handleGoTo(firstPage) }} disabled={firstPage === currentPage}>
          <PaginationLink first />
        </PaginationItem>
        <PaginationItem onClick={() => this.handleGoTo(previousPage)} disabled={previousPage === currentPage}>
          <PaginationLink previous />
        </PaginationItem>
        {this.renderPages(currentPage, firstPage, lastPage)}
        <PaginationItem onClick={() => this.handleGoTo(nextPage)} disabled={nextPage === currentPage}>
          <PaginationLink next />
        </PaginationItem>
        <PaginationItem onClick={() => this.handleGoTo(lastPage)} disabled={lastPage === currentPage}>
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
    } else if (lastPage < visibility * 2) {
      visibleFirstPage = firstPage
      visibleLastPage = lastPage
    } else if (currentPage < visibility + 1) {
      visibleFirstPage = firstPage
      visibleLastPage = firstPage + (visibility - 1) * 2 + (ellipsis ? 1 : 0)
      hasPreviousEllipsis = false
      hasNextEllipsis = true
      } else if (currentPage > lastPage - visibility) {
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
          onClick={() => this.handleGoTo(i)}
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

let getLastPage = (firstPage, totalItems, pageSize) => ( totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) + (firstPage - 1) : firstPage )

Paginationbar.propTypes = propTypes
Paginationbar.defaultProps = defaultProps

export default Paginationbar
