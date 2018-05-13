import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  notification = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.notification = '';
  }

  register(event) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    const cpassword = event.target.querySelector('#cpassword').value;
    if (cpassword === password) {
      this.authService.register(username, password).subscribe(data => {
        if (data.success) {
          this.router.navigate(['dashboard']);
          this.authService.setLoggedInStatus(true);
        } else {
          this.notification = data.message;
        }
      });
    } else {
      this.notification = 'Passwords does not match!';
    }
  }

}
