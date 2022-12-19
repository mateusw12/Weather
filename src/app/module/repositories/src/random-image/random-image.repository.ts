import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchImage } from '@module/models';
import { Observable } from 'rxjs';

const API_KEY = 'tCBqZ4QFS-EOLn4YUfeWMmHzM5AwKd4JhGmhU9zeh-A';

@Injectable({ providedIn: 'root' })
export class RandomImageRepository {
  constructor(private httpCliente: HttpClient) {}

  getRandomImage(sourceNews: string): Observable<SearchImage> {
    return this.httpCliente.get<SearchImage>(`
    https://api.unsplash.com/search/photos?query=${sourceNews}&client_id=${API_KEY}`);
  }

}
