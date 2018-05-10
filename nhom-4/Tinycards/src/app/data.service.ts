import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  constructor( private http:Http) { }
  getListCardCollection(){
    let url = "http://localhost:9000/list/CardCollection";
    return this.http.get(url)
    .toPromise()
    .then( res => res.json())
    .catch(err => false);
  }

  getCardCollection(cardID){
    let url="http://localhost:9000/CardCollection/cardID="+cardID;
    return this.http.get(url)
    .toPromise()
    .then( res => res.json())
    .catch(err => false);
  }
  
}