import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import bgImage from "../../../assets/img_sistema/fondo_login.jpg";
import { RadioButton } from "react-native-paper";
//import DatePicker from '@react-native-community/datetimepicker';
//https://snack.expo.io/@phattran1201/date-picker-example
import moment from "moment";
const { width: WIDTH } = Dimensions.get("window");

export const PreguntasTestYesavage = (props) => {
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
    checked10: "",
    checked11: "",
    checked12: "",
    checked13: "",
    checked14: "",
    puntaje: 0,
    temp: "",
    estado: "1",
    uno: "1",
    cero: "0",
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
  const { checked10 } = state;
  const { checked11 } = state;
  const { checked12 } = state;
  const { checked13 } = state;
  const { checked14 } = state;
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
    const { checked10 } = state;
    const { checked11 } = state;
    const { checked12 } = state;
    const { checked13 } = state;
    const { checked14 } = state;
    const { estado } = state;

    
    try {
      const response = await fetch(
        "http://192.188.58.82:3000/guardarEscalaYesavage",
        {
          method: "POST",
          headers: {
            Accept: "Application/json",
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
            ef_id: 5,
            ey_p1_satisfecho: checked,
            ey_p2_actividades: checked1,
            ey_p3_vacio: checked2,
            ey_p4_aburrido: checked3,
            ey_p5_animo: checked4,
            ey_p6_preocupado: checked5,
            ey_p7_feliz: checked6,
            ey_p8_desamparado: checked7,
            ey_p9_cosas: checked8,
            ey_p10_memoria: checked9,
            ey_p11_estar_vivo: checked10,
            ey_p12_inutil_despreciable: checked11,
            ey_p13_energia: checked12,
            ey_p14_esperanza_actual: checked13,
            ey_p15_cree_mejor: checked14,
            ey_tiempo_inicial: fechaInicial,
            ey_tiempo_final: fechaFinal,
            ey_tiempo_total: time,
            ey_estado: estado,
            ey_puntaje_total: valor,
          }),
        }
      );
      if(response.ok){
        console.log("hola ..ya sale")
       }else{
        console.log("no ..ya sale")
       }
        console.log(response.status);
      if (response.status == 200) {
        //const json = await response.json();
       // navigation.replace("Test");

        Alert.alert("MIES APP", `puntaje total: ${valor}`, [
          {
            text: "Continuar",
            style: "destructive",
          },
        ]);
 
        
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

    /*Alert.alert(
      "Guardado",
      "Datos correctamente guardados",
      [
        
        { text: "OK", onPress: () => props.navigation.navigate("Test") }
      ]
    );*/
  };

  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.TituloLogin}>Intrucciones</Text>
        </View>
        <View style={styles.subtitulo}>
          <Text style={styles.TextInfoSub}>
            Responda cada una de las siguientes preguntas según como se ha
            sentido Ud. durante la última semana.
          </Text>
        </View>

        <View tyle={styles.tituloEdad}>
          <Text style={styles.TituloEda}>
            Cada una de estas respuestas cuenta{" "}
            <Text style={{ color: "red" }}>1 PUNTO.</Text>
          </Text>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            1. ¿Está Ud. básicamente satisfecho con su vida?
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <RadioButton.Group
            re
            onValueChange={(checked) => setState({ ...state, checked })}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <RadioButton
                  value={state.uno}
                  status={checked === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            2. ¿Ha disminuido o abandonado muchos de sus intereses o actividades
            previas?
          </Text>
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
                  value={state.uno}
                  status={checked1 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked1 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked1: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>3. ¿Siente que su vida está vacía?</Text>
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
                  value={state.uno}
                  status={checked2 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked2: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked2 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked2: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            4. ¿Se siente aburrido frecuentemente?
          </Text>
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
                  value={state.uno}
                  status={checked3 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked3: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked3 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked3: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            5. ¿Está Ud. de buen ánimo la mayoría del tiempo?
          </Text>
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
                  value={state.uno}
                  status={checked4 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked4: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked4 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked4: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            6. ¿Está preocupado o teme que algo malo le va a pasar?
          </Text>
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
                  value={state.uno}
                  status={checked5 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked5 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked5: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            7. ¿Se siente feliz la mayor parte del tiempo?
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
                  value={state.uno}
                  status={checked6 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked6: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked6 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked6: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            8. ¿Se siente con frecuencia desamparado?
          </Text>
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
                  value={state.uno}
                  status={checked7 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked7: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked7 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked7: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            9. ¿Prefiere Ud. quedarse en casa a salir a hacer cosas nuevas?
          </Text>
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
                  value={state.uno}
                  status={checked8 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked8: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked8 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked8: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            10. ¿Siente Ud. que tiene más problemas con su memoria que otras
            personas de su edad?
          </Text>
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
                  value={state.uno}
                  status={checked9 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked9: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked9 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked9: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            11. ¿Cree Ud. que es maravilloso estar vivo?
          </Text>
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
                  value={state.uno}
                  status={checked10 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked10: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked10 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked10: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            12. ¿Se siente inútil o despreciable como está Ud. actualmente?
          </Text>
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
                  value={state.uno}
                  status={checked11 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked11: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked11 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked11: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>13. ¿Se siente lleno de energía?</Text>
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
                  value={state.uno}
                  status={checked12 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked12: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked12 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked12: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            14. ¿Se encuentrra sin esperanza ante su situación actual?
          </Text>
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
                  value={state.uno}
                  status={checked13 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked13: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked13 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked13: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.tituloLabel}>
          <Text style={styles.label}>
            15. ¿Cree Ud. que las otras personas están en general mejor que Ud?
          </Text>
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
                  value={state.uno}
                  status={checked14 === uno ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked14: uno });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>Si</Text>
              <View>
                <RadioButton
                  value={state.cero}
                  status={checked14 === cero ? "checked" : "unchecked"}
                  onPress={() => {
                    setState({ ...state, checked14: cero });
                  }}
                />
              </View>
              <Text style={styles.TextRadio}>No</Text>
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
            <Text style={styles.text1}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={() => navigation.navigate("Test")}
          >
            <Text style={styles.text1}>Cancelar</Text>
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
  inputContainer1: {
    marginTop: 20,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 40,
  },
  input: {
    width: 299,
    height: 42,
    borderRadius: 19,
    fontSize: 18,
    paddingTop: 9,
    paddingLeft: 39,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "#FEFCFC",
    marginHorizontal: 25,
  },
  TextRadio: {
    fontSize: 16,
    marginTop: 0,
    top: 6,
    opacity: 0.5,
    marginRight: 50,
  },
  tituloEdad: {
    alignItems: "center",
    marginBottom: 50,
  },
  TituloEda: {
    color: "#020202",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

  logoLogin: {
    height: 150,
  },

  tituloLabel: {
    paddingLeft: 20,
    paddingRight: 15,
    marginBottom: 20,
    marginTop: 0,
    textAlign: "justify",
  },
  subtitulo: {
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    marginTop: 0,
    textAlign: "center",
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
    marginTop: 3,
    opacity: 0.5,
    textAlign: "justify",
  },
  TextInfoSub: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 3,
    opacity: 0.5,
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    paddingLeft: 0,
    marginTop: 10,
    flexDirection: "row",
    top: 5,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 10,
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
  text1: {
    color: "#ffff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },

  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
});
