import React, { Component, useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View, Alert,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
  pickImage, image, TouchableHighlight,
  ScrollView
} from 'react-native';
import bgImage from '../../../assets/img_sistema/fondo_login.jpg';
import Textarea from 'react-native-textarea';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { Camera } from "expo-camera";



//Función que contiene el componente para seleccionar imagenes de la galería



const { width: WIDTH } = Dimensions.get('window')

export const Observaciones = (props) => {
  const { id } = useSelector((state) => state.auth);
  const params = props.route.params;
  const navigation = props.navigation;
  const enc_id = params.enc_id;
  //const enc_id = params.enc_id;
  const [values, setValues] = useState({
    observacion_preguntas: params.observacion_preguntas,
    observacion_tecnico: params.observacion_tecnico,
    foto_adulto: params.foto_adulto,
  });
  //const { enc_id } = values;
  const { observacion_preguntas } = values;
  const { observacion_tecnico } = values;
  const { foto_adulto } = values;


  const preguntarPermisos = async () => {
    //const permissionResult = await Permissions.askAsync(Permissions.CAMERA)
    const permissionResult = await Camera.requestPermissionsAsync();
    if (permissionResult.status !== 'granted') {
      Alert.alert('No se puede accceder a la camara!', [{ text: 'ok' }])
      return false
    }
    return true
  }
  var image;
  const tomarFoto = async () => {
    // nos aseguramos de que tengamos el permiso
    const permisos = await preguntarPermisos()
    if (!permisos) {
      return
    } else {
      // inicia la cámara con la siguiente configuración
      image = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 0.5,
        base64: true,
      })
    } return (
      <View style={styles.container}>
        <Image source={{ uri: image.base64 }} style={{ width: 260, height: 260, marginTop: 20 }} />
      </View>
    )
  }


  //función para subir imagen al server, API

  const enviarDatos = async () => {
    try {
      if (!image.cancelled) {
        console.log("entra a enviar");
        const response = await fetch("http://192.188.58.82:3000/actualizarFotObsEncabezadoById/" + enc_id + "",
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            // enviar la cadena base64 como solicitud POST
            body: JSON.stringify({
              ef_observacion_preguntas: observacion_preguntas,
              ef_observacion_tecnico: observacion_tecnico,
              ef_foto_adulto: image.base64,
            }),
          });
        console.log("registro actualizado")
        console.log(response.status)

        if (response.status == 200) {
          Alert.alert("MIES APP", "Registro Actualizado. ", [
            {
              text: "Continuar",
              //onPress: {onRefresh},
              style: "destructive",
            },
          ]);
          navigation.navigate("Test")
        } else {
          Alert.alert("MIES APP", "Error al actualizar. Intente más tarde. ", [
            {
              text: "Continuar",
              //onPress: {onRefresh},
              style: "destructive",
            },
          ]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.TextInfo}>AGREGAR LAS OBSERVACIONES PRIMERO </Text>
          <Text style={styles.TextInfo}></Text>
          <Text style={styles.TextInfo}>Registre todas las anomalias que noto en el adulto mayor durante la realizacion de los test.</Text>
          <Textarea class="Anomalias"
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            maxLength={500}
            placeholder={'El adulto mayor tardo un tiempo considerable en responder las preguntas de indole familiar y emocional。。。'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
            onChangeText={(text) =>
              setValues({ ...values, observacion_preguntas: text })
            }
            value={values.observacion_preguntas}
          />
          <Text style={styles.TextInfo}>Registre todos los problemas que se le presentaron a la hora  de realizar la visita.</Text>
          <Textarea class="Anomalias"
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            maxLength={500}
            placeholder={'La movilidad fue algo muy complejo。。。'}
            placeholderTextColor={'#c7c7c7'}
            underlineColorAndroid={'transparent'}
            onChangeText={(text) =>
              setValues({ ...values, observacion_tecnico: text })
            }
            value={values.observacion_tecnico}
          />
          <Text style={styles.TextInfo}>Tomar una fotografía al adulto mayor</Text>
          <TouchableOpacity style={styles.button2} onPress={tomarFoto}>
            <FontAwesome name="camera" size={20} color="black" />
            <Text style={styles.btnText}> Tomar foto</Text>
          </TouchableOpacity>
          <Text style={styles.TextInfo}></Text>

          {/*<ImagePickerChoose parentCallBack={this.setImageState}></ImagePickerChoose>
            <TouchableOpacity style={styles.button1} onPress={this.uploadImage}>
              <FontAwesome name="upload" size={20} color="white" />
              <Text style={styles.btnText}> Subir Foto</Text>
            </TouchableOpacity>*/}

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
          <TouchableOpacity style={styles.btnRegistrar}
            onPress={enviarDatos}>
            <Text style={styles.text}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.navigate('Test')}>
            <Text style={styles.text}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default Observaciones;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginBottom: 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 70,
  },
  logoLogin: {

    height: 150
  },
  tituloContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  tituloLabel: {
    alignItems: 'stretch',
    marginBottom: 50,
    marginTop: 20
  },
  TituloLogin: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    opacity: 0.5
  },
  TextInfo: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    opacity: 40,
    marginBottom: 10
  },
  TextInfo1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    opacity: 40,
    marginBottom: 30
  },
  labelEdad: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    //opacity: 0.5
    textAlign: 'left',
  },
  inputContainer: {
    marginTop: 10
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingRight: 30,
    paddingLeft: 30
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,1)',
    marginHorizontal: 25,

  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#85929E',
    margin: 30,
    borderRadius: 10,
    height: 60,
    width: 200,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#85929E',
    marginBottom: -20,
    borderRadius: 10,
    height: 60,
    width: 200,
    marginTop: 30
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    margin: 30,
    borderRadius: 10,
    height: 60,
    width: 200,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 5,
  },
  textareaContainer: {
    height: 150,
    padding: 5,
    backgroundColor: '#F5FCFF',
    marginBottom: 30,
    marginTop: 10
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,1)',
    marginHorizontal: 25,

  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  forgot: {
    color: 'rgba(0,0,0,1)',
    fontSize: 18,
    paddingTop: 20,
  },
  btnRegistrar: {
    width: 160,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#005DA6',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnCancelar: {
    width: 160,
    height: 45,
    borderRadius: 45,
    marginBottom: 20,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    marginTop: 20,
  },
  TextInfo: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    textAlign: 'justify',
  },
  TextInfo1: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 0,
    opacity: 0.5,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: WIDTH - 110,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#C0C0C0',
    justifyContent: 'center',
    marginTop: 20,


  },
  btnText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    width: WIDTH - 110,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
  }
});
