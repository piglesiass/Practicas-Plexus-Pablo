import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-card',
  imports: [MatCardModule, TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
