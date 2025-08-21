import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteComponent } from "./componente/componente.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projetinho';
}
