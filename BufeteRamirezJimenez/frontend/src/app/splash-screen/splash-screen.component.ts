import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;
    }, 5000); // 5 segundos
  }
}
