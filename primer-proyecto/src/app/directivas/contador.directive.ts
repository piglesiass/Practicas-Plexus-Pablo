import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appContador]',
  standalone: true
})
export class ContadorDirective {
  contador =0;
  constructor(private el: ElementRef) { }

  @HostListener ('click') onClick(){
    this.contador = ++this.contador;
    this.el.nativeElement.innerText = this.contador;
  }
}
