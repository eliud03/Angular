import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {
// tslint:disable:object-literal-key-quotes
  forma: FormGroup;

  usuario: any = {
    'nombre': 'Cristian',
    'apellido': 'Zamora',
    'correo': 'cristian.zamora.ibarra@outlook.es'
  };

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([new FormControl('Correr', Validators.required)]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required)
    });

    // Establecer los valores obtenidos o guardados en el objeto hacia el formulario.
    // this.forma.setValue(this.usuario);

    this.forma.get('password2').setValidators([
      Validators.required,
      this.passwordDiferentes.bind(this.forma)
    ]);

    // Estar al pendiente de los cambios en las formas.
    // Valores
    this.forma.get('username').valueChanges.subscribe(
      data => {
        console.log(data);
      }
    );

    // Estatus
    this.forma.get('username').statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );

  }

  ngOnInit() {
  }

  agregarPasatiempos() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
  }

  // Validacion de contraseñas diferentes
  passwordDiferentes( control: FormControl): {[s:string]: boolean} {
    if (control.value !== this.controls['password1'].value){
      return {
        noiguales: true
      }
      return null;
    }
  }

  // Validar existencia del username
  existeUsuario( control: FormControl): Promise<any>|Observable<any>{
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          if(control.value === "ciz" ) {
            resolve({existe: true});
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );

    return promesa;
  }

  guardarCambios() {
    this.usuario = this.forma.value;
    console.log(this.forma.value);
    console.log(this.forma);
    console.log(this.usuario);

    this.forma.reset(this.usuario);
  }

}
