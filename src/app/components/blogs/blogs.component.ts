import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';
import { BLOGS } from '../../models/mock-blogs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  
  blogs: Blog[] = [];
  selectedBlog?: Blog;

  constructor(private service: BlogService) { }
  
  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.service.getBlogs()
    .subscribe(blogs => this.blogs = blogs);
  }
  
  delete(blog: Blog): void {
    this.blogs = this.blogs.filter(b => b !== blog);
    this.service.deleteBlog(blog.id).subscribe();
  }
}
