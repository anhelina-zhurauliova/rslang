import React from 'react';
import PropTypes from 'prop-types';

export function LoaderButton({ isLoading, disabled = false, ...props }) {
  const { children } = props;
  return (
    <button type="submit" disabled={disabled || isLoading} {...props}>
      {isLoading && (
        <span className="icon">
          <i className="fas fa-refresh fa-spin" />
        </span>
      )}
      {children}
    </button>
  );
}

LoaderButton.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};
