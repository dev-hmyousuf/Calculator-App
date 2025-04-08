// EquationSolverScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import nerdamer from 'nerdamer';
import 'nerdamer/Solve';

export default function EquationSolverScreen() {
  const [equation, setEquation] = useState('');
  const [solution, setSolution] = useState('');

  const solveEquation = () => {
    try {
      const result = nerdamer.solveEquations(equation).toString();
      setSolution(result);
    } catch (err) {
      setSolution('Invalid Equation or Format');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Equation Solver</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter equation like 2x + 3 = 7"
        onChangeText={setEquation}
        value={equation}
      />

      <Button title="Solve" onPress={solveEquation} />

      <Text style={styles.resultLabel}>Solution:</Text>
      <Text style={styles.solution}>{solution}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexGrow: 1,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 16,
  },
  resultLabel: {
    marginTop: 20,
    color: '#bbb',
    fontSize: 16,
  },
  solution: {
    color: '#0f0',
    fontSize: 20,
    marginTop: 8,
  },
});