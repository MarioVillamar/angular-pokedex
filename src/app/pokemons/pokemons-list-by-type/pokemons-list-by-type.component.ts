import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons-list-by-type',
  templateUrl: './pokemons-list-by-type.component.html',
  styleUrls: ['./pokemons-list-by-type.component.scss']
})
export class PokemonsListByTypeComponent implements OnInit {

  pokemonList:any;

  constructor(private CategoryService : CategoryService
    ,private activateRouter: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((param)=>{
    let id = param.get('id');
    this.CategoryService.getPokemonsTypyes(Number(id)).subscribe({
      next:(result)=> {this.pokemonList = result.pokemon}
    })
  });
  }

}
