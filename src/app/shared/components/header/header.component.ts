import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { NotificationsState } from '../../../stores/notifications/notifications.reducer';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';


//Actions
import { toggle } from '../../../stores/notifications/notifications.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bgColor: string | undefined;
  notificationsState$: Observable<NotificationsState>;
  storeUrl = "";

  constructor(
    private router: Router,
    private store: Store<{ notificationsState: NotificationsState }>
    )
  {
      this.notificationsState$ = store.select('notificationsState');
  }

  ngOnInit(): void {
    this.storeUrl= environment.storeUrl;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this.changeHeaderTheme(event.url);
      }
    });

  }

  toggle() {
    this.store.dispatch(toggle());
  }
}
