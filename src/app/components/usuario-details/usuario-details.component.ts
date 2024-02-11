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

  @Input() viewMode = false; // Ah, como eu adoro um nome enigmático. Vamos deixar o código mais divertido!

  @Input() currentUsuario: Usuario = {
    nome: '',
    cargo: '',
    email:'',
    published: false
  };

  message = ''; // Prepare-se para as mensagens mais emocionantes da sua vida!
  mostrarDetalheUsuario: boolean = true; 

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) { 
      this.message = ''; // Ah, que surpresa, uma mensagem vazia!
      this.getUsuario(this.route.snapshot.params["id"]); // Pegar o usuário rapidamente? Mais rápido do que um piscar de olhos!
    }
  }

  closeUserDetails(): void { 
    this.mostrarDetalheUsuario = false; 
  }

  getUsuario(id: string): void { // E assim começa a caçada ao usuário perdido no universo  
    this.usuarioService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUsuario = data;  
          //console.log(data);  
        },
        error: (e) => console.error("Ops, algo deu errado!", e) // Oh, que inesperado, um erro! Quem poderia imaginar?
      });
  }

  updatePublished(status: boolean): void {  
    const data = {
      title: this.currentUsuario.nome,
      description: this.currentUsuario.cargo,
      published: status
    };

    this.message = ''; // As mensagens precisam de espaço para brilhar!

    this.usuarioService.update(this.currentUsuario.id, data)
      .subscribe({
        next: (res) => {
          //console.log(res);  
          this.currentUsuario.published = status;  
          this.message = res.message ? res.message : 'Ah, olhe só, alterado com sucesso!'; // Que surpresa, um sucesso! Mas será que alguém está prestando atenção?
        },
        error: (e) => console.error("Ops, algo deu errado!", e)  
      });
  }

  updateUsuario(): void {  
    this.message = ''; // Limpar as mensagens antigas, pq novas aventuras estão por vir!

    this.usuarioService.update(this.currentUsuario.id, this.currentUsuario)
      .subscribe({
        next: (res) => {
          //console.log(res);  
          this.message = res.message ? res.message : 'Este usuário foi alterado com sucesso!'; // Uma mensagem triunfante para as massas ignorantes!
        },
        error: (e) => console.error("Ops, algo deu errado!", e)  
      });
  }

  deleteUsuario(): void { // Adeus, usuário. Você está indo para um lugar melhor... ou talvez não.
    this.usuarioService.delete(this.currentUsuario.id)
      .subscribe({
        next: (res) => {
          //console.log(res); // Ah, a próxima parada é uma lista vazia! Que triste e emocionante ao mesmo tempo...
          this.router.navigate(['/usuario']); // Próxima parada: uma lista vaziaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
        },
        error: (e) => console.error("Ops, algo deu errado!", e)  
      });
  }

}
