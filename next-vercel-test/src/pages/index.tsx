// @generated: @expo/next-adapter@2.1.9
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋 - Now TypeScript...and some more text...and another try!</Text>
      <Text>process.env.NEXT_PUBLIC_TEST_PARAM: "{process.env.NEXT_PUBLIC_TEST_PARAM}"</Text>
      <Text>process.env.TEST_PARAM: "{process.env.TEST_PARAM}"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
