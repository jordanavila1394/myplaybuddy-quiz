
import { createReducer, on } from '@ngrx/store';
import { setProductsList } from './result.actions';

export const initialState: ResultState = {
  productsList: [],
};

export interface ResultState {
  productsList: any;
}

export const ResultReducer = createReducer(
  initialState,
  on(setProductsList, (state, { productsList }) => ({
    ...state,
    productsList,
  })),
);
