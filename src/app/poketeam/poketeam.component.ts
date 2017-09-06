import { Component, OnInit, Output, AfterContentChecked } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PoketeamSharedService } from '../poketeam.shared.service';

import * as myGlobals from '../globals';

@Component({
  selector: 'app-poketeam',
  templateUrl: './poketeam.component.html',
  styleUrls: ['./poketeam.component.css']
})
export class PoketeamComponent implements OnInit, AfterContentChecked {
  poketeam: Pokemon[] = myGlobals.poketeam;
  isPoketeam = true;
  totalPower: number = 0;

  constructor(private poketeamService: PoketeamSharedService) { }

  ngOnInit() {
      this.calculateTotalPower();
  }

  ngAfterContentChecked() {
      this.calculateTotalPower();
  }

  addPokemonToTeam(pokemon: Pokemon) {
      return false;
  }

  removePokemonFromTeam(pokemon: Pokemon) {
      this.poketeamService.removePokemonFromTeam(pokemon);
  }

  calculateTotalPower() {
      this.totalPower = 0;
      if ( this.poketeam.length < 1 ) return;
      for ( let i = 0; i < this.poketeam.length; i++ ) {
          this.totalPower += this.poketeam[i]['base_experience'];
      }
  }

}
