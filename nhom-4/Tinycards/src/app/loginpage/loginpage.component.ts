import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { setCookie } from '../Cookiee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers:[DataService]
})
export class LoginpageComponent implements OnInit {
  signup:boolean=false;
  formLogin: FormGroup;
  formSignup:FormGroup;
  constructor(private _fb: FormBuilder, private dataService : DataService,private router: Router) { }
  Login(){
    console.log(this.formLogin.value);
    this.dataService.logIn(this.formLogin.value)
    .then(r => {
      console.log(r);
      setCookie("userName",r.userName,2);
      this.router.navigate(["/home"]);
      window.location.reload();
    }).catch( e => console.log(e))
  }
  Signup(){
    console.log(this.formSignup.value);
    this.dataService.signUp(this.formSignup.value)
    .then(r => {
      console.log(r)
    }).catch( e => console.log(e))
  }

  ngOnInit() {
    this.formLogin = this._fb.group({
      username:['',Validators.required],
      password:['',[Validators.minLength(8),Validators.required]]
    })

    this.formSignup= this._fb.group({
      username:['',Validators.required],
      password1:['',[Validators.minLength(8),Validators.required]],
      password2:['',[Validators.minLength(8),Validators.required]]
    })
  }

  
  

}

function samePassword(formGroup: FormGroup) {
  if(formGroup.controls.password1 == formGroup.controls.password2 ) return true;
  else return false;
}
  