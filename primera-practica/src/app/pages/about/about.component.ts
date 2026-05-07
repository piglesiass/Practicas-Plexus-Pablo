import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, CommonModule],
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  nombre = 'Pablo Iglesias';
  curso = 'Angular';

  users: User[] = [];
  private userService = inject(UserService);

  ngOnInit(){
    this.userService.getUsers().subscribe({
      next: (data) => this.users =data,
      error: (err) => console.error('Error al obtener usuarios', err)
    });
  }
}
