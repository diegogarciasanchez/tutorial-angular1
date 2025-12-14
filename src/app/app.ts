import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.css',
})
export class AppComponent {
  titulo = signal('Tutorial académico sobre el framework Angular');
}