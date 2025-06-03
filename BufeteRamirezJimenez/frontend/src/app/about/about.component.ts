import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  testimonios = [
    { nombre: 'María Fernández', mensaje: 'Gracias al bufete pude resolver mi caso de herencia de forma rápida y sin complicaciones.' },
    { nombre: 'Carlos Jiménez', mensaje: 'Su equipo me acompañó durante todo el proceso de divorcio con gran humanidad y profesionalismo.' },
    { nombre: 'Lucía Ramírez', mensaje: 'Me defendieron en un caso laboral injusto y ganamos. Muy recomendados.' },
    { nombre: 'Fernando López', mensaje: 'Atención rápida y clara. Me ayudaron con un contrato complejo y lo explicaron todo muy bien.' },
    { nombre: 'Gabriela Soto', mensaje: 'Con su asesoría resolví una disputa comercial que duraba años. Son excelentes.' },
    { nombre: 'Jorge Castillo', mensaje: 'Muy atentos y con mucho conocimiento en derecho civil. Me sentí respaldado en todo momento.' },
    { nombre: 'Sofía Méndez', mensaje: 'Profesionales y confiables. Me ayudaron con un caso de bienes raíces complicado.' },
    { nombre: 'Luis Navarro', mensaje: 'Los mejores abogados que he tenido. Siempre disponibles y eficaces.' },
    { nombre: 'Daniela Vargas', mensaje: 'Ganamos el caso gracias a su estrategia legal impecable.' },
    { nombre: 'Andrés Quesada', mensaje: 'Trato personalizado y gran experiencia. Volveré si necesito más ayuda legal.' }
  ];

  currentIndex = 0;
  cardWidth = 316; // 300px + 16px de margen

  ngOnInit(): void {
    setInterval(() => {
      if (this.currentIndex < this.testimonios.length - 2) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }, 10000);
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight() {
    if (this.currentIndex < this.testimonios.length - 2) {
      this.currentIndex++;
    }
  }
}
