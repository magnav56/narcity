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

export interface IArticle {
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
