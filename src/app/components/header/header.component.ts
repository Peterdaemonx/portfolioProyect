import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public service:InformacionService,
              public router:Router,
              public loginService:LoginService){
  }

  public buscar_producto(termino:string){
    console.log(termino);
    this.router.navigate(['search', termino]);
  }
}
