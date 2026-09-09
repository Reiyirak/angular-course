import { Component, input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';

@Component({
  imports: [GifListItem],
  selector: 'gif-list',
  templateUrl: './gif-list.html',
})
export class GifList {
  gifs = input.required<string[]>();
}
