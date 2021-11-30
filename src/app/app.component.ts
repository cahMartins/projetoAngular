import { Component } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '{{anterior}}',
})
export class AppComponent{
  title = 'my-app';
  
   public anterior: string = '';
   public nome: string = '';
  constructor (
    public router: Router,
    
  ) {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.anterior = this.router.url;
      }
      
    });
  }
   
}
  

