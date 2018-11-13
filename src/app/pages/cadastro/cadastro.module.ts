import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { CadastroComponent } from './cadastro.component';
import { SearchBarModule } from '../../interface/search-bar/search-bar.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    SearchBarModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  declarations: [
    CadastroComponent
  ],
  exports: [
    CadastroComponent
  ]  
})
export class CadastroModule { }
