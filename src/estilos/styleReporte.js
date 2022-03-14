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
  inputContainer: {
    marginTop: 180,
    marginBottom: 10,
  },
  txtBtn: {
    width: WIDTH - 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#005DA6",
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
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 55,
    backgroundColor: "rgba(0,0,0,0.20)",
    color: "black",
    marginHorizontal: 25,
  },
  
});
