import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Enter your email"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          blurOnSubmit={false}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Password"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={() => {}}>Login</SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('Register')}>
        <SignLinkText>Create a free account!</SignLinkText>
      </SignLink>
    </Container>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
