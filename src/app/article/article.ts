import { Component, HostBinding, Input } from '@angular/core';
import { ArticleModel } from './article.model';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: ArticleModel;

  constructor() {
    this.article = new ArticleModel(
      'Angular',
      'http://angular.io',
      10);
  }

  voteUp() {
    this.article.votes += 1;
    return false;
  }

  voteDown() {
    this.article.votes -= 1;
    return false;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.article.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return '';
    }
  }
}
