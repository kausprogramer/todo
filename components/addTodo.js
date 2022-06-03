import React,{useState} from 'react';
import { StyleSheet, Text, TextInput,Button, View} from 'react-native';

export default function AddTodo({submitHandler}) {
    const [text,setText]= useState('');

    const changeHandler= (val)=> {
        setText(val);   
    }
    return (
        <View style={styles.veiwCont}>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={()=> submitHandler(text)} title='add todo' color='#994d00'/>
        </View>

    )
}

const styles=StyleSheet.create({
    input: {
        width:'100%',
        marginTop:30,
        marginBottomm:10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor:'#994d00',
    },
    veiwCont:{
        marginHorizontal:50,
    }
})