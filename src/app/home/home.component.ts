import { Component, OnInit } from '@angular/core';
import { ListServices } from '../services/list.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit{
  public message = ``;
  constructor(private list : ListServices) { }
  ngOnInit(): void {}

}
