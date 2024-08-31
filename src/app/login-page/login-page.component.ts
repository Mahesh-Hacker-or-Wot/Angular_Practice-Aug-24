import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginpageService } from '../loginpage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public LoginPageForm:FormGroup=new FormGroup({

         mail: new FormControl(),
         password: new FormControl()


  })

  constructor(private _loginPageService:LoginpageService,private _route:Router){}

  login(){

    this._loginPageService.getlogin(this.LoginPageForm.value).subscribe(
                  (data:any)=>{
                    alert("Login Successful")
                  },
                  (err:any)=>{
                    alert("Login Failed")
                  }

    )

  }

}
