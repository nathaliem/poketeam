import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PokedexComponent } from '../pokedex/pokedex.component';
import { PoketeamComponent } from '../poketeam/poketeam.component';
import { SuggestiesComponent } from '../suggesties/suggesties.component';

const routes: Routes = [
    {
        path: '',
        component: PokedexComponent
    },
    {
        path: 'my-team',
        component: PoketeamComponent
    },
    {
        path: 'suggestons',
        component: SuggestiesComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
