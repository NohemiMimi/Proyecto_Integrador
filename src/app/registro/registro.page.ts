import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonItem, 
  IonLabel, IonButton, IonInput, IonButtons 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    RouterModule, IonButtons, IonInput, IonButton, IonLabel, 
    IonItem, IonCardContent, IonCardTitle, IonCardHeader, 
    IonCard, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule
  ]
})
export class RegistroPage implements OnInit {
  usuario: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  cambiar() {
    if (this.usuario.trim() !== '' && this.contrasena.trim() !== '') {
      this.navCtrl.navigateForward('login');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
