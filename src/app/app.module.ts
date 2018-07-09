import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InscripcionService } from './inscripcion.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InscripcionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
