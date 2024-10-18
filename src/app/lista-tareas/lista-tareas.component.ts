import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  // crear una lista de tareas mediante un array de objetos
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  // metodo para agregar una nueva tarea
  agregarTarea(){
    // si el campo de texto no está vacío
    if(this.nuevaTarea.trim()){
      // agregar la nueva tarea a la lista de tareas
      this.listaTareas.push(this.nuevaTarea.trim());
      // limpiar el campo de texto
      this.nuevaTarea = '';
    }
  }

  /**
   * .trim() se utiliza para eliminar los espacios en blanco al principio
   * y al final de una cadena de texto. Es útil para evitar que el usuario
   * introduzca tareas vacías.
   */

}
