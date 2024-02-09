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
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  saveUsuario(): void {
    const data = {
      title: this.usuario.title,
      description: this.usuario.description
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
      title: '',
      description: '',
      published: false
    };
  }

}
