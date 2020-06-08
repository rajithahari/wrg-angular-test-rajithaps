import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm;
  guid: string;
  serviceErrors: any = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      title: new FormControl('mrs', Validators.required),
      first: new FormControl('Rajitha', [Validators.required, Validators.minLength(2)]),
      last: new FormControl('PS', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      dob: new FormControl('1989-11-08', Validators.required),
      gender: new FormControl('Female', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  get title(): any {
    return this.submitted && this.userForm.get('title');
  }

  get first(): any {
    return this.submitted && this.userForm.get('first');
  }

  get last(): any {
    return this.submitted && this.userForm.get('last');
  }

  get username(): any {
    return this.submitted && this.userForm.get('username');
  }

  get email(): any {
    return this.submitted && this.userForm.get('email');
  }

  get phone(): any {
    return this.submitted && this.userForm.get('phone');
  }

  get dob(): any {
    return this.submitted && this.userForm.get('dob');
  }

  get gender(): any {
    return this.submitted && this.userForm.get('gender');
  }

  get password(): any {
    return this.submitted && this.userForm.get('password');
  }

  setValue() {
    this.userForm.setValue({first: 'Carson', last: 'Drew'});
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid === true) {
      return;
    } else {
      const data: any = Object.assign(this.userForm.value);
      data.name = {
        title: data.title,
        first: data.first,
        last: data.last
      };
      delete data.title;
      delete data.first;
      delete data.last;
      const users = JSON.parse(localStorage.getItem('users'));
      users.unshift(data);
      localStorage.setItem('users', JSON.stringify(users));
      this.router.navigateByUrl('home');
    }
  }
}
