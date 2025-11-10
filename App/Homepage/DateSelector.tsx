// screens/DateSelector.tsx
import React from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

interface DateSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

// Gera um array de datas (hoje + 14 dias)
const generateDates = (): Date[] => {
  const today = new Date();
  return Array.from({ length: 15 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });
};

export default function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  const dates = generateDates();

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        keyExtractor={(item) => item.toDateString()}
        renderItem={({ item }) => {
          const isSelected = item.toDateString() === selectedDate.toDateString();
          return (
            <DateButton onPress={() => onDateChange(item)} selected={isSelected}>
              <DayText selected={isSelected}>
                {item.toLocaleString("en-US", { weekday: "short" })}
              </DayText>
              <DateText selected={isSelected}>{item.getDate()}</DateText>
            </DateButton>
          );
        }}
      />
    </Container>
  );
}

// 🌈 Estilos
const Container = styled.View`
  margin-top: 20px;
`;

const DateButton = styled(TouchableOpacity)<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? "#fff" : "transparent")};
  border-radius: 10px;
  padding: 10px 12px;
  margin-right: 10px;
  align-items: center;
`;

const DayText = styled(Text)<{ selected: boolean }>`
  font-size: 12px;
  color: ${({ selected }) => (selected ? "#4c55c4" : "#fff")};
`;

const DateText = styled(Text)<{ selected: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ selected }) => (selected ? "#4c55c4" : "#fff")};
  margin-top: 4px;
`;
