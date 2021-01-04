import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IArticle } from '../models/article';

const baseURL = 'https://www.narcity.com';

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
  constructor(private readonly http: HttpClient) {}

  public async getArticles(
    pageNumber: number,
    language: LanguageType,
    culture: CultureType
  ): Promise<IArticle[]> {
    return this.http
      .get<any>(`${baseURL}/_homepage.json?page=${pageNumber}`, {
        headers: {
          'x-lilium-language': language,
          'x-lilium-culture': culture,
        },
      })
      .toPromise();
  }
}
