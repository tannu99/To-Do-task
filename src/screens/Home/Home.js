import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GenericIcon from '../../components/GenericIcon';
import Task from '../../components/Task';
import {
  completeTask,
  handleAddTask,
  loginDataSelectors,
  logout,
} from '../../Redux/Login/loginSlice';
import {theme} from '../../Theme/theme';

export default function Home() {
  const dispatch = useDispatch();
  const [task, setTask] = useState();

  const {userData, list} = useSelector(loginDataSelectors.getData);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingTop: 16,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <GenericIcon
            name="logout"
            style={{
              fontSize: 23,
              color: 'black',
              padding: 12,
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            show={true}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>To-Do List</Text>

      <TextInput
        style={styles.input}
        placeholder={'Write a task'}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(handleAddTask(task)), setTask(null);
        }}
        style={{marginBottom: 10}}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>Add Task</Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {list && list.length
              ? list.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => dispatch(completeTask(index))}>
                      <Task text={item} />
                    </TouchableOpacity>
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
  },
  items: {
    marginTop: 30,
  },
  input: {
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginTop: 30,
    alignSelf: 'center',
  },
  addWrapper: {
    width: 250,
    height: 50,
    backgroundColor: theme.colors.modes.dark.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 30,
  },
});
