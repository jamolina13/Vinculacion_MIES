
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
//import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';



//Función qu  e contiene el componente para seleccionar imagenes de la galería

function ImagePickerChoose(props) {




  const [image, setImage] = useState(null);
  const [photoStatus, setPhotoStatus] = useState('No se ha seleccionado ninguna imagen');

  //controla que los permisos para acceder a la galería hayan sido dados
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Lo sentimos, se necesitan permisos para acceder a la galería');
        }
      }
    })();
  }, []);
  //Selecciona una imágen de manera asincrina desde la galeria y cuando se carga
  //manda a llamar a la función parentCallBack para enviarle el uri al componente padre
  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      setPhotoStatus('Listo! la imagen fue cargada exitosamente')
    }
    props.parentCallBack(result)
  };
  return (

    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <FontAwesome name="image" size={20} color="black" />
        <Text style={styles.btnText}> Seleccionar Imagen</Text>
      </TouchableOpacity>
      <Text style={styles.TextInfo1}>{photoStatus}</Text>
      {image && <Image source={{ uri: image }} style={{ width: 260, height: 260, marginTop: 20 }} />}
    </View>


  );
}

const { width: WIDTH } = Dimensions.get('window')
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export class Observaciones extends React.Component {

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('../../../assets/dummy.png')}
        style={styles.images}
      />
    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        source={require('../../../assets/galeryImages.jpg')}
        style={styles.images}
      />
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      image: '',//obtiene la imagen del componente ImagePickerChoose
    }
  }
  setImageState = (img) => {
    this.setState({
      image: img.uri

    }


    )
    console.log('image', this.state.image);

    function getBase64Image(image) {
      var canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      var dataURL = canvas.toDataURL();
      return dataURL;
    }
    
    var base64 = getBase64Image(document.getElementById("image"));
    console.log(base64);
  
  }

 


  //función para subir imagen al server, API

  uploadImage = async () => {

    console.log("hola");
    console.log(dataURL);

    try {

      const response = await fetch(
        "http://192.188.58.82:3000/actualizarFotObsEncabezadoById/264",/* DEBES PONER EL ID QUE TE SALE EN ENCABEZADO */
        {
          method: "POST",
          headers: {
            "Accept": "Application/json",
            "Content-type": "Application/json",
          },

          body: JSON.stringify({
            ef_observacion_preguntas: "",
            ef_observacion_tecnico: "Prueba",
            ef_foto_adulto: base64,
          }),
        }
      );
      if (response.status == 200) {
        //const json = await response.json();
        console.log("hola200");

        
      } else {

        
      }
    } catch (error) {
      console.error(error);
    }
    console.log(
      JSON.stringify({
        
        ef_observacion_tecnico: state.observacion_tecnico,
       
        ef_foto_adulto: state.foto_adulto,
        
      })
    );


  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.TextInfo}>Registre todas las anomalias que noto en el adulto mayor durante la realizacion de los test.</Text>
            <Textarea class="Anomalias"
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={500}
              placeholder={'El adulto mayor tardo un tiempo considerable en responder las preguntas de indole familiar y emocional。。。'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            />
            <Text style={styles.TextInfo}>Registre todos los problemas que se le presentaron a la hora  de realizar la visita.</Text>
            <Textarea class="Anomalias"
              containerStyle={styles.textareaContainer}
              style={styles.textarea}
              onChangeText={this.onChange}
              defaultValue={this.state.text}
              maxLength={500}
              placeholder={'La movilidad fue algo muy complejo。。。'}
              placeholderTextColor={'#c7c7c7'}
              underlineColorAndroid={'transparent'}
            />
            <Text style={styles.TextInfo}>Seleccione una imagen del adulto mayor</Text>
            {/* <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Camara')}>
              <FontAwesome name="camera" size={20} color="black" />
              <Text style={styles.btnText}> Tomar foto</Text>
            </TouchableOpacity> */}

            <ImagePickerChoose parentCallBack={this.setImageState}></ImagePickerChoose>
            <TouchableOpacity style={styles.button1} onPress={this.uploadImage}>
              <FontAwesome name="upload" size={20} color="white" />
              <Text style={styles.btnText}> Subir Foto</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
            <TouchableOpacity style={styles.btnRegistrar}
              onPress={() => this.props.navigation.navigate('Test')}>
              <Text style={styles.text}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancelar} onPress={() => this.props.navigation.navigate('Test')}>
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
};

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
