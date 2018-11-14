import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  //INICIA O FORM
  formulario: FormGroup;

  id: number = -1;
  clientes;
  tabela;
  registros;
  
  constructor(private formBuilder: FormBuilder) {

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

  inserirRegistro() {
    if (this.id < 0) {
      this.clientes.push(this.formulario.value);
    } else {
      this.lerTabela();
      this.clientes[this.id] = this.formulario.value;
    }
    localStorage.setItem("tbClientes", JSON.stringify(this.clientes));
    this.resetarForm();
  }
  
  editarRegistro(indiceRegistro: number){
    this.formulario.patchValue({
      nome: this.clientes[indiceRegistro].nome;
      email: this.clientes[indiceRegistro].email;
    });
    this.id = indiceRegistro;
  }
  
  excluirRegistro(indiceRegistro: number){
    if (confirm('Deseja excluir o registro?')) {
      this.clientes.splice(indiceRegistro, 1);
      localStorage.setItem("tbClientes", JSON.stringify(this.clientes));
    }
  }

  resetarForm() {
    this.id = -1;
    this.formulario.reset();
  }

}
