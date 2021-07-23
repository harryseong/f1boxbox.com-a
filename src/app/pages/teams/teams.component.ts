import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Constants} from '../../shared/constants/constants';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('0.2s 0.2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class TeamsComponent implements OnInit {
  teams = Constants.TEAMS;

  constructor() { }

  ngOnInit(): void {
  }

}
