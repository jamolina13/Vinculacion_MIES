import React, { useState, useEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
} from "react-native";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export const ReporteLawtonBrody = (props) => {
    const params = props.route.params;
    const navigation = props.navigation;
    const idEncabezado = params.idEncabezado
    const [values, setValues] = useState({
        lista: [],
        datosReporte: [],
    });

    const [state, setState] = useState({
        isReady: false,
    })
    const { lista } = values;
    var { datosReporte } = values;
    ///////////////////////////////////////////////////////////////////

    const [selectedPrinter, setSelectedPrinter] = React.useState();
    const [allowances, setAllowances] = useState([]);
    const print = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.

        await Print.printAsync({
            html: createDynamicTable(),
            printerUrl: selectedPrinter?.url, // iOS only
        });

    }

    useEffect(() => {
        llamarDatos();
        return () => {
          setValues({});
        }
      }, []);

    const llamarDatos = async() =>{
        
        try {
            const responseE = await fetch(
                "http://192.188.58.82:3000/reporteLawtonById/"+ idEncabezado + "",
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
    console.log("holas"+lista.length)

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
        var repot;
        values.lista.filter((item) => {
            repot= item;
        });
        console.log(repot)

        const blanco = `<p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;">`;
        const amarillo = `<p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal; background-color: yellow;">`;
        const arraycolors = []
        
        //console.log(obj)
        // Object.keys(obj).forEach(key => {
        //     if (obj[key] === 0 && key != 'ef_id') {
        //         arraycolors.push(blanco)
        //     } else if (obj[key] === 1 && key != 'ef_id') {
        //         arraycolors.push(amarillo)
        //     }
        // })

        let arrayx= (valor, tamaño)=>{
           let a=[]
           for(let i=1;i<=tamaño;i++){
              
            if(valor===i){
                arraycolors.push(amarillo)
            }else{
                arraycolors.push(blanco)
            }
           }
           return a;         
        }
        var tamaños=[4,4,4,5,3,5,3,3]
        Object.keys(repot).forEach(key => {
            console.log(key.substring(0,5))
           if(key.substring(0,5)==="elb_p"){
            arrayx(repot[key],tamaños.shift())
           }
        })


        const html = `
    <!DOCTYPE html>
    <html lang="es">

    <head>
        <meta charset="utf-8" />
        <title>Hola Mundo!</title>
    </head>
    
    <body>       
        <div class="WordSection1">
            <p style="text-align: center;"><strong><img
                        src="data:image/jpeg;base64,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"
                        alt="" width="462" height="109" /></strong></p>
            <p style="text-align: center;"><strong>SUBSECRETAR&Iacute;A DE ATENCI&Oacute;N INTERGENERACIONAL</strong></p>
            <p style="text-align: center;"><strong>DIRECCI&Oacute;N DE LA POBLACI&Oacute;N ADULTA MAYOR</strong></p>
            <div align="center">
                <table class="MsoNormalTable" style="width: 647px; border-collapse: collapse;" border="0" cellspacing="0"
                    cellpadding="0">
                    <tbody>
                        <tr
                            style="mso-yfti-irow: 0; mso-yfti-firstrow: yes; height: 29.55pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 1028.61px; border: 1pt solid windowtext; padding: 0cm 5.4pt; height: 29.55pt;"
                                colspan="14">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">ESCALA DE LAWTON Y BRODY (ACTIVIDADES
                                            INSTRUMENTALES DE LA VIDA DIARIA)</span></strong></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">FICHA N<sup>0</sup>3b</span></strong>
                                </p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 1; height: 47.2pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 458.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 97.2pt;"
                                colspan="2">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Nombre de usuario:</span></strong></p>
                            </td>
                            <td style="width: 133px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 97.2pt;"
                                colspan="2">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">${repot.am_nombre}</span></strong></p>
                            </td>
                            <td style="width: 113px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 97.2pt;"
                                colspan="3" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Zona: ${repot.uni_zona}</span></strong></p>
                            </td>
                            <td style="width: 133px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 97.2pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Distrito: ${repot.uni_distrito}</span></strong></p>
                            </td>
                            <td style="width: 191px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 97.2pt;"
                                colspan="5" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Modalidad de Atenci&oacute;n: ${repot.uni_modalidad}</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 2; height: 34.85pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 1028.61px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 34.85pt;"
                                colspan="14">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Nombre de la Unidad de Atenci&oacute;n: ${repot.uni_unidad_atencion}</span></strong>
                                </p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 3; height: 56.1pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 63px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 56.1pt;"
                                rowspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Edad: </span></strong></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;"> &nbsp; </span></strong></p>
                            </td>
                            <td style="width: 405.609px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 56.1pt;"
                                colspan="2" rowspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">A&ntilde;os: </span></strong></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;"> &nbsp; </span></strong></p>
                            </td>
                            <td style="width: 143px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 56.1pt;"
                                rowspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Meses:</span></strong></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;"><span style="mso-spacerun: yes;">&nbsp;</span>
                                        </span></strong></p>
                            </td>
                            <td style="width: 277px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 56.1pt;"
                                colspan="6" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Fecha de aplicaci&oacute;n:</span></strong></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;"> &nbsp; </span></strong></p>
                            </td>
                            <td style="width: 140px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 56.1pt;"
                                colspan="4" rowspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Aplicado por: ${repot.tec_apellido} ${repot.tec_nombre} </span></strong></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;"> &nbsp; </span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 4; height: 62.45pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 104px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 62.45pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Hora inicial: ${repot.elb_tiempo_inicial}</span></strong></p>
                            </td>
                            <td style="width: 82px; border-top: 1pt solid windowtext; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-image: initial; border-left: none; padding: 0cm; height: 62.45pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Hora Final: ${repot.elb_tiempo_final}</span></strong></p>
                            </td>
                            <td style="width: 91px; border-top: 1pt solid windowtext; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-image: initial; border-left: none; padding: 0cm; height: 62.45pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">Total: ${repot.elb_tiempo_total}</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 5; height: 77.05pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 1028.61px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 3.5pt; height: 77.05pt;"
                                colspan="14" valign="top">
                                <p class="MsoNormal"
                                    style="text-align: justify; line-height: normal; margin: 0cm 9.6pt 0cm 10.45pt;"><span
                                        style="color: black;"> &nbsp; </span></p>
                                <p class="MsoNormal"
                                    style="text-align: justify; line-height: normal; margin: 0cm 9.6pt 0cm 10.45pt;"><span
                                        style="color: black;">A continuaci&oacute;n, encontrar&aacute; 8 &iacute;tems
                                        correspondientes a actividades instrumentales de la vida diaria. Lea en voz alta las
                                        alternativas pertenecientes a cada una de ellas y solicite a la persona evaluada que
                                        escoja la que m&aacute;s coincida con la realidad de la persona adulta mayor. La
                                        informaci&oacute;n se obtiene preguntando directamente al usuario o a su cuidador
                                        principal.</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 6; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 3.5pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">1. CAPACIDAD PARA USAR EL
                                            TELEFONO:</span></strong></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 3.5pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: right; line-height: normal;"
                                    align="right"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 7; height: 57.3pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 3.5pt; height: 57.3pt;"
                                colspan="12" valign="top">
                                ${arraycolors[0]}<span
                                        style="color: black;">- Utiliza el tel&eacute;fono por iniciativa propia</span></p>
                                ${arraycolors[1]}<span
                                        style="color: black;">- Es capaz de marcar bien algunos n&uacute;meros
                                        familiares</span></p>
                                ${arraycolors[2]}<span
                                        style="color: black;">- Es capaz de contestar al tel&eacute;fono, pero no de
                                        marcar</span></p>
                                ${arraycolors[3]}<span
                                        style="color: black;">- No utiliza el tel&eacute;fono</span></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 3.5pt; height: 57.3pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">&nbsp;</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 8; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 3.5pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">2. HACER COMPRAS:</span></strong></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 3.5pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 9; height: 61.4pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 3.5pt; height: 61.4pt;"
                                colspan="12" valign="top">
                                ${arraycolors[4]}<span
                                        style="color: black;">- Realiza todas las compras necesarias
                                        independientemente</span></p>
                                ${arraycolors[5]}<span
                                        style="color: black;">- Realiza independientemente peque&ntilde;as compras</span>
                                </p>
                                ${arraycolors[6]}<span
                                        style="color: black;">- Necesita ir acompa&ntilde;ado para cualquier compra</span>
                                </p>
                                ${arraycolors[7]}<span
                                        style="color: black;">- Totalmente incapaz de comprar</span></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 3.5pt; height: 61.4pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 10; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">3. PREPARACI&Oacute;N DE LA
                                            COMIDA</span></strong></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 11; height: 53.4pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 53.4pt;"
                                colspan="12" valign="top">
                                ${arraycolors[8]}<span
                                        style="color: black;">- Organiza, prepara y sirve las comidas por s&iacute; solo
                                        adecuadamente</span></p>
                                ${arraycolors[9]}<span
                                        style="color: black;">- Prepara adecuadamente las comidas si se le proporcionan los
                                        ingredientes</span></p>
                                ${arraycolors[10]}<span
                                        style="color: black;">- Prepara, calienta y sirve las comidas, pero no sigue una
                                        dieta adecuada</span></p>
                                ${arraycolors[11]}<span
                                        style="color: black;">- Necesita que le preparen y sirvan las comidas</span></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 53.4pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 14; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">4. CUIDADO DE LA CASA</span></strong>
                                </p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 15; height: 65.1pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="12" valign="top">
                                ${arraycolors[12]}<span
                                        style="color: black;">- Mantiene la casa solo o con ayuda ocasional (para trabajos
                                        pesados)</span></p>
                                ${arraycolors[13]}<span
                                        style="color: black;">- Realiza tareas ligeras, como lavar los platos o hacer las
                                        camas</span></p>
                                ${arraycolors[14]}<span
                                        style="color: black;">- Realiza tareas ligeras, pero no puede mantener un adecuado
                                        nivel de limpieza</span></p>
                                ${arraycolors[15]}<span
                                        style="color: black;">- Necesita ayuda en todas las labores de casa</span></p>
                                ${arraycolors[16]}<span
                                        style="color: black;">- No participa en ninguna labor de la casa</span></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 16; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">5. LAVADO DE LA ROPA</span></strong>
                                </p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 17; height: 50.5pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 50.5pt;"
                                colspan="12" valign="top">
                                ${arraycolors[17]}<span
                                        style="color: black;">- Lava por s&iacute; solo toda la ropa</span></p>
                                ${arraycolors[18]}<span
                                        style="color: black;">- Lava por s&iacute; solo peque&ntilde;as prendas</span></p>
                                ${arraycolors[19]}<span
                                        style="color: black;">- Todo el lavado de ropa debe ser realizado por otro</span>
                                </p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 50.5pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 18; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">6. USO DE MEDIOS DE
                                            TRANSPORTE</span></strong></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 19; height: 65.1pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="12" valign="top">
                                ${arraycolors[20]}
                                    <span style="color: black;">- Viaja solo en transporte p&uacute;blico o conduce su
                                        propio coche</span></p>
                                ${arraycolors[21]}
                                    <span style="color: black;">- Es capaz de coger un taxi, pero no usa otro medio de
                                        transporte</span></p>
                                ${arraycolors[22]}
                                    <span style="color: black;">- Viaja en transporte p&uacute;blico cuando va
                                        acompa&ntilde;ado por otra persona</span></p>
                                ${arraycolors[23]}
                                    <span style="color: black;">- Utiliza el taxi o el autom&oacute;vil s&oacute;lo con la
                                        ayuda de otros</span></p>
                                ${arraycolors[24]}
                                    <span style="color: black;">- No viaja</span></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 20; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">7. RESPONSABILIDAD RESPECTO A SU
                                            MEDICACI&Oacute;N:</span></strong></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 21; height: 65.1pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="12" valign="top">
                                ${arraycolors[25]}<span
                                        style="color: black;">- Es capaz de tomar su medicaci&oacute;n a la dosis y hora
                                        adecuada</span></p>
                                ${arraycolors[26]}<span
                                        style="color: black;">- Toma su medicaci&oacute;n si la dosis es preparada
                                        previamente</span></p>
                                ${arraycolors[27]}<span
                                        style="color: black;">- No es capaz de administrarse su medicaci&oacute;n</span></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 22; height: 18.7pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="12" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">8. CAPACIDAD PARA UTILIZAR
                                            DINERO</span></strong></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 18.7pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 23; height: 65.1pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="12" valign="top">
                                ${arraycolors[28]}<span
                                        style="color: black;">- Se encarga de sus asuntos econ&oacute;micos por s&iacute;
                                        solo</span></p>
                                ${arraycolors[29]}<span
                                        style="color: black;">- Realiza las compras de cada d&iacute;a, pero necesita ayuda
                                        con las grandes compras y en los bancos</span></p>
                                ${arraycolors[30]}<span
                                        style="color: black;">- Incapaz de manejar dinero</span></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 65.1pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">1</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">&nbsp;</span></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                    align="center"><span style="color: black;">0</span></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 24; height: 15.5pt; mso-row-margin-right: 11.45pt;">
                            <td style="width: 947.609px; border-right: 1pt solid windowtext; border-bottom: 1pt solid windowtext; border-left: 1pt solid windowtext; border-image: initial; border-top: none; padding: 0cm 5.4pt; height: 15.5pt;"
                                colspan="12">
                                <p class="MsoNormal" style="margin-bottom: 0cm; text-align: right; line-height: normal;"
                                    align="right"><strong><span style="color: black;">TOTAL:</span></strong></p>
                            </td>
                            <td style="width: 81px; border-top: none; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1pt solid windowtext; padding: 0cm 5.4pt; height: 15.5pt;"
                                colspan="2" valign="top">
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">${repot.elb_puntaje_total}</span></strong></p>
                                <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                            style="color: black;">&nbsp;</span></strong></p>
                            </td>
                            <td style="border: none; padding: 0cm; width: 12px;">
                                <p class="MsoNormal">&nbsp;</p>
                            </td>
                        </tr>
                        <tr style="mso-yfti-irow: 25; mso-yfti-lastrow: yes;">
                            <td style="width: 458.609px; padding: 0cm;" colspan="2"><strong>Puntuaci&oacute;n total: 8
                                    puntos.</strong></td>
                            <td style="width: 153px; padding: 0cm;" colspan="2">&nbsp;</td>
                            <td style="width: 94px; padding: 0cm;">&nbsp;</td>
                            <td style="width: 196px; padding: 0cm;" colspan="6">&nbsp;</td>
                            <td style="width: 62px; padding: 0cm;" colspan="2">&nbsp;</td>
                            <td style="width: 77px; padding: 0cm;" colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="border: none; width: 63px;">&nbsp;</td>
                            <td style="border: none; width: 395.609px;">&nbsp;</td>
                            <td style="border: none; width: 10px;">&nbsp;</td>
                            <td style="border: none; width: 143px;">&nbsp;</td>
                            <td style="border: none; width: 94px;">&nbsp;</td>
                            <td style="border: none; width: 10px;">&nbsp;</td>
                            <td style="border: none; width: 9px;">&nbsp;</td>
                            <td style="border: none; width: 73px;">&nbsp;</td>
                            <td style="border: none; width: 60px;">&nbsp;</td>
                            <td style="border: none; width: 31px;">&nbsp;</td>
                            <td style="border: none; width: 13px;">&nbsp;</td>
                            <td style="border: none; width: 46px;">&nbsp;</td>
                            <td style="border: none; width: 16px;">&nbsp;</td>
                            <td style="border: none; width: 65px;">&nbsp;</td>
                            <td style="border: none; width: 12px;">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <table style="width: 503px; margin-left: auto; margin-right: auto; height: 248px;" border="1">
                <caption>&nbsp;</caption>
                <tbody>
                    <tr style="height: 52px;">
                        <td style="width: 254.734px; height: 52px; text-align: center;"><strong>En mujeres (8
                                funciones):</strong></td>
                        <td style="width: 232.266px; height: 52px; text-align: center;"><strong>En hombres (5
                                funciones):</strong></td>
                    </tr>
                    <tr style="text-align: center; height: 180.562px;">
                        <td style="width: 254.734px; height: 163.562px;">
                            <p style="font-weight: 400;">Dependencia total 0-1</p>
                            <p style="font-weight: 400;">Dependencia grave 2-3</p>
                            <p style="font-weight: 400;">Dependencia moderada 4-5</p>
                            <p style="font-weight: 400;">Dependencia ligera 6-7</p>
                            <p style="font-weight: 400;">Aut&oacute;noma 8.</p>
                        </td>
                        <td style="width: 232.266px; height: 163.562px;">
                            <p style="font-weight: 400;">Dependencia total 0</p>
                            <p style="font-weight: 400;">Dependencia grave 1</p>
                            <p style="font-weight: 400;">Dependencia moderada 2-3</p>
                            <p style="font-weight: 400;">Dependencia ligera 4</p>
                            <p style="font-weight: 400;">Aut&oacute;nomo 5.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style="margin: 7% 5%; ">
            <p>*La diferencia de puntaje se da porque en las tareas dom&eacute;sticas es donde m&aacute;s se nota la
                tradici&oacute;n, las mujeres que son ahora adultas mayores, han tenido mayor responsabilidad a la hora de
                cocinar, lavar la ropa y arreglar la casa o hacer el aseo de la misma. Es por ello que, en las respuestas
                m&aacute;s independientes de cada uno de estos &iacute;tems, son las mujeres las que poseen mayor porcentaje
                y tiene un mayor nivel de organizaci&oacute;n para su realizaci&oacute;n. En cambio, algunos hombres
                necesitar&iacute;an ayuda de otra persona o supervisi&oacute;n, para realizar estas actividades y esto no
                est&aacute; relacionado con su nivel de dependencia o independencia sino m&aacute;s bien con su
                tradici&oacute;n cultural.</p>
            <p>Las 5 funciones valoradas en hombres son:</p>
            <ol>
                <li>CAPACIDAD PARA USAR EL TELEFONO:</li>
                <li>HACER COMPRAS:</li>
                <li>USO DE MEDIOS DE TRANSPORTE</li>
                <li>RESPONSABILIDAD RESPECTO A SU MEDICACI&Oacute;N:</li>
                <li>CAPACIDAD PARA UTILIZAR DINERO</li>
            </ol>
            <p><strong>&nbsp;</strong></p>
            <p><strong>INSTRUCTIVO:</strong></p>
            <p><strong>ESCALA DE LAWTON Y BRODY</strong></p>
            <p>Publicada en 1969 y desarrollada en el Philadelphia Geria-tric Center para evaluaci&oacute;n de
                autonom&iacute;a f&iacute;sica y AIVD (actividades instrumentales de la vida diaria) en poblaci&oacute;n
                anciana institucionalizada o no. La escala de Lawton es uno de los instrumentos de medici&oacute;n de AIVD
                m&aacute;s utilizado internacionalmente y la m&aacute;s utilizada en las unidades de geriatr&iacute;a de
                Espa&ntilde;a, sobre todo a nivel de consulta y hospital de d&iacute;a. Su traducci&oacute;n al
                espa&ntilde;ol se public&oacute; en el a&ntilde;o 1993.&nbsp;</p>
            <p>Una gran ventaja de esta escala es que permite estudiar y analizar no s&oacute;lo su puntuaci&oacute;n global
                sino tambi&eacute;n cada uno de los &iacute;tems.</p>
            <p>&nbsp;Ha demostrado su utilidad como m&eacute;todo objetivo y breve que permite implantar y evaluar un plan
                terap&eacute;utico tanto a nivel de los cuidados diarios de los pacientes como a nivel docente e
                investigador. Es muy sensible para detectar las primeras se&ntilde;ales de deterioro de la persona adulta
                mayor.</p>
            <p>&nbsp;</p>
            <p><strong>Descripci&oacute;n y normas de aplicaci&oacute;n:</strong></p>
            <p>Eval&uacute;a la capacidad funcional mediante 8 &iacute;tems: capacidad para utilizar el tel&eacute;fono,
                hacer compras, preparar la comida, realizar el cuidado de la casa, lavado de la ropa, utilizaci&oacute;n de
                los medios de transporte y responsabilidad respecto a la medicaci&oacute;n y administraci&oacute;n de su
                econom&iacute;a. A cada &iacute;tem se le asigna un valor num&eacute;rico 1 (independiente) o 0
                (dependiente). La puntaci&oacute;n final es la suma del valor de todas las respuestas y oscila entre 0
                (m&aacute;xima dependencia) y 8 (independencia total). La informaci&oacute;n se obtiene preguntando
                directamente al individuo o a su cuidador principal. El tiempo medio requerido para su realizaci&oacute;n es
                de 4 minutos.</p>
            <p>&nbsp;</p>
            <p>Cualquier miembro del equipo puede aplicar esta escala, pero debe estar motivado, concienciado y entrenado.
            </p>
            <p>&nbsp;</p>
            <p><strong>Fiabilidad, validez y limitaciones:</strong></p>
            <p>Presenta un coeficiente de reproductividad inter e intraobservador alto (0.94). No se han reportado datos de
                fiabilidad. Su principal limitaci&oacute;n es la influencia de aspectos culturales y del entorno sobre las
                variables que estudia, siendo necesario adaptarlas al nivel cultural de la persona.</p>
            <p>&nbsp;Algunas actividades requieren ser aprendidas o de la presencia de elementos externos para su
                realizaci&oacute;n. Las actividades instrumentales son dif&iacute;ciles de valorar en pacientes
                institucionalizados por las limitaciones impuestas por el entorno social propio del centro.</p>
            <p>&nbsp;No todas las personas poseen la misma habilidad ante un mismo grado de complejidad y la
                puntuaci&oacute;n de diversos par&aacute;metros de la escala pueden reflejar ciertas limitaciones sociales
                m&aacute;s que el verdadero grado de capacidad del individuo. Se considera una escala m&aacute;s apropiada
                para las mujeres puesto que muchas de las actividades que mide la escala han sido realizadas
                tradicionalmente por ellas, pero tambi&eacute;n se recomienda su aplicaci&oacute;n en hombres, aunque
                todav&iacute;a est&aacute;n pendientes de identificar aquellas actividades instrumentales realizadas por
                ellos seg&uacute;n los patrones sociales.</p>
            </div>
        </div>
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
