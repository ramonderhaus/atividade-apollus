import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Http } from '@angular/http';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  //INICIA O FORM
  formulario: FormGroup;

  clientes = new Array();
  tabela;
  txt;
  registros;
  idRegistro = -1;
  
  constructor(
    private formBuilder: FormBuilder,
    private http: Http) {

    //DEFINE OS CAMPOS
    this.formulario = this.formBuilder.group({

      //NOME CAMPO: [VALUE, VALIDATOR]
      nome: [null, [Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]]
      
    });

    this.lerTabela();

  }

  ngOnInit() {
  }

  lerTabela() {    
    this.tabela = localStorage.getItem("tbClientes");
    this.clientes = JSON.parse(this.tabela);
    
    if (this.clientes == null) {
      this.clientes = new Array();
    }

  }
  
  excluirRegistro(indiceRegistro: number){
    if (confirm('Deseja excluir o registro?')) {
      this.clientes.splice(indiceRegistro, 1);
      localStorage.setItem("tbClientes", JSON.stringify(this.clientes));
    }
  }

  onSubmit() {
    this.clientes.push(this.formulario.value);
    localStorage.setItem("tbClientes", JSON.stringify(this.clientes));
    this.resetar();
  }

  resetar() {
    this.formulario.reset();
  }

}
