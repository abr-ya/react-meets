import React from 'react';
import PropTypes from 'prop-types';

import MainNavigation from './MainNavigation';
import classes from './Layout.module.scss';

const Layout = ({ children }) => (
  <div>
    <MainNavigation />
    <main className={classes.main}>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
