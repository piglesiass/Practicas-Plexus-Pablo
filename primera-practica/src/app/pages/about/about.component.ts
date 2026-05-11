import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, Inject, OnInit, signal, computed} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { User, UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, CommonModule, RouterLink, MatTableModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  nombre = 'Pablo Iglesias';
  curso = 'Angular';

  users= signal<User[]>([]);
  private userService = inject(UserService);

  ngOnInit(){
      console.log('About cargado');

    this.userService.getUsers().subscribe({
      next: (data) => this.users.set(data),
      error: (err) => console.error('Error al obtener usuarios', err)
    });
  }

  columnas = ["id", "name", "email", "username", "phone"];

  filtroNombre= signal("");
  filtroCiudad= signal("");

  usuariosFiltrados = computed (() => {
    return this.users().filter(user=>
      user.name.includes(this.filtroNombre()) && user.address.city.includes(this.filtroCiudad())
    )
  });

  actualizarFiltroNombre(event: Event) {
  this.filtroNombre.set((event.target as HTMLInputElement).value);
  }
  actualizarFiltroCiudad(event: MatSelectChange) {
    this.filtroCiudad.set(event.value);
  }

  resetFiltros(){
    this.filtroNombre.set("");
    this.filtroCiudad.set("");
  }

  
}
