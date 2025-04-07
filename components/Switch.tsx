// ThemeToggle.tsx
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previous => !previous);

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={themeStyles.text}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        trackColor={{ false: '#ccc', true: '#555' }}
        thumbColor={isDarkMode ? '#fff' : '#000'}
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  text: {
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
});