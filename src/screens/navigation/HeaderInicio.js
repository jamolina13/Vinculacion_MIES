import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { ScrollView, LogBox, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../estilos/style";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-native-paper";
import { logout } from "../reducer/auth";
import { ListaAMScreen } from "../gestion/adultoMayor/ListaAMScreen";
import { ListaTecnicoScreen } from "../gestion/tecnico/ListaTecnicoScreen";

export const HeaderInicio = ({ navigation }) => {
  const { nombre, rol } = useSelector((state) => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.containerRow, { flexDirection: "row" }]}>
            <View style={styles.containerColumn1}>
              <TouchableOpacity
                onPress={() => navigation.navigate("InformacionUsuario")}
              >
                <Ionicons
                  name={"person"}
                  size={25}
                  color={"rgba(0,0,0,1)"}
                  style={([styles.inputIcon], { flexWrap: "wrap" })}
                >
                  <Text> Cuenta</Text>
                </Ionicons>
              </TouchableOpacity>
            </View>
            <View style={styles.containerColumn2}>
              <Text style={styles.title}>{nombre}</Text>
            </View>
            <View style={styles.containerColumn3}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Ionicons
                  name={"settings"}
                  size={25}
                  color={"rgba(0,0,0,1)"}
                  style={([styles.inputIcon], { flexWrap: "wrap" })}
                />
              </TouchableOpacity>
            </View>
          </View>
          {rol == "tecnico" ? (
            <ListaAMScreen></ListaAMScreen>
          ) : (
            <ListaTecnicoScreen></ListaTecnicoScreen>
          )}
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => dispatch(logout())}>
            <Ionicons name={"exit"} size={25} color={"rgba(0,0,0,1)"}>
              <Text style={styles.textModal}> Cerrar Sesión</Text>
            </Ionicons>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textModal}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
