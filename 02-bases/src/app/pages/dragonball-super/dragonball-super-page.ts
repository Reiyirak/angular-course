import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball-service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPageComponent {
  // constructor(
  //   public dragonballService: DragonballService
  // ) {}

  public dragonballService = inject(DragonballService);

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8000 },
  // ]);

  // addCharacter(character: Character) {
  //   this.characters.update((list) => [...list, character]);
  // }
}
