import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    frase: any = {
        mensaje: 'Mensaje de prueba',
        autor: 'Autor prueba'
    }

    mostrar: boolean = false;

    objetos: Array<string> = ['Flores', 'Mesas', 'Monitores'];
}