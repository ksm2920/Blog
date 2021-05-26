import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() blog?: Blog;
  constructor(
    private service: BlogService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getBlog(id)
    .subscribe(blog => this.blog = blog);
  }

}
