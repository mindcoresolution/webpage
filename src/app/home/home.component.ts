import { Component } from '@angular/core';
import { MatModules } from '../mat-modules';

@Component({
  selector: 'app-home',
  imports: [MatModules],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
