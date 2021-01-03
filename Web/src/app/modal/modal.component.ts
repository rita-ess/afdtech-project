import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  id: any;
  @Input()
  title: any;
  @Input()
  body: any;
  @Input()
  event: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
