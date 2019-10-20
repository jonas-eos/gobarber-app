import React from 'react';
import { Text, Image } from 'react-native';

import logo from '~/assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
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
        />

        <FormInput icon="lock-outline" secureTextEntry placeholder="Password" />

        <SubmitButton onPress={() => {}}>Login</SubmitButton>
      </Form>

      <SignLink onPress={() => {}}>
        <SignLinkText>Create a free account!</SignLinkText>
      </SignLink>
    </Container>
  );
}
