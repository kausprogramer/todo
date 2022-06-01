import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItems({item}){
    return(
        <TouchableOpacity>
            <Text>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}