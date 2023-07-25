import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pokemon-favorite',
  templateUrl: './pokemon-favorite.component.html',
  styleUrls: ['./pokemon-favorite.component.scss']
})
export class PokemonFavoriteComponent implements OnInit, OnDestroy {

  @Input()
  pokemonData: any;

  data:any;

  subscrition:Subscription;
  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
    console.log(this.pokemonData.id);
     
    this.subscrition = this.firestore.collection('pokemons').doc(this.pokemonData.id.toString())
    .valueChanges()
    .subscribe((res) => {this.data = res});
  }

  marksAsFavorite(value:boolean){
    this.firestore.collection('pokemons').doc(this.pokemonData.id.toString()).update(
      {
        isFavorite: value
      }
    );
  }

  ngOnDestroy(): void {
    if(this.subscrition){
      this.subscrition.unsubscribe();
    }
  }

}
