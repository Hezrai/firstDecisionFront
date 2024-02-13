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
    email: '',
    senha: '',
    published: false
  };
  confirmSenha = '';
  submitted = false;
  showAlert = false;
  showAlertCadastro = false;

  constructor(private usuarioService: UsuarioService) {
    this.usuario.senha = ''; // Garantindo que essa senha fique limpa
  }
  isEmailValid(): boolean {
    if (!this.usuario.email) {
        return true; //validar apenas se tiver algo pra validar
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(this.usuario.email);
}
  saveUsuario(): void {
    this.showAlertCadastro = false;
    // Verifica se todos os campos estão preenchidos
    if (this.usuario.nome && this.usuario.cargo && this.usuario.email && this.usuario.senha && this.confirmSenha) {
      // Verifica se as senhas coincidem
     
      if (this.usuario.senha === this.confirmSenha) {
        const data = {
          nome: this.usuario.nome,
          cargo: this.usuario.cargo,
          email: this.usuario.email,
          senha: this.usuario.senha
        };

        this.usuarioService.create(data)
          .subscribe({
            next: (res) => {
              this.submitted = true;
            },
            error: (e) => console.error(e)
          });
      } else {
        this.showAlert = true; // Exibe a mensagem de alerta se as senhas não coincidirem
      }
    } else {
      this.showAlertCadastro = true; // Exibe a mensagem de alerta se algum campo estiver vazio
    }
  }

 // Oh, claro! Eu poderia ter optado por uma abordagem mais elegante, mas, sabe, às vezes é melhor complicar 
 // um pouco as coisas para que eu possa "brilhantemente" explicar os conceitos mais básicos. 

  isFormValid(): boolean {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!this.usuario.nome || !this.usuario.cargo || !this.usuario.email || !this.usuario.senha || !this.confirmSenha) {
      return false;
    }
  
    // Verifica se o email é válido
    if (!this.isEmailValid()) {
      return false;
    }
  
    // Verifica se a senha tem o comprimento correto
    if (this.usuario.senha.length < 6 || this.usuario.senha.length > 20) {
      return false;
    }
  
    // Verifica se as senhas coincidem
    if (this.usuario.senha !== this.confirmSenha) {
      return false;
    }
  
    // Retorna true se todos os critérios forem atendidos
    return true;
  }
  

  newUsuario() {
    this.usuario = {
      nome: '',
      cargo: '',
      email: '',
      senha: ''
    };
    this.confirmSenha = '';
    this.submitted = false;
  }

}
