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
<pre>
  <code class="html highlight">
  &lt;sh-select [options]=&quot;options&quot;
                [placeholder]=&quot;'Select item'&quot;
                [(ngModel)]=&quot;selectedObjects&quot;&gt;&lt;/sh-select&gt;
  </code>
</pre>`

    typescriptCode:string =`
<pre>
  <code class="typescript highlight">
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
  </code>
</pre>
`


    constructor(){
    }

}
