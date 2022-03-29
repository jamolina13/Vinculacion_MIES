import React, { useState } from "react";
import { ReporteLawtonBrody } from "../gestion/reportes/ReporteLawtonBrody";
import {ReporteExamenMental} from "../gestion/reportes/ReporteExamenMental";
import { ReporteBarthel } from "../gestion/reportes/ReporteBarthel";
import { ReporteYesavage } from "../gestion/reportes/ReporteYesavage";
import {Text,View,TouchableOpacity} from "react-native";

import { styles } from "../../estilos/styleReporte";

export const Menureporte = (props) => {
  const navigation = props.navigation;
  const params = props.route.params;

  const idEncabezado = params.enc_id


  return (
    <>

      <View
        style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
      >

        <View style={styles.inputContainer}>

          <ReporteYesavage vals={idEncabezado}/>

          <ReporteBarthel vals={idEncabezado}/>
         
          <ReporteLawtonBrody vals={idEncabezado}/>

          <ReporteExamenMental vals={idEncabezado}/>

        </View>

      </View>

    </>
  );



};
