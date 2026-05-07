import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-contacto',
  imports: [FooterComponent, TranslateModule, MatInputModule, MatFormFieldModule, FormsModule, MatCardModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactComponent {

}
