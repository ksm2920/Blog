import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  blogSearchForm = this.fb.group({
    userId: [''],
    posts: this.fb.array([
      this.fb.control('')
    ])
  })
  
  blogs: Blog[] = [];
  constructor(
    private service: BlogService,
    private fb: FormBuilder
    ) { }
    
    ngOnInit(): void {
      
    }
    
    getBlogs(blog: Blog): void {
      if(!this.blogs){
        document.getElementById("message").innerHTML= "No blogs";
      }
      this.service.getBlogs(blog.userId)
      .subscribe(blogs => this.blogs = blogs);
    }
  }
  