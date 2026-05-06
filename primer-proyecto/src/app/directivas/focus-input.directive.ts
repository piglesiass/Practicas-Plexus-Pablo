import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusInput]',
  standalone: true
})
export class FocusInputDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.focus();
  }
}
