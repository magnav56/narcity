import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-reader',
  templateUrl: './article-reader.component.html',
  styleUrls: ['./article-reader.component.scss'],
})
export class ArticleReaderComponent implements OnInit {
  public articles: IArticle[] = [];
  public adventureIds: string[] = [];
  public currentAdventureIndex = 1;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      const clickedArticle = (
        await this.articleService.getArticleById(params.id)
      ).article;
      this.articles.push(clickedArticle);

      const firstAdventure = await this.getAdventureById(params.id);
      this.adventureIds.push(...firstAdventure);
    });
  }

  public async onScroll(): Promise<void> {
    if (this.currentAdventureIndex === this.adventureIds.length - 1) {
      const nextAdventureIds = await this.getAdventureById(
        this.adventureIds[this.adventureIds.length - 1]
      );
      this.adventureIds.push(...nextAdventureIds);
    }
    const nextArticle = (
      await this.articleService.getArticleById(
        this.adventureIds[this.currentAdventureIndex]
      )
    ).article;
    this.currentAdventureIndex++;
    this.articles.push(nextArticle);
  }

  private async getAdventureById(id: string): Promise<string[]> {
    const adventureResponse = await this.articleService.getAdventureById(id);
    return adventureResponse.posts;
  }
}
