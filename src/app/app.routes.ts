import { UserFormComponent } from './users/user-form/user-form.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';




export const routes: Routes = [
  // {path:"", component:UsersComponent},

  // {
  //   path:"users",
  //   component:UsersComponent
  // },
  // {
  //   path:"users/add",
  //   component:UserFormComponent
  // },
  // {
  //   path:"users/:id",
  //   component:UserFormComponent
  // },

  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/add', component: QuestionFormComponent },
  { path: 'questions/edit/:id', component: QuestionFormComponent },
  { path: '', redirectTo: '/questions', pathMatch: 'full' },



];
