import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  isSuccessfullLogin:boolean = false;

  constructor() { }

  public BuscarProducto(user:string, password:string) {
    if (user == 'peter' && password == 'a') {
      this.isSuccessfullLogin = true;
    }else{
      this.isSuccessfullLogin = false;
    }
    return this.isSuccessfullLogin;
  }

}
