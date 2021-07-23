import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {BehaviorSubject} from 'rxjs';
import {ErgastApiService} from '../../core/services/api/ergast/ergast-api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('0s 0.2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class TeamsComponent implements OnInit {
  ergastConstructors$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private ergastApiService: ErgastApiService) { }

  ngOnInit(): void {
    this.getCurrentConstructors(2021);
  }

  getCurrentConstructors(season: number): void {
    this.ergastApiService.getConstructors(season).toPromise()
      .then((rsp: any) => this.ergastConstructors$.next(rsp.MRData.ConstructorTable.Constructors))
      .catch(err => console.warn('There was an issue fetching current constructors.'));
  }
}
