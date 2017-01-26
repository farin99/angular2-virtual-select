import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options3000 =[]

  constructor(){
    for(let i=0;i<3000;i++){
      this.options3000.push("very long item BBBDSD fsd fds fsdf ds fsdfdsfsdfdsfdsfsd" + i);
    }
  }

}
