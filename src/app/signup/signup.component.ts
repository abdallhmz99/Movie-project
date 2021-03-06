import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
import {AuthService } from"../auth.service";
import {Router} from '@angular/router'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm=new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'age':new FormControl(null,[Validators.required,Validators.min(18),Validators.max(60)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  });
  signUp(){
        this._AuthService.register(this.signupForm.value).subscribe(data=>{
          this._Router.navigateByUrl("/login");
        },
        err=>{
          console.log(err);
        });
         
  }
  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit(): void {
  }

}
