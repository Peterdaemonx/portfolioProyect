import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html'
})
export class DatatablesComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "email";
  public sortOrder = "asc";
  trustedUrl:any = undefined;

  constructor(private http: Http,
              private domSanitizer: DomSanitizer) {
    //Añadir archivo JS externo
    this.trustedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('datatables.js');
  }

  ngOnInit(): void {
      this.http.get("/assets/data.json")
          .subscribe((data)=> {
              setTimeout(()=> {
                  this.data = data.json();
              }, 2);
          });
      console.log(this.data);
  }

  public toInt(num: string) {
      return +num;
  }

  public sortByWordLength = (a: any) => {
      return a.city.length;
  }

  public add(){
    if (this.data.length > 0) {
        this.data.push({id: this.data.length + 1, name: 'Undefined', email: 'Undefined', age: 'Undefined', city: 'Undefined'});
    }
  }

  public remove(item) {
    if (confirm("¿Seguro que desea eliminar?")){
      let index = this.data.indexOf(item);
      if(index>-1) {
          this.data.splice(index, 1);
      }
    }
  }

  public setCellValue(element, event){
    console.log(element);
    console.log(event);

    element.name = event.target.innerText;
    //insertar elementos
    // var a = {id: element.id, name: event.target.innerText, email: 'Undefined', age: 'Undefined', city: 'Undefined'};
    // this.data.splice(0, 0, a);
    // console.log(this.data);
  }

}
