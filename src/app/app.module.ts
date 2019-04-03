import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/shared/services/auth.service';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { GetProductService } from './admin/shared/services/get-product.service';
import { LocalStorageService } from './shared/services/localStorage.service';
import { OnlyLoggedInUserGuard } from './shared/guards/onlyLoggedInUser.guard';
import { OnlyLoggedOutUsersGuard } from './shared/guards/onlyLoggedOutUsers.guard';
import { RoleGuard } from './shared/guards/role.guard';
import { ProductsAdminService } from './admin/shared/services/products-admin.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthService,
    GetProductService,
    LocalStorageService,
    OnlyLoggedInUserGuard,
    OnlyLoggedOutUsersGuard,
    RoleGuard,
    ProductsAdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
