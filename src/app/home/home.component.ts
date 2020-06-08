import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dataTable: any;
  users: any = [];

  constructor(private http: HttpClient, private router: Router) {
    this.users = JSON.parse(localStorage.getItem('users'));
    if (!this.users) {
      this.http.get('https://randomuser.me/api/0.8/?results=20')
      .subscribe((res: any) => {
        this.users = res.results.map((user: any) => {
          return {
            gender: user.user.gender,
            name: user.user.name,
            email: user.user.email,
            username: user.user.username,
            password: user.user.password,
            dob: user.user.dob,
            phone: user.user.phone
          };
        });
        localStorage.setItem('users', JSON.stringify(this.users));
      });
    }
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
