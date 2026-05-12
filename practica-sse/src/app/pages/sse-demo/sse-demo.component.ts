import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { SseService } from '../../services/sse.service';

@Component({
  selector: 'app-sse-demo',
  templateUrl: './sse-demo.component.html',
  styleUrls: ['./sse-demo.component.css']
})
export class SseDemoComponent implements OnInit, OnDestroy{
  mensajes: string[] = [];
  private suscripcion: any;
  constructor(private cdr: ChangeDetectorRef, private sseService: SseService) {}

  ngOnInit(){
    this.suscripcion= this.sseService.getServerEvents().subscribe({
      next: (data)=> {
        if (data.mensaje) {
          this.mensajes.push(`${data.mensaje} ${data.numero}`);
        } else if (data.progreso) {
          this.mensajes.push(`Progreso: ${data.progreso}`);
        }
        this.cdr.detectChanges();
        
      },
      error: (err) => console.error('Error:', err)
    });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
}
