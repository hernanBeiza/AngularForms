import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EstrellasComponent } from './estrellas/estrellas.component';
import { CheckComponent } from './check/check.component';


@NgModule({
  declarations: [
    AppComponent,EstrellasComponent, CheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
