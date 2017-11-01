import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hi! This is inline template of html..</h1>
  <p> {{UserObj.name}} </p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserObj = {
  name: "Vivek",
  location: "California"
  }
}
