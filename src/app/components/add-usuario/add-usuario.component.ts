import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
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
    email:'',
    published: false
  };
  submitted = false;
  formBuilder: any;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = this.formBuilder.group({
      nome: ['', Validators.required],
      cargo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20)]],
    });
   }

  saveUsuario(): void {
    const data = {
      nome: this.usuario.nome,
      cargo: this.usuario.cargo,
      email: this.usuario.email
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
      email:'',
      published: false
    };
  }

}
