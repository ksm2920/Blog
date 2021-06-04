import { Blog } from '../models/Blog';
import { Observable, Subject } from 'rxjs';
import { BLOGS } from '../models/mock-blogs';
import { of } from 'rxjs';

export class MockBlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();
  
  constructor() { }
  
  testData = BLOGS;
  
  fetchBlogs(): void {
    this.blogs.next(this.testData);
  }
}