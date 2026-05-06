import { Component } from '@angular/core';

import { AgrandarDirective } from '../../directivas/agrandar.directive';

import { ContadorDirective } from '../../directivas/contador.directive';

import { MostrarRolDirective } from '../../directivas/mostrar-rol.directive';

import { FocusInputDirective } from '../../directivas/focus-input.directive';

@Component({
  selector: 'app-home',
  imports: [AgrandarDirective, ContadorDirective, MostrarRolDirective, FocusInputDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pulsado = true;

  togglePulsado() {
    this.pulsado = !this.pulsado;
  }

  coches = [ 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW' ];

  rolUsuario = 'admin';
}
