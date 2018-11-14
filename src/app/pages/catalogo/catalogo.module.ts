import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoComponent } from './catalogo.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CatalogoComponent
  ],
  exports: [
    CatalogoComponent
  ]
})
export class CatalogoModule { }
