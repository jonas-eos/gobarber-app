import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

const Input = forwardRef(
  (
    {
      style,
      icon,
      placeholder,
      keyboardType,
      autoCorrect,
      autoCapitalize,
      secureTextEntry,
      returnKeyType,
      onSubmitEditing,
      blurOnSubmit,
    },
    ref
  ) => {
    /** Render icon if exists */
    const renderIcon = _ => (
      <>
        {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      </>
    );

    return (
      <Container style={style}>
        {renderIcon()}
        <TInput
          placeholder={placeholder}
          ref={ref}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          returnKeyType={returnKeyType}
          onSubmitEditing={() => onSubmitEditing()}
          blurOnSubmit={blurOnSubmit}
        />
      </Container>
    );
  }
);

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  secureTextEntry: PropTypes.bool,
  returnKeyType: PropTypes.string,
  onSubmitEditing: PropTypes.func,
};

Input.defaultProps = {
  style: {},
  icon: null,
  placeholder: null,
  keyboardType: null,
  autoCorrect: true,
  autoCapitalize: null,
  secureTextEntry: false,
  returnKeyType: null,
  onSubmitEditing: () => {},
};

export default Input;
