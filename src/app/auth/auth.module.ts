import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.moodule';
import { SignupComponent } from './pages/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [AuthComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    AdminModule
  ]
})
export class AuthModule { }
