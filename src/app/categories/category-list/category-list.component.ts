import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit ,OnDestroy{
  categoryList: any[];

  constructor(private categoryService: CategoryService) {}

  suscriberCategoryList: Subscription;
  ngOnInit(): void {
    //llamar al servicio que tiene instaciado mi componete
    // console.log(this.categoryService.getPokemonCategories()
    // )
    // this.categoryList = this.categoryService.getPokemonCategories();
    this.suscriberCategoryList = this.categoryService
      .getPokemonCategories()
      .subscribe({
        next: (result) => {
          console.log(JSON.stringify(result));
          this.categoryList = result.results;
        },
      });
  }
  ngOnDestroy(): void {
    if(this.suscriberCategoryList){
      this.suscriberCategoryList.unsubscribe();
    }
  }
}
