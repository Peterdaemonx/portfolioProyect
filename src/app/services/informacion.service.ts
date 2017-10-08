import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class InformacionService {

  info:any = {};
  firebaseData:any = [];

  constructor(public http:Http) {
    this.LoadGeneralData();
    this.FireBaseLoadData();
  }

  LoadGeneralData() {
    this.http.get("assets/data/info.paginas.json")
            .subscribe(data => {
              this.info = data.json()
            })
  }

  FireBaseLoadData() {
    this.http.get("https://portafolio-71d53.firebaseio.com/team.json")
            .subscribe(data => {
              console.info(data)
              this.firebaseData = data.json()
            })
  }
}
