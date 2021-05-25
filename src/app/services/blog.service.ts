import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogCRUDUrl = 'https://mi-blogs.azurewebsites.net/api/Blogs';
  constructor(
    private http: HttpClient) { }
    
    getBlogs(): Observable<Blog[]> {
      const readUrl = `${this.blogCRUDUrl}/user/1`
      return this.http.get<Blog[]>(readUrl)
    }
    
    getBlog(blogId: number): Observable<Blog> {
      const readUrl = `${this.blogCRUDUrl}/${blogId}`;
      return this.http.get<Blog>(readUrl)
    }

    updateBlog(blog: Blog): Observable<Blog> {
      const updateUrl = `${this.blogCRUDUrl}/${blog.id}`;
      console.log(updateUrl, blog)
      return this.http.put<Blog>(updateUrl, blog)
    }
  }
  