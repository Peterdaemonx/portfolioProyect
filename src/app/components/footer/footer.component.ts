import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year:number = new Date().getFullYear();

  constructor(public service:InformacionService){}
}
