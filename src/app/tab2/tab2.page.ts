import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonDatetimeButton, IonModal, IonDatetime, IonGrid, 
  IonRow, IonCol 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // 👈 Importa CommonModule

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    CommonModule, // 👈 Agregar esto para que funcione *ngFor y [ngClass]
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonDatetimeButton,
    IonModal,
    IonDatetime,
    IonGrid,
    IonRow,
    IonCol,
  ]
})
export class Tab2Page {
  dias = [
    { nombre: 'L', seleccionado: false },
    { nombre: 'M', seleccionado: false },
    { nombre: 'M', seleccionado: false },
    { nombre: 'J', seleccionado: false },
    { nombre: 'V', seleccionado: false },
    { nombre: 'S', seleccionado: false },
    { nombre: 'D', seleccionado: false }
  ];

  constructor() {}

  toggleDia(index: number) {
    this.dias[index].seleccionado = !this.dias[index].seleccionado;
  }

  guardarSeleccion() {
    const diasSeleccionados = this.dias.filter(dia => dia.seleccionado).map(dia => dia.nombre);
    console.log("Días seleccionados:", diasSeleccionados);
  }
}
