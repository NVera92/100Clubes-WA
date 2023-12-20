import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit{

  openSearcher: boolean = false;
  toRender: number = 0;
  constructor(){}

  ngOnInit(): void {
   
    
  }

 
}



