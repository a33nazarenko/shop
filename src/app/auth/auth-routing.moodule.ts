import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    { path:'', redirectTo:'/auth/signin', pathMatch:'full'},
  {
      path:'',
      component: AuthComponent,
      children: [
          {path: 'signin', component: SigninComponent},
          {path: 'signup', component: SignupComponent}
      ]
  }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class AuthRoutingModule { }