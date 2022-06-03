import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item,pressHandler}){
    return(
     <View style={styles.item}>
        <TouchableOpacity onPress={() => pressHandler(item.key) }>
            <MaterialIcons name='delete' size={18} color='#333'/>
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.text}</Text>
    </View>
        
    )
}

const styles =StyleSheet.create({
    item:{
        flexDirection:'row',
        width:'100%',
        padding:10,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        justifyContent:'space-between'
    },
    textItem:
    {
        marginLeft:10,
    }
})