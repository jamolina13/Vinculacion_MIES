import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import { Alert } from "react-native";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { styles } from "../../../estilos/styleRegistro";
import {validator} from 'validator';
//zz const { width: WIDTH } = Dimensions.get("window");

export const RegistroTecnico = (props) => {
  //ID del supervisor
  const { id } = useSelector((state) => state.auth);
  const navigation = props.navigation;
  const tecnicosRegistrados = props.route.params.tecnicosRegistrados;
  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
    correo: "",
    direccion: "",
    contraseña: "",
    showPass: true,

    cedulaValidate: {
      estado:false,
      msg:"Debe ingresar 10 digitos numéricos"
    },
    nombreValidate: false,
    apellidoValidate: false,
    telefonoValidate: false,
    correoValidate: false,
    direccionValidate: true,
    contraseñaValidate: true,
  });

  // checkValue(str, max) {
  //   if (str.charAt(0) !== "0" || str == "00") {
  //     var num = parseInt(str);
  //     if (isNaN(num) || num <= 0 || num > max) num = 1;
  //     str =
  //       num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
  //         ? "0" + num
  //         : num.toString();
  //   }
  //   return str;
  // }

  const registroTecnico = async () => {
    //alert('OK');
    const { nombre } = state;
    const { apellido } = state;
    const { cedula } = state;
    const { telefono } = state;
    const { correo } = state;
    const { direccion } = state;
    const { contraseña } = state;

    // console.log(JSON.stringify({
    //       tec_id: parseInt(tecnicosRegistrados+2),
    //       sup_id: parseInt(id),
    //       tec_nombre: nombre,
    //       tec_apellido: apellido,
    //       tec_cedula: cedula,
    //       tec_telefono: telefono,
    //       tec_correo: correo,
    //       tec_direccion: direccion,
    //       tec_contraseña: contraseña,
    // }))
    try {
      const response = await fetch("http://192.188.58.82:3000/guardarTecnico", {
        method: "POST",
        headers: {
          Accept: "Application/json",
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          tec_id: parseInt(tecnicosRegistrados + 2),
          sup_id: parseInt(id),
          tec_nombre: nombre,
          tec_apellido: apellido,
          tec_cedula: cedula,
          tec_telefono: telefono,
          tec_correo: correo,
          tec_direccion: direccion,
          tec_contraseña: contraseña,
        }),
      });
      console.log(response.status);
      if (response.status == 200) {
        navigation.navigate("HeaderInicio");
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
  //actualizar pagina

  //validaciones de datos
    const validateCedula = (cedula) => {
      var alph = /^([0-9]{0,10})$/;
      var cedInv=false;
      if (alph.test(cedula)) {

        let digProv = parseInt(cedula.substring(0,2));
        console.log(digProv);
        //validar dos primeros digitos de provincia
        if(digProv < 0 || digProv > 24){
          console.log("Codigo de Provincia (dos primeros dígitos) no deben ser mayor a 24 ni menores a 0')");
          cedInv=true;
        }
        //validar tercer digito
        let tercerDig = parseInt(cedula[2]);
        console.log(tercerDig);
        if(tercerDig < 0 || tercerDig > 5){
          console.log("Tercer dígito debe ser mayor o igual a 0 y menor a 6");
          cedInv=true;
        }
        //algoritmo de modulo 10
        let digitosIniciales = cedula.substring(0,9).split("");
        let digitoVerificador = parseInt(cedula[9]);
        let arrayCoeficientes = [2,1,2,1,2,1,2,1,2];
        let total = 0;
        digitosIniciales.forEach(function (value,key){
          let valorPosicion = (parseInt(value)*arrayCoeficientes[key]);

          if(valorPosicion>=10){
            valorPosicion=valorPosicion.toString().split("");

            valorPosicion= valorPosicion.reduce(function(a, b){
              return parseInt(a) + parseInt(b);
            }, 0);
            
          }
          total+=valorPosicion;
        });

        let residuo = total%10;
        let resultado=0;
        if (residuo != 0) {
          resultado = 10 -residuo;
        }

        if (resultado != digitoVerificador){
          console.log("Dígitos iniciales no validan contra Dígito Idenficador");
          cedInv=true;
        }

        if(cedInv){
          setState({ ...state,  cedulaValidate:{msg:"Cedula Invalida",estado:false} });
        }else{
          setState({ ...state,  cedulaValidate:{msg:"",estado:true},cedula:cedula });
        }
        
      } else {
        setState({ ...state,  cedulaValidate:{msg:"Ingresar solo 10 numeros",estado:false} });
      }
    };

  
  const validateNombre = (nombre) => {
    var alph =
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    //if (type == "nombre") {
      if (alph.test(nombre)) {
        setState({ ...state, nombreValidate: true, nombre: nombre });
      } else {
        setState({ ...state, nombreValidate: false });
      //}
    }
  };

  const validateApellido = (apellido, type) => {
    var alph =
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    if (type == "apellido") {
      if (alph.test(apellido)) {
        setState({ ...state, apellidoValidate: true, apellido: apellido });
      } else {
        setState({ ...state, apellidoValidate: false });
      }
    }
  };

  const validateTelefono = (telefono) => {
    var alph = /^([0-9]{0,10})$/;
    //if (type == "telefono") {
      if (alph.test(telefono)) {
        setState({ ...state, telefonoValidate: true, telefono: telefono });
      } else {
        setState({ ...state, telefonoValidate: false });
      }
    //}
  };
  
  
  const validateCorreo = (correo) => {

      if (validator.isEmail(correo)) {
        setState({ ...state, correoValidate: true, correo: correo });
      } else {
        setState({ ...state, correoValidate: false });
      }

  };

  // validateCorreo(correo, type) {
  //   var alph =
  //     /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  //   if (type == "correo") {
  //     if (alph.test(correo)) {
  //       this.setState({ correoValidate: true });
  //       this.setState({ correo });
  //     } else {
  //       this.setState({ correoValidate: false });
  //     }
  //   }
  // }

  // validateNombre_usuario(direccion, type) {
  //   var alph =
  //     /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+([0-9]{0,10})+$/g;
  //   if (type == "direcccion") {
  //     if (alph.test(direccion)) {
  //       this.setState({ dirreccionValidate: true });
  //       this.setState({ dirreccion });
  //     } else {
  //       this.setState({ dirrecionValidate: false });
  //     }
  //   }
  // }

  // validateClave(contraseña, type) {
  //   var alph =
  //     /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  //   if (type == "contraseña") {
  //     if (alph.test(contraseña)) {
  //       this.setState({ contraseñaValidate: true });
  //       this.setState({ contraseña });
  //     } else {
  //       this.setState({ contraseñaValidate: false });
  //     }
  //   }
  // }

  return (
    <ScrollView style={styles.scrollView}>
      <View tyle={styles.tituloContainer}>
        <Text style={styles.TituloLogin}>Formulario de Registro Técnico</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons
          name={"md-person-circle-outline"}
          size={28}
          color={"rgba(0,0,0,1)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={[
            styles.input,
            !state.nombreValidate ? styles.inputError : null,
          ]}
          placeholder={"Ingrese el nombre"}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => validateNombre(text)}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.nombreValidate ? styles.TextError : null,
            state.nombreValidate ? styles.TextErrorValid : null,
          ]}
        >
          Solo se permiten letras
        </Text>
      </View>


      <View style={styles.inputContainer}>
        <Ionicons
          name={"person-outline"}
          size={30}
          color={"rgba(0,0,0,1)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={[
            styles.input,
            !state.apellidoValidate ? styles.inputError : null,
          ]}
          placeholder={"Ingrese el apellido"}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => validateApellido(text, "apellido")}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.apellidoValidate ? styles.TextError : null,
            state.apellidoValidate ? styles.TextErrorValid : null,
          ]}
        >
          Solo se permiten letras
        </Text>
      </View>


      <View style={styles.inputContainer}>
        <Ionicons
          name={"person-outline"}
          size={30}
          color={"rgba(0,0,0,1)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={[
            styles.input,
            !state.cedulaValidate ? styles.inputError : null,
          ]}
          placeholder={"Cédula"}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => validateCedula(text)}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.cedulaValidate.estado ? styles.TextError : null,
            //state.cedulaValidate.estado ? styles.TextErrorValid : null,
          ]}
        >
          {state.cedulaValidate.msg}
        </Text>
      </View>


      <View style={styles.inputContainer}>
        <Ionicons
          name={"md-person-circle-outline"}
          size={28}
          color={"rgba(0,0,0,1)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={[
            styles.input,
            !state.telefonoValidate ? styles.inputError : null,
          ]}
          placeholder={"Teléfono"}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => validateTelefono(text)}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.telefonoValidate ? styles.TextError : null,
            state.telefonoValidate ? styles.TextErrorValid : null,
          ]}
        >
          Debe ingresar 10 digitos numéricos
        </Text>
      </View>


      <View style={styles.inputContainer}>
        <Ionicons
          name={"md-person-circle-outline"}
          size={28}
          color={"rgba(0,0,0,1)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={[
            styles.input,
            !state.correoValidate ? styles.inputError : null,
          ]}
          placeholder={"Correo"}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          //onChangeText={(text) => setState({ ...state, correo: text })}
          onChangeText={(text) => validateCorreo(text)}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.correoValidate ? styles.TextError : null,
            state.correoValidate ? styles.TextErrorValid : null,
          ]}
        >
          Ingresar un correo existente
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name={"md-person-circle-outline"}
          size={28}
          color={"rgba(0,0,0,1)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={[
            styles.input,
            !state.direccionValidate ? styles.inputError : null,
          ]}
          placeholder={"Direccion"}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, direccion: text })}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.direccionValidate ? styles.TextError : null,
            state.direccionValidate ? styles.TextErrorValid : null,
          ]}
        ></Text>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name={"md-person-circle-outline"}
          size={28}
          color={"rgba(0,0,0,1)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={[
            styles.input,
            !state.contraseñaValidate ? styles.inputError : null,
          ]}
          placeholder={"Contraseña"}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, contraseña: text })}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.contraseñaValidate ? styles.TextError : null,
            state.contraseñaValidate ? styles.TextErrorValid : null,
          ]}
        ></Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={styles.btnRegistrar} onPress={registroTecnico}>
          <Text style={styles.text}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCancelar}
          onPress={() => navigation.navigate("HeaderInicio")}
        >
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   backgroundContainer: {
//     flex: 1,
//     width: null,
//     height: null,
//     //alignItems: 'center',
//     justifyContent: "center",
//   },
//   scrollView: {
//     // backgroundColor: 'pink',
//     marginBottom: 0,
//     marginTop: 0,
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginBottom: 0,
//     marginTop: 15,
//   },
//   logoLogin: {
//     height: 150,
//   },
//   tituloContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//     marginTop: 10,
//   },
//   tituloLabel: {
//     alignItems: "stretch",
//     marginBottom: 50,
//   },
//   TituloLogin: {
//     color: "black",
//     fontSize: 30,
//     fontWeight: "bold",
//     marginTop: 20,
//     alignItems: "center",
//     textAlign: "center",
//     opacity: 0.5,
//     marginBottom: 10,
//   },
//   TextInfo: {
//     color: "black",
//     fontSize: 12,
//     fontWeight: "bold",
//     marginTop: 0,
//     opacity: 0.5,
//   },
//   radioButton: {
//     paddingLeft: 10,
//     paddingRight: 30,
//     textAlign: "justify",
//     marginTop: 0,
//     marginRight: 10,
//   },
//   TextRadio1: {
//     color: "#2C3E50",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 5,
//     textAlign: "justify",
//   },
//   TextRadio2: {
//     color: "#2C3E50",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginTop: 5,
//     textAlign: "justify",
//   },
//   Radio2: {
//     marginLeft: 60,
//   },

//   inputContainer: {
//     marginTop: 10,
//     textAlign: "left",
//   },

//   inputContainer2: {
//     marginTop: 10,
//     textAlign: "left",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   input: {
//     width: WIDTH - 55,
//     height: 45,
//     borderRadius: 45,
//     fontSize: 18,
//     paddingLeft: 45,
//     backgroundColor: "rgba(0,0,0,0.35)",
//     color: "rgba(201,201,201,1)",
//     marginHorizontal: 25,
//   },
//   inputError: {
//     borderColor: "red",
//     borderWidth: 3,
//   },
//   inputIcon: {
//     position: "absolute",
//     top: 8,
//     left: 37,
//   },
//   inputIcon1: {
//     position: "absolute",
//     top: 8,
//     left: 15,
//   },
//   btnEye: {
//     position: "absolute",
//     top: 8,
//     right: 37,
//   },
//   forgot: {
//     color: "rgba(0,0,0,1)",
//     fontSize: 18,
//     paddingTop: 20,
//   },
//   btnRegistrar: {
//     width: WIDTH - 250,
//     height: 45,
//     borderRadius: 45,
//     backgroundColor: "#005DA6",
//     justifyContent: "center",
//     marginTop: 20,
//     marginRight: 30,
//   },
//   btnCancelar: {
//     width: WIDTH - 250,
//     height: 45,
//     borderRadius: 45,
//     marginBottom: 20,
//     backgroundColor: "#E74C3C",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   datePickerStyle: {
//     width: WIDTH - 55,
//     marginTop: 2,
//     textAlign: "left",
//   },
//   datePickerStyle2: {
//     width: WIDTH - 200,
//     marginTop: 2,
//     textAlign: "left",
//   },
//   inputIconDate: {
//     position: "absolute",
//     top: 5,
//     left: 40,
//   },
//   inputIconDate2: {
//     position: "absolute",
//     top: 5,
//     left: 25,
//     //marginLeft: WIDTH - 400,
//   },
//   text: {
//     color: "#fff",
//     fontSize: 18,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   errorContainer: {
//     marginBottom: -10,
//     marginTop: 1,
//   },
//   errorContainer2: {
//     marginBottom: -5,
//     marginTop: -2,
//   },
//   TextError: {
//     color: "red",
//     textAlign: "center",
//     alignItems: "center",
//   },
//   TextErrorValid: {
//     textAlign: "center",
//     alignItems: "center",
//     opacity: 0.9,
//     color: "rgba(0,0,0,0)",
//   },
//   TextValid: {
//     color: "green",
//     textAlign: "center",
//     alignItems: "center",
//   },
//   TextDefault: {
//     textAlign: "center",
//     alignItems: "center",
//     color: "rgba(0,0,0,0)",
//   },
//   TextDefault1: {
//     textAlign: "center",
//     alignItems: "center",
//     color: "rgba(0,0,0,0)",
//   },
// });
