import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface loginResponse {
  success: boolean
}

interface logoutResponse {
  success: boolean
}

interface registerResponse {
  success: boolean,
  message: String
}

interface loginStatusResponse {
  status: boolean
}

interface currentUserResponse {
  username: String
}

interface changePasswordResponse {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedInStatus(value) {
    this.loggedInStatus = value;
  }

  getLoggedInStatus() {
    return this.loggedInStatus;
  }

  logIn(username, password) {
    return this.http.post<loginResponse>('http://localhost:3000/api/login', {
      username,
      password
    });
  }

  logOut() {
    return this.http.get<logoutResponse>('http://localhost:3000/api/logout');
  }

  register(username, password) {
    return this.http.post<registerResponse>('http://localhost:3000/api/register', {
      username,
      password
    });
  }

  checkLoginStatus() {
    return this.http.get<loginStatusResponse>('http://localhost:3000/api/loginstatus');
  }

  getCurrentUser() {
    return this.http.get<currentUserResponse>('http://localhost:3000/api/currentuser');
  }

  changePassword(oldPassword, newPassword) {
    return this.http.post<changePasswordResponse>('http://localhost:3000/api/changepassword', {
      oldPassword,
      newPassword
    });
  }

}
