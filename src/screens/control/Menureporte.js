import React, { useState } from "react";
import { ReporteLawtonBrody } from "../gestion/reportes/ReporteLawtonBrody";
import {ReporteExamenMental} from "../gestion/reportes/ReporteExamenMental";
import { ReporteBarthel } from "../gestion/reportes/ReporteBarthel";
import {Text,View,TouchableOpacity} from "react-native";

import { styles } from "../../estilos/styleReporte";

export const Menureporte = (props) => {
  const navigation = props.navigation;
  const params = props.route.params;

  const idEncabezado = params.enc_id

  console.log("idEncabezado: "+idEncabezado)


  const ReporteYesavage = () => {
    navigation.navigate('ReporteYesavage', {
      idEncabezado: idEncabezado,
    });
  }

  return (
    <>

      <View
        style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
      >

        <View style={styles.inputContainer}>

          <TouchableOpacity style={styles.txtBtn}
            // disabled={value.validacionBtn}
            //</View>onPress={() => registroEncabezado()}
            onPress={ReporteYesavage}
          >
            <Text style={[styles.text]}> Reporte Yesavage</Text>
          </TouchableOpacity>

          <ReporteBarthel vals={idEncabezado}/>
         
          <ReporteLawtonBrody vals={idEncabezado}/>

          <ReporteExamenMental vals={idEncabezado}/>

        </View>

      </View>

    </>
  );



};
