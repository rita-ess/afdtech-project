import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  inputs: any;

  @Input()
  myFormGroup: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
