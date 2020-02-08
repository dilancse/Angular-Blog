import { Article } from './article';

export const ARTICLES: Article[] = [
  { id: 1,
    title: 'First Article',
    content: 'This is first article content',
    description: 'this is first article description',
    key: 'First-Article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
  },
  { id: 2,
    title: 'Second Article',
    content: 'This is Second article content',
    description: 'this is Second article description',
    key: 'Second-Article',
    date: new Date(),
    imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
  }
];
