import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const Apikey = '/?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1';

@Injectable({
  providedIn: 'root'
})
export class HttpsrService {
  full_url = "https://api.mlab.com/api/1/databases/angularjs/collections/employee/?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1"
  url = "https://api.mlab.com/api/1/databases/angularjs/collections/employee";
  sdata;

    constructor(public http: HttpClient) {
    this.sdata = this.http.get(this.full_url);

  }
  htmethod(){
    return this.sdata;
  }

  editUser(user) {
    return this.http.put(this.url + '/' + user._id['$oid'] + Apikey, user)
  }
}

