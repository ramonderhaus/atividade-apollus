import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  status: number;
  codigo: number;
  descricao: string;
}
  
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {

  //INICIA O FORM
  formulario: FormGroup;

  id: number = -1;
  tabela;
  listagem;
  registros;
  dataSource;

  displayedColumns: string[] = ['status', 'codigo', 'descricao', 'acoes'];
  
  constructor(private formBuilder: FormBuilder) {
    
    this.formulario = this.formBuilder.group({
      status: [null],
      codigo: [null],
      descricao: [null]      
    });

    this.atualizaTabela();
  
  }

  ngOnInit() {
  }

  atualizaTabela() {    
    this.tabela = localStorage.getItem("tbCatalogos");
    this.listagem = JSON.parse(this.tabela);
    
    if (this.listagem == null) {
      this.listagem = new Array();
    }

    this.dataSource = this.listagem;

  }

  inserirRegistro() {
    
    if (this.formulario.valid) {
      if (this.id < 0) {
        this.listagem.push(this.formulario.value);
      } else {
        this.listagem[this.id] = this.formulario.value;
      }
      localStorage.setItem("tbCatalogos", JSON.stringify(this.listagem));
      this.atualizaTabela();
      this.resetarForm();
    }
  }
  
  editarRegistro(indiceRegistro: number){
    let item = this.listagem[indiceRegistro];
    this.formulario.patchValue(item);
    this.id = indiceRegistro;
  }
  
  excluirRegistro(indiceRegistro: number){
    if (confirm('Deseja excluir o registro?')) {
      this.listagem.splice(indiceRegistro, 1);
      localStorage.setItem("tbCatalogos", JSON.stringify(this.listagem));
      this.atualizaTabela();
    }
  }

  resetarForm() {
    this.id = -1;
    this.formulario.reset();
  }
}