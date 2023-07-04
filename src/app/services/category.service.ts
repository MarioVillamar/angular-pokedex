import { Injectable } from '@angular/core';
import { Observable,of,delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor(private http: HttpClient) {}


  // categories = [
  //   {
  //     id: '1',
  //     name: 'Normal',
  //     imageUrl:
  //       'https://ui-avatars.com/api/?font-size=0.33&size=300&name=normal',
  //   },

  //   {
  //     id: '2',
  //     name: 'Fighting',
  //     imageUrl:
  //       'https://ui-avatars.com/api/?font-size=0.33&size=300&name=fighting',
  //   },

  //   {
  //     id: '3',
  //     name: 'Flying',
  //     imageUrl:
  //       'https://ui-avatars.com/api/?font-size=0.33&size=300&name=flying',
  //   },

  //   {
  //     id: '4',
  //     name: 'Poison',
  //     imageUrl:
  //       'https://ui-avatars.com/api/?font-size=0.33&size=300&name=poison',
  //   },
  // ];

  getPokemonCategories():Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/type');
  }
 
  getPokemonsTypyes(id: number):Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/type/${id}`);
  }
}
