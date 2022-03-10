import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { RadioButton } from "react-native-paper";

const { width: WIDTH } = Dimensions.get("window");

export const PreguntasTestMiniExamenMental = (props) => {
  const [state, setState] = useState({
    /*  nombresApellidos: "",
      cedula: "",
      telefono: "",
      correo: "",
      usuario: "",
      clave: "", */
    checked: "",
    checked1: "",
    checked2: "",
    checked3: "",
    checked4: "",
    checked5: "",
    checked6: "",
    checked7: "",
    checked8: "",
    checked9: "",
    checked10: "",
    checked11: "",
    checked12: "",
    checked13: "",
    checked14: "",
    checked15: "",
    checked16: "",
    checked17: "",
    checked18: "",
    checked19: "",
    checked20: "",
    checked21: "",
    checked22: "",
    checked23: "",
    checked24: "",
    checked25: "",
    checked26: "",
    checked27: "",
    checked28: "",
    checked29: "",
    date: null,
    dt: null,
    registrationDate: "",

    //Ver y ocultar clave
    showPass: true,
    press: false,
  });

  const {checked} = state;
  const {checked1} = state;
  const {checked2} = state;
  const {checked3} = state;
  const {checked4} = state;
  const {checked5} = state;
  const {checked6} = state;
  const {checked7} = state;
  const {checked8} = state;
  const {checked9} = state;
  const {checked10} = state;
  const {checked11} = state;
  const {checked12} = state;
  const {checked13} = state;
  const {checked14} = state;
  const {checked15} = state;
  const {checked16} = state;
  const {checked17} = state;
  const {checked18} = state;
  const {checked19} = state;
  const {checked20} = state;
  const {checked21} = state;
  const {checked22} = state;
  const {checked23} = state;
  const {checked24} = state;
  const {checked25} = state;
  const {checked26} = state;
  const {checked27} = state;
  const {checked28} = state;
  const {checked29} = state;

  /* const registroUsuario = () => {
    //alert('OK');
    const { nombresApellidos } = state;
    const { cedula } = state;
    const { telefono } = state;
    const { correo } = state;
    const { usuario } = state;
    const { clave } = state;

    fetch('http://192.168.100.6/pruebas_react/registrarse.php', {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        nombresApellidos: nombresApellidos,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        usuario: usuario,
        clave: clave
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      }).catch((error) => {
        console.log(error);
      });

  }
 */

  return (
    <ScrollView style={styles.scrollView}>
      <View tyle={styles.tituloContainer1}>
        <Text style={styles.TituloLogin}>Mini Examen del</Text>
        <Text style={styles.TituloLogin}> Estado Mental</Text>
      </View>
      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Orientación en el Tiempo</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>En qué Día estamos (fecha):</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>
            <View>
              <RadioButton
                value="dos"
                status={checked === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto)</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>En qué mes:</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked1: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked1 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked1: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>
            <View>
              <RadioButton
                value="dos"
                status={checked1 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked1: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>En qué año:</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked2: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked2 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked2: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>
            <View>
              <RadioButton
                value="dos"
                status={checked2 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked2: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>En qué día de la semana </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked3: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked3 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked3: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked3 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked3: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>¿Qué hora es aproximadamente? </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked4: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked4 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked4: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked4 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked4: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Orientación en el Espacio</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>¿En qué lugar estamos ahora? </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked5: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked5 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked5: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked5 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked5: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>
          ¿En qué piso o departamento estamos ahora?{" "}
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked6: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked6 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked6: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked6 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked6: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>¿Qué barrio o parroquia es este?</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked7: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked7 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked7: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked7 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked7: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>¿En qué ciudad estamos? </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked8: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked8 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked8: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked8 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked8: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>¿En qué país estamos?</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked9: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked9 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked9: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked9 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked9: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Memoria</Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfo}>
          CONSIGNA: “Le voy a decir el nombre de tres objetos, cuando yo termine
          quiero que por favor usted los repita”.
        </Text>
        <Text style={styles.TextInfo1}>
          *Pronuncie claramente las palabras, una cada segundo, luego pídale a
          persona adulta mayor, que las repita. Otorgue un punto por cada
          respuesta correcta. Se repiten las palabras hasta que la persona se
          las aprenda (máx. 6 ensayos) pero únicamente se puntúa la primera
          repetición o ensayo.
        </Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Papel</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked10: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked10 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked10: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked10 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked10: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Bicicleta</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked11: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked11 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked11: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked11 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked11: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Cuchara</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked12: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked12 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked12: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked12 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked12: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Atención y Calculo</Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfo}>
          CONSIGNA: “Le voy a pedir que reste de 7 en 7 a partir del 100”.
        </Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>93</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked13: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked13 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked13: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked13 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked13: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>86</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked14: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked14 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked14: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>
            <View>
              <RadioButton
                value="dos"
                status={checked14 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked14: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>79</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked15: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked15 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked15: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked15 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked15: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>72</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked16: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked16 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked16: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked16 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked16: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>65</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked17: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked17 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked17: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked17 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked17: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Memoria Diferida</Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfo}>
          CONSIGNA: “Dígame los 3 objetos que le mencioné al principio”.
        </Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Papel</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked18: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked18 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked18: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked18 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked18: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Bicicleta</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked19: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked19 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked19: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked19 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked19: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Cuchara</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked20: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked20 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked20: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked20 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked20: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Denominación</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>
          Mostrarle un lápiz o un bolígrafo y preguntar ¿qué es esto?
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked21: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked21 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked21: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>
            <View>
              <RadioButton
                value="dos"
                status={checked21 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked21: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>
          Mostrarle un reloj y preguntar ¿qué es esto?
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked22: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked22 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked2: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked22 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked22: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Repetición de una Frase</Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfo}>
          CONSIGNA: “Ahora le voy a decir una frase que tendrá que repetir
          después de mí. Solo se la puedo decir una vez, así que ponga mucha
          atención”.
        </Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>"ni sí, ni no, ni pero”</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked23: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked23 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked23: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked23 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked23: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>
          Comprensión - Ejecución de Orden
        </Text>
      </View>
      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>de Orden</Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.TextInfo}>
          CONSIGNA: “Le voy a dar unas instrucciones. Por favor sígalas en el
          orden en que las voy a decir. Solo las puedo decir una vez”:
        </Text>
        <Text style={styles.TextInfo1}>
          “TOME ESTE PAPEL CON LA MANO DERECHA, DÓBLELO POR LA MITAD Y DÉJELO EN
          EL SUELO”
        </Text>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Tome este papel con la mano derecha</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked24: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked24 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked24: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked24 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked24: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Dóblelo por la mitad</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked25: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked25 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked25: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked25 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked25: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.tituloLabel}>
        <Text style={styles.label}>Déjelo en suelo</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked26: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked26 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked26: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked26 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked26: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Lectura</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>
          Escriba legiblemente en un papel "cierre los ojos". Pídale a la
          persona adulta mayor que lo lea y que haga lo que dice la frase
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked27: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked27 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked25: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked27 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked27: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Escritura</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>
          CONSIGNA: “Quiero que por favor escriba una frase que diga un mensaje”
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked28: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked28 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked28: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked28 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked28: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.tituloContainer}>
        <Text style={styles.TituloSeccion}>Copia de un Dibujo</Text>
      </View>

      <View style={styles.tituloLabel}>
        <Text style={styles.label}>
          “Copie por favor este dibujo tal como está”
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <RadioButton.Group
          onValueChange={(v) => {
            setState({ ...state, checked29: v });
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <RadioButton
                value="uno"
                status={checked29 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked29: "uno" });
                }}
              />
            </View>
            <Text style={styles.TextRadio1}>0 (Incorrecto)</Text>

            <View>
              <RadioButton
                value="dos"
                status={checked29 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked29: "dos" });
                }}
              />
            </View>
            <Text style={styles.TextRadio2}>1 (Correcto) </Text>
          </View>
        </RadioButton.Group>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={styles.btnRegistrar}
          onPress={() => props.navigation.navigate("Test")}
        >
          <Text style={styles.text}>Guardar</Text>
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
    //alignItems: 'center',
    justifyContent: "center",
    paddingTop: 20,
  },

  scrollView: {
    // backgroundColor: 'pink',
    //marginBottom : 10,
    marginBottom: 0,
  },
  logoContainer: {
    alignItems: "center",
    //marginBottom: 10,
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
    marginBottom: 10,
    marginTop: 10,
  },
  TituloLogin: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    //marginTop: 0,
    opacity: 0.5,
    textAlign: "center",
  },
  TituloSeccion: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    //opacity: 0.5,
    justifyContent: "center",
  },
  TextInfo: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
    textAlign: "justify",
  },
  TextInfo1: {
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
    marginTop: 0,
    opacity: 0.5,
    textAlign: "justify",
  },
  TextRadio: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
    textAlign: "justify",
  },
  TextRadio1: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
    opacity: 0.5,
    textAlign: "justify",
    marginRight: 50,
  },
  TextRadio2: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
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
    alignItems: "center",
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
    width: 160,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#005DA6",
    justifyContent: "center",
    marginTop: 20,
  },
  btnCancelar: {
    width: 160,
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
