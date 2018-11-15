import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news: any[] = [];
  constructor(private postserve: PostService ) { }

  ngOnInit() {
    this.postserve.getPostsDataNews().subscribe(data => {
      this.news = data.articles;
      console.log(data);
  });
 }
}
