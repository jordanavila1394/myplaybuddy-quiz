import { NotificationsState } from './../app/stores/notifications/notifications.reducer';

export class RootState {
  private notificationsState: NotificationsState;
  constructor (notificationsState: NotificationsState) {
    this.notificationsState = notificationsState;
  }

}
