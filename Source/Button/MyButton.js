import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function({ title, onPress, style, props }) {
  return (
    <View style={[css.button, style]}>
      <Button title={title} onPress={onPress} {...props} />
    </View>
  );
}

const css = StyleSheet.create({
  button: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius:50,
    backgroundColor:'#AE1439',
    color:"#fff"
  }
});