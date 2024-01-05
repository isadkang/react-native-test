import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Alert } from 'react-native';

const HelloWorldApp = () => {
  const [counter, setCount] = useState(0);
  const [showButton, setShowButton] = useState(true);

  const name = 'Irsyad Nat';

  function handleReset() {
    setCount(0);
    setShowButton(true);

    return Alert.alert('Counter reseted');
  }

  function handleClick() {
    setCount(counter + 1);

    if (counter + 1 >= 10) {
      setShowButton(false);
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.navbar}>
          <Text>{name}</Text>
      </View>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {' '}
        Clicked Count {counter}
      </Text>
      {showButton && <Button onPress={handleClick} title="Click Me!" />}
      {counter >= 10 && <Button onPress={handleReset} title="Reset Counter" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    gap: 10,
    backgroundColor: '#f3f3f3',
  }
});
export default HelloWorldApp;
