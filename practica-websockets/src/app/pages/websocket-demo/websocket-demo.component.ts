import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../../services/websocket.service';
import { SocketMessage } from '../../services/websocket.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-websocket-demo',
  imports: [FormsModule],
  templateUrl: './websocket-demo.component.html',
  styleUrl: './websocket-demo.component.css'
})
export class WebsocketDemoComponent implements OnInit, OnDestroy{
  mensajes: string[] = [];
  private suscripcion: any;
  constructor(private wsService : WebsocketService) {}
  mensaje='';
  
  ngOnInit(){

    this.suscripcion= this.wsService.getMessages().pipe(filter((msg: any)=> msg.type === 'chat')).subscribe({
      next: (msg: SocketMessage) =>  this.mensajes.push(`${msg.mensaje} ${msg.numero}`),
      error: (err) => console.error(err),
      complete: () => console.log('Socket cerrado')
    });
  }

  enviar(){
    this.wsService.sendMessage({ mensaje: this.mensaje, numero: 0 });
    this.mensaje = '';
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
