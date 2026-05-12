import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor() { }

  getServerEvents(): Observable<any> {
    return new Observable((observer) => {
      const eventSource = new EventSource('http://localhost:3000/events');

      eventSource.onmessage = (event) => {
        observer.next(JSON.parse(event.data));
      };

      eventSource.onerror = (error) => {
        observer.error(error);
        eventSource.close();
      };

      eventSource.addEventListener('progress', (event: MessageEvent)=>{
        observer.next(JSON.parse(event.data));
      });

      return () => {
        eventSource.close();
      };
    });
  }
 
}
