import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import bgImage from "../../../assets/img_sistema/fondo_login.jpg";
import { RadioButton } from "react-native-paper";

const { width: WIDTH } = Dimensions.get("window");

export const PreguntasTestLawtonBrody = (props) => {
  const [state, setState] = useState({
    checked1: "",
    checked2: "",
    checked3: "",
    checked4: "",
    checked5: "",
    checked6: "",
    checked7: "",
    checked8: "",
    puntaje: 0,
    temp: "",
    estado: "1",
    uno: "1",
    cero: "0",
    datetimeStart: moment(new Date()),

    //Ver y ocultar clave
    showPass: true,
    press: false,
  });

 
  const navigation = props.navigation;
  const calculartotal = (total) => {
    setState({
      temp: total,
    });
  };

 

  const { checked1 } = state;
  const { checked2 } = state;
  const { checked3 } = state;
  const { checked4 } = state;
  const { checked5 } = state;
  const { checked6 } = state;
  const { checked7 } = state;
  const { checked8 } = state;
  const { estado } = state;
  const { puntaje } = state;
  const { uno } = state;
  const { cero } = state;
  const { temp } = state;

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

    const onsubmitGuardar = async () => {
      let valor =0;
  
      Object.keys(state).forEach(key => {
        
        if(key.substring(0, 7)=="checked"){
          if((state[key])!=''){
            valor=valor+parseInt(state[key]);
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
      const { estado } = state;
      const { puntaje } = state;
      console.log(valor);


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
              ef_id: '',
              elb_p1_usar_telefono: checked1,
              elb_p2_hacer_compras: checked2,
              elb_p3_preparar_comida: checked3,
              elb_p4_cuidado_casa: checked4,
              elb_p5_lavar_ropa: checked5,
              elb_p6_uso_transporte: checked6,
              elb_p7_medicacion: checked7,
              elb_p8_utiliza_dinero: checked8,
              elb_tiempo_inicial: fechaInicial,
              elb_tiempo_final: fechaFinal,
              elb_tiempo_total: time,
              elb_estado: estado,
              elb_puntaje_total: puntaje,
            }),
          }
        );
        console.log(response.status);
        if (response.status == 200) {
          //const json = await response.json();
          navigation.replace("HeaderInicio");
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
              setState({ checked1: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Utiliza el teléfono por iniciativa propia
              </Text>
              <RadioButton
                value="uno"
                status={checked1 === "uno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked1: "uno" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Es capaz de marcar bien algunos números familiares
              </Text>
              <RadioButton
                value="dos"
                status={checked1 === "dos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked1: "dos" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Es capaz de contestar al teléfono, pero no de marcar
              </Text>
              <RadioButton
                value="tres"
                status={checked1 === "tres" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked1: "tres" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>No utiliza el teléfono</Text>
              <RadioButton
                value="cuatro"
                status={checked1 === "cuatro" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked1: "cuatro" });
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
              setState({ checked2: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Realiza todas las compras necesarias independientemente
              </Text>
              <RadioButton
                value="cinco"
                status={checked2 === "cinco" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked2: "cinco" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Realiza independientemente pequeñas compras
              </Text>
              <RadioButton
                value="seis"
                status={checked2 === "seis" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked2: "seis" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Necesita ir acompañado para cualquier compra
              </Text>
              <RadioButton
                value="siete"
                status={checked2 === "siete" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked2: "siete" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Totalmente incapaz de comprar
              </Text>
              <RadioButton
                value="ocho"
                status={checked2 === "ocho" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked2: "ocho" });
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
              setState({ checked3: v });
            }}
          >
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Organiza, prepara y sirve las comidas por si solo adecuadamente
              </Text>
              <RadioButton
                value="nueve"
                status={checked3 === "nueve" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked3: "nueve" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Prepara adecuadamente las comidas si se le proporcionan los
                ingredientes
              </Text>
              <RadioButton
                value="diez"
                status={checked3 === "diez" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked3: "diez" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Prepara, calienta y sirve las comidas, pero no sigue una dieta
                adecuada
              </Text>
              <RadioButton
                value="once"
                status={checked3 === "once" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked3: "once" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>
                Necesita que le preparen y sirvan las comidas
              </Text>
              <RadioButton
                value="doce"
                status={checked3 === "doce" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked3: "doce" });
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
              setState({ checked4: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio2}>
                Mantiene la casa solo o con ayuda ocasional ( para trabajos
                pesados){" "}
              </Text>
              <RadioButton
                value="trece"
                status={checked4 === "trece" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked4: "trece" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Realiza tareas ligeras, como lavar los platos o hacer las camas{" "}
              </Text>
              <RadioButton
                value="catorce"
                status={checked4 === "catorce" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked4: "catorce" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Realiza tareas ligeras, pero no puede mantener un adecuado nivel
                de limpieza
              </Text>
              <RadioButton
                value="quince"
                status={checked4 === "quince" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked4: "quince" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>
                Necesita ayuda en todas las labores de casa
              </Text>
              <RadioButton
                value="dieciseis"
                status={checked4 === "dieciseis" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked4: "dieciseis" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                No participa en ninguna labor de la casa
              </Text>
              <RadioButton
                value="diecisiete"
                status={checked4 === "diecisiete" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked4: "diecisiete" });
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
              setState({ checked5: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Lava por sí solo toda la ropa
              </Text>
              <RadioButton
                value="dieciocho"
                status={checked5 === "dieciocho" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked5: "dieciocho" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Lava por sí solo pequeñas prendas{" "}
              </Text>
              <RadioButton
                value="diecinueve"
                status={checked5 === "diecinueve" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked5: "diecinueve" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Todo el lavado de ropa debe ser realizado por otro
              </Text>
              <RadioButton
                value="veinte"
                status={checked5 === "veinte" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked5: "veinte" });
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
              setState({ checked6: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Viaja solo en transporte público o conduce su propio coche
              </Text>
              <RadioButton
                value="veintiuno"
                status={checked6 === "veintiuno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked6: "veintiuno" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio2}>
                Es capaz de coger un taxi, pero no usa otro medio de transporte
              </Text>
              <RadioButton
                value="veintidos"
                status={checked6 === "veintidos" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked6: "veintidos" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio2}>
                Viaja en transporte público cuando va acompañado por otra
                persona
              </Text>
              <RadioButton
                value="veintitres"
                status={checked6 === "veintitres" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked6: "veintitres" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>
                Utiliza el taxi o el automóvil sólo con la ayuda de otros{" "}
              </Text>
              <RadioButton
                value="veinticuatro"
                status={checked6 === "veinticuatro" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked6: "veinticuatro" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>No viaja </Text>
              <RadioButton
                value="veinticinco"
                status={checked6 === "veinticinco" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked6: "veinticinco" });
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
              setState({ checked7: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Es capaz de tomar su medicación a la dosis y hora adecuada
              </Text>
              <RadioButton
                value="veintiseis"
                status={checked7 === "veintiseis" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked7: "veintiseis" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Toma su medicación si la dosis es preparada previamente
              </Text>
              <RadioButton
                value="veintisiete"
                status={checked7 === "veintisiete" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked7: "veintisiete" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                No es capaz de administrarse su medicación
              </Text>
              <RadioButton
                value="veintiocho"
                status={checked7 === "veintiocho" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked7: "veintiocho" });
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
              setState({ checked5: v });
            }}
          >
            <View style={styles.radios}>
              <Text style={styles.TextRadio}>
                Se encarga de sus asuntos económicos por si solo
              </Text>
              <RadioButton
                value="veintinueve"
                status={checked8 === "veintinueve" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked8: "veintinueve" });
                }}
              />
            </View>
            <View style={styles.radios}>
              <Text style={styles.TextRadio2}>
                Realiza las compras de cada día, pero necesita ayuda con las
                grandes compras y en los bancos{" "}
              </Text>
              <RadioButton
                value="treinta"
                status={checked8 === "treinta" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked8: "treinta" });
                }}
              />
            </View>
            <View style={styles.radios2}>
              <Text style={styles.TextRadio}>Incapaz de manejar dinero</Text>
              <RadioButton
                value="treintaiuno"
                status={checked8 === "treintaiuno" ? "checked" : "unchecked"}
                onPress={() => {
                  setState({ checked8: "treintaiuno" });
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
            onPress={() => props.navigation.navigate("Test")}
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
