import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { GiphyResponse } from "../interfaces/giphy.interfaces";
import { environment } from "@environments/environment";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(true);

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
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      });
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 100,
        rating: 'r',
        q: query,
      }
    })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemToGifArray(items)),
      );
    // .subscribe((resp) => {
    //   const gifs = GifMapper.mapGiphyItemToGifArray(resp.data);
    //   console.log({ search: gifs });
    // });
  }
}
