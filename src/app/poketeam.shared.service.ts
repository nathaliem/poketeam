import { Injectable } from '@angular/core';

import * as myGlobals from './globals';

@Injectable()
export class PoketeamSharedService {

    constructor() {}

    addPokemonToTeam(pokemon) {
      console.log('from service');
      // check if length isn't over 6
      // check if current pokemon isn't already in array
      if ( myGlobals.poketeam.length >= 6 ) return false;
      myGlobals.poketeam.push(pokemon);
    }

    removePokemonFromTeam(pokemon) {
        console.log('delete pokemon');
    }

}