import React, {useEffect, useState } from "react";
import {
    Button,
    Text,
    StyleSheet,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";

import { styles } from "../../../estilos/styleReporte";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing'

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

export const ReporteYesavage = (props) => {
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
                "http://192.188.58.82:3000/reporteYesavajeById/" + idEncabezado + "",

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
        datosReporte[9] = `${item.ey_id}`;
        datosReporte[10] = `${item.ef_id}`;
        datosReporte[11] = `${item.ey_p1_satisfecho}`;
        datosReporte[12] = `${item.ey_p2_actividades}`;
        datosReporte[13] = `${item.ey_p3_vacio}`;
        datosReporte[14] = `${item.ey_p4_aburrido}`;
        datosReporte[15] = `${item.ey_p5_animo}`;
        datosReporte[16] = `${item.ey_p6_preocupado}`;
        datosReporte[17] = `${item.ey_p7_feliz}`;
        datosReporte[18] = `${item.ey_p8_desamparado}`;
        datosReporte[19] = `${item.ey_p9_cosas}`;
        datosReporte[20] = `${item.ey_p10_memoria}`;
        datosReporte[21] = `${item.ey_p11_estar_vivo}`;
        datosReporte[22] = `${item.ey_p12_inutil_despreciable}`;
        datosReporte[23] = `${item.ey_p13_energia}`;
        datosReporte[24] = `${item.ey_p14_esperanza_actual}`;
        datosReporte[25] = `${item.ey_p15_cree_mejor}`;
        datosReporte[26] = `${item.ey_tiempo_inicial}`;
        datosReporte[27] = `${item.ey_tiempo_final}`;
        datosReporte[28] = `${item.ey_tiempo_total}`;
        datosReporte[29] = `${item.ey_estado}`;
        datosReporte[30] = `${item.ey_puntaje_total}`;
    });

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

    

    const createDynamicTable = () => {


        // await useEffect(() => {
        //     fetch("192.188.58.82:3000/consulta?/1")
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
            <title></title>
        </head>
        
        <body>

        <p data-pm-slice="1 4 []">&nbsp;<strong><img style="display: block; margin-left: auto; margin-right: auto;" src="data:image/jpeg;base64,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" alt="" width="462" height="109" /></strong></p>
<p style="text-align: center;"><strong>SUBSECRETAR&Iacute;A DE ATENCI&Oacute;N INTERGENERACIONAL</strong></p>
<p style="text-align: center;"><strong>DIRECCI&Oacute;N DE LA POBLACI&Oacute;N ADULTA MAYOR</strong></p>
<p>&nbsp;<strong>Nombre de la Unidad de Atenci&oacute;n:</strong> ${datosReporte[4]}</p>
<table style="width: 872px; border-color: black; height: 50px;" border="1" cellspacing="0">
<tbody>
<tr style="height: 12px;">
<td style="width: 919px; height: 12px;" colspan="5">
<p style="text-align: center;"><strong>ESCALA DE DEPRESI&Oacute;N GERI&Aacute;TRICA DE YESAVAGE</strong></p>
<p style="text-align: center;">FICHA N&deg; 3d</p>
</td>
</tr>
<tr style="height: 83px;">
<td style="width: 65px; height: 83px;">
<p style="text-align: center;"><strong>Nombre del Uruario:</strong></p>
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
<tr style="height: 27px;">
<td style="width: 65px; height: 27px;">
<p style="text-align: center;"><strong>Edad</strong></p>
</td>
<td style="width: 139px; height: 27px;">
<p><strong>A&ntilde;os: </strong></p>
<p>${calcularEdad(datosReporte[5])}</p>
</td>
<td style="width: 118px; height: 27px;">
<p><strong>Meses:</strong></p>
<p>${calcularMes(datosReporte[5])}</p>
</td>
<td style="width: 337px; height: 27px;">
<p><strong>Fecha de aplicaci&oacute;n:</strong></p>
<p>${datosReporte[8]}</p>
</td>
<td style="width: 244px; height: 27px;">
<p><strong>Aplicado por:</strong></p>
<p>${datosReporte[6]}</p>
</td>
</tr>
<tr style="height: 32px;">
<td style="width: 65px; height: 32px;">
<p><strong>Hora Inicial:</strong></p>
</td>
<td style="height: 32px;">
<p>${datosReporte[26]}</p>
</td>
<td style="width: 139px; height: 32px;">
<p>&nbsp;<strong>Hora final:</strong></p>
</td>
<td style="height: 32px;">
<p>${datosReporte[27]}</p>
</td>
<td style="width: 337px; height: 32px;">
<p>&nbsp;<strong>Tiempo Total:</strong></p>
<p>${datosReporte[28]}</p>
</td>
</tr>
</tbody>
</table>
<p><strong>INSTRUCCIONES:</strong><br />Responda a cada una de las siguientes preguntas seg&uacute;n como se ha sentido Ud. durante la &Uacute;LTIMA SEMANA</p>
<table style="height: 260px; width: 872px; border-color: black; margin-left: auto; margin-right: auto;" border="1" cellspacing="0">
<tbody>
<tr style="height: 5.1875px;">
<td style="width: 28px; height: 5.1875px; text-align: center;">1</td>
<td style="width: 772.563px; height: 5.1875px;">&iquest;Est&aacute; Ud. b&aacute;sicamente satisfecho con su vida?</td>
<td style="width: 41.4375px; height: 5.1875px;">${datosReporte[11]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">2</td>
<td style="width: 772.563px; height: 18px;">&iquest;Ha disminuido o abandonado muchos de sus intereses o actividades previas?</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[12]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">3</td>
<td style="width: 772.563px; height: 18px;">&iquest;Siente que su vida est&aacute; vac&iacute;a?</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[13]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">4</td>
<td style="width: 772.563px; height: 18px;">&iquest;Se siente aburrido frecuentemente?</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[14]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">5</td>
<td style="width: 772.563px; height: 18px;">&iquest;Est&aacute; Ud. de buen &aacute;nimo la mayor&iacute;a del tiempo?</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[15]}</td>
</tr>
<tr style="height: 37px;">
<td style="width: 28px; height: 37px; text-align: center;">6</td>
<td style="width: 772.563px; height: 37px;">&iquest;Est&aacute; preocupado o teme que algo malo le va a pasar? SI no&iquest;Est&aacute; preocupado o teme que algo malo le va a pasar?</td>
<td style="width: 41.4375px; height: 37px;">
<p><span style="font-weight: 400;">${datosReporte[16]}</span></p>
</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">7</td>
<td style="width: 772.563px; height: 18px;">&iquest;Se siente feliz la mayor parte del tiempo?</td>
<td style="width: 41.4375px; height: 18px;"><span style="font-weight: 400;">${datosReporte[17]}</span></td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">8</td>
<td style="width: 772.563px; height: 18px;">&iquest;Se siente con frecuencia desamparado?&nbsp;&nbsp;</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[18]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">9</td>
<td style="width: 772.563px; height: 18px;">&iquest;Prefiere Ud. quedarse en casa a salir a hacer cosas nuevas?&nbsp;</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[19]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">10</td>
<td style="width: 772.563px; height: 18px;">&iquest;Siente Ud. que tiene m&aacute;s problemas con su memoria que otras personas de suedad?</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[20]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">11</td>
<td style="width: 772.563px; height: 18px;">&iquest;Cree Ud. que es maravilloso estar vivo?&nbsp;</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[21]}</td>
</tr>
<tr style="height: 20px;">
<td style="width: 28px; height: 20px; text-align: center;">12</td>
<td style="width: 772.563px; height: 20px;">&iquest;Se siente in&uacute;til o despreciable como est&aacute; Ud. actualmente??</td>
<td style="width: 41.4375px; height: 20px;">${datosReporte[22]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">13</td>
<td style="width: 772.563px; height: 18px;">&iquest;Se siente lleno de energ&iacute;a?</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[23]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">14</td>
<td style="width: 772.563px; height: 18px;">&iquest;Se encuentra sin esperanza ante su situaci&oacute;n actual?</td>
<td style="width: 41.4375px; height: 18px;">${datosReporte[24]}</td>
</tr>
<tr style="height: 18px;">
<td style="width: 28px; height: 18px; text-align: center;">15</td>
<td style="width: 772.563px; height: 18px;">&iquest;Cree Ud. que las otras personas est&aacute;n en general mejor que Usted?</td>
<td style="width: 41.4375px; height: 18px;"><span style="font-weight: 400;">${datosReporte[25]}</span></td>
</tr>
</tbody>
</table>
<table style="height: 22px; width: 872px; border-color: black;" border="1" cellspacing="0">
<tbody>
<tr>
<td style="width: 1156px;">Las respuestas que indican depresi&oacute;n estan en <strong>NEGRITA Y MAY&Uacute;SCULAS.</strong><br />Cada una de estas respuestas cuenta<strong> 1 PUNTO</strong>.</td>
<td style="width: 157.354px;">TOTAL</td>
<td style="width: 147.646px;">
<div>
<div style="width: 28px; height: 18px; text-align: center;">${datosReporte[30]}</div>

</div>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;<strong>FIRMA DEL EVALUADOR:</strong></p>
<p><strong>____________________</strong></p>
<p>1 Sheik JI, Yesavage JA Geriatric Depression Scale: recent evidence and development of a shorter version. Clin Gerontol.1986; 5:165-172.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong>INSTRUCTIVO:2</strong></p>
<p><br /><strong>Puntuaci&oacute;n total: 15 puntos</strong></p>
<p><br /><strong>PUNTOS DE CORTE:</strong></p>
<table style="height: 151px; border-color: black;" border="1" width="352" cellspacing="0">
<tbody>
<tr style="height: 28px;">
<td style="width: 169.523px; text-align: center; height: 28px;">No depresi&oacute;n</td>
<td style="width: 169.523px; text-align: center; height: 28px;">10-15 puntos</td>
</tr>
<tr style="height: 29.0078px;">
<td style="width: 169.523px; text-align: center; height: 29.0078px;">Probable depresi&oacute;n&nbsp;</td>
<td style="width: 169.523px; text-align: center; height: 29.0078px;">6-9 puntos</td>
</tr>
<tr style="height: 32px;">
<td style="width: 169.523px; text-align: center; height: 32px;">Depresi&oacute;n establecida&nbsp;</td>
<td style="width: 169.523px; text-align: center; height: 32px;">10-15 puntos</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong> Tiempo de administraci&oacute;n:</strong> 10-15 minutos.</p>
<p><br /><strong>Normas de aplicaci&oacute;n:</strong> El evaluador lee las preguntas al paciente sin realizar interpretaciones de los &iacute;tems y<br />dejando claro al paciente que la respuesta no debe ser muy meditada). La respuesta debe ser &ldquo;s&iacute;&rdquo; o &ldquo;no&rdquo; y<br />debe referirse a c&oacute;mo se ha sentido el paciente la semana anterior.</p>
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
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

<p><strong>________</strong></p>
<p>2 Aguado , Mart&iacute;nez j, On&iacute;s mc et al.(2000). adaptaci&oacute;n y validaci&oacute;n al castellano de la versi&oacute;n abreviada de<br />la &ldquo;Geriatric Depresi&oacute;n scale&rdquo; (gds) de Yesavage. atenci&oacute;n primaria, 26 (supl 1): 328.</p> 


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
