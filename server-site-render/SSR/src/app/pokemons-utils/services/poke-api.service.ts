import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { PokemonApiResponse, PokemonsDetail, SimplePokemon } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private http = inject(HttpClient);
  private readonly BASE_URL = 'https://pokeapi.co/api/v2';

  public getPokemons(page: number): Observable<SimplePokemon[]> {

    if (page !== 0) {
      --page;
    }

    page = Math.max(0, page);

    return this.http.get<PokemonApiResponse>(
      `${this.BASE_URL}/pokemon?offset=${page * 20}0&limit=20`
    ).pipe(
      map( reponse => {
        const pokemons: SimplePokemon[] = reponse.results.map(pokemon => ({
          id: pokemon.url.split('/').at(-2) ?? '',
          name: pokemon.name
        }))
        return pokemons;
      }),
      // tap( pokemons => console.log({pokemons}) )
    );
  }

  public getPokemonById(id: string): Observable<PokemonsDetail> {
    return this.http.get<PokemonsDetail>(`${this.BASE_URL}/pokemon/${id}`);
  }
}
