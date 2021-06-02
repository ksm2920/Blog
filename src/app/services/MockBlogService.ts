import { Blog } from '../models/Blog';
import { Subject } from 'rxjs';
import { BLOGS } from '../models/mock-blogs';

export class MockBlogService {
  private blogs = new Subject<Blog[]>();
  blogs$ = this.blogs.asObservable();

  constructor() { }
    
    testData = BLOGS;
    
    getBlogs(): void {
      this.blogs.next(this.testData);
    }
}