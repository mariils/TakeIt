// Importa as dependências necessárias
import React from "react"; // Biblioteca principal do React
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native"; // Componentes nativos do React Native
import { LinearGradient } from "expo-linear-gradient"; // Permite criar gradientes de cor nos botões
import { useFonts, RethinkSans_400Regular, RethinkSans_600SemiBold } from "@expo-google-fonts/rethink-sans"; // Importa e usa fontes personalizadas
import { useNavigation } from "@react-navigation/native"; // Hook para navegar entre telas
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // Tipagem para navegação Stack
import { RootStackParamList } from "./Navigation"; // Tipagem das rotas definidas no arquivo Navigation
import pill from "./assets/pill.png"; // Imagem usada como fundo da tela

// Define o tipo de navegação para esta tela
type OnBoardingNavProp = NativeStackNavigationProp<RootStackParamList, "OnBoarding">;

export default function OnBoarding() {
  const navigation = useNavigation<OnBoardingNavProp>();  // Hook que dá acesso à navegação tipada

  // Carrega as fontes personalizadas
  const [fontsLoaded] = useFonts({
    RethinkSans_400Regular,
    RethinkSans_600SemiBold,
  });

  // Enquanto as fontes não carregam, retorna nada (evita erro de renderização)
  if (!fontsLoaded) {
    return null;
  }

 // Retorno visual da tela (UI)
  return (
    <ImageBackground source={pill} resizeMode="cover" style={styles.background}>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Your digital healthcare assistance</Text>
        <Text style={styles.subtitle}>Always taking care of you and reminding</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AuthScreen", { mode: "register" })}
        >
          <LinearGradient
            colors={["#5B6BDA", "#5B6BDA"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.signinText}>
          Already have an account?{" "}
          <Text
            style={styles.signinLink}
          onPress={() => navigation.navigate("AuthScreen", { mode: "login" })}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

     const styles = StyleSheet.create({
       background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        },

         container: {
        flex: 1,
        opacity: 0.2,
        },  
        bottomContainer: {
          position: "absolute",
          bottom: 0,
          width:"100%",
          height:"40%",
          backgroundColor:"#f8f8f8e1",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          alignItems: "center",

        },

        title: {
          fontSize: 25,
          fontWeight: "600",
          color: "#4E5586",
          textAlign: "center",
          marginTop: 40,
          marginBottom: 2,
          fontFamily: "RethinkSans_600SemiBold",
        },

        subtitle: {
          fontSize: 14,
          color:"#6061BC",
          textAlign:"center",
          marginBottom: 10,
          fontFamily:"RethinkSans_400Regular",
        },

        button: {
        width: "80%",
        borderRadius: 30,
        overflow: "hidden",
        marginBottom: 15,
        marginTop:12,
       
        },

        buttonGradient: {
          paddingVertical: 12,
          borderRadius: 30,
          alignItems: "center",
        },

        buttonText: {
          color: "#f8f8f8",
          fontWeight: "600",
          fontSize: 16,
          alignItems:"center",
          fontFamily:"RethinkSans_600SemiBold",
        },

        signinText: {
          color: "#6061BC",
          fontWeight:"300",
          fontSize:12,
          fontFamily:"RethinkSans_400Regular",

        },

        signinLink: {
          color:"#131B5E",
          fontWeight:"500",
          fontFamily:"RethinkSans_400Regular",
        },
 });