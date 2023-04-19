import { Component, OnInit } from '@angular/core';
import {IArticle} from "./IArticle";
import {ArticleDao} from "./ArticleDao";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: IArticle[] = ArticleDao.articles;

  constructor() { }

  ngOnInit(): void {
  }
  addNewArticle(titleName: any,urlNew: any){
    const article:IArticle={
      title: titleName,
      url: urlNew
    }
    this.articles.push(article);
  }








}
