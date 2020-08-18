import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../user/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginService.logOut();
    sessionStorage.setItem('role', null);
    sessionStorage.setItem('userId', null);
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.clear();
    window.location.replace("login");
    
    //this.router.navigate(['login']);
    
  }

}
