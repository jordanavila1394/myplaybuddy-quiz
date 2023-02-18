import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizRoutingModule } from './quiz-routing.module';


import { HttpClientModule } from '@angular/common/http';

// import { AuthenticationService } from '../@core/services/auth/authentication.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Echarts
import { QuizHomeComponent } from './components/quiz-home/quiz-home.component';
import { QuizStepsComponent } from './components/quiz-steps/quiz-steps.component';


@NgModule({
  declarations: [
    QuizHomeComponent,
    QuizStepsComponent,
    QuizResultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuizRoutingModule,
  ],
  // providers: [
  //   DashboardService
  // ],
  exports:[
    QuizHomeComponent,
    QuizStepsComponent,
    QuizResultComponent
  ]
})
export class QuizModule { }
