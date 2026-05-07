import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-user-detalles',
  imports: [],
  templateUrl: './user-detalles.component.html',
  styleUrl: './user-detalles.component.scss'
})
export class UserDetallesComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  user: User | null = null;


  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(Number(id)).subscribe({
      next: (user) => {
        this.user = user;
      }
    })
  }
}
