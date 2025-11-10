import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "./OnBoarding";
import AuthScreen from "./screens/AuthScreen";
import Homepage from "./Homepage/Homepage";
import AddPills from "./Homepage/AddPills";

export type RootStackParamList = {
  OnBoarding: undefined;
  AuthScreen: { mode: "login" | "register" };
  Homepage: { newMedicine?: MedicineData } | undefined;
  AddPills: undefined;
};

export interface MedicineData {
  name: string;
  schedule: string;
  description: string;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="AddPills" component={AddPills} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
