import { Component, OnInit, Output, AfterContentChecked, OnChanges } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PoketeamSharedService } from '../poketeam.shared.service';
import { DndModule } from 'ng2-dnd';

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
  dragOperation:boolean = false;

  constructor(private poketeamService: PoketeamSharedService) { }

  ngOnInit() {
      //this.calculateTotalPower();
      this.getPoketeam();
  }

  ngAfterContentChecked() {
      //this.calculateTotalPower();
  }

  getPoketeam() {
     this.poketeam = this.poketeamService.getPoketeam();
  }

  addPokemonToTeam(pokemon: Pokemon) {
      return false;
  }

  removePokemonFromTeam(pokemon: Pokemon) {
      this.poketeamService.removePokemonFromTeam(pokemon);
      this.getPoketeam(); // Update Pokéteam
  }

  calculateTotalPower() {
      this.totalPower = 0;
      if ( this.poketeam.length < 1 ) return;
      for ( let i = 0; i < this.poketeam.length; i++ ) {
          this.totalPower += this.poketeam[i]['base_experience'];
      }
  }

}
