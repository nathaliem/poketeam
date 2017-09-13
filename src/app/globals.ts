import { Pokemon } from './pokemon.model';

export var poketeam : Pokemon[] = (localStorage.getItem('pkt')) ? JSON.parse(localStorage.getItem('pkt')) : [];