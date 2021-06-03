import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs = new Subject<Blog[]>();
  private selectedBlog = new Subject<Blog>();
  private selectedPost = new Subject<Post>();
  private selectedComment = new Subject<Comment>();
  blogs$ = this.blogs.asObservable();
  selectedBlog$ = this.selectedBlog.asObservable();
  selectedPost$ = this.selectedPost.asObservable();
  selectedComment$ = this.selectedComment.asObservable();

  private blogCRUDUrl = 'https://mi-blogs.azurewebsites.net/api';

  constructor(
    private http: HttpClient) { }
    
    fetchBlogs(userId: number): void {
      const readBlogsUrl = `${this.blogCRUDUrl}/Blogs/user/${userId}`
      this.http
        .get<Blog[]>(readBlogsUrl)
        .toPromise().then((data) => {
          this.blogs.next(data);
        });
    }
    
    getBlog(id: number): void {
      const readBlogUrl = `${this.blogCRUDUrl}/Blogs/${id}`;
      this.http
        .get<Blog>(readBlogUrl)
        .toPromise().then((blog) => {
          this.selectedBlog.next(blog);
        });
    }

    updateBlog(blog: Blog): void {
      const updateBlogUrl = `${this.blogCRUDUrl}/Blogs/${blog.id}`;
      this.http.put<Blog>(updateBlogUrl, blog)
        .toPromise().then((blog) => {
          console.log("Updated blog")
        });;
    }

    addBlog(blog: Blog): Promise<Blog> {
      const postBlogUrl = `${this.blogCRUDUrl}/Blogs`;
      return this.http
        .post<Blog>(postBlogUrl, blog)
        .toPromise();
    }

    deleteBlog(id: number): void {
      const deleteBlogUrl = `${this.blogCRUDUrl}/Blogs/${id}`;
      this.http.delete<Blog>(deleteBlogUrl)
      .toPromise().then((blog) => {
        console.log("A blog is deleted")
      });
    }

    getPost(id: number): void {
      const getPostUrl = `${this.blogCRUDUrl}/Posts/${id}`;
      this.http.get<Post>(getPostUrl)
      .toPromise().then((post) => {
        this.selectedPost.next(post);
      });
    }

    addPost(post: Post): Promise<Post> {
      const postPostUrl = `${this.blogCRUDUrl}/Posts`;
      return this.http.post<Post>(postPostUrl, post).toPromise();
    }

    updatePost(post: Post): void {
      const updatePostUrl = `${this.blogCRUDUrl}/Posts/${post.id}`;
      this.http.put<Post>(updatePostUrl, post)
        .toPromise().then((post) => {
          console.log("A post is updated")
      });
    }

    deletePost(id: number): void {
      const deletePostUrl = `${this.blogCRUDUrl}/Posts/${id}`;
      this.http.delete<Post>(deletePostUrl)
      .toPromise().then((post) => {
        console.log("A post is deleted")
      });;
    }

    addComment(comment: Comment): Promise<Comment> {
      const postCommentUrl = `${this.blogCRUDUrl}/Comments`;
      return this.http.post<Comment>(postCommentUrl, comment)
      .toPromise();
    }

    updateComment(comment: Comment): void {
      const updateCommentUrl = `${this.blogCRUDUrl}/Comments/${comment.id}`;
      this.http.put<Comment>(updateCommentUrl, comment)
      .toPromise().then((comment) => {
        console.log("A comment is updated")
      });
    }

    deleteComment(id: number): void {
      const deleteCommentUrl= `${this.blogCRUDUrl}/Comments/${id}`;
      this.http.delete<Comment>(deleteCommentUrl)
      .toPromise().then((comment) => {
        console.log("A comment is deleted")
      });
    }
  
  }
    