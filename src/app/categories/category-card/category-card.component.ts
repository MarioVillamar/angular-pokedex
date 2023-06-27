import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() 
  pokemontype: any;
  constructor() { }

  ngOnInit(): void {
    console.log('pokemontype', JSON.stringify(this.pokemontype));
  }


}
