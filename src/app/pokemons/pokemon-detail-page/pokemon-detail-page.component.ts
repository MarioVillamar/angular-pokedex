import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonAddComentComponent } from '../pokemon-add-coment/pokemon-add-coment.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.scss'],
})
export class PokemonDetailPageComponent implements OnInit, OnDestroy {
  pokemonData: any;
  comments: any[] = [];
  pokemonSubscription: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private firestore: AngularFirestore,
    private dialog: MatDialog
  ) { }
  ngOnDestroy(): void {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }

  showDialog() {
    let dialogRef = this.dialog.open(PokemonAddComentComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (!!result) {
        let commentsToInsert = this.comments;
        commentsToInsert.push(result);
        this.firestore
          .collection('pokemons')
          .doc(this.pokemonData.id.toString())
          .update({
            comments: commentsToInsert,
          });
      }
    });
  }
  private loadComments() {
    this.pokemonSubscription = this.firestore
      .collection('pokemons')
      .doc(this.pokemonData.id.toString())
      .valueChanges()
      .subscribe((data: any) => {
        console.log('data', data);
        if (data.comments) {
          this.comments = data.comments;
        }
      });
  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.pokemonService.getPokemonDetails(Number(id)).subscribe((data) => {
          this.pokemonData = data;
          this.loadComments();
        });
      }
    });
  }
}
