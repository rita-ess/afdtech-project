import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {

  routes: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routes = this.route.routeConfig?.children;
    this.router.navigateByUrl('affectations/list');
  }

}
