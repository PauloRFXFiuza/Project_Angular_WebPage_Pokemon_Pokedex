import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  template: `<p>pokemon-list works!</p>`,
  styleUrls: ['./pokemon-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent { }
