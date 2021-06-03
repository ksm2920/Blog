import { Blog } from '../models/Blog';
import { Observable, Subject } from 'rxjs';
import { BLOGS } from '../models/mock-blogs';
import { of } from 'rxjs';

export class MockBlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();
  
  constructor() { }
  
  // testData = BLOGS;
  
  testData: Blog[] = [
    {id: 1, title: "Blog1", userId: 1, posts: []},
    {id: 2, title: "Blog2", userId: 1, posts: []},
    {id: 3, title: "Blog3", userId: 1, posts: []},
    {id: 4, title: "Blog4", userId: 1, posts: []},
    {id: 5, title: "Blog5", userId: 1, posts: []},
  ]
  
  fetchBlogs(): void {
    this.blogs.next(this.testData);
  }
}