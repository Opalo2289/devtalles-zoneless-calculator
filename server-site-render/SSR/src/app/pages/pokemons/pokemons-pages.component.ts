import { ApplicationRef, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonsListComponent } from "../../pokemons-utils/components/pokemons-list/pokemons-list.component";
import { PokemonSkeletonComponent } from "./ui/pokemon-skeleton/pokemon-skeleton.component";
import { PokeApiService } from '../../pokemons-utils/services/poke-api.service';
import { SimplePokemon } from '../../pokemons-utils/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-pages',
  standalone: true,
  imports: [PokemonsListComponent, PokemonSkeletonComponent],
  templateUrl: './pokemons-pages.component.html',
  styleUrl: './pokemons-pages.component.css'
})
export default class PokemonsPagesComponent implements OnInit {

  private pokeApiService = inject(PokeApiService);
  public pokemonsview = signal<SimplePokemon[]>([]);
  private route = inject(ActivatedRoute)
  private router = inject(Router);
  private title = inject(Title);

  public currentPage = toSignal<number>(
  this.route.queryParamMap.pipe(
    map(paramMap => Number(paramMap.get('page') ?? 1)),
    map(page => (isNaN(page) ? 1 : +page)),
    map(page => Math.max(1, page))
  )
);
  // public isLoading = signal(true);
  // private appRef = inject(ApplicationRef);

  // private $appStable = this.appRef.isStable.subscribe(isStable => {
  //     console.log({isStable});
  // });

  ngOnInit(): void {
    this.loadPokemon();
    console.log("current",this.currentPage())
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 5000);
  }

  loadPokemon(netxpage: number = 0): void {
    const pageToLoad = this.currentPage()! + netxpage;
    this.pokeApiService.getPokemons(pageToLoad)
    .pipe(
      tap(()=> this.router.navigate([], {queryParams: {page: pageToLoad}})),
      tap(()=> this.title.setTitle(`Listado de Pokemons - Pagina ${pageToLoad}`))
    )

    .subscribe(pokemons => {
      this.pokemonsview.set(pokemons);
    });
  }

  // onDestroy(): void {
  //   this.$appStable.unsubscribe();
  // }
}
