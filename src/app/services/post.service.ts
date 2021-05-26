import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postCRUDUrl = 'https://mi-blogs.azurewebsites.net/api/Posts';

  constructor(private http: HttpClient) { }

   getPost(id: number): Observable<Post> {
      const getPostUrl = `${this.postCRUDUrl}/${id}`;
      console.log(getPostUrl);
      return this.http.get<Post>(getPostUrl);
    }
}
