import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MyCheckboxProps {
  number: number;
  isChecked: boolean;
  onPress: () => void;
}

const MyCheckbox: React.FC<MyCheckboxProps> = ({ number, isChecked, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
      onPress={onPress}
    >
      <Text style={[styles.number, isChecked ? styles.checkedText : styles.uncheckedText]}>
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
    borderRadius: 4,
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
