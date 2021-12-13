import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estoque } from './estoque';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  // Alterar Requisição manualmente ao hospedar
  private readonly API = 'https://localhost:3001/estoque';

  constructor(private http: HttpClient) { }

  // Método de busca dos dados
  list(){
    return this.http.get<Estoque[]>(this.API)
    .pipe(
      tap(console.log)
    )
  }
}
