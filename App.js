import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/header';
import TodoItems from './components/todoItems';

export default function App() {
  const [todos, setTodos]= useState([
    {text: 'Buy Coffee', key: 1},
    {text: 'Complete Code Project', key: 2},
    {text: 'Create an app', key: 3},
    {text: 'Play on the switch', key: 4},
  ]);
  return (
    <View style={styles.container}>
      {/*Header*/}
      <Header />
      <View style={styles.content}>
        {/* to Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item})=>(
                <TodoItems item={items}/>
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
