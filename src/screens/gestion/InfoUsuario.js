import { Thumbnail, Text } from "native-base";
import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import AvUser from "../../../assets/img_sistema/user.png";
import "moment/locale/es";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { stylesInfo } from "../../estilos/styleInfo";
import { LogBox } from "react-native";

export const InfoUsuario = () => {
  const { nombre, apellido, cedula, telefono, correo, direccion } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              alignItems: "center",
              paddingTop: 30,
              paddingBottom: 10,
            }}
          >
            <Thumbnail
              square
              source={AvUser}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <Text style={stylesInfo.subtitulo}>{nombre + " " + apellido}</Text>
        </View>
        <View style={stylesInfo.containerGeneral}>
          <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
            <View style={stylesInfo.containerColumn}>
              <Text style={stylesInfo.items}>Cédula:</Text>
              <Text style={stylesInfo.resp}>{cedula}</Text>
            </View>
            <View style={stylesInfo.containerColumn}>
              <Text style={stylesInfo.items}>Telefóno:</Text>
              <Text style={stylesInfo.resp}>{telefono}</Text>
            </View>
          </View>
          <View style={stylesInfo.container}>
            <Text style={stylesInfo.items}>Dirección:</Text>
            <Text style={stylesInfo.resp}>{direccion}</Text>
            <Text style={stylesInfo.items}>Correo:</Text>
            <Text style={stylesInfo.resp}>{correo}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};