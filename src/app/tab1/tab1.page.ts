import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-example',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css'],
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar],
})
export class Tab1Page {
  async canDismiss(data?: undefined, role?: string) {
    return role !== 'gesture';
  }
}