import { Content } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import lgLogin from "../../../assets/img_sistema/Mies_ec_gob.png";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const MenuScreen = (props) => {

  let params = props.route.params
  const navigation = props.navigation;

  useEffect(() => {
    console.log(params);
    return () => {
      params = "";
    };
  }, []);

  return (
    <>
      <Content padder style={styless.container}>
        <Image source={lgLogin} style={styless.logoLogin} />
        <TouchableOpacity
          style={styless.btn}
          onPress={() => navigation.navigate("Test", { params: params })}
        >
          <View>
            <Ionicons
              name="add-circle-outline"
              type="ionicon"
              color="white"
              size={30}
              style={styless.inputIcon}
            />
            <Text style={styless.textBtn}> Registrar Test</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styless.btn}>
          <View>
            <Ionicons
              name="document-text-outline"
              type="ionicon"
              color="white"
              size={30}
              style={styless.inputIcon}
            />
            <Text style={styless.textBtn}>Ver Registros</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styless.btn}>
          <View>
            <Ionicons
              name="document-text-outline"
              type="ionicon"
              color="white"
              size={30}
              style={styless.inputIcon}
            />
            <Text style={styless.textBtn}>Agregar datos</Text>
          </View>
        </TouchableOpacity>

        


        <TouchableOpacity
          style={styless.btnCancelar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styless.text}>Regresar</Text>
        </TouchableOpacity>
      </Content>
    </>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  btn: {
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 8,
    backgroundColor: "#0275d8",
    justifyContent: "center",
    marginTop: 10,
  },
  textBtn: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 28,
    marginLeft: 10,
  },
  inputIcon: {
    position: "absolute",
    top: 6,
    alignSelf: "flex-start",
  },
  btnCancelar: {
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#E74C3C",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});