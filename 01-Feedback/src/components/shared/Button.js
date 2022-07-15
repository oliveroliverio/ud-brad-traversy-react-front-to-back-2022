import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  vesrion: PropTypes.string,
  type: PropTypes.string,
  idDisabled: PropTypes.bool,
};
export default Button;
