import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuario?: Usuario[];
  currentUsuario: Usuario = {};
  currentIndex = -1;
  title = '';

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUsuario();
  }

  retrieveUsuario(): void {
    this.usuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveUsuario();
    this.currentUsuario = {};
    this.currentIndex = -1;
  }

  setActiveUsuario(usuario: Usuario, index: number): void {
    this.currentUsuario = usuario;
    this.currentIndex = index;
  }

  removeAllUsuario(): void {
    this.usuarioService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentUsuario = {};
    this.currentIndex = -1;

    this.usuarioService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.usuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
