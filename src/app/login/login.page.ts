import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent,
  IonButton, 
  IonCard, 
  IonInput, 
  IonItem, IonHeader, IonToolbar, IonTitle, IonLabel, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonItem, 
    IonInput, 
    IonCard, 
    IonButton, 
    IonContent, 
    CommonModule, 
    FormsModule, CommonModule,IonHeader,IonToolbar,IonTitle]
})
export class LoginPage implements OnInit {
  credenciales={
    usuario: 'Pablito',
    password: "Pablo123"
  }
  usuarioCredes={
    usuario:'',
    password: ''
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
  mostrar(){
    /* console.log(this.usuarioCredes) */
    if(this.usuarioCredes.usuario==this.credenciales.usuario && this.usuarioCredes.password==this.credenciales.password){
      this.router.navigate(['tabs/tab3'])
    }else{
      alert('Tus credenciales estan mal')
    }
      
  }

}