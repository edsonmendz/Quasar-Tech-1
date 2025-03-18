import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Sidebar = ({ closeMenu }) => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Posição inicial da sidebar

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // A sidebar vai para a posição 0, ou seja, visível
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <View style={styles.menu}>
        <TouchableOpacity onPress={closeMenu}>
          <Text style={styles.text}>Close Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Option 2</Text>
        </TouchableOpacity>
        {/* Mais opções */}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#6200ee',
    width: '80%',
    zIndex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menu: {
    marginTop: 50,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 15,
  },
});

export default Sidebar;
