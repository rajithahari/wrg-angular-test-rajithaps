import { Injectable } from '@angular/core';
import LoginCred from '../assets/login.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login (data) {
    let message = {success: false, error: {username: null, password: null}};
    if (data.username && data.password) {
      if ( data.username === LoginCred.username && data.password === LoginCred.password) {
        message = {success: true, error: {username: null, password: null}};
      } else if (data.username !== LoginCred.username && data.password !== LoginCred.password) {
        message = {success:false, error: {username: 'Invalid User name', password: 'Invalid Password'}};
      } else if (data.username === LoginCred.username && data.password !== LoginCred.password) {
        message = {success:false, error: {username: null, password: 'Invalid Password'}};
      } else if (data.username !== LoginCred.username && data.password === LoginCred.password) {
        message =  {success:false, error: {username: 'Invalid username', password: 'Invalid Password'}};
      } 
    } else {
      message = {success:false, error: {username: 'Please enter username', password: 'Please enter password'}};
    }
    return message;
  }
}
