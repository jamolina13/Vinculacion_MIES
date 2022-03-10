import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

export const RecuperacionScreen = () => {

  const {nombre, id, isLogin} = useSelector(state => state.auth);
  console.log(nombre, id, isLogin)

  return (
    <View>
      <Text>Hola</Text>
      <Text>Hola {nombre} </Text>
      <Text>Hola {id} </Text>
    </View>
  )
}
