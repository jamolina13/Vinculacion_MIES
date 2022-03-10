import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)";

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#000000" }}>Saltar</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16, color: "#000000" }}>Siguiente</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Terminado</Text>
  </TouchableOpacity>
);

 export const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: "rgb(190, 230, 250)",
          image: (
            <Image source={require("../../../assets/img/Onboarding_01.png")} />
          ),
          title: "Misión Mis Mejores Años",
          subtitle: "",
        },
        {
          backgroundColor: "rgb(166, 228, 208)",
          image: (
            <Image source={require("../../../assets/img/Onboarding_02.png")} />
          ),
          title: "Inclusión",
          subtitle: "Promoveer la inclusión social",
        },
        {
          backgroundColor: "rgb(253, 182, 147)",
          image: (
            <Image source={require("../../../assets/img/Onboarding_03.png")} />
          ),
          title: "Calidad",
          subtitle: "Mejorar su calidad de Vida",
        },
        {
          backgroundColor: "rgb(253, 235, 147)",
          image: (
            <Image
              style={styles.image}
              source={require("../../../assets/img/Onboarding_04.png")}
            />
          ),
          title: "Reconocimiento",
          subtitle:
            "Reconocer a los adultos mayores como principales actores de su desarrollo y de la sociedad.",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1.9,
    resizeMode: "contain",
  },
});
