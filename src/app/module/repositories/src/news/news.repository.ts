import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '@module/models';
import { Observable } from 'rxjs';

const WEATHER_NEWS_API_KEY = '77d4b447d03e4faa82c4430d30274ee7';

@Injectable({ providedIn: 'root' })
export class NewsRepository {
  constructor(private httpCliente: HttpClient) {}

  getNews(subject: string): Observable<News> {
    return this.httpCliente.get<News>(`
    https://newsapi.org/v2/everything?q=${subject}&sortBy=popularity&apiKey=${WEATHER_NEWS_API_KEY}
    `);
  }
}
