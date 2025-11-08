import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, RethinkSans_400Regular, RethinkSans_600SemiBold } from "@expo-google-fonts/rethink-sans";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
    return (
        <LinearGradient colors={['#313974', '#5B6BDA']}
        style={styles.background} >
 
</LinearGradient>
    );

}

const styles=StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
})