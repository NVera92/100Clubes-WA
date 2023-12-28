import { Component, OnInit } from '@angular/core';
import { ApiManagerService } from '../api-manager.service';
import { ClubStruct } from '../club-struct';
import { NeighborhoodComponent } from '../neighborhood/neighborhood.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css']
})
export class InactiveComponent implements OnInit {
  
  inactiveClubs : any;
  club : any;

  constructor(private apiManager : ApiManagerService){}

  ngOnInit(): void {
    this.getInactiveClubs();
    
  }


  getInactiveClubs(){
    this.apiManager.getInactiveClubs().subscribe({
      next : (data) => {
        this.apiManager.data = data as ClubStruct;
        this.inactiveClubs = this.apiManager.data;
        console.log(this.inactiveClubs)
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
  
}
