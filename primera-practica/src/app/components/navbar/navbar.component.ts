import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslateModule],
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
