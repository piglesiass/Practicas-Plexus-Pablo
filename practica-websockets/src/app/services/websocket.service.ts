import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

export interface SocketMessage {
  mensaje: string;
  numero: number;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket$ = webSocket<SocketMessage>({url: 'ws://localhost:3000',
    openObserver: {
      next: () => console.log('Conexión abierta')
    },
    closeObserver: {
      next: () => console.log('Conexión cerrada')
    }
  });  

  getMessages() {
    return this.socket$;
  }

  sendMessage(msg: SocketMessage) {
    this.socket$.next(msg);
  }
}
