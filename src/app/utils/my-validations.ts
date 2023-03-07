import {AbstractControl} from '@angular/forms'

export class MyValidations{


    static isError(control: AbstractControl){
        const value = control.value;
        if (value <18 || value>65) {
            return{isError: true}
        }
        return null;
    } 
}