import { Location } from '@angular/common';
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
posts: Post[] = [];
post: Post;
  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.service.selectedPost$
    .subscribe((post) => {
      this.post = post;
    });
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPost(id)
  }

  updatePost(post: Post): void {
    this.service.updatePost(post);
  }

  goBack() {
    this.location.back();
  }

  saveTitle(value) {
    this.post.title = value;
  }

  saveContent(value) {
    this.post.content = value;
  }
}
