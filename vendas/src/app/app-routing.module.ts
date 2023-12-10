import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { AddprodutoComponent } from './addproduto/addproduto.component';

const routes: Routes = [
  { path: '', component: ListaProdutosComponent },
  { path: 'add', component: AddprodutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
