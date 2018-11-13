import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelComponent } from './panel.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { AdicionarModule } from '../../pages/adicionar/adicionar.module';
import { CadastroModule } from '../../pages/cadastro/cadastro.module';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    AdicionarModule,
    CadastroModule
  ],
  declarations: [
    PanelComponent
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
