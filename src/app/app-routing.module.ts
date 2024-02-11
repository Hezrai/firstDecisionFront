import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { BoasVindasComponent } from './components/inicio/boas-vindas-component'; // Importe o componente BoasVindasComponent corretamente

const routes: Routes = [
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },  
  { path: 'usuarios', component: UsuarioListComponent },
  { path: 'usuarios/:id', component: UsuarioDetailsComponent },
  { path: 'add', component: AddUsuarioComponent },
  { path: 'boas-vindas', component: BoasVindasComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
