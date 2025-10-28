import { ApplicationRef, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonsListComponent } from "../../pokemons-utils/components/pokemons-list/pokemons-list.component";
import { PokemonSkeletonComponent } from "./ui/pokemon-skeleton/pokemon-skeleton.component";
import { PokeApiService } from '../../pokemons-utils/services/poke-api.service';
import { SimplePokemon } from '../../pokemons-utils/interfaces';

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
  // public isLoading = signal(true);
  // private appRef = inject(ApplicationRef);

  // private $appStable = this.appRef.isStable.subscribe(isStable => {
  //     console.log({isStable});
  // });

  ngOnInit(): void {
    this.loadPokemon();
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 5000);
  }

  loadPokemon(netxpage: number = 0): void {
    this.pokeApiService.getPokemons(netxpage).subscribe(pokemons => {
      console.log({pokemons});
      this.pokemonsview.set(pokemons);
    });
  }

  // onDestroy(): void {
  //   this.$appStable.unsubscribe();
  // }
}
