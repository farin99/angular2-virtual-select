# angular2-virtual-select
A native angular 2 select and multi select component with virtual scrolling to allow thousands of options in one select component

# install
npm install --save angular2-virtual-select

# import module
```javascript
import {ShSelectModule} from "angular2-virtual-select";
@NgModule({
  imports: [
    BrowserModule,
    ShSelectModule,
  ]
})
```
# use component
```html
<sh-select [options]="['aaaa','bbbb']"></sh-select>  
```

# use with object - like key val
```html
<sh-select [options]="[{name:'aaa',foo:'foo'},{name:'bbb',foo:'foo'}]"></sh-select>  
```
