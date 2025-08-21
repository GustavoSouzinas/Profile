import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css'
})
export class ComponenteComponent {

form = new FormGroup({

  nome: new FormControl

})

active = true

agir(){

if (this.active === false){
  this.active = true
} else { this.active = false}


}

}


