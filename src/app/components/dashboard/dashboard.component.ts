import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  blogs: Blog[] = [];
  constructor(private service: BlogService) { }
  
  ngOnInit(): void {
    this.getBlogs();
  }
  
  getBlogs(): void {
    this.service.getBlogs()
    .subscribe( blogs => this.blogs = blogs.slice(0, 4));
  }
}
