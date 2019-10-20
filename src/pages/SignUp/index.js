import React from 'react';
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

export default function SignUp({ navigation }) {
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Full name"
        />

        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Enter your email"
        />

        <FormInput icon="lock-outline" secureTextEntry placeholder="Password" />

        <SubmitButton onPress={() => {}}>Login</SubmitButton>
      </Form>

      <SignLink onPress={() => navigation.navigate('Login')}>
        <SignLinkText>Already have an account!</SignLinkText>
      </SignLink>
    </Container>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
