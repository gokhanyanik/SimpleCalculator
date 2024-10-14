import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>hesap makinesi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center"

  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }

});

export default App;
