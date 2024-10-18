import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  // Variables
  tiempoInicial: number = 0;
  tiempoRestante: number = 0;
  intervaloId: any;

  //Metodo para iniciar el temporizador
  iniciarTemporizador(){
    // Detener cualquier temporizador que se esté ejecutando
    this.detenerTemporizador();
    // Asigna el tiempo inicial al tiempo restante
    this.tiempoRestante = this.tiempoInicial;
    // Usa setInterval para decrementar el tiempo restante cada segundo
    this.intervaloId = setInterval(() => {
      if (this.tiempoRestante > 0) {
        // Decrementa el tiempo restante
        this.tiempoRestante--;
      }else {
        // Si el tiempo restante es 0, detiene el temporizador
        this.detenerTemporizador();
      }
    }, 1000);
  }

  // Metodo para detener el temporizador
  detenerTemporizador(){
    // Detiene el temporizador
    clearInterval(this.intervaloId);
    // Establece intervalId a null para indicar que no hay temporizador en ejecución
    this.intervaloId = null;
  }


}
