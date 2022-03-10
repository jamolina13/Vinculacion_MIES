import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Card, CardItem } from 'native-base';
import { CheckBox } from 'react-native-elements'
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity, AsyncStorage
} from 'react-native';

import bgImage from '../../../assets/img_sistema/fondo_login.jpg';
import * as Font from 'expo-font';

const { width: WIDTH } = Dimensions.get('window');


export class FormaTest extends Component {

  TestBarthel = () => {
    this.props.navigation.navigate('TestBarthel')
  }

  ListAdultoM = () => {
    this.props.navigation.navigate('ListaAM')
  }

  Test = () => {
    this.props.navigation.navigate('Test')
  }

  constructor() {
    super()
    //this.AdultosMayores()
    this.state = {
      isReady: false,
      usuario: "",
      clave: "",
      listadoAdultMay: [],
      asistida: false,
      independiente: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }

  asistida() {
    //alert('Punto de Atención');
    this.setState({ asistida: true, independiente: false })
  }

  independiente() {
    //alert('Domicilio');
    this.setState({ independiente: true, asistida: false })
  }

  render() {
    return (

      <ImageBackground source={bgImage} style={styles.backgroundContainer} >
        <Content padder >
          <View style={styles.ContainerTitulo}>
            <Text style={styles.Titulo}>Test</Text>
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.text}>Estas encuestas deben ser realizadas de preferencia por el Adulto Mayor.</Text>
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.textSub}>El siguiente formato se realizará de manera:</Text>
          </View>
          <View style={{ paddingLeft: 25, paddingTop: 15 }}>
            <CheckBox checked={this.state.asistida}
              onPress={() => this.asistida()}
              containerStyle={{ backgroundColor: 'transparent' }}
              title={<Text style={styles.textOption}>Asistida</Text>} />
            <CheckBox checked={this.state.independiente}
              onPress={() => this.independiente()}
              containerStyle={{ backgroundColor: 'transparent' }}
              title={<Text style={styles.textOption}>Independiente</Text>} />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btnContinuar} onPress={this.Test}>
              <Text style={styles.textBtn}>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSalir} onPress={this.ListAdultoM}>
              <Text style={styles.textBtn}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </ImageBackground>
    );
  }
}

export default FormaTest;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 50,
  },
  ContainerTitulo: {
    width: WIDTH - 45
  },
  Titulo: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 0.8,
    textAlign: 'center',
    paddingTop: 50,
  },
  text: {
    paddingTop: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 30,
  },
  textSub: {
    paddingTop: 35,
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 30,
  },
  textOption: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 20
  },
  ContainerText: {
    width: WIDTH - 55
  },
  btnContinuar: {
    width: WIDTH - 300,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#005DA6',
    justifyContent: 'center',
    marginTop: 50,
    marginRight: 30
  },
  btnSalir: {
    width: WIDTH - 300,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#de0404',
    justifyContent: 'center',
    marginTop: 50,
  },
  textBtn: {
    color: '#ffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
