import React, { useState } from "react";
import {

    Text,
    StyleSheet,
    View,

    TouchableOpacity,
} from "react-native";

import { styles } from "../../../estilos/styleReporte";

export const ReporteLawtonBrody = (props) => {
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
                        <Text style={[styles.text]}>Reporte Lawton y Brody</Text>
                    </TouchableOpacity>



                </View>

            </View>

        </>
    );
};
