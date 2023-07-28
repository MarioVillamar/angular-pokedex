import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-add-coment',
  templateUrl: './pokemon-add-coment.component.html',
  styleUrls: ['./pokemon-add-coment.component.scss']
})
export class PokemonAddComentComponent implements OnInit {
  comment = '';
  constructor( public dialogRef:MatDialogRef<PokemonAddComentComponent>) { }

  ngOnInit(): void {
  }
  
  sendCommentSignal() {
    console.log(this.comment);
    this.dialogRef.close(
      {
        comment: this.comment
      }
    );
  }

}
