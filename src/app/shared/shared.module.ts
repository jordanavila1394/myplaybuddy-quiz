import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { RabbitComponent } from './components/rabbit/rabbit.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
   RabbitComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    BrowserModule,
  ],
  exports:[
    HeaderComponent,
    RabbitComponent,
  ]
})
export class SharedModule { }
