//App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import CounterApp from './Messenger';
import ColorChangerApp from './Comment';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CounterApp/>
      <ColorChangerApp/>

    </SafeAreaView>
  );
};

export default App;
