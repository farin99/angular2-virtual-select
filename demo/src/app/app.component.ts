import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringOptions:string[] = ['Leonardo Da Vinci','Galileo','Sir Isaac Newton','Thomas Savery','Benjamin Franklin','Steve Jobs','Alan Turing','Nikola Tesla'];
  objectsOptions:any[];
  selectedStrings =[];
  selectedObjects =[];

  constructor(){
    this.objectsOptions = this.stringOptions.map((str,index) => ({name:str, id:index}));
  }

}
