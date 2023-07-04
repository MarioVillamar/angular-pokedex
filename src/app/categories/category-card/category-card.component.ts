import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() 
  pokemonType: any;
  imageUrl:String;
  categoryType: number;

  constructor() { }

  ngOnInit(): void {
    console.log('pokemonType', JSON.stringify(this.pokemonType));
    this.imageUrl = `https://ui-avatars.com/api/?font-size=0.33&size=300&name=${this.pokemonType.name}`;
    // this.categoryType = this.pokemonType.url.split('/')[6];
    this.categoryType = this.pokemonType.url.slice(0,-1).split('/').pop();
    
  }

}
