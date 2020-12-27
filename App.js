import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (input) => {
    if (input) {
      setGoalList((goalList) => [
        ...goalList,
        {
          key: Math.floor(Math.random() * 1500000).toString(),
          text: input,
        },
      ]);
    }
  };

  const deleteGoalHandler = (id) => {
    setGoalList((goals) => goals.filter((goal) => goal.key !== id));
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler} />
      <FlatList
        data={goalList}
        renderItem={({ item }) => (
          <GoalItem id={item.key} deleteGoal={deleteGoalHandler} text={item.text} />
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});
