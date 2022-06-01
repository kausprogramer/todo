import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
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

  return (
    <View style={styles.container}>
      {/*Header*/}
      <Header />
      <View style={styles.content}>
        {/* to Form */}
        <AddTodo/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler} />
            )}
          
          />
        </View>
      </View>

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
  },
  list:{
    padding:24,
  },
  item:{
    padding:10,
  }

});
