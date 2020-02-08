import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { ARTICLES } from '../models/mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;

    return of(articles);
  }

  getArticle(key: string): Observable<Article> {
    const article: Article[] = ARTICLES.filter(artic => artic.key === key);
    return of(article[0]);
  }
}
