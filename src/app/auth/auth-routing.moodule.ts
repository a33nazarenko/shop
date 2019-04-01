import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OnlyLoggedOutUsersGuard } from '../shared/guards/onlyLoggedOutUsers.guard';
import { OnlyLoggedInUserGuard } from '../shared/guards/onlyLoggedInUser.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        canActivate: [OnlyLoggedOutUsersGuard]
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}