import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyCheckbox = ({ number }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.checkbox, checked ? styles.checked : styles.unchecked]}
      onPress={() => setChecked(!checked)}
    >
      <Text style={[styles.number, checked ? styles.checkedText : styles.uncheckedText]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 27, // Tamanho pequeno
    height: 25,
    borderWidth: 2,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#6200ee',
    borderColor: '#6200ee',
  },
  unchecked: {
    backgroundColor: 'transparent',
    borderColor: '#000',
  },
  number: {
    fontSize: 15, // Ajuste conforme necessário
    fontWeight: 'bold',
  },
  checkedText: {
    color: '#fff', // Número branco quando marcado
  },
  uncheckedText: {
    color: '#6200ee', // Número na cor principal quando desmarcado
  },
});

export default MyCheckbox;
