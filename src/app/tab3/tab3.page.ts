import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UsersService } from '../services/users.service';
import { concatMapTo } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page {
  constructor(private userService:UsersService) {}
  ngOnInit(){
    this.userService.getUsers().subscribe((res:any)=>{
      console.log(res)
    })
  }
}
