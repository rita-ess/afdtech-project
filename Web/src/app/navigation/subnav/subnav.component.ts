import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {

  @Input()
  routes: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
