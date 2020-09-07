import { Component, OnInit } from "@angular/core";
import { HttpsrService } from 'src/app/httpsr.service';
import { HttpClient } from '@angular/common/http';


@Component({
    selector:'app-registr',
    templateUrl:'./registr.component.html',
    styleUrls:['./registr.component.css']
    
})
export class RegistrComponent implements OnInit {
    userdata; 
url="https://api.mlab.com/api/1/databases/angularjs/collections/employee?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1" 
    model:any={}; 
    constructor(public http:HttpClient){
                 
       }
       ngOnInit(){

       }
    
       submitdata(){
        var subdata = {
            username:this.model.username,
            password:this.model.password,
            emailid:this.model.emailid,
            mobileno:this.model.mobileno
        }
           this.http.post(this.url,subdata).subscribe(x=>{
                 var myval = x;
                 console.log(myval);
           })   
       }
}