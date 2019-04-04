import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = "Cristian Zamora";
  nombreCompleto = "cristian eliud zamora ibarra";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1524.5;

  heroe = {
    nombre: "Wolverine",
    bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
    img: "assets/img/wolverine.png",
    aparicion: "1974-11-01",
    casa: "Marvel"
  }

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( ()=>resolve('Llego la promesa'), 2500 );
  });

  fecha = new Date();

  activar: boolean = true;
}
