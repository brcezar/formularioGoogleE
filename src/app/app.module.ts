import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BadgeComponent } from './components/badge/badge.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './view/home/home.component';
import { PessoaListComponent } from './view/pessoa/pessoa-list/pessoa-list.component';
import { PessoaFormComponent } from './view/pessoa/pessoa-form/pessoa-form.component';
import { AppRoutingModule } from './app.routing.module';
import { InputComponent } from './components/input/input.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormularioListComponent } from './view/formulario/formulario-list/formulario-list.component';
import { FormularioFormComponent } from './view/formulario/formulario-form/formulario-form.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    AlertComponent,
    BadgeComponent,
    HomeComponent,
    PessoaListComponent,
    PessoaFormComponent,
    InputComponent,
    FormularioListComponent,
    FormularioFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
