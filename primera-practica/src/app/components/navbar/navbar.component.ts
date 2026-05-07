import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslateModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  constructor(private translate: TranslateService) { }
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
}
