import { Component } from '@angular/core';

@Component({
    selector: 'single-select-objects-sample',
    templateUrl:'single-select-objects.html'
})
export class SingleSelectObjectsComponent {
    options:any[] = ['Leonardo Da Vinci','Galileo','Sir Isaac Newton',
        'Thomas Savery','Benjamin Franklin','Steve Jobs','Alan Turing','Nikola Tesla']
        .map((name,index) => ({name:name,key:index}));
    selectedObjects =[];
    htmlCode:string = `
  &lt;sh-select [options]=&quot;options&quot;
                [placeholder]=&quot;'Select item'&quot;
                [(ngModel)]=&quot;selectedObjects&quot;&gt;&lt;/sh-select&gt;
`

    typescriptCode:string =`
    @Component({
        selector: 'single-select-object-sample',
        templateUrl:'single-select-object.html'
    })
    export class SingleSelectComponent {
        options:any[] = ['Leonardo Da Vinci','Galileo','Sir Isaac Newton',
            'Thomas Savery','Benjamin Franklin','Steve Jobs','Alan Turing','Nikola Tesla']
            .map((name,index) => ({name:name,key:index}));
        selectedObjects =[];
    }
`


    constructor(){
    }

}
