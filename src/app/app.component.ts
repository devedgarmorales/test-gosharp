import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TraductorComponent } from './traductor/traductor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TraductorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
