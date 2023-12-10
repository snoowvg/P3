import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})


export class ListaProdutosComponent {

constructor(
  private router: Router){}

  onAdd(){
    this.router.navigate(['add']);
  }
}
