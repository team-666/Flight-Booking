import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public showErrMsg = false;
  public showSuccessMsg = false;

  public contactForm = new FormGroup({
    name :  new FormControl('', Validators.required),
    email   : new FormControl('', Validators.required),
    phone : new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
   
  });

 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.contactForm.valid){
      this.showErrMsg = true;
      this.showSuccessMsg = false;
    }else{
      this.showSuccessMsg = true;
      this.showErrMsg = false;
      this.contactForm.reset();
    }
  }

}
