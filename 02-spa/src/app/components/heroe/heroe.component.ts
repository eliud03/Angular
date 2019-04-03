import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  showDC = false;
  showMarvel = false;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      // console.log(params);
      this.heroe = this._heroesService.getHeroe( params.id );
      if (this.heroe.casa == "DC") {
        this.showDC = true;
      } else if (this.heroe.casa == "Marvel") {
        this.showMarvel = true;
      }
      
    });
   }

  ngOnInit() {
  }

  verHeroes() {
    this.router.navigate(['/heroes']);
  }

}
