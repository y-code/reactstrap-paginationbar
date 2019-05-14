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

Set total number of items to `totalItems` that you want to paginate for. The handler of `onTurnPage` receives 3 values; current page number in `page`, zero-based index of the first item at the page in `fromItem`, and zero-based index of the last item at the page in `toItem`.

A working code sample is available in CodeSandbox. Please try and find out how much nice 'n' easy and configurable Paginationbar is!

[![Edit p3yjn7rpv0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p3yjn7rpv0?fontsize=14)

## Advanced Usage

### Synchronization with other paginationbars
When we want to have pagination UI on both top and bottom of a table, for example, then those pagination UI should synchronize each other. In this case, add `current={this.props.page}` attribute on both Paginationbar tags, then operations in one will also be applied on the other.

    <Paginationbar
      totalItems={this.props.data.length}
      current={this.props.page}
      onTurnPage={(page, fromItem, toItem) => this.setState({ page, fromItem, toItem })}
    />

This is also used in the working code sample. Please see how it works in CodeSandbox.

[![Edit p3yjn7rpv0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p3yjn7rpv0?fontsize=14)
