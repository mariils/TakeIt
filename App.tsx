import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const NativeComponent = () => {
  return (
<View style={styles.container}>
  <Text style={styles.title}>Welcome</Text>
  <Text> Ths is a native component</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default NativeComponent;