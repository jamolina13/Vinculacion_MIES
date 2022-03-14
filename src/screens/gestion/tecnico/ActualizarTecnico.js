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

export const ActualizarTecnico = (props) => {
  //ID del supervisor
  const { id } = useSelector((state) => state.auth);
  const navigation = props.navigation;
  const [state, setState] = useState({
    tec_id: props.route.params.data.tec_id,
    tec_nombre: props.route.params.data.nombre,
    tec_apellido: props.route.params.data.apellido,
    tec_cedula: props.route.params.data.cedula,
    tec_telefono: props.route.params.data.telefono,
    tec_correo: props.route.params.data.correo,
    tec_direccion: props.route.params.data.direccion,
    tec_contraseña: props.route.params.data.contraseña,

    cedulaValidate: true,
    nombreValidate: true,
    apellidoValidate: true,
    telefonoValidate: true,
    correoValidate: true,
    direccionValidate: true,
    contraseñaValidate: true,
  });

  const { tec_id } = state;
  const { tec_nombre } = state;
  const { tec_apellido } = state;
  const { tec_cedula } = state;
  const { tec_telefono } = state;
  const { tec_correo } = state;
  const { tec_direccion } = state;
  const { tec_contraseña } = state;

  const actualizarTecnico = async () => {
    //alert('OK');
    // console.log(state)

    // console.log(JSON.stringify({
    //       tec_id: tec_id,
    //       sup_id: parseInt(id),
    //       tec_nombre: tec_nombre,
    //       tec_apellido: tec_apellido,
    //       tec_cedula: tec_cedula,
    //       tec_telefono: tec_telefono,
    //       tec_correo: tec_correo,
    //       tec_direccion: tec_direccion,
    //       tec_contraseña: tec_contraseña,
    // }))
    try {
      const response = await fetch(
        "http://192.188.58.82:3000/actualizarTecnicoById/" + tec_id + "",
        {
          method: "POST",
          headers: {
            Accept: "Application/json",
            "Content-type": "Application/json",
          },
          body: JSON.stringify({
            sup_id: parseInt(id),
            tec_nombre: tec_nombre,
            tec_apellido: tec_apellido,
            tec_cedula: tec_cedula,
            tec_telefono: tec_telefono,
            tec_correo: tec_correo,
            tec_direccion: tec_direccion,
            tec_contraseña: tec_contraseña,
          }),
        }
      );
      console.log(response.status);
      if (response.status == 200) {
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

  //validaciones de datos
  //   const validateCedula = (cedula, type) => {
  //     var alph = /^([0-9]{0,10})$/;
  //     if (type == "cedula") {
  //       if (alph.test(cedula)) {
  //         setState({ ...state, cedulaValidate: true, cedula: cedula });
  //       } else {
  //         setState({ ...state, cedulaValidate: false });
  //       }
  //     }
  //   };

  //   const validateNombre = (nombre, type) => {
  //     var alph =
  //       /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  //     if (type == "nombre") {
  //       if (alph.test(nombre)) {
  //         setState({ ...state, nombreValidate: true, nombre: nombre });
  //       } else {
  //         setState({ ...state, nombreValidate: false });
  //       }
  //     }
  //   };

  //   const validateApellido = (apellido, type) => {
  //     var alph =
  //       /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
  //     if (type == "apellido") {
  //       if (alph.test(apellido)) {
  //         setState({ ...state, apellidoValidate: true, apellido: apellido });
  //       } else {
  //         setState({ ...state, apellidoValidate: false });
  //       }
  //     }
  //   };

  //   const validateTelefono = (telefono, type) => {
  //     var alph = /^([0-9]{0,10})$/;
  //     if (type == "telefono") {
  //       if (alph.test(telefono)) {
  //         setState({ ...state, telefonoValidate: true, telefono: telefono });
  //       } else {
  //         setState({ ...state, telefonoValidate: false });
  //       }
  //     }
  //   };

  // validateCorreo(text, type) {
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
        <Text style={styles.TituloLogin}>Formulario de Actualización</Text>
      </View>
      <Text>Nombre: </Text>
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
          value={tec_nombre}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, tec_nombre: text })}
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
      <Text>Apellido: </Text>
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
          value={tec_apellido}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, tec_apellido: text })}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.apellidoValidate ? styles.TextError : null,
            state.cedulaValidate ? styles.TextErrorValid : null,
          ]}
        >
          Solo se permiten letras
        </Text>
      </View>
      <Text>Cédula: </Text>
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
          value={tec_cedula}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, tec_cedula: text })}
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
      <Text>Teléfono: </Text>
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
          value={tec_telefono}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, tec_telefono: text })}
          //onChangeText = {(text) => setState({})}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text
          style={[
            styles.TextDefault,
            !state.telefonoValidate ? styles.TextError : null,
            state.cedulaValidate ? styles.TextErrorValid : null,
          ]}
        >
          Debe ingresar 10 digitos numéricos
        </Text>
      </View>
      <Text>Correo: </Text>
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
          value={tec_correo}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, tec_correo: text })}
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
          Solo se permiten letras
        </Text>
      </View>
      <Text>Dirección: </Text>
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
          value={tec_direccion}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, tec_direccion: text })}
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
      <Text>Contraseña: </Text>
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
          value={tec_contraseña}
          placeholderTextColor={"rgba(0,0,0,0.7)"}
          underlineColorAndroid="transparent"
          onChangeText={(text) => setState({ ...state, tec_contraseña: text })}
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
        <TouchableOpacity
          style={styles.btnRegistrar}
          onPress={actualizarTecnico}
        >
          <Text style={styles.text}>Actualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCancelar}
          onPress={() => navigation.replace("HeaderInicio")}
        >
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
