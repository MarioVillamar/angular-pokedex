import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemonDatail: string;

  pokemonName: string;
  pokemonImageUrl: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetails(Number(this.pokemonDatail))
      .subscribe({
        next: (result) => {
         
          this.pokemonImageUrl = result.sprites.front_default;
          this.pokemonName = result.name;
        },
      });
  }
}
