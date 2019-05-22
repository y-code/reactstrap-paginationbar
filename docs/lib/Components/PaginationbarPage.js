/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import PaginationbarExample from '../examples/Paginationbar';
const PaginationbarExampleSource = require('!!raw-loader!../examples/Paginationbar');

import PaginationbarVisibilityExample from '../examples/PaginationbarVisibility';
const PaginationbarVisibilityExampleSource = require('!!raw-loader!../examples/PaginationbarVisibility');

import PaginationSynchronizationExample from '../examples/PaginationSynchronization';
const PaginationSynchronizationExampleSource = require('!!raw-loader!../examples/PaginationSynchronization');

import PaginationbarEllipsisExample from '../examples/PaginationbarEllipsis';
const PaginationbarEllipsisExampleSource = require('!!raw-loader!../examples/PaginationbarEllipsis');

export default class PaginationPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Paginationbar" />
        <div className="docs-example">
          <PaginationbarExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationbarExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        In addition to the following properties, all the properties of reactstrap's Pagination component can be set to Paginationbar component, which will be passed though to Pagination component when assembling reactstrap components.
        <pre>
          <PrismCode className="language-jsx">
{`Pagination.propTypes = {
  totalItems: PropTypes.number,
  pageSize: PropTypes.number,
  first: PropTypes.number,
  current: PropTypes.number,
  visibility: PropTypes.number,
  ellipsis: PropTypes.bool,
  onTurnPage: PropTypes.func,
};

Pagination.defaultProps = {
  totalItems: 0,
  pageSize: 10,
  first: 1,
  current: 0,
  visibility: 3,
  ellipsis: true,
};
`}
          </PrismCode>
        </pre>
        <SectionTitle>Page Number Visibility Level</SectionTitle>
        <div className="docs-example">
          <PaginationbarVisibilityExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationbarVisibilityExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Synchronization with other paginationbars</SectionTitle>
        <div className="docs-example">
          <PaginationSynchronizationExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationSynchronizationExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Ellipsis usage</SectionTitle>
        <div className="docs-example">
          <PaginationbarEllipsisExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {PaginationbarEllipsisExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
