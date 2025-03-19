import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MyCheckbox = ({number}) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.checkbox, checked && styles.checked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Text style={styles.checkmark}>{number}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 25, 
    height: 25,
    borderWidth: 2,
    borderColor: '#6200ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#6200ee',
  },
  checkmark: {
    fontSize: 15,
    color: '#fff'
  },
});

export default MyCheckbox;
