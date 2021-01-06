import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleReaderComponent } from './article-reader/article-reader.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'articles', component: HomePageComponent },
  { path: 'articles/:id', component: ArticleReaderComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' }, // redirect to 'articles' as the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
