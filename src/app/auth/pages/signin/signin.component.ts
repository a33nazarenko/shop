import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LoginRequestUsersView } from '../../shared/entities/users/requests/login-request-users.view';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';
import { RoleHelper } from 'src/app/shared/helpers/role.helper';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {



  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private localStorageService: LocalStorageService, private roleHelper: RoleHelper) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {

    const model: LoginRequestUsersView = { ...this.form.value };
    this.authService.login(model).subscribe(
      (response) => {
        this.roleHelper.getRole();
        this.router.navigate(['admin/dashboard']);
      }
    );
  }

}
