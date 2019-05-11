import React from 'react'
import Reactstrap from 'reactstrap'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  totalItems: PropTypes.number,
  pageSize: PropTypes.number,
  first: PropTypes.number,
  current: PropTypes.number,
  onTurnPage: PropTypes.func,
}

const defaultProps = {
  totalItems: 0,
  pageSize: 10,
  first: 1,
  current: 0,
  onTurnPage: (page, fromItem, toItem) => {},
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
        this.triggerTurnPage(this.props.first, nextProps)
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
    this.props.onTurnPage(page, fromItem, toItem)
  }

  render() {
    const {
      totalItems,
      pageSize,
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
      <Reactstrap.Pagination {...{className, listClassName, cssModule, size, tag, listTag, 'aria-label': label}}>
        <Reactstrap.PaginationItem onClick={() => this.handleGoTo(firstPage)} disabled={firstPage === currentPage}>
          <Reactstrap.PaginationLink first />
        </Reactstrap.PaginationItem>
        <Reactstrap.PaginationItem onClick={() => this.handleGoTo(previousPage)} disabled={previousPage === currentPage}>
          <Reactstrap.PaginationLink previous />
        </Reactstrap.PaginationItem>
        {this.renderPages(currentPage, firstPage, lastPage)}
        <Reactstrap.PaginationItem onClick={() => this.handleGoTo(nextPage)} disabled={nextPage === currentPage}>
          <Reactstrap.PaginationLink next />
        </Reactstrap.PaginationItem>
        <Reactstrap.PaginationItem onClick={() => this.handleGoTo(lastPage)} disabled={lastPage === currentPage}>
          <Reactstrap.PaginationLink last />
        </Reactstrap.PaginationItem>
      </Reactstrap.Pagination>
    )
  }

  renderPages(currentPage, firstPage, lastPage) {
    let pages = []
    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(
        <Reactstrap.PaginationItem
          key={`page-${i}`}
          onClick={() => this.handleGoTo(i)}
          active={i === currentPage}
        >
          <Reactstrap.PaginationLink>
            {i}
          </Reactstrap.PaginationLink>
        </Reactstrap.PaginationItem>
      )
    }
    return pages
  }
}

let getLastPage = (firstPage, totalItems, pageSize) => ( totalItems ? Math.floor(totalItems / pageSize) + !!(totalItems % pageSize) + (firstPage - 1) : firstPage )

Paginationbar.propTypes = propTypes
Paginationbar.defaultProps = defaultProps

export default Paginationbar
