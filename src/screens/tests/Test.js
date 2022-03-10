import {
  Content,
  Thumbnail, Text
} from 'native-base';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

//import AvUser from '../../../assets/img_sistema/user.png';
import Escala_Lawton_Brody from '../../../assets/img_sistema/Escala_Lawton_Brody.png';
import Escala_Yesavage from '../../../assets/img_sistema/Escala_Yesavage.png';
import Mini_Examen_Mental from '../../../assets/img_sistema/Mini_Examen_Mental.png';
import Indice_Barthel from '../../../assets/img_sistema/Indice_Barthel.png';

const { width: WIDTH } = Dimensions.get('window')

export const Test = (props) => {
const navigation = props.navigation;
const params = props.route.params;
  //static contextType = NavigationContext;
  const [state, setstate]=useState({
    isReady: false,
    listadoAdultMay: [],
    enc_id:params.enc_id,
    id: params.id,
    
    nombre: params.nombre,
    apellido: params.apellido,
  });


  

  const TestBarthel = () => {
    navigation.navigate('TestBarthel')
  }

  const TestMiniExamenMental = () => {
    navigation.navigate('TestMiniExamenMental')
  }

  const IndiTestLawtonBrody = () => {
    navigation.navigate('IndiTestLawtonBrody')
  }

  const IndiTestYesavage = () => {
    navigation.navigate('IndiTestYesavage')
  }

  const Observaciones = () => {
    navigation.navigate('Observaciones')
  }

  const CrearEncabezado = () => {
    navigation.navigate('Encabezado')
  }

  return (
  <Content padder >
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
        Adulto Mayor: {' ' + state.nombre + ' ' + state.apellido}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
        encabezado id: {' ' + state.enc_id }</Text>
        
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <View style={{ alignItems: 'center', padding: 20 }}>
          <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }} 
          onPress={IndiTestYesavage}>
            <View style={{ alignItems: 'center' }}>
              <Thumbnail square source={Escala_Yesavage} style={{ width: 125, height: 125 }} />
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text>ESCALA DE</Text>
            <Text>YESAVAGE</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', padding: 20 }}>
          <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }} onPress={TestBarthel}>
            <View style={{ alignItems: 'center' }}>
              <Thumbnail square source={Indice_Barthel} style={{ width: 125, height: 125 }} />
            </View>
          </TouchableOpacity >
          <View style={{ alignItems: 'center' }}>
            <Text>INDICE DE</Text>
            <Text>BARTHEL</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', paddingRight: 20, paddingLeft: 20 }}>
          <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }} onPress={IndiTestLawtonBrody}>
            <View style={{ alignItems: 'center' }}>
              <Thumbnail square source={Escala_Lawton_Brody} style={{ width: 125, height: 125 }} />
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text>ESCALA DE</Text>
            <Text>LAWTON Y BRODY</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', paddingRight: 20, paddingLeft: 20 }}>
          <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }} onPress={TestMiniExamenMental}>
            <View style={{ alignItems: 'center' }}>
              <Thumbnail square source={Mini_Examen_Mental} style={{ width: 125, height: 125 }} />
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text>MINI EXAMEN DEL</Text>
            <Text>ESTADO MENTAL</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View>
          <TouchableOpacity style={styles.btnContinuar} onPress={Observaciones}>
            <Text style={styles.textBtn}>AGREGAR</Text>
            <Text style={styles.textBtn}>OBSERVACIÓN</Text>
          </TouchableOpacity>
          { <TouchableOpacity style={styles.btnContinuar}>
            <Text style={styles.textBtn}>VER</Text>
            <Text style={styles.textBtn}>RESULTADOS</Text>
          </TouchableOpacity> }
        </View>
      </View>
    </View>
  </Content>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 20,
  },
  Titulo: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    opacity: 0.5,
    textTransform: 'uppercase',
    marginLeft: 15
  },
  text: {
    paddingTop: 10,
    fontWeight: 'bold'
  },
  btnContinuar: {
    width: WIDTH - 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#005DA6',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop: 50,
  },
  btnSalir: {
    width: WIDTH - 230,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#de0404',
    justifyContent: 'center',
    marginTop: 50,
  },
  textBtn: {
    color: '#ffff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
