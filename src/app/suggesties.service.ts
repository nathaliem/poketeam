import { Injectable } from '@angular/core';

@Injectable()
export class SuggestiesService {
  suggesties = [
      {
          name: 'Nathalie Maes',
          suggestion: 'Ik zou het leuk vinden als je de tweede generatie zou kunnen toevoegen!'
      },
      {
          name: 'Bastogne Duo',
          suggestion: 'Ik ben maar een koekje.'
      },
      {
          name: 'Suzy Lotus',
          suggestion: 'Nice.'
      }
  ];

  constructor() { }

  getSuggesties(){
      return this.suggesties;
  }

  addSuggestie(suggestie) {
      this.suggesties.unshift(suggestie);
  }

}
