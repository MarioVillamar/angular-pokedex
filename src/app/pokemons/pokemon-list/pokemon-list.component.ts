import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonsIds: any[];

  constructor(private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe( {
      next: (response) => {
        this.pokemonsIds = [];
        response.results.forEach((element:any) => {
        this.pokemonsIds.push(element.url.slice(0,-1).split('/').pop());
        });
      }
    })
  }
}
