import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IArticleThumbnail } from '../models/article';
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
  public articles: IArticleThumbnail[] = [];

  private currentPage: number;

  constructor(
    private readonly articleService: ArticleService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public async ngOnInit(): Promise<void> {
    await this.initArticles();
    this.articleService.languageSelected$.subscribe(() => this.initArticles());
    this.activatedRoute.params.subscribe((x) => console.log(x));
  }

  public onScroll(): void {
    this.appendArticles();
  }

  private async initArticles(): Promise<void> {
    this.currentPage = 1;
    this.articles = await this.getArticles();
  }

  private async appendArticles(): Promise<void> {
    this.currentPage++;
    const articles = await this.getArticles();
    this.articles.push(...articles);
  }

  private async getArticles(): Promise<IArticleThumbnail[]> {
    const response = await this.articleService.getArticles(this.currentPage);
    return response.articles;
  }
}
