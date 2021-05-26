import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogCRUDUrl = 'https://mi-blogs.azurewebsites.net/api';

  constructor(
    private http: HttpClient) { }
    
    getBlogs(): Observable<Blog[]> {
      const readBlogsUrl = `${this.blogCRUDUrl}/Blogs/user/100`
      return this.http.get<Blog[]>(readBlogsUrl)
    }
    
    getBlog(id: number): Observable<Blog> {
      const readBlogUrl = `${this.blogCRUDUrl}/Blogs/${id}`;
      return this.http.get<Blog>(readBlogUrl)
    }

    updateBlog(blog: Blog): Observable<Blog> {
      const updateBlogUrl = `${this.blogCRUDUrl}/Blogs/${blog.id}`;
      console.log(updateBlogUrl, blog)
      return this.http.put<Blog>(updateBlogUrl, blog)
    }

    addBlog(blog: Blog): Observable<Blog> {
      const postBlogUrl = `${this.blogCRUDUrl}/Blogs`;
      console.log(blog);
      return this.http.post<Blog>(postBlogUrl, blog)
    }

    deleteBlog(id: number): Observable<Blog> {
      const deleteBlogUrl = `${this.blogCRUDUrl}/Blogs/${id}`;
      return this.http.delete<Blog>(deleteBlogUrl);
    }

    getPost(id: number): Observable<Post> {
      const getPostUrl = `${this.blogCRUDUrl}/Posts/${id}`;
      console.log(getPostUrl);
      return this.http.get<Post>(getPostUrl);
    }

    addPost(post: Post): Observable<Post> {
      const postPostUrl = `${this.blogCRUDUrl}/Posts`;
      return this.http.post<Post>(postPostUrl, post);
    }
  }
  