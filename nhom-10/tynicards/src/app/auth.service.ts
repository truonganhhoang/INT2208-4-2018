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
    return this.http.post<loginResponse>('/api/login', {
      username,
      password
    });
  }

  logOut() {
    return this.http.get<logoutResponse>('/api/logout');
  }

  register(username, password) {
    return this.http.post<registerResponse>('/api/register', {
      username,
      password
    });
  }

  checkLoginStatus() {
    return this.http.get<loginStatusResponse>('/api/loginstatus');
  }

  getCurrentUser() {
    return this.http.get<currentUserResponse>('/api/currentuser');
  }
}
