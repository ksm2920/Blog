import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    title: ['', [Validators.required, Validators.minLength(3)]],
    userId: ['', Validators.required],
    posts: this.fb.array([
      this.fb.control('')
    ])
  })

  constructor(
    private service: BlogService,
    private fb: FormBuilder
    ) { }
  
  ngOnInit(): void {
    console.log("blog component initated")
  }

  get title() {
    return this.blogForm.get('title');
  }

  get userId() {
    return this.blogForm.get('userId');
  }

  async addBlog(blog: Blog) {
    blog = new Blog( 0, blog.title, blog.userId, []) ;
    if(!blog) {
      return;
    }
    let fetchedBlog = await this.service.addBlog(blog);
    this.blogs.push(fetchedBlog);
    this.blogForm.reset();
  }
  
  deleteBlog(blog: Blog): void {
    this.blogs = this.blogs.filter(b => b !== blog);
    this.service.deleteBlog(blog.id);
  }
}
