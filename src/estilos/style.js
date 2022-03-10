import { Dimensions, StyleSheet } from "react-native";

const { width: WIDTH } = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logoLogin: {
    height: 150,
    width: 375,
  },
  TituloLogin: {
    color: "black",
    fontSize: 22,
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 55,
    backgroundColor: "rgba(0,0,0,0.20)",
    color: "black",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 6,
    left: 35,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 35,
  },
  forgot: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#0275d8",
    justifyContent: "center",
    marginTop: 30,
  },
  btnLoginDisabled: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#CBCBCB",
    justifyContent: "center",
    marginTop: 30,
  },
  btnRegistro: {
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 8,
    backgroundColor: "#0275d8",
    justifyContent: "center",
  },
  buttontext: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  texto: {
    paddingTop: 1,
    color: "black",
    fontSize: 15,
    color: "black",
  },
  textoSuperior: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    color: "black",
  },
  container: {
    flex: 1,
    marginVertical: 10,
  },
  containerRow: {
    //flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
    //marginHorizontal: 15,
    //marginVertical: 1,
  },
  containerRow2: {
    flex: 0.02,
    padding: 0,
    marginHorizontal: 15,
    marginVertical: 1,
  },
  containerColumn1: {
    flex: 0.5,
    alignItems: "center",
    //justifyContent: "space-between",
  },
  containerColumn2: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "space-between",
  },
  containerColumn3: {
    flex: 0.5,
    alignItems: "flex-end",
    //justifyContent: "flex-end",
  },
  containerColumn4: {
    flex: 1,
    alignItems: "center",
    marginTop: 5,
    paddingVertical: 7,
    borderBottomWidth: 1,
  },
  containerColumn5: {
    flex: 1,
    alignItems: "center",
    marginTop: 5,
    marginHorizontal:10,
  },
  modalView: {
    marginHorizontal: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
  textModal:{
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 18,
  }
});
