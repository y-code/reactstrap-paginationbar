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


A working code sample is available in CodeSandbox. Please try and find out how much nice 'n' easy and configurable Paginationbar is!

[![Edit p3yjn7rpv0](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p3yjn7rpv0?fontsize=14)
