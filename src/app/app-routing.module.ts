import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StandingsComponent} from './pages/standings/standings.component';
import {DriversComponent} from './pages/drivers/drivers.component';
import {TeamsComponent} from './pages/teams/teams.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'standings', component: StandingsComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'drivers', component: DriversComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
