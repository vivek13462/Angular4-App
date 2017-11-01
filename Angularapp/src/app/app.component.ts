import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hi! This is property binding in  Angular4..</h1>
 <img src="{{someimage}}">
 <img [src]="someimage">
 <img bind-src="someimage">`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
someimage = 'https://angular.io/resources/images/logos/angular2/angular.png';
}
