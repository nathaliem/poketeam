import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
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
import { SuggestiesService } from './suggesties.service';

import { CapitalizePipe } from './capitalize.pipe';
import { LowercaseArrayPipe } from './lowercase_array.pipe';
import { SuggestiesComponent } from './suggesties/suggesties.component';
import { SuggestieformComponent } from './suggestieform/suggestieform.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokedexComponent,
    PoketeamComponent,
    CapitalizePipe,
    LowercaseArrayPipe,
    SuggestiesComponent,
    SuggestieformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [
      PokeapiService,
      PoketeamSharedService,
      SuggestiesService,
      HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
