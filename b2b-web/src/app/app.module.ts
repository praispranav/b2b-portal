import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
import { ReactiveFormsModule } from '@angular/forms'

>>>>>>> 94f15e471ab357ae4780385ea6b1324c901720e6
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import * as feather from 'feather-icons';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> 94f15e471ab357ae4780385ea6b1324c901720e6
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule,
    ReactiveFormsModule]
})
export class AppModule { }
