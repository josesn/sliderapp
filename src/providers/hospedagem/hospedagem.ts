import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the HospedagemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HospedagemProvider {

  public urlBase = "http://localhost:8000"
  public urlHosp = "/hospedagem"

  constructor(public http: Http) {
    console.log('Hello HospedagemProvider Provider');
  }

  getAll(): Observable<any> {
    
    let url = this.urlBase + this.urlHosp
    return this.http.get(url)
            .map(this.dataHandler)
           
  }

  private dataHandler (res: Response) {
    let h = res.json(); 
    return {lista: h};
  }

}
