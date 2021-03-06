import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useAppContext } from '../../libs/contextLib';

export function PrivateRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to={`/signin?redirect=${pathname}${search}`} />}
    </Route>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
