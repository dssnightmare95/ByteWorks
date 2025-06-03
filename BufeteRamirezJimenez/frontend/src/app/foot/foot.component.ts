import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {

}
