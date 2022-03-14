import { Content, Text } from "native-base";
import { CheckBox } from "react-native-elements";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

const fecha = new Date();
const tiempoInicial = fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
var  validacionBtn =  true;
var  validacion = false;
/* 
const tiempoInicial=tiempoActual;
const tiempoActual = () => {
   
  var fechaHora = new Date();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes(); 
  var segundos = fechaHora.getSeconds();
  if (horas < 10) { horas = '0' + horas; }
  if (minutos < 10) { minutos = '0' + minutos; }
  if (segundos < 10) { segundos = '0' + segundos; }
  var tiempo = horas + ':' +minutos + ':' + segundos
  console.log(tiempo)
  return tiempo;
}
*/
export const UbicacionScreen = (props) => {
  const params = props.route.params;
  const navigation = props.navigation;
  const [values, setValues] = useState({
    search: "",
    listadoE: [],
  });
  const { listadoE } = values;
 

  const [value, setValue] = useState({
    validacionBtn: true,
  });

  const [state, setState] = useState({
    am_id: params.id,
    am_nombre: params.nombre,
    am_apellido: params.apellido,
    observacion_preguntas: "",
    observacion_tecnico: "",
    ubicacion: "",
    estado: "",
    representante: "",
    foto_adulto: "",
    tiempo_inicial: tiempoInicial,
    tiempo_final: "",
    tiempo_total: "",
    fecha_aplicacion: "",
    encabezado_id: "",
    asistido: false,
    independiente: false,
    totalRespuestas: [],
    isReady: false,
    disabled: true,
    listadoAdultMay: [],
    puntoAtencion: false,
    domicilio: false,
    nombresValidate: false,
  });

  

  useEffect(() => {
    encabezados();
    return () => {
      setValues({});
    }
  }, [state.isReady]);

  /* 
    useEffect(
      validateContinuar
      return () => {
        setState({});
      };
    }, []);
  
    const fuentes ,async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });
      setState(...state, { isReady: true });
  */
  const encabezados = async () => {

    try {
      const responseE = await fetch(
        "http://192.188.58.82:3000/encabezados",
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        });
      const json = await responseE.json();
      setValues({
        ...values,
        listadoE: json,
        isReady: true,
        refreshing: false,
      });

    } catch (error) {
      console.error(error);
    }
  };

  const idEncabezado = listadoE.length + 1;

  const registroEncabezado = async () => {

    try {

      const response = await fetch(
        "http://192.188.58.82:3000/guardarEncabezado",
        {
          method: "POST",
          headers: {
            "Accept": "Application/json",
            "Content-type": "Application/json",
          },

          body: JSON.stringify({
            am_id: state.am_id,
            ef_observacion_preguntas: "assa",
            ef_observacion_tecnico: "ass",
            ef_ubicacion: state.ubicacion,
            ef_estado: 0,
            ef_representante: state.representante,
            ef_foto_adulto: " ",
            ef_tiempo_inicial: state.tiempo_inicial,
            ef_tiempo_final: "",
            ef_tiempo_total: "",
            ef_fecha_aplicacion: "2022-03-03"
          }),
        }
      );
      if (response.status == 200) {
        //const json = await response.json();
        navigation.navigate("Test", {

          id: state.am_id,
          enc_id: idEncabezado,
          nombre: state.am_nombre,
          apellido: state.am_apellido,
        });
      } else {

        Alert.alert("MIES APP", "Error al registrar. Intente más tarde. ", [
          {
            text: "Continuar",
            style: "destructive",
          },
        ]);

      }
    } catch (error) {
      console.error(error);
    }
    console.log(
      JSON.stringify({
        am_id: params.id, //parseInt(id),//pendiente
        ef_observacion_preguntas: state.observacion_preguntas,
        ef_observacion_tecnico: state.observacion_tecnico,
        ef_ubicacion: state.ubicacion,
        ef_estado: state.estado,
        ef_representante: state.representante,
        ef_foto_adulto: state.foto_adulto,
        ef_tiempo_inicial: state.tiempo_inicial,
        ef_tiempo_final: state.tiempo_final,
        ef_tiempo_total: state.tiempo_total,
        ef_fecha_aplicacion: state.fecha_aplicacion,
      })
    );
  };


  const IndiTestYesavage = () => {
    navigation("IndiTestYesavage");
  };





  const ListaAMScreen = () => {
    navigation("ListaAMScreen");
  };

  /* constructor(){
        super()
        //this.AdultosMayores()
       state = {  
        isReady: false,
        usuario: "",
        clave: "",
        listadoAdultMay: [],
        puntoAtencion: false,
        domicilio: false
    };*/



  useEffect(() => {
    //lo que se va a realizar cuando se carga el componente
    return () => {
      //lo que se va a realizar cuando se desmonta el componente
    }
  }, [])
  //navigation.navigate("ventana") 
  //navigation.replace("ventana") 
  //

  /*async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
   setState({ isReady: true });
  }*/

  // useEffect(() => {
  //   setState(...state, { puntoAtencion: true, domicilio: false });
  //   return () => {
  //     setState({});
  //   };
  // }, []);


  const fpuntoAtencion = () => {
    //alert('Punto de Atención');   
    setState({ ...state, puntoAtencion: true, domicilio: false, ubicacion: "Punto de Atención" })
    
  }

  const fdomicilio = () => {
    //alert('Domicilio');

    setState({ ...state, domicilio: true, puntoAtencion: false, ubicacion: "Domicilio" })
    
  }

  const fasistido = () => {
    validateContinuar()
    validacion = true;
    setState({ ...state, asistido: true, independiente: false, representante: state.representante })
    
  }


  const findependiente = () => {
    validateContinuar()
    validacion = false;
    setState({ ...state, independiente: true, asistido: false, representante: "Independiente" })
    


  }

  const validateAsistido = (nombreRepresentante, type) => {
    //alert('Punto de Atención');
    if (state.asistido == true) {
      setState({ ...state, representante: nombreRepresentante })
      /* 
      var alph =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1])[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
      if (type == "representante") {
        if (alph.test(nombreRepresentante)) {
          setState({
            ...state,
            nombresValidate: true,
            representante: nombreRepresentante,
          });
        } else {
          setState({
            ...state,
            nombresValidate: false,
          });
        }*/

    } else {
      validacion = false;
      setState({ ...state, representante: "Independiente" })
    }
  }

  const validateContinuar = () => {
    state.asistido = true;
    state.independiente = true;
    if ((state.puntoAtencion == true || state.domicilio == true &&
      state.asistido == true || state.independiente == true)) {
      setValue({ ...value, validacionBtn: false })
    }
  }

  const fobservacion_preguntas = (observacion_preguntas) => {
    //alert('Domicilio');
    setState({ ...state, observacion_preguntas: observacion_preguntas });
  }
  const fobservacion_tecnico = (observacion_tecnico) => {
    //alert('Domicilio');
    setState({ ...state, observacion_tecnico: observacion_tecnico });
  }

  const festado = (estado) => {
    //alert('Domicilio');
    setState({ ...state, estado: estado });
  }

  const frepresentante = (representante) => {
    //alert('Domicilio');
    setState({ ...state, representante: representante });
  }
  const ffoto_adulto = (foto_adulto) => {
    //alert('Domicilio');
    setState({ ...state, foto_adulto: foto_adulto });
  }
  const ftiempo_inicial = (tiempo_inicial) => {
    //alert('Domicilio');
    setState({ ...state, tiempo_inicial: tiempo_inicial });
  }
  const ftiempo_final = (tiempo_final) => {
    //alert('Domicilio');
    setState({ ...state, tiempo_final: tiempo_final });
  }
  const ftiempo_total = (tiempo_total) => {
    //alert('Domicilio');
    setState({ ...state, tiempo_total: tiempo_total });
  }
  const ffecha_aplicacion = (fecha_aplicacion) => {
    //alert('Domicilio');
    setState({ ...state, fecha_aplicacion: fecha_aplicacion });
  }

  return (
    <Content padder>
      <View style={styles.ContainerTitulo}>
        <Text style={styles.Titulo}>Ubicación del Adulto Mayor</Text>
      </View>

      <View style={styles.ContainerText}>
        <Text style={styles.text}>
          El siguiente formato se responderá de manera:
        </Text>
      </View>



      <View style={{ paddingLeft: 25, paddingTop: 15 }}>

        <CheckBox
          checked={state.asistido}
          onPress={() => fasistido()}
          containerStyle={{ backgroundColor: "transparent" }}
          title={<Text style={styles.textOption}>Asistido</Text>}

        />

        <View id="asistido" style={styles.ContainerText}>

          <Text style={styles.textSub}>
            En caso de haber seleccionado asistido, ingresar el nombre:
          </Text>
          <TextInput
            maxLength={10}
            style={[
              styles.input,
            ]}
            //placeholder="Cédula"
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(representante) => validateAsistido(representante, "representante")}
            editable={validacion}
          />
        </View>
        <CheckBox
          checked={state.independiente}
          onPress={() => findependiente()}
          containerStyle={{ backgroundColor: "transparent" }}
          title={<Text style={styles.textOption}>independiente</Text>}
        />
      </View>
      <View style={styles.ContainerText}>
        <Text style={styles.text}>
          El adulto mayor puede realizar el Test con el acompañamiento
          únicamente en su domicilio.
        </Text>
      </View>
      <View style={styles.ContainerText}>
        <Text style={styles.textSub}>
          Antes de realizar los Tests debe informar sobre el sitio donde se
          está llevando a cabo.
        </Text>
      </View>
      <View style={{ paddingLeft: 25, paddingTop: 15 }}>
        <CheckBox
          checked={state.puntoAtencion}
          onPress={() => fpuntoAtencion()}
          containerStyle={{ backgroundColor: "transparent" }}
          title={<Text style={styles.textOption}>Punto de Atención</Text>}
        />
        <CheckBox
          checked={state.domicilio}
          onPress={() => fdomicilio()}
          containerStyle={{ backgroundColor: "transparent" }}
          title={<Text style={styles.textOption}>Domicilio</Text>}
        />
      </View>

      <View
        style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
      >
        <TouchableOpacity style={styles.btnContinuar}
          disabled={value.validacionBtn}
          onPress={() => registroEncabezado()}>
          <Text style={[styles.textBtn]}


          >Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSalir}
          onPress={() => navigation.replace("HeaderInicio")}
        >

          <Text style={styles.textBtn}>Salir</Text>

        </TouchableOpacity>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    // paddingTop: 50,
  },
  TextErrorValid: {
    textAlign: "center",
    alignItems: "center",
    opacity: 1,
    color: "white",
  },
  TextDefault: {
    textAlign: "center",
    alignItems: "center",
    color: "black",
  },
  errorContainer: {
    marginBottom: -10,
    marginTop: 1,
  },
  TextError: {
    color: "#0275d8",
    textAlign: "center",
    alignItems: "center",
  },
  inputError: {
    borderColor: "#0275d8",
    borderWidth: 3,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  ContainerTitulo: {
    //width: WIDTH - 45
  },
  Titulo: {
    color: "black",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10,
    opacity: 0.8,
    textAlign: "center",
    // paddingTop: 50,
  },
  text: {
    paddingTop: 35,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textSub: {
    paddingTop: 35,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textOption: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 20,
  },
  ContainerText: {
    //width: WIDTH - 55
  },
  btnContinuar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#005DA6",
    justifyContent: "center",
    marginRight: 30,
  },
  btnContinuarDisabled: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#CBCBCB",
    justifyContent: "center",
    marginRight: 30,
  },

  btnContniuarDisabled: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#CBCBCB",
    justifyContent: "center",
    marginRight: 30,
  },


  btnSalir: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#de0404",
    justifyContent: "center",
  },
  textBtn: {
    color: "#ffff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 10,
    textAlign: "left",
  },
  input: {
    height: 48,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 50,
    backgroundColor: "rgba(0,0,0,0.15)",
    color: "black",
    marginHorizontal: 25,
  },
});
