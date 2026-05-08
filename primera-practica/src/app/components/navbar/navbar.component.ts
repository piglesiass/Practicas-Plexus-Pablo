import { Component, inject } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslateModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(private translate: TranslateService, private router: Router) {}  
  idioma= 'es';

  cambiarIdioma() {
    if (this.idioma === 'es') {
      this.translate.use('en');
      this.idioma = 'en';
    } else {
      this.translate.use('es');
      this.idioma = 'es';
    }
  }

  logut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  }
}
