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
      return true;
    }

    removePokemonFromTeam(pokemon) {
        console.log('delete pokemon');
        this.removeByAttribute(myGlobals.poketeam, 'id', pokemon.id);
    }

    removeByAttribute(array, attribute, value) {
        var i = array.length;
        while (i--) {
            if (array[i]
                && array[i].hasOwnProperty(attribute)
                && (arguments.length > 2 && array[i][attribute] === value)) {
                    array.splice(i, 1);
                }
        }
        return array;
    }

    checkByAttribute(array, attribute, value) {
        var i = array.length;
        while (i--) {
            if (array[i]
                && array[i].hasOwnProperty(attribute)
                && (arguments.length > 2 && array[i][attribute] === value)) {
                    return true;
                }
        }
        return false;
    }

}