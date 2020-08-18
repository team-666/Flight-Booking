import { Component, OnInit } from '@angular/core';
import {LoginUser} from '../models/loginUser';

import { Router } from '@angular/router';
import { LoginService } from '../user/service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username;
  userPassword;
  userPhone;
  userEmail;

  
  user: LoginUser;

  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  constructor(private router: Router, private loginservice: LoginService) { }


  ngOnInit() {
    if(sessionStorage.getItem('role') === 'customer' || sessionStorage.getItem('role') === 'admin') {
      this.router.navigate(['noauth']);
    }
  }

  // Adds a new User
  signUp() {
    console.log(this.user);
    // userId:string, userName: string, userPassword:string, userPhone:string,
    //userEmail:string, active:string, roles:string
    this.user = new LoginUser('',this.username, this.userPassword, this.userPhone, this.userEmail, "true", 'customer');
    this.loginservice.signUp(this.user).subscribe();
    this.router.navigate(["login"]);
    
  }

  // UserName Validations
  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.username);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.userPhone);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

    //UserEmail Validation
    emailFlag:boolean=false;
    validateEmail(){
        var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail);
        if(!flag){
            this.emailFlag=true;
        }else{
            this.emailFlag=false;
        }
    }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag||this.emailFlag||this.phoneFlag;
    }


}
