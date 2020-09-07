import { Component, OnInit } from '@angular/core';
import { Routperameters } from 'src/app/Routperameters.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-studentlistdata',
  templateUrl: './studentlistdata.component.html',
  styleUrls: ['./studentlistdata.component.css']
})
export class StudentlistdataComponent implements OnInit {
   list;
  getv;

  result;
  constructor(public act:ActivatedRoute,public rou:Router ,public ser:Routperameters) { 
    this.act.params.subscribe(res=>{
         this.list = res;
         console.log(this.list);

    });
  }

  ngOnInit() {
    this.getv = this.ser.getUserDetails();
   let data = this.getv.findIndex((item,index)=>{
      this.result = this.getv[index];
      console.log(this.result);
    })
        
        
  }

}
