import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apilist',
  templateUrl: './apilist.component.html',
  styleUrls: ['./apilist.component.css']
})
export class ApilistComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.apiView().subscribe(
      (data)=>{
        this.apiData=data
      }
    )
  }

  apiData:any={}

  ngOnInit(): void {
  }

}
