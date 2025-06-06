import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import { FootComponent } from './foot/foot.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { HeaderSectionComponent } from './header-section/header-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashScreenComponent, HeaderSectionComponent, FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
