import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="firstFunction($event)"> Click ME </button>
  <button (mouseenter)="secondFunction($event)"> Click ME </button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
firstFunction(event){
console.log(event);
alert("HELLO");
};
secondFunction(event){
console.log(event);
alert("HELLO AGAIN");
}
}
