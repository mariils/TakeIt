// screens/MedicineCard.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface MedicineCardProps {
  name: string;
  schedule: string;
  description: string;
  onEdit?: () => void;
  onRemove?: () => void;
}

export default function MedicineCard({ name, schedule, description, onEdit, onRemove }: MedicineCardProps) {
  return (
    <CardContainer>
      <Left>
        <MedicineName>{name}</MedicineName>
        <Description>{description}</Description>
      </Left>

      <Right>
        <Schedule>{schedule}</Schedule>
        <Actions>
          {onEdit && (
            <ActionButton onPress={onEdit}>
              <Feather name="edit-3" size={18} color="#4c55c4" />
            </ActionButton>
          )}
          {onRemove && (
            <ActionButton onPress={onRemove}>
              <Feather name="trash-2" size={18} color="#ff4d4d" />
            </ActionButton>
          )}
        </Actions>
      </Right>
    </CardContainer>
  );
}

// 🌈 Estilos
const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 10px;
  elevation: 3;
`;

const Left = styled.View`
  flex: 1;
`;

const MedicineName = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: #777;
`;

const Right = styled.View`
  align-items: flex-end;
`;

const Schedule = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #4c55c4;
  margin-bottom: 5px;
`;

const Actions = styled.View`
  flex-direction: row;
`;

const ActionButton = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 4px;
  border-radius: 6px;
`;
