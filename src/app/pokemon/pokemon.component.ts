import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import * as myGlobals from '../globals';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
   @Input() pokemon: Pokemon;
   @Input() isPokedex: boolean;
   @Input() isPoketeam: boolean;
   @Output() pokemonToAdd: EventEmitter<Pokemon> = new EventEmitter();
   poketeam: Pokemon[] = myGlobals.poketeam;

  constructor() {
  }

  ngOnInit() {
  }

  addToTeam(pokemon: Pokemon) {
      this.pokemonToAdd.emit(pokemon);
  }

  removeFromTeam(pokemon: Pokemon) {
    this.pokemonToAdd.emit(pokemon);
  }

}
