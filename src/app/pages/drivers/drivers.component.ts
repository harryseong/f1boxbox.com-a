import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Constants} from '../../shared/constants/constants';
import {ErgastApiService} from '../../core/services/api/ergast/ergast-api.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('0.2s 0.2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class DriversComponent implements OnInit {
  drivers = Constants.DRIVERS;
  ergastDrivers$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private ergastApiService: ErgastApiService) { }

  ngOnInit(): void {
    this.getCurrentDrivers(2021);
  }

  getCurrentDrivers(season: number): void {
    this.ergastApiService.getDrivers(season).toPromise()
      .then((rsp: any) => this.ergastDrivers$.next(rsp.MRData.DriverTable.Drivers))
      .catch(err => console.warn('There was an issue fetching current drivers.'));
  }

}
