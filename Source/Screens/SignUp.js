import React from 'react';
import {StyleSheet,View , Text , Button, TextInput} from 'react-native';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

export default function({navigation}){
    return(
        <View>
            <Text>Sign up</Text>
            <Text>Email</Text>
            <TextInput />
            <Button title='sign up' style={{flex:1, padding:20, fontSize:20, color:'#fff', backgroundColor:'red' }} onPress={()=> navigation.navigate('Home')} />
        </View>
    )
}

