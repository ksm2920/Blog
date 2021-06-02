import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog?: Blog;
  blogs: Blog[] = [];
 
  constructor(
    private service: BlogService,
    private location: Location,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
    ) { }
    
    ngOnInit(): void {
      this.getBlog();
    }
    
    getBlog(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.service.getBlog(id)
      .subscribe(blog => this.blog = blog);
    }
    
    update(blog: Blog): void {
      this.service.updateBlog(blog)
      .subscribe();
      console.log(blog);
    }

    delete(blog: Blog): void {
      this.blogs = this.blogs.filter(b => b !== blog);
      this.service.deleteBlog(blog.id).subscribe();
      this.goBack();
    }

    goBack() {
      this.location.back();
    }

    saveInput(value) {
      this.blog.title = value;
    }
  }
  