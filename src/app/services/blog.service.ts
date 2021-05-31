import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogCRUDUrl = 'https://mi-blogs.azurewebsites.net/api';

  constructor(
    private http: HttpClient) { }
    
    getBlogs(id: number): Observable<Blog[]> {
      const readBlogsUrl = `${this.blogCRUDUrl}/Blogs/user/${id}`
      return this.http.get<Blog[]>(readBlogsUrl)
    }
    
    getBlog(id: number): Observable<Blog> {
      const readBlogUrl = `${this.blogCRUDUrl}/Blogs/${id}`;
      return this.http.get<Blog>(readBlogUrl)
    }

    updateBlog(blog: Blog): Observable<Blog> {
      const updateBlogUrl = `${this.blogCRUDUrl}/Blogs/${blog.id}`;
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

    updatePost(post: Post): Observable<Post> {
      const updatePostUrl = `${this.blogCRUDUrl}/Posts/${post.id}`;
      return this.http.put<Post>(updatePostUrl, post);
    }

    deletePost(id: number): Observable<Post> {
      const deletePostUrl = `${this.blogCRUDUrl}/Posts/${id}`;
      return this.http.delete<Post>(deletePostUrl);
    }

    addComment(comment: Comment): Observable<Comment> {
      const postCommentUrl = `${this.blogCRUDUrl}/Comments`;
      return this.http.post<Comment>(postCommentUrl, comment);
    }

    updateComment(comment: Comment): Observable<Comment> {
      const updateCommentUrl = `${this.blogCRUDUrl}/Comments/${comment.id}`;
      return this.http.put<Comment>(updateCommentUrl, comment);
    }

    deleteComment(id: number): Observable<Comment> {
      const deleteCommentUrl= `${this.blogCRUDUrl}/Comments/${id}`;
      return this.http.delete<Comment>(deleteCommentUrl);
    }
  
  }
    