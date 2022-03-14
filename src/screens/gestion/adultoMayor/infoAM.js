import { Thumbnail, Text } from "native-base";
import React, { useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import AvUser from "../../../../assets/img_sistema/user.png";
import "moment/locale/es";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesInfo } from "../../../estilos/styleInfo";
import { _ScrollView } from "react-native";
import { LogBox } from "react-native";

export const infoAM = ( props ) => {
  const params = props.route.params;
  const navigation = props.navigation;
  
  useEffect(() => {
    console.log(props.navigation.getState());
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
            {params.nombre + " " + params.apellido}
          </Text>
          <View style={stylesInfo.containerGeneral}>
            <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
              <View style={stylesInfo.containerColumn}>
              <Text style={stylesInfo.items}>Cédula:</Text>
              <Text style={stylesInfo.resp}>{params.cedula}</Text>
              </View>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Nacimiento:</Text>
                <Text style={stylesInfo.resp}>{params.fecha_nacimiento}</Text>
              </View>
            </View>
            <View style={stylesInfo.container}>
              <Text style={stylesInfo.items}>Dirección:</Text>
              <Text style={stylesInfo.resp}>{params.domicilio}</Text>
              <Text style={stylesInfo.items}>Autoidentificación:</Text>
              <Text style={stylesInfo.resp}>{params.autoidentificacion}</Text>
            </View>
            <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Género:</Text>
                <Text style={stylesInfo.resp}>{params.genero}</Text>
              </View>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Edad:</Text>
                <Text style={stylesInfo.resp}>{params.edad} Años</Text>
              </View>
            </View>
            <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>País de Origen:</Text>
                <Text style={stylesInfo.resp}>{params.origen}</Text>
              </View>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Registro:</Text>
                <Text style={stylesInfo.resp}>{params.registro}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={stylesInfo.btnActualizar}
            onPress={() =>
              navigation.replace("ActualizarAM", {
                id: params.id,
                nombre: params.nombre,
                apellido: params.apellido,
                cedula: params.cedula,
                domicilio: params.domicilio,
                autoidentificacion: params.autoidentificacion,
                genero: params.genero,
                edad: params.edad,
                origen: params.origen,
                registro: params.registro,
                nacimiento: params.fecha_nacimiento,
                navigation: navigation,
              })
            }
          >
            <Text style={stylesInfo.textBtn}>Actualizar Información</Text>
          </TouchableOpacity>
            <View>
          <TouchableOpacity
            style={stylesInfo.btnActualizar}
            onPress={() =>
              navigation.replace("HeaderInicio")
            }
          >
            <Text style={stylesInfo.textBtn}>Regresar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
