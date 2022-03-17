import React, { useState, useEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    Button,
} from "react-native";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export const ReporteLawtonBrody = (props) => {
    const params = props.route.params;
    const navigation = props.navigation;

    const idEncabezado = params.idEncabezado

    console.log(idEncabezado+ "aasas")
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
      }, [state.isReady]);

    const llamarDatos = async() =>{
        
        try {
            const responseE = await fetch(
                "http://192.188.58.82:3000/reporteLawtonById/"+idEncabezado+"",
                //"http://192.188.58.82:3000/reporteLawtonById/384",
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

    const obj =
    {
        ef_id: 1,
        elb_usar_telefono_op1: 1,
        elb_usar_telefono_op2: 0,
        elb_usar_telefono_op3: 0,
        elb_usar_telefono_op4: 0,
        elb_hacer_compras_op1: 1,
        elb_hacer_compras_op2: 0,
        elb_hacer_compras_op3: 0,
        elb_hacer_compras_op4: 0,
        elb_preparar_comida_op1: 1,
        elb_preparar_comida_op2: 0,
        elb_preparar_comida_op3: 0,
        elb_preparar_comida_op4: 0,
        elb_cuidado_casa_op1: 1,
        elb_cuidado_casa_op2: 0,
        elb_cuidado_casa_op3: 0,
        elb_cuidado_casa_op4: 0,
        elb_cuidado_casa_op5: 0,
        elb_lavar_ropa_op1: 1,
        elb_lavar_ropa_op2: 0,
        elb_lavar_ropa_op3: 0,
        elb_uso_transporte_op1: 1,
        elb_uso_transporte_op2: 0,
        elb_uso_transporte_op3: 0,
        elb_uso_transporte_op4: 0,
        elb_uso_transporte_op5: 0,
        elb_medicacion_op1: 1,
        elb_medicacion_op2: 0,
        elb_medicacion_op3: 0,
        elb_utiliza_dinero_op1: 1,
        elb_utiliza_dinero_op2: 0,
        elb_utiliza_dinero_op3: 0,
        elb_tiempo_inicial: "08:30:00",
        elb_tiempo_final: "09:30:00",
        elb_tiempo_total: "01:00:00",
        elb_estado: 1,
        elb_puntaje_total: 1



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

        const blanco = `<p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;">`;
        const amarillo = `<p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal; background-color: yellow;">`;
        const arraycolors = []
        //console.log(obj)
        Object.keys(obj).forEach(key => {
            if (obj[key] === 0 && key != 'ef_id') {
                arraycolors.push(blanco)
            } else if (obj[key] === 1 && key != 'ef_id') {
                arraycolors.push(amarillo)
            }
        })

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
            datosReporte[9] = `${item.ib_id}`;
            datosReporte[10] = `${item.ef_id}`;
            datosReporte[11] = `${item.ib_p1_comer}`;
            datosReporte[12] = `${item.ib_p2_trasladarse}`;
            datosReporte[13] = `${item.ib_p3_aseo_personal}`;
            datosReporte[14] = `${item.ib_p4_uso_retrete}`;
            datosReporte[15] = `${item.ib_p5_bañarse}`;
            datosReporte[16] = `${item.ib_p6_desplazarse}`;
            datosReporte[17] = `${item.ib_p7_escaleras}`;
            datosReporte[18] = `${item.ib_p8_vestirse_desvertirse}`;
            datosReporte[19] = `${item.ib_p9_control_heces}`;
            datosReporte[20] = `${item.ib_p10_control_orina}`;
            datosReporte[21] = `${item.ib_tiempo_inicial}`;
            datosReporte[22] = `${item.ib_tiempo_final}`;
            datosReporte[23] = `${item.ib_tiempo_total}`;
            datosReporte[24] = `${item.ib_estado}`;
            datosReporte[25] = `${item.ib_puntaje_total}`;

            //console.log(itemData)
            //const textData = text;
            //console.log(itemData.indexOf(textData) > -1);
            //return itemData.indexOf(textData) > -1;
        });
        console.log(datosReporte[0])
        console.log(datosReporte[1])
        console.log(datosReporte[2])
        console.log(datosReporte[3])
        const html = `
    <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <title>Hola Mundo!</title>
</head>

<body>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <div class="WordSection1">
        <p data-pm-slice="1 4 []">&nbsp;</p>
        <p style="text-align: center;"><strong><img
                    src="data:image/jpeg;base64,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"
                    alt="" width="462" height="109" /></strong></p>
        <p style="text-align: center;"><strong>SUBSECRETAR&Iacute;A DE ATENCI&Oacute;N INTERGENERACIONAL</strong></p>
        <p style="text-align: center;"><strong>DIRECCI&Oacute;N DE LA POBLACI&Oacute;N ADULTA MAYOR</strong></p>
        <div align="center">
            <table class="MsoTableGrid" style="width: 473.2pt; border-collapse: collapse; border: none;" border="1"
                width="631" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr style="height: 29.55pt;">
                        <td style="width: 473.2pt; border: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 29.55pt;"
                            colspan="6" width="631">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">ESCALA DE LAWTON Y BRODY (ACTIVIDADES
                                        INSTRUMENTALES DE LA VIDA DIARIA)</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 13.7pt;">
                        <td style="width: 54.95pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 13.7pt;"
                            width="73">
                            <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                            
                                        style="color:black;">Nombre de usuario:</span></strong></p>
                        </td>
                        <td style="width: 65.15pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 13.7pt;"
                            width="87">
                            <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                        style="color: black;"> ${datosReporte[0]} </span></strong></p>
                        </td>
                        <td style="width: 111.25pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 13.7pt;"
                            width="148">
                            <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                        style="color: black;">Zona: ${datosReporte[1]} </span></strong></p>
                        </td>
                        <td style="width: 105.65pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 13.7pt;"
                            width="141">
                            <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                        style="color: black;">Distrito: ${datosReporte[2]}</span></strong></p>
                        </td>
                        <td style="width: 136.2pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 13.7pt;"
                            colspan="2" valign="top" width="182">
                            <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                        style="color: black;">Modalidad de Atenci&oacute;n: ${datosReporte[3]} </span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 48.25pt;">
                        <td style="width: 473.2pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 3.5pt 0cm 3.5pt; height: 48.25pt;"
                            colspan="6" valign="top" width="631">
                            <p class="MsoNormal"
                                style="text-align: justify; line-height: normal; margin: 0cm 9.6pt 0cm 10.45pt;"><span
                                    style="color: black;">A continuaci&oacute;n, encontrar&aacute; 8 &iacute;tems
                                    correspondientes a actividades instrumentales de la vida diaria. Lea en voz alta las
                                    alternativas pertenecientes a cada una de ellas y solicite a la persona evaluada que
                                    escoja la que m&aacute;s coincida con la realidad de la persona adulta mayor. La
                                    informaci&oacute;n se obtiene preguntando directamente al usuario o a su cuidador
                                    principal.</span></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 3.5pt 0cm 3.5pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1. CAPACIDAD PARA USAR EL
                                        TELEFONO:</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 3.5pt 0cm 3.5pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: right; line-height: normal;"
                                align="right"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 3.5pt 0cm 3.5pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[0]}<strong><span
                                        style="color: black;">- Utiliza el tel&eacute;fono por iniciativa
                                        propia</span></strong></p>
                            ${arraycolors[1]}<strong><span
                                        style="color: black;">- Es capaz de marcar bien algunos n&uacute;meros
                                        familiares</span></strong></p>
                            ${arraycolors[2]}<strong><span
                                        style="color: black;">- Es capaz de contestar al tel&eacute;fono, pero no de
                                        marcar</span></strong></p>
                            ${arraycolors[3]}<strong><span
                                        style="color: black;">- No utiliza el tel&eacute;fono</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 3.5pt 0cm 3.5pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 3.5pt 0cm 3.5pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">2. HACER COMPRAS:</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 3.5pt 0cm 3.5pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 3.5pt 0cm 3.5pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[4]}<strong><span
                                        style="color: black;">- Realiza todas las compras necesarias
                                        independientemente</span></strong></p>
                            ${arraycolors[5]}<strong><span
                                        style="color: black;">- Realiza independientemente peque&ntilde;as
                                        compras</span></strong></p>
                            ${arraycolors[6]}<strong><span
                                        style="color: black;">- Necesita ir acompa&ntilde;ado para cualquier
                                        compra</span></strong></p>
                            ${arraycolors[7]}<strong><span
                                        style="color: black;">- Totalmente incapaz de comprar</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 3.5pt 0cm 3.5pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">3. PREPARACI&Oacute;N DE LA
                                        COMIDA</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[8]}<strong><span
                                        style="color: black;">- Organiza, prepara y sirve las comidas por s&iacute; solo
                                        adecuadamente</span></strong></p>
                            ${arraycolors[9]}<strong><span
                                        style="color: black;">- Prepara adecuadamente las comidas si se le proporcionan
                                        los ingredientes</span></strong></p>
                            ${arraycolors[10]}<strong><span
                                        style="color: black;">- Prepara, calienta y sirve las comidas, pero no sigue una
                                        dieta adecuada</span></strong></p>
                            ${arraycolors[11]}<strong><span
                                        style="color: black;">- Necesita que le preparen y sirvan las
                                        comidas</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">4. CUIDADO DE LA CASA</span></strong>
                            </p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[12]}<strong><span
                                        style="color: black;">- Mantiene la casa solo o con ayuda ocasional (para
                                        trabajos pesados)</span></strong></p>
                            ${arraycolors[13]}<strong><span
                                        style="color: black;">- Realiza tareas ligeras, como lavar los platos o hacer
                                        las camas</span></strong></p>
                            ${arraycolors[14]}<strong><span
                                        style="color: black;">- Realiza tareas ligeras, pero no puede mantener un
                                        adecuado nivel de limpieza</span></strong></p>
                            ${arraycolors[15]}<strong><span
                                        style="color: black;">- Necesita ayuda en todas las labores de
                                        casa</span></strong></p>
                            ${arraycolors[16]}<strong><span
                                        style="color: black;">- No participa en ninguna labor de la casa</span></strong>
                            </p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">5. LAVADO DE LA ROPA</span></strong>
                            </p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[17]}<strong><span
                                        style="color: black;">- Lava por s&iacute; solo toda la ropa</span></strong></p>
                            ${arraycolors[18]}<strong><span
                                        style="color: black;">- Lava por s&iacute; solo peque&ntilde;as
                                        prendas</span></strong></p>
                            ${arraycolors[19]}<strong><span
                                        style="color: black;">- Todo el lavado de ropa debe ser realizado por
                                        otro</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">6. USO DE MEDIOS DE
                                        TRANSPORTE</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[20]}
                                <strong><span style="color: black;">- Viaja solo en transporte p&uacute;blico o conduce
                                        su propio coche</span></strong></p>
                            ${arraycolors[21]}
                                <strong><span style="color: black;">- Es capaz de coger un taxi, pero no usa otro medio
                                        de transporte</span></strong></p>
                            ${arraycolors[22]}
                                <strong><span style="color: black;">- Viaja en transporte p&uacute;blico cuando va
                                        acompa&ntilde;ado por otra persona</span></strong></p>
                            ${arraycolors[23]}
                                <strong><span style="color: black;">- Utiliza el taxi o el autom&oacute;vil s&oacute;lo
                                        con la ayuda de otros</span></strong></p>
                            ${arraycolors[24]}
                                <strong><span style="color: black;">- No viaja</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">7. RESPONSABILIDAD RESPECTO A SU
                                        MEDICACI&Oacute;N:</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[25]}<strong><span
                                        style="color: black;">- Es capaz de tomar su medicaci&oacute;n a la dosis y hora
                                        adecuada</span></strong></p>
                            ${arraycolors[26]}<strong><span
                                        style="color: black;">- Toma su medicaci&oacute;n si la dosis es preparada
                                        previamente</span></strong></p>
                            ${arraycolors[27]}<strong><span
                                        style="color: black;">- No es capaz de administrarse su
                                        medicaci&oacute;n</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 18.7pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            colspan="5" valign="top" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">8. CAPACIDAD PARA UTILIZAR
                                        DINERO</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center">&nbsp;</p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 18.7pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 65.1pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            colspan="5" valign="top" width="535">
                            ${arraycolors[28]}<strong><span
                                        style="color: black;">- Se encarga de sus asuntos econ&oacute;micos por
                                        s&iacute; solo</span></strong></p>
                            ${arraycolors[29]}<strong><span
                             le="color: black;">- Realiza las compras de cada d&iacute;a, pero necesita
                                        ayuda con l           styas grandes compras y en los bancos</span></strong></p>
                            ${arraycolors[30]}<strong><span
                                        style="color: black;">- Incapaz de manejar dinero</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 65.1pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">1</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">&nbsp;</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: center; line-height: normal;"
                                align="center"><strong><span style="color: black;">0</span></strong></p>
                        </td>
                    </tr>
                    <tr style="height: 33.25pt;">
                        <td style="width: 401.15pt; border: solid windowtext 1.0pt; border-top: none; padding: 0cm 5.4pt 0cm 5.4pt; height: 33.25pt;"
                            colspan="5" width="535">
                            <p class="MsoNormal" style="margin-bottom: 0cm; text-align: right; line-height: normal;"
                                align="right"><strong><span style="color: black;">TOTAL:</span></strong></p>
                        </td>
                        <td style="width: 72.05pt; border-top: none; border-left: none; border-bottom: solid windowtext 1.0pt; border-right: solid windowtext 1.0pt; padding: 0cm 5.4pt 0cm 5.4pt; height: 33.25pt;"
                            valign="top" width="96">
                            <p class="MsoNormal" style="padding: .1cm 1cm; line-height: normal; "><strong><span
                                        style="color: black;">${obj.elb_puntaje_total}</span></strong></p>
                            <p class="MsoNormal" style="margin-bottom: 0cm; line-height: normal;"><strong><span
                                        style="color: black;">&nbsp;</span></strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border: none;" width="73">&nbsp;</td>
                        <td style="border: none;" width="87">&nbsp;</td>
                        <td style="border: none;" width="148">&nbsp;</td>
                        <td style="border: none;" width="141">&nbsp;</td>
                        <td style="border: none;" width="86">&nbsp;</td>
                        <td style="border: none;" width="96">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="MsoNormal">&nbsp;</p>
    </div>
</body>

</html>
    
    `;
        return html;
    }

    return (
        <View>
            <Button title='Print' onPress={print} />
            <View style={styles8.spacer} />
            <Button title='Print to PDF file' onPress={printToFile} />
            {Platform.OS === 'ios' &&
                <>
                    <View style={styles8.spacer} />
                    <Button title='Select printer' onPress={selectPrinter} />
                    <View style={styles8.spacer} />
                    {selectedPrinter ? <Text style={styles8.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text> : undefined}
                </>
            }
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

})