import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  standalone: false,

  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css'
})
export class CreateThoughtComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2'
  }

  criarPensamento() {
    alert('Novo pensamento criado')
  }

  cancelarPensamento() {
    alert("Pensamento cancelado")
  }

}
