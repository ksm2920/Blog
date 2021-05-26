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
      const readBlogsUrl = `${this.blogCRUDUrl}/user/1`
      return this.http.get<Blog[]>(readBlogsUrl)
    }
    
    getBlog(blogId: number): Observable<Blog> {
      const readBlogUrl = `${this.blogCRUDUrl}/${blogId}`;
      return this.http.get<Blog>(readBlogUrl)
    }

    updateBlog(blog: Blog): Observable<Blog> {
      const updateBlogUrl = `${this.blogCRUDUrl}/${blog.id}`;
      console.log(updateBlogUrl, blog)
      return this.http.put<Blog>(updateBlogUrl, blog)
    }

    addBlog(blog: Blog): Observable<Blog> {
      const postBlogUrl = `${this.blogCRUDUrl}`;
      console.log(blog);
      return this.http.post<Blog>(postBlogUrl, blog)
    }

    deleteBlog(id: number): Observable<Blog> {
      const deleteBlogUrl = `${this.blogCRUDUrl}/${id}`;
      return this.http.delete<Blog>(deleteBlogUrl);
    }
  }
  