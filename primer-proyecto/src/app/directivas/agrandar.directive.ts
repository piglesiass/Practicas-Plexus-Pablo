import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAgrandar]',
  standalone: true
})
export class AgrandarDirective {

  constructor(private el: ElementRef) { }

  @HostListener ('mouseenter') onEnter(){
    this.el.nativeElement.style.fontSize = '25px';
  }

  @HostListener ('mouseleave') onLeave(){
    this.el.nativeElement.style.fontSize = '16px';
  }
}
