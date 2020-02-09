import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { ARTICLES } from '../models/mock-articles';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    // const articles: Article[] = ARTICLES;

    // return of(articles);
    return this.http.get<Article[]>('http://localhost:8000/articles');
  }

  getArticle(key: string): Observable<Article> {
    // const article: Article[] = ARTICLES.filter(artic => artic.key === key);
    // return of(article[0]);

    return this.http.get<Article>('http://localhost:8000/articles/' + key);
  }
}
