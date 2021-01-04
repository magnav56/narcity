import { ThrowStmt } from '@angular/compiler';
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
  private currentPage = 1;

  constructor(private readonly articleService: ArticleService) {}

  public async ngOnInit(): Promise<void> {
    this.articles = await this.getArticles();
    this.currentPage++;
  }

  public onScroll(): void {
    this.appendArticles();
  }

  private async appendArticles(): Promise<void> {
    const articles = await this.getArticles();
    this.currentPage++;
    this.articles.push(...articles);
  }

  private async getArticles(): Promise<IArticle[]> {
    const response = await this.articleService.getArticles(
      this.currentPage,
      LanguageType.fr,
      CultureType.ca
    );
    return response.articles;
  }
}
