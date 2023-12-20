import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatsComponent } from './stats/stats.component';
import { FooterComponent } from './footer/footer.component';
import { DevInfoComponent } from './dev-info/dev-info.component';
import { MapComponent } from './map/map.component';
import { SearcherComponent } from './searcher/searcher.component';
import { RouterModule, Routes } from '@angular/router';
import { NeighborhoodComponent } from './neighborhood/neighborhood.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';

const routes: Routes = [
  {path: 'barrio',component: NeighborhoodComponent},
  {path: 'actividades',component: ActivitiesComponent},
  {path: 'inactivos', component: InactiveComponent},
  {path: 'activos',component: ActiveComponent},
  {path: 'mapa',component: MapComponent},
  {path: 'estadisticas',component: StatsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatsComponent,
    FooterComponent,
    DevInfoComponent,
    MapComponent,
    SearcherComponent,
    ActivitiesComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
