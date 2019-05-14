# Reactstrap Paginationbar
React Component for Bootstrap 4 Pagination.

This component assembles Reactstrap's stateless pagination components and provides stateful pagination functionality. Import the component and place it in code, then you will instantly see a pagination bar on UI.

## Features
* Page number visibility level
* Turning page event for updating pagination target
* Synchronizion with other paginationbars
* Ellipsis usage switch

## Getting Started
Install Reactstrap Paginationbar along with Reactstrap and Bootstrap from NPM.

    npm install --save bootstrap@4.1.1
    npm install --save reactstrap react@^16.3.2 react-dom@^16.3.2
    npm install --save reactstrap-paginationbar

Import Reactstrap Paginationbar component along with bootstrap.css

    import { Paginationbar } from 'reactstrap-paginationbar';
    import 'bootstrap/dist/css/bootstrap.css';

Now, you can use Paginationbar tag in JSX code.

    <Paginationbar
      totalItems={this.props.data.length}
      onTurnPage={(page, fromItem, toItem) => this.setState({ page, fromItem, toItem })}
    />

Set total number of items to `totalItems`, which you want to paginate for. The handler of `onTurnPage` receives 3 values that you can use for rendering the items on the current page. `page` is the current page number, `fromItem` is zero-based index of the first item at the page, and `toItem` is zero-based index of the last item at the page.

A working code sample is available in CodeSandbox. Please try and find out how much nice 'n' easy and configurable Paginationbar is!

[![Edit p3yjn7rpv0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p3yjn7rpv0?fontsize=14)

## Advanced Usage

### Page Number Visibility Level
Page Number Visibility Level identifies how many page numbers are displayed on the bar.

Although the level is represented by number, this does not mean that the number of page numbers are displayed. The followings are examples of how it looks in Level 0, 1, 2 and 3.

Level 0: `<Paginationbar totalItems={77} visibility={0} />`

![Page Number Visibility Level 0](https://github.com/y-code/reactstrap-paginationbar/blob/master/docs/images/visibility-0.png)

Level 1: `<Paginationbar totalItems={77} visibility={1} />`

![Page Number Visibility Level 0](https://github.com/y-code/reactstrap-paginationbar/blob/master/docs/images/visibility-1.png)

Level 2: `<Paginationbar totalItems={77} visibility={2} />`

![Page Number Visibility Level 0](https://github.com/y-code/reactstrap-paginationbar/blob/master/docs/images/visibility-2.png)

Level 3: `<Paginationbar totalItems={77} visibility={3} />`

![Page Number Visibility Level 0](https://github.com/y-code/reactstrap-paginationbar/blob/master/docs/images/visibility-3.png)

You can easily switch Page Number Visibility Level and see the difference in the working code sample.

[![Edit p3yjn7rpv0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p3yjn7rpv0?fontsize=14)

### Synchronization with other paginationbars
When we want to have pagination UI on both top and bottom of a table, for example, then those pagination UI should synchronize each other. In this case, add `current={this.props.page}` attribute on both Paginationbar tags, then operations in one will also be applied on the other.

    <Paginationbar
      totalItems={this.props.data.length}
      current={this.props.page}
      onTurnPage={(page, fromItem, toItem) => this.setState({ page, fromItem, toItem })}
    />

This is also used in the working code sample. Please see how it works in CodeSandbox.

[![Edit p3yjn7rpv0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p3yjn7rpv0?fontsize=14)
