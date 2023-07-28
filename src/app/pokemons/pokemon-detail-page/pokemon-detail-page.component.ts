import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonAddComentComponent } from '../pokemon-add-coment/pokemon-add-coment.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.scss'],
})
export class PokemonDetailPageComponent implements OnInit {
  pokemonData: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private dialog: MatDialog,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id) {
        console.log('id:', id);
        this.pokemonService.getPokemonDetails(Number(id)).subscribe((data) => {
          this.pokemonData = data;
          console.log(JSON.stringify(this.pokemonData));
        });
      }
    });
  }

  showDialog() {
    this.dialog.open(PokemonAddComentComponent).afterClosed().subscribe((result) => {
      console.log(JSON.stringify(result));
      let comments = []
      comments.push(result);
      this.firestore.collection('pokemons').doc(this.pokemonData.id.toString())
      // .update({
      //   comments: comments
      // })
      .set({
        comments: comments
      },
      {
        merge: true
      })
    });
    
  }

}
