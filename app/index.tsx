import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router'

const Calculator = () => {
  const [isDark, setIsDark] = useState(true);
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (value) => {
    if (value === 'C') {
      setDisplayValue('');
    } else if (value === '=') {
      try {
        const expression = displayValue
          .replace(/X/g, '*')
          .replace(/—/g, '-')
          .replace(/%/g, '*0.01')
        	.replace(/÷/g, '/');
        const evalResult = eval(expression);
        setDisplayValue(evalResult.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === '±') {
      setDisplayValue(prev => prev.startsWith('-') ? prev.slice(1) : `-${prev}`);
    } else {
      setDisplayValue(prev => prev + value);
    }
  };

  const buttons = [
    ['C', '±', '%', '+'],
    ['1', '2', '3', '—'],
    ['4', '5', '6', 'X'],
    ['7', '8', '9', '/'],
    ['0', '00', '.', '='],
  ];

  const themeStyles = isDark ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.background }]}>

      <TouchableOpacity
        style={[styles.themeToggle, { backgroundColor: themeStyles.toggleBg }]}
        onPress={() => setIsDark(!isDark)}
      >
        <Text style={{ color: themeStyles.text }}>
          {isDark ? '🌙' : '☀️'}
        </Text>
      </TouchableOpacity>

      <View style={styles.displayContainer}>
        <Text style={[styles.displayText, { color: themeStyles.text }]}>
          {displayValue || '0'}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      ['+', '—', 'X', '/', '='].includes(button)
                        ? themeStyles.operatorButton
                        : ['C', '±', '%'].includes(button)
                        ? themeStyles.topOperatorButton
                        : themeStyles.buttonBg,
                  },
                ]}
                onPress={() => handleButtonPress(button)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color:
                        ['C', '±', '%'].includes(button) || ['+', '—', 'X', '/', '='].includes(button)
                          ? 'white'
                          : themeStyles.text,
                    },
                  ]}
                >
                  {button}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const lightTheme = {
  background: '#fefefe',
  text: '#1a1a1a',
  buttonBg: '#e6e6e6',
  operatorButton: '#ff9500',
  topOperatorButton: '#999999',
  toggleBg: '#dddddd',
};

const darkTheme = {
  background: '#000000',
  text: '#ffffff',
  buttonBg: '#333333',
  operatorButton: '#ff9500',
  topOperatorButton: '#a5a5a5',
  toggleBg: '#333333',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    borderRadius: 25,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 48,
    textAlign: 'right',
  },
  buttonsContainer: {
    flex: 3,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginHorizontal: 5,
    
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default Calculator;