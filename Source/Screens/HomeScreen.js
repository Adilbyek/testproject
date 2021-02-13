import React ,{useState} from 'react';
import {View, Button, Text} from 'react-native';
import MyButton from '../Button/MyButton';


export default function (props){
    return(
        <View>
            <Text>hi this is home page</Text>
            <MyButton title="sign in" onPress={() => props.navigation.navigate("Login") }/>
            <MyButton title="click me" onPress={() => console.log('clicked')}/>
        </View>
    );
}
