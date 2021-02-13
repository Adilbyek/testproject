import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import MyButton from "../components/MyButton";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={{ textAlign: "center", marginVertical: 20 }}>
        Амазон номын дэлгүүр
      </Text>

      <MyButton
        onPress={() => navigation.navigate("Login")}
        title="Логин дэлгэц"
      />
      <MyButton
        onPress={() => navigation.navigate("Flexbox")}
        title="Flexbox"
      />
      <MyButton onPress={() => navigation.navigate("List")} title="FlatList" />
      <MyButton
        onPress={() => navigation.navigate("CustomList")}
        title="CustomList"
      />
    </View>
  );
};

export default Home;
