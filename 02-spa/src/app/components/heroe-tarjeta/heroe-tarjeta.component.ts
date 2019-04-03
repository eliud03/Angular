import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indice: number;

  @Output() heroeElegido: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeElegido = new EventEmitter();
  }

  ngOnInit() {
  }

  public verHeroe() {
    this.router.navigate(['/heroe', this.indice]);
    // this.heroeElegido.emit(this.indice);
  }

}
