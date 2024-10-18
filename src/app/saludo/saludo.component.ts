import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  //Input para recibir el nombre
  @Input() nombre: string = '';

  //Variable para almacenar el saludo personalizado del metodo de abajo
  saludo: string = '';

  constructor() {
    this.generarSaludo();
  }

  generarSaludo() {
    const hora = new Date().getHours();
    if (hora < 12) {
      this.saludo = 'Buenos días';
    } else if (hora < 20) {
      this.saludo = 'Buenas tardes';
    } else {
      this.saludo = 'Buenas noches';
    }
  }
}
