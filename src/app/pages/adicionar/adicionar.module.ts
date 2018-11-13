import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarComponent } from './adicionar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AdicionarComponent
  ],
  exports: [
    AdicionarComponent
  ]
})
export class AdicionarModule { }
