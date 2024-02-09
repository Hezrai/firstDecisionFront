import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent {

  usuario: Usuario = {
    nome: '',
    cargo: '',
    published: false
  };
  submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  saveUsuario(): void {
    const data = {
      nome: this.usuario.nome,
      cargo: this.usuario.cargo
    };

    this.usuarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = {
      nome: '',
      cargo: '',
      published: false
    };
  }

}
