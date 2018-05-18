import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  notification = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.notification = '';
  }

  logIn(event) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    this.authService.logIn(username, password).subscribe(data => {
      if (data.success) {
        this.router.navigate(['dashboard']);
        this.authService.setLoggedInStatus(true);
      } else {
        this.notification = 'Đăng nhập thất bại. Tài khoản hoặc mật khẩu không đúng.';
      }
    });
  }

}
