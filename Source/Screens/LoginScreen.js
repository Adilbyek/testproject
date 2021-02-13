import React , {useState} from "react";
import {View, Text, Alert, Image, StyleSheet, onChangeText, TextInput, Button} from 'react-native';
import MyButton from "../Button/MyButton";
import MyInput from "../Button/MyInput";
import MyTxt from "../Button/MyText";

const signedin =()=>{
    Alert.alert('you sigen in')
}
export default function(props){
    const [phone , setPhone]=useState('');
    const [password , setPassword]=useState('');
    return(
        <View>
            <Image style={{ width:'100%', height:'50%' }} source={require('../../assets/img/xcode.jpeg')}/>
            <MyInput keyboardType='number-pad' onChangeText={setPhone}/>
            <MyInput onChangeText={setPassword}/>
            <MyButton title='Singn Up' onPress={() => props.navigation.navigate("FlatScreen")} />
            <Text>phone=={phone}=password=={password}</Text>
        </View>
    );
};
