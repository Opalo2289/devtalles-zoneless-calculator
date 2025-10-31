import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonsDetail } from '../../pokemons-utils/interfaces';
import { PokeApiService } from '../../pokemons-utils/services/poke-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-page-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-page-detail.component.html',
  styleUrl: './pokemon-page-detail.component.css'
})
export default class PokemonPageDetailComponent implements OnInit {
  public pokeDetail = signal<PokemonsDetail | null>(null)
  private pokemonsService = inject(PokeApiService)
  private activateRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id') || '1';
    this.pokemonsService.getPokemonById(id).subscribe( pokemon => {
      this.pokeDetail.set(pokemon)
    })
  }
}
