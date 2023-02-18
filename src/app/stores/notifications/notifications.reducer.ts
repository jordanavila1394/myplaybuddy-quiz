
import { createReducer, on } from '@ngrx/store';
import { toggle, close } from './notifications.actions';

export const initialState: NotificationsState = {
  isOpenNotifications: true,
};

export interface NotificationsState {
  isOpenNotifications: boolean;
}

export const NotificationsReducer = createReducer(
  initialState,
  on(toggle, (state) => ({
    ...state,
    isOpenNotifications: !state.isOpenNotifications,
  })),
  on(close, (state) => ({
    ...state,
    isOpenNotifications: false,
  }))
);
