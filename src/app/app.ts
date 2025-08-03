import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Article } from './article/article';
import { ArticleModel } from './article/article.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Article],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-reddit');
  articles: ArticleModel[];

  constructor() {
    this.articles = [
      new ArticleModel('Angular','http://angular.io', 3),
      new ArticleModel('Fullstack', 'http://fulstack.io', 2),
      new ArticleModel('Angular Homepage', 'http://angular.io', 1)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new ArticleModel(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): ArticleModel[] {
    return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
  }
}
