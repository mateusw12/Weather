import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articles, News } from '@module/models';
import { NewsRepository } from '@module/repositories';
import { untilDestroyed } from '@module/utils/common';
import { ErrorHandler } from '@module/utils/services';

const SUBJECT = 'alerta climático';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit, OnDestroy {
  news: News = new News();

  constructor(
    private router: Router,
    private errorHandler: ErrorHandler,
    private newsRepository: NewsRepository
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  onReturnClick(): void {
    this.router.navigate([`/menu`]);
  }

  onNavigateNews(newsUrl: string): void {
    window.open(newsUrl, '_blank');
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString('pt-BR');
  }

  ngOnDestroy(): void {}

  private loadData(): void {
    this.newsRepository
      .getNews(SUBJECT)
      .pipe(untilDestroyed(this))
      .subscribe(
        (news) => this.populateNews(news),
        (error) => this.handleError(error)
      );
  }
  private populateNews(news: News): void {
    const articleDictionary = this.createDictionary(news);
    const articles: Articles[] = [];

    for (const [key, item] of articleDictionary) {
      articles.push(item);
    }

    this.news.articles = articles;
  }

  private createDictionary(news: News): Map<string, Articles> {
    const dictionary = new Map<string, Articles>();
    for (const item of news.articles) {
      const dictionaryItem = dictionary.get(item.title);
      if (dictionaryItem) continue;
      dictionary.set(item.title, item);
    }
    return dictionary;
  }

  private handleError(error: unknown): void {
    this.errorHandler.present(error);
  }
}
