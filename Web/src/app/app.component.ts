import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web';
  routes: any;

  constructor(private router: Router) {
    this.routes = router.config;
    this.routes.pop();
  }
}
