import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity, StyleSheet,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, RethinkSans_400Regular, RethinkSans_600SemiBold } from "@expo-google-fonts/rethink-sans";

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

export default function LoginForm({ onSwitchToRegister }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [fontsLoaded] = useFonts({
    RethinkSans_400Regular,
    RethinkSans_600SemiBold,
  });

  return (
    <LinearGradient
      colors={["#5B6BDA", "#364ED1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientBackground}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        {/* Toggle Login / Register */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.toggleButton, styles.activeButton]}>
            <Text style={[styles.toggleText, styles.activeText]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={onSwitchToRegister}
          >
            <Text style={styles.toggleText}>Register</Text>
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#5B6BDA"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={20}
            color="#5B6BDA"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#5B6BDA", "#364ED1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Divider and Google Button */}
        <Text style={styles.orText}>Or continue with</Text>
        <TouchableOpacity style={styles.googleButton}>
          <MaterialCommunityIcons name="google" size={28} color="#5B6BDA" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "85%",
    paddingVertical: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 25,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#E6E7F9",
    borderRadius: 30,
    padding: 4,
    marginBottom: 30,
    width: "80%",
  },
  toggleButton: {
    flex: 1,
    borderRadius: 30,
    alignItems: "center",
    paddingVertical: 8,
  },
  activeButton: {
    backgroundColor: "#5B6BDA",
  },
  toggleText: {
    fontSize: 14,
    color: "#777",
    fontWeight: "500",
  },
  activeText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F2FB",
    borderRadius: 15,
    paddingHorizontal: 15,
    width: "80%",
    marginBottom: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 14,
  },
  button: {
    width: "80%",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
  },
  gradient: {
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  orText: {
    marginVertical: 25,
    color: "#555",
  },
  googleButton: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
