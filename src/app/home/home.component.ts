import { Component, OnInit } from '@angular/core';
import { ListServices } from '../services/list.services';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  animations: [
    trigger('enterState', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('300ms ease-out', style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit{
  public message = ``;
  constructor(private list : ListServices) { }
  ngOnInit(): void {}

}
