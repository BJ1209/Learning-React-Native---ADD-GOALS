import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

const GoalInput = ({ addGoal }) => {
  const [input, setInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const addHandler = () => {
    addGoal(input);
    setInput('');
    setModalVisible(false);
  };

  const resetModal = () => {
    setInput(''), setModalVisible(false);
  };

  return (
    <View>
      <Button
        title="Add a Goal"
        color="#841584"
        style={styles.openBtn}
        accessi
        bilityLabel="Learn more about this purple button"
        onPress={() => setModalVisible(true)}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.ceneteredView}>
          <View style={styles.modalView}>
            <View style={styles.addGoalView}>
              <TextInput
                style={styles.textInput}
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder="Enter your goal here..."
              />
              <View style={styles.modalBtn}>
                <View style={styles.btn}>
                  <Button color="red" title="Cancel" onPress={resetModal} />
                </View>
                <View style={styles.btn}>
                  <Button
                    disabled={!input}
                    title="Add"
                    style={styles.button}
                    onPress={addHandler}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ceneteredView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
    elevation: 5,
  },
  addGoalView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginRight: 10,
  },
  modalBtn: {
    marginTop: 10,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  openBtn: {
    backgroundColor: '#151511',
  },
  btn: {
    width: '40%',
  },
});

export default GoalInput;
