import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { GiphyResponse } from "../interfaces/giphy.interfaces";
import { environment } from "@environments/environment";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 100,
        rating: 'r'
      }
    })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
        console.log({ gifs });
      });
  }
}
