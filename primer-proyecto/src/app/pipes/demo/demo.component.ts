import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  nombre = 'Pablo';
  fecha = new Date();
  precio = 5.5;
  porcentaje = 0.25;
  texto = 'Esto es un texto largo de prueba para la practica'
  objeto = { nombre: 'Pablo', edad: 25, ciudad: 'Mérida'}
}
