import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export const IndiTestYesavage = (props) => {
  const navigation = props.navigation;
  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.tituloContainer}>
        <Text style={styles.TituloLogin}>Instructivo</Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfo}>
          Puntuación total:
          <Text style={styles.hombre}> 15 </Text>puntos.
        </Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfotitu}>Puntos de cortes:</Text>
      </View>

      <View style={{ marginLeft: 20 }}>
        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            No depresión:
            <Text style={styles.mujer}> 0 </Text> -
            <Text style={styles.hombre}> 5 </Text> puntos
          </Text>
        </View>

        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Probable depresión:
            <Text style={styles.mujer}> 6 </Text> -
            <Text style={styles.hombre}> 9</Text> puntos
          </Text>
        </View>

        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Depresión establecida:
            <Text style={styles.mujer}> 10 </Text> -
            <Text style={styles.hombre}> 15 </Text> puntos
          </Text>
        </View>

        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Tiempo de administración:
            <Text style={styles.mujer}>10 </Text> -
            <Text style={styles.hombre}> 15 </Text>minutos
          </Text>
        </View>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfotitu}>Normas de aplicación.</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfoparr}>
          El evaluador lee las preguntas al paciente sin realizar
          interpretaciones de los ítems y dejando claro al paciente que la
          respuesta no debe ser muy meditada. Las respuesta debe ser "si" o "no"
          y debe referirse a cómo se ha sentido el paciente la semana anterior.
        </Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.btnRegistrar}
          onPress={() => navigation.navigate("TestYesavage")}
        >
          <Text style={styles.text}>Siguiente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCancelar}
          onPress={() => navigation.navigate("Test")}
        >
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  scrollView: {
    // backgroundColor: 'pink',
    //marginBottom : 10,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 70,
  },
  logoLogin: {
    height: 150,
  },
  tituloContainer: {
    alignItems: "center",
    marginBottom: 0,
  },
  tituloLabel: {
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 30,
    marginTop: 0,
  },
  tituloLabelItem: {
    paddingRight: 35,
    marginBottom: 30,
    marginTop: 0,
  },
  TituloLogin: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
    justifyContent: "center",
  },
  TextInfotitu: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
    textAlign: "center",
  },
  TextInfoparr: {
    color: "black",
    fontSize: 15,
    marginTop: 0,
    lineHeight: 30,
    opacity: 0.5,
    textAlign: "justify",
  },
  TextInfo: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
    textAlign: "center",
  },
  mujer: {
    color: "red",
  },
  hombre: {
    color: "blue",
  },
  TextRadio: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
    textAlign: "justify",
  },
  label: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 0,
    //opacity: 0.5
    textAlign: "left",
  },
  inputContainer: {
    marginTop: 10,
  },
  radioButton: {
    paddingLeft: 35,
    paddingRight: 35,
    textAlign: "justify",
    marginTop: 0,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,1)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  inputIconDate: {
    position: "absolute",
    top: 5,
    left: 15,
  },
  inputIconDate2: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  btnEye: {
    position: "absolute",
    top: 85,
    right: 37,
  },
  forgot: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    paddingTop: 20,
  },
  btnRegistrar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#005DA6",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 30,
  },
  btnCancelar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    marginBottom: 20,
    backgroundColor: "#E74C3C",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "#ffff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
