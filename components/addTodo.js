import React,{useState} from 'react';
import { StyleSheet, Text, TextInput,Button, View} from 'react-native';

export default function AddTodo() {
    const [Text,setText]= useState('');

    const changeHandler= (val)=> {
        setText(val);
    }
    return (
        <View>
            <TextInput
            style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPres={()=> submitHandler(text)} title='add todo' color='coral'/>
        </View>

    )
}

const styles=StyleSheet.create({
    input: {
        width:'100%',
        marginTop:30,
        marginBottomm:10,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth: 1,
        borderBottomColor:'#ddd',
    }
})