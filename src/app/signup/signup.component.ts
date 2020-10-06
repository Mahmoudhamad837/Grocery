import { Component, OnInit } from '@angular/core';
import { Signup } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: Signup = {
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    phone:''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
