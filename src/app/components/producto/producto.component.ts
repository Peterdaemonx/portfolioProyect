import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  producId:string = undefined;
  product:any = undefined;
  constructor(private activeRouter:ActivatedRoute,
              private productServices:ProductoService) {

    this.activeRouter.params.subscribe(param => {
      this.producId = param['id'];
      productServices.CargandoProducto(this.producId).subscribe(data => {
          this.product = data.json();
          console.log(this.product);
      })
    })
  }
}
