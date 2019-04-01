import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RoleHelper } from './helpers/role.helper';
import { TokenHelper } from './helpers/token.helpers';
import { RoleGuard } from './guards/role.guard';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, NotFoundPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    RoleHelper,
    TokenHelper
  ]
})
export class SharedModule { }
