import { Pokemon } from './pokemon.model';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class PokeapiService {
    url = 'assets/data/pokemon.json';

  constructor(private http:Http) { }

  getPokemon() {
      return this.http.get(this.url)
                      .map(res => res.json() as Pokemon[]);
  }

}
