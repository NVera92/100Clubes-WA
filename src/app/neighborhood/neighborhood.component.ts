import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../api-manager.service';
import { NeighborhoodStruct } from '../neighborhood-struct';
import { ClubStruct } from '../club-struct';
import { ViewStruct } from '../view-struct';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css']
})
export class NeighborhoodComponent implements OnInit {

  neighColection: Array<NeighborhoodStruct> = [];
  idCapturated!: number;
  clubColection: Array<ClubStruct> = [];
  show: boolean = false;
  club!: any;

  constructor(private apiManager: ApiManagerService) { }

  ngOnInit(): void {

    this.loadColection();

  }



  loadColection() {
    this.apiManager.getNeighborhood().subscribe({
      next: (data) => {
        this.apiManager.data = data as NeighborhoodStruct;
        this.neighColection = this.apiManager.data;
      }
    })
  }

  searchByNeighborhood(id: number) {
    this.show = false;
    this.apiManager.getClubByNeighborhood(id).subscribe({
      next: (data) => {
        this.apiManager.data = data as ViewStruct;
        this.clubColection = this.apiManager.data;
        if(this.clubColection.length == 0){
          this.show = true;
        }
      }
    })
  }

  showClubById(id: number){
    this.apiManager.getClubById(id).subscribe({
      next: (data) => {
        this.apiManager.data = data as ClubStruct;
        this.club = this.apiManager.data;
        let f = new Date(this.club[0].fechaFundacion)
        Swal.fire({
          title: this.club[0].nombre,
          html: "Fundado el "+f.getDate()+'/'+(f.getMonth()+1)+'/'+f.getFullYear()+" <br/>"+"Actividades: " +this.club[0].actividades+' <br/> Colores: '+this.club[0].colores+' <br/>Ubicacíon Sede: '+this.club[0].ubicacionSede,
          imageUrl: this.club[0].ubicacion,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    })
  }

  toogleShow() {
    if (this.show) {
      this.show = false
    } else {
      this.show = true;
    }
    alert(this.show);
  }

 
}
