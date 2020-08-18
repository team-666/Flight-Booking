import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-site';
  login = false;
  
   constructor(){
    let l = sessionStorage.getItem('loggedIn');
    this.login = l == "true" ?true : false;
    console.log("logged in"+this.login);
   }
}
