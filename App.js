import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/screens/navigation/StackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/screens/reducer/store";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store = { store }>
        <StackNavigator></StackNavigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
