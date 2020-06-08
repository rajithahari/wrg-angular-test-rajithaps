import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: any = new FormControl('');
  serviceErrors: any = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private login: LoginService) { }

  invalidUsername() {
    return (this.submitted && (this.serviceErrors.username != null || this.loginForm.controls.username.errors != null));
  }

  invalidPassword() {
    return (this.submitted && (this.serviceErrors.password != null || this.loginForm.controls.password.errors != null));
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.loginForm.value);
      let response: any;
      response = this.login.login(data);
      this.serviceErrors = response.error;
      if (response.success) {
        const path = '/home';
        this.router.navigate([path]);
      }
    }
  }

}
