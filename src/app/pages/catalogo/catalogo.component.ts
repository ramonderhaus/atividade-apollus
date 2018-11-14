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
  formularioItensCatalogo: FormGroup;

  id: number = -1;
  id_item: number = -1;
  tabela;
  listagem;
  registros;
  dataSource;
  catalogo: boolean = true;

  displayedColumns: string[] = ['status', 'codigo', 'descricao', 'acoes'];
  
  constructor(private formBuilder: FormBuilder) {
    
    this.formulario = this.formBuilder.group({
      status: [null],
      codigo: [null],
      descricao: [null],
      itens: this.formBuilder.group({
        itensStatus: [null],
        itensCodigo: [null],
        itensDescricao: [null]
      }),
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
  
  excluirRegistro(indiceRegistro: number){
    if (confirm('Deseja excluir o registro?')) {
      this.listagem.splice(indiceRegistro, 1);
      localStorage.setItem("tbCatalogos", JSON.stringify(this.listagem));
      this.atualizaTabela();
    }
  }

  /********** FUNÇÕES TABELA CATÁLOGO **********/
  inserirRegistro() {
    if (this.id < 0) {
      this.listagem.push(this.formulario.value);
    } else {
      this.listagem[this.id] = this.formulario.value;
    }
    localStorage.setItem("tbCatalogos", JSON.stringify(this.listagem));
    this.atualizaTabela();
    this.resetarForm();
  }
  
  editarRegistro(indiceRegistro: number){
    this.catalogo = !this.catalogo;
    let item = this.listagem[indiceRegistro];
    this.formulario.patchValue(item);
    this.id = indiceRegistro;
    this.atualizaTabela();
  }

  resetarForm() {
    this.id = -1;
    this.catalogo = true;
    this.formulario.reset();
    this.atualizaTabela();
  }
  /********** FUNÇÕES TABELA CATÁLOGO **********/


  /********** FUNÇÕES TABELA ITENS CATÁLOGO **********/
  inserirRegistroItemCatalogo() {
    if (this.id_item < 0) {
      this.listagem.push(this.formularioItensCatalogo.value);
    } else {
      this.listagem[this.id] = this.formularioItensCatalogo.value;
    }
    localStorage.setItem("tbItensCatalogo", JSON.stringify(this.listagem));
    this.atualizaTabela("tbItensCatalogo");
    this.resetarFormItemCatalogo();
  }

  resetarFormItemCatalogo() {
    this.catalogo = false;
    this.formularioItensCatalogo.reset();
  }
  /********** FUNÇÕES TABELA ITENS CATÁLOGO **********/
}