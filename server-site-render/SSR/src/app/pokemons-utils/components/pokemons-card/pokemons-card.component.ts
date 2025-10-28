import { Component, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'app-pokemons-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemons-card.component.html',
  styleUrl: './pokemons-card.component.css'
})
export class PokemonsCardComponent {
  public inputPokeCard = input.required<SimplePokemon>();
}
