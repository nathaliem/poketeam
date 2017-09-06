import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../pokemon.model';
import * as myGlobals from '../globals';
import { PoketeamSharedService } from '../poketeam.shared.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
   @Input() pokemon: Pokemon;
   @Input() isPokedex: boolean;
   @Input() isPoketeam: boolean;
   @ViewChild('content') content;
   @Output() pokemonToAdd: EventEmitter<Pokemon> = new EventEmitter();
   poketeam: Pokemon[] = myGlobals.poketeam;
   closeResult: string;

  constructor(private modalService: NgbModal, private poketeamService: PoketeamSharedService) {
  }

  ngOnInit() {
  }

  addToTeam(pokemon: Pokemon) {
    this.pokemonToAdd.emit(pokemon);
    //this.open(this.content);
  }

  removeFromTeam(pokemon: Pokemon) {
    this.pokemonToAdd.emit(pokemon);
  }

  open(content) {
    this.modalService.open(content);
  }

  isPartOfTeam(pokemon: Pokemon) {
    //console.log(this.poketeamService.checkByAttribute(this.poketeam, 'id', pokemon['id']));
    return this.poketeamService.checkByAttribute(this.poketeam, 'id', pokemon['id']);
  }

}
