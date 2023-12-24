import { Component } from '@angular/core';
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
 

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  icon = faYoutube;
  clubCount : number = 150;
  neighborhoodCount : number = 38;
  activeClubs : number = 30;
  inactiveClubs :  number = 20;
}
