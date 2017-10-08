import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  termino:string = undefined;

  constructor(public router:ActivatedRoute,
              public productServices:ProductoService) {
      this.router.params.subscribe(data => {
          this.termino = data['termino'];
          console.log(this.termino);
          productServices.BuscarProducto(this.termino);
      })
  }

}
