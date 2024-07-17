import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as data from './../Model/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Corruption-Folio';
  leaders: any = (data as any).default;

}
