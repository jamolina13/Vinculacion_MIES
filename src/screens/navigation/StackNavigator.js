import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../login/LoginScreen";
import { RegistroAM } from "../gestion/adultoMayor/RegistroAM";
import { infoAM } from "../gestion/adultoMayor/infoAM";
import { RecuperacionScreen } from "../login/RecuperacionScreen";
import { useSelector } from "react-redux";
import { Test } from "../tests/Test";
import { InfoTecnico } from "../gestion/tecnico/InfoTecnico";
import { OnboardingScreen } from "../control/OnboardingScreen";
import { ActualizarAM } from "../gestion/adultoMayor/ActualizarAM";
import { HeaderInicio } from "./HeaderInicio";
import { InfoUsuario } from "../gestion/InfoUsuario";
import { ListadoPorTecnico } from "../gestion/tecnico/ListadoPorTecnico";
import { EncabezadoScreen } from "../control/EncabezadoScreen";
import { UbicacionScreen } from "../control/UbicacionScreen";
import { IndiTestYesavage } from "../indicaciones/IndiTestYesavage";
import { PreguntasTestYesavage, TestYesavage } from "../preguntas/PreguntasTestYesavage";
import { IndiTestLawtonBrody } from "../indicaciones/IndiTestLawtonBrody";
import { PreguntasTestMiniExamenMental } from "../preguntas/PreguntasTestMiniExamenMental";
import { PreguntasTestBarthel } from "../preguntas/PreguntasTestBarthel";
import { PreguntasTestLawtonBrody } from "../preguntas/PreguntasTestLawtonBrody";
import { RegistroTecnico } from "../gestion/tecnico/RegistroTecnico";
import { ActualizarTecnico } from "../gestion/tecnico/ActualizarTecnico";
import { Observaciones } from "../control/Observaciones";


//Creación de la navegación
const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent",
          backgroundColor: "#0275d8",
        },
        cardStyle: {
          backgroundColor: "white",
          paddingTop: 0,
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {isLogin !== true ? (
        <>
          <Stack.Screen
            name="OnbordingScreen"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Login"
            options={{ title: "MIES APP" }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="RecuperarContrasena"
            options={{ title: "MIES APP" }}
            component={RecuperacionScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HeaderInicio"
            options={{ title: "MIES APP" }}
            component={HeaderInicio}
          />
          <Stack.Screen
            name="InformacionUsuario"
            options={{ title: "MIES APP" }}
            component={ InfoUsuario }
          />
          <Stack.Screen
            name="RegistrodoAdultoMayor"
            options={{ title: "MIES APP" }}
            component={RegistroAM}
          />
          <Stack.Screen
            name="ListadoPorTecnico"
            options={{ title: "MIES APP" }}
            component={ListadoPorTecnico}
          />
          <Stack.Screen
            name="InformacionAM"
            options={{ title: "MIES APP" }}
            component={infoAM}
          />
          <Stack.Screen
            name="ActualizarAM"
            options={{ title: "MIES APP" }}
            component={ActualizarAM}
          />
          <Stack.Screen
            name="InformacionTecnico"
            options={{ title: "MIES APP" }}
            component={ InfoTecnico }
          />
          <Stack.Screen
            name="RegistroTecnico"
            options={{ title: "MIES APP" }}
            component={ RegistroTecnico }
          />
          <Stack.Screen
            name="ActualizarTecnico"
            options={{ title: "MIES APP" }}
            component={ ActualizarTecnico }
          />
          <Stack.Screen
            name="Test"
            options={{ title: "MIES APP" }}
            component={Test}
          />
          <Stack.Screen
            name="TestBarthel"
            options={{ title: "MIES APP" }}
            component={ PreguntasTestBarthel }
          />
          <Stack.Screen
            name="TestMiniExamenMental"
            options={{ title: "MIES APP" }}
            component={ PreguntasTestMiniExamenMental }
          />
          <Stack.Screen
            name="IndiTestLawtonBrody"
            options={{ title: "MIES APP" }}
            component={ IndiTestLawtonBrody }
          />
          <Stack.Screen
            name="TestLawtonBrody"
            options={{ title: "MIES APP" }}
            component={ PreguntasTestLawtonBrody }
          />
          <Stack.Screen
            name="IndiTestYesavage"
            options={{ title: "MIES APP" }}
            component={ IndiTestYesavage }
          />
          <Stack.Screen
            name="TestYesavage"
            options={{ title: "MIES APP" }}
            component={ PreguntasTestYesavage }
          />
          <Stack.Screen
            name="Encabezado"
            options={{ title: "MIES APP" }}
            component={ EncabezadoScreen }
          />
          <Stack.Screen
            name="Ubicacion"
            options={{ title: "MIES APP" }}
            component={ UbicacionScreen }
          />
           <Stack.Screen
            name="Observaciones"
            options={{ title: "MIES APP" }}
            component={ Observaciones}
          />
          
        </>
      )}
    </Stack.Navigator>
  );
};
