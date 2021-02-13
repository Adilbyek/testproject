import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default function (props){
    return(
        <View>
            <TextInput {...props} style={css.input}  />
        </View>
    )
}
const css = StyleSheet.create({
    input:{
        marginHorizontal:20,
        marginVertical:10,
        color:'black',
        fontSize:18,
        borderBottomColor:'grey',
        borderBottomWidth:2,
        borderBottomEndRadius:4
    }
})