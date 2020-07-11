import React from 'react';
import PropTypes from 'prop-types';

export function LoaderButton({ isLoading, disabled = false, ...props }) {
  const { children } = props;
  return (
    <button type="submit" disabled={disabled || isLoading} {...props}>
      {isLoading && <span className="spinner-border spinner-border-sm mr-2" />}
      {children}
    </button>
  );
}

LoaderButton.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};
