import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IArticle, IArticleThumbnail } from '../models/article';
import { BehaviorSubject } from 'rxjs';

const baseURL = 'https://www.narcity.com';

export interface ArticlesHttpResponse {
  articles: IArticleThumbnail[];
  context: string;
  culture: CultureType;
  language: LanguageType;
  live: string;
  since: number;
  title: string;
}

export interface ArticleHttpResponse {
  article: IArticle;
}

export interface AdventureHttpResponse {
  posts: string[];
}

export enum LanguageType {
  fr = 'fr',
  en = 'en',
}

export enum CultureType {
  ca = 'ca',
  us = 'us',
}

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  public languageSelectedSubject = new BehaviorSubject<LanguageType>(
    LanguageType.fr
  );
  public languageSelected$ = this.languageSelectedSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  public async getArticles(pageNumber: number): Promise<ArticlesHttpResponse> {
    return this.http
      .get<ArticlesHttpResponse>(
        `${baseURL}/_homepage.json?page=${pageNumber}`,
        {
          headers: {
            'x-lilium-language': this.languageSelectedSubject.value,
            'x-lilium-culture':
              this.languageSelectedSubject.value === LanguageType.fr
                ? CultureType.ca
                : CultureType.us,
          },
        }
      )
      .toPromise();
  }

  public async getArticleById(id: string): Promise<ArticleHttpResponse> {
    return this.http
      .get<ArticleHttpResponse>(`${baseURL}/post/${id}`)
      .toPromise();
  }

  public async getAdventureById(id: string): Promise<AdventureHttpResponse> {
    return this.http
      .get<AdventureHttpResponse>(`${baseURL}/adventure/${id}`)
      .toPromise();
  }
}
