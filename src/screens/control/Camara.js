import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Camera } from "expo-camera";
export const Camara = (props) =>{
	
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
	tomarFoto = async () => {
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

      ///console.log(image.base64);
			// aseguro de que se tomó una imagen:
			/*
			if (!image.cancelled) {
				console.log("entra a enviar");
				const response = await fetch('http://192.188.58.82:3000/actualizarFotoEncabezadoById/1', {
							method: 'POST',
							headers: {
								'Accept': 'application/json',
								'Content-Type': 'application/json',
							},
							// enviar la cadena base64 como solicitud POST
							body: JSON.stringify({
								ef_foto_adulto: image.base64,
							}),
						});
				console.log(response.status)
			}*/
		}
	}

	const enviarDatos = async () => {
		if (!image.cancelled) {
			console.log("entra a enviar");
			const response = await fetch('http://192.188.58.82:3000/actualizarFotoEncabezadoById/1', {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						// enviar la cadena base64 como solicitud POST
						body: JSON.stringify({
							ef_foto_adulto: image.base64,
						}),
					});
			console.log(response.status)
		}
	}

	return (
		<View style={styles.container}>
			<Button title="Tomar la foto" onPress={tomarFoto} />
			
			
			<Button title="Enviar datos" onPress={enviarDatos} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})