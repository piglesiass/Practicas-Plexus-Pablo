import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket$ = webSocket({url: 'ws://localhost:3000',
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

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }
}
