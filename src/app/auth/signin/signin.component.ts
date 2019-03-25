import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpResponse } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {

    this.usersService.getUserbyEmail().subscribe(
      (response) => {
        console.log(response)
      }
    );

    this.router.navigate(['admin/dashboard']);
  }

}
