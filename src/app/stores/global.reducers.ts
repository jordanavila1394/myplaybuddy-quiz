import { StepsReducer } from './steps/steps.reducer';
import { ResultReducer} from './result/result.reducer';

// import { RouterReducer } from  './router/router.reducer';


import { MetaReducer } from "@ngrx/store";
import { HydrationMetaReducer } from "./hydratation/hydratation.reducer";


export const reducers= {
  stepsState: StepsReducer,
  resultState: ResultReducer,
};
export const metaReducers: MetaReducer[] = [HydrationMetaReducer];


