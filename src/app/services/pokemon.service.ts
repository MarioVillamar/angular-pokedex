import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient:HttpClient) { }

  getPokemonDetails(id:number):Observable<any>{
    return this.httpClient.get(`${env.pokedexBaseUrl}/pokemon/${id}`);
  }
  
  getPokemons():Observable<any>{
    return this.httpClient.get(`${env.pokedexBaseUrl}/pokemon`);
  }
}
