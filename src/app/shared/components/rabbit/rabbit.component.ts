
import { Component  } from '@angular/core';


//Actions

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.scss']
})

export class RabbitComponent {

  public text!: String;



  constructor(

    )
  {
      // this.notificationsState$ = store.select('notificationsState');
  }

  ngOnInit(): void {
    // this.notificationsState$.subscribe(notificationsS => {
    //   this.isOpenNotifications = notificationsS.isOpenNotifications;

    // });
  }
  toggle() {
    // this.store.dispatch(toggle());
  }
}



