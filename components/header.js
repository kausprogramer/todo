import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}> My Todos</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header:{
        width:'100%',
        height: '100%',
        paddingTop:40,
        backgroundColor:'coral',
    },
    title: {
        paddingTop:'22%',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        FontWeight: 'bold',
    }
})