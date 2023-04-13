/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import InputDatePicker from './components/InputDatePicker';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#000000'}}>
      <View style={{height: '100%'}}>
        <InputDatePicker />
      </View>
    </SafeAreaView>
  );
};

export default App;
