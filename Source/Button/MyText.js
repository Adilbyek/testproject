import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';

export default function (props){
    console.log(props);
    return(
        <View>
            <TextInput placeholder="enters your number" muiltiLine={4}  autoCorrect={"false"} {...props} style={css.txtinput}  />
        </View>
    )
}

const css = StyleSheet.create({
    txtinput:{
        borderBottomWidth: 3,
        borderColor:'red',
        borderRadius:5
    }
})
