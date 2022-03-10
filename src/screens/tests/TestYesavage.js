import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView, Alert
} from 'react-native';
import bgImage from '../../../assets/img_sistema/fondo_login.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';
//import DatePicker from '@react-native-community/datetimepicker';
//https://snack.expo.io/@phattran1201/date-picker-example
import moment from 'moment';

const { width: WIDTH } = Dimensions.get('window')

export class TestYesavage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nombreUsuario: "",
      unidadAtencion: "",
      zona: "",
      distrito: "",
      modalidad: "",
      edad: "",
      fecha_registro: "",
      aplicadoPor: "",
      fecha_registro: moment(new Date()).format("YYYY-MM-DD"),
      //Ver y ocultar clave
      showPass: true,
      press: false,
      
      //Validaciones
      nombresValidate: true,
      unidadAtencionValidate: true,
      zonaValidate: true,
      distritoValidate: true,
      modalidadValidate: true,
      edadValidate: true,
      aplicadoPorValidate: true,
    }
  }
  checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  }
  dateTimeInputChangeHandler = (e) => {
    this.type = 'text';
    var input = e;
    var expr = new RegExp(/\D\/$/);
    if (expr.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[1]) values[1] = this.checkValue(values[1], 12);
    if (values[0]) values[0] = this.checkValue(values[0], 31);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + '/' : v;
    });
    this.setState({
      registrationDate: output.join('').substr(0, 14),
    });
  };
  registroEncabezado = async () => {
    //alert('OK');
    const { nombreUsuario } = this.state;
    const { unidadAtencion } = this.state;
    const { zona } = this.state;
    const { distrito } = this.state;
    const { modalidad } = this.state;
    const { edad } = this.state;
    const { fecha_registro } = this.state;
    const { aplicadoPor } = this.state;

    return await fetch('http://192.168.100.6/pruebas_react/registraEnca.php', {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        nombreUsuario: nombreUsuario,
        unidadAtencion: unidadAtencion,
        zona: zona,
        distrito: distrito,
        modalidad: modalidad,
        edad: edad,
        fecha_registro: fecha_registro,
        aplicadoPor: aplicadoPor,
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        //alert(responseJson);
        if (responseJson === "Ok") {
          //alert("Bienvenido");
          Alert.alert('Registro de Información', 'Datos Registrados correctamente...', [{ text: 'Continuar', onPress: () => this.props.navigation.navigate('PreguntasTestYesavage'), style: 'destructive' }]);
        } else {
          //alert("Todos los campos son obligatorios");
          Alert.alert('Error de Registro', 'Todos los campos son obligatorios', [{ text: 'Aceptar' }]);

        }
      }).catch((error) => {
        console.log(error);
      });

  }
  
  validateNombre(nombreUsuario, type) {
    var alph = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    if (type == 'nombres') {
      if (alph.test(nombreUsuario)) {
        this.setState({ nombresValidate: true })
        this.setState({ nombreUsuario })
      } else {
        this.setState({ nombresValidate: false })
      }
    }
  }

  validateUnidadAtencion(unidadAtencion, type) {
    var alph = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    if (type == 'unidad') {
      if (alph.test(unidadAtencion)) {
        this.setState({ unidadAtencionValidate: true })
        this.setState({ unidadAtencion })
      } else {
        this.setState({ unidadAtencionValidate: false })
      }
    }
  }

  validateZona(zona, type) {
    var alph = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    if (type == 'zona') {
      if (alph.test(zona)) {
        this.setState({ zonaValidate: true })
        this.setState({ zona })
      } else {
        this.setState({ zonaValidate: false })
      }
    }
  }

  validateDistrito(distrito, type) {
    var alph = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    if (type == 'distrito') {
      if (alph.test(distrito)) {
        this.setState({ distritoValidate: true })
        this.setState({ distrito })
      } else {
        this.setState({ distritoValidate: false })
      }
    }
  }

  validateModalidad(modalidad, type) {
    var alph = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    if (type == 'modalidad') {
      if (alph.test(modalidad)) {
        this.setState({ modalidadValidate: true })
        this.setState({ modalidad })
      } else {
        this.setState({ modalidadValidate: false })
      }
    }
  }

  validateAplicadoPor(aplicadoPor, type) {
    var alph = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
    if (type == 'aplicadoPor') {
      if (alph.test(aplicadoPor)) {
        this.setState({ aplicadoPorValidate: true })
        this.setState({ aplicadoPor })
      } else {
        this.setState({ aplicadoPorValidate: false })
      }
    }
  }

  validateEdad(edad, type) {
   var alph = /^([0-9]{0,3})$/
    if (type == 'edad') {
      if (alph.test(edad)) {
        this.setState({ edadValidate: true })
        this.setState({ edad })
      } else {
        this.setState({ edadValidate: false })
      }
    }
  }


  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <ScrollView style={styles.scrollView}>
          <View tyle={styles.tituloContainer}>
            <Text style={styles.TituloLogin}>Escala de Yesavage</Text>
          </View>
          <View tyle={styles.titulLabel}>
            <Text style={styles.TextInfo}>Screening de Depresión</Text>
          </View>
          <View tyle={styles.titulLabel}>
            <Text style={styles.TextInfo}>Ficha N° 3d</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'}
              style={styles.inputIcon} />
            <TextInput
              style={[styles.input, !this.state.nombresValidate ? styles.inputError : null]}
              placeholder={'Nombre del Adulto Mayor'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              // onChangeText={nombreUsuario => this.setState({ nombreUsuario })}
              onChangeText={nombreUsuario => this.validateNombre(nombreUsuario, 'nombres')}
            />
          </View>
          <View style={styles.errorContainer}>
            <Text style={[styles.TextDefault, !this.state.nombresValidate ? styles.TextError : null,
            this.state.nombresValidate ? styles.TextErrorValid : null]}>Solo se permiten letras</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon name={'md-school'} size={30} color={'rgba(0,0,0,1)'}
              style={styles.inputIcon} />
            <TextInput
              style={[styles.input, !this.state.unidadAtencionValidate ? styles.inputError : null]}
              placeholder={'Nombre de la Unidad de Atención'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              // onChangeText={unidadAtencion => this.setState({ unidadAtencion })}
              onChangeText={unidadAtencion => this.validateUnidadAtencion(unidadAtencion, 'unidad')}
            />
          </View>
          <View style={styles.errorContainer}>
            <Text style={[styles.TextDefault, !this.state.unidadAtencionValidate ? styles.TextError : null,
            this.state.unidadAtencionValidate ? styles.TextErrorValid : null]}>Solo se permiten letras</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '90%', marginTop: 10, paddingRight: 5, paddingLeft: 5, }}>
            <View style={{ marginLeft: 20, marginRight: 30 }}>
              <Icon name={'ios-pin'} size={30} color={'rgba(0,0,0,1)'}
                style={styles.inputIcon1} />
              <TextInput
                //style={styles.loginBtn1}
                style={[styles.loginBtn1, !this.state.zonaValidate ? styles.inputError : null]}
                placeholder={'Zona'}
                placeholderTextColor={'rgba(0,0,0,0.7)'}
                underlineColorAndroid='transparent'
                //onChangeText={zona => this.setState({ zona })}
                onChangeText={zona => this.validateZona(zona, 'zona')}
              />
              <View style={styles.errorContainer}>
            <Text style={[styles.TextDefault, !this.state.zonaValidate ? styles.TextError : null,
            this.state.zonaValidate ? styles.TextErrorValid : null]}>Solo se permiten letras</Text>
          </View>
            </View>
            
            <View style={{ alignItems: 'flex-end' }}>
              <Icon name={'ios-locate'} size={30} color={'rgba(0,0,0,1)'}
                style={styles.inputIcon1} />
              <TextInput
                style={[styles.loginBtn1, !this.state.distritoValidate ? styles.inputError : null]}
                placeholder={'Distrito'}
                placeholderTextColor={'rgba(0,0,0,0.7)'}
                underlineColorAndroid='transparent'
                //onChangeText={distrito => this.setState({ distrito })}
                onChangeText={distrito => this.validateDistrito(distrito, 'distrito')}
              />
              <View style={styles.errorContainer}>
            <Text style={[styles.TextDefault, !this.state.distritoValidate ? styles.TextError : null,
            this.state.distrito ? styles.TextErrorValid : null]}>Solo se permiten letras</Text>
          </View>
            </View>
            
          </View>

          <View style={styles.inputContainer}>
            <Icon name={'ios-time'} size={30} color={'rgba(0,0,0,1)'}
              style={styles.inputIcon} />
            <TextInput
              //style={styles.input}
              style={[styles.input, !this.state.modalidadValidate ? styles.inputError : null]}
              placeholder={'Modalidad de Atención'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              //onChangeText={modalidad => this.setState({ modalidad })}
              onChangeText={modalidad => this.validateModalidad(modalidad, 'modalidad')}
            />
          </View>
          <View style={styles.errorContainer}>
            <Text style={[styles.TextDefault, !this.state.modalidadValidate ? styles.TextError : null,
            this.state.modalidadValidate ? styles.TextErrorValid : null]}>Solo se permiten letras</Text>
          </View>

          <View style={styles.inputContainer}>
            <Icon name={'md-time'} size={30} color={'rgba(0,0,0,1)'}
              style={styles.inputIcon} />
            <TextInput
              style={[styles.input, !this.state.edadValidate ? styles.inputError : null]}
              placeholder={'Edad'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              //onChangeText={edad => this.setState({ edad })}
              onChangeText={edad => this.validateEdad(edad, 'edad')}
            />
          </View>
          <View style={styles.errorContainer}>
            <Text style={[styles.TextDefault, !this.state.edadValidate ? styles.TextError : null,
            this.state.edadValidate ? styles.TextErrorValid : null]}>Debe ingresar hasta 3 digitos numéricos</Text>
          </View>

          <View style={styles.inputContainer}>
            <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'}
              style={styles.inputIcon} />
            <TextInput
              style={[styles.input, !this.state.aplicadoPorValidate ? styles.inputError : null]}
              placeholder={'Aplicado por:'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={aplicadoPor => this.setState({ aplicadoPor })}
              onChangeText={aplicadoPor => this.validateAplicadoPor(aplicadoPor, 'aplicadoPor')}
            />
          </View>
          <View style={styles.errorContainer}>
            <Text style={[styles.TextDefault, !this.state.aplicadoPorValidate ? styles.TextError : null,
            this.state.aplicadoPorValidate ? styles.TextErrorValid : null]}>Solo se permiten letras</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginTop: 20, fontSize: 16, marginLeft: 25, fontWeight: 'bold' }}>Fecha de Realización: </Text>
            <View style={styles.fechareg}>
              <Icon name={'ios-calendar'} size={30} color={'rgba(0,0,0,1)'}
                style={styles.inputIconDate2} />
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left', alignContent: 'stretch' }}>

                <DatePicker

                  showIcon={false}
                  androidMode="spinner"
                  disabled={true}
                  style={styles.datePickerStyle2}
                  date={this.state.fecha_registro}
                  mode="date"
                  //placeholder="Fecha de registro"
                  placeholderTextColor={'rgba(0,0,0,0.35)'}
                  //underlineColorAndroid='transparent'
                  format="YYYY-MM-DD"
                  maxDate={moment().format('YYYY-MM-DD')}
                  confirmBtnText="Chọn"
                  cancelBtnText="Hủy"
                  customStyles={{
                    disabled: {
                      backgroundColor: 'transparent'
                    },
                    dateInput: {
                      width: WIDTH - 55,
                      height: 45,
                      borderRadius: 45,
                      fontSize: 10,
                      backgroundColor: 'rgba(0,0,0,0.35)',
                      color: 'rgba(0,0,0,0.7)',
                    },
                  }}
                  onDateChange={(fecha_registro) => {
                    this.setState({ fecha_registro: fecha_registro });
                  }}
                  onChangeText={fecha_registro => this.setState({ fecha_registro })}
                />
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btnRegistrar}
              onPress={this.registroEncabezado}>
              <Text style={styles.text}>Siguiente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancelar} onPress={() => this.props.navigation.navigate('IndiTestYesavage')}>
              <Text style={styles.text}>Regresar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }


};
export default TestYesavage;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
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
    marginBottom: 50
  },
  TituloLogin: {
    color: 'black',
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    textAlign: 'center'
  },
  inputContainer1: {
    marginTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
  },
  loginBtn1: {
    width: WIDTH - 240,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 45,
    fontSize: 16,
    height: 45,
    alignItems: "center",
    paddingLeft: 45,
    marginTop: 0,
    flexDirection: 'row',
    marginBottom: 3,
    color: 'white'
  },
  datePickerStyle: {
    width: WIDTH - 55,
    marginTop: 2,
    textAlign: 'left'
  },
  inputIcon1: {
    position: 'absolute',
    top: 7,
    left: 11,
  },
  fechareg: {
    marginTop: 10,
    textAlign: 'left',
    alignItems: 'flex-end',
    width: WIDTH - 215,
  },
  inputIconDate2: {
    position: 'absolute',
    top: 5,
    left: 25,
    //marginLeft: WIDTH - 400,
  },
  datePickerStyle2: {
    width: WIDTH - 220,
    marginTop: 2,
    textAlign: 'left'
  },
  TextInfo: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    textAlign: 'center'
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
    marginTop: 10,
    textAlign: 'left'
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
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
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#005DA6',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 30

  },
  btnCancelar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 45,
    marginBottom: 20,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 3
  },
  errorContainer: {
    marginBottom: -10,
    marginTop: 1,
    //backgroundColor: 'blue'
  },
  errorContainer2: {
    marginBottom: -5,
    marginTop: -2
  },
  TextError: {
    color: 'red',
    textAlign: 'center',
    alignItems: 'center'
  },
  TextErrorValid: {
    textAlign: 'center',
    alignItems: 'center',
    opacity: 0.9,
    color: 'rgba(0,0,0,0)'
  },
  TextValid: {
    color: 'green',
    textAlign: 'center',
    alignItems: 'center',
  },
  TextDefault: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'rgba(0,0,0,0)'
  },
  TextDefault1: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'rgba(0,0,0,0)'
  }
});