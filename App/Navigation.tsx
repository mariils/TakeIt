import React from "react";
// Importa os componentes de navegação do React Navigation
import { NavigationContainer } from "@react-navigation/native";
// É o "container" principal que gerencia todo o estado da navegação
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Cria uma "pilha" de telas (Stack Navigator), onde cada nova tela
// é empilhada sobre a anterior (como uma pilha de cartas)

// Importa as telas do aplicativo
import OnBoarding from "./OnBoarding"; // Tela inicial (apresentação)
import AuthScreen from "./screens/AuthScreen"; // Tela de login e registro
import Homepage from "./Homepage/Homepage"; // Tela principal (lista de remédios)
import AddPills from "./Homepage/AddPills"; // Tela para adicionar novos remédios

export type RootStackParamList = {
   // Define os nomes e parâmetros esperados em cada tela
  OnBoarding: undefined; // Tela sem parâmetros
  AuthScreen: { mode: "login" | "register" }; // Recebe o modo: login ou registro
  Homepage: { newMedicine?: MedicineData } | undefined; // Pode receber um novo remédio (opcional)
  AddPills: undefined;  // Tela sem parâmetros
};

// Interface com o formato dos dados de um remédio
export interface MedicineData {  // Nome do remédio
  name: string; // Nome do remédio
  schedule: string; // Horário ou frequência
  description: string; // Descrição ou observações
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
