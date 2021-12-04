import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public nome!: string;
  public sobrenome!: string;
  public email!: string;
  public msg!: string;

  constructor() { }

  ngOnInit(): void{
  }

  onSubmit(form: NgForm){
      let dados = `
      Nome: ${form.value.nome} ${form.value.sobrenome}
      E-mail: ${form.value.email}
      Mensagem: ${form.value.msg}
      `;

      if(form.value.nome == "" || form.value.sobrenome == "" || form.value.email == "" || form.value.msg == ""){
        alert("Preencha os campos vazios!")
      } else{
        alert(`Mensagem enviada com sucesso!
Verifique no console do navegador`);
      console.log(dados);
      form.reset();
      }
      
  }
}
