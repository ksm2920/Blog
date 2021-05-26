import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/Blog';
import { Post } from 'src/app/models/Post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
@Input() blog?: Blog;
post: Post;
  constructor(
    private service: BlogService,
    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPost(id)
    .subscribe(post => this.post = post);
  }

}
