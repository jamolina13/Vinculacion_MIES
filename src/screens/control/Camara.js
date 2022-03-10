import React, { useState, useEffect,useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Image, SafeAreaView} from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';
import *as Permission from 'expo-permissions';
import *as MediaLibrary from 'expo-media-library';

export default function Camara() {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHaspermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHaspermission(status === 'granted');
    })();

    (async () => {
        const { status } = await Permission.askAsync(Permission.CAMERA_ROLL);
        console.log(status);
       // setHaspermission(status === 'granted');
      })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acceso denegado!</Text>;
  }

  async function takePicture(){
      if(camRef){
          const data = await camRef.current.takePictureAsync();
          setCapturedPhoto(data.uri);
          setOpen(true);
          console.log(data);
          
      }
    }

    async function savePicture(){
        const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
        .then(()=> {
            alert('Salvo con sucesso!');
        })
        .catch(error => {
            console.log('err', error);
        })
    }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={{ flex: 1 }} type={type} ref={camRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 15, marginBottom: 10, color: 'white' }}>Girar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.button} onPress={ takePicture}>
          <FontAwesome name="camera" size={23} color="white" />
      </TouchableOpacity>

      
      {capturedPhoto &&
        <Modal
        animationType="slide"
        transparent={false}
        visible={open}
        >
            <View style={{flex: 1, justifyContent:'center', alignItems:'center', margin:20}}>
            <View style={{margin: 10, flexDirection: 'row'}}> 
            <TouchableOpacity style={{margin:10}} onPress={()=> setOpen(false)}>
                <FontAwesome name="windows-close" size={50} color="red"/>
            </TouchableOpacity>
            <TouchableOpacity style={{margin:10}} onPress={()=> setOpen(savePicture)}>
                <FontAwesome name="upload" size={50} color="#121212"/>
            </TouchableOpacity>
            </View>
            <Image 
                style={{ width: '100', height: 450, borderRadius: 20}}
                source={{uri: capturedPhoto}}
            />
            </View>
        </Modal>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
      margin: 0,
      borderRadius: 10,
      
      height: 50,
  }
});
