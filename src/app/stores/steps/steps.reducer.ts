import { Step } from '../../../models/Step';

import { createReducer, on } from '@ngrx/store';

import { setStep } from './steps.actions';


export const initialState: StepsState = {
  previousStep: "",
  currentStep: new Step("0", "Come vuoi giocare?","start", true),
  stepList : [
    {
      id: "0",
      title: "Come vuoi giocare?",
      backRoute: "start",
      isActive: true,
    },
    {
      id: "A",
      title: "Che zona vuoi stimolare?",
      backRoute: "0",
      isActive: false,
    },
    {
      id: "B",
      title: "Che zona vuoi stimolare?",
      backRoute: "0",
      isActive: false,
    },
    {
      id: "AA",
      backRoute: "A",
      title: "Con penetrazione o senza penetrazione?",
      isActive: false,
    },
    {
      id: "AB",
      backRoute: "A",
      title: "Un solo utilizzo o riutilizabile?",
      isActive: false,
    },
    {
      id: "AC",
      backRoute: "A",
      title: "Con vibrazione o senza vibrazione?",
      isActive: false,
    },
    {
      id: "BA",
      backRoute: "A",
      title: "Che stimolazione vuoi?",
      isActive: false,
    },
    {
      id: "BB",
      backRoute: "A",
      title: "Che stimolazione cerchi?",
      isActive: false,
    },
    {
      id: "BC",
      backRoute: "A",
      title: "Per l'ano o per il pene?",
      isActive: false,
    },
  ],
};
export interface StepsState {
  previousStep: string,
  currentStep: Step;
  stepList: Step[];
}
export const StepsReducer = createReducer(
  initialState,
  on(setStep, (state, {previousStep, currentStep, stepList }) => ({
    ...state,
    previousStep,
    currentStep,
    stepList,
  }))
);
