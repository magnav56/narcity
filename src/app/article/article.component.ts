import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() public article: IArticle;
}
