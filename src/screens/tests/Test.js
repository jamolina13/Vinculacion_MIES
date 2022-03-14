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
   
  var idYesavage= params.idYesavage  
  var idLawton= params.idLawton
  var idMini= params.idMini
  var idBarthel= params.idBarthel
  console.log("----------------------------------------- ")
  console.log("idYesavage: "+idYesavage)
  console.log("idLawton: "+idLawton)
  console.log("idMini: "+idMini)
  console.log("idBarthel: "+idBarthel)

  var validacioIdBarthel=false
  var validacioIdLawton=false
  var validacioIdMini=false
  var validacioIdYesavage= false;
  const [state, setState] = useState({
    isReady: false,
    listadoAdultMay: [],
    enc_id: params.enc_id,
    id: params.id,
    nombre: params.nombre,
    apellido: params.apellido,      
    
    /* 
    idBarthel: params.idBarthel,
    idYesavage: params.idYesavage,
    idLawton: params.idLawton,
    idMini: params.idMini,
    */
  });
  const IndiTestBarthel = () => {
    console.log("Encabezado: "+state.enc_id)
    navigation.navigate('TestBarthel', {
      enc_id: state.enc_id,
    });
  }
  const IndiTestMiniExamenMental = () => {    
    navigation.navigate('TestMiniExamenMental', {
      enc_id: state.enc_id,
    });
  }

  const IndiTestLawtonBrody = () => {    
    navigation.navigate('IndiTestLawtonBrody', {
      enc_id: state.enc_id,
    });
  }

  const IndiTestYesavage = () => {    
    navigation.navigate('IndiTestYesavage', {
      enc_id: state.enc_id,
    });
  }

  const Observaciones = () => {
    navigation.navigate('Observaciones', {
      enc_id: state.enc_id,
    });
  }

  const CrearEncabezado = () => {
    navigation.navigate('Encabezado')
  }


  const validateBarthel = () => {
    if(idBarthel!=undefined){
      validacioIdBarthel=true;     
      return validacioIdBarthel
    }
  }

  const validateYesavage = () => {
    if(idYesavage!=undefined){
      validacioIdYesavage=true;     
      return validacioIdYesavage
    }
  }
 
  const validateLawton = () => {
    if(idLawton!=undefined){
      validacioIdLawton=true;     
      return validacioIdLawton
    }
  }

  const validateMini = () => {
    if(idMini!=undefined){
      validacioIdMini=true;     
      return validacioIdMini
    }
  }

  return (
    <Content padder >
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
          Adulto Mayor: {' ' + state.nombre + ' ' + state.apellido}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>
          encabezado id: {' ' + state.enc_id}</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <View style={{ alignItems: 'center', padding: 20 }}>
            <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }}
              disabled={validateYesavage()}
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
            <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }}
            disabled={validateBarthel()} 
            onPress={IndiTestBarthel}>
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
            <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }} 
            disabled={validateLawton()}
            onPress={IndiTestLawtonBrody}>
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
            <TouchableOpacity style={{ width: 125, height: 125, borderRadius: 90, justifyContent: 'center' }} 
            disabled={validateMini()}
            onPress={IndiTestMiniExamenMental}>
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
            {<TouchableOpacity style={styles.btnContinuar}>
              <Text style={styles.textBtn}>VER</Text>
              <Text style={styles.textBtn}>RESULTADOS</Text>
            </TouchableOpacity>}
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
