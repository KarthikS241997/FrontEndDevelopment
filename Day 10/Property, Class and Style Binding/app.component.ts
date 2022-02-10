import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  result:number=0;
  increment(){
    return ++this.result;
  }
  decrement(){
    return --this.result;
  }
  disable(){
    let data = document.querySelector("input");
    data?.setAttribute("value"," ");
    data?.setAttribute("readonly"," ");
  }
  classcheck='two';
}
