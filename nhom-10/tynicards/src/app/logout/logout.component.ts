import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

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


}
