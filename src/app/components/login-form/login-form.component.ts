import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router,
              private loginService:LoginService) { }

  user:string = undefined;
  password:string = undefined;
  information:string = undefined;

  ngOnInit() {
  }

  loginForm(event) {
    event.preventDefault();
    console.log(event);
    this.user = event.target.elements[0].value;
    this.password = event.target.elements[1].value;

    if (this.loginService.BuscarProducto(this.user, this.password)) {
      this.router.navigate(['']);
    }else{
      event.target.elements[0].value = '';
      event.target.elements[1].value = '';
      this.information = 'Invalid user or password. To sign-in into our application please provide a valid credentials.'
    }
  }

}
