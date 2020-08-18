import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  role ='customer';
  loggedIn = '';
  //loggedIn
  

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
    this.loggedIn = sessionStorage.getItem('loggedIn');
  }

}
