# angular2-virtual-select
A native angular 2 select and multi select component with virtual scrolling to allow thousands of options in one select component

# Install
npm install --save angular2-virtual-select

# Import module
```javascript
import {ShSelectModule} from "angular2-virtual-select";
@NgModule({
  imports: [
    BrowserModule,
    ShSelectModule,
  ]
})
```
# Use component
```html
<sh-select [options]="['aaaa','bbbb']"
           [(ngModel)]="selectedItems"></sh-select>  
```

# Use with objects
```html
<sh-select [options]="[{name:'aaa',foo:'foo'},{name:'bbb',foo:'foo'}]"
           [(ngModel)]="selectedItems"></sh-select>  
```

# Multi select
```html
<sh-select [options]="[{name:'aaa',foo:'foo'},{name:'bbb',foo:'foo'}]"
           [isMultiselect]="true"
           [(ngModel)]="selectedItems"></sh-select>  
```
