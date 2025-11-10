export interface MedicineData {
  name: string;
  schedule: string;
  description: string;
}

export type RootStackParamList = {
  OnBoarding: undefined;
  AuthScreen: { mode: "login" | "register" };
  Homepage: { newMedicine?: MedicineData } | undefined; 
  AddPills: undefined; 
};