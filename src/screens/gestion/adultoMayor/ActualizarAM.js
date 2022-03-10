import { Thumbnail, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import AvUser from "../../../../assets/img_sistema/user.png";
import "moment/locale/es";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesInfo } from "../../../estilos/styleInfo";
import { _ScrollView } from "react-native";
import { LogBox } from "react-native";
import { TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSelector } from "react-redux";
import moment from "moment";
import { Alert } from "react-native";

export const ActualizarAM = (props) => {
  const { id } = useSelector((state) => state.auth);
  const params = props.route.params;
  const navigation = props.navigation;
  const [values, setValues] = useState({
    am_id: params.id,
    nombre: params.nombre,
    apellido: params.apellido,
    cedula: params.cedula,
    domicilio: params.domicilio,
    autoidentificacion: params.autoidentificacion,
    genero: params.genero,
    edad: params.edad,
    origen: params.origen,
    nacimiento: params.nacimiento,
    registro: params.registro,
    disabled: true,
  });

  const{am_id} = values;
  const {nombre} = values;
  const {apellido} = values;
  const {cedula} = values;
  const {domicilio} = values;
  const {autoidentificacion} = values;
  const {genero} = values;
  const {edad} = values;
  const {origen} = values;
  const {nacimiento} = values;
  const {registro} = values;




  const [date, setDate] = useState(new Date(values.nacimiento));
  const [dateRegistro, setDateRegistro] = useState(new Date(values.registro));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibleRegsitro, setDatePickerVisibilityRegsitro] =
    useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    console.log("Nacimiento " + values.nacimiento);
  };

  const handleDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setValues({ ...values, nacimiento: moment(currentDate).format("YYYY-MM-DD") });
    hideDatePicker();
  };

  const showDatePickerRegistro = () => {
    setDatePickerVisibilityRegsitro(true);
  };

  const hideDatePickerRegistro = () => {
    setDatePickerVisibilityRegsitro(false);
    //console.log("Nacimiento " + values.nacimiento);
  };

  const handleDateRegistro = (event, selectedDate) => {
    const currentDate = selectedDate || dateRegistro;
    setDateRegistro(currentDate);
    setValues({
      ...values,
      registro: moment(currentDate).format("YYYY-MM-DD"),
    });
    hideDatePickerRegistro();
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
    LogBox.ignoreLogs([
      "componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details",
    ]);
  }, []);

  const validarNumeros = (edad) => {
    let alph = /^([0-9]{0,10})$/;
    if (alph.test(edad)) {
      setValues({ ...values, edad: edad });
    } else {
      Alert.alert("MIES APP", "La edad tiene que ser numérica", [
        {
          text: "Continuar",
          onPress: () => console.log("alert closed"),
          style: "destructive",
        },
      ]);
    }
  };

  const actualizar = async () => {
    try {
      console.log('entra')
      const response = await fetch(
        "http://192.188.58.82:3000/actualizarAdultoMayorById/" + values.am_id + "",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          am_nombre: nombre,
          am_apellido: apellido,
          am_cedula: cedula,
          am_domicilio: domicilio,
          am_autoidentificacion_etnica: autoidentificacion,
          am_sexo: genero,
          am_pais_de_origen: origen,
          am_fecha_de_nacimiento: nacimiento,
          am_fecha_registro: registro,
        })
        }
      );
      console.log('pasa')
      console.log(response.status)
      if(response.status == 200){
        navigation.navigate("HeaderInicio")
      }else{
        Alert.alert("MIES APP", "Error al actualizar. Intente más tarde. ", [
          {
            text: "Continuar",
            //onPress: {onRefresh},
            style: "destructive",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              alignItems: "center",
              paddingTop: 30,
              paddingBottom: 10,
            }}
          >
            <Thumbnail
              square
              source={AvUser}
              style={{ width: 150, height: 150 }}
            />
          </View>
          <Text style={stylesInfo.subtitulo}>
            {values.nombre + " " + values.apellido}
          </Text>
          <View style={stylesInfo.containerGeneral}>
            <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Técnico:</Text>
                
              </View>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Unidad de Atención:</Text>

              </View>
            </View>
            <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Cédula:</Text>
                <Text style={stylesInfo.resp}>{values.cedula}</Text>
              </View>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Nacimiento:</Text>
                <TouchableOpacity
                  style={stylesInfo.btnFecha}
                  onPress={showDatePicker}
                >
                  <Text>{values.nacimiento}</Text>
                </TouchableOpacity>
                {isDatePickerVisible && (
                  <DateTimePicker
                    value={date}
                    mode={"date"}
                    display="default"
                    timeZoneOffsetInMinutes={0}
                    onChange={handleDate}
                  />
                )}
              </View>
            </View>
            <View style={stylesInfo.container}>
              <Text style={stylesInfo.items}>Dirección:</Text>
              <TextInput
                style={stylesInfo.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) =>
                  setValues({ ...values, domicilio: text })
                }
                value={values.domicilio}
              />
              <Text style={stylesInfo.items}>Autoidentificación:</Text>
              <TextInput
                style={stylesInfo.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) =>
                  setValues({ ...values, autoidentificacion: text })
                }
                value={values.autoidentificacion}
              />
            </View>
            <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Género:</Text>
                <TextInput
                  style={stylesInfo.input}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) =>
                    setValues({ ...values, genero: text })
                  }
                  value={values.genero}
                />
              </View>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Edad:</Text>
                <TextInput
                  style={stylesInfo.input}
                  maxLength={3}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => validarNumeros(text)}
                  value={String(values.edad)}
                />
              </View>
            </View>
            <View style={[stylesInfo.containerRow, { flexDirection: "row" }]}>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>País de Origen:</Text>
                <TextInput
                  style={stylesInfo.input}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) =>
                    setValues({ ...values, origen: text })
                  }
                  value={values.origen}
                />
              </View>
              <View style={stylesInfo.containerColumn}>
                <Text style={stylesInfo.items}>Registro:</Text>
                <TouchableOpacity
                  style={stylesInfo.btnFecha}
                  onPress={showDatePickerRegistro}
                >
                  <Text>{values.registro}</Text>
                </TouchableOpacity>
                {isDatePickerVisibleRegsitro && (
                  <DateTimePicker
                    value={dateRegistro}
                    mode={"date"}
                    display="default"
                    timeZoneOffsetInMinutes={0}
                    onChange={handleDateRegistro}
                  />
                )}
              </View>
            </View>
          </View>
          <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          {
            <TouchableOpacity
            style={stylesInfo.btnActualizar}
            onPress={actualizar}
          >
            <Text style={stylesInfo.textBtn}>Actualizar</Text>
          </TouchableOpacity>}
         
          <TouchableOpacity
            style={stylesInfo.btnCancelar}
            onPress={() => navigation.navigate("HeaderInicio")}
          >
            <Text style={stylesInfo.textBtn}>Cancelar</Text>
          </TouchableOpacity>
        </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
