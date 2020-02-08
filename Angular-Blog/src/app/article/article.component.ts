import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../Services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(private route: ActivatedRoute,
              private articleService: ArticlesService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      const key = params.key;
      this.articleService.getArticle(key).subscribe(currentArticle => {
        if (currentArticle === undefined || currentArticle === null) {
          this.router.navigateByUrl('notfound');
          return;
        }
        this.article = currentArticle;
      });
    });
  }

}
