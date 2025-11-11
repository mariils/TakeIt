import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import MedicineCard from "./MedicineCard";
import DateSelector from "./DateSelector";
import { RootStackParamList, MedicineData } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HomepageNavProp = NativeStackNavigationProp<RootStackParamList, "Homepage">;
type HomepageRouteProp = RouteProp<RootStackParamList, "Homepage">;

export default function Homepage() {
  const navigation = useNavigation<HomepageNavProp>();
  const route = useRoute<HomepageRouteProp>();

  const [medicines, setMedicines] = useState<MedicineData[]>([
    {
      name: "Loratadina, 10mg",
      schedule: "9:00 AM",
      description: "one pill, once per day",
    },
    {
      name: "Paracetamol, 500mg",
      schedule: "12:00 PM",
      description: "one pill, once per day",
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Adiciona nova medicação se houver parâmetro
  useEffect(() => {
    const newMed = route.params?.newMedicine;
    if (newMed) {
      setMedicines((prev) => [...prev, newMed]);
    }
  }, [route.params?.newMedicine]);

  return (
    <Container>
      <Header>
        <Greeting>Hello, User!</Greeting>
        <SubText>
          {selectedDate.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </SubText>

        <DateSelector
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </Header>

      <Body>
        <SectionTitle>Today</SectionTitle>
        <ScrollView showsVerticalScrollIndicator={false}>
          {medicines
            .filter((med) => true) // futuramente podemos filtrar por selectedDate
            .map((med, index) => (
              <MedicineCard
                key={index}
                name={med.name}
                schedule={med.schedule}
                description={med.description}
              />
            ))}
        </ScrollView>
      </Body>

      <BottomBar>
        <NavButton>
          <Feather name="home" size={22} color="#555" />
        </NavButton>
        <AddButton onPress={() => navigation.navigate("AddPills")}>
          <Feather name="plus" size={28} color="#fff" />
        </AddButton>
        <NavButton>
          <Feather name="user" size={22} color="#555" />
        </NavButton>
      </BottomBar>
    </Container>
  );
}


const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #f8f8f8;
`;

const Header = styled.View`
  background-color: #5b6bda;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 40px 20px 30px;
`;

const Greeting = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: 700;
`;

const SubText = styled.Text`
  font-size: 16px;
  color: #dce1ff;
  margin-top: 5px;
`;

const Body = styled.View`
  flex: 1;
  padding: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
`;

const BottomBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 25px;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const NavButton = styled.TouchableOpacity``;

const AddButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #4c55c4;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: -25px;
`;
