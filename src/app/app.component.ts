import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import {MyValidations} from '../app/utils/my-validations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';

miFormulario: any = new FormGroup({
  username: new FormControl('', [Validators.required, Validators.pattern(/^([a-z]|[A-Z])*$/)]),
  lastname: new FormControl('', [Validators.required,Validators.pattern(/^([a-z]|[A-Z])*$/)]),
  age: new FormControl('', [Validators.required, MyValidations.isError])
});

   guardar(){

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  } 

}
