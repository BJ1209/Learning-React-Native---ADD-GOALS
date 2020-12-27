import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ id, text, deleteGoal }) => {
  return (
    <TouchableOpacity onPress={() => deleteGoal(id)}>
      <View style={styles.listItem}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ababab',
    color: '#fff',
    borderRadius: 5,
  },
});

export default GoalItem;
