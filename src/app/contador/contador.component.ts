import {Component, OnInit, OnDestroy} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit, OnDestroy{

  horaActual: Date = new Date(); //Variable para almacenar la hora actual
  private intervalo: any; //Variable para almacenar el tiempo cuando lo pares

  //Inicia el reloj cuando el componente se inicializa
  ngOnInit() {
    this.iniciarContador();
  }

  //Metodo para iniciar el contador
  iniciarContador() {
    this.intervalo = setInterval(() => {
      //Actualiza la hora actual cada segundo
      this.horaActual = new Date();
    }, 1000);
  }

  //Metodo para detener el contador
  detenerContador() {
    if(this.intervalo){

      clearInterval(this.intervalo);
    }
  }

  // Detiene el reloj cuando el componente se destruye
  ngOnDestroy() {
    this.detenerContador();
  }

}
