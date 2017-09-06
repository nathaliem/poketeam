import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ng2-dnd';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PoketeamComponent } from './poketeam/poketeam.component';

import { PokeapiService } from './pokeapi.service';
import { PoketeamSharedService } from './poketeam.shared.service';

import { CapitalizePipe } from './capitalize.pipe';
import { LowercaseArrayPipe } from './lowercase_array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokedexComponent,
    PoketeamComponent,
    CapitalizePipe,
    LowercaseArrayPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [
      PokeapiService,
      PoketeamSharedService,
      HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
