
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../../services/auth/authorization.guards';
import { QuizHomeComponent } from './components/quiz-home/quiz-home.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { QuizStepsComponent } from './components/quiz-steps/quiz-steps.component';

// , canActivate: [AuthGuard]
const routes: Routes = [
  {path: 'result', component: QuizResultComponent},
  {path: 'start', component: QuizHomeComponent},
  {path: 'quiz', component: QuizStepsComponent},
  {path: '', redirectTo:'/start', pathMatch : 'full',},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule { }
