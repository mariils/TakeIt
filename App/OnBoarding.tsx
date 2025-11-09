import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, RethinkSans_400Regular, RethinkSans_600SemiBold } from "@expo-google-fonts/rethink-sans";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation";
import pill from "./assets/pill.png";

type OnBoardingNavProp = NativeStackNavigationProp<RootStackParamList, "OnBoarding">;

export default function OnBoarding() {
  const navigation = useNavigation<OnBoardingNavProp>();

  const [fontsLoaded] = useFonts({
    RethinkSans_400Regular,
    RethinkSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

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