import { Thumbnail, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import AvUser from "../../../../assets/img_sistema/user.png";
import "moment/locale/es";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesInfo } from "../../../estilos/styleInfo";
import { LogBox } from "react-native";
import { TouchableOpacity } from "react-native";

export const InfoTecnico = (props) => {
  //const params = props.route.params;
  const navigation = props.navigation;

  const [state, setState] = useState({
    tec_id: props.route.params.id,
    nombre: props.route.params.nombre,
    apellido: props.route.params.apellido,
    cedula: props.route.params.cedula,
    telefono: props.route.params.telefono,
    correo: props.route.params.correo,
    direccion: props.route.params.direccion,
    contraseña: props.route.params.contraseña,
  });

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    console.log(state)
  }, []);

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
          <Text style={stylesInfo.subtitulo}>
            {state.nombre + " " + state.apellido}
          </Text>
        </View>
        <View style={stylesInfo.containerGeneral}>
          <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
            <View style={stylesInfo.containerColumn}>
              <Text style={stylesInfo.items}>Cédula:</Text>
              <Text style={stylesInfo.resp}>{state.cedula}</Text>
            </View>
            <View style={stylesInfo.containerColumn}>
              <Text style={stylesInfo.items}>Telefóno:</Text>
              <Text style={stylesInfo.resp}>{state.telefono}</Text>
            </View>
          </View>
          <View style={stylesInfo.container}>
            <Text style={stylesInfo.items}>Dirección:</Text>
            <Text style={stylesInfo.resp}>{state.direccion}</Text>
            <Text style={stylesInfo.items}>Correo:</Text>
            <Text style={stylesInfo.resp}>{state.correo}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={stylesInfo.btnActualizar}
            onPress={() =>
              navigation.navigate("ActualizarTecnico", { data: state })
            }
          >
            <Text style={stylesInfo.textBtn}>Actualizar Información</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
