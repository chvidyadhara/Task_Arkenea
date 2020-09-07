import { Component, OnInit } from '@angular/core';
import { Routperameters } from 'src/app/Routperameters.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})

export class Lazy1Component implements OnInit {
 
  userlist;
  constructor(public srv:Routperameters) { 
     
 this.userlist = this.srv.getUserDetails(); 
  }

  ngOnInit() {
   
  }
 
}
