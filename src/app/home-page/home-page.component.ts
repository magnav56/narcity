import { Component, OnInit } from '@angular/core';
import { IArticle } from '../models/article';
import {
  ArticleService,
  CultureType,
  LanguageType,
} from '../services/article.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public articles: IArticle[] = [];

  constructor(private readonly articleService: ArticleService) {}

  public async ngOnInit(): Promise<void> {
    const response = (await this.articleService.getArticles(
      1,
      LanguageType.fr,
      CultureType.ca
    )) as any;
    this.articles = response.articles;
    console.log(this.articles);
  }
}
