import { Component } from '@angular/core';
import { RouterOutlet, Router, Route, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>`
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World!';
  constructor(private router: Router, private route: ActivatedRoute){

    this.router.navigate(['login'])

  }


}
