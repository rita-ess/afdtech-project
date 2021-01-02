import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  routes: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routes = this.route.routeConfig?.children;
    this.router.navigateByUrl('projects/list');
  }

}
