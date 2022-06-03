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
        flex:1,
        paddingTop:10,
        width:'100%',
        height: '100%',
        backgroundColor:'#994d00',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        FontWeight: 'bold',
    }
})