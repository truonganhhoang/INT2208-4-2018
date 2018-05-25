import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message = '';
  oldPassword = '';
  newPassword = '';
  newCPassword = '';
  changeSuccess = false;

  constructor(private authService: AuthService, private router: Router) { }

  logOut() {
    return this.authService.logOut().subscribe(data => {
      if (data.success) {
        this.router.navigate(['login']);
        this.authService.setLoggedInStatus(false);
      } else {
        window.alert('Some problems!');
      }
    });
  }

  changePassword() {
    if (this.oldPassword === '' || this.newPassword === '' || this.newCPassword === '') {
      this.message = 'Không được để trống mật khẩu';
      this.changeSuccess = false;
    } else {
      if (this.newPassword !== this.newCPassword) {
        this.message = 'Mật khẩu mới không khớp.';
        this.changeSuccess = false;
      } else {
        return this.authService.changePassword(this.oldPassword, this.newPassword).subscribe(data => {
          this.message = data.message;
          this.changeSuccess = data.success;
        });
      }
    }
  }

  ngOnInit() {
  }

}
