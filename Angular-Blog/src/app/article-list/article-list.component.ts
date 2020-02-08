import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ARTICLES } from '../models/mock-articles';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

articles: Article[] = [];

  constructor(private articleSrevice: ArticlesService) { }

  ngOnInit() {
    // this.articles = ARTICLES;
    this.getArticles();
  }

  getArticles(): void {
    this.articleSrevice.getArticles().subscribe(articles => (this.articles = articles));
  }
}
