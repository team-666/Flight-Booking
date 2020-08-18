import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from '../../user/service/login.service';
import { LoginUser } from '../../models/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  user: any;
 // user: User={"userId": 0, "userName":"", "userPassword":"", "userPhone": 0, "userEmail":"", "active": null, "roles":""};
  invalidLogin = false;

  // private loginservice: AuthenticationService
  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit(): void {
    let login = sessionStorage.getItem('loggedIn');
    if(login== 'true'){
      this.router.navigate(["/home"]).then(()=> {
        //window.location.reload();
      });
    }
  }

  // Check user for authenticatoin
  checkLogin() {
     this.loginservice.authenticateUser(this.username, this.password).subscribe(
      userData => {
          if(userData != null){
             this.user =userData;
             if(this.password == this.user.userPassword){
               sessionStorage.setItem('username', this.username);
               this.invalidLogin = false;
               sessionStorage.setItem('loggedIn', 'true');
               this.redirect();
             }else{
              console.log("Invalid Login Credentials..");
              this.invalidLogin = true;
             }
       
         }else{
          console.log("Invalid Login Credentials..");
          this.invalidLogin = true;
         }
        });
   
   /* if(this.user == null || this.user.userPassword != this.password){
      console.log("Invalid Login Credentials..");
      this.invalidLogin = true;
    }else{
      this.invalidLogin = false;
      sessionStorage.setItem('loggedIn', 'true');
      this.redirect();
    }*/
  /* if(this.loginservice.authenticateUser(this.username, this.password)) {
      this.loginservice.getRole(this.username).subscribe((data: LoginUser)=> {
        this.user = data;
        this.redirect();
        sessionStorage.setItem('loggedIn', 'true');
      });
    }
    else {
      console.log("Invalid Login Credentials..");
      this.invalidLogin = true;
    }
    */
  }

  // Redirect based on the user role
  redirect() {
   if(this.user.roles === 'customer') {
      sessionStorage.setItem('role', 'customer');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/home"]).then(()=> {
        window.location.reload();
      });
    }
    else if(this.user.roles === 'admin') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/home"]).then(()=> {
        window.location.reload();
      });
    }
  }


}
