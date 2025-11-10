import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Switch } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, MedicineData } from "../Navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type AddPillsNav = NativeStackNavigationProp<RootStackParamList, "AddPills">;

export default function AddPills() {
  const navigation = useNavigation<AddPillsNav>();
  const [pillName, setPillName] = useState("");
  const [amount, setAmount] = useState(1);
  const [repeat, setRepeat] = useState(true);

  function handleAdd() {
    const newMedicine: MedicineData = {
      name: pillName || "Unnamed Pill",
      schedule: "09:00 AM",
      description: `${amount} pill${amount > 1 ? "s" : ""}, once per day`,
    };

    // Navega de volta para Homepage enviando a nova medicação
    navigation.navigate("Homepage", { newMedicine });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={22} color="#000" />
        </BackButton>
        <Title>Add Pills</Title>
      </Header>

      <Content>
        <Label>Pill Name</Label>
        <Input
          placeholder="Loratadina, 10 mg"
          value={pillName}
          onChangeText={setPillName}
        />

        <Label>Amount</Label>
        <SubText>How many pills do you need to take at once?</SubText>

        <AmountBox>
          <TouchableOpacity onPress={() => setAmount(Math.max(1, amount - 1))}>
            <Feather name="minus-circle" size={28} color="#5B6BDA" />
          </TouchableOpacity>

          <AmountText>
            {amount} pill{amount > 1 ? "s" : ""}
          </AmountText>

          <TouchableOpacity onPress={() => setAmount(amount + 1)}>
            <Feather name="plus-circle" size={28} color="#5B6BDA" />
          </TouchableOpacity>
        </AmountBox>

        <TimeBox>
          <Feather name="clock" size={20} color="#5B6BDA" />
          <TimeText>09:00 AM</TimeText>
        </TimeBox>

        <RepeatBox>
          <Switch value={repeat} onValueChange={setRepeat} />
          <RepeatText>Não repetir</RepeatText>
        </RepeatBox>

        <AddButton onPress={handleAdd}>
          <AddButtonText>Adicionar</AddButtonText>
        </AddButton>
      </Content>
    </Container>
  );
}

// 🌈 Estilos (mantidos)
const Container = styled.View`
  flex: 1;
  background-color: #5b6bda;
  padding-top: 60px;
  align-items: center;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 85%;
  margin-bottom: 20px;
`;

const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;

const Content = styled.View`
  background-color: #fff;
  width: 85%;
  border-radius: 25px;
  padding: 25px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const SubText = styled.Text`
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  background-color: #e6e7f9;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

const AmountBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const AmountText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const TimeBox = styled.View`
  background-color: #f6f6ff;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TimeText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-left: 8px;
`;

const RepeatBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

const RepeatText = styled.Text`
  margin-left: 10px;
  color: #555;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #5b6bda;
  border-radius: 15px;
  padding: 15px;
  align-items: center;
`;

const AddButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
