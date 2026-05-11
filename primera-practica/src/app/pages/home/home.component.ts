import { Component, AfterViewInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { gsap } from 'gsap';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-home',
  imports: [CardComponent, FooterComponent, TranslateModule, MatDividerModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements AfterViewInit{
  Nombre= 'Pablo Iglesias';
  tlPelota = gsap.timeline({ paused: true });
  play(){
    this.tlPelota.play();
  }
  pause(){
    this.tlPelota.pause();
  }
  reverse(){
    this.tlPelota.reverse();
  }
  seek(){
    this.tlPelota.seek(0.5);
  }
  progress(){
    this.tlPelota.progress(0.5);
  }

  ngAfterViewInit(){
    // gsap.from('.titulo', { 
    //  x: 200,            
    //  opacity: 0,        
    //  duration: 2,       
    //  ease: 'power2.out' 
    // });

    const tl = gsap.timeline();
    tl.addLabel('inicio')
    .from('.titulo', { y: -50, opacity: 0, duration: 1 })
    .addLabel('medio')
    .from('.subtitulo', { y: 50, opacity: 0, duration: 1 }, "-=0.5") 
    .addLabel('final')
    .to('.boton', { y: -10, scale: 1.2, duration: 0.5 }, "-=0.5");

    gsap.from('.lista li', {
     y: 30,
     opacity: 0,
     stagger: 0.2,      
     duration: 1
    });

    gsap.from('.card-item', {
      rotationY: 90,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
        onStart: () => console.log('Animación iniciada'),
        onUpdate: () => console.log('Animando...'),
        onComplete: () => console.log('Animación finalizada')
    });

    this.tlPelota.to('.pelota', {
      x: 300,
      repeat: -1,
      yoyo: true,
      duration: 1
    });
  }


}
