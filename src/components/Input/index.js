import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

const Input = forwardRef(({ style, icon, placeholder }, ref) => {
  /** Render icon if exists */
  const renderIcon = _ => (
    <>{icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}</>
  );

  return (
    <Container style={style}>
      {renderIcon()}
      <TInput placeholder={placeholder} ref={ref} />
    </Container>
  );
});

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
  placeholder: null,
};

export default Input;
