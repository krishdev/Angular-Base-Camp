import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[form-click]'
})
export class FormLabelDirective {

  constructor(
    elemProp: ElementRef
  ) { 
    elemProp.nativeElement.addEventListener('click', function() {
      alert("this is from the directive");
    });
  }

  alertUser() {
    alert("this is from the directive");
  }

}
