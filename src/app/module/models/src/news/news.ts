export class News {
  status: string = '';
  totalResults: number = 0;
  articles: Articles[] = [];
}

export class Articles {
  source: ArticleSource = new ArticleSource();
  author: string = '';
  title: string = '';
  description: string = '';
  url: string = '';
  urlToImage: string = '';
  publishedAt: string = '';
  content: string = '';
}

export class ArticleSource {
  id: string = '';
  name: string = '';
}
