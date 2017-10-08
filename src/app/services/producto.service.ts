import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductoService {

  cargando:boolean = true;
  productos:any = [];
  productosFiltrados:any = [];

  constructor(private http:Http) {
    this.CargandoProductos();
  }

  private CargandoProductos(){
    if (this.productos.length == 0) {
      let promesa = new Promise((resolver, reject) => {
        this.http.get("https://portafolio-71d53.firebaseio.com/productos_idx.json")
                 .subscribe(data => {
                   setTimeout(() => {
                     this.productos = data.json();
                     this.cargando = false;
                   }, 1500)
                 });
      });

      return promesa;
    }
  }

  public CargandoProducto(productId:string){
    return this.http.get(`https://portafolio-71d53.firebaseio.com/productos/${ productId }.json`);
  }

  public BuscarProducto(termino:string){
    if (this.productos.length == 0) {
        this.CargandoProductos().then(() => {
          //Termino de cargar los datos
          this.FiltrarProducto(termino);
        });
    } else{
      //Ya habian poductos cargados
      this.FiltrarProducto(termino);
    }
  }

  private FiltrarProducto(termino:string){
    this.productosFiltrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) > -1 || prod.titulo.toLowerCase().indexOf(termino) > -1) {
          this.productosFiltrados.push(prod);
      }
    });
  }
}
