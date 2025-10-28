import { Component } from '@angular/core';
import { PokemonsCardComponent } from "../../../../pokemons-utils/components/pokemons-card/pokemons-card.component";

@Component({
  selector: 'app-pokemon-skeleton',
  standalone: true,
  imports: [PokemonsCardComponent],
  templateUrl: './pokemon-skeleton.component.html',
  styleUrl: './pokemon-skeleton.component.css'
})
export class PokemonSkeletonComponent {

}
