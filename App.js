import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos]= useState([
    {text: 'Buy Coffee', key: 1},
    {text: 'Complete Code Project', key: 2},
    {text: 'Create an app', key: 3},
    {text: 'Play on the switch', key: 4},
  ]);

  const pressHandler= (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key);
    })
  }

  const submitHandler = (text)=>{
    setTodos((prevTodos)=>{
      return[
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.contentMax}>
    <StatusBar backgroundColor='#fff2e6'/>
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      } }>
        <View style={styles.container}>
        
          {/*Header*/}
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.content}>
            {/* to Form */}
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    backgroundColor:'#fff2e6',
  },
  contentMax:{
    flex:1
  },
  content:
  {
    flex:1,
  },
  list:{
    flex:1,
    padding:24,
  },
  item:{
    padding:10,
  },
  header:
  {
    height:'5%',
    width:'100%',
  },

});
