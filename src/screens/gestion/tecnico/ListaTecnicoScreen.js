import {
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Button,
  View,
} from "native-base";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  LogBox,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import AvUser from "../../../../assets/img_sistema/user.png";
import { Ionicons } from "@expo/vector-icons";
import "moment/locale/es";
import { styles } from "../../../estilos/style";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const ListaTecnicoScreen = () => {
  const navigation = useNavigation();
  const { id } = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    search: "",
    listadoTecnicos: [],
  });
  const { search, listadoTecnicos } = values;

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  useEffect(() => {
    listadoTecnicosRequest();
    return () => {
      setValues({});
    };
  }, []);

  const listadoTecnicosRequest = async () => {
    try {
      const response = await fetch(
        "http://192.188.58.82:3000/tecnicoBySupId/" + id + "",
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setValues({
        ...values,
        listadoTecnicos: json,
        search: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  //BARRA DE BUSQUEDA//
  /******************/
  const renderHeader = () => {
    return (
      <View>
        <SearchBar
          round
          placeholder="Buscar"
          lightTheme
          onChangeText={(text) => searchAction(text)}
          onClear={(text) => cleansearchAction(text)}
          autoCorrect={false}
          value={search}
          containerStyle={{
            paddingTop: 10,
            paddingBottom: 10,
            //backgroundColor: "white",
          }}
          inputContainerStyle={{
            backgroundColor: "white",
            marginHorizontal: 5,
          }}
        />
        <View style={[styles.containerRow2, { flexDirection: "row" }]}>
          <View style={styles.containerColumn4}>
            <Text style={{ fontWeight: "bold" }}>Técnicos registrados</Text>
          </View>
          <View style={styles.containerColumn5}>
            <TouchableOpacity
              style={styles.btnRegistro}
              onPress={() => navigation.replace("RegistroTecnico", {tecnicosRegistrados: listadoTecnicos.length})}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Registrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <Text style={{ alignSelf: "center", marginVertical: 10 }}>
        {" "}
        Técnicos registrados: {listadoTecnicos.length}{" "}
      </Text>
    );
  };

  const searchAction = (text) => {
    if (text == "") {
      listadoTecnicosRequest();
      setValues({
        ...values,
        search: "",
      });
    } else {
      const newData = values.listadoTecnicos.filter((item) => {
        const itemData = `${item.tec_nombre + item.tec_apellido}`;
        const textData = text;
        console.log(itemData.indexOf(textData) > -1);
        return itemData.indexOf(textData) > -1;
      });
      setValues({
        ...values,
        listadoTecnicos: newData,
        search: text,
      });
    }
  };

  const cleansearchAction = (text) => {
      listadoTecnicosRequest();
  };

  return (
    <FlatList
      data={listadoTecnicos}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <ListItem
          thumbnail
          onPress={() =>
            navigation.navigate("ListadoPorTecnico", { id: item.tec_id, navigation: navigation })
          }
        >
          <Left>
            <Thumbnail square source={AvUser} />
          </Left>
          <Body>
            <Text style={styles.textoSuperior}>
              {item.tec_nombre + " " + item.tec_apellido}
            </Text>
            <Text note style={styles.texto}>
              <Text style={{ fontWeight: "bold" }}>Cédula: </Text>
              {item.tec_cedula}
            </Text>
            <Text note style={styles.texto}>
              <Text style={{ fontWeight: "bold" }}>Teléfono: </Text>
              {item.tec_telefono}
            </Text>
            <Text note style={styles.texto}>
              <Text style={{ fontWeight: "bold" }}>Correo: </Text>
              {item.tec_correo}
            </Text>
            <Text note style={styles.texto}>
              <Text style={{ fontWeight: "bold" }}>Dirección:</Text>{" "}
              {item.tec_direccion}
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() =>
                navigation.navigate("InformacionTecnico", {
                  id: item.tec_id,
                  nombre: item.tec_nombre,
                  apellido: item.tec_apellido,
                  cedula: item.tec_cedula,
                  telefono: item.tec_telefono,
                  correo: item.tec_correo,
                  direccion: item.tec_direccion,
                  contraseña: item.tec_contraseña,
                })
              }
            >
              <Ionicons
                name={"ios-eye-outline"}
                size={30}
                color={"rgba(0,0,0,1)"}
              />
            </Button>
          </Right>
        </ListItem>
      )}
      keyExtractor={(item, tec_id) => item + tec_id.toString()}
      ListFooterComponent={renderFooter}
    />
  );
};
