import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonsDetail } from '../../pokemons-utils/interfaces';
import { PokeApiService } from '../../pokemons-utils/services/poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

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
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id') || '1';
    if(!id) return;
    this.pokemonsService.getPokemonById(id)
    .pipe(
      tap(({id, name}) => {
        const pageTitle = `#${id} - #${name || 'Pokemon Detail'}`;
        const pageDescription = `This is the detail page for Pokemon #${name}.`;
        this.title.setTitle(pageTitle);

        this.meta.updateTag({ name: 'description', content: pageDescription });
        this.meta.updateTag({ name: 'og:title', content: pageTitle });
        this.meta.updateTag({ name: 'og:description', content: pageDescription });

        this.meta.updateTag({ name: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` });
      })
    )
    .subscribe( pokemon => {
      this.pokeDetail.set(pokemon)
    })
  }
}
