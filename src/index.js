import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

import Background from '~/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </Background>
  );
}
