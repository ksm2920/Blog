import { Injectable } from '@angular/core';
import { BLOGS } from '../models/mock-blogs';
import { Blog } from '../models/Blog';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://mi-blogs.azurewebsites.net/api/Blogs';
  constructor(
    private http: HttpClient) { }
  getBlogs(): Observable<Blog[]> {
    const url = `${this.blogUrl}/user/1`
    return this.http.get<Blog[]>(url)
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this.blogUrl}/${id}`;
    return this.http.get<Blog>(url)
  }
}
