import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDocument]',
  standalone: true
})
export class DocumentDirective {

  constructor() { }

  @HostListener('document: copy')
  
  onCopy(event:ClipboardEvent){
    event.preventDefault
  }

}
