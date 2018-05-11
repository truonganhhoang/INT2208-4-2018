import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

  sendNewCardCollection(value){
    let url="http://localhost:9000/newCardCollection";
    this.http.post(url,JSON.stringify(value),{headers: new Headers({'Content-Type': 'application/json'})})
    .toPromise()
    .then( r => console.log(r))
    .catch(e => console.log(e))
  }
  
}