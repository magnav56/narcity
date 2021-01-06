import { CultureType, LanguageType } from '../services/article.service';

interface IEdition {
  id: string;
  level: number;
  displayname: string;
  slug: string;
  description: string;
  seodescription: string;
  logo: string;
  featuredimage: string;
  color: string;
  weathergeo: string;
  weatherunit: number;
  administrativeArea: string;
  country: string;
}

interface IAuthor {
  id: string;
  username: string;
  displayname: string;
  avatarurl: string;
  avatarmini: string;
  slug: string;
}

export interface IArticleThumbnail {
  id: string;
  headline: string;
  subtitle: string;
  name: string;
  agegate: true;
  score: number;
  shares: number;
  path: string;
  thumbnail: string;
  large: string;
  square: string;
  totalComments: number;
  totalCommentsAndReplies: number;
  commentsdisabled: true;
  publishedDate: string;
  lang: string;
  featuredImage: string;
  editions: IEdition[];
  author: IAuthor;
}

export interface IArticle {
  id: string;
  headline: string;
  subtitle: string;
  seoheadline: string;
  seosubtitle: string;
  markup: string;
  viaURLOnly: false;
  disableamp: false;
  nsfw: false;
  agegate: false;
  totalComments: number;
  totalCommentsAndReplies: number;
  commentsdisabled: false;
  publishedDate: string;
  tags: [];
  lastUpdated: string;
  isSponsored: false;
  shares: 0;
  lang: LanguageType;
  culture: CultureType;
  path: string;
  featuredImage: {
    id: string;
    url: string;
    sizedUrl: string;
    artistname: string;
    artisturl: string;
  };
  editions: IEdition[];
  author: IAuthor;
}
