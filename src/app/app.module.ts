import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonModule } from './interface/button/button.module';
import { NavModule } from './interface/nav/nav.module';
import { HeaderModule } from './common/header/header.module';
import { PanelModule } from './interface/panel/panel.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { SearchBarModule } from './interface/search-bar/search-bar.module';
import { AdicionarModule } from './pages/adicionar/adicionar.module';
import { CatalogoModule } from './pages/catalogo/catalogo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    ButtonModule,
    NavModule,
    HeaderModule,
    PanelModule,
    CadastroModule,
    SearchBarModule,
    BrowserAnimationsModule,
    AdicionarModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
