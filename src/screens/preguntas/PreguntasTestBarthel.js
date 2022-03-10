import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import bgImage from "../../../assets/img_sistema/fondo_login.jpg";
import { RadioButton } from "react-native-paper";

//import DatePicker from '@react-native-community/datetimepicker';
//https://snack.expo.io/@phattran1201/date-picker-example

const { width: WIDTH } = Dimensions.get("window");

export const PreguntasTestBarthel = (props) => {
  const [state, setState] = useState({
    nombresApellidos: "",
    cedula: "",
    telefono: "",
    correo: "",
    usuario: "",
    clave: "",
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
    //Ver y ocultar clave
    showPass: true,
    press: false,
  });

  const navigation = props.navigation;

  const registroUsuario = () => {
    //alert('OK');
    const { nombresApellidos } = state;
    const { cedula } = state;
    const { telefono } = state;
    const { correo } = state;
    const { usuario } = state;
    const { clave } = state;

    fetch("http://192.168.1.3/pruebas_react/registrarse.php", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        nombresApellidos: nombresApellidos,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        usuario: usuario,
        clave: clave,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { checked } = state;
  const { checked1 } = state;
  const { checked2 } = state;
  const { checked3 } = state;
  const { checked4 } = state;
  const { checked5 } = state;
  const { checked6 } = state;
  const { checked7 } = state;
  const { checked8 } = state;
  const { checked9 } = state;

  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.logoContainer}></View>
        <View style={styles.tituloContainer}>
          <Text style={styles.TituloLogin}>Indice de Barthel</Text>
        </View>
        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfo}>
            A continuación encontrará 10 ítems correspondientes a actividades
            básicas de la vida diaria. Lea en voz alta las alternativas
            pertenecientes a cada una de ellas y solicite a la persona evaluada
            que escoja la que más coincida con la realidad de la persona adulta
            mayor. La información se obtiene preguntando directamente al usuario
            o a su cuidador principal.
          </Text>
        </View>
        <View style={styles.tituloLabel}>
          <Text style={styles.label}>1. COMER.</Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>Incapaz.</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="dos"
                  status={checked === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Necesita ayuda para cortar, extender mantequilla, usar
                condimentos, etc.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="tres"
                  status={checked === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Independiente. (puede comer solo).
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            2. TRASLADARSE ENTRE LA SILLA Y LA CAMA.
          </Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>
                Incapaz, no se mantiene sentado.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="dos"
                  status={checked1 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Necesita ayuda importante (una persona entrenada o dos
                personas), puede estar sentado.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="tres"
                  status={checked1 === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Necesita algo de ayuda (una pequeña ayuda física o ayuda
                verbal).
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="cuatro"
                  status={checked1 === "cuatro" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: "cuatro" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Independiente. (puede comer solo).
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>3. ASEO PERSONAL.</Text>
        </View>
        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>
                Necesita ayuda con el aseo personal.
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="dos"
                  status={checked2 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked2: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Independiente para lavarse la cara, las manos y los dientes,
                peinarse y afeitarse.{" "}
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            4. USO DEL RETRETE (ESCUSADO, INODORO).
          </Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>Dependiente.</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="dos"
                  status={checked3 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked3: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Necesita alguna ayuda, pero puede hacer algo solo.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="tres"
                  status={checked3 === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Independiente (entrar y salir, limpiarse y vestirse).
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>5. BAÑARSE/DUCHARSE.</Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>Dependiente.</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="dos"
                  status={checked4 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked4: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Independiente para bañarse o ducharse.
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>6. DESPLAZARSE. </Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>Inmóvil. </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="dos"
                  status={checked5 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Independiente en silla de ruedas en 50 metros.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="tres"
                  status={checked5 === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Anda con pequeña ayuda de una persona (física o verbal).{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="cuatro "
                  status={checked5 === "cuatro " ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: "cuatro " });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Independiente al menos 50m con cualquier tipo de muleta excepto
                andador.{" "}
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>7. SUBIR Y BAJAR ESCALERAS. </Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>Incapaz. </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="dos"
                  status={checked6 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked6: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Necesita ayuda física o verbal puede llevar cualquier tipo de
                muleta.
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="tres"
                  status={checked6 === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked6: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Independiente para subir y bajar.
              </Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.tituloLabel}>
          <Text style={styles.label}>8. VESTIRSE O DESVERTIRSE. </Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>Dependiente. </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="dos"
                  status={checked7 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked7: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Necesita ayuda, pero puede hacer la mitad aproximadamente sin
                ayuda.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="tres"
                  status={checked7 === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked7: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Independiente incluyendo botones, cremalleras (cierres) y
                cordones.
              </Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.tituloLabel}>
          <Text style={styles.label}>9. CONTROL DE HECES. </Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>
                Incontinente, (o necesita que le suministren enema).
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="dos"
                  status={checked8 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked8: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Accidente excepcional (uno por semana).
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="tres"
                  status={checked8 === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked8: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>Continente.</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.tituloLabel}>
          <Text style={styles.label}>10. CONTROL DE ORINA. </Text>
        </View>

        <View style={styles.radioButton}>
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
              <Text style={styles.TextRadio1}>
                Incontinente o sondado incapaz de cambiarse la bolsa.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="dos"
                  status={checked9 === "dos" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked9: "dos" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Accidente excepcional (máximo uno por 24 horas).
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="tres"
                  status={checked9 === "tres" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked9: "tres" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Continente, durante al menos 7 días.{" "}
              </Text>
            </View>
          </RadioButton.Group>
        </View>

        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            style={styles.btnRegistrar}
            onPress={() => navigation.navigate("Test")}
          >
            <Text style={styles.text}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={() => navigation.navigate("TestBarthel")}
          >
            <Text style={styles.text}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    //alignItems: 'center',
    justifyContent: "center",
  },
  scrollView: {
    // backgroundColor: 'pink',
    //marginBottom : 10,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 40,
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
    marginTop: 30,
    alignItems: "center",
  },
  TituloLogin: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
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
  TextRadio1: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
    opacity: 0.5,
    textAlign: "justify",
    paddingRight: 35,
  },
  TextRadio2: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 8,
    opacity: 0.5,
    textAlign: "justify",
    paddingRight: 35,
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
    paddingLeft: 12,
    paddingRight: 30,
    textAlign: "justify",
    marginTop: 0,
    marginRight: 10,
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
