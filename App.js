import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Screen_01, Screen_02, Screen_03 } from "./screen/Ex_01";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Screen_AddBike from "./screen/Ex_01/Screen_AddBike";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const screens = [
  { name: "Screen_01", component: Screen_01 },
  { name: "Screen_02", component: Screen_02 },
  { name: "Screen_03", component: Screen_03 },
  { name: "Screen_AddBike", component: Screen_AddBike },
];

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          {screens.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
