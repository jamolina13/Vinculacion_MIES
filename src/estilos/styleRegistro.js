import { Dimensions, StyleSheet } from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
  },
  scrollView: {
    marginBottom: 0,
    marginTop: 0,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 0,
    marginTop: 15,
  },
  logoLogin: {
    height: 150,
  },
  tituloContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  tituloLabel: {
    alignItems: "stretch",
    marginBottom: 50,
  },
  TituloLogin: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    alignItems: "center",
    textAlign: "center",
    opacity: 0.5,
    marginBottom: 10,
  },
  TextInfo: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 0,
    opacity: 0.5,
  },
  radioButton: {
    paddingLeft: 10,
    paddingRight: 30,
    textAlign: "justify",
    marginTop: 0,
    marginRight: 10,
  },
  TextUpdateForm: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 3,
    marginLeft: 30,
    textAlign: "left",
  },
  TextRadio1: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "justify",
  },
  TextRadio2: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "justify",
  },
  Radio2: {
    marginLeft: 60,
  },
  labelSexo: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    //opacity: 0.5
    textAlign: "left",
  },
  inputContainer: {
    marginTop: 10,
    textAlign: "left",
  },
  fechareg: {
    marginTop: 10,
    textAlign: "left",
    alignItems: "flex-end",
    width: WIDTH - 190,
  },
  inputContainer2: {
    marginTop: 10,
    textAlign: "left",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 50,
    backgroundColor: "rgba(0,0,0,0.15)",
    color: "black",
    marginHorizontal: 25,
  },
  inputError: {
    borderColor: "#0275d8",
    borderWidth: 3,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  inputIcon1: {
    position: "absolute",
    top: 8,
    left: 15,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  forgot: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    paddingTop: 20,
  },
  btnRegistrar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#005DA6",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 30,
  },
  btnRegistrarDisabled:{
    width: WIDTH - 250,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#CBCBCB",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 30,
  },
  btnCancelar: {
    width: WIDTH - 250,
    height: 45,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#E74C3C",
    justifyContent: "center",
    marginTop: 20,
  },
  inputIconDate: {
    position: "absolute",
    top: 15,
    left: 36,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  errorContainer: {
    marginBottom: -10,
    marginTop: 1,
  },
  errorContainer2: {
    marginBottom: -5,
    marginTop: -2,
  },
  TextError: {
    color: "#0275d8",
    textAlign: "center",
    alignItems: "center",
  },
  TextErrorValid: {
    textAlign: "center",
    alignItems: "center",
    opacity: 1,
    color: "white",
  },
  TextValid: {
    color: "green",
    textAlign: "center",
    alignItems: "center",
  },
  TextDefault: {
    textAlign: "center",
    alignItems: "center",
    color: "black",
  },
  TextDefault1: {
    textAlign: "center",
    alignItems: "center",
    color: "black",
  },
  btnFecha: {
    borderRadius: 10,
    fontSize: 18,
    marginVertical: 10,
    backgroundColor: "rgba(0,0,0,0.15)",
    color: "black",
    paddingLeft: 50,
    paddingVertical: 12,
    marginHorizontal: 25,
  },
  picker:{
    height: 45,
    width: 290,
    marginHorizontal: 25,
  },
  pickerInvalid:{
    height: 45,
    width: 290,
    marginHorizontal: 25,
    borderWidth: 3,
    borderColor: "#0275d8",
  }
});
