import { Component } from '@angular/core';
import { ArticleService, LanguageType } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Narcity';
  public selectedLanguage: LanguageType = LanguageType.fr;
  public LanguageType = LanguageType;

  constructor(private readonly articleService: ArticleService) {}

  public toggleLanguage(): void {
    if (this.selectedLanguage === LanguageType.en) {
      this.selectedLanguage = LanguageType.fr;
    } else if (this.selectedLanguage === LanguageType.fr) {
      this.selectedLanguage = LanguageType.en;
    }
    this.articleService.languageSelectedSubject.next(this.selectedLanguage);
  }
}
