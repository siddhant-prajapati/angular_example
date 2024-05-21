import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective{

  constructor(public ele : ElementRef) {
    console.log("This directive is call")
    //this.ele.nativeElement.style.backgroundColor = 'yellow'
   }
 

}
