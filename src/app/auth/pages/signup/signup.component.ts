import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { RegistrationRequestUsersView } from '../../shared/entities/users/requests/registration-request-users.view';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'confirmPassword': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    const model: RegistrationRequestUsersView = { ...this.form.value };

    this.authService.registration(model).subscribe(() => {
      this.router.navigate(['/auth/signin']);
    })
  }


}
