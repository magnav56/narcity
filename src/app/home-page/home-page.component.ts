import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    await this.initArticles();
    this.articleService.languageSelected$.subscribe(() => this.initArticles());
  }

  public onScroll(): void {
    this.appendArticles();
  }

  private async initArticles(): Promise<void> {
    this.articles = await this.getArticles();
    this.currentPage = 1;
  }

  private async appendArticles(): Promise<void> {
    this.currentPage++;
    const articles = await this.getArticles();
    this.articles.push(...articles);
  }

  private async getArticles(): Promise<IArticle[]> {
    const response = await this.articleService.getArticles(this.currentPage);
    return response.articles;
  }
}
