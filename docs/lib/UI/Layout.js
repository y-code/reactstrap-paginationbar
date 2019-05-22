import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

export default (props) => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="reactstrap-paginationbar - %s"
        title="reactstrap Paginationbar"
        defaultTitle="reactstrap Paginationbar"
        meta={[
            { 'name': 'description', 'content': 'reactstrap paginationbar - easy to use Bootstrap 4 Pagination components based on reactstrap' },
            { 'property': 'og:type', 'content': 'article' }
        ]}
      />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};
