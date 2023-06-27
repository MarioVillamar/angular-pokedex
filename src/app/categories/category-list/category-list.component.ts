import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    //llamar al servicio que tiene instaciado mi componete 
    console.log(this.categoryService.getPokemonCategories()
    ) 
   }

}
