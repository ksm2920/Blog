import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.scss']
})
export class SearchBlogComponent implements OnInit {
  blogSearchForm = this.fb.group({
    userId: ['', Validators.required]
  })
  
  blogs: Blog[] = [];
  constructor(
    private service: BlogService,
    private fb: FormBuilder
    ) { }
    
  ngOnInit(): void {
      
  }
  get userId() {
    return this.blogSearchForm.get('userId');
  }
    
  getBlogs(blogSearchForm): void {
    this.service.getBlogs(blogSearchForm.userId)
    .subscribe(blogs => {
      this.blogs = blogs;
      if(blogs.length == 0) {
        document.getElementById("message").innerHTML= "No blogs";
      } else {
        document.getElementById("message").innerHTML= "";
      }
    });
    this.blogSearchForm.reset();
    console.warn("999999999999999999999999999999999999")
  }

  delete(blog: Blog): void {
    this.blogs = this.blogs.filter(b => b !== blog);
    this.service.deleteBlog(blog.id).subscribe(); 
  }

  test(): string {
    return "hello";
  }
}
  