import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private titleServise: Title) { }

  setPageTitle(title: string) {
    this.titleServise.setTitle(title);
  }
}
