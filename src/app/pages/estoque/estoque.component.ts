import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque';
import { EstoqueService } from './estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
  preserveWhitespaces: true
})
export class EstoqueComponent implements OnInit {

  estoque: Estoque[] | any;

  constructor(private service: EstoqueService) { }

  ngOnInit() {

    this.service.list()
    .subscribe(dados => this.estoque = dados);
  }

}
