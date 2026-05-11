import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  loading =false;

  constructor(private loadingService: LoadingService){
    this.loadingService.loading$.subscribe(value=> {
      this.loading = value;
    })
  }
}
