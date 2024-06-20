# W2M-TOP-BUTTON

## Description
Component to highlight background elements

## What does 
- Highlight html elements

## Usage
```ts
// Module
import { highlightModule } from 'ngx-components'

@NgModule({
  imports: [
    ...
    highlightModule,
  ],
})
```

```html
<!-- Html -->
<div [fjgHighlight]="text" [highlightedText]="textToFind">{{text}}</div>
```
