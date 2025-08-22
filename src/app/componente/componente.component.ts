import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-componente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css',

})
export class ComponenteComponent {

form = new FormGroup({

  nome: new FormControl('',Validators.required),
  idade: new FormControl('',Validators.required),
  especialidade: new FormControl('',Validators.required)

})

erro: string = ''
generating = false
active = true


agir(){
  if (this.active === false){
    this.active = true
  } else { this.active = false}
}

gerar(){
  if(this.form.valid){
  this.generating = true
  this.erro = ''
  }else{
    this.erro = "Preencha os campos corretamente!";
  }
}



}


