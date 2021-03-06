import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('contentAnimations', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.5em)'}),
        animate('0.2s 0.2s ease', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
