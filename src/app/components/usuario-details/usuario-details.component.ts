import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css']
})
export class UsuarioDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentUsuario: Usuario = {
    nome: '',
    cargo: '',
    published: false
  };

  message = '';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUsuario(this.route.snapshot.params["id"]);
    }
  }

  getUsuario(id: string): void {
    this.usuarioService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUsuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentUsuario.nome,
      description: this.currentUsuario.cargo,
      published: status
    };

    this.message = '';

    this.usuarioService.update(this.currentUsuario.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentUsuario.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateUsuario(): void {
    this.message = '';

    this.usuarioService.update(this.currentUsuario.id, this.currentUsuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This usuario was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteUsuario(): void {
    this.usuarioService.delete(this.currentUsuario.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/usuario']);
        },
        error: (e) => console.error(e)
      });
  }

}
