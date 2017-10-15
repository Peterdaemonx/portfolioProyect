import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
})
export class TableFormComponent {

  closeResult: string;
  productList:any = [];

  constructor(private router:Router,
              private modalService: NgbModal,
              public productServices:ProductoService) {
      console.log(productServices.productos);
      this.productList = productServices.productos;
  }

  public openForm(content) {
    window.open('book');
    // this.router.navigate(['book'], {});
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  addElement(content){
    console.log(content);
    this.productList.push ({
      titulo:'Undefined',
      categoria:'Undefined',
      url:'Undefined'
    });
  }
  // splice para eliminar elementos de un array
}
