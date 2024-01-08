import { Component, OnInit } from '@angular/core';
import { APImovieService } from '../service/apimovie.service';

@Component({
  selector: 'app-home-mc',
  templateUrl: './home-mc.component.html',
  styleUrls: ['./home-mc.component.css']
})
export class HomeMCComponent implements OnInit {
  data: any =  {};
public page!: number;

  constructor(private apiService: APImovieService) { }

  ngOnInit(): void {
    this.llenarData()
  }
  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = Object.values(data);
      console.log(this.data);
    })
  }
}
