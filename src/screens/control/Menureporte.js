import React, { useState } from "react";
import { ReporteLawtonBrody } from "../gestion/reportes/ReporteLawtonBrody";
import {

  Text,
  StyleSheet,
  TouchableHighlight,
  View,

  TouchableOpacity,
} from "react-native";

import { styles } from "../../estilos/styleReporte";

export const Menureporte = (props) => {
  const navigation = props.navigation;
  const params = props.route.params;

  const idEncabezado = params.enc_id

  console.log("idEncabezado: "+idEncabezado)


  const ReporteBarthel = () => {
    navigation.navigate('ReporteBarthel', {
      idEncabezado: idEncabezado,
    });
  }

  const ReporteExamenMental = () => {
    navigation.navigate('ReporteExamenMental', {
      idEncabezado: idEncabezado,
    });
  }

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

          <TouchableOpacity style={styles.txtBtn}
            // disabled={value.validacionBtn}
            //</View>onPress={() => registroEncabezado()}
            onPress={ReporteBarthel}
          >
            <Text style={[styles.text]}>Reporte Barthel</Text>
          </TouchableOpacity>


         
          <ReporteLawtonBrody
            vals={idEncabezado}
          />


          <TouchableOpacity style={styles.txtBtn}
            // disabled={value.validacionBtn}
            //</View>onPress={() => registroEncabezado()}
            onPress={ReporteExamenMental}
          >
            <Text style={[styles.text]}>Reporte Mini Examen del Estado Mental</Text>
          </TouchableOpacity>

        </View>

      </View>

    </>
  );



};
