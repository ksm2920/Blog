import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  blogForm = this.fb.group({
    id: [''],
    title: [''],
    userId: [''],
    posts: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(
    private service: BlogService,
    private fb: FormBuilder
    ) { }
  
  ngOnInit(): void {
   
  }

  add(blog: Blog): void {
    blog = new Blog( 0, blog.title, blog.userId, []) ;
    if(!blog) {
      return;
    }
    this.service.addBlog(blog)
    .subscribe(blog => {
      this.blogs.push(blog);
    })
  }

  getBlogs(blog: Blog): void {
    this.service.getBlogs(blog.userId)
    .subscribe(blogs => this.blogs = blogs);
  }
  
  delete(blog: Blog): void {
    this.blogs = this.blogs.filter(b => b !== blog);
    this.service.deleteBlog(blog.id).subscribe();
  }
}
