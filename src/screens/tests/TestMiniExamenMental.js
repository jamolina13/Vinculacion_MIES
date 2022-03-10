import React, { Component, useState } from 'react';
import { Image,
         StyleSheet, 
         Text, 
         View,
        ImageBackground, 
        TextInput,
        Dimensions,
        TouchableOpacity,
        ScrollView} from 'react-native';
import bgImage from '../../../assets/img_sistema/fondo_login.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
const {width: WIDTH} = Dimensions.get('window')


export  const TestMiniExamenMental =(props) =>{
  const [state, setState ] = useState({
    nombreUsuario: "",
          unidadAtencion: "",
          zona: "",
          distrito: "",
          modalidad: "",
          aplicadoPor: "",
          edad: "",
          fecha_registro: "",
          fecha_registro: moment(new Date()).format("YYYY-MM-DD"),
          //Ver y ocultar clave
          showPass: true,
          press: false
  });

  const navigation= props.navigation;
  

    return (
      <ScrollView style={styles.scrollView}>
        <View tyle={styles.tituloContainer}>
            <Text style={styles.TituloLogin}>Mini Examen del</Text> 
            <Text style={styles.TituloLogin}>  Estado Mental</Text> 
        </View>

        <View tyle={styles.titulLabel}>
            <Text style={styles.TextInfo}>FICHA N° 3c</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Nombre del usuario'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {(text) => setState({...state, nombreUsuario: text})}
          />
        </View>
        <View style={styles.inputContainer}>
            
            <Icon name={'ios-pin'} size={30} color={'rgba(0,0,0,1)'} 
            style={styles.inputIcon}/>
            <TextInput
              style={styles.input}  
              placeholder={'Zona'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText= {(text) => setState({...state, zona:text})}
            />
        
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-locate'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Distrito'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {(text) => setState({...state, distrito: text})}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-time'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Modalidad de Atención'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {(text) => setState({...state, modalidad:text})}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'md-school'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Nombre de Unidad de Atención'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {(text) => setState({...state, unidadAtencion: text})}
          />
        </View>

        <View style={styles.inputContainer}>
            <Icon name={'md-time'} size={30} color={'rgba(0,0,0,1)'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Edad'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={(text) => setState({ ...state,edad : text })}
            />
          </View>     
      
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Aplicado por'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {(text) => setState({...state, aplicadoPor: text})}
          />
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
                  date={state.fecha_registro}
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
                  onDateChange={(date) => {
                    setState({...state, fecha_registro: date});
                  }}
                  onChangeText={(date) => setState({...state, fecha_registro: date })}
                />
              </View>
            </View>
          </View>

        <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%'}}>
        <TouchableOpacity style={styles.btnRegistrar} 
        onPress={() => navigation.navigate('PreguntasMiniExamenMental')}>
          <Text style={styles.text}>Siguiente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.navigate('Test')}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>

    );

}

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      //alignItems: 'center',
      justifyContent: 'center',
      paddingTop:20
    },
    scrollView: {
     // backgroundColor: 'pink',
      marginBottom: 0,
    },
    logoContainer:{
      alignItems: 'center',
      marginBottom: 0,
      marginTop: 20,
    },
    logoLogin: {
      
      height: 120 
    },
    tituloContainer:{
      alignItems: 'center',
      marginBottom: 50,
      
    },
    tituloLabel:{
        alignItems: 'stretch',
        marginBottom: 50,
        textAlign: 'center'
      },
    TituloLogin: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 0,
      opacity: 0.5,
      textAlign: 'center'
    },
    TextInfo: {
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 0,
        opacity: 0.5,
        textAlign: 'center'
      },
    labelEdad:{
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
    forgot:{
      color:'rgba(0,0,0,1)',
      fontSize:18,
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
    text: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    fechareg: {
      marginTop: 10,
      textAlign: 'left',
      alignItems: 'flex-end',
      width: WIDTH - 215,
    },
    datePickerStyle2: {
      width: WIDTH - 220,
      marginTop: 2,
      textAlign: 'left'
    },
    inputIconDate: {
      position: 'absolute',
      top: 5,
      left: 35,
    },
    inputIconDate2: {
      position: 'absolute',
      top: 5,
      left: 20,
      //marginLeft: WIDTH - 400,
    },
  });