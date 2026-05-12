import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-websocket-demo',
  imports: [FormsModule],
  templateUrl: './websocket-demo.component.html',
  styleUrl: './websocket-demo.component.css'
})
export class WebsocketDemoComponent implements OnInit{
  mensajes: string[] = [];

  constructor(private wsService : WebsocketService) {}
  mensaje='';
  
  ngOnInit(){

    this.wsService.getMessages().subscribe({
      next: (msg: any) =>  this.mensajes.push(`${msg.mensaje} ${msg.numero}`),
      error: (err) => console.error(err),
      complete: () => console.log('Socket cerrado')
    });
  }

  enviar(){
    this.wsService.sendMessage(this.mensaje);
  }
}
