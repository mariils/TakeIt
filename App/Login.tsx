import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, RethinkSans_400Regular, RethinkSans_600SemiBold } from "@expo-google-fonts/rethink-sans";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    return (
 <Text style={styles.signinText}>
          Already have an account? <Text style={styles.signinLink}>Sign in</Text>
        </Text>

    );

}

const styles=StyleSheet.create({
    signinText: {

    },
    signinLink: {

    }
})