import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, TranslateModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  private loginService = inject(LoginService);
  username='';
  password='';

  login() {
    this.loginService.getUsers().subscribe(users => {
      const user= users.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        localStorage.setItem('token', 'your-token-here');
        this.router.navigate(['/admin']);
      }else{
        alert('Invalid username or password');
      }
    })
  }
}
