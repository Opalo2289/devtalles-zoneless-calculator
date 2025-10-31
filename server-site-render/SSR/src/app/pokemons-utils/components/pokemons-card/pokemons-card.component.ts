import { Component, computed, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pokemons-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemons-card.component.html',
  styleUrl: './pokemons-card.component.css'
})
export class PokemonsCardComponent {
  public inputPokeCard = input.required<SimplePokemon>();
  public pokemonsImage = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.inputPokeCard().id}.png`;
  })
}
