import { Component } from '@angular/core';
import { ComponenteComponent } from "./componente/componente.component";

@Component({
  selector: 'app-root',
  imports: [ComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Projetinho';
}
