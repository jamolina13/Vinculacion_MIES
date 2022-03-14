import React, { useState } from "react";
import {

    Text,
    StyleSheet,
    View,

    TouchableOpacity,
} from "react-native";

import { styles } from "../../../estilos/styleReporte";

export const ReporteExamenMental = (props) => {
    const navigation = props.navigation;
    return (
        <>

            <View
                style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
            >

                <View style={styles.inputContainer}>



                    <TouchableOpacity style={styles.txtBtn}
                    // disabled={value.validacionBtn}
                    //</View>onPress={() => registroEncabezado()}
                    //onPress={() => navigation.navigate("HeaderInicio")}
                    >
                        <Text style={[styles.text]}>Reporte Mini Examen del Estado Mental</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </>
    );
};
