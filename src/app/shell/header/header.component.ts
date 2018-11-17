import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  hidden: boolean = false;

  constructor() {}

  ngOnInit() {}

  onToggle(){
    this.hidden = !this.hidden ? true : false;
  }
}
