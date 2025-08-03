export class ArticleModel {
  votes: number;
  title: string;
  link: string;
  
  constructor(title:string, link: string, votes?: number) {
    this.votes = votes || 0;
    this.title = title;
    this.link = link;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return '';
    }
  }
}