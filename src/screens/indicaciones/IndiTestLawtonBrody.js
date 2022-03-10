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

export const IndiTestLawtonBrody = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.tituloContainer}>
        <Text style={styles.TituloLogin}>Instructivo.</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfo}>
          Puntuación total:
          <Text style={styles.hombre}> 8 </Text>puntos.
        </Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfotitu}>
          <Text style={styles.hombre}>Hombres</Text> /{" "}
          <Text style={styles.mujer}>Mujeres</Text>
        </Text>
      </View>

      <View style={{ marginLeft: 10 }}>
        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Dependencia Total:
            <Text style={styles.mujer}> 0-1 </Text> /
            <Text style={styles.hombre}> 0 </Text> puntos.
          </Text>
        </View>

        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Dependencia Grave:
            <Text style={styles.mujer}> 2-3 </Text> /
            <Text style={styles.hombre}> 1</Text> puntos
          </Text>
        </View>

        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Dependencia Moderada:
            <Text style={styles.mujer}> 4-5 </Text> /
            <Text style={styles.hombre}> 2-3 </Text> puntos
          </Text>
        </View>

        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Dependencia Ligera:
            <Text style={styles.mujer}> 6-7 </Text> /
            <Text style={styles.hombre}> 4 </Text>minutos
          </Text>
        </View>

        <View style={styles.tituloLabelItem}>
          <Text style={styles.TextInfo}>
            Autonomía:
            <Text style={styles.mujer}> 8 </Text> /
            <Text style={styles.hombre}> 5 </Text>minutos
          </Text>
        </View>

        <View style={styles.tituloLabelItemt}>
          <Text style={styles.TextInfot}>Tiempo de administración.</Text>
          <Text style={styles.TextInfot}> 4 - 10 minutos</Text>
        </View>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfotitu}>Normas de aplicación.</Text>
      </View>

      <View style={styles.tituloLabelparr}>
        <Text style={styles.TextInfoparr}>
          Evalúa la capacidad funcional mediante 8 ítems. A cada ítem se le
          asigna un valor numérico 1 (independiente) o 0 (dependiente). La
          puntación final es la suma del valor de todas las respuestas y oscila
          entre 0 (máxima dependencia) y 8 (independencia total).{" "}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.btnRegistrar}
          onPress={() => props.navigation.navigate("TestLawtonBrody")}
        >
          <Text style={styles.text}>Siguiente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCancelar}
          onPress={() => props.navigation.navigate("Test")}
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
    padding: 5,
  },
});
