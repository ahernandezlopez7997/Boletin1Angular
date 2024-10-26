import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

  comentario: string = '';
  comentarios: string[] = [];

  @Output() comentarioEnviado = new EventEmitter<string>();

  enviarComentario() {
    if (this.comentario.trim()){
      this.comentarios.push(this.comentario);
      this.comentarioEnviado.emit(this.comentario);
      this.comentario = '';
    }
  }

}
