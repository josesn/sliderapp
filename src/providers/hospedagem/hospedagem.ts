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
  public urlFav = "/favoritar/"

  private headers: Headers;
  private options: RequestOptions;

  constructor(public http: Http) {
    this.headers = new Headers();   
    this.headers.append("Accept", "application/json");
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Token 3f415458979f6273ee9012e448fbb1e7336d1557');
    this.options = new RequestOptions({headers: this.headers});
  }

  getAll(): Observable<any> {
    
    let url = this.urlBase + this.urlHosp
    return this.http.get(url)
            .map(this.dataHandler)
           
  }

  setFavorito(id, email, nome) {
    let params = {  
      id_hospedagem: id,
      email: email,
      nome: nome,
    }
    let url = this.urlBase + this.urlHosp + this.urlFav
    return this.http.post(url, params, this.options)
      .map(this.dataHandlerPost)
     
  }

  private dataHandlerPost (res: Response) {
    console.log(res);
    return res.json();
  }


  private dataHandler (res: Response) {
    let h = res.json(); 
    return {lista: h};
  }

}
