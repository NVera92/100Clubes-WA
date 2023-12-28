import { Component, OnInit } from '@angular/core';
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import { ApiManagerService } from '../api-manager.service';
 

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  

  icon = faYoutube;
  clubCount : any;
  neighborhoodCount : any;
  activeClubs : any;
  inactiveClubs : any;

  constructor(private apiManager : ApiManagerService){}

  ngOnInit(): void {
    this.countClubs();
    this.countNeighborhood();
    this.countActiveClubs();
    this.countInactiveClubs();
  }


  countClubs() {
    this.apiManager.getCountClub().subscribe({
      next: (data) => {
        this.clubCount = Object.values(data[0]);
      }
    })
  }

  countNeighborhood(){
    this.apiManager.getCountNeighborhood().subscribe({
      next: (data) => {
        this.neighborhoodCount = Object.values(data[0])
      }
    })
  }

  countActiveClubs(){
    this.apiManager.getCountActiveClubs().subscribe({
      next: (data) => {
        this.activeClubs = Object.values(data[0])
      }
    })
  }


  countInactiveClubs(){
    this.apiManager.getCountInactiveClubs().subscribe({
      next: (data) => {
        this.inactiveClubs = Object.values(data[0])
      }
    })
  }
}
