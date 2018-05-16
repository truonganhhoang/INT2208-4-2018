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
  samePassword:boolean=true;
  formLogin: FormGroup;
  formSignup:FormGroup;
  constructor(private _fb: FormBuilder, private dataService : DataService,private router: Router) { }
  Login(){
    // console.log(this.formLogin.value);
    this.dataService.logIn(this.formLogin.value)
    .then(r => {
      console.log(r);
      setCookie("userName",r.userName,2);
      this.router.navigate(["/home"]);
      window.location.reload();
    }).catch( e => window.alert("Server xảy ra sự cố, vui lòng thử lại sau"))
  }
  Signup(){
    // console.log(this.formSignup.value);
    if(this.formSignup.value.password1 == this.formSignup.value.password2){
      this.dataService.signUp(this.formSignup.value)
      .then(r => {
        if(r){
        window.alert("đăng kí tài khoản mới thành công");
        this.signup=false;
        }else{
          window.alert("Đăng kí tài khoản thất bại, hãy thử sử dụng tên đăng nhập khác");
        }
      }).catch( e => window.alert("Đăng kí tài khoản thất bại, hãy thử sử dụng tên đăng nhập khác"));
    }else{
      this.samePassword = false;
    }
    
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
  