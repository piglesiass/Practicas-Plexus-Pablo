import { AfterViewInit, Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-animaciones',
  imports: [CardComponent, FooterComponent, TranslateModule, MatDividerModule, MatButtonModule],
  templateUrl: './animaciones.component.html',
  styleUrl: './animaciones.component.scss'
})
export class AnimacionesComponent implements AfterViewInit{

  tlPelota = gsap.timeline({ paused: false });
  
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

  animacion(){
    gsap.from('.b8',{
      rotationY: 90,
      opacity: 0,
      duration: 1,
      stagger: 0.3
    });
  }

  ngAfterViewInit(){
    // gsap.from('.titulo', { 
    //  x: 200,            
    //  opacity: 0,        
    //  duration: 2,       
    //  ease: 'power2.out' 
    // });
    gsap.registerPlugin(ScrollTrigger);

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

    gsap.to('.scroll', {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    const xSetter = gsap.quickSetter('.cursor', 'x', 'px');
    window.addEventListener('mousemove', (e) => {
      xSetter(e.clientX);
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
     gsap.to('.box', { x: 300, duration: 1 });
    });

    mm.add("(max-width: 767px)", () => {
     gsap.to('.box', { scale: 0.5, duration: 1 });
    });
  }
}
