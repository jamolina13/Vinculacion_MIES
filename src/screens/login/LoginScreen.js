import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import lgLogin from "../../../assets/img_sistema/Mies_ec_gob.png";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../estilos/style";
import { useDispatch, useSelector } from "react-redux";
import { startLogIn } from "../reducer/auth";

export const LoginScreen = ({ navigation }) => {
  const [value, setValue] = useState({
    cedula: "",
    password: "",
    press: false,
    showPass: true,
    validacion: true,
  });

  const { cedula, password } = value;
  const { isLogin } = useSelector((state) => state.auth);
  console.log(isLogin);
  const dispatch = useDispatch();

  const validacionLogin = () => {
    if (cedula == "" || password == "") {
      Alert.alert("MIES APP", "Ingrese valores en todos los campos", [
        {
          text: "Continuar",
          style: "destructive",
        },
      ]);
    } else {
      dispatch(startLogIn(cedula, password));
    }
  };

  const showPass = () => {
    if (value.press == false) {
      setValue({
        ...value,
        showPass: false,
        press: true,
      });
    } else {
      setValue({
        ...value,
        showPass: true,
        press: false,
      });
    }
  };

  //validaciones de datos
  const validateCedula = (cedula, type) => {
    let alph = /^([0-9]{0,10})$/;
    if (type == "cedula") {
      if (alph.test(cedula)) {
        setValue({
          ...value,
          cedula: cedula,
        });
      } else {
        Alert.alert("MIES APP", "Digite un número de cédula válido", [
          {
            text: "Continuar",
            onPress: () => console.log("alert closed"),
            style: "destructive",
          },
        ]);
      }
    }
  };

  return (
    <>
      <View style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={lgLogin} style={styles.logoLogin} />
          <Text style={styles.TituloLogin}>Ingresa tus credenciales</Text>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"md-person-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Cédula"
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(text) => validateCedula(text, "cedula")}
            value={value.cedula}
            maxLength={10}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"lock-closed-outline"}
            size={30}
            color={"rgba(0,0,0,1)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={value.showPass}
            placeholderTextColor={"rgba(0,0,0,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={(text) =>
              setValue({ ...value, password: text, validacion: false })
            }
            value={value.password}
          />
          <TouchableOpacity style={styles.btnEye} onPress={showPass.bind()}>
            <Ionicons
              name={
                value.press == false ? "ios-eye-outline" : "ios-eye-off-outline"
              }
              size={26}
              color={"rgba(0,0,0,1)"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecuperarContrasena")}
        >
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            value.validacion ? styles.btnLoginDisabled : null,
            !value.validacion ? styles.btnLogin : null,
          ]}
          onPress={validacionLogin}
          disabled={value.validacion}
        >
          <Text style={styles.buttontext}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
