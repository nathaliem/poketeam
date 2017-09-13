import { Injectable } from '@angular/core';

import * as myGlobals from './globals';

@Injectable()
export class PoketeamSharedService {

    constructor() {}

    getPoketeam() {

        var localPoketeam = localStorage.getItem('pkt');
        if ( localPoketeam ) {
            return JSON.parse(localPoketeam);
        } else {
            return [];
        }

    }

    addPokemonToTeam(pokemon) {
      // check if length isn't over 6
      // check if current pokemon isn't already in array
      if ( myGlobals.poketeam.length >= 6 ) return false;
      myGlobals.poketeam.push(pokemon);
      localStorage.setItem('pkt', JSON.stringify(myGlobals.poketeam));
      return true;
    }

    removePokemonFromTeam(pokemon) {
        this.removeByAttribute(myGlobals.poketeam, 'id', pokemon.id);
        localStorage.setItem('pkt', JSON.stringify(myGlobals.poketeam));
    }

    removeByAttribute(array, attribute, value) {
        let i = array.length;
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
        let i = array.length;
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