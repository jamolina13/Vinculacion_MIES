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
import { FlatList, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import AvUser from "../../../../assets/img_sistema/user.png";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import "moment/locale/es";
import { styles } from "../../../estilos/style";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const ListaAMScreen = () => {
  const navigation = useNavigation();
  const { id } = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    search: "",
    listadoAM: [],
  });
  const { search, listadoAM } = values;

  useEffect(() => {
    listadoAdultosMayores();
    return () => {
      setValues({});
    };
  }, []);

  const listadoAdultosMayores = async () => {
    try {
      const response = await fetch(
        "http://192.188.58.82:3000/adultoMayorByIdTecnico/" + id + "",
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
        listadoAM: json,
        search: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  // const peticion = () => {
  //   fetch().then().then().finally().catch()
  // }

  const searchAction = (text) => {
    if (text !== "") {
      const newData = values.listadoAM.filter((item) => {
        const itemData = `${item.am_nombre + item.am_apellido}`;
        const textData = text;
        //console.log(itemData.indexOf(textData) > -1);
        return itemData.indexOf(textData) > -1;
      });
      //console.log(newData)
      setValues({
        ...values,
        listadoAM: newData,
        search: text,
      });
    } else {
      cleanSearchAction();
    }
  };

  const cleanSearchAction = () => {
    listadoAdultosMayores();
    //console.log(search);
  };

  //BARRA DE BUSQUEDA//
  const renderHeader = () => {
    return (
      <View>
        <SearchBar
          round
          placeholder="Buscar"
          lightTheme
          onChangeText={(text) => searchAction(text)}
          onClear={cleanSearchAction}
          autoCorrect={false}
          value={search}
          containerStyle={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
          inputContainerStyle={{
            backgroundColor: "white",
            marginHorizontal: 5,
          }}
        />
        <View style={[styles.containerRow2, { flexDirection: "row" }]}>
          <View style={styles.containerColumn4}>
            <Text style={{ fontWeight: "bold" }}>Adultos registrados</Text>
          </View>
          <View style={styles.containerColumn5}>
            <TouchableOpacity
              style={styles.btnRegistro}
              onPress={() => navigation.navigate("RegistrodoAdultoMayor")}
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
        Adultos mayores registrados: {listadoAM.length}{" "}
      </Text>
    );
  };

  return (
    <View>
      <FlatList
        data={listadoAM}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <ListItem
            thumbnail
            onPress={() =>
              navigation.navigate("Ubicacion", {
                id: item.am_id,
                nombre: item.am_nombre,
                apellido: item.am_apellido,
                cedula: item.am_cedula,
                domicilio: item.am_domicilio,
                autoidentificacion: item.am_autoidentificacion_etnica,
                genero: item.am_sexo,
                origen: item.am_pais_origen,
                registro: moment(item.am_fecha_registro).format("YYYY-MM-DD"),
                edad: moment().diff(item.am_fecha_de_nacimiento, "years"),
                fecha_nacimiento: moment(item.am_fecha_de_nacimiento).format(
                  "YYYY-MM-DD"
                ),
              })
            }
          >
            <Left>
              <Thumbnail square source={AvUser} />
            </Left>
            <Body>
              <Text style={styles.textoSuperior}>
                {item.am_nombre + " " + item.am_apellido}
              </Text>
              <Text note style={styles.texto}>
                <Text style={{ fontWeight: "bold" }}>Género: </Text>
                {item.am_sexo}
              </Text>
              <Text note style={styles.texto}>
                <Text style={{ fontWeight: "bold" }}>Domicilio: </Text>
                {item.am_domicilio}
              </Text>
              <Text note style={styles.texto}>
                <Text style={{ fontWeight: "bold" }}>Edad: </Text>
                {moment().diff(item.am_fecha_de_nacimiento, "years")}
              </Text>
              <Text note style={styles.texto}>
                <Text style={{ fontWeight: "bold" }}>Proximo Test:</Text>{" "}
                {moment(item.am_fecha_registro)
                  .locale("es")
                  .add(6, "months")
                  .format("MMMM, YYYY.")}
              </Text>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() =>
                  navigation.navigate("InformacionAM", {
                    id: item.am_id,
                    nombre: item.am_nombre,
                    apellido: item.am_apellido,
                    cedula: item.am_cedula,
                    domicilio: item.am_domicilio,
                    autoidentificacion: item.am_autoidentificacion_etnica,
                    genero: item.am_sexo,
                    edad: moment().diff(item.am_fecha_de_nacimiento, "years"),
                    origen: item.am_pais_de_origen,
                    registro: moment(item.am_fecha_registro).format(
                      "YYYY-MM-DD"
                    ),
                    fecha_nacimiento: moment(
                      item.am_fecha_de_nacimiento
                    ).format("YYYY-MM-DD"),
                    navigation: navigation,
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
        keyExtractor={(item, am_id) => item + am_id.toString()}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};
