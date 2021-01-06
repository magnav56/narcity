import { Component, Input, OnInit } from '@angular/core';
import { IArticleThumbnail } from '../models/article';

@Component({
  selector: 'app-article-thumbnail',
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.scss'],
})
export class ArticleThumbnailComponent {
  @Input() public article: IArticleThumbnail;
}
