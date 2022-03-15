import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import bgImage from "../../../assets/img_sistema/fondo_login.jpg";
import { RadioButton } from "react-native-paper";
import moment from "moment";
const { width: WIDTH } = Dimensions.get("window");

export const PreguntasTestLawtonBrody = (props) => {
  const [values, setValues] = useState({
    listadoL: [],
  });
  const { listadoL } = values;
  const [state, setState] = useState({
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
    checked30: "",
    checked31: "",
    cero: 0,
    uno: 1,
    puntaje: 0,
    temp: "",
    estado: "1",
    fechaInicial: "",
    fechaFinal: "",
    time: "",
    datetimeStart: moment(new Date()),

    //Ver y ocultar clave
    showPass: true,
    press: false,
  });

  const navigation = props.navigation;
  const params = props.route.params;
  const enc_id = params.enc_id;

  const calculartotal = (total) => {
    setState({
      temp: total,
    });
  };
/*
  useEffect(() => {
    Lawton();
    return () => {
      setValues({});
    }
  }, [state.isReady]);

  const Lawton = async () => {

    try {
      const LawtonBrody = await fetch(
        "http://192.188.58.82:3000/consultaEscalaLawtonBrody",
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        });
      const json = await LawtonBrody.json();
      setValues({
        ...values,
        listadoL: json,
        isReady: true,
        refreshing: false,
      });

    } catch (error) {
      console.error(error);
    }
  };

  const idLawton = listadoL.length + 1;
*/
  const { checked1 } = state;
  const { checked2 } = state;
  const { checked3 } = state;
  const { checked4 } = state;
  const { checked5 } = state;
  const { checked6 } = state;
  const { checked7 } = state;
  const { checked8 } = state;
  const { checked9 } = state;
  const { checked10 } = state;
  const { checked11 } = state;
  const { checked12 } = state;
  const { checked13 } = state;
  const { checked14 } = state;
  const { checked15 } = state;
  const { checked16 } = state;
  const { checked17 } = state;
  const { checked18 } = state;
  const { checked19 } = state;
  const { checked20 } = state;
  const { checked21 } = state;
  const { checked22 } = state;
  const { checked23 } = state;
  const { checked24 } = state;
  const { checked25 } = state;
  const { checked26 } = state;
  const { checked27 } = state;
  const { checked28 } = state;
  const { checked29 } = state;
  const { checked30 } = state;
  const { checked31 } = state;


  //CALCULO DE TIEMPO DE APLICACIÓN
  const { datetimeStart } = state;
  const datetimeEnd = moment(new Date());
  //fechas para enviar a la base de datos
  const fechaInicial = datetimeStart.format("HH:mm:ss");
  const fechaFinal = datetimeEnd.format("HH:mm:ss");
  const diferencia = moment(datetimeEnd).diff(datetimeStart, "seconds");
  var time = new Date();

  time.setHours(parseInt(diferencia / 3600) % 24);
  time.setMinutes(parseInt(diferencia / 60) % 60);
  time.setSeconds(parseInt(diferencia % 60));
  time = time.toTimeString().split(" ")[0];

  function validarFormulario() {

    let valor = 0;

    let count = 0;
    Object.keys(state).forEach(key => {

      if (key.substring(0, 7) == "checked") {

        if ((state[key]) != '' && count === 0) {
          valor = valor + parseInt(state[key]);

        } else if ((state[key]) == '' && count === 0) {

          count = 1;
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
    let valor = 0;

    Object.keys(state).forEach(key => {

      if (key.substring(0, 7) == "checked") {

        if ((state[key]) != '') {
          valor = valor + parseInt(state[key].charAt(0));
          console.log(key + " " + valor);
        }
      }
    });

    const { checked1 } = state;
    const { checked2 } = state;
    const { checked3 } = state;
    const { checked4 } = state;
    const { checked5 } = state;
    const { checked6 } = state;
    const { checked7 } = state;
    const { checked8 } = state;
    const { checked9 } = state;
    const { checked10 } = state;
    const { checked11 } = state;
    const { checked12 } = state;
    const { checked13 } = state;
    const { checked14 } = state;
    const { checked15 } = state;
    const { checked16 } = state;
    const { checked17 } = state;
    const { checked18 } = state;
    const { checked19 } = state;
    const { checked20 } = state;
    const { checked21 } = state;
    const { checked22 } = state;
    const { checked23 } = state;
    const { checked24 } = state;
    const { checked25 } = state;
    const { checked26 } = state;
    const { checked27 } = state;
    const { checked28 } = state;
    const { checked29 } = state;
    const { checked30 } = state;
    const { checked31 } = state;
    const { estado } = state;


    try {

      const response = await fetch(
        "http://192.188.58.82:3000/guardarEscalaLawtonBrody",
        {
          method: "POST",
          headers: {
            Accept: "Application/json",
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
            ef_id: enc_id,
            elb_usar_telefono_op1: checked1,
            elb_usar_telefono_op2: checked2,
            elb_usar_telefono_op3: checked3,
            elb_usar_telefono_op4: checked4,
            elb_hacer_compras_op1: checked5,
            elb_hacer_compras_op2: checked6,
            elb_hacer_compras_op3: checked7,
            elb_hacer_compras_op4: checked8,
            elb_preparar_comida_op1: checked9,
            elb_preparar_comida_op2: checked10,
            elb_preparar_comida_op3: checked11,
            elb_preparar_comida_op4: checked12,
            elb_cuidado_casa_op1: checked13,
            elb_cuidado_casa_op2: checked14,
            elb_cuidado_casa_op3: checked15,
            elb_cuidado_casa_op4: checked16,
            elb_cuidado_casa_op5: checked17,
            elb_lavar_ropa_op1: checked18,
            elb_lavar_ropa_op2: checked19,
            elb_lavar_ropa_op3: checked20,
            elb_uso_transporte_op1: checked21,
            elb_uso_transporte_op2: checked22,
            elb_uso_transporte_op3: checked23,
            elb_uso_transporte_op4: checked24,
            elb_uso_transporte_op5: checked25,
            elb_medicacion_op1: checked26,
            elb_medicacion_op2: checked27,
            elb_medicacion_op3: checked28,
            elb_utiliza_dinero_op1: checked29,
            elb_utiliza_dinero_op2: checked30,
            elb_utiliza_dinero_op3: checked31,
            elb_tiempo_inicial: fechaInicial,
            elb_tiempo_final: fechaFinal,
            elb_tiempo_total: time,
            elb_estado: estado,
            elb_puntaje_total: valor,
          }),
        }
      )
      console.log(response.status);
      if (response.status == 200) {
        //const json = await response.json();
        console.log("idLawton: " + enc_id)
        navigation.navigate("Test", {
          idLawton: enc_id,
        });
        Alert.alert("Datos correctamente guardados", `puntaje total: ${valor}`, [
          {
            text: "Continuar",
            style: "destructive",
          },
        ]);


      }
      else {
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
    <ScrollView>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}></View>
        <View tyle={styles.tituloContainer1}>
          <Text style={styles.TituloLogin1}>Escala de Lawton y Brody</Text>
        </View>

        <View style={styles.tituloContainer}>
          <Text style={styles.TituloLogin}>Instrucciones</Text>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfo}>
            A continuación encontrará 8 ítems correspondientes a actividades
            instrumentales de la vida diaria.
          </Text>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>
            1. CAPACIDAD PARA USAR EL TELEFONO:
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked1: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Utiliza el teléfono por iniciativa propia
              </Text>
              <RadioButton
                value="1A"
                status={checked1 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked1: "1A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Es capaz de marcar bien algunos números familiares
              </Text>
              <RadioButton
                value="1B"
                status={checked1 === "1B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked1: "1B" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Es capaz de contestar al teléfono, pero no de marcar
              </Text>
              <RadioButton
                value="1C"
                status={checked1 === "1C" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked1: "1" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>No utiliza el teléfono</Text>
              <RadioButton
                value="0A"
                status={checked1 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked1: "0A" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>2. HACER COMPRAS:</Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked2: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Realiza todas las compras necesarias independientemente
              </Text>
              <RadioButton
                value="1A"
                status={checked2 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked2: "1A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Realiza independientemente pequeñas compras
              </Text>
              <RadioButton
                value="0A"
                status={checked2 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked2: "0A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Necesita ir acompañado para cualquier compra
              </Text>
              <RadioButton
                value="0B"
                status={checked2 === "0B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked2: "0B" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Totalmente incapaz de comprar
              </Text>
              <RadioButton
                value="0C"
                status={checked2 === "0C" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked2: "0C" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>3. PREPARACIÓN DE LA COMIDA</Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked3: v });
            }}
          >
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Organiza, prepara y sirve las comidas por si solo adecuadamente
              </Text>
              <RadioButton
                value="1A"
                status={checked3 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked3: "1A" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Prepara adecuadamente las comidas si se le proporcionan los
                ingredientes
              </Text>
              <RadioButton
                value="0A"
                status={checked3 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked3: "0A" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Prepara, calienta y sirve las comidas, pero no sigue una dieta
                adecuada
              </Text>
              <RadioButton
                value="0B"
                status={checked3 === "0B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked3: "0B" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>
                Necesita que le preparen y sirvan las comidas
              </Text>
              <RadioButton
                value="0C"
                status={checked3 === "0C" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked3: "0C" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>4. CUIDADO DE LA CASA</Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked4: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio2}>
                Mantiene la casa solo o con ayuda ocasional ( para trabajos
                pesados){" "}
              </Text>
              <RadioButton
                value="1A"
                status={checked4 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked4: "1A" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Realiza tareas ligeras, como lavar los platos o hacer las camas{" "}
              </Text>
              <RadioButton
                value="1B"
                status={checked4 === "1B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked4: "1B" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Realiza tareas ligeras, pero no puede mantener un adecuado nivel
                de limpieza
              </Text>
              <RadioButton
                value="1C"
                status={checked4 === "1C" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked4: "1C" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>
                Necesita ayuda en todas las labores de casa
              </Text>
              <RadioButton
                value="1D"
                status={checked4 === "1D" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked4: "1D" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                No participa en ninguna labor de la casa
              </Text>
              <RadioButton
                value="0A"
                status={checked4 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked4: "0A" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>5. LAVADO DE LA ROPA</Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked5: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Lava por sí solo toda la ropa
              </Text>
              <RadioButton
                value="1A"
                status={checked5 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked5: "1A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Lava por sí solo pequeñas prendas{" "}
              </Text>
              <RadioButton
                value="1B"
                status={checked5 === "1B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked5: "1B" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Todo el lavado de ropa debe ser realizado por otro
              </Text>
              <RadioButton
                value="0A"
                status={checked5 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked5: "0A" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>6. USO DE MEDIOS DE TRANSPORTE</Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked6: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Viaja solo en transporte público o conduce su propio coche
              </Text>
              <RadioButton
                value="1A"
                status={checked6 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked6: "1A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio2}>
                Es capaz de coger un taxi, pero no usa otro medio de transporte
              </Text>
              <RadioButton
                value="1B"
                status={checked6 === "1B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked6: "1B" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Viaja en transporte público cuando va acompañado por otra
                persona
              </Text>
              <RadioButton
                value="1C"
                status={checked6 === "1C" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked6: "1C" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>
                Utiliza el taxi o el automóvil sólo con la ayuda de otros{" "}
              </Text>
              <RadioButton
                value="0A"
                status={checked6 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked6: "0A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>No viaja </Text>
              <RadioButton
                value="0B"
                status={checked6 === "0B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked6: "0B" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>
            7. RESPONSABILIDAD RESPECTO A SU MEDICACIÓN
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked7: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Es capaz de tomar su medicación a la dosis y hora adecuada
              </Text>
              <RadioButton
                value="1A"
                status={checked7 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked7: "1A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Toma su medicación si la dosis es preparada previamente
              </Text>
              <RadioButton
                value="0A"
                status={checked7 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked7: "0A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                No es capaz de administrarse su medicación
              </Text>
              <RadioButton
                value="0B"
                status={checked7 === "0B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked7: "0B" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.TextInfor}>
            8. CAPACIDAD PARA UTILIZAR DINERO
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <RadioButton.Group
            onValueChange={(v) => {
              setState({ ...state, checked8: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Se encarga de sus asuntos económicos por si solo
              </Text>
              <RadioButton
                value="1A"
                status={checked8 === "1A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked8: "1A" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio2}>
                Realiza las compras de cada día, pero necesita ayuda con las
                grandes compras y en los bancos{" "}
              </Text>
              <RadioButton
                value="1B"
                status={checked8 === "1B" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked8: "1B" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>Incapaz de manejar dinero</Text>
              <RadioButton
                value="0A"
                status={checked8 === "0A" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ ...state, checked8: "0A" });
                }}
              />
            </View>
          </RadioButton.Group>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={styles.loginBtn2}
            onPress={() => validarFormulario()}
          >
            <Text style={styles.textBoton}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBtn3}
            onPress={() => props.navigation.navigate("Test")}
          >
            <Text style={styles.textBoton}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: 2,
  },

  logoLogin: {
    height: 110,
  },
  tituloContainer1: {
    alignItems: "center",
    marginBottom: 50,
  },
  tituloLabel1: {
    alignItems: "center",
    marginBottom: 50,
    textAlign: "center",
    justifyContent: "center",
  },
  TituloLogin1: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  TituloLogin: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 0,
  },
  TextInfo: {
    color: "black",
    marginTop: 0,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "justify",
  },
  TextInfor: {
    color: "black",
    marginTop: 0,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "justify",
    fontWeight: "bold",
    marginTop: 10,
  },

  radios: {
    left: 10,
  },

  radios2: {
    left: 10,
    marginTop: 10,
  },

  TextRadio: {
    position: "absolute",
    marginLeft: 10,
    flexDirection: "row",
    left: 25,
    right: 25,
    opacity: 0.6,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 7,
  },
  TextRadio2: {
    position: "absolute",
    marginLeft: 10,
    flexDirection: "row",
    left: 25,
    right: 25,
    opacity: 0.6,
    fontSize: 15,
    fontWeight: "bold",
  },

  tituloLabel: {
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 5,
    marginTop: 1,
  },
  Titulolog: {
    color: "black",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
  },
  loginBtn2: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#005DA6",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 30,
  },
  loginBtn3: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    marginBottom: 20,
    backgroundColor: "#E74C3C",
    justifyContent: "center",
    marginTop: 20,
  },
  inputIcon: {
    position: "absolute",
    top: 5,
    left: 35,
  },

  textBoton: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});