import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Router, RouterModule } from '@angular/router';
import { PokemonsListByTypeComponent } from './pokemons-list-by-type/pokemons-list-by-type.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonsListByTypeComponent,
    PokemonDetailComponent

  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    RouterModule.forChild([
      {path: 'pokemon-list', component: PokemonListComponent},
      {path:'pokemon-list-by-type/:id',component:PokemonsListByTypeComponent}
    ])
  ]
})
export class PokemonsModule { }
