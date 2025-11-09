import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { RootStackParamList } from "../Navigation";

type AuthScreenRouteProp = RouteProp<RootStackParamList, "AuthScreen">;

export default function AuthScreen() {
  const route = useRoute<AuthScreenRouteProp>();

 
  const [isLogin, setIsLogin] = useState(route.params?.mode !== "register");

  const showLogin = () => setIsLogin(true);
  const showRegister = () => setIsLogin(false);

  useEffect(() => {
    if (route.params?.mode === "register") setIsLogin(false);
    if (route.params?.mode === "login") setIsLogin(true);
  }, [route.params]);

  return (
    <View style={{ flex: 1 }}>
      {isLogin ? (
        <LoginForm onSwitchToRegister={showRegister} />
      ) : (
        <RegisterForm onSwitchToLogin={showLogin} />
      )}
    </View>
  );
}
