import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IArticle } from '../models/article';
import { BehaviorSubject } from 'rxjs';

const baseURL = 'https://www.narcity.com';

export interface ArticlesHttpResponse {
  articles: IArticle[];
  context: string;
  culture: CultureType;
  language: LanguageType;
  live: string;
  since: number;
  title: string;
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
      .get<any>(`${baseURL}/_homepage.json?page=${pageNumber}`, {
        headers: {
          'x-lilium-language': this.languageSelectedSubject.value,
          'x-lilium-culture':
            this.languageSelectedSubject.value === LanguageType.fr
              ? CultureType.ca
              : CultureType.us,
        },
      })
      .toPromise();
  }
}
