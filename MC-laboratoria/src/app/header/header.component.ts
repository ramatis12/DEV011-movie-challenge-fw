import { Component, OnInit } from '@angular/core';
import { APImovieService } from '../service/apimovie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: any =  {};

  constructor(private apiService: APImovieService) { }

  ngOnInit(): void {
    this.llenarData()
  }
llenarData(){
  this.apiService.getData().subscribe(data => {
    this.data = data;
    console.log(this.data);
    
  })
}
}
