import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {

  displayedColumns: string[] = ['status', 'codigo', 'descricao', 'acoes'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  status: number;
  codigo: number;
  descricao: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: 1, codigo: 123, descricao: 'Apollus 123'},
  {status: 2, codigo: 234, descricao: 'Apollus 234'},
  {status: 1, codigo: 345, descricao: 'Apollus 345'},
  {status: 2, codigo: 456, descricao: 'Apollus 456'},
  {status: 1, codigo: 567, descricao: 'Apollus 567'}
];