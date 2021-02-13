import React, { useState } from "react";
import {View , Text, StyleSheet ,FlatList , TouchableOpacity, Alert} from "react-native";
import { randomHex } from "randomize-hex";
import MyButton from '../Button/MyButton';
import MyInput from '../Button/MyInput';

const FlatListScreen =()=>{
    const [phone , setPhone]=useState('');
    const [text , setNewText]=useState('');
    const [person , setPerson]=useState([
        {name: 'Adil', color:'#D63031'},
        {name: 'AdilBEK', color:'#AE1438'},
        {name: 'Adilbyek', color:'#74B9FF'},
        {name: 'Adilbek', color:'#26ae60'},
        {name: 'Adiljan', color:'#6A89CC'},
        {name: 'Adiljjan', color:'#AE1439'},
    ]);
    const handleclick= name =>{
        Alert.alert(`Сайн байна уу : ${name}`);
    };
    const addNewiItem =()=>{
        setPerson(person=>[...person, {name: text , color: randomHex() }]);
    }
    return(
        <View>
            <View>
                <Text>{phone}</Text>
            </View>
            <View style={css.addInput}>
                <MyInput style={css.addText} onChangeText={setNewText}/>
                <MyButton title="add" onPress={addNewiItem}/>
            </View>
            <FlatList keyExtractor={person => person.name} data={person} renderItem={({item , index})=>(
                <TouchableOpacity onPress={()=>handleclick(item.name)}> 
                    <View style={{backgroundColor:item.color, padding:20, marginHorizontal:10}}>
                        <Text>{index + 1} {item.name}</Text>
                    </View>
                </TouchableOpacity>
            )} />
        </View>
    )
}

export default FlatListScreen;

const css =StyleSheet.create({
    addInput:{
        flexDirection:'row',
        padding:20,
        justifyContent:'space-between',
        alignItems:'center',
    },
    addText:{
        width:'80%'
    }
})