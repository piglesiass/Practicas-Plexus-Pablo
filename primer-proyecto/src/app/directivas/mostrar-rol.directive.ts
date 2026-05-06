import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMostrarRol]',
  standalone: true
})
export class MostrarRolDirective implements OnInit {

  @Input() appMostrarRol = '';

  constructor(private el: ElementRef) { }
  ngOnInit(){
    if(this.appMostrarRol === 'admin'){
      this.el.nativeElement.style.display = 'block';
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }




}
