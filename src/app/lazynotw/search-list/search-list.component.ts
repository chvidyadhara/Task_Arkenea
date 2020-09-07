import { Component, OnInit } from '@angular/core';
import { HttpsrService } from 'src/app/httpsr.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  emplist;
  model: any = {};
  url = "https://api.mlab.com/api/1/databases/angularjs/collections/employee?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";
  constructor(public serv: HttpsrService, public del: HttpClient) {

  }
  delete(id) {
    this.del.delete(`https://api.mlab.com/api/1/databases/angularjs/collections/employee/${id}?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1`).subscribe(x => {
      alert("student this.delete");
    });
  }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.serv.htmethod().subscribe(x => {
      this.emplist = x;
      console.log(this.emplist);
    })
  }

  editModel(user){
    this.model = user;
  }

  updateUser() {
    this.serv.editUser(this.model).subscribe((data) => {
      if (data) {
        this.getData()
      }
    })
  }


}
