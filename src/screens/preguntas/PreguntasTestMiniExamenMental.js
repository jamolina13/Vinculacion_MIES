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
  Alert,
} from "react-native";
import bgImage from "../../../assets/img_sistema/fondo_login.jpg";
import { RadioButton } from "react-native-paper";
import moment from "moment";
import { useSelector } from "react-redux";
//import DatePicker from '@react-native-community/datetimepicker';
//https://snack.expo.io/@phattran1201/date-picker-example

const { width: WIDTH } = Dimensions.get("window");

export const PreguntasTestBarthel = (props) => {
  //const { id } = useSelector((state) => state.auth);
  //const TestBarthelRegistrados = props.route.params.PreguntasTestBarthel;
  const [state, setState] = useState({
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
    puntaje: 0,
    temp: "",
    estado: "1",
    fechaInicial: "",
    fechaFinal: "",
    time: "",
    datetimeStart: moment(new Date()),
  });

  const navigation = props.navigation;

  const calculartotal = (total) => {
    setState({
      temp: total,
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

  const { datetimeStart } = state;
  const datetimeEnd = moment(new Date());
  //fechas para enviar a la base de datos
  const fechaInicial = datetimeStart.format("HH:mm:ss");

  const fechaFinal = datetimeEnd.format("HH:mm:ss");

  const diferencia = moment(datetimeEnd).diff(datetimeStart, "seconds");
  //mostrar fecha inicial
  //console.log(fechaInicial);

  //mostrar fecha final
  //console.log(fechaFinal);

  var time = new Date();

  time.setHours(parseInt(diferencia / 3600) % 24);
  time.setMinutes(parseInt(diferencia / 60) % 60);
  time.setSeconds(parseInt(diferencia % 60));
  time = time.toTimeString().split(" ")[0];

  function validarFormulario(){
      
    let valor =0;

    let count =0;
    Object.keys(state).forEach(key => {
      
      if(key.substring(0, 7)=="checked"){

        if((state[key])!='' && count === 0){
          valor=valor+parseInt(state[key]);
          
        }else if ( (state[key])=='' && count === 0) {
          
          count=1;
          Alert.alert("MIES APP", "Existen campos sin llenar, por favor llene todos los campos", [
            {
              text: "Continuar",
              style: "destructive",
            },
          ]);
        }
      }
    });
    
    onsubmitGuardar()
  }


  const onsubmitGuardar = async () => {
    let valor =0;

    Object.keys(state).forEach(key => {
      
      if(key.substring(0, 7)=="checked"){
        if((state[key])!=''){
          valor=valor+parseInt(state[key]);
        } 
      }
    });

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
    const { estado } = state;

    try {
      const response = await fetch(
        "http://192.188.58.82:3000/guardarIndiceBarthel",
        {
          method: "POST",
          headers: {
            Accept: "Application/json",
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
            ef_id: 5,
            ib_p1_comer: checked,
            ib_p2_trasladarse: checked1,
            ib_p3_aseo_personal: checked2,
            ib_p4_uso_retrete: checked3,
            ib_p5_bañarse: checked4,
            ib_p6_desplazarse: checked5,
            ib_p7_escaleras: checked6,
            ib_p8_vestirse_desvertirse: checked7,
            ib_p9_control_heces: checked8,
            ib_p10_control_orina: checked9,
            ib_tiempo_inicial: fechaInicial,
            ib_tiempo_final: fechaFinal,
            ib_tiempo_total: time,
            ib_estado: estado,
            ib_puntaje_total: valor,
          }),
        }
      );
      console.log(valor)
      console.log(response.status);
      if (response.status == 200) {
        //const json = await response.json();
        Alert.alert("MIES APP", `puntaje total: ${valor}`, [
          {
            text: "Continuar",
            style: "destructive",
          },
        ]);
        //navigation.replace("HeaderInicio");

      } else {
        Alert.alert("MIES APP", "Ha existido un error", [
          {
            text: "Continuar",
            style: "destructive",
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                  value="0"
                  status={checked === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: "0" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>Incapaz.</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="5"
                  status={checked === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: "5" });
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
                  value="10"
                  status={checked === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: "10" });
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
                  value="0"
                  status={checked1 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: "0" });
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
                  value="5"
                  status={checked1 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: "5" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio2}>
                Necesita ayuda importante (una persona entrenada o 2 personas),
                puede estar sentado.{" "}
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="10"
                  status={checked1 === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: "10" });
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
                  value="15"
                  status={checked1 === "15" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: "15" });
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
                  value="0"
                  status={checked2 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked2: "0" });
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
                  value="5"
                  status={checked2 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked2: "5" });
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
                  value="0"
                  status={checked3 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked3: "0" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>Dependiente.</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="5"
                  status={checked3 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked3: "5" });
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
                  value="10"
                  status={checked3 === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked3: "10" });
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
                  value="0"
                  status={checked4 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked4: "0" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>Dependiente.</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="5"
                  status={checked4 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked4: "5" });
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
                  value="0"
                  status={checked5 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: "0" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>Inmóvil. </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="5"
                  status={checked5 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: "5" });
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
                  value="10"
                  status={checked5 === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: "10" });
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
                  value="15"
                  status={checked5 === "15" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: "15" });
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
                  value="0"
                  status={checked6 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked6: "0" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>Incapaz. </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="5"
                  status={checked6 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked6: "5" });
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
                  value="10"
                  status={checked6 === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked6: "10" });
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
                  value="0"
                  status={checked7 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked7: "0" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>Dependiente. </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ marginTop: 10 }}>
                <RadioButton
                  value="5"
                  status={checked7 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked7: "5" });
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
                  value="10"
                  status={checked7 === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked7: "10" });
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
                  value="0"
                  status={checked8 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked8: "0" });
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
                  value="5"
                  status={checked8 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked8: "5" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Accidente excepcional (1 por semana).
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="10"
                  status={checked8 === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked8: "10" });
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
                  value="0"
                  status={checked9 === "0" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked9: "0" });
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
                  value="5"
                  status={checked9 === "5" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked9: "5" });
                  }}
                />
              </View>
              <Text style={styles.TextRadio1}>
                Accidente excepcional (máximo 1 por 24 horas).
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value="10"
                  status={checked9 === "10" ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked9: "10" });
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
            onPress={validarFormulario}
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
