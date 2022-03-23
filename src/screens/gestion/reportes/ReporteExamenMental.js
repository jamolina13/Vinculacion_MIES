import React, { useState, useEffect } from "react";
import {
    Button,
    Text,
    StyleSheet,
    View,

    TouchableOpacity,
} from "react-native";

import { styles } from "../../../estilos/styleReporte";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello World!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;
export const ReporteExamenMental = (props) => {
    const params = props.route.params;
    const navigation = props.navigation;
    var [values, setValues] = useState({
        lista: [],
        datosReporte: [],
    });

    var { lista } = values;
    var { datosReporte } = values;
    const idEncabezado = params.idEncabezado

    console.log(idEncabezado + "aasas")
    const [state, setState] = useState({
        isReady: false,
    })
    useEffect(() => {
        llamarDatos();
        return () => {
            setValues({});
        }
    }, [state.isReady]);

    const llamarDatos = async () => {

        try {
            const responseE = await fetch(
                "http://192.188.58.82:3000/reporteMiniById/" + idEncabezado + "",

                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                });
            const json = await responseE.json();
            setValues({
                ...values,
                lista: json,
                refreshing: false,
            });

        } catch (error) {

            console.error(error);
        }

    }
    values.lista.filter((item) => {
        datosReporte[0] = `${item.am_nombre}`;
        datosReporte[1] = `${item.uni_zona}`;
        datosReporte[2] = `${item.uni_distrito}`;
        datosReporte[3] = `${item.uni_modalidad}`;
        datosReporte[4] = `${item.uni_unidad_atencion}`;
        datosReporte[5] = `${item.am_fecha_de_nacimiento}`;
        datosReporte[6] = `${item.tec_nombre}`;
        datosReporte[7] = `${item.tec_apellido}`;
        datosReporte[8] = `${item.ef_fecha_aplicacion}`;
        datosReporte[9] = `${item.mim_id}`;
        datosReporte[10] = `${item.ef_id}`;
        datosReporte[11] = `${item.mim_orientacion_tiempo_op1}`;
        datosReporte[12] = `${item.mim_orientacion_tiempo_op2}`;
        datosReporte[13] = `${item.mim_orientacion_tiempo_op3}`;
        datosReporte[14] = `${item.mim_orientacion_tiempo_op4}`;
        datosReporte[15] = `${item.mim_orientacion_tiempo_op5}`;
        datosReporte[16] = `${item.mim_orientacion_espacio_op1}`;
        datosReporte[17] = `${item.mim_orientacion_espacio_op2}`;
        datosReporte[18] = `${item.mim_orientacion_espacio_op3}`;
        datosReporte[19] = `${item.mim_orientacion_espacio_op4}`;
        datosReporte[20] = `${item.mim_orientacion_espacio_op5}`;
        datosReporte[21] = `${item.mim_memoria_op1}`;
        datosReporte[22] = `${item.mim_memoria_op2}`;
        datosReporte[23] = `${item.mim_memoria_op3}`;
        datosReporte[24] = `${item.mim_atencion_calculo_op1}`;
        datosReporte[25] = `${item.mim_atencion_calculo_op2}`;
        datosReporte[26] = `${item.mim_atencion_calculo_op3}`;
        datosReporte[27] = `${item.mim_atencion_calculo_op4}`;
        datosReporte[28] = `${item.mim_atencion_calculo_op5}`;
        datosReporte[29] = `${item.mim_memoria_dif_op1}`;
        datosReporte[30] = `${item.mim_memoria_dif_op2}`;


        datosReporte[31] = `${item.mim_memoria_dif_op3}`;
        datosReporte[32] = `${item.mim_denominacion_op1}`;
        datosReporte[33] = `${item.mim_denominacion_op2}`;
        datosReporte[34] = `${item.mim_repeticion_frase_op1}`;
        datosReporte[35] = `${item.mim_compresion_op1}`;
        datosReporte[36] = `${item.mim_compresion_op2}`;
        datosReporte[37] = `${item.mim_compresion_op3}`;
        datosReporte[38] = `${item.mim_lectura_op1}`;
        datosReporte[39] = `${item.mim_escritura_op1}`;
        datosReporte[40] = `${item.mim_copia_dibujo_op1}`;
        datosReporte[41] = `${item.mim_tiempo_inicial}`;
        datosReporte[42] = `${item.mim_tiempo_final}`;
        datosReporte[43] = `${item.mim_tiempo_total}`;
        datosReporte[44] = `${item.mim_estado}`;
        datosReporte[45] = `${item.mim_puntaje_total}`;
    });


    const [selectedPrinter, setSelectedPrinter] = React.useState();
    const [allowances, setAllowances] = useState([]);



    const print = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        await Print.printAsync({
            html: createDynamicTable(),
            printerUrl: selectedPrinter?.url, // iOS only
        });
    }

    const printToFile = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({
            html
        });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    const selectPrinter = async () => {
        const printer = await Print.selectPrinterAsync(); // iOS only
        setSelectedPrinter(printer);
    }

    function calcularEdad(fecha) {
        console.log(fecha)
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }
    
    function calcularMes(fecha) {
        console.log(fecha)
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return Math.abs(m);
    }

    const createDynamicTable = () => {


        // await useEffect(() => {
        //     fetch("192.188.58.82:3000/consultaEscalaLawtonBrodyByIdAm/1")
        //       .then(data => {
        //         return data.json();
        //       })
        //       .then(data => {
        //         setAllowances(data);
        //       })
        //       .catch(err => {
        //         console.log(err);
        //       });
        //   }, []);




        const html = `
    <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <title>Hola Mundo!</title>
</head>

<body>
<p style="text-align: center;"><strong><img src="data:image/jpeg;base64,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" alt="" width="462" height="109" /></strong></p>
<p style="text-align: center;"><strong>SUBSECRETAR&Iacute;A DE ATENCI&Oacute;N INTERGENERACIONAL</strong></p>
<p style="text-align: center;"><strong>DIRECCI&Oacute;N DE LA POBLACI&Oacute;N ADULTA MAYOR</strong></p>
<p>&nbsp;</p>
<p><strong>Nombre de la Unidad de Atenci&oacute;n:</strong> ${datosReporte[4]}</p>
<table style="width: 900px; border-color: black; height: 2538px;" border="1" cellspacing="0">
<tbody>
<tr style="height: 110px;">
<td style="width: 919px; height: 110px;" colspan="5">
<p style="text-align: center;"><strong>MINI EXAMEN DEL ESTADO MENTAL1<sup>1</sup></strong><br /><strong>(Folstein et al. 1975)</strong><br /><strong>FICHA N&deg; 3c</strong></p>
</td>
</tr>
<tr style="height: 83px;">
<td style="width: 65px; height: 83px;">
<p style="text-align: center;"><strong>Nombre del Uruario: </strong></p>
</td>
<td style="width: 139px; height: 83px;">${datosReporte[0]}</td>
<td style="width: 118px; height: 83px;">
<p><strong>Zona:</strong></p>
<p>${datosReporte[1]}</p>
</td>
<td style="width: 337px; height: 83px;">
<p><strong>Distrito:</strong></p>
<p>${datosReporte[2]}</p>
</td>
<td style="width: 244px; height: 83px;">
<p><strong>Modalidad de Atencion:</strong></p>
<p>${datosReporte[3]}</p>
</td>
</tr>
<tr style="height: 3px;">
<td style="width: 65px; height: 3px;">
<p style="text-align: center;"><strong>Edad</strong></p>
</td>
<td style="width: 139px; height: 3px;">
<p><strong>A&ntilde;os: </strong></p>
<p>${calcularEdad(datosReporte[5])}</p>
</td>
<td style="width: 118px; height: 3px;">
<p><strong>Meses:</strong></p>
<p>${calcularMes(datosReporte[5])}</p>
</td>
<td style="width: 337px; height: 3px;">
<p><strong>Fecha de aplicaci&oacute;n:</strong></p>
<p>${datosReporte[8]}</p>
</td>
<td style="width: 244px; height: 3px;">
<p><strong>Aplicado por:</strong></p>
<p>${datosReporte[6]}</p>
</td>
</tr>
<tr style="height: 32.125px;">
<td style="width: 65px; height: 32.125px;">
<p><strong>Hora Inicial:</strong></p>
</td>
<td style="height: 32.125px;">
<p>${datosReporte[41]}</p>
</td>
<td style="width: 139px; height: 32.125px;">
<p>&nbsp;<strong>Hora final:</strong></p>
</td>
<td style="height: 32.125px;">
<p>${datosReporte[42]}</p>
</td>
<td style="width: 337px; height: 32.125px;">
<p>&nbsp;<strong>Tiempo Total:</strong></p>
<p>${datosReporte[43]}</p>
</td>
</tr>
<tr style="height: 23px;">
<td style="text-align: center; width: 671px; height: 23px;" colspan="4">
<p><strong>ORIENTACI&Oacute;N EN EL TIEMPO</strong></p>
</td>
<td style="width: 244px; height: 23px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 23px;">
<td style="width: 671px; height: 23px; text-align: left;" colspan="4">En qu&eacute; D&iacute;a estamos (fecha):</td>
<td style="width: 244px; height: 23px; text-align: center;">${datosReporte[11]}</td>
</tr>
<tr style="height: 23px;">
<td style="width: 671px; height: 23px; text-align: left;" colspan="4">En qu&eacute; mes:</td>
<td style="width: 244px; height: 23px; text-align: center;">${datosReporte[12]}</td>
</tr>
<tr style="height: 23px;">
<td style="width: 671px; height: 23px; text-align: left;" colspan="4">En qu&eacute; a&ntilde;o</td>
<td style="width: 244px; height: 23px; text-align: center;">${datosReporte[13]}</td>
</tr>
<tr style="height: 23px;">
<td style="width: 671px; height: 23px; text-align: left;" colspan="4">En qu&eacute; d&iacute;a de la semana</td>
<td style="width: 244px; height: 23px; text-align: center;">${datosReporte[14]}</td>
</tr>
<tr style="height: 21px;">
<td style="width: 671px; text-align: left; height: 21px;" colspan="4">&iquest;Qu&eacute; hora es aproximadamente?</td>
<td style="width: 244px; height: 21px; text-align: center;">${datosReporte[15]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>ORIENTACI&Oacute;N EN EL ESPACIO</strong></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;"><strong>&nbsp;0/1</strong></td>
</tr>
<tr style="height: 28px;">
<td style="width: 671px; text-align: left; height: 28px;" colspan="4">&iquest;En qu&eacute; lugar estamos ahora?</td>
<td style="width: 244px; height: 28px; text-align: center;">${datosReporte[16]}</td>
</tr>
<tr style="height: 28px;">
<td style="width: 671px; text-align: left; height: 28px;" colspan="4">&iquest;En qu&eacute; piso o departamento estamos ahora?</td>
<td style="width: 244px; height: 28px; text-align: center;">${datosReporte[17]}</td>
</tr>
<tr style="height: 28px;">
<td style="width: 671px; text-align: left; height: 28px;" colspan="4">&iquest;Qu&eacute; barrio o parroquia es este?</td>
<td style="width: 244px; height: 28px; text-align: center;">${datosReporte[18]}</td>
</tr>
<tr style="height: 28px;">
<td style="width: 671px; text-align: left; height: 28px;" colspan="4">&iquest;En qu&eacute; ciudad estamos?</td>
<td style="width: 244px; height: 28px; text-align: center;">${datosReporte[19]}</td>
</tr>
<tr style="height: 28px;">
<td style="width: 671px; text-align: left; height: 28px;" colspan="4">&iquest;En qu&eacute; pa&iacute;s estamos?</td>
<td style="width: 244px; height: 28px; text-align: center;">${datosReporte[20]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>MEMORIA</strong></p>
<p style="text-align: left;"><strong>CONSIGNA: <em>&ldquo;Le voy a decir el nombre de tres objetos, cuando yo termine quiero que por favor usted los repita&rdquo;.</em><br /></strong>*Pronuncie claramente las palabras, una cada segundo, luego p&iacute;dale a persona adulta mayor, que las repita. Otorgue un punto por cada respuesta correcta. Se repiten las palabras hasta que la persona se las aprenda (m&aacute;x. 6 ensayos) pero &uacute;nicamente se punt&uacute;a la primera repetici&oacute;n o ensayo.</p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 16px;">
<td style="width: 671px; text-align: left; height: 16px;" colspan="4">Papel</td>
<td style="width: 244px; height: 16px; text-align: center;">${datosReporte[21]}</td>
</tr>
<tr style="height: 16px;">
<td style="width: 671px; text-align: left; height: 16px;" colspan="4">Bicicleta</td>
<td style="width: 244px; height: 16px; text-align: center;">${datosReporte[22]}</td>
</tr>
<tr style="height: 16px;">
<td style="width: 671px; text-align: left; height: 16px;" colspan="4">Cuchara</td>
<td style="width: 244px; height: 16px; text-align: center;">${datosReporte[23]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>ATENCI&Oacute;N Y C&Aacute;LCULO:</strong></p>
<p><strong>CONSIGNA: </strong><em>&ldquo;Le voy a pedir que reste de 7 en 7 a partir del 100&rdquo;.</em></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">93</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[24]}</td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">86</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[25]}</td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">79</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[26]}</td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">72</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[27]}</td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">65</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[28]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>MEMORIA DIFERIDA</strong></p>
<p><strong>CONSIGNA: </strong><em>&ldquo;D&iacute;game los 3 objetos que le mencion&eacute; al principio&rdquo;.</em></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">Papel</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[29]}</td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">Bicicleta</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[30]}</td>
</tr>
<tr style="height: 17px;">
<td style="width: 671px; text-align: left; height: 17px;" colspan="4">Cuchara</td>
<td style="width: 244px; height: 17px; text-align: center;">${datosReporte[31]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>DENOMINACI&Oacute;N</strong></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 11px;">
<td style="width: 671px; text-align: left; height: 11px;" colspan="4">Mostrarle un l&aacute;piz o un bol&iacute;grafo y preguntar &iquest;qu&eacute; es esto?</td>
<td style="width: 244px; height: 11px; text-align: center;">${datosReporte[32]}</td>
</tr>
<tr style="height: 11px;">
<td style="width: 671px; text-align: left; height: 11px;" colspan="4">Mostrarle un reloj y preguntar &iquest;qu&eacute; es esto?</td>
<td style="width: 244px; height: 11px; text-align: center;">${datosReporte[33]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>REPETICI&Oacute;N DE UNA FRASE</strong></p>
<p style="text-align: left;"><strong>CONSIGNA:</strong> <em>&ldquo;Ahora le voy a decir una frase que tendr&aacute; que repetir despu&eacute;s de m&iacute;. Solo se</em><br /><em>la puedo decir una vez, as&iacute; que ponga mucha atenci&oacute;n&rdquo;.</em></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 11px;">
<td style="width: 671px; text-align: left; height: 11px;" colspan="4">"ni s&iacute;, ni no, ni pero&rdquo;</td>
<td style="width: 244px; height: 11px; text-align: center;">${datosReporte[34]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>COMPRENSI&Oacute;N &ndash; EJECUCI&Oacute;N DE ORDEN</strong></p>
<p style="text-align: left;"><strong>CONSIGNA: </strong><em>&ldquo;Le voy a dar unas instrucciones. Por favor s&iacute;galas en el orden en que las voy a decir. Solo las&nbsp;</em><em>puedo decir una vez&rdquo;:</em><br /><em>&ldquo;TOME ESTE PAPEL CON LA MANO DERECHA, D&Oacute;BLELO POR LA MITAD Y D&Eacute;JELO EN EL SUELO&rdquo;</em></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 6px;">
<td style="width: 671px; text-align: left; height: 6px;" colspan="4">Tome este papel con la mano derecha</td>
<td style="width: 244px; height: 6px; text-align: center;">${datosReporte[35]}</td>
</tr>
<tr style="height: 6px;">
<td style="width: 671px; text-align: left; height: 6px;" colspan="4">D&oacute;blelo por la mitad</td>
<td style="width: 244px; height: 6px; text-align: center;">${datosReporte[36]}</td>
</tr>
<tr style="height: 6px;">
<td style="width: 671px; text-align: left; height: 6px;" colspan="4">D&eacute;jelo en suelo</td>
<td style="width: 244px; height: 6px; text-align: center;">${datosReporte[37]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>LECTURA</strong></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 52px;">
<td style="width: 671px; text-align: left; height: 52px;" colspan="4">
<p>Escriba legiblemente en un papel "cierre los ojos". P&iacute;dale a la persona adulta mayor que<br />lo lea y que haga lo que dice la frase</p>
</td>
<td style="width: 244px; height: 52px; text-align: center;">${datosReporte[38]}</td>
</tr>
<tr style="height: 46px;">
<td style="text-align: center; width: 671px; height: 46px;" colspan="4">
<p><strong>ESCRITURA</strong></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">&nbsp;<strong>0/1</strong></td>
</tr>
<tr style="height: 55px;">
<td style="width: 671px; text-align: left; height: 55px;" colspan="4"><strong>CONSIGNA:</strong> <em>&ldquo;Quiero que por favor escriba una frase que diga un mensaje&rdquo;</em></td>
<td style="width: 244px; height: 55px; text-align: center;">${datosReporte[39]}</td>
</tr>
<tr style="height: 55px;">
<td style="width: 671px; height: 55px; text-align: center;" colspan="4"><strong>COPIA DE UN DIBUJO</strong></td>
<td style="width: 244px; height: 55px; text-align: center;"><strong>0/1</strong></td>
</tr>
<tr style="height: 34.3125px;">
<td style="width: 671px; height: 34.3125px; text-align: left;" colspan="4"><strong>CONSIGNA: </strong>&ldquo;Copie por favor este dibujo tal como est&aacute;&rdquo;</td>
<td style="width: 244px; height: 34.3125px; text-align: center;">${datosReporte[40]}</td>
</tr>
<tr style="height: 46px;">
<td style="width: 671px; height: 46px;" colspan="4">
<p style="text-align: right;"><strong>TOTAL:</strong></p>
</td>
<td style="width: 244px; height: 46px; text-align: center;">
<p>${datosReporte[45]}</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>______________________</strong></p>
<p><sup>1</sup>Tomado de: Reyes, S., Beaman, P, Garc&iacute;a-Pe&ntilde;a, C., Villa, M. A., Heres, J., C&oacute;rdova, A. y Jagger, C. (2004). Validation of a modified version of the Mini-Mental State Examination (MMSE) in Spanish. Aging Neuropsychology and Cognition, 11, 1-11</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>PUNTUACIONES DE REFERENCIA:</strong></p>
<p><strong>Puntos de corte:</strong></p>
<table style="height: 182px; border-color: black;" border="1" width="350" cellspacing="0">
<tbody>
<tr>
<td style="width: 170px; text-align: center;">27 - 30</td>
<td style="width: 170px; text-align: center;"><strong>Normal</strong></td>
</tr>
<tr>
<td style="width: 170px; text-align: center;">24 - 26</td>
<td style="width: 170px; text-align: center;"><strong>Sospecha Patol&oacute;gica</strong></td>
</tr>
<tr>
<td style="width: 170px; text-align: center;">12 - 23</td>
<td style="width: 170px; text-align: center;"><strong>Deterioro</strong></td>
</tr>
<tr>
<td style="width: 170px; text-align: center;">9 - 11</td>
<td style="width: 170px; text-align: center;"><strong>Demencia</strong></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>FIRMA DEL EVALUADOR:</strong></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>INTERPRETACI&Oacute;N DEL RESULTADO ATENDIENDO A LA EDAD Y NIVEL DE ESTUDIOS</strong><br />En el caso de que la aplicaci&oacute;n del presente test se realice a personas adultas mayores en condici&oacute;n de analfabetismo o con bajo nivel de escolaridad, se debe adaptar la puntuaci&oacute;n utilizando la siguiente tabla:</p>
<p>&nbsp;</p>
<table style="height: 35px; border-color: black; width: 477px;" border="1" cellspacing="0">
<tbody>
<tr>
<td style="width: 231px;">&nbsp;</td>
<td style="width: 236px; text-align: center;"><strong>Edad (a&ntilde;os)</strong></td>
</tr>
</tbody>
</table>
<table style="height: 168px; border-color: black; width: 477px;" border="1" cellspacing="0">
<tbody>
<tr>
<td style="width: 231px; text-align: center;"><strong>Escolaridad</strong></td>
<td style="width: 88px;">
<p style="text-align: center;"><strong>Menos</strong></p>
<p style="text-align: center;"><strong>de 50</strong></p>
</td>
<td style="width: 74px; text-align: center;"><strong>51-75</strong></td>
<td style="width: 66px; text-align: center;"><strong>M&aacute;s de 75</strong></td>
</tr>
<tr>
<td style="width: 231px;">Menos de 8 a&ntilde;os de estudio</td>
<td style="width: 88px;">0</td>
<td style="width: 74px;">+1</td>
<td style="width: 66px;">+2</td>
</tr>
<tr>
<td style="width: 231px;">De 9 a 17 a&ntilde;os de estudio</td>
<td style="width: 88px;">-1</td>
<td style="width: 74px;">0</td>
<td style="width: 66px;">+1</td>
</tr>
<tr>
<td style="width: 231px;">M&aacute;s de 17 a&ntilde;os de estudio</td>
<td style="width: 88px;">-2</td>
<td style="width: 74px;">-1</td>
<td style="width: 66px;">0</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;* En estos casos lo que se debe hacer es tomar la puntaci&oacute;n total y sumar o restar los valores indicados en la tabla tomando en cuenta la edad y el nivel de estudios o escolaridad de la persona adulta mayor. Y se procede a comparar este resultado con las puntuaciones de referencia. Por ejemplo:<br />Si el usuario tiene 78 a&ntilde;os de edad, un nivel de 4 a&ntilde;os de estudios y obtuvo una puntuaci&oacute;n final de 22 puntos, tomando en cuenta lo indicado en la tabla se le debe sumar 2 puntos a su puntaci&oacute;n final que le dar&iacute;a un total de 24 puntos que dentro de las puntuaciones de referencia corresponde a un estado de sospecha patol&oacute;gica.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p style="text-align: center;"><strong>Mini-Examen del Estado Mental (MEEM o Mini- Mental) de acuerdo a la versi&oacute;n de Reyes et al. (2004) INSTRUCTIVO</strong></p>
<p style="text-align: center;">&nbsp;</p>
<table style="height: 246px; border-color: black; width: 798px;" border="1" cellspacing="0">
<tbody>
<tr style="height: 18px;">
<td style="width: 329px; text-align: center; height: 18px;"><strong>REACTIVOS</strong></td>
<td style="width: 459px; text-align: center; height: 18px;"><strong>INSTRUCCIONES PARA LA ADMINISTRACI&Oacute;N</strong></td>
</tr>
<tr style="height: 114px;">
<td style="width: 329px; height: 114px;"><strong>ORIENTACI&Oacute;N EN EL TIEMPO</strong><br /><strong>(5 puntos)</strong><br /><strong>ORIENTACI&Oacute;N EN EL LUGAR</strong><br /><strong>(5 puntos)</strong></td>
<td style="width: 459px; height: 114px;">
<p>Pregunte la fecha del d&iacute;a de hoy. Luego pregunte espec&iacute;ficamente por los datos omitidos.</p>
<p><br />Calificaci&oacute;n: 1 punto por cada respuesta correcta</p>
</td>
</tr>
<tr style="height: 127px;">
<td style="width: 329px; height: 127px;"><strong>MEMORIA (3 puntos)</strong></td>
<td style="width: 459px; height: 127px;">Diga las tres palabras de manera clara y lenta, una por segundo.<br />Al terminar pida su repetici&oacute;n y otorgue un punto por cada<br />palabra correctamente repetida en el primer intento.<br />Al terminar contin&uacute;e dici&eacute;ndolas hasta que el paciente pueda<br />repetirlas (m&iacute;nimo 3 repeticiones, m&aacute;ximo 6).<br />Si luego de seis repeticiones no logra aprenderlas no aplique el<br />recuerdo.</td>
</tr>
<tr style="height: 90px;">
<td style="width: 329px; height: 90px;"><strong>ATENCI&Oacute;N Y C&Aacute;LCULO (5 puntos)</strong></td>
<td style="width: 459px; height: 90px;">Puede apoyarse de la pregunta &iquest;Cu&aacute;nto es 100 menos 7?...<br />menos 7?, etc. Evite mencionar la cifra de la cual se est&aacute;<br />restando, es decir &ldquo;93 menos 7 o 86 menos 7&rdquo;, etc., a menos que sea indispensable para que la prueba contin&uacute;e. D&eacute; un punto por cada resta correcta.</td>
</tr>
<tr style="height: 45.6875px;">
<td style="width: 329px; height: 45.6875px;"><strong>MEMORIA DIFERIDA (3 puntos)</strong></td>
<td style="width: 459px; height: 45.6875px;">Otorgue un punto por cada palabra correctamente evocada.</td>
</tr>
<tr style="height: 18px;">
<td style="width: 329px; height: 18px;"><strong>DENOMINACI&Oacute;N (1 PUNTO)</strong></td>
<td style="width: 459px; height: 18px;">Evite que el usuario tome los objetos a menos que exista<br />debilidad visual importante, trate de que la informaci&oacute;n llegue<br />s&oacute;lo por la v&iacute;a visual.<br />Se otorga un punto por cada objeto denominado correctamente.</td>
</tr>
<tr style="height: 18px;">
<td style="width: 329px; height: 18px;"><strong>REPETICI&Oacute;N DE UNA FRASE (1 punto)</strong></td>
<td style="width: 459px; height: 18px;">Diga la oraci&oacute;n una sola vez de forma clara y lenta pero sin<br />fragmentar la oraci&oacute;n. Califique con base en este &uacute;nico ensayo.<br />D&eacute; un punto si la repetici&oacute;n es correcta.</td>
</tr>
<tr style="height: 18px;">
<td style="width: 329px; height: 18px;"><strong>COMPRENSI&Oacute;N &ndash; EJECUCI&Oacute;N DE</strong><br /><strong>ORDEN (3 puntos)</strong></td>
<td style="width: 459px; height: 18px;">Mientras da la consigna mantenga el papel a la vista del paciente pero no permita que lo tome antes de que usted termine de dar las &oacute;rdenes. Realice un solo ensayo y otorgue un punto por cada acci&oacute;n correctamente realizada.</td>
</tr>
<tr style="height: 18px;">
<td style="width: 329px; height: 18px;"><strong>LECTURA (1 punto)</strong></td>
<td style="width: 459px; height: 18px;">
<p>Otorgue un punto s&oacute;lo si la persona adulta mayor ejecuta la acci&oacute;n. Si &uacute;nicamente lee la frase punt&uacute;e 0.</p>
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 329px; height: 18px;"><strong>ESCRITURA (1 punto)</strong></td>
<td style="width: 459px; height: 18px; text-align: left;">Utilice una hoja blanca. La frase debe ser escrita<br />espont&aacute;neamente, no dicte ninguna oraci&oacute;n. Debe contener<br />sujeto, verbo y predicado. No califique ortograf&iacute;a.</td>
</tr>
<tr style="height: 18px;">
<td style="width: 329px; height: 18px;"><strong>COPIA DE UN DIBUJO.</strong></td>
<td style="width: 459px; height: 18px; text-align: left;">
<p>Deben estar presentes 10 &aacute;ngulos y dos intersecciones. Ignore temblor o rotaci&oacute;n.</p>
</td>
</tr>
</tbody>
</table>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: left;"><strong>______________________</strong></p>
<p>Tomado de: https://www.villaneuropsicologia.com/uploads/1/4/4/5/14457670/mini_examen_del_estado_mental.pdf</p>
</body>

</html>
    
    `;
        return html;
    }
   return (
        <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
            <View style={styles8.inputContainer} >
                <TouchableOpacity style={styles8.txtBtn} onPress={print} >
                    <Text style={[styles8.text]}> Generar PDF</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles8.txtBtn2} onPress={MenuReporte} >
                    <Text style={[styles8.text]}> Regresar</Text>
                </TouchableOpacity>
                {Platform.OS === 'ios' &&
                    <>
                        <View style={styles8.spacer} />
                        <Button title='Select printer' onPress={selectPrinter} />
                        <View style={styles8.spacer} />
                        {selectedPrinter ? <Text style={styles8.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
                    </>
                }

            </View>

        </View>
    );
};

const styles8 = StyleSheet.create({
    spacer: {
        margin: 5,
    },
    dext: {
        backgroundColor: "#080f26",

    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        marginTop: 180,
        marginBottom: 10,
    },
    txtBtn: {
        //width:  100,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#005DA6",
        justifyContent: "center",
        marginTop: 20,
    },
    txtBtn2: {
        //width:  100,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#FF0000",
        justifyContent: "center",
        marginTop: 20,
    },
    text: {
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
    input: {
        //width: WIDTH - 55,
        height: 45,
        borderRadius: 10,
        fontSize: 18,
        paddingLeft: 55,
        backgroundColor: "rgba(0,0,0,0.20)",
        color: "black",
        marginHorizontal: 25,
    },

});
