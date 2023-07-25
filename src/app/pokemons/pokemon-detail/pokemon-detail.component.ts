import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemonDatail: string;

  pokemonData: any;



  constructor(
    private pokemonService: PokemonService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetails(Number(this.pokemonDatail))
      .subscribe({
        next: (result) => {
         this.pokemonData = result;
        
          //agregar documento a la coleccion con id generado
          // this.firestore.collection('pokemons').add({
          //   id: result.id,
          //   name: result.name
          // }).then((res) => {
          //   console.log(res);
          // }).catch((err) => {
          //   console.log(err);
          // });
          this.firestore
            .collection('pokemons')
            .doc(result.id.toString())
            .set({
              name: result.name
            }).then((res) => {
              console.log(res);
            }).catch((err) => {
              console.log(err);
            });
        },
      });
  }
}
