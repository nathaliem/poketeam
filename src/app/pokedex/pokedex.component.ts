import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from '../pokemon.model';

import { PokeapiService } from '../pokeapi.service';
import { PoketeamSharedService } from '../poketeam.shared.service';

import * as myGlobals from '../globals';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex = [];
  isPokedex = true;
  poketeam: Pokemon[] = myGlobals.poketeam;
  isDragging: boolean = false;

  constructor(private pokeapiService: PokeapiService, private poketeamService: PoketeamSharedService) {

  }

  ngOnInit() {
      this.pokeapiService.getPokemon()
                          .subscribe(data => {
                              this.createPokemonObjects(data);
                          });
  }

  createPokemonObjects(data: object) {

      var count = Object.keys(data).length;

      for (let i = 0; i < count; i++) {
          this.pokedex.push(
                new Pokemon(
                    i,
                    data[i]['Name'],
                    data[i]['MaxCP'],
                    data[i]['Height']['Minimum'] + ' - ' + data[i]['Height']['Maximum'],
                    data[i]['Weight']['Minimum'] + ' - ' + data[i]['Weight']['Maximum'],
                    data[i]['Number'],
                    data[i]['Types'],
                    this.removeSpecialCharacters(data[i]['Name'])
                    )
                );
      }

  }

  removeSpecialCharacters(string: string) : string {
      return string.replace(/(?!\w|\s)./g, '')
                    .replace(/\s+/g, '')
                    .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
  }

  addPokemonToTeam(pokemon: Pokemon) {
      this.poketeamService.addPokemonToTeam(pokemon);
  }

  removePokemonFromTeam(pokemon: Pokemon) {
      return false;
  }

  onDragStart() {
    this.isDragging = true;
  }

  onDragEnd() {
    this.isDragging = false;
  }

  onDropSuccess($event) {
    let pokemonToAdd = $event.dragData;
    this.addPokemonToTeam(pokemonToAdd);
  }

}
