import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import { Post2 } from '../post2.model';

//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private http2: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

    getPostsDataNews(): Observable<any> {
      return this.http2.get("https://newsapi.org/v2/top-headlines?sources=the-irish-times&apiKey=2a75bd92c42a4a7a922d6bf591e75b0d");          
    }
    addPostNews(title1: String, description: String): Observable<any> {
      const post2: Post2 = {title1: title1, description: description};
      return this.http.post("http://localhost:8081/news",post2);
    }


  addPost(title: string, content: string): Observable<any> {
    const post: Post = {title: title, content: content};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }

  updatePost(id:String, title: string, content: string): Observable<any> {
    const post: Post = {title: title, content: content};
  return this.http.put("http://localhost:8081/api/posts/"+id, post);
  }
}
