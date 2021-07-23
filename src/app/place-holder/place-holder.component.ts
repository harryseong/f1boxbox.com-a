import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.scss']
})
export class PlaceHolderComponent implements OnInit {
  title = 'f1boxbox-a';

  constructor() { }

  ngOnInit(): void {
  }

}
