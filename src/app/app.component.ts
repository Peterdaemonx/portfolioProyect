import { Component } from '@angular/core';
import { InformacionService } from "./services/informacion.service";
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private productServices:ProductoService){}
}
